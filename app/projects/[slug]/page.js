// app/projects/[slug]/page.js (SERVER COMPONENT)

import { projectsData } from './data';
import ProjectClient from './ProjectClient';

// BU FONKSİYON SAYESİNDE HATA ÇÖZÜLECEK 👇
export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }));
}

export default function ProjectPage({ params }) {
  const slug = params.slug;
  const project = projectsData[slug];

  return <ProjectClient project={project} />;
}