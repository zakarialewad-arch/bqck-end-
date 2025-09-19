'use client';

import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient'; // تأكد من هاد المسار
import { Button } from '../components/ui/button';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      setError(`خطأ: ${error.message}`);
    } else if (data.user && data.user.identities && data.user.identities.length === 0) {
      setError('هذا المستخدم موجود بالفعل.');
    } else {
      setMessage('تم إنشاء حسابك بنجاح! المرجو تأكيد بريدك الإلكتروني.');
    }
    setLoading(false);
  };

  return (
    <main className="max-w-md mx-auto px-4 py-20">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-amber-900">إنشاء حساب جديد</h1>
        <form onSubmit={handleSignUp}>
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
              minLength="6"
              placeholder="6 أحرف على الأقل"
            />
          </div>
          <Button type="submit" className="w-full py-3 text-lg" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : 'إنشاء الحساب'}
          </Button>
        </form>
        {message && <p className="mt-4 text-center text-sm text-green-600 bg-green-50 p-3 rounded-md">{message}</p>}
        {error && <p className="mt-4 text-center text-sm text-red-600 bg-red-50 p-3 rounded-md">{error}</p>}
        <p className="mt-6 text-center text-sm text-gray-600">
          لديك حساب بالفعل؟{' '}
          <Link href="/login" className="font-semibold text-amber-600 hover:underline">
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignUpPage;