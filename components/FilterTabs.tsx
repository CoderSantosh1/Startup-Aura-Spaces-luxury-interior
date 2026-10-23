"use client";

type Props = { tabs: string[]; active: string; onChange: (t: string) => void };

export default function FilterTabs({ tabs, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`rounded-full border px-5 py-2 text-sm transition-all duration-300 ${
            active === t ? "border-olive bg-olive text-gold shadow-md" : "border-ink/15 bg-white/60 hover:border-gold hover:bg-gold hover:text-olive"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
