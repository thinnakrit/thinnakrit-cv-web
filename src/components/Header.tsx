import type { PersonalInfo } from "@/types/cv.types";

interface HeaderProps {
  personal: PersonalInfo;
}

// Contact details are rendered as plain visible text — not hidden behind
// icon-only labels — so ATS parsers can extract email, phone, and URLs
// without relying on alt text or aria labels.
export function Header({ personal }: HeaderProps) {
  const { name, title, profilePicture, contact } = personal;

  return (
    <header className="flex items-center gap-4 pb-3 border-b-2 border-navy">
      <div className="flex-shrink-0">
        <div className="w-[75px] h-[75px] rounded-full overflow-hidden border-2 border-navy bg-gray-100">
          <img
            src={profilePicture}
            alt={`${name} profile picture`}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-navy text-white text-base font-bold">${name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}</div>`;
              }
            }}
          />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <h1 className="text-[18px] font-bold text-black tracking-tight leading-tight">
          {name}
        </h1>
        <p className="text-2xs font-semibold text-navy mt-0.5 tracking-wide uppercase">
          {title}
        </p>

        {/* All contact fields are visible text for ATS extraction */}
        <address className="not-italic mt-1.5 flex flex-wrap gap-x-3.5 gap-y-0.5">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-1 text-2xs text-gray-600 hover:text-navy transition-colors"
          >
            <ContactIcon type="email" />
            <span>{contact.email}</span>
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-1 text-2xs text-gray-600 hover:text-navy transition-colors"
          >
            <ContactIcon type="phone" />
            <span>{contact.phone}</span>
          </a>
          <span className="flex items-center gap-1 text-2xs text-gray-600">
            <ContactIcon type="location" />
            <span>{contact.location}</span>
          </span>
          <a
            href={`https://${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-2xs text-gray-600 hover:text-navy transition-colors"
          >
            <ContactIcon type="linkedin" />
            <span>{contact.linkedin}</span>
          </a>
          <a
            href={`https://${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-2xs text-gray-600 hover:text-navy transition-colors"
          >
            <ContactIcon type="github" />
            <span>{contact.github}</span>
          </a>
        </address>
      </div>
    </header>
  );
}

type IconType = "email" | "phone" | "location" | "linkedin" | "github" | "portfolio";

function ContactIcon({ type }: { type: IconType }) {
  const cls = "w-2.5 h-2.5 flex-shrink-0 text-navy";

  switch (type) {
    case "email":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "phone":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      );
    case "location":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    case "github":
      return (
        <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "portfolio":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
        </svg>
      );
  }
}
