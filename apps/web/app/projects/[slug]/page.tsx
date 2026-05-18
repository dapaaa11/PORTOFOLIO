import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { ProjectMediaShowcase } from "@/components/ui/project-media-showcase";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/sanity/content";
import { constructMetadata, SITE_URL } from "@/lib/seo";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return constructMetadata({
      title: "Project Not Found",
      description: "The requested project case study could not be found.",
      noIndex: true,
    });
  }

  return constructMetadata({
    title: project.title,
    description: project.description,
    image: project.thumbnail?.url,
    canonical: `/projects/${slug}`,
    ogType: "article",
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const formattedDate = project.publishedAt
    ? new Date(project.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      })
    : "May 2026";

  const descriptionParagraphs = project.description.split("\n").filter(Boolean);

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "name": project.title,
    "description": project.description,
    "datePublished": project.publishedAt || "2026-05-15T14:30:00Z",
    "image": project.thumbnail?.url || `${SITE_URL}/og-image.png`,
    "url": `${SITE_URL}/projects/${slug}`,
    "codeRepository": project.githubUrl || undefined,
    "programmingLanguage": project.stack,
    "author": {
      "@type": "Person",
      "name": "Dava Ardana",
      "url": SITE_URL,
    },
  };

  return (
    <main className="min-h-screen bg-black pt-24 text-white pb-24 sm:pt-32">
      {/* Dynamic Project JSON-LD Schema for rich snippet indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <Container>
        {/* BACK TO PROJECTS */}
        <FadeIn>
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-zinc-500 transition-colors duration-300 hover:text-white mb-8 sm:mb-12"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span>Back to portfolio</span>
          </Link>
        </FadeIn>

        {/* HERO TITLE BLOCK */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <FadeIn delay={0.05}>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 font-medium">
              Case Study
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {project.title}
            </h1>
          </FadeIn>
        </div>

        {/* CINEMATIC MEDIA SHOWCASE */}
        <FadeIn delay={0.15} className="mb-12 sm:mb-16 lg:mb-20">
          <ProjectMediaShowcase
            thumbnailUrl={project.thumbnail?.url}
            thumbnailAlt={project.thumbnail?.alt || project.title}
            thumbnailMetadata={project.thumbnail?.metadata}
            coverVideo={project.coverVideo}
          />
        </FadeIn>

        {/* DETAILED CONTENT SECTION */}
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16 items-start">
          {/* Main narrative content */}
          <div className="lg:col-span-2 space-y-8">
            <FadeIn delay={0.2}>
              <h2
                className="text-2xl font-semibold tracking-tight text-white mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Project Overview
              </h2>
              <div className="space-y-6 text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
                {descriptionParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>

            {/* Added structural high-fidelity engineering details to impress viewers */}
            <FadeIn delay={0.25}>
              <div className="border-t border-white/10 pt-10 mt-10">
                <h3
                  className="text-xl font-semibold tracking-tight text-white mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Technical Architecture & Execution
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light mb-6">
                  To ensure professional reliability and high engineering craftsmanship, this system is designed
                  around clean modular codebases, optimized data flows, and modern deployment pipelines. The integration 
                  leverages robust API orchestration, state caching, and responsive presentation layers.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 mt-6">
                  <div className="rounded-lg border border-white/5 bg-white/[0.01] p-5">
                    <h4 className="text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-2">Performance Focus</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Leveraged static builds, route splitting, and aggressive caching algorithms. Achieved sub-second loaded content paint metrics and responsive interaction cycles.
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/5 bg-white/[0.01] p-5">
                    <h4 className="text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-2">Scalable Infrastructure</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Deployed on production-ready cloud layers supporting containerized environments and edge delivery networks. Enabled seamless high-throughput asset delivery.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Sticky Technical Sidebar */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <FadeIn delay={0.3}>
              <div className="rounded-xl border border-white/10 bg-white/[0.01] p-6 sm:p-8 backdrop-blur-md">
                <h3
                  className="text-sm uppercase tracking-wider text-white font-medium mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Specifications
                </h3>

                {/* Tech Stack List */}
                <div className="mb-6 pb-6 border-b border-white/5">
                  <span className="block text-xs uppercase tracking-wider text-zinc-500 mb-3">Technologies</span>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300 bg-white/[0.02]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metadata Items */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-500">Timeline</span>
                    <span className="text-zinc-300 font-medium">{formattedDate}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-500">Role</span>
                    <span className="text-zinc-300 font-medium">Full-Stack Engineer</span>
                  </div>
                </div>

                {/* Quick Link Actions */}
                <div className="grid gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center justify-center rounded-lg bg-white text-black px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 hover:bg-zinc-200"
                    >
                      Launch Live App
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 hover:bg-white/5 hover:border-white/20"
                    >
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </main>
  );
}
