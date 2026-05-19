import { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://davaardana.com";

interface ConstructMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
  ogType?: "website" | "article";
}

export function constructMetadata({
  title = "Dava Ardana",
  description = "Full-Stack Engineer & Cloud Architect focused on fast, clean digital systems and thoughtful user experiences.",
  image = "/og-image.png",
  noIndex = false,
  canonical,
  ogType = "website",
}: ConstructMetadataProps = {}): Metadata {
  const pageTitle = title === "Dava Ardana" ? title : `${title} | Dava Ardana`;
  
  return {
    title: pageTitle,
    description,
    keywords: [
      "Dava Ardana",
      "Full-Stack Engineer",
      "Cloud Architect",
      "React Developer",
      "Next.js Developer",
      "TypeScript",
      "NestJS",
      "Laravel",
      "Google Cloud",
      "Docker",
      "Software Engineer Portfolio",
      "System Architecture",
      "Clean Code",
      "Minimalist Design",
    ],
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonical ? `${SITE_URL}${canonical}` : SITE_URL,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: SITE_URL + (canonical || ""),
      siteName: "Dava Ardana Portfolio",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${pageTitle} Preview Image`,
        },
      ],
      type: ogType,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
