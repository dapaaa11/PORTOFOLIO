interface SkillGroupProps {
  title: string;
  items: string[];
}

export function SkillGroup({
  title,
  items,
}: SkillGroupProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
      <h3
        className="text-xl font-semibold tracking-tight text-white"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400 transition-colors duration-300 hover:border-white/20 hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}