export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
}

export interface ProjectContent {
  title: string;
  slug: string;
  description: string;
  stack: string[];
  thumbnail?: {
    url?: string;
    alt?: string;
    metadata?: {
      lqip?: string;
      dimensions?: {
        width: number;
        height: number;
        aspectRatio: number;
      };
    };
  };
  coverVideo?: {
    hlsUrl?: string;
    dashUrl?: string;
    mp4Url?: string;
    posterUrl?: string;
  };
  githubUrl?: string;
  liveUrl?: string;
  publishedAt?: string;
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

export interface SectionContent {
  eyebrow: string;
  title: string;
  description: string;
}

export interface SocialLinkContent {
  label: string;
  url: string;
}

export interface ContactSectionContent extends SectionContent {
  ctaLabel: string;
  email: string;
  socialLinks: SocialLinkContent[];
}

export interface HomePageSectionsContent {
  projects: SectionContent;
  experience: SectionContent;
  skills: SectionContent;
  contact: ContactSectionContent;
}

export interface HomePageContent {
  hero: HeroContent;
  sections: HomePageSectionsContent;
  projects: ProjectContent[];
  experience: ExperienceContent[];
  skills: SkillContent[];
}
