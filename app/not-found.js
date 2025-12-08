// app/not-found.js
'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center p-4 overflow-hidden relative">
      
      {/* Arka Planda Dönen Gezegenimsi Şekil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl -z-10 animate-pulse" />

      {/* Animasyonlu 404 Yazısı */}
      <motion.h1 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4"
      >
        404
      </motion.h1>

      {/* Esprili Mesaj */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        Houston, bir problemimiz var! 🐱
      </h2>
      
      <p className="text-slate-400 max-w-lg mb-10 text-lg">
        Aradığın sayfa bir kara deliğe düşmüş olabilir veya Schrödinger'in kedisi onu yemiş olabilir. 
        Şu an bu sayfa hem var hem de yok.
      </p>

      {/* Kedi Emojisi veya ASCII Sanatı (Hareketli) */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-6xl mb-10 cursor-help"
        title="Miyav?"
      >
        🧑‍🚀🐈
      </motion.div>

      {/* Butonlar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/"
          className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-transform hover:scale-105"
        >
          <Home size={20} />
          Go Back to Home
        </Link>
        
        <button 
          onClick={() => window.history.back()}
          className="flex items-center justify-center gap-2 px-8 py-3 border border-slate-700 text-slate-300 rounded-full font-medium hover:border-purple-500 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          Geri Git
        </button>
      </div>

    </div>
  );
}