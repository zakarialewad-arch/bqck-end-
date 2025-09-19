import React from 'react';
// هاد المسار دابا ولا خدام حيت البنية صحيحة
import { supabase } from '../../lib/supabaseClient'; 
import ProductCard from '../components/ProductCard';

export default async function ProductsPage() {

  // كنجيبو البيانات من جدول 'products' ف Supabase
  const { data: products, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    console.error('Error fetching products:', error);
    return <p className="text-center py-20">حدث خطأ في جلب البيانات...</p>;
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-amber-900 tracking-tight">
          اكتشف جميع منتجاتنا
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-amber-700">
          كل قطرة عسل هي رحلة من النكهة والجودة، من قلب سوس ماسة إليك.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}