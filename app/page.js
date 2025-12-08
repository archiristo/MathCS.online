// app/page.js (veya pages/index.js)
import Link from 'next/link';
import ParticlesBackground from '@/components/ParticlesBackground'; // Yolu kendine göre düzelt
import { Youtube, FlaskConical } from 'lucide-react'; // İkonlarımız

export default function Home() {
  return (
    // Ana kapsayıcı: Koyu arka plan, tam ekran yükseklik.
    <main className="relative flex min-h-screen flex-col items-center justify-center text-white overflow-hidden">
      
      {/* --- 1. KATMAN: ARKA PLAN --- */}
      {/* Hazırladığımız parçacık efektini buraya çağırıyoruz. */}
      <ParticlesBackground />

      {/* --- 2. KATMAN: İÇERİK --- */}
      {/* z-10 vererek parçacıkların önüne geçmesini sağlıyoruz. */}
      <div className="z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        
        {/* Ana Başlık */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 mb-6 leading-tight">
          The Intersection of Math, Minds, and Machines.
        </h1>

        {/* Alt Başlık */}
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
          Hi, I'm <span className="text-purple-400 font-semibold">İris, as known as archiristo</span>. 
          I am an engineering candidate who writes code, loves mathematics, and questions the "why" of artificial intelligence.<span className="block mt-2 text-sm text-slate-500">Welcome to where logic meets imagination.</span>
        </p>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Birinci Buton (Vurgulu) */}
          <a 
            href="https://youtube.com/@archiristo" // Kendi kanal linkini koy
            target="_blank"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25"
          >
            <Youtube size={20} />
            Watch My Videos
          </a>

          {/* İkinci Buton - Artık Çalışıyor! */}
<Link 
  href="/projects" 
  className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-slate-700 hover:border-purple-500 text-slate-300 hover:text-white rounded-full font-medium transition-all bg-slate-900/50 backdrop-blur-sm"
>
  <FlaskConical size={20} />
  Discover The Lab
</Link>
        </div>

      </div>
    </main>
  );
}