/** @type {import('next').NextConfig} */
const nextConfig = {
   // Railway'de en stabil dağıtım için statik çıktı
   output: 'export', 
   
   // Image optimizasyon hatasını önlemek için
   images: {
      unoptimized: true,
   },
   eslint: {
      // Bu, build sırasında uyarıları dikkate almaz
      ignoreDuringBuilds: true,
   },

};

module.exports = nextConfig;
