import AnimatedHeader from '@/components/AnimatedHeader';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer'; // <--- 1. IMPORT ET

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MathCS.online by archiristo',
  description: 'Math and CS Journal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        
        {/* Navbar'ın muhtemelen buradadır */}
        <AnimatedHeader />

        {/* Sayfa İçerikleri */}
        {children}

        {/* Footer'ı en alta ekliyoruz */}
        <Footer />  {/* <--- 2. BURAYA EKLE */}
        
      </body>
    </html>
  );
}