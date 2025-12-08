// app/projects/[slug]/ProjectClient.js
'use client'; // Client Component olduğu için bu şart

import Link from 'next/link';
import { ArrowLeft, Calendar, Github, Play } from 'lucide-react';
import VideoPlayer from '@/components/VideoPlayer'; // Video Player'ı buraya çağırıyoruz

export default function ProjectClient({ project }) {
  // Eğer proje bulunamazsa
  if (!project) {
    return <div className="text-center text-white mt-20">Proje bulunamadı...</div>;
  }

  return (
    <article className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-purple-500/30">
      
      {/* Üst Banner (Hero) */}
      <div className="relative w-full h-64 md:h-80 bg-gradient-to-b from-purple-900/20 to-slate-950 border-b border-slate-800 flex flex-col justify-end p-8 md:p-16">
        <Link href="/projects" className="absolute top-8 left-8 flex items-center text-slate-400 hover:text-white transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Go back to Lab
        </Link>
        
        <div className="max-w-3xl">
          <div className="flex gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-slate-800/80 border border-slate-700 text-purple-300">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {project.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-slate-400 font-mono">
            <span className="flex items-center gap-2">
              <Calendar size={14} /> {project.date}
            </span>
            <a href={project.githubUrl} className="flex items-center gap-2 hover:text-white transition-colors">
              <Github size={14} /> GitHub
            </a>
            <a href={project.videoUrl} className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <Play size={14} /> Video
            </a>
          </div>
        </div>
      </div>

      {/* İçerik Alanı */}
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        
        {/* VİDEO PLAYER BURADA */}
        {project.videoId && (
           <VideoPlayer videoId={project.videoId} />
        )}

        <div className="prose prose-invert prose-lg prose-purple">
          {project.content}
        </div>
      </div>

    </article>
  );
}