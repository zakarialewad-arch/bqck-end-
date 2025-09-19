'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, User, LogOut } from 'lucide-react';
import { useCartStore } from '../../../store/cartStore';
import { supabase } from '../../../lib/supabaseClient';
import { useRouter } from 'next/navigation';

const Header = () => {
  const { items } = useCartStore();
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!error) {
        setUser(data.user);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/');
    router.refresh();
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm-px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-3xl font-bold text-amber-800 hover:text-amber-600 transition-colors">
            العسل الذهبي
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-lg font-medium text-gray-700 hover:text-amber-600">الرئيسية</Link>
            <Link href="/products" className="text-lg font-medium text-gray-700 hover:text-amber-600">المنتجات</Link>
            <Link href="/about" className="text-lg font-medium text-gray-700 hover:text-amber-600">من نحن</Link>
            <Link href="/contact" className="text-lg font-medium text-gray-700 hover:text-amber-600">اتصل بنا</Link>
          </nav>
          <div className="flex items-center gap-6">
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-7 h-7 text-gray-700 hover:text-amber-600 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-amber-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                  {totalItems}
                </span>
              )}
            </Link>

            {user ? (
              // إيلا كان المستخدم مسجل دخولو
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700 hidden sm:block">{user.email}</span>
                <button onClick={handleLogout} className="text-gray-700 hover:text-amber-600 transition-colors" title="تسجيل الخروج">
                  <LogOut className="w-6 h-6" />
                </button>
              </div>
            ) : (
              // إيلا ماكانش مسجل
              <Link href="/login" className="text-gray-700 hover:text-amber-600 transition-colors" title="تسجيل الدخول">
                <User className="w-7 h-7" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;