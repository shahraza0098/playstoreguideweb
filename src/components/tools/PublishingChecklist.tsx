"use client";

import React, { useState, useEffect, useMemo, useSyncExternalStore } from "react";
import {
  CheckCircle2,
  Circle,
  RotateCcw,
  Copy,
  Check,
  Filter,
  Printer,
  Info,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface ChecklistCategory {
  id: string;
  name: string;
  shortName: string;
}

export const CHECKLIST_CATEGORIES: ChecklistCategory[] = [
  { id: "store-listing", name: "Store Listing Assets & Copy", shortName: "Listing" },
  { id: "app-bundle", name: "App Bundle & Technical Compliance", shortName: "Bundle" },
  { id: "testing", name: "Testing Tracks & Quality Checks", shortName: "Testing" },
  { id: "privacy", name: "Privacy Declarations & Data Safety", shortName: "Privacy" },
  { id: "content-rating", name: "Content Rating & IARC Disclosures", shortName: "Rating" },
  { id: "target-audience", name: "Target Audience & Families Policy", shortName: "Audience" },
  { id: "policy-compliance", name: "Policy Declarations & App Access", shortName: "Policy" },
  { id: "release-readiness", name: "Release Strategy & Staged Rollout", shortName: "Rollout" },
];

export interface ChecklistTask {
  id: string;
  category: string;
  title: string;
  description: string;
  officialRule: string;
  critical?: boolean;
}

export const PUBLISHING_TASKS: ChecklistTask[] = [
  // 1. Store Listing
  {
    id: "listing-title",
    category: "store-listing",
    title: "App Title Formatted (<= 30 characters)",
    description: "App title cannot exceed 30 characters. Avoid keyword stuffing, emojis, price claims ('Free', 'Best', 'Top'), or all-caps capitalization.",
    officialRule: "Google Play Store Listing Promotion & Title Policy",
    critical: true,
  },
  {
    id: "listing-descriptions",
    category: "store-listing",
    title: "Short & Full Descriptions Localized",
    description: "Short description (max 80 chars) highlighting primary utility. Full description (max 4,000 chars) accurately describing app features without keyword repetition.",
    officialRule: "Metadata & Misleading Content Guidelines",
  },
  {
    id: "listing-icon",
    category: "store-listing",
    title: "High-Resolution App Icon (512 x 512 PNG, 32-bit)",
    description: "Provide a 512x512 32-bit PNG with an alpha channel, up to 1MB. Must adhere to Google Play icon specifications with rounded squircle masking.",
    officialRule: "Graphic Assets Specifications",
    critical: true,
  },
  {
    id: "listing-feature-graphic",
    category: "store-listing",
    title: "Feature Graphic (1024 x 500 JPG or 24-bit PNG)",
    description: "Banner displayed in search results and editorial placements. Keep key branding centered to prevent cutoff on varying mobile screen ratios.",
    officialRule: "Graphic Assets Specifications",
  },
  {
    id: "listing-screenshots",
    category: "store-listing",
    title: "Phone Screenshots (Minimum 4, 16:9 or 9:16)",
    description: "Upload at least 4 screenshots (between 320px and 3840px, up to 8MB each). Showcase real in-app UI. Include tablet (7\" & 10\") screenshots if supporting tablets.",
    officialRule: "Store Listing Media Quality Standards",
    critical: true,
  },

  // 2. App Bundle & Technical
  {
    id: "tech-target-sdk",
    category: "app-bundle",
    title: "Target API Level >= 34 (Android 14+)",
    description: "All new app submissions and updates must target API level 34 or higher in build.gradle (targetSdkVersion 34).",
    officialRule: "Google Play Target API Level Policy",
    critical: true,
  },
  {
    id: "tech-aab-format",
    category: "app-bundle",
    title: "Android App Bundle (.aab) Format",
    description: "All new applications must be uploaded as an .aab rather than a standalone .apk. Enables dynamic asset delivery and smaller download footprints.",
    officialRule: "Play App Signing & Delivery Guidelines",
    critical: true,
  },
  {
    id: "tech-64bit",
    category: "app-bundle",
    title: "64-Bit Native Library Architectures Included",
    description: "If your app contains C/C++ native code, arm64-v8a or x86_64 64-bit architectures must be provided alongside 32-bit variants.",
    officialRule: "64-Bit Requirement for Google Play",
  },
  {
    id: "tech-signing",
    category: "app-bundle",
    title: "Play App Signing Configured & Keystore Backed Up",
    description: "Enroll in Google Play App Signing. Store your upload signing keystore securely in an encrypted vault or password manager.",
    officialRule: "Play App Signing Security Protocol",
    critical: true,
  },

  // 3. Testing Tracks
  {
    id: "test-internal",
    category: "testing",
    title: "Internal Testing Track Validation",
    description: "Distribute an internal test build to your development team to verify build installation, crash reporting (Crashlytics), and deep-link flows.",
    officialRule: "Release Tracks Best Practices",
  },
  {
    id: "test-closed-20",
    category: "testing",
    title: "Closed Testing 20-Tester Cohort Completed (Personal Accounts)",
    description: "For personal accounts created after Nov 13, 2023: maintain at least 20 active opted-in testers continuously for 14 full days without interruption.",
    officialRule: "Requirements for New Personal Accounts",
    critical: true,
  },
  {
    id: "test-prelaunch-report",
    category: "testing",
    title: "Pre-Launch Report (Firebase Test Lab) Reviewed",
    description: "Check Play Console > Pre-launch report. Verify 0 fatal exceptions, 0 strict mode violations, and no major UI overlap on tested physical device matrix.",
    officialRule: "Play Console Quality Diagnostics",
  },

  // 4. Privacy & Data Safety
  {
    id: "privacy-policy-url",
    category: "privacy",
    title: "Valid HTTPS Privacy Policy Link",
    description: "Link a publicly accessible, permanent HTTPS privacy policy on a verified domain describing data collection, retention, and third-party SDK sharing.",
    officialRule: "User Data Policy: Privacy Policy Requirement",
    critical: true,
  },
  {
    id: "privacy-data-safety",
    category: "privacy",
    title: "Data Safety Form Synchronized with All SDKs",
    description: "Audit all third-party SDKs (AdMob, Firebase, Analytics, Facebook, Adjust). Ensure every data point collected or shared is declared in the Data Safety form.",
    officialRule: "Google Play Data Safety Section",
    critical: true,
  },
  {
    id: "privacy-account-deletion",
    category: "privacy",
    title: "Account Deletion Web Link Provided",
    description: "If your app allows user account creation, you must provide a publicly accessible web URL where users can request account and associated data deletion.",
    officialRule: "Account Deletion Policy Requirement",
    critical: true,
  },

  // 5. Content Rating
  {
    id: "rating-iarc",
    category: "content-rating",
    title: "IARC Questionnaire Completed Accurately",
    description: "Answer the International Age Rating Coalition questionnaire honestly regarding violence, crude humor, language, fear, gambling, and user interaction.",
    officialRule: "IARC Rating System Requirements",
    critical: true,
  },
  {
    id: "rating-in-app-purchases",
    category: "content-rating",
    title: "In-App Purchases & Loot Box Disclosures",
    description: "Accurately disclose whether your app includes paid digital goods, subscriptions, or randomized loot mechanics with clear odds disclosures.",
    officialRule: "Monetization and Ads Policy",
  },

  // 6. Target Audience & Families
  {
    id: "audience-target-age",
    category: "target-audience",
    title: "Target Age Groups Declared",
    description: "Specify whether your app targets Children (< 13), Mixed Audience, or Adults (18+). If children are targeted, strict Designed for Families rules apply.",
    officialRule: "Families Policy Requirements",
    critical: true,
  },
  {
    id: "audience-neutral-age-screen",
    category: "target-audience",
    title: "Neutral Age Screen Implemented (If Mixed Audience)",
    description: "If targeting both children and adults, ask users for their age using a neutral date-of-birth or age selector that does not nudge them toward an adult age.",
    officialRule: "Child Safety & Neutral Age Screening",
  },

  // 7. Policy Compliance & App Access
  {
    id: "policy-app-access",
    category: "policy-compliance",
    title: "Reviewer Test Credentials Configured (App Access)",
    description: "If any part of your app requires a login, OTP, or membership, provide active demo credentials in Play Console > App Content > App access without SMS 2FA.",
    officialRule: "App Access Guidelines for Reviewers",
    critical: true,
  },
  {
    id: "policy-financial-health",
    category: "policy-compliance",
    title: "Special Declarations Submitted (Health / Financial / VPN)",
    description: "If your app handles medical data, personal loans, VPN services, or government info, complete the required declaration forms with licensing proof.",
    officialRule: "Restricted Content & High-Risk Apps Policy",
  },
  {
    id: "policy-permissions-audit",
    category: "policy-compliance",
    title: "Dangerous Permissions Minimalized & Justified",
    description: "Remove unnecessary permissions (`READ_MEDIA_IMAGES`, `ACCESS_BACKGROUND_LOCATION`, `READ_CONTACTS`). Only declare permissions core to the app experience.",
    officialRule: "Permissions and APIs that Access Sensitive Information",
    critical: true,
  },

  // 8. Release Readiness
  {
    id: "release-notes",
    category: "release-readiness",
    title: "Localized Release Notes (What's New)",
    description: "Draft clear, descriptive release notes explaining new features or bug fixes. Avoid generic placeholders like 'Bug fixes and performance improvements'.",
    officialRule: "Release Management Best Practices",
  },
  {
    id: "release-staged-rollout",
    category: "release-readiness",
    title: "Staged Rollout Strategy Planned (10% -> 20% -> 100%)",
    description: "Release production builds using staged rollouts over 3–7 days to catch unexpected crashes or user regressions before 100% of your user base updates.",
    officialRule: "Play Console Staged Rollouts",
  },
  {
    id: "release-crash-monitoring",
    category: "release-readiness",
    title: "Crash Monitoring & Alerting Enabled (ANR Watchdog)",
    description: "Ensure Sentry, Crashlytics, or Android Vitals alerts are configured to notify engineering if crash rates exceed the bad behavior threshold (1.09%).",
    officialRule: "Android Vitals & Bad Behavior Thresholds",
  },
];

const STORAGE_KEY = "psg_publishing_checklist_v1";

export function PublishingChecklist() {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "incomplete" | "completed">("all");
  const [copied, setCopied] = useState(false);
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  // Load from LocalStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          queueMicrotask(() => {
            setCompletedIds(parsed);
          });
        }
      }
    } catch {
      // Ignore localStorage read errors
    }
  }, []);

  // Save to LocalStorage
  const toggleItem = (id: string) => {
    setCompletedIds((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset your checklist progress? This will uncheck all items.")) {
      setCompletedIds([]);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
    }
  };

  const totalTasks = PUBLISHING_TASKS.length;
  const completedCount = completedIds.length;
  const progressPercent = Math.round((completedCount / totalTasks) * 100);

  // Filtered tasks
  const filteredTasks = useMemo(() => {
    return PUBLISHING_TASKS.filter((task) => {
      // Category filter
      if (activeCategory !== "all" && task.category !== activeCategory) {
        return false;
      }
      // Status filter
      const isDone = completedIds.includes(task.id);
      if (statusFilter === "incomplete" && isDone) return false;
      if (statusFilter === "completed" && !isDone) return false;
      return true;
    });
  }, [activeCategory, statusFilter, completedIds]);

  const shouldReduceMotion = useReducedMotion();

  // Print checklist
  const handlePrint = () => {
    window.print();
  };

  // Toggle all items in current filtered view or category
  const handleToggleCurrentCategory = (markComplete: boolean) => {
    const targetTaskIds = filteredTasks.map((t) => t.id);
    setCompletedIds((prev) => {
      let updated: string[];
      if (markComplete) {
        const set = new Set([...prev, ...targetTaskIds]);
        updated = Array.from(set);
      } else {
        updated = prev.filter((id) => !targetTaskIds.includes(id));
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  // Copy checklist summary
  const handleCopySummary = () => {
    const summary = `
Google Play Publishing Readiness Checklist Audit
Completed: ${completedCount} / ${totalTasks} (${progressPercent}%)
Audit Date: ${new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
--------------------------------------------------
${CHECKLIST_CATEGORIES.map((cat) => {
  const catTasks = PUBLISHING_TASKS.filter((t) => t.category === cat.id);
  const catDone = catTasks.filter((t) => completedIds.includes(t.id)).length;
  return `\n[${cat.name}]: ${catDone}/${catTasks.length}\n` +
    catTasks
      .map((t) => `  [${completedIds.includes(t.id) ? "X" : " "}] ${t.title}`)
      .join("\n");
}).join("\n")}
--------------------------------------------------
Notice: Educational self-audit checklist via PlayStoreGuide.com. Not an official Google approval guarantee.
`.trim();

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const currentCategoryObj = CHECKLIST_CATEGORIES.find((c) => c.id === activeCategory);
  const currentCategoryTasks = activeCategory === "all" ? PUBLISHING_TASKS : PUBLISHING_TASKS.filter((t) => t.category === activeCategory);
  const currentCategoryCompleted = currentCategoryTasks.filter((t) => completedIds.includes(t.id)).length;
  const isCurrentCategoryAllDone = currentCategoryTasks.length > 0 && currentCategoryCompleted === currentCategoryTasks.length;

  return (
    <div className="space-y-8">
      {/* Tool Limitations & Policy Notice */}
      <div className="rounded-3xl border border-primary/20 bg-surface-cream/80 dark:bg-card p-6 sm:p-7 shadow-subtle print:border print:border-gray-300">
        <div className="flex items-start gap-3.5">
          <Info className="h-5 w-5 text-primary shrink-0 mt-0.5 print:hidden" />
          <div className="space-y-1.5">
            <h2 className="text-sm font-extrabold text-foreground">
              Tool Limitations &bull; Pre-Submission Self-Audit Only
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              This interactive readiness checklist evaluates your store listing assets, App Bundle technical configurations, Target SDK requirements, and Data Safety disclosures against published Google Play Developer Program policies. <strong>Completing all items here does not guarantee automated approval.</strong> Google evaluates app submissions using proprietary static scanners and human reviewers who review app runtime behavior, in-app purchases, and account credentials.
            </p>
          </div>
        </div>
      </div>

      {/* Progress & Overview Card */}
      <div className="rounded-3xl border border-border/80 bg-surface-panel dark:bg-card p-6 sm:p-8 shadow-floating space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Pre-Launch Readiness Score
            </span>
            <div className="flex items-baseline gap-3 mt-1">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                {progressPercent}%
              </h3>
              <span className="text-sm text-muted-foreground">
                ({completedCount} of {totalTasks} requirements verified)
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 print:hidden">
            <Button
              type="button"
              onClick={handlePrint}
              variant="outline"
              size="sm"
              className="text-xs font-semibold border-border/80 hover:bg-muted/30"
            >
              <Printer className="h-3.5 w-3.5 mr-1.5 text-primary" />
              <span>Print / PDF Audit</span>
            </Button>

            <Button
              type="button"
              onClick={handleCopySummary}
              variant="outline"
              size="sm"
              className="text-xs font-medium border-border/80 hover:bg-muted/30"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 mr-1.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Copied Report</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 mr-1.5 text-primary" />
                  <span>Copy Report</span>
                </>
              )}
            </Button>

            <Button
              type="button"
              onClick={handleReset}
              variant="ghost"
              size="sm"
              disabled={completedCount === 0}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="h-3.5 w-3.5 mr-1" />
              <span>Reset</span>
            </Button>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-full bg-muted/60 rounded-full h-3.5 overflow-hidden p-0.5 border border-border/40">
          <motion.div
            className="bg-primary h-full rounded-full"
            initial={shouldReduceMotion ? false : { width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: "easeOut" }}
          />
        </div>

        {/* Category Completion Badges */}
        <div className="flex flex-wrap gap-2 pt-1 print:hidden">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`text-xs px-3 py-1.5 rounded-xl border transition-all cursor-pointer font-medium ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground border-primary font-bold shadow-2xs"
                : "bg-surface-panel dark:bg-card text-muted-foreground border-border/70 hover:border-border hover:text-foreground"
            }`}
          >
            All Categories ({completedCount}/{totalTasks})
          </button>
          {CHECKLIST_CATEGORIES.map((cat) => {
            const catTasks = PUBLISHING_TASKS.filter((t) => t.category === cat.id);
            const catCompleted = catTasks.filter((t) => completedIds.includes(t.id)).length;
            const isCatComplete = catCompleted === catTasks.length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs px-2.5 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer font-medium ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground border-primary font-bold shadow-2xs"
                    : isCatComplete
                    ? "bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800"
                    : "bg-surface-panel dark:bg-card text-muted-foreground border-border/70 hover:border-border hover:text-foreground"
                }`}
              >
                <span>{cat.shortName}</span>
                <span className="text-[11px] opacity-80 font-mono">
                  ({catCompleted}/{catTasks.length})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter Tabs & Quick Actions Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-border/70 print:hidden">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs font-bold text-muted-foreground flex items-center gap-1 shrink-0">
            <Filter className="h-3.5 w-3.5" /> View:
          </span>
          <div className="inline-flex rounded-xl border border-border/70 bg-surface-cream/50 dark:bg-muted/20 p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setStatusFilter("all")}
              className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                statusFilter === "all"
                  ? "bg-surface-panel dark:bg-card text-foreground font-bold shadow-2xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All Items ({totalTasks})
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter("incomplete")}
              className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                statusFilter === "incomplete"
                  ? "bg-surface-panel dark:bg-card text-foreground font-bold shadow-2xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Incomplete ({totalTasks - completedCount})
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter("completed")}
              className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                statusFilter === "completed"
                  ? "bg-surface-panel dark:bg-card text-foreground font-bold shadow-2xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Completed ({completedCount})
            </button>
          </div>
        </div>

        {/* Category Quick Actions */}
        <div className="flex items-center gap-2 shrink-0 text-xs">
          {activeCategory !== "all" && (
            <span className="text-xs text-muted-foreground mr-1">
              {currentCategoryObj?.name}:
            </span>
          )}
          <button
            type="button"
            onClick={() => handleToggleCurrentCategory(!isCurrentCategoryAllDone)}
            className="text-xs font-semibold text-primary hover:underline cursor-pointer"
          >
            {isCurrentCategoryAllDone
              ? "Clear Category"
              : `Mark ${activeCategory === "all" ? "Filtered" : "Category"} Done`}
          </button>
        </div>
      </div>

      {/* Checklist Items List */}
      <div className="space-y-3.5">
        {filteredTasks.length === 0 ? (
          <div className="p-10 text-center rounded-3xl border border-dashed border-border bg-surface-panel dark:bg-card text-muted-foreground text-sm">
            No checklist requirements match your current filter selection.
          </div>
        ) : (
          filteredTasks.map((task) => {
            const isDone = completedIds.includes(task.id);
            const categoryObj = CHECKLIST_CATEGORIES.find((c) => c.id === task.category);

            return (
              <motion.div
                key={task.id}
                layout={!shouldReduceMotion}
                onClick={() => toggleItem(task.id)}
                className={`group p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                  isDone
                    ? "border-emerald-300/70 bg-emerald-50/30 dark:border-emerald-950/40 dark:bg-emerald-950/10 opacity-85"
                    : "border-border/80 bg-surface-panel dark:bg-card hover:border-primary/50 shadow-2xs"
                }`}
              >
                <button
                  type="button"
                  aria-label={isDone ? `Mark "${task.title}" as incomplete` : `Mark "${task.title}" as complete`}
                  aria-checked={isDone}
                  role="checkbox"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem(task.id);
                  }}
                  className="mt-0.5 shrink-0 min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg hover:bg-muted/40 transition-transform cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  {isDone ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </button>

                <div className="space-y-1.5 flex-1 text-xs sm:text-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4
                      className={`font-bold transition-colors ${
                        isDone ? "line-through text-muted-foreground" : "text-foreground"
                      }`}
                    >
                      {task.title}
                    </h4>

                    <div className="flex items-center gap-1.5">
                      {task.critical && (
                        <Badge variant="destructive" className="text-[10px] py-0 px-1.5 font-bold">
                          Critical
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-[10px] py-0 px-1.5 font-medium">
                        {categoryObj?.shortName || task.category}
                      </Badge>
                    </div>
                  </div>

                  <p
                    className={`text-xs leading-relaxed ${
                      isDone ? "text-muted-foreground/80 line-through" : "text-muted-foreground"
                    }`}
                  >
                    {task.description}
                  </p>

                  <div className="pt-1 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                    <span className="font-bold text-primary">Rule Reference:</span>
                    <span>{task.officialRule}</span>
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>

      {/* LocalStorage Note */}
      {isMounted && (
        <p className="text-[11px] text-muted-foreground text-center print:hidden">
          Progress is automatically saved to your browser&rsquo;s local storage. You can safely refresh, return later, or print this page as a PDF audit sheet.
        </p>
      )}
    </div>
  );
}
