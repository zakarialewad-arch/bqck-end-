'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // <-- 1. جبنا الأداة ديال الحركة
import { Button } from './ui/button';
import Rating from './Rating';

const ProductCard = ({ product }) => {
  return (
    // 2. حولنا الـ Link لـ motion.div باش نقدرو نحركوه
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
    >
      <Link href={`/products/${product.id}`} className="group">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
          <div className="relative w-full h-56">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-2xl font-bold text-amber-600">{product.price} درهم</span>
              <Rating value={product.rating} />
            </div>
            <Button disabled className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-white">
              شاهد التفاصيل
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;