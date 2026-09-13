export type SkillCategory = 'frontend' | 'backend' | 'database' | 'ai-ml' | 'devops' | 'tools';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: number; // 1-100 percentage
  yearsExperience?: number;
  highlight?: boolean;
  icon?: string;
}

export interface SkillCategoryGroup {
  id: SkillCategory;
  title: string;
  description: string;
  skills: SkillItem[];
}
