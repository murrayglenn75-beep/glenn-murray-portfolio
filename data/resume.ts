export type ResumeRole = { title: string; organisation: string; engagement: string; period: string; responsibilities: string[]; };

export const resumeSummary = "Forward Deployed Engineer, AI Product Engineer, and AI Systems Architect with 17+ years across industrial engineering, manufacturing, operations, systems work, and project delivery. I design deterministic-first AI systems end to end, from architecture and implementation through validation and deployment, for client-facing and embedded delivery where accountable operational decisions matter.";

export const resumeRoles: ResumeRole[] = [
  { title: "Talent Acquisition Project Manager", organisation: "micro1", engagement: "Contract", period: "March 2026 - Present", responsibilities: ["Project delivery, workflow coordination, and stakeholder communication for talent-acquisition work.", "Maintain clear handoffs, priorities, and delivery visibility across the engagement."] },
  { title: "Manufacturing Specialist / AI Trainer", organisation: "micro1.ai", engagement: "Freelance", period: "July 2025 - Present", responsibilities: ["Apply manufacturing-domain knowledge to AI training and structured evaluation work.", "Contribute manufacturing-domain judgement to structured AI training and evaluation tasks."] },
  { title: "Business Consultant", organisation: "Freelance", engagement: "Independent", period: "April 2024 - Present", responsibilities: ["Analyse business processes and frame practical improvements for client operations.", "Frame process-improvement opportunities around client workflows and operating constraints."] },
  { title: "Project Manager", organisation: "Contract", engagement: "Contract", period: "April 2024 - April 2025", responsibilities: ["Plan delivery work, coordinate stakeholders, and keep project risks and decisions visible.", "Coordinate delivery plans, stakeholder decisions, and visible risk management through the project lifecycle."] },
  { title: "Industrial Engineer", organisation: "RAD Design Engineering Ltd", engagement: "Full-time", period: "February 2019 - January 2024", responsibilities: ["Worked in an engineering and manufacturing environment with fabrication, production, and process-improvement context.", "Use engineering and manufacturing context to support process understanding, fabrication workflows, and operational improvement."] },
];

export const capabilityGroups = [
  { title: "AI and LLM Engineering", items: ["Claude Code", "Codex", "Claude API", "OpenAI", "Google GenAI / Gemini", "Prompt engineering", "Context engineering", "Model Context Protocol", "AI agents", "Workflow orchestration", "AI Evaluation", "Human-in-the-Loop Systems", "RAG Concepts", "Deterministic Pipeline Design", "LLM Integration"] },
  { title: "Application Engineering", items: ["TypeScript", "Rust", "React", "Next.js", "Vite", "Tailwind CSS", "Express", "Supabase", "PostgreSQL", "Row Level Security", "Vercel", "Git", "GitHub"] },
  { title: "Integration and Automation", items: ["REST APIs", "Webhooks", "OAuth", "JSON", "Google Cloud", "Google Cloud Run", "GitHub Actions", "CI/CD", "Airtable", "n8n", "Business-process automation"] },
  { title: "Data and Business Systems", items: ["SQL", "SQLite", "Power BI", "Odoo ERP", "HubSpot", "ClickUp", "QuickBooks"] },
  { title: "Engineering and Operations", items: ["System Design", "Solution Architecture", "Production AI", "Enterprise Software", "Industrial Engineering", "Systems Engineering", "Lean Six Sigma", "Project Delivery", "Process improvement", "Manufacturing", "CAD/CAM", "SolidWorks", "AutoCAD", "CNC and fabrication knowledge"] },
];

export const education = [
  { qualification: "Bachelor of Engineering in Industrial and Systems Engineering", institution: "Griffith College Dublin", detail: "Completed 2025" },
  { qualification: "HND in Contemporary Music Performance", institution: "", detail: "" },
  { qualification: "Music Production for Games", institution: "", detail: "" },
  { qualification: "National Craft Certificate in Metal Fabrication", institution: "", detail: "" },
];

export const workContext = ["Irish / EU citizen", "Based in São Paulo, Brazil", "Native English speaker", "Available for remote international work", "Full working overlap with US East Coast hours"];