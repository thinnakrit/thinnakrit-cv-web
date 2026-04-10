import type { WorkExperienceItem } from "@/types/cv.types";
import { SectionTitle } from "@/components/SectionTitle";
import { formatDateRange, formatDuration } from "@/utils/formatDate";

interface WorkExperienceProps {
  items: WorkExperienceItem[];
}

// Heading is "Experience" — the universal ATS-standard keyword.
export function WorkExperience({ items }: WorkExperienceProps) {
  return (
    <section aria-labelledby="experience-heading">
      <SectionTitle title="Experience" id="experience-heading" />
      <ul className="space-y-2.5 list-none">
        {items.map((item) => (
          <WorkExperienceEntry key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

function WorkExperienceEntry({ item }: { item: WorkExperienceItem }) {
  return (
    <article>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="text-xs font-bold text-black leading-tight">{item.role}</h3>
          <p className="text-2xs font-semibold text-navy mt-0.5">
            {item.company}
            <span className="font-normal text-gray-500 ml-1">· {item.location}</span>
          </p>
        </div>
        <div className="text-right flex-shrink-0 pt-0.5">
          <time
            dateTime={`${item.startDate}/${item.endDate}`}
            className="text-2xs text-gray-500 block whitespace-nowrap"
          >
            {formatDateRange(item.startDate, item.endDate)}
          </time>
          <span className="text-2xs text-gray-400 block whitespace-nowrap">
            {formatDuration(item.startDate, item.endDate)}
          </span>
        </div>
      </div>

      {/* Bullets: Action Verb + Context + Quantifiable Result */}
      <ul className="mt-1 space-y-0.5 list-none">
        {item.bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-1.5 text-2xs text-gray-700 leading-relaxed">
            <span className="mt-[5px] w-1 h-1 rounded-full bg-navy flex-shrink-0" aria-hidden="true" />
            <span>{bullet.text}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
