import React from 'react';
import { Shield, Truck, Leaf, Award } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "طبيعي وحر 100%",
    description: "بدون إضافات أو مواد حافظة - فقط عسل صافي"
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "توصيل مجاني",
    description: "التوصيل بالمجان للطلبات فوق 500 درهم"
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "من مصادر مستدامة",
    description: "يتم جمعه بطريقة أخلاقية من مناحل شريكة"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "جودة عالية",
    description: "عسل حائز على جوائز من نحالين خبراء"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;