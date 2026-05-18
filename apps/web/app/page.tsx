import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black pt-16 text-white">
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
    </main>
  );
}
