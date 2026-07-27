import Link from "next/link";
import { EngineeringWorkflow } from "@/components/sections/engineering-workflow";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Engineering Approach",
  "How Glenn Murray designs, validates, and deploys AI-native software with engineering discipline.",
  "/engineering-approach",
);

const operatingPrinciples = [
  {
    title: "Requirements before implementation",
    description: "The operational problem, intended users, constraints, security boundaries, and acceptance criteria should be explicit before building begins.",
  },
  {
    title: "Deterministic first, AI second",
    description: "Calculations, state transitions, permissions, and irreversible actions stay deterministic. AI assists with interpretation, synthesis, and constrained work inside defined boundaries.",
  },
  {
    title: "Validation is part of implementation",
    description: "Generated output is reviewed, tested, and checked in fresh-state and failure conditions before it is trusted in an operating environment.",
  },
];

const aiAcceleration = [
  "Technical research and architecture exploration",
  "Scaffolding, code generation, SQL, and data-model implementation",
  "API integration, test creation, documentation, and debugging",
];

const outputControls = [
  "Clear task definition and relevant context",
  "Explicit constraints, examples, output schemas, and acceptance criteria",
  "Phased implementation with human review of proposed changes",
];

const validationGroups = [
  { title: "Correctness and architecture", description: "Code inspection, architecture review, type checking, and static analysis." },
  { title: "Automated and acceptance testing", description: "Linting, automated tests, acceptance tests, fresh-state testing, and production-build validation." },
  { title: "Failure paths and concurrency", description: "Critical paths, failure conditions, and concurrency testing where relevant." },
  { title: "Security and data integrity", description: "Authentication, authorization, data integrity, and protected operational boundaries." },
  { title: "Observability and performance", description: "Useful logging, observability, and performance considerations before release." },
  { title: "Accessibility and maintainability", description: "Accessible interfaces, maintainable implementation, reproducible deployments, and documentation." },
  { title: "Deployment, rollback, and recovery", description: "A repeatable release path and recovery considerations before a release becomes an incident." },
];

