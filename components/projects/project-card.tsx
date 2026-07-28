import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectMedia } from "@/types/project";
import { TechBadge } from "@/components/ui/tech-badge";

function ProjectFallback({ project }: { project: Project }) {
  return <div className="flex aspect-[16/9] flex-col justify-between bg-[linear-gradient(135deg,rgba(56,189,248,0.12),transparent_58%)] p-5"><div className="flex items-start justify-between gap-4"><span className="technical-label">{project.category}</span><span className="rounded-full border border-white/10 px-2.5 py-1 text-xs font-medium text-slate-300">{project.maturity}</span></div><div className="border-l-2 border-blue-400/70 pl-4"><p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">{project.positioning}</p><p className="mt-2 text-2xl font-semibold tracking-tight text-white">{project.title}</p></div></div>;
}

function ProjectImage({ src, alt, caption }: ProjectMedia) {
  return <figure className="relative aspect-[16/9] overflow-hidden bg-[var(--surface)]"><Image src={src} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />{caption && <figcaption className="absolute inset-x-0 bottom-0 bg-slate-950/80 px-4 py-2 text-xs text-slate-300">{caption}</figcaption>}</figure>;
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <article className={`group surface overflow-hidden rounded-2xl transition hover:-translate-y-0.5 hover:border-white/20 ${featured ? "lg:col-span-1" : ""}`}>{project.coverImage ? <ProjectImage {...project.coverImage} /> : <ProjectFallback project={project} />}<div className="p-6 md:p-7"><div className="flex flex-wrap items-center gap-2"><p className="technical-label">{project.positioning}</p>{project.startHere && <span className="rounded-full border border-blue-400/40 bg-blue-400/10 px-2.5 py-1 text-xs font-semibold text-blue-300">Start here</span>}</div><div className="mt-3 flex items-start justify-between gap-4"><h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3><Link href={`/projects/${project.slug}`} className="shrink-0 text-sm font-medium text-blue-400 hover:text-blue-300">Case study <span aria-hidden="true">-&gt;</span></Link></div><p className="mt-3 text-sm font-medium text-slate-300">Maturity: {project.maturity}</p><p className="mt-4 text-sm leading-6 text-slate-400">{project.summary}</p><div className="mt-5 flex flex-wrap gap-2">{project.stack.slice(0, 4).map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div><p className="mt-5 border-t border-white/[0.07] pt-4 text-sm leading-6 text-slate-400"><span className="font-medium text-slate-300">Engineering focus: </span>{project.challenge}</p></div></article>;
}
