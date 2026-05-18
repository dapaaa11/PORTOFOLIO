export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
}

export interface ProjectContent {
  title: string;
  description: string;
  stack: string[];
}

export interface ExperienceContent {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface SkillContent {
  category: string;
  items: string[];
}

export interface HomePageContent {
  hero: HeroContent;
  projects: ProjectContent[];
  experience: ExperienceContent[];
  skills: SkillContent[];
}
