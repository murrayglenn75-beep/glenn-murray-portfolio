export type WorkflowStage = {
  title: string;
  description: string;
};

export const engineeringWorkflow: WorkflowStage[] = [
  { title: "Problem discovery", description: "Clarify the operational problem before choosing a tool or model. The goal is to understand the current workflow, not automate an assumption." },
  { title: "Business and user requirements", description: "Define who needs the system, what they need to accomplish, and the business value a successful outcome should create." },
  { title: "Scope and constraints", description: "Make tradeoffs explicit: time, data availability, compliance, integrations, operating environment, and what should stay out of scope." },
  { title: "Technical architecture", description: "Choose boundaries, interfaces, data flows, and failure behavior before implementation creates accidental architecture." },
  { title: "Data modelling and security", description: "Model ownership, retention, access, and integrity early. AI features do not relax authentication, authorization, or data-handling requirements." },
  { title: "Acceptance criteria", description: "Turn intent into observable behavior, including edge cases and failure conditions, so the team can distinguish working software from a convincing demo." },
  { title: "AI-assisted implementation", description: "Use AI to accelerate research, scaffolding, integration work, and iteration while keeping engineering decisions and review accountable to people." },
  { title: "Code and architecture review", description: "Inspect generated and handwritten changes for correctness, maintainability, security boundaries, and alignment with the intended system design." },
  { title: "Testing and validation", description: "Validate critical paths, failure paths, and fresh-state behavior with the right mix of automated checks and acceptance testing." },
  { title: "Deployment", description: "Make releases repeatable with controlled environments, protected configuration, production builds, and a practical recovery path." },
  { title: "Observability and iteration", description: "Use logs, feedback, and real operational behavior to find friction, measure learning, and improve the system after launch." },
];
