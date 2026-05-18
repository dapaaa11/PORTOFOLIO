"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "id";

export const translationsEn = {
  nav: {
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    close: "Close",
  },
  hero: {
    eyebrow: "Full-Stack Engineer & Cloud Architect",
    headline: "Building scalable\ndigital products\nwith modern\nweb architecture.",
    subheadline: "I design and develop modern digital systems focused on performance, scalability, and clean user experience.",
  },
  sections: {
    projects: {
      eyebrow: "Featured Work",
      title: "Selected Projects",
      description: "A collection of frontend systems, cloud-native applications, and modern digital products focused on scalability and user experience.",
    },
    experience: {
      eyebrow: "Experience",
      title: "Engineering Journey",
      description: "Focused on building scalable systems, modern frontend experiences, and cloud-native applications.",
    },
    skills: {
      eyebrow: "Tech Stack",
      title: "Technologies & Tools",
      description: "Focused on modern frontend systems, scalable backend architecture, and cloud-native development workflows.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something meaningful.",
      description: "Open for collaborations, freelance projects, and modern digital product development.",
      ctaLabel: "Get in touch",
      email: "dava@example.com",
    }
  },
  projectsFallback: [
    {
      title: "Cloud Infrastructure Dashboard",
      slug: "cloud-infrastructure-dashboard",
      status: "Ongoing - Active Beta",
      description: "An advanced multi-cloud telemetry and orchestration dashboard engineered for high-throughput stream processing and operational visibility. The platform ingests over 10 million metrics per second across global edge networks, applying real-time analytical parsing and structural redis caching. It resolves traditional data-pooling bottlenecks by utilizing custom decoupled worker pools and thread-safe connection queues, delivering instant visual system state updates to client dashboards with sub-80ms rendering latencies.",
      stack: ["Next.js", "NestJS", "PostgreSQL", "Google Cloud", "Docker"],
    },
    {
      title: "AI Workflow Platform",
      slug: "ai-workflow-platform",
      status: "Ongoing - Active Alpha",
      description: "A scalable, persistent Visual DAG Orchestrator engineered to run, monitor, and scale complex multi-agent execution graphs. Backed by an elastic serverless state machine, it integrates persistent vector state lookup registries to aggressively skip repeat LLM calls, achieving a massive 45% reduction in overall prompt token consumption. It employs an under-the-hood self-healing logic layer that continuously monitors agent execution threads, intercepting recursive loop overflows and optimizing nested execution tree latencies.",
      stack: ["React", "Laravel", "OpenAI", "Pinecone", "Docker"],
    }
  ],
  experienceList: [
    {
      year: "2024 - Present",
      role: "Full-Stack Developer",
      company: "Freelance & Independent Projects",
      description: "Developing modern web applications using scalable frontend architecture, backend systems, and cloud-native workflows.",
    },
    {
      year: "2023 - 2024",
      role: "Frontend Developer",
      company: "Personal Product Development",
      description: "Focused on building responsive interfaces, reusable design systems, and performant React applications.",
    }
  ],
  skillsList: [
    {
      category: "Frontend",
      items: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
    },
    {
      category: "Backend",
      items: ["NestJS", "Laravel", "Node.js", "PostgreSQL", "REST API"],
    },
    {
      category: "Cloud & DevOps",
      items: ["Google Cloud", "Docker", "Cloud Run", "Firebase", "CI/CD"],
    },
    {
      category: "AI & Automation",
      items: ["OpenAI API", "Claude API", "Prompt Engineering", "Workflow Automation"],
    }
  ],
  projectDetails: {
    backToProjects: "Back to projects",
    github: "GitHub Repository",
    liveDemo: "Live Demo",
    stack: "Technologies",
    status: "Status",
    published: "Published At",
  }
};

