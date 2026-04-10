import { SectionTitle } from "@/components/SectionTitle";

interface SummaryProps {
  summary: string;
}

// Heading is "Summary" — ATS-standard keyword (avoids "Profile" or "About").
export function Summary({ summary }: SummaryProps) {
  return (
    <section aria-labelledby="summary-heading">
      <SectionTitle title="Summary" id="summary-heading" />
      <p className="text-2xs text-gray-700 leading-relaxed">{summary}</p>
    </section>
  );
}