export default function EngineeringApproachPage() {
  return (
    <>
      <Section className="border-b border-white/[0.07]">
        <div className="max-w-4xl">
          <p className="eyebrow">Engineering approach</p>
          <h1 className="page-heading mt-4">Production AI requires more than generated code.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">I combine systems thinking, product engineering, AI-assisted development, structured validation, and business-focused delivery to build AI-native software that can be trusted in real operating environments.</p>
          <ul className="mt-8 flex max-w-4xl flex-wrap gap-x-5 gap-y-3 border-t border-white/[0.07] pt-5 text-sm text-slate-300">
            <li>Requirements before implementation</li><li>Deterministic logic before AI interpretation</li><li>Validation throughout delivery</li><li>Human accountability at deployment</li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <p className="eyebrow">Core operating principles</p>
          <div>
            <h2 className="display-heading">A method for making reliable decisions before writing more code.</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {operatingPrinciples.map((principle, index) => <section key={principle.title} className="border-t border-white/[0.1] pt-5" aria-labelledby={`principle-${index}`}><p className="technical-label">0{index + 1}</p><h3 id={`principle-${index}`} className="mt-3 text-xl font-semibold tracking-tight text-white">{principle.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{principle.description}</p></section>)}
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-y border-white/[0.07] bg-white/[0.015]">
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <p className="eyebrow">Delivery workflow</p>
          <div><h2 className="display-heading">A deliberate path from ambiguity to reliable delivery.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">Each stage reduces avoidable uncertainty before the next one begins. The sequence keeps validation inside delivery rather than treating it as a final gate.</p><div className="mt-10"><EngineeringWorkflow /></div></div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <p className="eyebrow">Evidence from real systems</p>
          <div>
            <h2 className="display-heading">The method is tested against real system constraints.</h2>
            <div className="mt-10 grid gap-x-10 gap-y-7 md:grid-cols-2">
              <p className="border-l-2 border-blue-400/60 pl-5 text-sm leading-7 text-slate-400"><Link href="/projects/signet" className="font-semibold text-blue-400 hover:text-blue-300">Signet</Link> informs deterministic state, concurrency checks, acceptance testing, and AI guardrails.</p>
              <p className="border-l-2 border-blue-400/60 pl-5 text-sm leading-7 text-slate-400"><Link href="/projects/murray-method" className="font-semibold text-blue-400 hover:text-blue-300">The Murray Method</Link> keeps commercial scoping and decision discipline explicit before implementation.</p>
              <p className="border-l-2 border-blue-400/60 pl-5 text-sm leading-7 text-slate-400"><Link href="/projects/axo-engine" className="font-semibold text-blue-400 hover:text-blue-300">AXO Engine</Link> provides context for governance, compliance, explainability, and human review.</p>
              <p className="border-l-2 border-blue-400/60 pl-5 text-sm leading-7 text-slate-400"><Link href="/projects/cfo-os" className="font-semibold text-blue-400 hover:text-blue-300">CFO OS</Link> reinforces trusted data, reconciliation, and deterministic calculations.</p>
            </div>
            <p className="mt-8 max-w-3xl text-base leading-8 text-slate-400">The <Link href="/projects/fde-method" className="text-blue-400 hover:text-blue-300">FDE Method</Link> provides the engagement and delivery framework. See <Link href="/ai-systems-and-methods" className="text-blue-400 hover:text-blue-300">Systems &amp; Methods</Link> for these principles across flagship systems, prototypes, and research.</p>
          </div>
        </div>
      </Section>

      <Section className="border-y border-white/[0.07] bg-white/[0.015]">
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <p className="eyebrow">Featured engineering lesson</p>
          <div className="surface max-w-4xl border-l-2 border-l-blue-400 p-7 md:p-9"><p className="technical-label">Audit Kernel</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">A concurrency lesson from Signet.</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">A generated implementation appeared correct, but concurrent operations could reference the same previous state. Acceptance tests exposed the race condition. The locking and state-management strategy was redesigned, then repeated clean-state test runs verified the fix.</p></div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <section><p className="eyebrow">AI-assisted engineering</p><h2 className="display-heading mt-4">Acceleration without surrendering judgement.</h2><h3 className="mt-8 text-xl font-semibold tracking-tight text-white">Where AI accelerates delivery</h3><p className="mt-4 text-base leading-8 text-slate-400">I use Codex, Claude Code, and other LLMs to move faster through research, exploration, implementation, and debugging. Generated output is a proposed implementation, not automatically trusted production code.</p><ul className="mt-6 space-y-3">{aiAcceleration.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden="true" />{item}</li>)}</ul></section>
          <section className="border-t border-white/[0.1] pt-6 lg:mt-[4.3rem]"><h3 className="text-xl font-semibold tracking-tight text-white">How output remains controlled</h3><p className="mt-4 text-base leading-8 text-slate-400">Strong AI output depends on clear task definition, relevant context, constraints, examples, output schemas, and acceptance criteria. I break large work into controlled phases, evaluate each result, and adjust the system or context, not just the wording of the next prompt.</p><ul className="mt-6 space-y-3">{outputControls.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden="true" />{item}</li>)}</ul></section>
        </div>
      </Section>

      <Section className="border-y border-white/[0.07] bg-white/[0.015]">
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <p className="eyebrow">Validation and production readiness</p>
          <div><h2 className="display-heading">A demo that works is not necessarily a system that is ready.</h2><div className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">{validationGroups.map((group) => <section key={group.title} className="border-t border-white/[0.1] pt-4"><h3 className="text-base font-semibold text-white">{group.title}</h3><p className="mt-2 text-sm leading-7 text-slate-400">{group.description}</p></section>)}</div></div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]"><p className="eyebrow">Cross-functional delivery</p><div><h2 className="display-heading">Systems thinking keeps technology connected to the work it changes.</h2><p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">My Industrial Engineering background shapes how I approach product work: understand workflows before automating them, identify bottlenecks and waste, translate business needs into technical requirements, and communicate tradeoffs clearly to non-technical stakeholders. The measure of value is operational improvement, not technical novelty.</p></div></div>
      </Section>

      <Section className="border-t border-white/[0.07] bg-white/[0.015]">
        <div className="max-w-3xl"><p className="eyebrow">Start a conversation</p><h2 className="display-heading mt-4">Have an AI product, automation, or systems challenge?</h2><p className="mt-6 text-lg leading-8 text-slate-400">Review the case studies or get in touch to discuss the problem, constraints, and path to a reliable result.</p><div className="mt-8 flex flex-wrap gap-3"><Button href="/projects">Review case studies</Button><Button href="/contact" secondary>Discuss a challenge</Button></div></div>
      </Section>
    </>
  );
}