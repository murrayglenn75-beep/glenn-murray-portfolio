export type ResumeRole = {
  title: string;
  organisation: string;
  engagement: string;
  period: string;
  responsibilities: string[];
};

export const resumeRoles: ResumeRole[] = [
  { title: "Talent Acquisition Project Manager", organisation: "micro1", engagement: "Contract", period: "March 2026 – Present", responsibilities: ["Project delivery, workflow coordination, and stakeholder communication for talent-acquisition work.", "TODO: Confirm the public-facing responsibility summary and systems delivered for this role."] },
  { title: "Manufacturing Specialist / AI Trainer", organisation: "micro1.ai", engagement: "Freelance", period: "July 2025 – Present", responsibilities: ["Apply manufacturing-domain knowledge to AI training and structured evaluation work.", "TODO: Confirm public-facing responsibilities, evaluation scope, and deliverables."] },
  { title: "Business Consultant", organisation: "Freelance", engagement: "Independent", period: "April 2024 – Present", responsibilities: ["Analyse business processes and frame practical improvements for client operations.", "TODO: Confirm the public-facing consulting scope and representative deliverables."] },
  { title: "Project Manager", organisation: "Contract", engagement: "Contract", period: "April 2024 – April 2025", responsibilities: ["Plan delivery work, coordinate stakeholders, and keep project risks and decisions visible.", "TODO: Confirm the public-facing project scope and responsibilities."] },
  { title: "Industrial Engineer", organisation: "RAD Design Engineering Ltd", engagement: "Full-time", period: "February 2019 – January 2024", responsibilities: ["Worked in an engineering and manufacturing environment with fabrication, production, and process-improvement context.", "TODO: Confirm the public-facing responsibilities, systems, and projects for this role."] },
];

export const capabilityGroups = [
  { title: "AI and LLM Engineering", items: ["Claude Code", "Codex", "Anthropic Claude API", "OpenAI", "Gemini", "Prompt engineering", "Context engineering", "AI agents", "Workflow orchestration", "MCP familiarity"] },
  { title: "Application Engineering", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Row Level Security", "Vercel", "GitHub"] },
  { title: "Integration and Automation", items: ["REST APIs", "Webhooks", "OAuth", "JSON", "Airtable", "n8n", "Business-process automation"] },
  { title: "Data and Business Systems", items: ["SQL", "Power BI", "Odoo ERP", "HubSpot", "ClickUp", "QuickBooks"] },
  { title: "Engineering and Operations", items: ["Industrial Engineering", "Systems Engineering", "Process improvement", "Manufacturing", "CAD/CAM", "SolidWorks", "AutoCAD", "CNC and fabrication knowledge"] },
];

export const education = [
  { qualification: "Bachelor of Engineering in Industrial and Systems Engineering", institution: "Griffith College Dublin", detail: "Completed 2025" },
  { qualification: "HND in Contemporary Music Performance", institution: "", detail: "" },
  { qualification: "Music Production for Games", institution: "", detail: "" },
  { qualification: "National Craft Certificate in Metal Fabrication", institution: "", detail: "" },
];

export const certifications = ["Six Sigma Green Belt", "PMP", "Microsoft Power Platform — Maker Course 2.0", "Power BI", "HR Compensation & Benefits — July 2025", "EF SET English Certificate — C2, 73/100 — March 2025"];

export const workContext = ["Irish citizen", "Based in São Paulo, Brazil", "Native English speaker", "Available for remote international work", "Comfortable working across international teams and UK-aligned hours"];
