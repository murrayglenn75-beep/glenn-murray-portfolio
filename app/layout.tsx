import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/metadata";
import { serializeJsonLd } from "@/lib/security";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: profile.seoTitle, template: "%s | Glenn Murray" },
  description: profile.summary,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: profile.name, title: profile.seoTitle, description: profile.summary, url: "/" },
  twitter: { card: "summary" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: "AI Product Engineer", url: siteUrl };
  return <html lang="en"><body><SiteShell>{children}</SiteShell><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} /></body></html>;
}
