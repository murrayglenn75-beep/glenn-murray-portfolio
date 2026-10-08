"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/types/project";
import { ProjectCard } from "@/components/projects/project-card";

const filters = ["All", "AI & agents", "Security", "Product & fintech"] as const;
type Filter = (typeof filters)[number];

function matches(project: Project, filter: Filter) {
  if (filter === "All") return true;
  const text = [project.title, project.positioning, project.summary, ...project.stack].join(" ").toLowerCase();
  if (filter === "Security") return /security|authority|audit|threat|hacker|agent-security|signet/.test(text);
  if (filter === "Product & fintech") return /fintech|finance|fluxo|product|operations|workflow|cfo|pix/.test(text);
  return /agent|llm|artificial intelligence|\bai\b|mcp|brain/.test(text);
}

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => projects.filter(p => matches(p, filter) && [p.title, p.summary, p.positioning, ...p.stack].join(" ").toLowerCase().includes(query.trim().toLowerCase())), [projects, filter, query]);

  return <div>
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:p-5">
      <label htmlFor="project-search" className="text-sm font-medium text-slate-200">Find evidence relevant to your role</label>
      <input id="project-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search projects, technologies or problems…" className="min-h-12 w-full rounded-lg border border-white/15 bg-slate-950/70 px-4 text-white placeholder:text-slate-500 focus-visible:outline-2 focus-visible:outline-sky-400" />
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map(item => <button type="button" key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={`min-h-10 rounded-full border px-4 py-2 text-sm font-medium transition ${filter === item ? "border-sky-300 bg-sky-300/15 text-sky-200" : "border-white/15 text-slate-300 hover:border-white/40 hover:text-white"}`}>{item}</button>)}
      </div>
      <p aria-live="polite" className="text-sm text-slate-400">{filtered.length} {filtered.length === 1 ? "case study" : "case studies"} shown</p>
    </div>
    {filtered.length ? <div className="mt-8 grid gap-5 lg:grid-cols-2">{filtered.map(p => <ProjectCard key={p.slug} project={p} />)}</div> : <div className="mt-8 rounded-2xl border border-white/10 p-8 text-slate-300">No matching projects. Try another search or select All.</div>}
  </div>;
}
