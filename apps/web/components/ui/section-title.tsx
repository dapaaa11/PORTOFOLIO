interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="mb-4 text-xs uppercase tracking-[0.24em] text-zinc-500 sm:tracking-[0.3em]">
          {eyebrow}
        </p>
      )}

      <h2
        className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:mt-6 lg:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
