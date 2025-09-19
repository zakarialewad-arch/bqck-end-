import "./globals.css";
import React from 'react';

export const metadata = {
  title: "متجر العسل",
  description: "أفضل أنواع العسل الطبيعي",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>
        <header style={{
          backgroundColor: "#ffc107",
          padding: "20px",
          textAlign: "center",
          color: "white"
        }}>
          <h1>متجر العسل المغربي</h1>
        </header>

        <main style={{ minHeight: "80vh" }}>
          {children}
        </main>

        <footer style={{
          backgroundColor: "#f4f4f4",
          padding: "20px",
          textAlign: "center"
        }}>
          <p>&copy; {new Date().getFullYear()} متجر العسل المغربي. جميع الحقوق محفوظة.</p>
        </footer>
      </body>
    </html>
  );
}