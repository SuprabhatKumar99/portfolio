export interface Technology {
  name: string;
  icon?: string;
  category:
    | 'frontend'
    | 'backend'
    | 'database'
    | 'cloud'
    | 'devops'
    | 'ai'
    | 'infrastructure'
    | 'security'
    | 'other';
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;

  featured: boolean;
  status: 'completed' | 'in-progress' | 'archived';

  thumbnail: string;
  heroImage?: string;

  technologies: Technology[];
  category: string[];

  problem?: string;
  solution?: string;
  architecture?: string;
  challenges?: string[];
  outcomes?: string[];

  githubUrl?: string;
  liveUrl?: string;

  startDate?: string;
  endDate?: string;
}
