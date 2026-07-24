import { ExternalLink } from "@/components/ui/external-link";
import { Section } from "@/components/ui/section";
import { certificationCategories, certifications } from "@/data/certifications";
import { pageMetadata } from "@/lib/metadata";

export const dynamic = "force-static";
export const metadata = pageMetadata("Certifications", "Professional certifications and continuous learning for Glenn Murray.", "/certifications");

export default function CertificationsPage() {
  return <>
    <Section className="border-b border-white/[0.07]"><div className="max-w-4xl"><p className="eyebrow">Certifications</p><h1 className="page-heading mt-4">Learning that supports reliable AI and systems delivery.</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">A focused record of training across AI engineering, infrastructure, delivery, quality, data, and continuous learning.</p></div></Section>
    <Section><div className="space-y-14">{certificationCategories.map((category) => { const entries = certifications.filter((certification) => certification.category === category); return <section key={category} aria-labelledby={`certification-${category}`}><p className="eyebrow">{category}</p><h2 id={`certification-${category}`} className="display-heading mt-4">{category}</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{entries.map((certification) => { const content = <><h3 className="font-semibold text-white">{certification.title}</h3><p className="mt-2 text-sm text-slate-400">{[certification.issuer, certification.issued].filter(Boolean).join(" · ")}</p>{certification.credentialId && <p className="mt-3 text-xs text-slate-500">Credential ID: {certification.credentialId}</p>}</>; return certification.credentialUrl ? <ExternalLink key={certification.title} href={certification.credentialUrl} className="rounded-xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-white/25">{content}</ExternalLink> : <div key={certification.title} className="rounded-xl border border-white/10 bg-white/[0.025] p-5">{content}</div>; })}</div></section>; })}</div></Section>
  </>;
}
