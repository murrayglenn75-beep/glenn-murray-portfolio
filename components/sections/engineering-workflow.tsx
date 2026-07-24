import { engineeringWorkflow } from "@/data/engineering-approach";

export function EngineeringWorkflow() {
  return (
    <ol className="relative grid gap-5 border-l border-white/10 pl-6 md:grid-cols-2 md:gap-x-10 md:gap-y-7">
      {engineeringWorkflow.map((stage, index) => (
        <li key={stage.title} className="relative">
          <span className="absolute -left-[2.05rem] top-0 flex size-5 items-center justify-center rounded-full border border-blue-400/50 bg-[#08090b] text-[10px] font-semibold text-blue-300" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="text-base font-semibold text-white">{stage.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">{stage.description}</p>
        </li>
      ))}
    </ol>
  );
}
