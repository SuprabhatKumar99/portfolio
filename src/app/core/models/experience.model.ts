export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: 'full-time' | 'fellowship' | 'internship' | 'contract';
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  period: string;
  description?: string;
  coursework: string[];
  achievements?: string[];
}
