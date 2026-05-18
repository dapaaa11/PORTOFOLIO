import { sanityClient } from "./client";
import { homePageQuery, projectBySlugQuery, projectSlugsQuery } from "./queries";
import type {
  ContactSectionContent,
  HomePageContent,
  SectionContent,
  ProjectContent,
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
      slug: "cloud-infrastructure-dashboard",
      status: "Ongoing - Active Beta",
      description:
        "An advanced multi-cloud telemetry and orchestration dashboard engineered for high-throughput stream processing and operational visibility. The platform ingests over 10 million metrics per second across global edge networks, applying real-time analytical parsing and structural redis caching. It resolves traditional data-pooling bottlenecks by utilizing custom decoupled worker pools and thread-safe connection queues, delivering instant visual system state updates to client dashboards with sub-80ms rendering latencies.",
      stack: ["Next.js", "NestJS", "PostgreSQL", "Google Cloud", "Docker"],
      thumbnail: {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=800&q=80",
        alt: "Cloud Infrastructure Dashboard Preview",
        metadata: {
          lqip: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDE2IDEwIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIGZpbGw9IiMxYTFhMWEiLz48L3N2Zz4=",
          dimensions: {
            width: 1200,
            height: 800,
            aspectRatio: 1.5,
          },
        },
      },
      coverVideo: {
        mp4Url: "https://assets.mixkit.co/videos/preview/mixkit-data-processors-working-on-computers-in-a-server-room-41764-large.mp4",
      },
      githubUrl: "https://github.com/dapaaa11",
      liveUrl: "https://google.com",
      publishedAt: "2026-05-10T12:00:00Z",
    },
    {
      title: "AI Workflow Platform",
      slug: "ai-workflow-platform",
      status: "Ongoing - Active Alpha",
      description:
        "A scalable, persistent Visual DAG Orchestrator engineered to run, monitor, and scale complex multi-agent execution graphs. Backed by an elastic serverless state machine, it integrates persistent vector state lookup registries to aggressively skip repeat LLM calls, achieving a massive 45% reduction in overall prompt token consumption. It employs an under-the-hood self-healing logic layer that continuously monitors agent execution threads, intercepting recursive loop overflows and optimizing nested execution tree latencies.",
      stack: ["React", "Laravel", "OpenAI", "Pinecone", "Docker"],
      thumbnail: {
        url: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&h=800&q=80",
        alt: "AI Workflow Platform Preview",
        metadata: {
          lqip: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDE2IDEwIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIGZpbGw9IiMxYTFhMWEiLz48L3N2Zz4=",
          dimensions: {
            width: 1200,
            height: 800,
            aspectRatio: 1.5,
          },
        },
      },
      coverVideo: {
        mp4Url: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-a-computer-with-futuristic-graphics-41761-large.mp4",
      },
      githubUrl: "https://github.com/dapaaa11",
      liveUrl: "https://google.com",
      publishedAt: "2026-05-15T14:30:00Z",
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
  } catch (error) {
    console.error("Sanity fetch error in getHomePageContent:", error);
    return fallbackContent;
  }
}

export async function getProjectBySlug(slug: string): Promise<ProjectContent | null> {
  if (sanityClient) {
    try {
      const project = await sanityClient.fetch<ProjectContent | null>(
        projectBySlugQuery,
        { slug }
      );
      if (project) {
        return project;
      }
    } catch (error) {
      console.error(`Sanity fetch error in getProjectBySlug for slug ${slug}:`, error);
      // Fallback on error
    }
  }

  // Fallback / mock data lookup
  const mockProject = fallbackContent.projects.find((p) => p.slug === slug);
  return mockProject ?? null;
}

export async function getAllProjectSlugs(): Promise<string[]> {
  if (sanityClient) {
    try {
      const slugs = await sanityClient.fetch<{ slug: string }[]>(
        projectSlugsQuery
      );
      return slugs.map((s) => s.slug);
    } catch (error) {
      console.error("Sanity fetch error in getAllProjectSlugs:", error);
      // Fallback on error
    }
  }

  return fallbackContent.projects.map((p) => p.slug);
}
