import type { SkillCategory } from "@/types/cv.types";
import { SectionTitle } from "@/components/SectionTitle";

interface TechnicalSkillsProps {
  categories: SkillCategory[];
}

// Heading is "Skills" — the universal ATS keyword. Avoid "Tech Stack" or "Competencies".
export function TechnicalSkills({ categories }: TechnicalSkillsProps) {
  return (
    <section aria-labelledby="skills-heading">
      <SectionTitle title="Skills" id="skills-heading" />
      <dl className="space-y-1">
        {categories.map((cat) => (
          <div key={cat.category} className="flex flex-col">
            <dt className="text-2xs font-semibold text-black">{cat.category}</dt>
            <dd className="text-2xs text-gray-600 leading-relaxed">
              {cat.skills.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
