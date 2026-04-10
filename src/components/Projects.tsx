import type { ProjectItem } from "@/types/cv.types";
import { SectionTitle } from "@/components/SectionTitle";
import { TechPill } from "@/components/TechPill";

interface ProjectsProps {
  items: ProjectItem[];
}

export function Projects({ items }: ProjectsProps) {
  return (
    <section aria-labelledby="projects-heading">
      <SectionTitle title="Projects" id="projects-heading" />
      <ul className="space-y-3.5 list-none">
        {items.map((item) => (
          <ProjectEntry key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

function ProjectEntry({ item }: { item: ProjectItem }) {
  return (
    <article>
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className="text-sm font-bold text-black leading-tight">{item.name}</h3>
        {item.repoUrl && (
          <a
            href={item.repoUrl.startsWith("http") ? item.repoUrl : `https://${item.repoUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xs text-navy underline hover:text-navy-dark transition-colors"
            aria-label={`View ${item.name} source code`}
          >
            {item.repoUrl}
          </a>
        )}
        {item.liveUrl && (
          <a
            href={item.liveUrl.startsWith("http") ? item.liveUrl : `https://${item.liveUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xs text-navy underline hover:text-navy-dark transition-colors"
            aria-label={`View ${item.name} live demo`}
          >
            {item.liveUrl}
          </a>
        )}
      </div>
      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{item.description}</p>

      <ul className="mt-1.5 space-y-1 list-none">
        {item.bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-navy flex-shrink-0" aria-hidden="true" />
            <span>{bullet.text}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1 mt-2">
        {item.technologies.map((tech) => (
          <TechPill key={tech} label={tech} />
        ))}
      </div>
    </article>
  );
}
