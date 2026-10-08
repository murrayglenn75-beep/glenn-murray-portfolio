import { ProjectExplorer } from "@/components/projects/project-explorer";
import { Section } from "@/components/ui/section";
import { getProjects } from "@/lib/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Engineering Case Studies", "Explore verifiable work across agent security, applied AI, fintech and software systems. Filter by specialty and open detailed engineering evidence.", "/projects");

export default function ProjectsPage() {
  const projects = getProjects();
  return <Section>
    <div className="max-w-4xl">
      <p className="eyebrow">Selected engineering work / case studies</p>
      <h1 className="page-heading mt-4">Explore the systems behind the claims.</h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">From secure AI tool execution to fintech workflows: each case study explains the problem, technical decisions, validation, deployment status and limits. Filter by the skills your team needs.</p>
      <div className="mt-7 flex flex-wrap gap-3 text-xs font-medium text-slate-300">
        <span className="rounded-full border border-white/15 px-3 py-2">Architecture &amp; trade-offs</span>
        <span className="rounded-full border border-white/15 px-3 py-2">Testing &amp; evidence</span>
        <span className="rounded-full border border-white/15 px-3 py-2">Honest maturity status</span>
      </div>
    </div>
    <div className="mt-12"><ProjectExplorer projects={projects} /></div>
  </Section>;
}
