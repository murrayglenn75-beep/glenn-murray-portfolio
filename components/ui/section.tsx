import type { ReactNode } from "react";
import { Container } from "./container";
export function Section({ children, className = "" }: { children: ReactNode; className?: string }) { return <section className={`py-20 md:py-28 lg:py-36 ${className}`}><Container>{children}</Container></section>; }

