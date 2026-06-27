import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";
import CaseStudyView from "@/components/CaseStudyView";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Progetto non trovato | Arch. Antonello Zambrano" };
  }

  return {
    title: `${project.title} | Arch. Antonello Zambrano`,
    description: project.teaser,
  };
}

export default async function CaseStudioPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyView project={project} />;
}
