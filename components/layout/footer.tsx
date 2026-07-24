import { contactDetails } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { ExternalLink } from "@/components/ui/external-link";

export function Footer() { return <footer className="border-t border-white/[0.07] bg-white/[0.015] py-9"><Container className="flex flex-col justify-between gap-5 text-sm text-slate-500 sm:flex-row sm:items-center"><p>© {new Date().getFullYear()} Glenn Murray. Built with engineering intent.</p><div className="flex flex-wrap gap-x-5 gap-y-2">{contactDetails.map((detail) => <ExternalLink key={detail.label} href={detail.href} className="font-medium text-slate-300 hover:text-white">{detail.label}</ExternalLink>)}</div></Container></footer>; }