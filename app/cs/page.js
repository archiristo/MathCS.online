import Link from 'next/link';

export default function MathHomePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 pt-24 max-w-7xl mx-auto flex flex-col items-center py-10 px-4">
      <h1 className="text-5xl font-extrabold mb-6 text-blue-400">
        Computer Science
      </h1>
      <p className="text-xl text-gray-400 mb-10 max-w-2xl">
        Gain in-depth knowledge in areas like Algorithms, Data Structures, and Artificial Intelligence.
      </p>
      {/* Konu Kutuları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <SubjectCard title="Video Lessons/Podcasts" description="You can check out my catchy and entertaining videos on my archiristo channel." link="https://www.youtube.com/@archiristo" />
        <SubjectCard title="Cheatsheets" description="For lecture notes on each topic:" link="https://archiristo.gumroad.com" />
        <SubjectCard title="Question Banks" description="To solve questions of all levels:" link="https://archiristo.gumroad.com" />
        <SubjectCard title="Code Examples" description="Put theory into practice. Optimized and clean code blocks, templates, and up-to-date library implementations, ready for immediate use in projects." link="https://archiristo.gumroad.com" />
      </div>
      <footer>Proudly made by archiristo, 2025</footer>
    </div>
  );
}

// Yeni: Yeniden Kullanılabilir Konu Kartı Bileşeni
function SubjectCard({ title, description, link }) {
    return (
        <Link href={link} className="block bg-code-dark p-6 rounded-xl shadow-xl hover:bg-code-dark/70 transition duration-300 border border-transparent hover:border-blue-500/50">
            <h2 className="text-2xl font-semibold mb-2 text-white">{title}</h2>
            <p className="text-gray-400 mb-4">{description}</p>
            <span className="text-blue-400 font-medium hover:underline">
                Go →
            </span>
        </Link>
    );
}