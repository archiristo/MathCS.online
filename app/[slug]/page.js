// app/[slug]/page.js

import { notFound } from 'next/navigation';
import { categoryData } from './data';
import CategoryClient from './CategoryClient';

// --- STATİK PARAMETRELER (Build Hatasını Çözen Kısım) ---
export async function generateStaticParams() {
  // Klasör adı [slug] olduğu için, buradaki anahtar KESİNLİKLE 'slug' olmalı.
  // Eskiden burada 'category' yazıyordu, hatanın sebebi oydu.
  return [
    { slug: 'mathematics' },
    { slug: 'computer-science' },
    { slug: 'physics' },
    { slug: 'philosophy' },
  ];
}
// -------------------------------------------------------

export default function CategoryPage({ params }) {
  // Klasör adı [slug] olduğu için parametreyi de slug olarak çekiyoruz.
  const { slug } = params;
  
  const data = categoryData[slug];

  if (!data) {
    notFound();
  }

  return <CategoryClient data={data} slug={slug} />;
}