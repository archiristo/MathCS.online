// app/notes/[id]/page.js

import { notesData } from './data';
import NoteClient from './NoteClient';

// Build sırasında hangi sayfaların oluşturulacağını bildiriyoruz
export async function generateStaticParams() {
  return Object.keys(notesData).map((slug) => ({
    id: slug,
  }));
}

export default function NotePage({ params }) {
  const note = notesData[params.id];

  // Eğer not yoksa Client tarafında "Bulunamadı" döner
  return <NoteClient note={note} />;
}