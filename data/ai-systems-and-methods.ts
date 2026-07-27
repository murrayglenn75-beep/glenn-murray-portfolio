export type Methodology = {
  title: string;
  summary: string;
  points: string[];
  href?: string;
  linkLabel?: string;
};

export type AdditionalSystem = {
  title: string;
  maturity: "Prototype" | "Working prototype" | "Concept system" | "Experimental implementation" | "Research framework";
  summary: string;
  details: string[];
};

export const deterministicPrinciples = [
  "Calculations and state transitions remain deterministic.",
  "AI operates over verified signals rather than inventing operational facts.",
  "Irreversible actions require governed workflows.",
  "Human review remains in place where uncertainty or impact is high.",
];

export const methodologies: Methodology[] = [
  {
    title: "Constitutional Build",
    summary: "A disciplined approach to AI-assisted engineering that establishes constraints before implementation and treats validation as part of the build.",
    points: [
      "Architectural invariants before implementation",
      "Repository-level instructions where applicable",
      "Acceptance tests defining done before implementation",
      "Human review of AI-generated edits",
      "Repeated validation, including concurrency and correctness testing",
    ],
  },
  {
    title: "The Murray Method",
    summary: "A structured commercial and engineering scoping process used before implementation to keep delivery connected to a real business outcome.",
    points: ["Problem definition", "Commercial relevance", "Constraints and risk", "Validation", "Delivery sequencing"],
    href: "/projects/murray-method",
    linkLabel: "Explore The Murray Method",
  },
  {
    title: "FDE Method",
    summary: "An 11-stage forward-deployed engagement framework for taking an opportunity from discovery and alignment through delivery gates, adoption, and operational handoff.",
    points: ["Discovery", "Stakeholder alignment", "Operational observation", "Requirements decomposition", "Rapid prototyping", "Delivery gates", "Adoption and handoff"],
    href: "/projects/fde-method",
    linkLabel: "Explore FDE Method",
  },
];

export const flagshipSlugs = ["signet", "cfo-os", "axo-engine", "industrial-ai-architect"] as const;

export const flagshipNotes: Record<(typeof flagshipSlugs)[number], string[]> = {
  signet: ["Deterministic audit kernel", "Append-only event history and hash chaining", "Deterministic projections, acceptance testing, and concurrency validation", "AI narrates verified events but does not determine state"],
  "cfo-os": ["Financial-data ingestion and source confidence", "Reconciliation and deterministic calculation graph", "Financial calculations remain outside the language model", "AI assists analysis and narration over trusted results"],
  "axo-engine": ["Decarbonisation intelligence and compliance context", "Regression isolation, scenarios, and traceability", "Human-review gates", "AI recommendations are not final compliance determinations"],
  "industrial-ai-architect": ["Classical industrial engineering combined with AI workflows", "Material nesting, Eurocode 3, RULA/REBA, and critical-path scheduling", "Lean methods and operational constraints", "Industrial background connected to current AI systems work"],
};

export const additionalSystems: AdditionalSystem[] = [
  { title: "Spatial ROI Engine", maturity: "Prototype", summary: "Brazilian out-of-home advertising attribution prototype focused on observed attention rather than modeled impressions.", details: ["Beacon and camera signal combination", "Gaze-verified attention", "LGPD-aware architecture", "React/TypeScript, Python edge scripts, and MediaPipe gaze analysis"] },
  { title: "Nexus OS Pro", maturity: "Concept system", summary: "Brazil-native financial and operating-system concept for freelancers and SMEs, not presented as a broadly adopted production platform.", details: ["CNPJ integration and Simples Nacional logic", "PIX workflows and Fator R optimisation", "BRL and multi-currency support"] },
  { title: "Sinal", maturity: "Prototype", summary: "Real-time behavioural-signal analysis prototype developed collaboratively with a Brazilian technical partner.", details: ["MediaPipe and Gemini", "Twelve social-behavioural signals and baseline calibration", "Authenticity score as a prototype output", "Portuguese and English interface"] },
  { title: "FORGE AI v5.1", maturity: "Experimental implementation", summary: "Experimental full-stack AI coding platform without unsupported production-adoption claims.", details: ["MCP server and client behaviour", "SSE streaming", "Python/Flask backend, React frontend, and Firestore", "Test coverage and security-hardening work"] },
  { title: "AIO v2 / Narcissus Protocol", maturity: "Research framework", summary: "Self-directed AI-governance and cybernetic-control research into deterministic safety mechanisms around probabilistic agents.", details: ["Salience routing", "Penalty memory", "Idempotency", "Operational governance and tested implementation components"] },
  { title: "AOCF", maturity: "Research framework", summary: "Defensive adversarial-optimisation research framework examining how environmental instability can make adversarial optimisation unreliable.", details: ["Simulation and mathematical modelling", "Defensive research orientation", "No theoretical target is presented as experimentally proven"] },
];