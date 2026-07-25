import Link from "next/link";
import { EngineeringWorkflow } from "@/components/sections/engineering-workflow";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Engineering Approach", "How Glenn Murray designs, validates, and deploys AI-native software with engineering discipline.", "/engineering-approach");

const requirements = [
  "The problem being solved and the intended users",
  "Business value, inputs, outputs, and operational constraints",
  "Failure conditions and the security boundaries around the system",
  "Acceptance criteria that make success observable",
];

const aiCapabilities = [
  "Technical research and architecture exploration",
  "Scaffolding, code generation, SQL, and data-model implementation",
  "API integration, test creation, documentation, and debugging",
];

const validationPractices = [
  "Code inspection, architecture review, type checking, and static analysis",
  "Linting, automated tests, acceptance tests, and fresh-state testing",
  "Failure-path testing, concurrency testing where relevant, and production build validation",
];

const readinessAreas = [
  "Security, authentication, authorization, and data integrity",
  "Error handling, logging, observability, and performance",
  "Accessibility, maintainability, reproducible deployments, and documentation",
  "Rollback and recovery considerations before a release becomes an incident",
];

export default function EngineeringApproachPage() {
  return (
    <>
      <Section className="border-b border-white/[0.07]">
        <div className="max-w-4xl">
          <p className="eyebrow">Engineering approach</p>
          <h1 className="page-heading mt-4">
            Production AI requires more than generated code.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            I combine systems thinking, product engineering, AI-assisted
            development, structured validation, and business-focused delivery
            to build AI-native software that can be trusted in real operating
            environments.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div><p className="eyebrow">Workflow</p></div>
          <div>
            <h2 className="display-heading">A deliberate path from ambiguity to reliable delivery.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">The sequence is intentional: decisions made early reduce expensive rework later, and validation remains part of implementation rather than a final gate.</p>
            <div className="mt-12"><EngineeringWorkflow /></div>
          </div>
        </div>
      </Section>

      <Section className="border-y border-white/[0.07] bg-white/[0.015]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">Requirements first</p>
          <div>
            <h2 className="display-heading">Clear requirements prevent visually convincing but incorrect software.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">Implementation should begin only after the problem, boundaries, and conditions for success are explicit. This creates a shared decision record and reduces rework when AI can make a prototype look complete before it is correct.</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">{requirements.map((item) => <li key={item} className="rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm leading-6 text-slate-300">{item}</li>)}</ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">AI-assisted engineering</p>
            <h2 className="display-heading mt-4">Acceleration without surrendering judgement.</h2>
            <p className="mt-6 text-base leading-8 text-slate-400">I use Codex, Claude Code, and other LLMs to move faster through research, exploration, implementation, and debugging. Generated output is a proposed implementation—not automatically trusted production code.</p>
            <ul className="mt-7 space-y-3">{aiCapabilities.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden="true" />{item}</li>)}</ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 md:p-9">
            <p className="eyebrow">Prompt and context engineering</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">Better context beats repeated retries.</h2>
            <p className="mt-5 text-base leading-8 text-slate-400">Strong AI output depends on clear task definition, relevant context, constraints, examples, output schemas, and acceptance criteria. I break large work into controlled phases, evaluate each result, and adjust the system or context—not just the wording of the next prompt.</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <p className="eyebrow">Method in context</p>
          <div>
            <h2 className="display-heading">Principles are tested against real system constraints.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400"><Link href="/projects/signet" className="text-blue-400 hover:text-blue-300">Signet</Link> informs deterministic state, concurrency checks, acceptance testing, and AI guardrails. The <Link href="/projects/fde-method" className="text-blue-400 hover:text-blue-300">FDE Method</Link> informs engagement decomposition and delivery gates, while <Link href="/projects/glenn-method" className="text-blue-400 hover:text-blue-300">The Glenn Method</Link> keeps commercial scoping and decision discipline explicit. <Link href="/projects/axo-engine" className="text-blue-400 hover:text-blue-300">AXO Engine</Link> provides context for governance, compliance, explainability, and human review; <Link href="/projects/cfo-os" className="text-blue-400 hover:text-blue-300">CFO OS</Link> reinforces trusted data, reconciliation, and deterministic calculations.</p><p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">See <Link href="/ai-systems-and-methods" className="text-blue-400 hover:text-blue-300">Systems &amp; Methods</Link> for the same principles across flagship systems, prototypes, and research.</p>
          </div>
        </div>
      </Section>
      <Section className="border-y border-white/[0.07] bg-white/[0.015]">
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <p className="eyebrow">Validation and reliability</p>
          <div>
            <h2 className="display-heading">The generated implementation is the start of review, not the end of engineering.</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">{validationPractices.map((item) => <li key={item} className="rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm leading-6 text-slate-300">{item}</li>)}</ul>
            <div className="mt-8 border-l-2 border-blue-400 pl-6">
              <p className="text-sm font-medium text-white">Audit Kernel: a concurrency lesson</p>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">A generated implementation appeared correct, but a race condition allowed concurrent operations to reference the same previous state. Acceptance tests exposed the failure. The locking and state-management strategy was redesigned, then repeated clean-state test runs verified the fix.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Production readiness</p>
            <h2 className="display-heading mt-4">A demo that works is not necessarily a feature that is ready.</h2>
            <ul className="mt-8 space-y-3">{readinessAreas.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden="true" />{item}</li>)}</ul>
          </div>
          <div>
            <p className="eyebrow">Cross-functional delivery</p>
            <h2 className="display-heading mt-4">Systems thinking keeps technology connected to the work it changes.</h2>
            <p className="mt-6 text-base leading-8 text-slate-400">My Industrial Engineering background shapes how I approach product work: understand workflows before automating them, identify bottlenecks and waste, translate business needs into technical requirements, and communicate tradeoffs clearly to non-technical stakeholders. The measure of value is operational improvement, not technical novelty.</p>
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/[0.07] bg-white/[0.015]">
        <div className="max-w-3xl">
          <p className="eyebrow">Start a conversation</p>
          <h2 className="display-heading mt-4">Have an AI product, automation, or systems challenge?</h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">Review the case studies or get in touch to discuss the problem, constraints, and path to a reliable result.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button href="/projects">Review case studies</Button><Button href="/contact" secondary>Discuss a challenge</Button></div>
        </div>
      </Section>
    </>
  );
}
