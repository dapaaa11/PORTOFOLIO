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
    <div className="group relative grid gap-4 border-t border-white/[0.06] py-8 pl-6 sm:gap-6 sm:py-10 md:grid-cols-[140px_1fr] lg:grid-cols-[180px_1fr] hover:bg-white/[0.005] hover:border-t-white/[0.12] transition-all duration-500">
      {/* Structural Minimal Connecting Timeline node */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.06] group-hover:bg-white/[0.12] transition-colors duration-500" />
      
      {/* Bullet node indicating active experience segment */}
      <div className="absolute left-[-3.5px] top-[35px] sm:top-[43px] h-[7px] w-[7px] rounded-full bg-zinc-700 border border-black group-hover:bg-white group-hover:scale-125 transition-all duration-500" />

      <div className="relative z-10">
        <p className="text-[13px] text-zinc-500 group-hover:text-zinc-400 transition-colors duration-500 font-mono tracking-wider">{year}</p>
      </div>

      <div className="relative z-10">
        <h3
          className="text-lg font-medium tracking-[-0.01em] text-zinc-200 sm:text-xl group-hover:text-white transition-colors duration-500"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {role}
        </h3>

        <p className="mt-1.5 text-[13px] text-zinc-500 group-hover:text-zinc-400 transition-colors duration-500">
          {company}
        </p>

        <p className="mt-4 max-w-2xl text-sm leading-[1.7] text-zinc-400 sm:text-[15px] transition-colors duration-500 group-hover:text-zinc-300">
          {description}
        </p>
      </div>
    </div>
  );
}
