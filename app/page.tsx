import { ProjectCard } from "@/components/projects/project-card";
import { Hero } from "@/components/sections-hero";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { getProjects } from "@/lib/projects";

export default function Home() {
  const featuredProjects = getProjects().filter((project) => project.featured).slice(0, 4);

  return <>
    <Hero />
    <Section>
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Selected work</p><h2 className="display-heading mt-4">Systems that earn trust in production.</h2></div><Button href="/projects" secondary>All systems</Button></div>
      <div className="grid gap-6 lg:grid-cols-3">{featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
    </Section>
    <Section className="border-y border-white/[0.07] bg-white/[0.015]"><div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]"><p className="eyebrow">How I work</p><div><h2 className="display-heading">AI accelerates the build. Engineering judgement validates the outcome.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">From requirements and architecture through evaluation, deployment, and iteration, I build systems that respect the difference between a compelling demo and a dependable product.</p><Button href="/engineering-approach" secondary className="mt-8">Engineering approach</Button></div></div></Section>
  </>;
}