export const translationsId = {
  nav: {
    projects: "Proyek",
    experience: "Pengalaman",
    contact: "Kontak",
    close: "Tutup",
  },
  hero: {
    eyebrow: "Full-Stack Engineer & Cloud Architect",
    headline: "Membangun produk\ndigital terukur\ndengan arsitektur\nweb modern.",
    subheadline: "Saya merancang dan mengembangkan sistem digital modern yang berfokus pada performa, skalabilitas, dan pengalaman pengguna yang bersih.",
  },
  sections: {
    projects: {
      eyebrow: "Karya Unggulan",
      title: "Proyek Pilihan",
      description: "Kumpulan sistem frontend, aplikasi cloud-native, dan produk digital modern yang berfokus pada skalabilitas dan pengalaman pengguna.",
    },
    experience: {
      eyebrow: "Pengalaman",
      title: "Perjalanan Karir",
      description: "Berfokus pada pembangunan sistem terukur, pengalaman frontend modern, dan aplikasi cloud-native.",
    },
    skills: {
      eyebrow: "Keahlian",
      title: "Teknologi & Alat",
      description: "Berfokus pada sistem frontend modern, arsitektur backend yang terukur, dan alur kerja pengembangan cloud-native.",
    },
    contact: {
      eyebrow: "Kontak",
      title: "Mari bangun sesuatu yang berarti.",
      description: "Terbuka untuk kolaborasi, proyek lepas (freelance), dan pengembangan produk digital modern.",
      ctaLabel: "Hubungi saya",
      email: "dava@example.com",
    }
  },
  projectsFallback: [
    {
      title: "Cloud Infrastructure Dashboard",
      slug: "cloud-infrastructure-dashboard",
      status: "Berjalan - Beta Aktif",
      description: "Dasbor telemetri dan orkestrasi multi-cloud canggih yang dirancang untuk pemrosesan aliran data throughput tinggi dan visibilitas operasional. Platform ini mencerna lebih dari 10 juta metrik per detik di seluruh jaringan edge global, menerapkan penguraian analitis waktu nyata dan caching redis struktural. Masalah latensi diatasi dengan menggunakan worker pool terpisah dan antrean koneksi thread-safe, menghadirkan pembaruan instan ke dasbor klien dengan latensi rendering di bawah 80 milidetik.",
      stack: ["Next.js", "NestJS", "PostgreSQL", "Google Cloud", "Docker"],
    },
    {
      title: "AI Workflow Platform",
      slug: "ai-workflow-platform",
      status: "Berjalan - Alpha Aktif",
      description: "Orkestrator DAG Visual yang terukur dan persisten untuk menjalankan, memantau, dan menskalakan graf eksekusi multi-agen. Didukung oleh serverless state machine elastis, platform ini mengintegrasikan repositori pencarian status vektor persisten untuk melewatkan panggilan LLM berulang secara agresif, menghasilkan pengurangan konsumsi token prompt sebesar 45%. Ini menggunakan lapisan logika penyembuhan mandiri yang terus memantau utas eksekusi agen untuk mengoptimalkan latensi.",
      stack: ["React", "Laravel", "OpenAI", "Pinecone", "Docker"],
    }
  ],
  experienceList: [
    {
      year: "2024 - Sekarang",
      role: "Full-Stack Developer",
      company: "Proyek Lepas & Independen",
      description: "Mengembangkan aplikasi web modern menggunakan arsitektur frontend yang terukur, sistem backend, dan alur kerja cloud-native.",
    },
    {
      year: "2023 - 2024",
      role: "Frontend Developer",
      company: "Pengembangan Produk Pribadi",
      description: "Berfokus pada pembangunan antarmuka responsif, sistem desain yang dapat digunakan kembali, dan aplikasi React berkinerja tinggi.",
    }
  ],
  skillsList: [
    {
      category: "Frontend",
      items: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
    },
    {
      category: "Backend",
      items: ["NestJS", "Laravel", "Node.js", "PostgreSQL", "REST API"],
    },
    {
      category: "Cloud & DevOps",
      items: ["Google Cloud", "Docker", "Cloud Run", "Firebase", "CI/CD"],
    },
    {
      category: "AI & Automation",
      items: ["OpenAI API", "Claude API", "Prompt Engineering", "Otomatisasi Alur Kerja"],
    }
  ],
  projectDetails: {
    backToProjects: "Kembali ke proyek",
    github: "Repositori GitHub",
    liveDemo: "Demo Langsung",
    stack: "Teknologi",
    status: "Status",
    published: "Diterbitkan Pada",
  }
};

export const cmsTranslations = {
  en: {
    "silaku-fsip": {
      description: "engineering narrative",
      status: "Completed - Production Ready",
    }
  },
  id: {
    "silaku-fsip": {
      description: "narasi rekayasa perangkat lunak",
      status: "Selesai - Siap Produksi",
    }
  }
};

export type Translations = typeof translationsEn;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  translateCmsProject: (slug: string, field: "description" | "status", fallbackValue: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read preference from localStorage
    const savedLang = localStorage.getItem("portfolio_lang") as Language;
    if (savedLang === "en" || savedLang === "id") {
      setLanguageState(savedLang);
    } else {
      // Detect browser language
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === "id") {
        setLanguageState("id");
      }
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio_lang", lang);
    // Also set standard html lang attribute
    document.documentElement.lang = lang;
  };

  const t = language === "en" ? translationsEn : translationsId;

  const translateCmsProject = (slug: string, field: "description" | "status", fallbackValue: string): string => {
    const translationSet = cmsTranslations[language] as any;
    if (translationSet && translationSet[slug] && translationSet[slug][field]) {
      return translationSet[slug][field];
    }
    return fallbackValue;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translateCmsProject }}>
      {mounted ? children : <div style={{ opacity: 0 }}>{children}</div>}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
