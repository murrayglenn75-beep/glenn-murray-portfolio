export type ProjectCategory = "Flagship Systems" | "Additional Work";

export type Project = {
  slug: string;
  title: string;
  positioning: string;
  summary: string;
  stack: string[];
  challenge: string;
  featured: boolean;
  category: ProjectCategory;
  order: number;
  coverImage?: string;
  screenshots?: string[];
  architectureDiagram?: string;
  demoUrl?: string;
  repositoryUrl?: string;
  videoUrl?: string;
  sections: Record<string, string>;
};
