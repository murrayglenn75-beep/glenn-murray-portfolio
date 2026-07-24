"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { primaryNavigation } from "@/data/navigation";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const backgroundContent = Array.from(document.querySelectorAll("main, footer"));
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    backgroundContent.forEach((element) => element.setAttribute("inert", ""));
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    return () => {
      backgroundContent.forEach((element) => element.removeAttribute("inert"));
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return <div className="lg:hidden"><button ref={buttonRef} type="button" aria-expanded={isOpen} aria-controls="mobile-primary-navigation" onClick={() => setIsOpen((open) => !open)} className="rounded-md border border-white/10 bg-white/[0.025] px-3 py-2 text-sm font-semibold text-slate-200 hover:border-white/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">{isOpen ? "Close" : "Menu"}</button>{isOpen && <><div className="fixed inset-0 top-16 z-40 bg-[var(--canvas)]/70" aria-hidden="true" /><nav id="mobile-primary-navigation" aria-label="Mobile primary navigation" className="absolute inset-x-0 top-16 z-50 border-b border-white/[0.07] bg-[var(--surface)] px-6 py-6 shadow-2xl"><ul className="mx-auto grid max-w-[1440px] gap-1 md:px-4">{primaryNavigation.map((item, index) => { const active = pathname === item.href; return <li key={item.href}><Link ref={index === 0 ? firstLinkRef : undefined} href={item.href} aria-current={active ? "page" : undefined} onClick={() => setIsOpen(false)} className={`block rounded-md px-3 py-3 text-base font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${active ? "bg-white/[0.05] text-blue-400" : "text-slate-300 hover:bg-white/[0.05] hover:text-white"}`}>{item.label}</Link></li>; })}</ul></nav></>}</div>;
}