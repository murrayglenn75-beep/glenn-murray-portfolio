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
  status?: "In Progress";
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
  { title: "Certificate of Completion: Claude 101", issuer: "Anthropic", issued: "July 2026", credentialId: "yvowxz57v8gg", category: "AI & LLM Engineering", featured: true },
  { title: "AI Agents with Model Context Protocol", issuer: "Vanderbilt University", issued: "July 10, 2026", credentialId: "EBNNVI1QCHRI", credentialUrl: "https://coursera.org/verify/EBNNVI1QCHRI", category: "AI & LLM Engineering", featured: true },
  { title: "Google AI Specialization", issuer: "Google", issued: "Apr 2026", credentialId: "PYYH4X8NKTKU", category: "AI & LLM Engineering", featured: true },
  { title: "Google AI Essentials V1", issuer: "Coursera", issued: "April 15, 2026", category: "AI & LLM Engineering" },
  { title: "Google AI for App Building", issuer: "Coursera", issued: "April 14, 2026", category: "AI & LLM Engineering" },
  { title: "Google AI for Brainstorming and Planning", issuer: "Coursera", issued: "April 17, 2026", category: "AI & LLM Engineering" },
  { title: "Google AI for Content Creation", issuer: "Coursera", issued: "April 12, 2026", category: "AI & LLM Engineering" },
  { title: "Google AI for Data Analysis", issuer: "Coursera", issued: "April 13, 2026", category: "AI & LLM Engineering" },
  { title: "Google AI for Research and Insights", issuer: "Coursera", issued: "April 9, 2026", category: "AI & LLM Engineering" },
  { title: "Google AI for Writing and Communicating", issuer: "Coursera", issued: "April 10, 2026", category: "AI & LLM Engineering" },
  { title: "Google AI Fundamentals", issuer: "Coursera", issued: "April 15, 2026", category: "AI & LLM Engineering" },
  { title: "Google Prompting Essentials", issuer: "Coursera", issued: "April 24, 2026", category: "AI & LLM Engineering" },
  { title: "AI Infrastructure: Introduction to AI Hypercomputer", issuer: "Google Cloud Skills Boost", issued: "May 2026", credentialId: "SGGLIHLDSLAX", category: "AI Infrastructure & Systems", featured: true },
  { title: "PMP", issuer: "Project Management Institute", category: "Leadership & Delivery" },
  { title: "Leadership & Management Training for Tech Managers", issuer: "Packt", issued: "May 7, 2026", credentialId: "7W4YLSAIZ077", credentialUrl: "https://coursera.org/verify/specialization/7W4YLSAIZ077", category: "Leadership & Delivery" },
  { title: "Systems Engineering", issuer: "MathWorks", issued: "Mar 2026", credentialId: "VCTO6V1WZRIO", category: "Engineering & Quality", featured: true },
  { title: "Lean Six Sigma Green Belt", issuer: "Griffith College Dublin", category: "Engineering & Quality", featured: true },
  { title: "Introduction to Statistics", issuer: "Stanford University", category: "Data & Statistics" },
  { title: "Power BI", issuer: "Microsoft", category: "Data & Statistics" },
  { title: "DeepLearning.AI Data Engineering Professional Certificate", issuer: "DeepLearning.AI", status: "In Progress", category: "Continuous Learning" },
  { title: "Microsoft Power Platform - Maker Course 2.0", issuer: "Microsoft", category: "Continuous Learning" },
  { title: "HR Compensation & Benefits", issuer: "", issued: "Jul 2025", category: "Continuous Learning" },
  { title: "EF SET English Certificate - C2", issuer: "EF SET", issued: "Mar 2025", credentialId: "73/100", category: "Continuous Learning" },
];

export const featuredCertifications = certifications.filter((certification) => certification.featured);