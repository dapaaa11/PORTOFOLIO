import { sanityClient } from "./client";
import { homePageQuery } from "./queries";
import type {
  ContactSectionContent,
  HomePageContent,
  SectionContent,
} from "./types";

interface SanityHomePageResponse
  extends Omit<HomePageContent, "sections"> {
  homePage?: {
    projectsSection?: SectionContent;
    experienceSection?: SectionContent;
    skillsSection?: SectionContent;
    contactSection?: ContactSectionContent;
  };
}

const fallbackContent: HomePageContent = {
  hero: {
    eyebrow: "Full-Stack Engineer & Cloud Architect",
    headline: "Building scalable\ndigital products\nwith modern\nweb architecture.",
    subheadline:
      "I design and develop modern digital systems focused on performance, scalability, and clean user experience.",
  },
  sections: {
    projects: {
      eyebrow: "Featured Work",
      title: "Selected Projects",
      description:
        "A collection of frontend systems, cloud-native applications, and modern digital products focused on scalability and user experience.",
    },
    experience: {
      eyebrow: "Experience",
      title: "Engineering Journey",
      description:
        "Focused on building scalable systems, modern frontend experiences, and cloud-native applications.",
    },
    skills: {
      eyebrow: "Tech Stack",
      title: "Technologies & Tools",
      description:
        "Focused on modern frontend systems, scalable backend architecture, and cloud-native development workflows.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something meaningful.",
      description:
        "Open for collaborations, freelance projects, and modern digital product development.",
      ctaLabel: "Get in touch",
      email: "dava@example.com",
      socialLinks: [
        {
          label: "GitHub",
          url: "https://github.com/dapaaa11",
        },
        {
          label: "LinkedIn",
          url: "https://linkedin.com",
        },
      ],
    },
  },
  projects: [
    {
      title: "Cloud Infrastructure Dashboard",
      description:
        "A scalable monitoring platform built for cloud-native infrastructure management and operational analytics.",
      stack: ["Next.js", "NestJS", "PostgreSQL"],
    },
    {
      title: "AI Workflow Platform",
      description:
        "Modern AI workflow system integrating automation pipelines, prompt orchestration, and scalable API architecture.",
      stack: ["React", "Laravel", "OpenAI"],
    },
  ],
  experience: [
    {
      year: "2024 - Present",
      role: "Full-Stack Developer",
      company: "Freelance & Independent Projects",
      description:
        "Developing modern web applications using scalable frontend architecture, backend systems, and cloud-native workflows.",
    },
    {
      year: "2023 - 2024",
      role: "Frontend Developer",
      company: "Personal Product Development",
      description:
        "Focused on building responsive interfaces, reusable design systems, and performant React applications.",
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
    },
    {
      category: "Backend",
      items: ["NestJS", "Laravel", "Node.js", "PostgreSQL", "REST API"],
    },
    {
      category: "Cloud & DevOps",
      items: ["Google Cloud", "Docker", "Cloud Run", "Firebase", "CI/CD"],
    },
    {
      category: "AI & Automation",
      items: [
        "OpenAI API",
        "Claude API",
        "Prompt Engineering",
        "Workflow Automation",
      ],
    },
  ],
};

function mergeHomePageSections(
  content: SanityHomePageResponse["homePage"],
): HomePageContent["sections"] {
  return {
    projects: content?.projectsSection ?? fallbackContent.sections.projects,
    experience:
      content?.experienceSection ?? fallbackContent.sections.experience,
    skills: content?.skillsSection ?? fallbackContent.sections.skills,
    contact: content?.contactSection ?? fallbackContent.sections.contact,
  };
}

export async function getHomePageContent(): Promise<HomePageContent> {
  if (!sanityClient) {
    return fallbackContent;
  }

  try {
    const content = await sanityClient.fetch<Partial<SanityHomePageResponse>>(
      homePageQuery,
    );

    return {
      hero: content.hero ?? fallbackContent.hero,
      sections: mergeHomePageSections(content.homePage),
      projects: content.projects?.length
        ? content.projects
        : fallbackContent.projects,
      experience: content.experience?.length
        ? content.experience
        : fallbackContent.experience,
      skills: content.skills?.length ? content.skills : fallbackContent.skills,
    };
  } catch {
    return fallbackContent;
  }
}
