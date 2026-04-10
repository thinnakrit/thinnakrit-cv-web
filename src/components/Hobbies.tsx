import { SectionTitle } from "@/components/SectionTitle";

interface HobbiesProps {
  hobbies: string[];
}

export function Hobbies({ hobbies }: HobbiesProps) {
  if (hobbies.length === 0) return null;

  return (
    <section aria-labelledby="hobbies-heading">
      <SectionTitle title="Interests & Hobbies" id="hobbies-heading" />
      <div className="flex flex-wrap gap-1.5">
        {hobbies.map((hobby) => (
          <span
            key={hobby}
            className="inline-block px-2 py-0.5 text-xs text-gray-600 border border-gray-200 rounded-full bg-gray-50"
          >
            {hobby}
          </span>
        ))}
      </div>
    </section>
  );
}
