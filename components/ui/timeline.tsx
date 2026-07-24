import type { ReactNode } from "react";

type TimelineItem = {
  title: string;
  meta: ReactNode;
  bullets: string[];
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return <ol className="space-y-8 border-l border-white/10 pl-6">{items.map((item) => <li key={item.title} className="relative"><span className="absolute -left-[1.93rem] top-1.5 size-3 rounded-full border border-blue-400/60 bg-[#08090b]" aria-hidden="true" /><h3 className="text-xl font-semibold tracking-tight text-white">{item.title}</h3><div className="mt-2 text-sm text-slate-500">{item.meta}</div><ul className="mt-4 space-y-2">{item.bullets.map((bullet) => <li key={bullet} className="text-sm leading-6 text-slate-300">{bullet}</li>)}</ul></li>)}</ol>;
}
