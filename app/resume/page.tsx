import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Timeline } from "@/components/ui/timeline";
import { getProjects } from "@/lib/projects";
import { capabilityGroups, certifications, education, resumeRoles, workContext } from "@/data/resume";

export const metadata: Metadata = { title: "Resume", description: "Resume for Glenn Murray, AI Product Engineer and AI Systems Engineer." };

export default function ResumePage() {
  const projects = getProjects();
  const timelineItems = resumeRoles.map((role) => ({ title: role.title, meta: <>{role.organisation} · {role.engagement} · {role.period}</>, bullets: role.responsibilities }));

  return <>
    <Section className="border-b border-white/[0.07]"><div className="max-w-4xl"><p className="eyebrow">Resume</p><h1 className="page-heading mt-4">AI Product Engineer building reliable systems around real work.</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">AI Product Engineer and AI Systems Engineer with an Industrial and Systems Engineering background. I build AI-native products, production AI systems, and workflow automation through systems thinking, cross-functional delivery, and AI-assisted engineering with structured validation.</p><div className="mt-8"><button type="button" disabled aria-disabled="true" aria-describedby="resume-download-status" className="cursor-not-allowed rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-500">Download Resume (PDF)</button><p id="resume-download-status" className="mt-3 text-sm text-slate-500">TODO: Add the final PDF at <code className="text-slate-400">/public/glenn-murray-resume.pdf</code> and enable this download.</p></div></div></Section>

    <Section><div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]"><p className="eyebrow">Professional experience</p><div><h2 className="display-heading">Experience across operations, delivery, and AI systems.</h2><div className="mt-10"><Timeline items={timelineItems} /></div></div></div></Section>

    <Section className="border-y border-white/[0.07] bg-white/[0.015]"><div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]"><p className="eyebrow">Selected AI and product work</p><div><h2 className="display-heading">Case studies in production-minded AI engineering.</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{projects.map((project) => <Link key={project.slug} href={`/projects/${project.slug}`} className="rounded-xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-white/25"><h3 className="font-semibold text-white">{project.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{project.summary}</p><p className="mt-4 text-xs font-medium tracking-[0.12em] text-blue-400">{project.stack.slice(0, 3).join(" · ")}</p></Link>)}</div></div></div></Section>

    <Section><div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]"><p className="eyebrow">Technical capabilities</p><div className="grid gap-4 md:grid-cols-2">{capabilityGroups.map((group) => <section key={group.title} className="rounded-xl border border-white/10 bg-white/[0.025] p-5"><h2 className="text-base font-semibold text-white">{group.title}</h2><div className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{item}</span>)}</div></section>)}</div></div></Section>

    <Section className="border-y border-white/[0.07] bg-white/[0.015]"><div className="grid gap-12 lg:grid-cols-2"><div><p className="eyebrow">Education</p><div className="mt-6 space-y-4">{education.map((item) => <div key={item.qualification} className="rounded-xl border border-white/10 bg-white/[0.025] p-5"><h2 className="font-semibold text-white">{item.qualification}</h2>{item.institution && <p className="mt-2 text-sm text-slate-400">{item.institution}</p>}{item.detail && <p className="mt-1 text-sm text-slate-500">{item.detail}</p>}</div>)}</div></div><div><p className="eyebrow">Certifications and training</p><ul className="mt-6 space-y-3">{certifications.map((item) => <li key={item} className="rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm text-slate-300">{item}</li>)}</ul></div></div></Section>

    <Section><div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]"><p className="eyebrow">Work context</p><div><h2 className="display-heading">Ready to contribute across time zones and teams.</h2><div className="mt-7 flex flex-wrap gap-3">{workContext.map((item) => <span key={item} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">{item}</span>)}</div></div></div></Section>

    <Section className="border-t border-white/[0.07] bg-white/[0.015]"><div className="max-w-3xl"><p className="eyebrow">Start a conversation</p><h2 className="display-heading mt-4">Explore the work or discuss the next challenge.</h2><p className="mt-6 text-lg leading-8 text-slate-400">Review the case studies, read the engineering approach, or get in touch to discuss a role or technical challenge.</p><div className="mt-8 flex flex-wrap gap-3"><Button href="/projects">Review case studies</Button><Button href="/engineering-approach" secondary>Engineering approach</Button><Button href="/contact" secondary>Discuss a role or challenge</Button></div></div></Section>
  </>;
}
