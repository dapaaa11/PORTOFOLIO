import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { WebVitalsReporter } from "@/components/motion/web-vitals";
import { LanguageProvider } from "@/lib/context/language-context";

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
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-zinc-900 focus:text-white focus:font-sans focus:text-xs focus:font-bold focus:uppercase focus:tracking-wider focus:border focus:border-white/20 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300"
        >
          Skip to main content
        </a>
        <WebVitalsReporter />
        {/* Person JSON-LD Schema for rich snippet indexing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SmoothScroll>
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
          </LanguageProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
