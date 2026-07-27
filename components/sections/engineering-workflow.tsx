import { engineeringWorkflow } from "@/data/engineering-approach";

export function EngineeringWorkflow() {
  return (
    <ol className="divide-y divide-white/[0.08] border-t border-white/[0.08]">
      {engineeringWorkflow.map((stage, index) => (
        <li key={stage.title} className="grid gap-3 py-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5">
          <span className="technical-label pt-0.5" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <div><h3 className="text-base font-semibold text-white">{stage.title}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">{stage.description}</p></div>
        </li>
      ))}
    </ol>
  );
}