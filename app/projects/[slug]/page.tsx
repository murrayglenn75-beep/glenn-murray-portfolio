import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/projects/case-study-layout";
import { pageMetadata } from "@/lib/metadata";
import { getProject, getProjects } from "@/lib/projects";

type CaseStudyPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata(project.title, project.summary, `/projects/${project.slug}`);
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const projects = getProjects();
  const index = projects.findIndex((project) => project.slug === slug);
  const project = projects[index];
  if (!project) notFound();
  return <CaseStudyLayout project={project} previousProject={projects[index - 1]} nextProject={projects[index + 1]} />;
}
