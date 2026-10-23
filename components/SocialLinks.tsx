import { socials } from "@/lib/data";
import { Facebook, Instagram, LinkedIn, YouTube } from "./Icons";

const icons = { Instagram, Facebook, LinkedIn, YouTube };

type Props = {
  className?: string;
  linkClassName: string;
  only?: (typeof socials)[number]["name"][];
  label?: string;
};

export default function SocialLinks({ className = "flex gap-3", linkClassName, only, label = "Aura Spaces" }: Props) {
  const list = only ? socials.filter((s) => only.includes(s.name)) : socials;
  return (
    <div className={className}>
      {list.map((s) => {
        const Icon = icons[s.name];
        return (
          <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${label} on ${s.name}`} className={linkClassName}>
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
