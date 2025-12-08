'use client'; 

import Link from 'next/link';
import { ArrowLeft, Book, ChevronRight, Calculator, Code, Atom, Brain } from 'lucide-react';
import 'katex/dist/katex.min.css';
// DÜZELTME BURADA: Süslü parantez ile InlineMath'i alıyoruz.
import { InlineMath } from 'react-katex'; 

const icons = {
  mathematics: <Calculator size={48} className="text-pink-500" />,
  "computer-science": <Code size={48} className="text-blue-500" />,
  physics: <Atom size={48} className="text-yellow-500" />,
  philosophy: <Brain size={48} className="text-purple-500" />
};

export default function CategoryClient({ data, slug }) {
  if (!data) {
    return <div>Veri bulunamadı</div>; 
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-purple-500/30">
      
      {/* ÜST BANNER */}
      <div className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${data.gradient} opacity-10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2`} />

        <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
          <Link href="/" className="inline-flex items-center text-slate-500 hover:text-white mb-8 transition-colors text-sm">
            <ArrowLeft size={16} className="mr-2" />
            Home
          </Link>
          
          <div className="flex items-start gap-6">
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl shadow-xl">
              {icons[slug] || <Book size={48} />}
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">{data.title}</h1>
              <p className="text-xl text-slate-400 max-w-lg">{data.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* NOTLAR LİSTESİ */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid gap-6">
          {data.notes && data.notes.length > 0 ? (
            data.notes.map((note) => (
              <Link key={note.id} href={`/notes/${note.id}`} className="group">
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-purple-500/10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-slate-500">{note.date}</span>
                      
                      {/* DÜZELTME BURADA: Latex yerine InlineMath kullandık */}
                      {note.formula && (
                        <div className="px-2 py-1 bg-slate-800 rounded text-sm text-purple-300">
                           {/* $ işaretine gerek yok, math prop'una formülü veriyoruz */}
                           <InlineMath math={note.formula} />
                        </div>
                      )}
                      
                    </div>
                    <h3 className="text-xl font-bold text-slate-200 group-hover:text-white mb-1 transition-colors">
                      {note.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{note.excerpt}</p>
                  </div>
                  <ChevronRight className="text-slate-600 group-hover:text-purple-400 transition-colors" />
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-12 border-2 border-dashed border-slate-800 rounded-xl">
              <Book size={48} className="mx-auto text-slate-700 mb-4" />
              <p className="text-slate-500">There are no notes for this section yet. İris is studying... 📚</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}