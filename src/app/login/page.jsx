'use client';

import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { Button } from '../components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // <-- جبنا أداة جديدة
import { Loader2 } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // <-- باش نقدرو ندوزو لصفحة أخرى

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setError('البريد الإلكتروني أو كلمة المرور غير صحيحة.');
    } else {
      // إيلا كان كلشي صحيح، كنديو المستخدم للصفحة الرئيسية
      router.push('/');
      router.refresh(); // <-- هادي مهمة باش الهيدر يتبدل
    }
    setLoading(false);
  };

  return (
    <main className="max-w-md mx-auto px-4 py-20">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-amber-900">تسجيل الدخول</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              البريد الإلكتروني
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
              كلمة المرور
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          <Button type="submit" className="w-full py-3 text-lg" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : 'دخول'}
          </Button>
        </form>
        {error && <p className="mt-4 text-center text-sm text-red-600 bg-red-50 p-3 rounded-md">{error}</p>}
        <p className="mt-6 text-center text-sm text-gray-600">
          ليس لديك حساب؟{' '}
          <Link href="/signup" className="font-semibold text-amber-600 hover:underline">
            أنشئ حساباً
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;