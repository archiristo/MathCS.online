import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedHeader from '../components/AnimatedHeader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MathCS.online",
  description: "Modern learning platform by archiristo!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimatedHeader />
        <main className="pt-16">
        {children}</main>
      </body>
    </html>
  );
}
