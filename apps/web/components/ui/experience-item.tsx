interface ExperienceItemProps {
  year: string;
  role: string;
  company: string;
  description: string;
}

export function ExperienceItem({
  year,
  role,
  company,
  description,
}: ExperienceItemProps) {
  return (
    <div className="grid gap-4 border-t border-white/10 py-7 sm:gap-6 sm:py-8 md:grid-cols-[140px_1fr] lg:grid-cols-[180px_1fr]">
      <div>
        <p className="text-sm text-zinc-500">{year}</p>
      </div>

      <div>
        <h3
          className="text-lg font-semibold tracking-tight text-white sm:text-xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {role}
        </h3>

        <p className="mt-1 text-sm text-zinc-500">
          {company}
        </p>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
