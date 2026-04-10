interface TechPillProps {
  label: string;
}

export function TechPill({ label }: TechPillProps) {
  return (
    <span className="inline-block px-1.5 py-0.5 text-2xs font-medium bg-gray-100 text-gray-600 border border-gray-200 rounded">
      {label}
    </span>
  );
}
