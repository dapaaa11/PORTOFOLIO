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
    <div className="grid gap-6 border-t border-white/10 py-8 md:grid-cols-[120px_1fr]">
      <div>
        <p className="text-sm text-zinc-500">{year}</p>
      </div>

      <div>
        <h3
          className="text-xl font-semibold tracking-tight text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {role}
        </h3>

        <p className="mt-1 text-sm text-zinc-500">
          {company}
        </p>

        <p className="mt-4 max-w-2xl leading-relaxed text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
}