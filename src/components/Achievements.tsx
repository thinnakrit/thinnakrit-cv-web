import type { Achievement } from "@/types/cv.types";
import { SectionTitle } from "@/components/SectionTitle";

interface AchievementsProps {
  items: Achievement[];
}

export function Achievements({ items }: AchievementsProps) {
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="achievements-heading">
      <SectionTitle title="Achievements" id="achievements-heading" />
      <ul className="space-y-1.5 list-none">
        {items.map((item) => (
          <article key={item.id}>
            <h3 className="text-2xs font-bold text-black leading-tight">{item.title}</h3>
            <p className="text-2xs text-gray-600 mt-0.5 leading-relaxed">{item.description}</p>
          </article>
        ))}
      </ul>
    </section>
  );
}
