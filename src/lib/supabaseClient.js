import { createClient } from '@supabase/supabase-js'

// قراءة المتغيرات من ملف .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// إنشاء وتصدير الـ client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)