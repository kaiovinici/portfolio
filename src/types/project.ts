export type ProjectStatus = "demo-preparation" | "local-demo" | "published" | "archived";

export interface Project {
  name: string;
  description: string;
  problem: string;
  technologies: string[];
  image?: string;
  logo?: string;
  demoUrl?: string;
  repositoryUrl?: string;
  status: ProjectStatus;
  featured?: boolean;
}
