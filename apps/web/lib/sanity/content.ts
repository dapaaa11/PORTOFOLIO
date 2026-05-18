import { sanityClient } from "./client";
import { homePageQuery } from "./queries";
import type { HomePageContent } from "./types";

const fallbackContent: HomePageContent = {
  hero: {
    eyebrow: "Full-Stack Engineer & Cloud Architect",
    headline: "Building scalable\ndigital products\nwith modern\nweb architecture.",
    subheadline:
      "I design and develop modern digital systems focused on performance, scalability, and clean user experience.",
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

export async function getHomePageContent(): Promise<HomePageContent> {
  if (!sanityClient) {
    return fallbackContent;
  }

  try {
    const content = await sanityClient.fetch<Partial<HomePageContent>>(
      homePageQuery,
    );

    return {
      hero: content.hero ?? fallbackContent.hero,
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
