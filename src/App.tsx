import { CVLayout } from "@/layouts/CVLayout";
import { cvData } from "@/data/cvData";
import { exportToDocx } from "@/utils/exportToDocx";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 print:bg-white print:p-0 print:m-0 print:min-h-0">
      <CVLayout data={cvData} />

      {/* Floating export buttons — completely removed from the print DOM */}
      <div className="print:hidden fixed bottom-6 right-6 flex flex-col gap-2 z-50">
        {/* Export to Google Docs (.docx) */}
        <button
          onClick={() => exportToDocx(cvData)}
          className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-semibold px-4 py-2.5 rounded-lg shadow-lg hover:bg-gray-50 active:scale-95 transition-all"
          aria-label="Download for Google Docs"
          title="Download .docx — open in Google Docs via File › Open"
        >
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="2" width="16" height="20" rx="2" stroke="#4285F4" strokeWidth="1.8" />
            <path d="M8 7h8M8 11h8M8 15h5" stroke="#4285F4" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          Google Docs
        </button>

        {/* Export PDF */}
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-navy text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-lg hover:bg-navy-dark active:scale-95 transition-all"
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
    </div>
  );
}
