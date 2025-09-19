import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">العسل الذهبي</h3>
            <p className="text-sm">
              متجرك المتخصص في أجود أنواع العسل المغربي الطبيعي. مباشرة من مناحل سوس ماسة إلى مائدتك.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-amber-400"><Facebook /></a>
              <a href="#" className="hover:text-amber-400"><Twitter /></a>
              <a href="#" className="hover:text-amber-400"><Instagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="hover:text-amber-400">المنتجات</Link></li>
              <li><Link href="/about" className="hover:text-amber-400">من نحن</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-amber-400" />
                <span>تزنيت، سوس ماسة، المغرب</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-amber-400" />
                <span dir="ltr">+212 6 00 00 00 00</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-amber-400" />
                <span>contact@3sel-dahabi.ma</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} العسل الذهبي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;