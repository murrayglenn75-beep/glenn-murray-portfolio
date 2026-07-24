import fs from "node:fs";
import path from "node:path";
import type { Project, ProjectCategory } from "@/types/project";
import { safeExternalUrl } from "@/lib/security";

const projectsDirectory = path.join(process.cwd(), "content", "projects");
const requiredFields = ["slug", "title", "positioning", "summary", "stack", "challenge", "featured", "category", "order"] as const;
const requiredSections = ["Executive Summary", "Business Problem", "Requirements", "Architecture", "Technology Stack", "Engineering Decisions", "AI Usage Boundaries", "Challenges", "Testing", "Validation", "Deployment Status", "Lessons Learned", "Future Improvements"] as const;

function parseList(value?: string) { return value ? value.split(",").map((item) => item.trim()).filter(Boolean) : []; }
function requireValue(values: Record<string, string>, key: string, slug: string) { const value = values[key]?.trim(); if (!value) throw new Error(`Project ${slug || "(unknown)"} is missing required frontmatter field: ${key}.`); return value; }

function parseProject(source: string): Project {
  const normalizedSource = source.replace(/^\uFEFF/, "");
  const frontmatter = normalizedSource.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontmatter) throw new Error("Project is missing frontmatter.");
  const values = Object.fromEntries(frontmatter[1].split("\n").map((line) => { const [key, ...rest] = line.split(":"); return [key.trim(), rest.join(":").trim()]; })) as Record<string, string>;
  const slug = values.slug || "";
  requiredFields.forEach((field) => requireValue(values, field, slug));
  const stack = parseList(values.stack);
  if (stack.length === 0) throw new Error(`Project ${slug} must define at least one stack item.`);
  if (values.category !== "Flagship Systems" && values.category !== "Additional Work") throw new Error(`Project ${slug} has an invalid category.`);
  const order = Number(values.order);
  if (!Number.isInteger(order) || order < 0) throw new Error(`Project ${slug} must define a non-negative integer order.`);
  const sections = Object.fromEntries([...frontmatter[2].matchAll(/^## (.+)\n([\s\S]*?)(?=^## |$)/gm)].map((match) => [match[1], match[2].trim()]));
  requiredSections.forEach((section) => { if (!sections[section]) throw new Error(`Project ${slug} is missing required section: ${section}.`); });
  const screenshots = parseList(values.screenshots);
  return { slug, title: values.title, positioning: values.positioning, summary: values.summary, stack, challenge: values.challenge, featured: values.featured === "true", category: values.category as ProjectCategory, order, coverImage: values.coverImage || undefined, screenshots: screenshots.length ? screenshots : undefined, architectureDiagram: values.architectureDiagram || undefined, demoUrl: safeExternalUrl(values.demoUrl), repositoryUrl: safeExternalUrl(values.repositoryUrl), videoUrl: safeExternalUrl(values.videoUrl), sections };
}

export function getProjects() { return fs.readdirSync(projectsDirectory).filter((file) => file.endsWith(".mdx")).map((file) => parseProject(fs.readFileSync(path.join(projectsDirectory, file), "utf8"))).sort((a, b) => Number(b.featured) - Number(a.featured) || a.order - b.order || a.title.localeCompare(b.title)); }
export function getProject(slug: string) { return getProjects().find((project) => project.slug === slug); }
