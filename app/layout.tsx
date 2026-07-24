import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";
import { serializeJsonLd } from "@/lib/security";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://glenn-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Glenn — AI Product Engineer", template: "%s | Glenn" },
  description: "AI Product Engineer and AI Systems Engineer building production AI applications.",
  openGraph: { type: "website", siteName: "Glenn", title: "Glenn — AI Product Engineer", description: "Production AI systems, thoughtful product engineering, and forward-deployed execution." },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Glenn", jobTitle: "AI Product Engineer", url: siteUrl };
  return <html lang="en"><body><SiteShell>{children}</SiteShell><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} /></body></html>;
}
