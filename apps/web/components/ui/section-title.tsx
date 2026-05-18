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
        <p className="mb-5 text-[11px] uppercase tracking-[0.25em] text-zinc-500 sm:text-xs sm:tracking-[0.3em]">
          {eyebrow}
        </p>
      )}

      <h2
        className="text-[clamp(1.75rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.02em] text-white"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-xl text-[15px] leading-[1.7] text-zinc-400 sm:mt-6 sm:text-base lg:leading-[1.75]">
          {description}
        </p>
      )}
    </div>
  );
}
