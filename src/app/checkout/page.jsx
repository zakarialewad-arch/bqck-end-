'use client';

import React, { useState } from 'react';
import { useCartStore } from '../../store/cartStore';
import { Button } from '../components/ui/button';
import { Loader2 } from 'lucide-react';

const CheckoutPage = () => {
  const { items } = useCartStore();
  const [loading, setLoading] = useState(false);

  // حسبنا الثمن الإجمالي
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  // هاد الوظيفة كتخدم ملي كنضغطو على زر الدفع
  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });

      const { url } = await response.json();
      if (url) {
        // إيلا كلشي داز مزيان، كنديو المستخدم لصفحة الدفع ديال Stripe
        window.location.href = url;
      }
    } catch (error) {
      console.error('Failed to create checkout session:', error);
      setLoading(false);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-center text-amber-900 mb-8">
        إتمام الطلب
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* معلومات الدفع */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">معلومات التوصيل</h2>
          {/* ... تقدر تزيد هنا فورم ديال العنوان ... */}
          <div className="text-gray-600">
            <p>هنا ستتم إضافة حقول لجمع عنوان الشحن.</p>
          </div>
        </div>

        {/* ملخص الطلب */}
        <div className="bg-amber-50 p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-bold mb-4">ملخص طلبك</h2>
            {items.map(item => (
              <div key={item.id} className="flex justify-between text-sm mb-2">
                <span>{item.name} x {item.quantity}</span>
                <span>{(item.price * item.quantity).toFixed(2)} درهم</span>
              </div>
            ))}
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-lg">
              <span>المجموع الإجمالي</span>
              <span>{totalPrice.toFixed(2)} درهم</span>
            </div>
            <Button 
              size="lg" 
              className="w-full mt-6" 
              onClick={handleCheckout} 
              disabled={loading || items.length === 0}
            >
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'ادفع الآن'}
            </Button>
          </div>
      </div>
    </main>
  );
};

export default CheckoutPage;