'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Loader2, Mail, Phone, MapPin } from 'lucide-react';
import { Toaster, toast } from 'sonner';

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // هنا غادي تجي الوظيفة ديال إرسال الإيميل فالمستقبل
    setTimeout(() => {
      setLoading(false);
      toast.success('تم إرسال رسالتك بنجاح! شكراً لك.');
      e.target.reset();
    }, 1500);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <Toaster richColors position="top-center" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold text-center text-amber-900 mb-4">
          تواصل معنا
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          عندك أي سؤال أو استفسار؟ نحن هنا للمساعدة.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <input type="text" placeholder="الاسم الكامل" required className="w-full px-4 py-2 border rounded-md" />
                <input type="email" placeholder="البريد الإلكتروني" required className="w-full px-4 py-2 border rounded-md" />
                <textarea placeholder="رسالتك" rows="5" required className="w-full px-4 py-2 border rounded-md"></textarea>
                <Button type="submit" disabled={loading} className="w-full text-lg py-3">
                  {loading ? <Loader2 className="animate-spin" /> : 'إرسال الرسالة'}
                </Button>
              </div>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-amber-600 mt-1" />
              <div>
                <h3 className="font-bold text-lg">العنوان</h3>
                <p className="text-gray-700">تزنيت، سوس ماسة، المغرب</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-8 h-8 text-amber-600 mt-1" />
              <div>
                <h3 className="font-bold text-lg">الهاتف</h3>
                <p className="text-gray-700" dir="ltr">+212 6 00 00 00 00</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-8 h-8 text-amber-600 mt-1" />
              <div>
                <h3 className="font-bold text-lg">البريد الإلكتروني</h3>
                <p className="text-gray-700">contact@3sel-dahabi.ma</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
};
export default ContactPage;