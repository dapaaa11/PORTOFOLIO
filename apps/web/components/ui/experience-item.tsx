"use client";

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
    <div className="group relative grid gap-4 border-t border-white/10 py-7 pl-6 sm:gap-6 sm:py-8 md:grid-cols-[140px_1fr] lg:grid-cols-[180px_1fr] hover:bg-white/[0.005] hover:border-t-white/20 transition-all duration-500">
      {/* Structural Minimal Connecting Timeline node */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 group-hover:bg-white/20 transition-colors duration-500" />
      
      {/* Bullet node indicating active experience segment */}
      <div className="absolute left-[-3.5px] top-[31px] sm:top-[35px] h-2 w-2 rounded-full bg-zinc-600 border border-black group-hover:bg-white group-hover:scale-125 transition-all duration-500" />

      <div className="relative z-10">
        <p className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500 font-mono tracking-wider">{year}</p>
      </div>

      <div className="relative z-10">
        <h3
          className="text-lg font-semibold tracking-tight text-zinc-200 sm:text-xl group-hover:text-white transition-colors duration-500"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {role}
        </h3>

        <p className="mt-1 text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors duration-500">
          {company}
        </p>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base font-light transition-colors duration-500 group-hover:text-zinc-300">
          {description}
        </p>
      </div>
    </div>
  );
}
