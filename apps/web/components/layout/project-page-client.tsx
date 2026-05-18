"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { ProjectMediaShowcase } from "@/components/ui/project-media-showcase";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { ProjectContent } from "@/lib/sanity/types";
import { useLanguage } from "@/lib/context/language-context";

interface ProjectPageClientProps {
  slug: string;
  project: ProjectContent;
}

export function ProjectPageClient({ slug, project }: ProjectPageClientProps) {
  const { language, t, translateCmsProject } = useLanguage();

  const isCloudInfra = slug === "cloud-infrastructure-dashboard";

  // Dynamic Case Study Localization Definitions
  const localizations = {
    en: {
      caseStudy: "Case Study",
      projectOverview: "Project Overview",
      sysArch: "System Architecture & Metrics",
      engineeringChallenge: "The Engineering Challenge",
      archSolution: "Architectural Solution",
      techSchematics: "Technical Schematics & Media",
      specifications: "Specifications",
      timeline: "Timeline",
      role: "Role",
      roleValue: "Full-Stack Engineer",
      infrastructure: "Infrastructure",
      infraValue: "Edge Optimized",
      launchApp: "Launch Live App",
      viewCode: "View Source Code",
      backLink: "Back to portfolio",
      challenges: isCloudInfra
        ? "Processing millions of telemetry events per second across multi-cloud environments while maintaining sub-second client dashboard paint cycles. Legacy systems suffered from memory bloat and connection pooling bottlenecks under traffic spikes."
        : "Orchestrating complex, nested multi-agent execution graphs while managing prompt contexts, semantic retrieval latencies, and token spend thresholds. Parallel step loops could lead to recursive execution overflows.",
      solutions: isCloudInfra
        ? "Designed a modular telemetry pipeline utilizing background worker threads, connection polling, and dynamic database routing. Edge delivery nodes aggressively cache computed analytical summaries while streaming raw loops to background workers."
        : "Built a persistent visual DAG workflow executor backed by an elastic serverless state machine. Integrated vector caching databases to skip repeat prompts and implemented self-healing logic to intercept looping agents.",
      metrics: isCloudInfra
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
          ],
      flowLabel: isCloudInfra ? "System Architecture Flow" : "Semantic Vector DAG Flow",
      statusLabel: isCloudInfra ? "● LIVE TELEMETRY" : "● SWARM AGENTS",
      node1Title: isCloudInfra ? "Telemetry Nodes" : "User Prompt Graph",
      node1Desc: isCloudInfra ? "Multi-cloud endpoints" : "DAG execution builder",
      node2Title: isCloudInfra ? "Queue Worker Pool" : "Vector Search",
      node2Desc: isCloudInfra ? "Background ingestion" : "Semantic cache validation",
      node3Title: isCloudInfra ? "Edge Cache Summary Layer" : "Parallel Serverless Orchestration",
      node3Desc: isCloudInfra ? "Redis cache summaries served to client browsers" : "Self-healing agent loop validation layer",
    },
    id: {
      caseStudy: "Studi Kasus",
      projectOverview: "Tinjauan Proyek",
      sysArch: "Arsitektur Sistem & Metrik",
      engineeringChallenge: "Tantangan Rekayasa",
      archSolution: "Solusi Arsitektur",
      techSchematics: "Skema Teknis & Media",
      specifications: "Spesifikasi",
      timeline: "Linimasa",
      role: "Peran",
      roleValue: "Insinyur Full-Stack",
      infrastructure: "Infrastruktur",
      infraValue: "Teroptimasi Edge",
      launchApp: "Buka Aplikasi",
      viewCode: "Lihat Kode Sumber",
      backLink: "Kembali ke portofolio",
      challenges: isCloudInfra
        ? "Memproses jutaan event telemetri per detik di berbagai lingkungan multi-cloud sambil mempertahankan siklus rendering dasbor klien di bawah satu detik. Sistem warisan mengalami kelebihan memori dan hambatan penggabungan koneksi di bawah lonjakan lalu lintas."
        : "Mengatur graf eksekusi multi-agen yang kompleks dan bersarang sambil mengelola konteks prompt, latensi pengambilan semantik, dan ambang batas konsumsi token. Loop langkah paralel dapat menyebabkan kelebihan eksekusi rekursif.",
      solutions: isCloudInfra
        ? "Merancang pipeline telemetri modular menggunakan utas pekerja latar belakang (worker threads), pengumpulan koneksi, dan perutean database dinamis. Node pengiriman edge secara agresif menyimpan cache ringkasan analitis yang dihitung."
        : "Membangun eksekutor alur kerja DAG visual persisten yang didukung oleh serverless state machine elastis. Mengintegrasikan database caching vektor untuk melewatkan prompt berulang dan menerapkan logika penyembuhan mandiri.",
      metrics: isCloudInfra
        ? [
            { label: "Tingkat Ingestion Telemetri", value: "10Jt+ event/dtk", desc: "Loop streaming telemetri langsung di bawah satu detik." },
            { label: "Latensi Kueri Edge", value: "< 15md rata-rata", desc: "Caching status layer redis yang sangat agresif." },
            { label: "Beban Infrastruktur", value: "-30% CPU", desc: "Worker pool latar belakang dengan pooling koneksi yang dioptimalkan." },
            { label: "SLA Penyebaran", value: "Uptime 99.99%", desc: "Database replikasi multi-cloud ketersediaan tinggi." },
          ]
        : [
            { label: "Hit Cache Embedding", value: "Hemat 45% Token", desc: "Repositori pencarian status vektor persisten." },
            { label: "Latensi Langkah Pipeline", value: "50% Lebih Cepat", desc: "Orkestrasi antrean pekerja tugas asinkron." },
            { label: "Swarm Otonom", value: "256 Paralel", desc: "Agen serverless state machine dengan skala elastis." },
            { label: "Pengambilan Indeks Vektor", value: "< 8md respons", desc: "Pencarian perhitungan kosinus indeks spasial yang dioptimalkan." },
          ],
      flowLabel: isCloudInfra ? "Alur Arsitektur Sistem" : "Alur DAG Vektor Semantik",
      statusLabel: isCloudInfra ? "● TELEMETRI LANGSUNG" : "● AGEN SWARM",
      node1Title: isCloudInfra ? "Node Telemetri" : "Graf Prompt Pengguna",
      node1Desc: isCloudInfra ? "Titik akhir multi-cloud" : "Pembangun eksekusi DAG",
      node2Title: isCloudInfra ? "Worker Pool Antrean" : "Pencarian Vektor",
      node2Desc: isCloudInfra ? "Ingestion latar belakang" : "Validasi cache semantik",
      node3Title: isCloudInfra ? "Lapisan Ringkasan Cache Edge" : "Orkestrasi Serverless Paralel",
      node3Desc: isCloudInfra ? "Ringkasan cache Redis dikirimkan ke peramban klien" : "Lapisan validasi loop agen mandiri",
    },
  };

  const activeLoc = language === "en" ? localizations.en : localizations.id;

  // Render variables derived reactively
  const resolvedProject = {
    ...project,
    title: project.title,
    description: translateCmsProject(slug, "description", project.description),
    status: project.status ? translateCmsProject(slug, "status", project.status) : undefined,
  };

  const isFallbackProject = slug === "cloud-infrastructure-dashboard" || slug === "ai-workflow-platform";
  
  // Custom Fallback Project localization override if applicable
  if (isFallbackProject) {
    const match = t.projectsFallback.find((p) => p.slug === slug);
    if (match) {
      resolvedProject.title = match.title;
      resolvedProject.status = match.status;
      resolvedProject.description = match.description;
    }
  }

  const descriptionParagraphs = resolvedProject.description.split("\n").filter(Boolean);

  const formattedDate = project.publishedAt
    ? new Date(project.publishedAt).toLocaleDateString(language === "en" ? "en-US" : "id-ID", {
        year: "numeric",
        month: "long",
      })
    : language === "en" ? "May 2026" : "Mei 2026";

  const blueprintElement = (
    <div className="rounded-xl border border-white/5 bg-zinc-950 p-6 font-mono text-[10px] sm:text-xs text-zinc-500 space-y-4">
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <span className="text-zinc-400 uppercase font-semibold">{activeLoc.flowLabel}</span>
        <span className={`${isCloudInfra ? "text-emerald-500" : "text-indigo-500"} animate-pulse`}>{activeLoc.statusLabel}</span>
      </div>
      <div className="grid gap-2 grid-cols-3 items-center text-center">
        <div className="rounded border border-white/10 bg-white/[0.02] p-3 text-zinc-300">
          <div className="font-semibold text-white mb-1">{activeLoc.node1Title}</div>
          <div className="text-[10px] text-zinc-500">{activeLoc.node1Desc}</div>
        </div>
        <div className="text-zinc-600">──────►</div>
        <div className={`rounded border ${isCloudInfra ? "border-emerald-500/20 bg-emerald-500/[0.02] text-emerald-400" : "border-indigo-500/20 bg-indigo-500/[0.02] text-indigo-400"}`}>
          <div className="font-semibold text-white mb-1">{activeLoc.node2Title}</div>
          <div className="text-[10px] text-zinc-600">{activeLoc.node2Desc}</div>
        </div>
      </div>
      <div className="text-center text-zinc-600 font-bold py-1">▲</div>
      <div className="grid gap-2 grid-cols-3 items-center text-center">
        <div className="rounded border border-white/10 bg-white/[0.02] p-3 text-zinc-300 col-span-3">
          <div className="font-semibold text-white mb-1">{activeLoc.node3Title}</div>
          <div className="text-[10px] text-zinc-500">{activeLoc.node3Desc}</div>
        </div>
      </div>
    </div>
  );

  const galleryImageUrl = isCloudInfra
    ? "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&h=400&q=80"
    : "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&h=400&q=80";

  return (
    <main id="main-content" className="min-h-screen bg-black pt-24 text-white pb-24 sm:pt-32">
      <Container>
        {/* BACK TO PROJECTS */}
        <FadeIn>
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-zinc-500 transition-colors duration-300 hover:text-white mb-8 sm:mb-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded px-1.5"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span>{activeLoc.backLink}</span>
          </Link>
        </FadeIn>

        {/* HERO TITLE BLOCK */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <FadeIn delay={0.05}>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 font-medium">
              {activeLoc.caseStudy}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {resolvedProject.title}
            </h1>
          </FadeIn>
        </div>

        {/* CINEMATIC MEDIA SHOWCASE */}
        <FadeIn delay={0.15} className="mb-12 sm:mb-16 lg:mb-20">
          <ProjectMediaShowcase
            thumbnailUrl={project.thumbnail?.url}
            thumbnailAlt={project.thumbnail?.alt || resolvedProject.title}
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
                {activeLoc.projectOverview}
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
                  {activeLoc.sysArch}
                </h3>
                
                {/* Metrics Grid */}
                <div className="grid gap-4 sm:grid-cols-2 mb-8">
                  {activeLoc.metrics.map((metric) => (
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
                    {activeLoc.engineeringChallenge}
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                    {activeLoc.challenges}
                  </p>
                </div>

                <div>
                  <h3
                    className="text-xl font-semibold tracking-tight text-white mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {activeLoc.archSolution}
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                    {activeLoc.solutions}
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
                  {activeLoc.techSchematics}
                </h3>

                <div className="grid gap-6 sm:grid-cols-2">
                  {blueprintElement}
                  
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
                    {activeLoc.specifications}
                  </h3>
                  {resolvedProject.status && (
                    <div className="flex items-center gap-1.5">
                      <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${resolvedProject.status.toLowerCase().includes("alpha") || resolvedProject.status.toLowerCase().includes("mulai") ? "bg-amber-500" : "bg-emerald-500"}`} />
                      <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 font-medium">
                        {resolvedProject.status}
                      </span>
                    </div>
                  )}
                </div>

                {/* Tech Stack List */}
                <div className="mb-6 pb-6 border-b border-white/5">
                  <span className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-3">{t.projectDetails.stack}</span>
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
                    <span className="text-zinc-500">{activeLoc.timeline}</span>
                    <span className="text-zinc-300 font-medium">{formattedDate}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/[0.02] pb-2">
                    <span className="text-zinc-500">{activeLoc.role}</span>
                    <span className="text-zinc-300 font-medium">{activeLoc.roleValue}</span>
                  </div>
                  {resolvedProject.status && (
                    <div className="flex justify-between items-center border-b border-white/[0.02] pb-2">
                      <span className="text-zinc-500">{t.projectDetails.status}</span>
                      <span className="text-zinc-300 font-medium">{resolvedProject.status}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">{activeLoc.infrastructure}</span>
                    <span className="text-zinc-300 font-medium">{activeLoc.infraValue}</span>
                  </div>
                </div>

                {/* Quick Link Actions */}
                <div className="grid gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex min-h-10 items-center justify-center rounded-lg bg-white text-black px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-zinc-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      <span>{activeLoc.launchApp}</span>
                      <span className="ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1 font-bold">→</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex min-h-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white/5 hover:border-white/20 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      <span>{activeLoc.viewCode}</span>
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
