'use client'; 

import Image from 'next/image';
import Link from 'next/link';

export default function AnimatedHeader() {
    return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
            <Image
              src="/images/image copy.png"
              alt="MathCS.online Logo"
              width={180} // Daha küçük bir header logosu
              height={45} 
              priority
            />
          </Link>
        <nav className="hidden md:flex space-x-8">
            <Link href="https://mathcs.online/math" className="text-gray-300 hover:text-blue-400 transition duration-150">
              Mathematics
            </Link>
            <Link href="https://mathcs.online/cs" className="text-gray-300 hover:text-blue-400 transition duration-150">
              Computer Science
            </Link>
            <Link href="https://mathcs.online/physics" className="text-gray-300 hover:text-blue-400 transition duration-150">
              Physics
            </Link>
            <Link href="https://mathcs.online/philosophy" className="text-gray-300 hover:text-blue-400 transition duration-150">
              Philosophy
            </Link>
          </nav>

          {/* Aksiyon Butonu */}
          <Link href="https://mathcs.online/contact" className="px-3 py-2 text-sm font-medium rounded-md text-white bg-fuchsia-400 hover:bg-blue-700 transition duration-150">
            Contact me
          </Link>
          

        </div>
      </div>
    </header>
    );
}