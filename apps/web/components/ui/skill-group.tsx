interface SkillGroupProps {
  title: string;
  items: string[];
}

export function SkillGroup({
  title,
  items,
}: SkillGroupProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.02] p-6 sm:p-8">
      <h3
        className="text-lg font-semibold tracking-tight text-white sm:text-xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>

      <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-400 transition-colors duration-300 hover:border-white/20 hover:text-white sm:px-4 sm:py-2"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
