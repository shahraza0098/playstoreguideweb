import { AlertTriangle, FileText } from "lucide-react";

interface LegalReviewNoticeProps {
  documentType: "Privacy Policy" | "Terms and Conditions" | "Refund Policy";
}

export function LegalReviewNotice({ documentType }: LegalReviewNoticeProps) {
  return (
    <div className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 sm:p-5 text-amber-900 dark:text-amber-200">
      <div className="flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
        <div className="space-y-1.5 text-xs sm:text-sm">
          <p className="font-bold text-amber-950 dark:text-amber-100 flex items-center gap-1.5">
            <FileText className="h-4 w-4" /> Initial Draft for Legal Review ({documentType})
          </p>
          <p className="leading-relaxed text-amber-800 dark:text-amber-300">
            This document is an initial, policy-aligned template designed specifically for PlayStoreGuide&rsquo;s independent Android publishing advisory services. It contains configurable placeholders (e.g.{" "}
            <code className="rounded bg-amber-500/20 px-1.5 py-0.5 font-mono text-[11px] text-amber-900 dark:text-amber-200 font-bold">
              [Operating Business Entity Name]
            </code>{" "}
            and{" "}
            <code className="rounded bg-amber-500/20 px-1.5 py-0.5 font-mono text-[11px] text-amber-900 dark:text-amber-200 font-bold">
              [Applicable Jurisdiction]
            </code>
            ) defined in <span className="font-semibold underline">src/data/legal-config.ts</span>. Before formal operational adoption, populate these values with your registered company facts and have this draft reviewed by qualified legal counsel in your operating jurisdiction.
          </p>
        </div>
      </div>
    </div>
  );
}
