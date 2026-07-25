import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";
import { getProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const topLevelPaths = ["", "/projects", "/ai-systems-and-methods", "/engineering-approach", "/resume", "/certifications", "/about", "/contact"];
  const topLevelPages = topLevelPaths.map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 }));
  const projectPages = getProjects().map((project) => ({ url: `${siteUrl}/projects/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.7 }));
  return [...topLevelPages, ...projectPages];
}
