import Link from "next/link";
import { primaryNavigation } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { MobileNavigation } from "./mobile-navigation";

export function Navbar() {
  return <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#08090b]/90 backdrop-blur-md"><Container className="flex h-16 items-center justify-between gap-6"><Link href="/" className="text-sm font-semibold tracking-tight text-white">GLENN<span className="text-blue-400">.</span></Link><nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">{primaryNavigation.map((item) => <Link key={item.href} href={item.href} className="text-sm text-slate-400 transition hover:text-white">{item.label}</Link>)}</nav><MobileNavigation /></Container></header>;
}
