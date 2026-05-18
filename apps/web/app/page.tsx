import { Container } from "@/components/layout/container";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Container className="flex min-h-screen items-center">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Full-Stack Engineer & Cloud Architect
          </p>

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

          <p className="mt-8 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
            I design and develop modern digital systems focused on
            performance, scalability, and clean user experience.
          </p>
        </div>
      </Container>
    </main>
  );
}