"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { MobileNavigation } from "./mobile-navigation";

export function Navbar() {
  const pathname = usePathname();
  return <header className="sticky top-0 z-50 border-b bg-[var(--surface)]/95"><Container className="flex h-16 items-center justify-between gap-6"><Link href="/" className="text-sm font-semibold tracking-tight text-white">GLENN <span className="text-blue-400">MURRAY</span></Link><nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">{primaryNavigation.map((item) => { const active = pathname === item.href; return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`rounded-md px-3 py-2 text-sm font-medium transition ${active ? "bg-white/[0.05] text-blue-400" : "text-slate-300 hover:bg-white/[0.05] hover:text-white"} ${item.href === "/contact" ? "ml-2 border border-white/10" : ""}`}>{item.label}</Link>; })}</nav><MobileNavigation /></Container></header>;
}