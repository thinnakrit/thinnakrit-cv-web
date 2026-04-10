const MONTH_NAMES: Record<string, string> = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
};

export function formatDate(dateStr: string): string {
  if (dateStr === "Present") return "Present";
  const [year, month] = dateStr.split("-");
  const monthName = MONTH_NAMES[month] ?? month;
  return `${monthName} ${year}`;
}

export function formatDateRange(start: string, end: string | "Present"): string {
  return `${formatDate(start)} – ${formatDate(end)}`;
}

function resolveEnd(end: string | "Present"): { year: number; month: number; isPresent: boolean } {
  if (end === "Present") {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() + 1, isPresent: true };
  }
  const [year, month] = end.split("-").map(Number);
  return { year, month, isPresent: false };
}

export function formatDuration(start: string, end: string | "Present"): string {
  const [startYear, startMonth] = start.split("-").map(Number);
  const { year: endYear, month: endMonth, isPresent } = resolveEnd(end);

  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let duration: string;
  if (years === 0) {
    duration = `${months} mo${months !== 1 ? "s" : ""}`;
  } else if (months === 0) {
    duration = `${years} yr${years !== 1 ? "s" : ""}`;
  } else {
    duration = `${years} yr${years !== 1 ? "s" : ""} ${months} mo${months !== 1 ? "s" : ""}`;
  }

  if (isPresent) {
    return `${duration}`;
  }
  return duration;
}
