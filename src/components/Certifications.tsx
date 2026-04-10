import type { CertificationItem } from "@/types/cv.types";
import { SectionTitle } from "@/components/SectionTitle";
import { formatDate } from "@/utils/formatDate";

interface CertificationsProps {
  items: CertificationItem[];
}

export function Certifications({ items }: CertificationsProps) {
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="certifications-heading">
      <SectionTitle title="Certifications" id="certifications-heading" />
      <ul className="space-y-1.5 list-none">
        {items.map((item) => (
          <CertificationEntry key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

function CertificationEntry({ item }: { item: CertificationItem }) {
  return (
    <article>
      <h3 className="text-2xs font-bold text-black leading-tight">{item.name}</h3>
      <div className="flex items-center justify-between gap-2 mt-0.5">
        <p className="text-2xs font-semibold text-navy">{item.issuer}</p>
        <time className="text-2xs text-gray-500 whitespace-nowrap flex-shrink-0">
          {formatDate(item.issuedDate)}
        </time>
      </div>
    </article>
  );
}
