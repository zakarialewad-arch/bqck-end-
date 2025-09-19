import React from 'react';
import Image from 'next/image';
import { supabase } from '../../../lib/supabaseClient';
import ProductActions from '../../components/ProductActions';
import Rating from '../../components/Rating';

export default async function ProductDetailsPage({ params }) {
  
  // كنحولو الـ id اللي جاي من العنوان لرقم احتياطاً
  const productId = Number(params.id);

  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', productId) // <-- استعملنا الرقم هنا باش نتفاداو المشاكل
    .single();

  if (error || !product) {
    return <div className="text-center py-20 text-xl">المنتج غير موجود أو حدث خطأ.</div>;
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* جهة الصورة */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-96">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* جهة التفاصيل */}
        <div className="flex flex-col">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-amber-900">{product.name}</h1>
          <div className="mb-4">
            <Rating value={product.rating} />
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
          
          <div className="bg-amber-50 rounded-lg p-4 mb-6">
            <span className="text-3xl font-bold text-amber-600">{product.price} درهم</span>
            <span className="text-gray-500 text-sm ml-2">/ للكيلوغرام</span>
          </div>
          
          <ProductActions product={product} />
        </div>
      </div>
    </main>
  );
}