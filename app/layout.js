import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "هيفاء صالح اليامي | ملف الأعمال",
  description: "ملف أعمال هيفاء صالح اليامي في صناعة المحتوى والعلاقات العامة والاتصال المؤسسي.",
};

export default function RootLayout({ children }) {
  return <html lang="ar" dir="rtl"><body><Navbar />{children}<Footer /></body></html>;
}
