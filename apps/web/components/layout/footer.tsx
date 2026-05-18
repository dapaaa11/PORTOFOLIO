export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 sm:py-12">
      <div className="container-layout flex flex-col gap-3 text-[13px] leading-relaxed text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Dava Ardana</p>

        <p className="max-w-md md:text-right">
          Built with Next.js, TypeScript, and modern web technologies.
        </p>
      </div>
    </footer>
  );
}
