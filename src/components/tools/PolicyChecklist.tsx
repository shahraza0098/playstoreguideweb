"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChecklistItem {
  id: string;
  category: "Technical & SDK" | "Closed Testing" | "Policy & Privacy" | "Console & Metadata";
  severity: "Critical" | "High" | "Medium";
  title: string;
  description: string;
  fixGuide: string;
}

const checklistItems: ChecklistItem[] = [
  {
    id: "target-sdk",
    category: "Technical & SDK",
    severity: "Critical",
    title: "Target API Level Compliance (targetSdkVersion >= 34)",
    description: "New apps and updates submitted to Google Play must target Android 14 (API level 34) or higher.",
    fixGuide: "Update your build.gradle / build.gradle.kts with compileSdk = 34 and targetSdk = 34.",
  },
  {
    id: "closed-test-20",
    category: "Closed Testing",
    severity: "Critical",
    title: "14-Day / 20-Tester Closed Testing Completion (Personal Accounts)",
    description: "Personal developer accounts must have at least 20 testers opted in continuously for 14 full days before applying for production.",
    fixGuide: "Verify via Play Console Dashboard that the closed testing task displays 14 complete days.",
  },
  {
    id: "data-safety",
    category: "Policy & Privacy",
    severity: "Critical",
    title: "Data Safety Form Synchronized with All SDKs",
    description: "All embedded third-party libraries (AdMob, Firebase, Analytics, adjust, Facebook) must have their tracking declarations matched in the Data Safety form.",
    fixGuide: "Audit all third-party SDK dependencies in your build and declare device IDs, approximate location, and crash analytics in the Data Safety section.",
  },
  {
    id: "app-access",
    category: "Technical & SDK",
    severity: "Critical",
    title: "Reviewer App Access Credentials Provided",
    description: "If your app features authentication, working test login credentials must be configured under App access without requiring SMS OTP or 2FA.",
    fixGuide: "Configure App Content > App access in Play Console with username, password, and bypass instructions.",
  },
  {
    id: "privacy-policy",
    category: "Policy & Privacy",
    severity: "High",
    title: "HTTPS Privacy Policy URL with Specific Data Disclosures",
    description: "A publicly accessible, non-broken HTTPS URL describing user data collection, retention, and third-party sharing.",
    fixGuide: "Host a compliant privacy policy document and link it both in Google Play Console and inside the app settings.",
  },
  {
    id: "account-deletion",
    category: "Policy & Privacy",
    severity: "High",
    title: "In-App & Web Account Deletion Pathway",
    description: "If your app allows user account creation, you must provide both an in-app deletion button and an external web URL to request data deletion.",
    fixGuide: "Add an account deletion form URL to App Content > Data Safety > Account deletion.",
  },
  {
    id: "foreground-services",
    category: "Technical & SDK",
    severity: "High",
    title: "Foreground Service Permissions Declared with Valid Use Case",
    description: "Apps targeting Android 14+ must declare specific foregroundServiceType attributes for every FOREGROUND_SERVICE permission in the AndroidManifest.xml.",
    fixGuide: "Specify android:foregroundServiceType='dataSync|mediaPlayback|location' and complete the Play Console declaration form.",
  },
  {
    id: "android-vitals",
    category: "Technical & SDK",
    severity: "High",
    title: "Android Vitals Within Acceptable Thresholds",
    description: "Your user-perceived crash rate must be below 1.09% and user-perceived ANR rate below 0.47% to avoid production rejection and algorithmic demotion.",
    fixGuide: "Review Quality > Android vitals in Play Console. Fix any top crashes before applying for production.",
  },
  {
    id: "metadata-policy",
    category: "Console & Metadata",
    severity: "Medium",
    title: "Store Listing Free of Metadata Spam & Prohibited Terms",
    description: "Title, icon, and descriptions must not contain 'Free', 'Best #1', download claims, all-caps keyword lists, or emoticons.",
    fixGuide: "Audit your title (under 30 chars), short description (under 80 chars), and graphic assets against Google's metadata policy.",
  },
  {
    id: "duns-matching",
    category: "Console & Metadata",
    severity: "High",
    title: "D-U-N-S and Payments Profile Character-for-Character Match",
    description: "For organization accounts, the legal business name and registered address must exactly match the Dun & Bradstreet database.",
    fixGuide: "Verify your legal name on D&B lookup before submitting Play Console verification documents.",
  },
];

