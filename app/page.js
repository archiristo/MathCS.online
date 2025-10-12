import Link from 'next/link'; 
import AnimatedHeader from '../components/AnimatedHeader';
import AutoCarousel from '@/components/AutoCarousel';
export default function HomePage() {
  return (
    // min-h-screen: Ekranın en az yüksekliği kadar yer kapla
    // bg-gray-900: Koyu gri arka plan
    // text-white: Metin rengi beyaz
    <div className="min-h-screen text-white flex flex-col items-center py-10 px-4">
      
      {/* 1. Header Bölümü */}
      <AnimatedHeader />

      {/* 2. Amaç Yazısı Bölümü */}
      <div className="mt-8 mb-16 w-full flex justify-center">
                <AutoCarousel />
            </div>
      

      {/* 3. Netflix Tarzı İçerik Listesi (Konu Kategorileri) */}
      <section className="w-full max-w-6xl mb-16">
        <h3 className="text-3xl font-bold text-gray-100 mb-6 text-center">
          Start exploring!
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Her bir kategori Box'ı için bir bileşen oluşturacağız */}
          <CategoryBox title="Mathematics" link="/math" imageUrl="/images/math-bg.jpg"/>
          <CategoryBox title="Computer Science" link="/cs" imageUrl="/images/cs-bg.jpg"/>
          <CategoryBox title="Physics" link="/physics" imageUrl="/images/physics-bg.jpg"/>
          <CategoryBox title="Philosophy" link="/philosophy" imageUrl="/images/philosophy-bg.jpg"/>
        </div>
      </section>

      {/* 4. İçerik Listesinin Altına Öneriler */}
      <section className="w-full max-w-4xl text-center">
        <h3 className="text-3xl font-bold text-gray-100 mb-6">
          More contents here:
        </h3>
        <div className="bg-gray-950 p-8 rounded-lg shadow-xl mb-8">
            <p className="text-xl text-gray-300 mb-4">
                Follow me for the latest lessons, exclusive quizzes, and coding tips!
            </p>
            {/* YouTube Kanalı Linki */}
            <Link href="https://www.youtube.com/@archiristo" target="_blank" rel="noopener noreferrer" 
                  className="px-8 py-4 bg-red-600 text-white font-extrabold text-lg rounded-lg shadow-md shadow-cyan-500/50 hover:bg-red-700 transition duration-300 mr-4">
                archiristo's YouTube channel
            </Link>
            {/* Bağış linki */}
            <Link href="https://archiristo.gumroad.com/" target="_blank" rel="noopener noreferrer" 
                  className="px-8 py-4 bg-green-600 text-white font-extrabold text-lg rounded-lg shadow-md shadow-cyan-500/50 hover:bg-green-700 transition duration-300">
                You can support me here!
            </Link>
        </div>

        {/* Yeni Eklenen: Tişört/Merch Bölümü 
        <div className="mt-12 bg-gray-800 p-8 rounded-lg shadow-xl">
            <h4 className="text-3xl font-bold text-gray-100 mb-6">
                MathCS Apparel Koleksiyonu
            </h4>
            <p className="text-xl text-gray-300 mb-4">
                Kod kültürünü ve bilim estetiğini MathCS.online tişörtleriyle üzerinde taşı!
            </p>
            <Link href="https://shopier.com/sizin-shopier-linkiniz" target="_blank" rel="noopener noreferrer"
                  className="px-8 py-4 bg-blue-600 text-white font-extrabold text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Mağazamızı Keşfet
            </Link>
        </div>*/}
      </section>
        <footer>Proudly made by archiristo, 2025</footer>
    </div>
  );
}

// CategoryBox Bileşeni
function CategoryBox({ title, link, imageUrl }) {
  return (
    <Link href={link} 
          className="relative block rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 group border border-cyan-700/50 hover:border-cyan-400 bg-gray-800/70">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover opacity-60 group-hover:opacity-100 transition duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent p-4 flex items-end justify-start">
        <h4 className="text-3xl font-bold text-white group-hover:text-blue-300 transition duration-300">{title}</h4>
      </div>
    </Link>
  );
}