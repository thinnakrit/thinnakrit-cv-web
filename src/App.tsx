import { CVLayout } from "@/layouts/CVLayout";
import { cvData } from "@/data/cvData";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 print:bg-white print:p-0 print:m-0 print:min-h-0">
      <CVLayout data={cvData} />

      {/* Floating export button — completely removed from the print DOM */}
      <button
        onClick={() => window.print()}
        className="print:hidden fixed bottom-6 right-6 flex items-center gap-2 bg-navy text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-lg hover:bg-navy-dark active:scale-95 transition-all z-50"
        aria-label="Export to PDF"
      >
        <svg
          className="w-4 h-4 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Export PDF
      </button>
    </div>
  );
}
