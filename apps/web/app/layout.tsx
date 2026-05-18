import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/motion/smooth-scroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

import { constructMetadata, SITE_URL } from "@/lib/seo";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dava Ardana",
    "jobTitle": "Full-Stack Engineer & Cloud Architect",
    "url": SITE_URL,
    "image": `${SITE_URL}/og-image.png`,
    "sameAs": [
      "https://github.com/dapaaa11",
      "https://linkedin.com"
    ],
    "knowsAbout": [
      "Software Engineering",
      "Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Laravel",
      "Cloud Infrastructure",
      "Google Cloud Platform",
      "Docker",
      "System Architecture"
    ],
    "description": "Full-Stack Engineer & Cloud Architect building scalable, modern digital systems with clean craftsmanship."
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} bg-black font-sans text-white antialiased`}
      >
        {/* Person JSON-LD Schema for rich snippet indexing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
