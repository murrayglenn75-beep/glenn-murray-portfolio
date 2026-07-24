import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { pageMetadata } from "@/lib/metadata";
import {
  focusAreas,
  industrialEngineeringPrinciples,
  professionalJourney,
  workingCharacteristics,
} from "@/data/about";

export const metadata = pageMetadata("About", "Glenn Murray is an AI Product Engineer and AI Systems Engineer with an Industrial Engineering foundation.", "/about");

export default function AboutPage() {
  return (
    <>
      <Section className="border-b border-white/[0.07]">
        <div className="max-w-4xl">
          <p className="eyebrow">About Glenn Murray</p>
          <h1 className="page-heading mt-4">
            Systems thinking for practical AI products.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            I am an AI Product Engineer and AI Systems Engineer with an
            Industrial Engineering foundation. I combine process optimization,
            product engineering, and AI-assisted development to build practical
            software that improves real business operations.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <p className="eyebrow">Professional journey</p>
          <div>
            <h2 className="display-heading">From operational systems to AI-native software.</h2>
            <div className="mt-8 grid gap-4">{professionalJourney.map((item, index) => <div key={item} className="grid gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-5 sm:grid-cols-[2.5rem_1fr]"><span className="text-sm font-semibold text-blue-400">0{index + 1}</span><p className="text-base leading-7 text-slate-300">{item}</p></div>)}</div>
          </div>
        </div>
      </Section>

      <Section className="border-y border-white/[0.07] bg-white/[0.015]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">Why Industrial Engineering matters</p>
          <div>
            <h2 className="display-heading">Software changes systems, not just screens.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">Industrial Engineering informs how I frame software work: map the actual flow of work, understand the constraints, and design an improvement that can operate reliably in the real environment.</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">{industrialEngineeringPrinciples.map((item) => <li key={item} className="rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm leading-6 text-slate-300">{item}</li>)}</ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">How I work</p>
            <h2 className="display-heading mt-4">Build with clarity. Validate with discipline.</h2>
            <ul className="mt-8 space-y-3">{workingCharacteristics.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden="true" />{item}</li>)}</ul>
          </div>
          <div>
            <p className="eyebrow">Core areas of focus</p>
            <h2 className="display-heading mt-4">Engineering that connects product, operations, and delivery.</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">{focusAreas.map((area) => <div key={area} className="rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm leading-6 text-slate-300">{area}</div>)}</div>
          </div>
        </div>
      </Section>

      <Section className="border-y border-white/[0.07] bg-white/[0.015]">
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <p className="eyebrow">Personal context</p>
          <div>
            <h2 className="display-heading">Based in Brazil. Working internationally.</h2>
            <div className="mt-7 flex flex-wrap gap-3 text-sm text-slate-300"><span className="rounded-full border border-white/10 px-4 py-2">Irish</span><span className="rounded-full border border-white/10 px-4 py-2">Based in São Paulo, Brazil</span><span className="rounded-full border border-white/10 px-4 py-2">Available for remote international work</span><span className="rounded-full border border-white/10 px-4 py-2">Fluent English</span></div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <p className="eyebrow">Work together</p>
          <h2 className="display-heading mt-4">Explore the work or start with the problem.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">Review the case studies, read how I approach engineering, or get in touch to discuss a role or technical challenge.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button href="/projects">Review case studies</Button><Button href="/engineering-approach" secondary>Engineering approach</Button><Button href="/contact" secondary>Discuss a role or challenge</Button></div>
        </div>
      </Section>
    </>
  );
}
