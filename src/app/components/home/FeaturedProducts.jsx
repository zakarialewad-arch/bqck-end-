'use client'; // هاد المكون خاصو يكون كليان حيت فيه Framer Motion

import React from 'react';
import { supabase } from '../../../lib/supabaseClient';
import ProductCard from '../ProductCard';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// بما أننا دابا كنجيبو المنتجات من قاعدة البيانات، من الأحسن نجيبوهم هنا
const FeaturedProducts = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await supabase
        .from('products')
        .select('*')
        .limit(3); // كنجيبو غير 3
      if (data) {
        setProducts(data);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">منتجاتنا المميزة</h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            مختارات من أفضل أنواع العسل وأكثرها طلباً، كل نوع يتميز بمذاقه الفريد وفوائده الصحية.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600">
            <Link href="/products">
              شاهد كل المنتجات <ArrowRight className="mr-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;