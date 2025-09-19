import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function middleware(request) {
  // 1. كنصاوبو اتصال مؤقت مع Supabase فالسيرفر
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return request.cookies.get(name)?.value;
        },
      },
    }
  );

  // 2. كنجيبو المستخدم الحالي
  const { data: { user } } = await supabase.auth.getUser();

  // 3. كنجيبو البروفايل ديالو باش نعرفو الدور (role) ديالو
  let userRole = null;
  if (user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();
    userRole = profile?.role;
  }

  // 4. كنطبقو القاعدة ديالنا
  // إيلا المستخدم حاول يدخل لشي صفحة كتبدا بـ /admin وهو ماشي admin...
  if (request.nextUrl.pathname.startsWith('/admin') && userRole !== 'admin') {
    // كنرجعوه للصفحة الرئيسية
    return NextResponse.redirect(new URL('/', request.url));
  }

  // إيلا كان كلشي مزيان، كنخليوه يكمل طريقه
  return NextResponse.next();
}

// 5. كنحددو فين غادي يخدم هاد الحارس الأمني
export const config = {
  matcher: ['/admin/:path*'], // غادي يخدم على جميع الصفحات اللي كتبدا بـ /admin
};