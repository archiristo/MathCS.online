// app/about/page.js
'use client';

import { motion } from 'framer-motion';
import { BookOpen, Code2, GraduationCap, Heart, Cpu, Coffee } from 'lucide-react';
import Link from 'next/link';

// ZAMAN ÇİZELGESİ VERİLERİ
const timelineEvents = [
  {
    year: "2007",
    title: "Hello World!",
    description: "I born at 2007. When I was 2, my first encounter with computers. I wasn't coding at the time, but I was trying to make a connection between HTML tags and toy trains.",
    icon: <Code2 size={20} />,
    color: "bg-blue-500",
  },

  {
    year: "2024",
    title: "Saying Hi to University!",
    description: "The AI ​​Engineering adventure has officially begun. Data structures, probability, and sleepless nights. Coffee consumption: Up 300%.",
    icon: <GraduationCap size={20} />,
    color: "bg-indigo-500",
  },
  {
    year: "2025",
    title: "Became an Undergraduate Research Assistant!",
    description: "Currently working as an Undergraduate Research Assistant at Adana Alparslan Türkeş Bilim ve Teknoloji Üniversitesi. Diving deep into AI research and contributing to cutting-edge projects.",
    icon: <Cpu size={20} />,
    color: "bg-pink-500",
  },
  {
    year: "2025",
    title: "Being a Visiting Student.",
    description: "I am currently a visiting student at Çukurova University Mathematics Department. Exploring the fascinating world of mathematics and its applications in computer science.",
    icon: <BookOpen size={20} />,
    color: "bg-cyan-500",
  },
  {
    year: "2025",
    title: "MathCS.online & YouTube",
    description: "My childhood dream has come true. Sharing what I know is the best way to learn. Now I'm both learning and teaching.",
    icon: <Heart size={20} />,
    color: "bg-purple-500",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans py-20 px-4 overflow-hidden">
      
      {/* BAŞLIK */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My Journey.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            A story that extends from the south of Turkey to lines of code, from book pages to artificial intelligence algorithms.</p>
        </motion.div>
      </div>

      {/* ZAMAN ÇİZELGESİ (TIMELINE) */}
      <div className="max-w-4xl mx-auto relative">
        
        {/* Ortadaki Dikey Çizgi */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent" />

        {/* Olaylar Döngüsü */}
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>

        {/* Kapanış Notu */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center justify-center p-3 bg-slate-900 rounded-full border border-slate-800 mb-4">
            <Coffee className="text-yellow-500 mr-2" />
            <span className="text-sm">Still going on...</span>
          </div>
          <p className="text-slate-500">This story does not end here, new lines continue to be written.</p>
        </motion.div>

      </div>
    </div>
  );
}

// Her bir zaman çizelgesi öğesi için ayrı bileşen
function TimelineItem({ event, index }) {
  const isEven = index % 2 === 0; // Çift mi tek mi? (Sağ/Sol ayrımı için)

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative flex items-center justify-between md:justify-normal ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* BOŞLUK (Masaüstünde hizalamak için) */}
      <div className="hidden md:block w-5/12" />

      {/* ORTA NOKTA (İkon) */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-slate-950 border-2 border-slate-800 z-10">
        <div className={`w-3 h-3 rounded-full ${event.color} shadow-[0_0_10px_currentColor]`} />
      </div>

      {/* İÇERİK KARTI */}
      <div className="w-full pl-12 md:pl-0 md:w-5/12 p-4">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl hover:border-purple-500/30 transition-colors group">
          
          <div className="flex items-center gap-3 mb-2">
            <span className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${event.color.replace('bg-', 'from-').replace('500', '400')} to-white`}>
              {event.year}
            </span>
            <div className="p-1.5 rounded-lg bg-slate-800 text-slate-300 group-hover:text-white transition-colors">
              {event.icon}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
          <p className="text-slate-400 leading-relaxed text-sm">
            {event.description}
          </p>
        </div>
      </div>

    </motion.div>
  );
}