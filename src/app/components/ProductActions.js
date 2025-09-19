'use client'; // <-- ضروري حيت فيه تفاعل مع المستخدم

import React from 'react';
import { useCartStore } from '../../store/cartStore'; // <-- جبنا العقل ديال السلة
import { Button } from './ui/button';
import { Toaster, toast } from 'sonner'; // <-- جبنا الأداة ديال الرسائل

// هاد المكون كياخد المنتج كامل كـ prop
const ProductActions = ({ product }) => {
  // جبنا الوظيفة ديال 'addToCart' من المخزن ديالنا
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart(product);
    // كنعرضو رسالة زوينة للمستخدم
    toast.success(`${product.name} تزاد فالسلة ديالك!`);
  };

  return (
    <>
      {/* هادي ضرورية باش الرسائل يخدمو */}
      <Toaster richColors position="top-center" /> 
      <Button 
        size="lg" 
        className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-lg"
        onClick={handleAddToCart}
      >
        أضف إلى السلة
      </Button>
    </>
  );
};

export default ProductActions;