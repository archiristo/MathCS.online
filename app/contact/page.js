'use client'; 
import AnimatedHeader from "@/components/AnimatedHeader";
import Link from 'next/link'; 

const CONTACT_LINKS = [
  {
    icon: '✉️', // Mail simgesi (Veya Tailwind ile profesyonel ikon kullanabilirsiniz)
    title: 'E-mail',
    description: 'For all your questions, cooperation offers and feedback.',
    link: 'mailto:archiristo@proton.me',
  },
  {
    icon: '💻', // Gumroad (Dijital Ürünler) simgesi
    title: 'Digital Products (Gumroad)',
    description: 'A collection of premium guides, ebooks, and code templates. P.S.: You can also buy me a coffee :)',
    link: 'archiristo.gumroad.com',
  },
  {
    icon: '📺', // YouTube simgesi
    title: 'YouTube Channel',
    description: 'The main channel where algorithm, mathematics and philosophy lessons are broadcast.',
    link: 'https://www.youtube.com/@archiristo',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 pt-24 max-w-4xl mx-auto">
      
      <h1 className="text-5xl font-extrabold mb-4 text-fuchsia-400">
        Contact me
      </h1>
      <p className="text-xl text-gray-400 mb-12 max-w-2xl">
        You can contact archiristo directly through the channels below.
      </p>

      {/* Bağlantı Kartları Bölümü */}
      <div className="space-y-6">
        {CONTACT_LINKS.map((item, index) => (
          <ContactLinkCard key={index} {...item} />
        ))}
      </div>
      
    </div>
  );
}

// Yeni: Tekrar Kullanılabilir Bağlantı Kartı Bileşeni
function ContactLinkCard({ icon, title, description, link }) {
  return (
    <Link 
      href={link} 
      target="_blank" // Yeni sekmede aç
      rel="noopener noreferrer" 
      className="flex items-center p-6 bg-code-dark rounded-xl shadow-xl hover:bg-code-dark/70 transition duration-300 border border-transparent hover:border-fuchsia-500/50 group"
    >
      
      {/* İkon / Simgesi */}
      <div className="text-4xl mr-6 flex-shrink-0">
        {icon}
      </div>

      {/* Metin İçeriği */}
      <div>
        <h2 className="text-2xl font-semibold mb-1 text-white group-hover:text-fuchsia-400 transition duration-300">
          {title}
        </h2>
        <p className="text-gray-400">{description}</p>
      </div>
      
      {/* Ok Simgesi (İsteğe Bağlı) */}
      <svg className="ml-auto w-6 h-6 text-gray-400 group-hover:text-fuchsia-400 transition duration-300 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </Link>
  );
}