export function PolicyChecklist() {
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setCheckedState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const resetAll = () => {
    setCheckedState({});
  };

  const totalItems = checklistItems.length;
  const completedCount = checklistItems.filter((item) => checkedState[item.id]).length;
  const score = Math.round((completedCount / totalItems) * 100);

  const criticalPending = checklistItems.filter(
    (item) => item.severity === "Critical" && !checkedState[item.id]
  ).length;

  const getStatusColor = () => {
    if (score === 100) return "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300";
    if (score >= 70 && criticalPending === 0) return "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 border-teal-300";
    return "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 border-rose-300";
  };

  const getStatusLabel = () => {
    if (score === 100) return "High Production Readiness (All Checks Passed)";
    if (score >= 70 && criticalPending === 0) return "Moderate Readiness (Resolve High/Medium Items)";
    return `Critical Rejection Risk (${criticalPending} critical items unresolved)`;
  };

  return (
    <div className="space-y-8">
      {/* Score Dashboard Card */}
      <div className={`rounded-2xl border p-6 sm:p-8 ${getStatusColor()}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider">
              Self-Assessment Status
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
              {getStatusLabel()}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
              {score === 100
                ? "Your app configuration satisfies core Google Play compliance benchmarks. Ensure your production questionnaire responses reflect your testing records."
                : `You have completed ${completedCount} of ${totalItems} compliance verification points. Review and resolve the remaining items before submission.`}
            </p>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 font-mono">
                {score}%
              </div>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                Readiness Score
              </span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={resetAll}
              className="text-xs border-zinc-300 bg-white dark:bg-zinc-900"
              title="Reset checklist"
            >
              <RefreshCw className="h-3.5 w-3.5 mr-1" /> Reset
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 h-3 w-full rounded-full bg-zinc-200/80 dark:bg-zinc-800 overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${
              score === 100
                ? "bg-emerald-500"
                : score >= 70 && criticalPending === 0
                ? "bg-teal-500"
                : "bg-rose-500"
            }`}
            style={{ width: `${score}%` }}
          />
        </div>
      </div>

      {/* Checklist Grid */}
      <div className="space-y-4">
        {checklistItems.map((item) => {
          const isChecked = !!checkedState[item.id];
          return (
            <div
              key={item.id}
              className={`rounded-xl border p-5 transition-all ${
                isChecked
                  ? "border-emerald-300/80 bg-emerald-50/20 dark:border-emerald-900/60 dark:bg-emerald-950/10"
                  : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60"
              }`}
            >
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id={item.id}
                  checked={isChecked}
                  onChange={() => toggleItem(item.id)}
                  className="mt-1 h-5 w-5 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500 shrink-0 cursor-pointer accent-emerald-600"
                />

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <label
                      htmlFor={item.id}
                      className={`text-base font-bold cursor-pointer ${
                        isChecked
                          ? "line-through text-zinc-500 dark:text-zinc-400"
                          : "text-zinc-900 dark:text-zinc-100"
                      }`}
                    >
                      {item.title}
                    </label>

                    <span className="rounded bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      {item.category}
                    </span>

                    <span
                      className={`rounded px-2 py-0.5 text-[10px] font-semibold ${
                        item.severity === "Critical"
                          ? "bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300"
                          : item.severity === "High"
                          ? "bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300"
                      }`}
                    >
                      {item.severity}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-2.5 rounded-lg bg-zinc-50 p-2.5 dark:bg-zinc-800/60 text-[11px] text-zinc-700 dark:text-zinc-300">
                    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Fix Guidance: </strong>
                    {item.fixGuide}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Advisory Follow-up */}
      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between dark:border-zinc-800 dark:bg-zinc-900/60">
        <div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            Need an expert audit of your specific AAB build and Play Console setup?
          </h3>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            Our technical advisory team inspects compiled libraries, credentials, and questionnaire drafts.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 shrink-0">
          <Link href="/contact">
            <Button className="bg-emerald-600 text-white hover:bg-emerald-500 font-semibold text-xs">
              Request Full Audit Consultation &rarr;
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
