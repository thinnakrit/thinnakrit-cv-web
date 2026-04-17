import {
  AlignmentType,
  BorderStyle,
  Document,
  Packer,
  Paragraph,
  TextRun,
  TabStopType,
  TabStopPosition,
} from "docx";
import type { CVData } from "@/types/cv.types";
import { formatDate, formatDateRange } from "@/utils/formatDate";

const NAVY = "1E3A72";
const GRAY = "555555";
const LIGHT_GRAY = "888888";

function sectionTitle(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text: text.toUpperCase(),
        bold: true,
        size: 22,
        color: NAVY,
        font: "Calibri",
      }),
    ],
    border: {
      bottom: {
        color: NAVY,
        space: 1,
        style: BorderStyle.SINGLE,
        size: 6,
      },
    },
    spacing: { before: 240, after: 100 },
  });
}

interface RunOpts {
  bold?: boolean;
  italics?: boolean;
  color?: string;
  size?: number;
  font?: string;
}

function bodyRun(text: string, opts: RunOpts = {}): TextRun {
  return new TextRun({ text, size: 20, font: "Calibri", ...opts });
}

function techLine(techs: string[]): Paragraph {
  return new Paragraph({
    children: [
      bodyRun("Skills: ", { bold: true, italics: true, color: GRAY }),
      bodyRun(techs.join(", "), { italics: true, color: GRAY }),
    ],
    spacing: { after: 80 },
  });
}

export async function exportToDocx(data: CVData): Promise<void> {
  const children: Paragraph[] = [];

  // ── Name ──────────────────────────────────────────────────────────────────
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: data.personal.name,
          bold: true,
          size: 48,
          color: NAVY,
          font: "Calibri",
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 60 },
    })
  );

  // ── Title ─────────────────────────────────────────────────────────────────
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: data.personal.title,
          size: 24,
          color: GRAY,
          font: "Calibri",
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
    })
  );

  // ── Contact ───────────────────────────────────────────────────────────────
  const { email, phone, location, linkedin, github } = data.personal.contact;
  children.push(
    new Paragraph({
      children: [
        bodyRun(`${email}  |  ${phone}  |  ${location}  |  ${linkedin}  |  ${github}`, {
          color: GRAY,
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 240 },
    })
  );

  // ── Summary ───────────────────────────────────────────────────────────────
  children.push(sectionTitle("Summary"));
  children.push(
    new Paragraph({
      children: [bodyRun(data.summary)],
      spacing: { after: 120 },
    })
  );

  // ── Work Experience ───────────────────────────────────────────────────────
  if (data.workExperience.length > 0) {
    children.push(sectionTitle("Work Experience"));

    for (const job of data.workExperience) {
      // Company + role on same line, date right-aligned via tab
      children.push(
        new Paragraph({
          tabStops: [
            { type: TabStopType.RIGHT, position: TabStopPosition.MAX },
          ],
          children: [
            new TextRun({ text: job.company, bold: true, size: 22, font: "Calibri" }),
            bodyRun(`  —  ${job.role}`),
            bodyRun("\t"),
            bodyRun(formatDateRange(job.startDate, job.endDate), {
              italics: true,
              color: LIGHT_GRAY,
            }),
          ],
          spacing: { before: 140, after: 40 },
        })
      );

      // Location
      children.push(
        new Paragraph({
          children: [bodyRun(job.location, { italics: true, color: LIGHT_GRAY })],
          spacing: { after: 60 },
        })
      );

      // Bullets
      for (const bullet of job.bullets) {
        children.push(
          new Paragraph({
            children: [bodyRun(bullet.text)],
            bullet: { level: 0 },
            spacing: { after: 40 },
          })
        );
      }

      // Technologies
      if (job.technologies.length > 0) {
        children.push(techLine(job.technologies));
      }
    }
  }

  // ── Technical Skills ──────────────────────────────────────────────────────
  if (data.technicalSkills.length > 0) {
    children.push(sectionTitle("Technical Skills"));

    for (const cat of data.technicalSkills) {
      children.push(
        new Paragraph({
          children: [
            bodyRun(`${cat.category}: `, { bold: true }),
            bodyRun(cat.skills.join(", ")),
          ],
          spacing: { after: 60 },
        })
      );
    }
  }

  // ── Education ─────────────────────────────────────────────────────────────
  if (data.education.length > 0) {
    children.push(sectionTitle("Education"));

    for (const edu of data.education) {
      children.push(
        new Paragraph({
          tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
          children: [
            new TextRun({ text: edu.institution, bold: true, size: 22, font: "Calibri" }),
            bodyRun("\t"),
            bodyRun(formatDateRange(edu.startDate, edu.endDate), {
              italics: true,
              color: LIGHT_GRAY,
            }),
          ],
          spacing: { before: 80, after: 40 },
        })
      );
      children.push(
        new Paragraph({
          children: [
            bodyRun(`${edu.degree} in ${edu.field}`),
            bodyRun(`  |  ${edu.location}`, { color: LIGHT_GRAY }),
          ],
          spacing: { after: 80 },
        })
      );
    }
  }

  // ── Certifications ────────────────────────────────────────────────────────
  if (data.certifications.length > 0) {
    children.push(sectionTitle("Certifications"));

    for (const cert of data.certifications) {
      children.push(
        new Paragraph({
          children: [
            bodyRun(cert.name, { bold: true }),
            bodyRun(`  —  ${cert.issuer}`, { color: GRAY }),
            bodyRun(`  |  ${formatDate(cert.issuedDate)}`, {
              italics: true,
              color: LIGHT_GRAY,
            }),
          ],
          spacing: { before: 80, after: 40 },
        })
      );
      if (cert.skills && cert.skills.length > 0) {
        children.push(
          new Paragraph({
            children: [
              bodyRun("Skills: ", { bold: true }),
              bodyRun(cert.skills.join(", "), { color: GRAY }),
            ],
            spacing: { after: 60 },
          })
        );
      }
    }
  }

  // ── Achievements ──────────────────────────────────────────────────────────
  if (data.achievements.length > 0) {
    children.push(sectionTitle("Achievements"));

    for (const ach of data.achievements) {
      children.push(
        new Paragraph({
          children: [
            bodyRun(`${ach.title}: `, { bold: true }),
            bodyRun(ach.description),
          ],
          bullet: { level: 0 },
          spacing: { after: 60 },
        })
      );
    }
  }

  // ── Build & download ──────────────────────────────────────────────────────
  const doc = new Document({
    creator: data.personal.name,
    title: `${data.personal.name} — CV`,
    description: "Curriculum Vitae",
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 720,
              bottom: 720,
              left: 900,
              right: 900,
            },
          },
        },
        children,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${data.personal.name.replace(/\s+/g, "_")}_CV.docx`;
  anchor.click();
  URL.revokeObjectURL(url);
}
