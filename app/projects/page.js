// app/projects/page.js
'use client';

import { ArrowLeft, Play, Github, Code2 } from 'lucide-react';
import Link from 'next/link';

// Örnek Proje Verileri (Burası senin veritabanın gibi)
const projects = [
  {
    id: 1,
    slug: "hawk-vs-dove",
    title: "Hawk vs Dove Simulation",
    description: "An evolutionary game theory simulation in Python.",
    tags: ["Python", "Game Theory", "Simulation"],
    videoUrl: "https://youtube.com/...", // Video linkin
    githubUrl: "https://github.com/...",  // GitHub linkin
    color: "from-red-500 to-orange-500", // Kartın degrade rengi
  },
  {
    id: 2,
    slug: "cat-computer-vision",
    title: "Computer Vision Explained with Cats",
    description: "Cats and Computer Vision: How machines see our feline friends.",
    tags: ["OpenCV", "AI", "Cats"],
    videoUrl: "#",
    githubUrl: "#",
    color: "from-blue-500 to-cyan-500",
  },
  // Yeni projelerini buraya ekleyeceksin...
];

<Link href={`/projects/${projects.slug}`} className="block group relative ...">
   {/* Kart Tasarımı İçeriği Buraya */}
</Link>

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 md:p-16 font-sans">
      
      {/* Geri Dön Butonu */}
      <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white mb-12 transition-colors">
        <ArrowLeft size={20} className="mr-2" />
        Go Back
      </Link>

      {/* Başlık Kısmı */}
      <header className="mb-16 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          The Lab.
        </h1>
        <p className="text-xl text-slate-300">
          This is my digital playground. It's where the theories I explain in my videos are put into code and experiments are conducted. Dive in to see simulations, visualizations, and projects that bring abstract concepts to life.
        </p>
      </header>

      {/* Proje Kartları Grid Yapısı */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all hover:shadow-2xl hover:shadow-purple-900/20">
            
            {/* Kartın Üstündeki Renkli Çizgi */}
            <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />

            <div className="p-6">
              {/* Etiketler */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Başlık & Açıklama */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                <a href={project.slug}>{project.title}</a>
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Butonlar */}
              <div className="flex items-center gap-4 mt-auto">
                <a href={project.videoUrl} target="_blank" className="flex items-center text-sm font-semibold text-white hover:text-purple-400 transition-colors">
                  <Play size={16} className="mr-2 fill-current" />
                  Watch
                </a>
                <a href={project.githubUrl} target="_blank" className="flex items-center text-sm font-semibold text-slate-400 hover:text-white transition-colors">
                  <Github size={16} className="mr-2" />
                  Source Code
                </a>
              </div>
            </div>
            
            {/* Hover Efekti için Arka Plan Işıltısı */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}

        {/* Yeni Proje Eklenecek Kartı (Placeholder) */}
        <div className="border-2 border-dashed border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-slate-600 hover:border-slate-600 hover:text-slate-400 transition-all cursor-pointer min-h-[300px]">
          <Code2 size={48} className="mb-4 opacity-50" />
          <span className="font-mono text-sm">New experiment coming soon...</span>
        </div>
      </div>

    </div>
  );
}