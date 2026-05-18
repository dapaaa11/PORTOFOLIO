"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionTitle } from "@/components/ui/section-title";
import { ProjectCard } from "@/components/ui/project-card";
import { ExperienceItem } from "@/components/ui/experience-item";
import { SkillGroup } from "@/components/ui/skill-group";
import { HomePageContent } from "@/lib/sanity/types";
import { useLanguage } from "@/lib/context/language-context";

interface HomePageClientProps {
  initialContent: HomePageContent;
}

export function HomePageClient({ initialContent }: HomePageClientProps) {
  const { language, t, translateCmsProject } = useLanguage();

  // 1. Resolve Hero
  const heroContent = {
    eyebrow: language === "en" ? initialContent.hero.eyebrow : t.hero.eyebrow,
    headline: language === "en" ? initialContent.hero.headline : t.hero.headline,
    subheadline: language === "en" ? initialContent.hero.subheadline : t.hero.subheadline,
  };

  const headlineLines = heroContent.headline.split("\n").filter(Boolean);

  // 2. Resolve Sections metadata
  const sectionsContent = {
    projects: {
      eyebrow: t.sections.projects.eyebrow,
      title: t.sections.projects.title,
      description: t.sections.projects.description,
    },
    experience: {
      eyebrow: t.sections.experience.eyebrow,
      title: t.sections.experience.title,
      description: t.sections.experience.description,
    },
    skills: {
      eyebrow: t.sections.skills.eyebrow,
      title: t.sections.skills.title,
      description: t.sections.skills.description,
    },
    contact: {
      eyebrow: t.sections.contact.eyebrow,
      title: t.sections.contact.title,
      description: t.sections.contact.description,
      ctaLabel: t.sections.contact.ctaLabel,
      email: initialContent.sections.contact.email,
      socialLinks: initialContent.sections.contact.socialLinks,
    },
  };

  // 3. Resolve Projects (handle fallback override + dynamic CMS translation)
  const resolvedProjects = initialContent.projects.map((project) => {
    const isFallbackProject =
      project.slug === "cloud-infrastructure-dashboard" ||
      project.slug === "ai-workflow-platform";

    if (isFallbackProject) {
      const match = t.projectsFallback.find((p) => p.slug === project.slug);
      if (match) {
        return {
          ...project,
          title: match.title,
          status: match.status,
          description: match.description,
          stack: match.stack || project.stack,
        };
      }
    }

    // Dynamic CMS project: translate fields
    return {
      ...project,
      description: translateCmsProject(project.slug, "description", project.description),
      status: project.status ? translateCmsProject(project.slug, "status", project.status) : undefined,
    };
  });

  // 4. Resolve Experience
  // If we are using fallback mock experience list, swap with translated list.
  const resolvedExperience = t.experienceList;

  // 5. Resolve Skills
  const resolvedSkills = t.skillsList;

  return (
    <main id="main-content" className="min-h-screen bg-black pt-16 text-white overflow-hidden">
      {/* HERO SECTION */}
      <Container className="relative flex min-h-[calc(100svh-6rem)] items-center py-20 sm:min-h-[calc(100svh-4rem)] sm:py-24 lg:py-32">
        {/* Left Typography Block - Primary visual focus */}
        <div className="relative z-10 max-w-2xl lg:max-w-3xl">
          <FadeIn>
            <p className="mb-5 max-w-xs text-xs uppercase leading-relaxed tracking-[0.24em] text-zinc-500 sm:mb-6 sm:max-w-none sm:text-sm sm:tracking-[0.3em]">
              {heroContent.eyebrow}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="text-[clamp(2.75rem,15vw,4.5rem)] font-semibold leading-[0.95] tracking-tight lg:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {headlineLines.map((line, idx) => (
                <span key={`${line}-${idx}`} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-zinc-400 sm:mt-8 lg:text-lg">
              {heroContent.subheadline}
            </p>
          </FadeIn>
        </div>

        {/* 
          Cinematic Engineering Portrait - Integrated right-side background focal element.
          - Absolutely positioned, z-0 to sit softly behind absolute foreground focus.
          - Restrained 0.88 opacity & brightness blending to keep visual dominance minimal.
          - Advanced radial masking to dissolve all borders completely into the dark space.
          - Hidden on mobile to prioritize mobile rendering speed and keep layouts clean.
        */}
        <div 
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 w-[420px] h-[520px] lg:w-[480px] lg:h-[600px] transition-all duration-700 opacity-85 lg:opacity-90"
          style={{
            maskImage: "radial-gradient(circle at 55% 45%, black 25%, rgba(0, 0, 0, 0.4) 60%, transparent 95%)",
            WebkitMaskImage: "radial-gradient(circle at 55% 45%, black 25%, rgba(0, 0, 0, 0.4) 60%, transparent 95%)",
          }}
        >
          <div className="relative w-full h-full overflow-hidden">
            {/* Atmospheric overlay to blend native warm highlight with blueprint colors */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            <img 
              src="/portrait.jpg" 
              alt="Dava Ardana - Cinematic Portrait"
              className="w-full h-full object-cover object-center brightness-[0.72] contrast-[1.08] saturate-[0.95]"
              loading="eager"
            />
          </div>
        </div>
      </Container>

      {/* PROJECTS SECTION */}
      <Section id="projects">
        <SectionTitle
          eyebrow={sectionsContent.projects.eyebrow}
          title={sectionsContent.projects.title}
          description={sectionsContent.projects.description}
        />
        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-2">
          {resolvedProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              stack={project.stack}
              slug={project.slug}
              status={project.status}
            />
          ))}
        </div>
      </Section>

      {/* EXPERIENCE SECTION */}
      <Section id="experience">
        <SectionTitle
          eyebrow={sectionsContent.experience.eyebrow}
          title={sectionsContent.experience.title}
          description={sectionsContent.experience.description}
        />

        <div className="mt-12 sm:mt-16">
          {resolvedExperience.map((item, idx) => (
            <ExperienceItem
              key={`${item.company}-${item.role}-${idx}`}
              year={item.year}
              role={item.role}
              company={item.company}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      {/* SKILLS SECTION */}
      <Section id="skills">
        <SectionTitle
          eyebrow={sectionsContent.skills.eyebrow}
          title={sectionsContent.skills.title}
          description={sectionsContent.skills.description}
        />

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-2">
          {resolvedSkills.map((skill) => (
            <SkillGroup
              key={skill.category}
              title={skill.category}
              items={skill.items}
            />
          ))}
        </div>
      </Section>

      {/* CONTACT SECTION */}
      <Section id="contact">
        <SectionTitle
          eyebrow={sectionsContent.contact.eyebrow}
          title={sectionsContent.contact.title}
          description={sectionsContent.contact.description}
        />

        <div className="mt-10 flex flex-col items-start gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={`mailto:${sectionsContent.contact.email}`}
            className="inline-flex min-h-11 items-center rounded-full border border-white/10 px-6 py-3 text-sm text-white transition-colors duration-300 hover:border-white/20 hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            {sectionsContent.contact.ctaLabel}
          </a>

          {sectionsContent.contact.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="py-2 text-sm text-zinc-400 transition-colors duration-300 hover:text-white sm:py-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded px-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Section>
    </main>
  );
}
