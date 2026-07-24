import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://glenn-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const topLevelPaths = ["", "/projects", "/engineering-approach", "/resume", "/about", "/contact"];
  const topLevelPages = topLevelPaths.map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 }));
  const projectPages = getProjects().map((project) => ({ url: `${siteUrl}/projects/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.7 }));
  return [...topLevelPages, ...projectPages];
}
