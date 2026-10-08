import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07]">
      <Container className="grid min-h-[calc(100vh-4rem)] items-center gap-14 py-20 md:grid-cols-[1.35fr_0.65fr] md:py-28">
        <div>
          <p className="eyebrow mb-6">Forward Deployed Engineer &middot; Applied AI Engineer &middot; AI Systems Architect</p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl md:text-7xl">Hi, I&apos;m Glenn. I build AI systems that work beyond the demo.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">I design and ship AI-enabled products, secure agent workflows, and operational tools. My approach keeps identity, permissions, money, and consequential decisions under deterministic controls—not model guesswork.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/projects">Explore case studies</Button>
            <Button href="/contact" secondary>Contact me</Button>
            <a href="https://github.com/murrayglenn75-beep" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-300 hover:text-sky-300">GitHub ↗</a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/[0.07] pt-6 text-sm text-slate-300">
            <span>17+ years in engineering &amp; operations</span>
            <span>Python · TypeScript · Next.js</span>
            <span>Agent security · fintech · AI products</span>
            <span>English-speaking international teams</span>
          </div>
        </div>
        <div className="surface mx-auto w-full max-w-[360px] rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <img src="https://avatars.githubusercontent.com/u/295481264?v=4" alt="Glenn Murray's GitHub profile photo" width="88" height="88" className="h-[88px] w-[88px] rounded-full border border-white/20 object-cover" />
            <div><p className="font-semibold text-white">Glenn Murray</p><p className="mt-1 text-sm text-slate-400">AI systems &amp; product engineering</p></div>
          </div>
          <p className="technical-label mt-8">Featured engineering work</p>
          <div className="mt-4 space-y-4 text-sm">
            <div><a href="https://github.com/murrayglenn75-beep/ai-authority-kernel" className="font-semibold text-slate-100 hover:text-sky-300">AI Authority Kernel ↗</a><p className="mt-1 text-slate-400">Fail-closed authorization for agent actions.</p></div>
            <div><a href="https://github.com/murrayglenn75-beep/ethical-hacker" className="font-semibold text-slate-100 hover:text-sky-300">Ethical Hacker ↗</a><p className="mt-1 text-slate-400">Architecture-aware defensive security scanner.</p></div>
            <div><a href="https://github.com/murrayglenn75-beep/fluxo" className="font-semibold text-slate-100 hover:text-sky-300">Fluxo ↗</a><p className="mt-1 text-slate-400">Fintech sandbox with validated financial controls.</p></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
