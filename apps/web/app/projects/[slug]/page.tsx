import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/sanity/content";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import { ProjectPageClient } from "@/components/layout/project-page-client";

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
    <>
      {/* Dynamic Project JSON-LD Schema for rich snippet indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <ProjectPageClient slug={slug} project={project} />
    </>
  );
}
