interface SectionTitleProps {
  title: string;
  id: string;
}

// h2 with a clear, unabbreviated label — ATS parsers key on the heading text
// to classify what follows. Never use decorative symbols as the heading.
export function SectionTitle({ title, id }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-2 mb-1.5">
      <h2 id={id} className="text-2xs font-bold text-navy uppercase tracking-widest whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-px bg-navy opacity-25" />
    </div>
  );
}
