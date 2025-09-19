import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabaseClient';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req) {
  const buf = await req.text();
  const sig = req.headers.get('stripe-signature');

  let event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // كنتصنتو غير للحدث ديال إكمال الدفع
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // كنجيبو معلومات الطلبية من Stripe
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

    // كنصاوبو الطلبية باش نسجلوها ف Supabase
    const orderData = {
      customer_details: session.customer_details,
      products: lineItems.data.map(item => ({
        name: item.description,
        quantity: item.quantity,
        price: item.price.unit_amount / 100,
      })),
      total_price: session.amount_total / 100,
      status: 'Pending',
      stripe_session_id: session.id,
    };

    // كنسجلو الطلبية فالجدول ديالنا orders
    const { data, error } = await supabase
      .from('orders')
      .insert([orderData]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to save order to database' }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}