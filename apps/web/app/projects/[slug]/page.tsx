import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { ProjectMediaShowcase } from "@/components/ui/project-media-showcase";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/sanity/content";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import { OptimizedImage } from "@/components/ui/optimized-image";

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

  // Project-specific metrics and architectural specs for richer storytelling
  const isCloudInfra = slug === "cloud-infrastructure-dashboard";

  const metrics = isCloudInfra
    ? [
        { label: "Telemetry Ingestion Rate", value: "10M+ events/s", desc: "Sub-second live streaming payload loops." },
        { label: "Edge Query Latency", value: "< 15ms avg", desc: "Aggressive redis layer state caching." },
        { label: "Infrastructure Load", value: "-30% CPU", desc: "Optimized connection pool background workers." },
        { label: "Deployment SLA", value: "99.99% Uptime", desc: "High availability multi-cloud replication databases." },
      ]
    : [
        { label: "Embedding Cache Hits", value: "45% Token Savings", desc: "Persistent semantic state lookup registries." },
        { label: "Pipeline Step Latency", value: "-50% Faster", desc: "Asynchronous task workers queue orchestration." },
        { label: "Autonomous Swarms", value: "256 Parallel", desc: "Elastic scale serverless state machine agents." },
        { label: "Vector Index Retrieval", value: "< 8ms response", desc: "Optimized spatial index cosine calculation search." },
      ];

  const challenges = isCloudInfra
    ? "Processing millions of telemetry events per second across multi-cloud environments while maintaining sub-second client dashboard paint cycles. Legacy systems suffered from memory bloat and connection pooling bottlenecks under traffic spikes."
    : "Orchestrating complex, nested multi-agent execution graphs while managing prompt contexts, semantic retrieval latencies, and token spend thresholds. Parallel step loops could lead to recursive execution overflows.";

  const solutions = isCloudInfra
    ? "Designed a modular telemetry pipeline utilizing background worker threads, connection polling, and dynamic database routing. Edge delivery nodes aggressively cache computed analytical summaries while streaming raw loops to background workers."
    : "Built a persistent visual DAG workflow executor backed by an elastic serverless state machine. Integrated vector caching databases to skip repeat prompts and implemented self-healing logic to intercept looping agents.";

  const galleryImageUrl = isCloudInfra
    ? "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&h=400&q=80"
    : "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&h=400&q=80";

  const blueprintElement = isCloudInfra ? (
    <div className="rounded-xl border border-white/5 bg-zinc-950 p-6 font-mono text-[10px] sm:text-xs text-zinc-500 space-y-4">
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <span className="text-zinc-400 uppercase font-semibold">System Architecture Flow</span>
        <span className="text-emerald-500 animate-pulse">● LIVE TELEMETRY</span>
      </div>
      <div className="grid gap-2 grid-cols-3 items-center text-center">
        <div className="rounded border border-white/10 bg-white/[0.02] p-3 text-zinc-300">
          <div className="font-semibold text-white mb-1">Telemetry Nodes</div>
          <div className="text-[10px] text-zinc-500">Multi-cloud endpoints</div>
        </div>
        <div className="text-zinc-600">──────►</div>
        <div className="rounded border border-emerald-500/20 bg-emerald-500/[0.02] p-3 text-emerald-400">
          <div className="font-semibold text-white mb-1">Queue Worker Pool</div>
          <div className="text-[10px] text-emerald-600">Background ingestion</div>
        </div>
      </div>
      <div className="text-center text-zinc-600 font-bold py-1">▲</div>
      <div className="grid gap-2 grid-cols-3 items-center text-center">
        <div className="rounded border border-white/10 bg-white/[0.02] p-3 text-zinc-300 col-span-3">
          <div className="font-semibold text-white mb-1">Edge Cache Summary Layer</div>
          <div className="text-[10px] text-zinc-500">Redis cache summaries served to client browsers</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="rounded-xl border border-white/5 bg-zinc-950 p-6 font-mono text-[10px] sm:text-xs text-zinc-500 space-y-4">
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <span className="text-zinc-400 uppercase font-semibold">Semantic Vector DAG Flow</span>
        <span className="text-indigo-500 animate-pulse">● SWARM AGENTS</span>
      </div>
      <div className="grid gap-2 grid-cols-3 items-center text-center">
        <div className="rounded border border-white/10 bg-white/[0.02] p-3 text-zinc-300">
          <div className="font-semibold text-white mb-1">User Prompt Graph</div>
          <div className="text-[10px] text-zinc-500">DAG execution builder</div>
        </div>
        <div className="text-zinc-600">──────►</div>
        <div className="rounded border border-indigo-500/20 bg-indigo-500/[0.02] p-3 text-indigo-400">
          <div className="font-semibold text-white mb-1">Vector Search</div>
          <div className="text-[10px] text-indigo-600">Semantic cache validation</div>
        </div>
      </div>
      <div className="text-center text-zinc-600 font-bold py-1">▲</div>
      <div className="grid gap-2 grid-cols-3 items-center text-center">
        <div className="rounded border border-white/10 bg-white/[0.02] p-3 text-zinc-300 col-span-3">
          <div className="font-semibold text-white mb-1">Parallel Serverless Orchestration</div>
          <div className="text-[10px] text-zinc-500">Self-healing agent loop validation layer</div>
        </div>
      </div>
    </div>
  );

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
          <div className="lg:col-span-2 space-y-12">
            
            {/* Storytelling - Section 1: Overview */}
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

            {/* Storytelling - Section 2: Technical Specs / Metrics */}
            <FadeIn delay={0.25}>
              <div className="border-t border-white/10 pt-10">
                <h3
                  className="text-xl font-semibold tracking-tight text-white mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  System Architecture & Metrics
                </h3>
                
                {/* Metrics Grid */}
                <div className="grid gap-4 sm:grid-cols-2 mb-8">
                  {metrics.map((metric) => (
                    <div 
                      key={metric.label}
                      className="rounded-xl border border-white/5 bg-white/[0.01] p-5 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 group"
                    >
                      <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1 group-hover:text-zinc-400 transition-colors duration-300">{metric.label}</span>
                      <span className="block text-2xl font-semibold text-white tracking-tight mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                        {metric.value}
                      </span>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">{metric.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Storytelling - Section 3: The Challenge & The Engineering Solution */}
            <FadeIn delay={0.3}>
              <div className="border-t border-white/10 pt-10 space-y-8">
                <div>
                  <h3
                    className="text-xl font-semibold tracking-tight text-white mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    The Engineering Challenge
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                    {challenges}
                  </p>
                </div>

                <div>
                  <h3
                    className="text-xl font-semibold tracking-tight text-white mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Architectural Solution
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                    {solutions}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Storytelling - Section 4: Responsive Media & Architectural Diagrams Gallery */}
            <FadeIn delay={0.35}>
              <div className="border-t border-white/10 pt-10">
                <h3
                  className="text-xl font-semibold tracking-tight text-white mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Technical Schematics & Media
                </h3>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* CSS Pipeline blueprint diagram */}
                  {blueprintElement}
                  
                  {/* Premium Unsplash detail image representation optimized by OptimizedImage */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 group shadow-lg">
                    <OptimizedImage
                      src={galleryImageUrl}
                      alt="Telemetry close-up system details"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>

          {/* Sticky Technical Sidebar */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <FadeIn delay={0.4}>
              <div className="rounded-xl border border-white/10 bg-white/[0.01] p-6 sm:p-8 backdrop-blur-md hover:border-white/20 transition-colors duration-500 group">
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <h3
                    className="text-xs uppercase tracking-[0.2em] text-white font-medium"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Specifications
                  </h3>
                  {project.status && (
                    <div className="flex items-center gap-1.5">
                      <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${project.status.toLowerCase().includes("alpha") ? "bg-amber-500" : "bg-emerald-500"}`} />
                      <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 font-medium">
                        {project.status}
                      </span>
                    </div>
                  )}
                </div>

                {/* Tech Stack List */}
                <div className="mb-6 pb-6 border-b border-white/5">
                  <span className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-3">Technologies</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/5 px-2.5 py-1 text-xs text-zinc-300 bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metadata Items */}
                <div className="space-y-3.5 mb-8 text-xs sm:text-sm">
                  <div className="flex justify-between items-center border-b border-white/[0.02] pb-2">
                    <span className="text-zinc-500">Timeline</span>
                    <span className="text-zinc-300 font-medium">{formattedDate}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/[0.02] pb-2">
                    <span className="text-zinc-500">Role</span>
                    <span className="text-zinc-300 font-medium">Full-Stack Engineer</span>
                  </div>
                  {project.status && (
                    <div className="flex justify-between items-center border-b border-white/[0.02] pb-2">
                      <span className="text-zinc-500">Status</span>
                      <span className="text-zinc-300 font-medium">{project.status}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Infrastructure</span>
                    <span className="text-zinc-300 font-medium">Edge Optimized</span>
                  </div>
                </div>

                {/* Quick Link Actions */}
                <div className="grid gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex min-h-10 items-center justify-center rounded-lg bg-white text-black px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-zinc-200 active:scale-[0.98]"
                    >
                      <span>Launch Live App</span>
                      <span className="ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1 font-bold">→</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex min-h-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white/5 hover:border-white/20 active:scale-[0.98]"
                    >
                      <span>View Source Code</span>
                      <span className="ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1 font-bold">→</span>
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
