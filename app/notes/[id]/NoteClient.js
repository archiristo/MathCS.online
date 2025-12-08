// app/notes/[id]/NoteClient.js
'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, BookOpen } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex'; // BlockMath büyük formüller için

export default function NoteClient({ note }) {
  if (!note) return <div className="text-white text-center mt-20">Not found</div>;

  return (
    <article className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-purple-500/30 pb-20">
      
      {/* İLERLEME ÇUBUĞU (Scroll Progress - Opsiyonel ama şık) */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-50 w-full" />

      {/* HEADER / BAŞLIK KISMI */}
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-8 border-b border-slate-800 mb-12">
        <Link href={`/${note.category.toLowerCase().replace(' ', '-')}`} className="inline-flex items-center text-slate-500 hover:text-white mb-6 transition-colors text-sm">
          <ArrowLeft size={16} className="mr-2" />
          Go back to {note.category}
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {note.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 font-mono">
          <span className="flex items-center gap-2 text-purple-400">
            <Calendar size={14} /> {note.date}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-700" />
          {note.tags.map(tag => (
            <span key={tag} className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded border border-slate-800">
              <Tag size={12} /> {tag}
            </span>
          ))}
        </div>
      </div>

      {/* İÇERİK KISMI (Burada Markdown benzeri yapı kuruyoruz) */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="prose prose-invert prose-lg prose-purple max-w-none">
          
          {note.content.map((block, index) => {
            // Metin ise
            if (block.type === 'text') {
              return <p key={index} className="mb-6 leading-relaxed text-slate-300">{block.value}</p>;
            }
            // Başlık ise
            if (block.type === 'heading') {
              return <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">{block.value}</h2>;
            }
            // Matematik Formülü ise
            if (block.type === 'formula') {
              return (
                <div key={index} className="my-8 p-6 bg-slate-900 rounded-xl border border-slate-800 overflow-x-auto flex justify-center">
                  <BlockMath math={block.value} />
                </div>
              );
            }
            return null;
          })}

        </div>
        
        {/* ALT BİLGİ */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 italic flex items-center justify-center gap-2">
            <BookOpen size={16} />
            Thanks for reading this. Stay informed.
          </p>
        </div>
      </div>

    </article>
  );
}