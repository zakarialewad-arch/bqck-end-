'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '../../store/cartStore';
import { Button } from '../components/ui/button';
import { Trash2, Plus, Minus } from 'lucide-react';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity } = useCartStore();
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-center text-amber-900 mb-8">
        سلة المشتريات
      </h1>

      {items.length === 0 ? (
        // --- هاد الجزء هو اللي كان ناقص ---
        <div className="text-center py-20 bg-white rounded-lg shadow-md">
          <p className="text-xl text-gray-600 mb-6">سلتك فارغة حالياً.</p>
          <Button asChild size="lg">
            <Link href="/products">اكتشف منتجاتنا الرائعة</Link>
          </Button>
        </div>
        // --- نهاية الجزء اللي كان ناقص ---
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-md gap-4">
                <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md object-cover" />
                <div className="flex-grow">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-600">{item.price} درهم</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Button size="icon" variant="ghost" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                    <span className="w-10 text-center font-bold text-lg">{item.quantity}</span>
                    <Button size="icon" variant="ghost" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button size="icon" variant="ghost" className="text-red-500 hover:bg-red-50" onClick={() => removeFromCart(item.id)}>
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-bold mb-4">ملخص الطلب</h2>
            <div className="flex justify-between mb-2">
              <span>المجموع الفرعي</span>
              <span>{totalPrice.toFixed(2)} درهم</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>التوصيل</span>
              <span>مجاني</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-lg">
              <span>المجموع الإجمالي</span>
              <span>{totalPrice.toFixed(2)} درهم</span>
            </div>
            <Button asChild size="lg" className="w-full mt-6">
              <Link href="/checkout">الانتقال إلى الدفع</Link>
            </Button>
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;