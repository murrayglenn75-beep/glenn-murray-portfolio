import { contactDetails } from "@/data/profile";
import { Container } from "@/components/ui/container";

export function Footer() { return <footer className="border-t border-white/[0.07] py-8"><Container className="flex flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row"><p>© {new Date().getFullYear()} Glenn Murray. Built with engineering intent.</p><div className="flex flex-wrap gap-x-5 gap-y-2">{contactDetails.map((detail) => <a key={detail.label} href={detail.href} target={detail.href.startsWith("http") ? "_blank" : undefined} rel={detail.href.startsWith("http") ? "noreferrer" : undefined} className="hover:text-white">{detail.label}</a>)}</div></Container></footer>; }
