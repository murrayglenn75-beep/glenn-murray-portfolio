export type ProjectCategory = "Flagship Systems" | "Additional Work";

export type ProjectMedia = {
  src: string;
  alt: string;
  caption?: string;
};

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
  maturity: string;
  startHere: boolean;
  coverImage?: ProjectMedia;
  screenshots?: ProjectMedia[];
  architectureDiagram?: ProjectMedia;
  demoUrl?: string;
  repositoryUrl?: string;
  videoUrl?: string;
  sections: Record<string, string>;
};
