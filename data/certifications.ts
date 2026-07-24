export type CertificationCategory =
  | "AI & LLM Engineering"
  | "AI Infrastructure & Systems"
  | "Leadership & Delivery"
  | "Engineering & Quality"
  | "Data & Statistics"
  | "Continuous Learning";

export type Certification = {
  title: string;
  issuer: string;
  issued?: string;
  credentialId?: string;
  credentialUrl?: string;
  category: CertificationCategory;
  featured?: boolean;
};

export const certificationCategories: CertificationCategory[] = [
  "AI & LLM Engineering",
  "AI Infrastructure & Systems",
  "Leadership & Delivery",
  "Engineering & Quality",
  "Data & Statistics",
  "Continuous Learning",
];

export const certifications: Certification[] = [
  { title: "Claude 101", issuer: "Anthropic", issued: "Jul 2026", credentialId: "yvowxz57v8gg", category: "AI & LLM Engineering", featured: true },
  { title: "AI Agents with Model Context Protocol", issuer: "Vanderbilt University", issued: "Jul 2026", credentialId: "EBNNVI1QCHRI", category: "AI & LLM Engineering", featured: true },
  { title: "Google AI Specialization", issuer: "Google", issued: "Apr 2026", credentialId: "PYYH4X8NKTKU", category: "AI & LLM Engineering", featured: true },
  { title: "AI Infrastructure: Introduction to AI Hypercomputer", issuer: "Google Cloud Skills Boost", issued: "May 2026", credentialId: "SGGLIHLDSLAX", category: "AI Infrastructure & Systems", featured: true },
  { title: "PMP", issuer: "Project Management Institute", category: "Leadership & Delivery" },
  { title: "Systems Engineering", issuer: "MathWorks", issued: "Mar 2026", credentialId: "VCTO6V1WZRIO", category: "Engineering & Quality", featured: true },
  { title: "Six Sigma Green Belt", issuer: "Griffith College Dublin", category: "Engineering & Quality", featured: true },
  { title: "Power BI", issuer: "Microsoft", category: "Data & Statistics" },
  { title: "Microsoft Power Platform - Maker Course 2.0", issuer: "Microsoft", category: "Continuous Learning" },
  { title: "HR Compensation & Benefits", issuer: "", issued: "Jul 2025", category: "Continuous Learning" },
  { title: "EF SET English Certificate - C2", issuer: "EF SET", issued: "Mar 2025", credentialId: "73/100", category: "Continuous Learning" },
];

export const featuredCertifications = certifications.filter((certification) => certification.featured);
