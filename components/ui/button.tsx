import Link from "next/link";
import type { ReactNode } from "react";
export function Button({ href, children, secondary = false, className = "" }: { href: string; children: ReactNode; secondary?: boolean; className?: string }) { return <Link href={href} className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 ${secondary ? "border border-white/15 text-white hover:border-white/35 hover:bg-white/5" : "bg-blue-500 text-white hover:bg-blue-400"} ${className}`}>{children}</Link>; }

