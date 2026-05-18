import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionTitle } from "@/components/ui/section-title";
import { ProjectCard } from "@/components/ui/project-card";
import { ExperienceItem } from "@/components/ui/experience-item";
import { SkillGroup } from "@/components/ui/skill-group";
import { getHomePageContent } from "@/lib/sanity/content";

export default async function HomePage() {
  const content = await getHomePageContent();
  const headlineLines = content.hero.headline.split("\n").filter(Boolean);

  return (
    <main className="min-h-screen bg-black pt-16 text-white">
      {/* HERO SECTION */}
      <Container className="flex min-h-[calc(100svh-6rem)] items-center py-20 sm:min-h-[calc(100svh-4rem)] sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="mb-5 max-w-xs text-xs uppercase leading-relaxed tracking-[0.24em] text-zinc-500 sm:mb-6 sm:max-w-none sm:text-sm sm:tracking-[0.3em]">
              {content.hero.eyebrow}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="text-[clamp(2.75rem,15vw,4.5rem)] font-semibold leading-[0.95] tracking-tight lg:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {headlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-zinc-400 sm:mt-8 lg:text-lg">
              {content.hero.subheadline}
            </p>
          </FadeIn>
        </div>
      </Container>

      {/* PROJECTS SECTION */}
      <Section id="projects">
        <SectionTitle
          eyebrow={content.sections.projects.eyebrow}
          title={content.sections.projects.title}
          description={content.sections.projects.description}
        />
        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-2">
          {content.projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              stack={project.stack}
              slug={project.slug}
            />
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <SectionTitle
          eyebrow={content.sections.experience.eyebrow}
          title={content.sections.experience.title}
          description={content.sections.experience.description}
        />

        <div className="mt-12 sm:mt-16">
          {content.experience.map((item) => (
            <ExperienceItem
              key={`${item.company}-${item.role}`}
              year={item.year}
              role={item.role}
              company={item.company}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <SectionTitle
          eyebrow={content.sections.skills.eyebrow}
          title={content.sections.skills.title}
          description={content.sections.skills.description}
        />

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-2">
          {content.skills.map((skill) => (
            <SkillGroup
              key={skill.category}
              title={skill.category}
              items={skill.items}
            />
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <SectionTitle
          eyebrow={content.sections.contact.eyebrow}
          title={content.sections.contact.title}
          description={content.sections.contact.description}
        />

        <div className="mt-10 flex flex-col items-start gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={`mailto:${content.sections.contact.email}`}
            className="inline-flex min-h-11 items-center rounded-full border border-white/10 px-6 py-3 text-sm text-white transition-colors duration-300 hover:border-white/20 hover:bg-white hover:text-black"
          >
            {content.sections.contact.ctaLabel}
          </a>

          {content.sections.contact.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="py-2 text-sm text-zinc-400 transition-colors duration-300 hover:text-white sm:py-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Section>
    </main>
  );
}
