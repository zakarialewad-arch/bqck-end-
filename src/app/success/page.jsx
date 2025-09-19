'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { useCartStore } from '../store/cartStore'; // جبنا المخزن
import { Button } from '../components/ui/button';

const SuccessPage = () => {
  // 1. جبنا الوظيفة ديال مسح السلة
  const { clearCart } = useCartStore();

  // 2. هاد الكود كيخدم مرة وحدة فاش كتحل الصفحة
  useEffect(() => {
    // كنخويو السلة أوتوماتيكياً
    clearCart();
  }, [clearCart]); // <-- Dependency array ensures this runs once

  return (
    <main className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="bg-white p-10 rounded-lg shadow-xl flex flex-col items-center">
        <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
        <h1 className="text-3xl font-extrabold text-amber-900 mb-4">
          شكراً لك على طلبيتك!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          لقد تلقينا طلبك بنجاح وسنقوم بمعالجته في أقرب وقت ممكن.
        </p>
        <Button asChild size="lg">
          <Link href="/products">العودة إلى المنتجات</Link>
        </Button>
      </div>
    </main>
  );
};

export default SuccessPage;