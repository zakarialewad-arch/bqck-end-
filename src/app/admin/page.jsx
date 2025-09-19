import React from 'react';
import { supabase } from '../../lib/supabaseClient';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { DollarSign, ShoppingCart } from 'lucide-react';
import SalesChart from '../components/admin/SalesChart'; // <-- 1. جبنا المكون الجديد

const AdminDashboardPage = async () => {
  const { data: orders, error } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    // ... (Error handling remains the same)
  }

  const totalRevenue = orders.reduce((sum, order) => sum + order.total_price, 0);
  const totalOrders = orders.length;

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">لوحة التحكم</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* ... Stat Cards remain the same ... */}
      </div>

      {/* --- 2. زدنا الجزء ديال المبيان هنا --- */}
      <Card>
        <CardHeader>
          <CardTitle>نظرة عامة على المبيعات</CardTitle>
        </CardHeader>
        <CardContent>
          <SalesChart orders={orders} />
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">آخر الطلبات</h2>
        {/* ... Recent Orders table remains the same ... */}
      </div>
    </div>
  );
}

export default AdminDashboardPage;