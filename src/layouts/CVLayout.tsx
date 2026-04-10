import type { CVData } from "@/types/cv.types";
import { Header } from "@/components/Header";
import { Summary } from "@/components/Summary";
import { WorkExperience } from "@/components/WorkExperience";
import { Education } from "@/components/Education";
import { TechnicalSkills } from "@/components/TechnicalSkills";
import { Certifications } from "@/components/Certifications";
import { Achievements } from "@/components/Achievements";

interface CVLayoutProps {
  data: CVData;
}

/**
 * DOM order is intentionally linear for ATS PDF text extraction:
 *   Header → Summary → Experience → Skills → Education → Certifications → Achievements
 *
 * The bottom two-column grid (Skills | Education+Certs+Achievements) is a
 * purely visual split — no CSS `order` property is used, so the parsed text
 * layer reads left-column first, then right-column, which maps to the correct
 * logical reading order for ATS parsers.
 */
export function CVLayout({ data }: CVLayoutProps) {
  return (
    <div
      className={[
        "w-[210mm] bg-white shadow-a4 mx-auto",
        "px-[16mm] pt-[11mm] pb-[10mm]",
        "print:shadow-none print:mx-0 print:w-full print:p-0",
      ].join(" ")}
    >
      {/* 1. Header — name, title, contact */}
      <Header personal={data.personal} />

      {/* 2. Summary */}
      <div className="mt-3">
        <Summary summary={data.summary} />
      </div>

      {/* 3. Experience — full width, most ATS-critical section */}
      <div className="mt-3">
        <WorkExperience items={data.workExperience} />
      </div>

      {/*
        4. Secondary sections in a two-column grid.
           DOM order: Skills (col-1) → Education → Certifications → Achievements (col-2).
           No `order` manipulation — ATS reads left column first, then right, which is correct.
      */}
      <div className="mt-3 grid grid-cols-[2fr_2fr] gap-x-6 items-start">
        {/* Left column: Skills */}
        <TechnicalSkills categories={data.technicalSkills} />

        {/* Right column: Education + Certifications + Achievements */}
        <div className="flex flex-col gap-3">
          <Education items={data.education} />
          <Certifications items={data.certifications} />
          {data.achievements.length > 0 && (
            <Achievements items={data.achievements} />
          )}
        </div>
      </div>
    </div>
  );
}
