import { NextResponse } from 'next/server';
// 1. جبنا المكتبة ديال Stripe وخدمناها بالمفتاح السري
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    // 2. خدينا المنتجات من الطلب اللي جاي من الواجهة الأمامية
    const { items } = await request.json();

    // 3. حولنا المنتجات للشكل اللي كيفهمو Stripe
    const lineItems = items.map(item => ({
      price_data: {
        currency: 'mad', // العملة هي الدرهم المغربي
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: item.price * 100, // الثمن بالسنتم
      },
      quantity: item.quantity,
    }));

    // 4. صاوبنا جلسة دفع جديدة مع Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/cart`,
    });

    // 5. رجعنا الرابط ديال جلسة الدفع للواجهة الأمامية
    return NextResponse.json({ url: session.url });

  } catch (error) {
    console.error('Error creating Stripe session:', error);
    return NextResponse.json({ error: 'Error creating checkout session' }, { status: 500 });
  }
}