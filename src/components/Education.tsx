import type { EducationItem } from "@/types/cv.types";
import { SectionTitle } from "@/components/SectionTitle";
import { formatDateRange } from "@/utils/formatDate";

interface EducationProps {
  items: EducationItem[];
}

export function Education({ items }: EducationProps) {
  return (
    <section aria-labelledby="education-heading">
      <SectionTitle title="Education" id="education-heading" />
      <ul className="space-y-2 list-none">
        {items.map((item) => (
          <EducationEntry key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

function EducationEntry({ item }: { item: EducationItem }) {
  return (
    <article>
      <h3 className="text-2xs font-bold text-black leading-tight">{item.institution}</h3>
      <p className="text-2xs text-navy font-semibold mt-0.5">
        {item.degree} · {item.field}
      </p>
      <div className="flex items-center justify-between gap-2 mt-0.5">
        <p className="text-2xs text-gray-500">{item.location}</p>
        <time
          dateTime={`${item.startDate}/${item.endDate}`}
          className="text-2xs text-gray-500 whitespace-nowrap flex-shrink-0"
        >
          {formatDateRange(item.startDate, item.endDate)}
        </time>
      </div>
    </article>
  );
}
