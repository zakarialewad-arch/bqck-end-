'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Heart } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-4xl lg:text-5xl font-extrabold text-center text-amber-900 mb-8" variants={itemVariants}>
         رحلة العسل الذهبي من قلب سوس
      </motion.h1>

      <motion.div className="relative w-full h-80 rounded-xl overflow-hidden shadow-2xl mb-12" variants={itemVariants}>
        <Image 
          src="/images/test-image.jpg" // الصورة اللي حطينا ف public
          alt="مناحل العسل في منطقة سوس"
          fill
          style={{ objectFit: 'cover' }}
        />
      </motion.div>

      <motion.p className="text-lg text-center text-gray-700 leading-relaxed mb-12" variants={itemVariants}>
        في "العسل الذهبي"، نحن لا نبيع العسل فقط، بل نشارككم قصة شغف وتراث متجذر في أراضي سوس ماسة الخصبة. بدأت رحلتنا من تقدير عميق لتقاليد تربية النحل العريقة في منطقتنا، ورغبة في تقديم كنوزها الطبيعية إلى كل بيت في المغرب.
      </motion.p>
      
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" variants={containerVariants}>
        <motion.div className="bg-amber-50 p-6 rounded-lg shadow-lg" variants={itemVariants}>
          <Leaf className="w-12 h-12 mx-auto text-amber-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">طبيعي 100%</h3>
          <p className="text-gray-600">عسلنا طبيعي وخام، مباشرة من الخلية إلى مائدتك، بدون أي إضافات.</p>
        </motion.div>
        <motion.div className="bg-amber-50 p-6 rounded-lg shadow-lg" variants={itemVariants}>
          <Award className="w-12 h-12 mx-auto text-amber-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">جودة فائقة</h3>
          <p className="text-gray-600">نتبع أعلى معايير الجودة في كل مرحلة، من رعاية النحل حتى التعبئة.</p>
        </motion.div>
        <motion.div className="bg-amber-50 p-6 rounded-lg shadow-lg" variants={itemVariants}>
          <Heart className="w-12 h-12 mx-auto text-amber-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">شغف وتراث</h3>
          <p className="text-gray-600">كل قطرة من عسلنا تحمل قصة شغف النحالين وتراث منطقة سوس العريقة.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default AboutPage;