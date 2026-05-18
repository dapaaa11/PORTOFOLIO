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
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
          {eyebrow}
        </p>
      )}

      <h2
        className="text-3xl font-semibold tracking-tight text-white md:text-5xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-base leading-relaxed text-zinc-400 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}