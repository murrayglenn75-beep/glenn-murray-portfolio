import Link from "next/link";
import { ProjectCard } from "@/components/projects/project-card";
import { Hero } from "@/components/sections-hero";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";
import { getProjects } from "@/lib/projects";

export const metadata = pageMetadata("Applied AI & Forward Deployed Engineering", profile.summary, "/");

const areas = [
  { number: "01", title: "Secure AI systems", description: "Constrain agent actions with scoped authority, verification, replay protection and auditable outcomes.", href: "https://github.com/murrayglenn75-beep/ai-authority-kernel", action: "Inspect the authority kernel" },
  { number: "02", title: "Real-world product delivery", description: "Build usable interfaces on top of explicit state, validation, integrations and measurable software behaviour.", href: "https://github.com/murrayglenn75-beep/fluxo", action: "Explore the fintech sandbox" },
  { number: "03", title: "Adversarial validation", description: "Turn complex software architecture into attack paths, reproducible findings and practical release gates.", href: "https://github.com/murrayglenn75-beep/ethical-hacker", action: "Review the security scanner" },
];

export default function Home() {
  const projects = getProjects();
  const preferred = ["ai-authority-kernel", "ethical-hacker", "fluxo"];
  const ranked = [...projects].sort((a, b) => {
    const ai = preferred.findIndex(s => a.slug.includes(s));
    const bi = preferred.findIndex(s => b.slug.includes(s));
    return (ai < 0 ? 100 : ai) - (bi < 0 ? 100 : bi);
  });
  const selected = ranked.filter(p => preferred.some(s => p.slug.includes(s)));
  const featured = [...selected, ...projects.filter(p => p.featured && !selected.some(s => s.slug === p.slug))].slice(0, 3);

  return <>
    <Hero />
    <Section>
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><p className="eyebrow">Featured engineering case studies</p><h2 className="display-heading mt-4">Real systems. Clear boundaries. Inspectable evidence.</h2><p className="mt-5 max-w-2xl text-slate-400">Explore what I built, why I made the trade-offs, what was tested, and what remains prototype-level.</p></div>
        <Button href="/projects" secondary>Explore all case studies →</Button>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">{featured.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
    </Section>
    <Section className="border-y border-white/[0.07] bg-white/[0.015]">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">Specialisms</p><h2 className="display-heading mt-4">Designed for the gap between prototype and production.</h2><p className="mt-5 text-slate-400">I connect product experience, system architecture, verification and controlled AI execution.</p></div>
        <div className="grid gap-4">{areas.map(area => <a key={area.number} href={area.href} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition hover:-translate-y-0.5 hover:border-sky-300/40 hover:bg-slate-800/75"><div className="flex items-start gap-5"><span className="font-mono text-sm text-sky-300">{area.number}</span><div><h3 className="text-xl font-semibold text-white">{area.title}</h3><p className="mt-2 text-sm leading-7 text-slate-400">{area.description}</p><span className="mt-4 inline-flex text-sm font-semibold text-sky-300 group-hover:text-sky-200">{area.action} ↗</span></div></div></a>)}</div>
      </div>
    </Section>
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]"><p className="eyebrow">The engineering approach</p><div><h2 className="display-heading">Deterministic first. AI second.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">AI can propose and explain. Authentication, permissions, financial state and irreversible decisions require deterministic verification and accountable approvals. I design those boundaries up front, and validate the failure modes rather than relying on a polished demo.</p><div className="mt-8 flex flex-wrap gap-3"><Button href="/engineering-approach" secondary>Engineering approach</Button><Button href="/ai-systems-and-methods" secondary>Systems &amp; methods</Button></div></div></div>
    </Section>
    <Section className="border-t border-white/[0.07] bg-white/[0.015]"><div className="max-w-3xl"><p className="eyebrow">For hiring teams &amp; collaborators</p><h2 className="display-heading mt-4">Need someone who can ship AI systems and explain the trade-offs?</h2><p className="mt-6 text-lg leading-8 text-slate-400">I work across architecture, implementation, integration and adversarial validation. Explore the case studies or get in touch about applied AI, forward deployed engineering or security-focused product delivery.</p><div className="mt-8 flex flex-wrap gap-3"><Button href="/contact">Contact Glenn</Button><Button href="/projects" secondary>Review case studies</Button><Link href="https://www.linkedin.com/in/glenn-patrick-murray/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center px-4 text-sm font-semibold text-sky-300 hover:text-sky-200">LinkedIn ↗</Link></div></div></Section>
  </>;
}
