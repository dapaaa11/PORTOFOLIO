export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="container-layout flex min-h-screen items-center">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Full-Stack Architect & Cloud Engineer
          </p>

          <h1
            className="font-serif text-6xl leading-none md:text-8xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Architecting
            <br />
            Digital Excellence
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            Building scalable digital systems with cinematic precision,
            modern frontend craftsmanship, and cloud-native architecture.
          </p>
        </div>
      </section>
    </main>
  );
}