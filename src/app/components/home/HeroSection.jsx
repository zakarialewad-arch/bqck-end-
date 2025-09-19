import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-amber-900 leading-tight mb-6">
              عسل طبيعي وحر
              <span className="block text-amber-600">ذهبي وصافي</span>
            </h1>
            <p className="text-lg text-amber-800 mb-8 leading-relaxed">
              اكتشف أجود تشكيلة من أنواع العسل الفاخرة من مختلف أنحاء المغرب. كل قطرة تم اختيارها بعناية لجودتها الاستثنائية ونكهتها الفريدة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600">
                <Link href="/products">
                  تسوق الآن <ArrowRight className="mr-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">اكتشف المزيد</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/banner-about.jpg" // الصورة اللي ديجا قادينا
                alt="عسل مغربي فاخر"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-amber-600">100%</div>
              <div className="text-sm text-gray-600">طبيعي وحر</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;