import type { Metadata } from "next";

const fallbackSiteUrl = "https://glenn-portfolio.vercel.app";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl;

export function pageMetadata(title: string, description: string, canonicalPath: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: { type: "website", title: `${title} | Glenn Murray`, description, url: canonicalPath },
    twitter: { card: "summary" },
  };
}
