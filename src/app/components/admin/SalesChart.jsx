'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SalesChart = ({ orders }) => {
  // 1. كنجمعو البيانات ديال كل نهار
  const data = orders.reduce((acc, order) => {
    const date = new Date(order.created_at).toLocaleDateString('ar-MA');
    if (!acc[date]) {
      acc[date] = { date, total: 0 };
    }
    acc[date].total += order.total_price;
    return acc;
  }, {});

  // 2. كنحولو البيانات للائحة وكنرتبوها بالتاريخ
  const chartData = Object.values(data).sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip formatter={(value) => `${value} درهم`} />
          <Legend />
          <Line type="monotone" dataKey="total" name="المداخيل اليومية" stroke="#c08401" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;