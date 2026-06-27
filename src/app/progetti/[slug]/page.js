import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";
import CaseStudyView from "@/components/CaseStudyView";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return { title: "Progetto non trovato | Arch. Antonello Zambrano" };
  }

  return {
    title: `${project.title} | Arch. Antonello Zambrano`,
    description: project.teaser,
  };
}

export default function CaseStudioPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyView project={project} />;
}
