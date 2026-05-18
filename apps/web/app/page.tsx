import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionTitle } from "@/components/ui/section-title";
import { ProjectCard } from "@/components/ui/project-card";
import { ExperienceItem } from "@/components/ui/experience-item";
import { SkillGroup } from "@/components/ui/skill-group";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black pt-16 text-white">
      {/* HERO SECTION */}
      <Container className="flex min-h-screen items-center">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Full-Stack Engineer & Cloud Architect
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Building scalable
              <br />
              digital products
              <br />
              with modern
              <br />
              web architecture.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
              I design and develop modern digital systems focused on
              performance, scalability, and clean user experience.
            </p>
          </FadeIn>
        </div>
      </Container>

      {/* PROJECTS SECTION */}
      <Section id="projects">
        <SectionTitle
          eyebrow="Featured Work"
          title="Selected Projects"
          description="A collection of frontend systems, cloud-native applications, and modern digital products focused on scalability and user experience."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Cloud Infrastructure Dashboard"
            description="A scalable monitoring platform built for cloud-native infrastructure management and operational analytics."
            stack={["Next.js", "NestJS", "PostgreSQL"]}
          />

          <ProjectCard
            title="AI Workflow Platform"
            description="Modern AI workflow system integrating automation pipelines, prompt orchestration, and scalable API architecture."
            stack={["React", "Laravel", "OpenAI"]}
          />
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <SectionTitle
          eyebrow="Experience"
          title="Engineering Journey"
          description="Focused on building scalable systems, modern frontend experiences, and cloud-native applications."
        />

        <div className="mt-16">
          <ExperienceItem
            year="2024 — Present"
            role="Full-Stack Developer"
            company="Freelance & Independent Projects"
            description="Developing modern web applications using scalable frontend architecture, backend systems, and cloud-native workflows."
          />

          <ExperienceItem
            year="2023 — 2024"
            role="Frontend Developer"
            company="Personal Product Development"
            description="Focused on building responsive interfaces, reusable design systems, and performant React applications."
          />
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <SectionTitle
          eyebrow="Tech Stack"
          title="Technologies & Tools"
          description="Focused on modern frontend systems, scalable backend architecture, and cloud-native development workflows."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <SkillGroup
            title="Frontend"
            items={[
              "Next.js",
              "React",
              "TypeScript",
              "TailwindCSS",
              "Framer Motion",
            ]}
          />

          <SkillGroup
            title="Backend"
            items={["NestJS", "Laravel", "Node.js", "PostgreSQL", "REST API"]}
          />

          <SkillGroup
            title="Cloud & DevOps"
            items={["Google Cloud", "Docker", "Cloud Run", "Firebase", "CI/CD"]}
          />

          <SkillGroup
            title="AI & Automation"
            items={[
              "OpenAI API",
              "Claude API",
              "Prompt Engineering",
              "Workflow Automation",
            ]}
          />
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
  <SectionTitle
    eyebrow="Contact"
    title="Let’s build something meaningful."
    description="Open for collaborations, freelance projects, and modern digital product development."
  />

  <div className="mt-12 flex flex-wrap items-center gap-4">
    <a
      href="mailto:dava@example.com"
      className="rounded-full border border-white/10 px-6 py-3 text-sm text-white transition-colors duration-300 hover:border-white/20 hover:bg-white hover:text-black"
    >
      Get in touch
    </a>

    <a
      href="https://github.com/dapaaa11"
      target="_blank"
      className="text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
    >
      GitHub
    </a>

    <a
      href="https://linkedin.com"
      target="_blank"
      className="text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
    >
      LinkedIn
    </a>
  </div>
</Section>
    </main>
  );
}
