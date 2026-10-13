"use client";

import React, { useState, useEffect, useMemo, useSyncExternalStore } from "react";
import {
  CheckCircle2,
  Circle,
  RotateCcw,
  Copy,
  Check,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface PrivacyCategory {
  id: string;
  name: string;
  shortName: string;
}

export const PRIVACY_CATEGORIES: PrivacyCategory[] = [
  { id: "data-collected", name: "Data Types Collected", shortName: "Data Types" },
  { id: "purposes", name: "Processing Purposes", shortName: "Purposes" },
  { id: "sdk-sharing", name: "Third-Party SDKs & Sharing", shortName: "SDK Sharing" },
  { id: "retention-security", name: "Retention & Security", shortName: "Security" },
  { id: "deletion-rights", name: "Account Deletion & Rights", shortName: "Deletion" },
  { id: "permissions", name: "Sensitive Permissions", shortName: "Permissions" },
];

export interface PrivacyTask {
  id: string;
  category: string;
  title: string;
  description: string;
  dataSafetyMapping: string;
  critical?: boolean;
}

export const PRIVACY_TASKS: PrivacyTask[] = [
  // 1. Data Types Collected
  {
    id: "data-personal-identifiers",
    category: "data-collected",
    title: "Personal Identifiers (Name, Email, Phone, User IDs)",
    description: "Clearly enumerate if you collect user names, email addresses, phone numbers, or account IDs for registration, login, or notifications.",
    dataSafetyMapping: "Data Safety: Personal info > Name, Email, User IDs",
    critical: true,
  },
  {
    id: "data-location",
    category: "data-collected",
    title: "Location Data (Approximate vs. Precise Geolocation)",
    description: "Disclose whether your app accesses coarse location (network-based) or precise location (GPS-based), and whether location is collected in the background.",
    dataSafetyMapping: "Data Safety: Location > Approximate / Precise",
    critical: true,
  },
  {
    id: "data-financial",
    category: "data-collected",
    title: "Financial Information & In-App Purchases",
    description: "Disclose payment transactions, purchase history, or credit information. State whether billing is processed via Google Play Billing or an external gateway.",
    dataSafetyMapping: "Data Safety: Financial info > Purchase history",
  },
  {
    id: "data-media-files",
    category: "data-collected",
    title: "Photos, Videos, Audio, or Device Files",
    description: "If users upload avatars, voice notes, or documents, specify where these media files are transmitted and whether they are stored encrypted.",
    dataSafetyMapping: "Data Safety: Photos and videos / Audio files",
  },
  {
    id: "data-device-identifiers",
    category: "data-collected",
    title: "Device & Other Identifiers (Advertising ID, Android ID)",
    description: "Declare device hardware models, OS version, Android ID, and Google Advertising ID (GAID) collected by analytics or advertising libraries.",
    dataSafetyMapping: "Data Safety: Device or other IDs > Device or other IDs",
    critical: true,
  },

  // 2. Processing Purposes
  {
    id: "purpose-functionality",
    category: "purposes",
    title: "Core App Functionality Justification",
    description: "Explicitly state which data points are required strictly for enabling core features (e.g. syncing profiles, saving gameplay progress, dispatching orders).",
    dataSafetyMapping: "Data Safety Purpose: App functionality",
    critical: true,
  },
  {
    id: "purpose-analytics",
    category: "purposes",
    title: "Analytics, Diagnostics & Crash Reporting",
    description: "Explain that telemetry, screen interaction time, and crash stack traces are gathered to diagnose bugs, improve stability, and monitor performance.",
    dataSafetyMapping: "Data Safety Purpose: Analytics / Diagnostics",
  },
  {
    id: "purpose-ads-marketing",
    category: "purposes",
    title: "Advertising, Remarketing & Personalization",
    description: "If showing banner, interstitial, or rewarded ads, specify whether ads are personalized or contextual, and describe user opt-out mechanisms.",
    dataSafetyMapping: "Data Safety Purpose: Advertising or marketing",
    critical: true,
  },
  {
    id: "purpose-security-fraud",
    category: "purposes",
    title: "Fraud Prevention, Security & Compliance",
    description: "Detail data processed to detect bot traffic, unauthorized account access, credential stuffing, or financial transaction fraud.",
    dataSafetyMapping: "Data Safety Purpose: Fraud prevention, security, and compliance",
  },

  // 3. Third-Party SDKs & Data Sharing
  {
    id: "sdk-admob",
    category: "sdk-sharing",
    title: "Google Mobile Ads (AdMob) Disclosures",
    description: "Declare that Google Mobile Ads SDK collects IP address, Advertising ID, diagnostic data, and ad interaction events. Link to Google's Privacy Policy.",
    dataSafetyMapping: "Third-party sharing: Advertising / Analytics",
    critical: true,
  },
  {
    id: "sdk-firebase-analytics",
    category: "sdk-sharing",
    title: "Firebase Analytics & Crashlytics Integration",
    description: "Disclose that Firebase collects App Instance IDs, device model, operating system, and crash logs to generate aggregated diagnostics.",
    dataSafetyMapping: "Third-party sharing: Analytics / Diagnostics",
  },
  {
    id: "sdk-facebook-adjust",
    category: "sdk-sharing",
    title: "Social Login & Attribution SDKs (Meta, AppsFlyer, Adjust)",
    description: "Disclose data shared with attribution trackers and social authentication providers, including install referrer parameters and campaign IDs.",
    dataSafetyMapping: "Third-party sharing: Marketing / Attribution",
  },

  // 4. Retention & Security
  {
    id: "sec-encryption-transit",
    category: "retention-security",
    title: "Data Encryption in Transit (HTTPS / TLS 1.3)",
    description: "Certify that all network transmissions between the mobile client and your backend servers use HTTPS with modern TLS encryption protocols.",
    dataSafetyMapping: "Data Safety: Data is encrypted in transit (Yes/No)",
    critical: true,
  },
  {
    id: "sec-retention-periods",
    category: "retention-security",
    title: "Explicit Data Retention Timelines",
    description: "State how long user data is retained (e.g. 'for the duration of the active account plus 30 days' or 'anonymized after 12 months'). Avoid vague terms.",
    dataSafetyMapping: "Privacy Policy: Retention clauses",
  },
  {
    id: "sec-storage-jurisdiction",
    category: "retention-security",
    title: "Storage Geography & Cloud Provider Disclosures",
    description: "Disclose where servers are hosted (e.g. AWS US-East, Google Cloud Europe) and cross-border transfer protections (Standard Contractual Clauses).",
    dataSafetyMapping: "GDPR / International Data Transfers",
  },

  // 5. Deletion Rights & Account Deletion
  {
    id: "del-account-web-link",
    category: "deletion-rights",
    title: "Web-Based Account Deletion URL (Mandatory Requirement)",
    description: "Google Play requires a dedicated, publicly accessible web link where users can request account and associated data deletion without reinstalling the app.",
    dataSafetyMapping: "Data Safety: Users can request that data be deleted (Yes/No)",
    critical: true,
  },
  {
    id: "del-in-app-mechanism",
    category: "deletion-rights",
    title: "In-App Account Deletion Option",
    description: "Provide an accessible 'Delete Account' button within the app settings that initiates immediate or scheduled deletion of personal identifiers.",
    dataSafetyMapping: "Google Play Account Deletion Policy",
    critical: true,
  },
  {
    id: "del-user-rights-gdpr",
    category: "deletion-rights",
    title: "User Rights (Access, Portability, Rectification)",
    description: "Detail procedures for users to request copies of their data, update incorrect information, or withdraw consent for data processing.",
    dataSafetyMapping: "GDPR Articles 15-20 / CCPA Consumer Rights",
  },

  // 6. Sensitive Permissions
  {
    id: "perm-location",
    category: "permissions",
    title: "Location Permission Disclosures (Coarse & Fine)",
    description: "Explain in plain English why your app needs ACCESS_COARSE_LOCATION or ACCESS_FINE_LOCATION. Background location requires additional Google approval.",
    dataSafetyMapping: "Runtime Permissions: Location",
    critical: true,
  },
  {
    id: "perm-camera-mic",
    category: "permissions",
    title: "Camera & Audio Recording Disclosures",
    description: "State whether camera and microphone are accessed only during active user interaction and confirm that audio/video streams are not recorded covertly.",
    dataSafetyMapping: "Runtime Permissions: Camera / Audio",
  },
  {
    id: "perm-foreground-services",
    category: "permissions",
    title: "Foreground Service Permissions Justification (Android 14+)",
    description: "Android 14 enforces FOREGROUND_SERVICE_* types (data sync, media playback, location). Disclose the user-facing notification paired with the service.",
    dataSafetyMapping: "Android 14 Target API 34 Policy",
    critical: true,
  },
];

const STORAGE_KEY = "psg_privacy_checklist_v1";

export function PrivacyPolicyChecklist() {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [copied, setCopied] = useState(false);
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

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
    } catch {}
  }, []);

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
    if (window.confirm("Are you sure you want to reset your privacy audit checklist?")) {
      setCompletedIds([]);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
    }
  };

  const totalTasks = PRIVACY_TASKS.length;
  const completedCount = completedIds.length;
  const progressPercent = Math.round((completedCount / totalTasks) * 100);

  const filteredTasks = useMemo(() => {
    if (activeCategory === "all") return PRIVACY_TASKS;
    return PRIVACY_TASKS.filter((task) => task.category === activeCategory);
  }, [activeCategory]);

  const handleCopySpec = () => {
    const report = `
Privacy Policy & Data Safety Audit Specification
Completed: ${completedCount} / ${totalTasks} items reviewed (${progressPercent}%)
--------------------------------------------------
LEGAL DISCLAIMER:
This self-audit summary is an educational reference for drafting Google Play Data Safety
declarations and privacy policies. It is NOT legal advice.
--------------------------------------------------
${PRIVACY_CATEGORIES.map((cat) => {
  const catTasks = PRIVACY_TASKS.filter((t) => t.category === cat.id);
  const catDone = catTasks.filter((t) => completedIds.includes(t.id)).length;
  return `\n### [${cat.name}] (${catDone}/${catTasks.length})\n` +
    catTasks
      .map((t) => `* [${completedIds.includes(t.id) ? "VERIFIED" : "PENDING"}] ${t.title}\n  - Data Safety: ${t.dataSafetyMapping}\n  - Details: ${t.description}`)
      .join("\n\n");
}).join("\n")}
--------------------------------------------------
Generated via PlayStoreGuide.com Privacy Policy Preparation Checklist.
`.trim();

    navigator.clipboard.writeText(report);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Prominent Legal Disclaimer Banner */}
      <div className="rounded-2xl border border-amber-300 bg-amber-50/70 dark:border-amber-900/60 dark:bg-amber-950/20 p-5 sm:p-6 text-xs sm:text-sm">
        <div className="flex items-start gap-3.5">
          <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-bold text-amber-900 dark:text-amber-200">
              Important Legal &amp; Policy Notice
            </h3>
            <p className="text-amber-800 dark:text-amber-300 leading-relaxed text-xs">
              This checklist is an educational self-audit tool designed to help developers identify data practices before filling out Google Play&rsquo;s Data Safety form. <strong>This checklist does not constitute legal advice</strong> and cannot independently establish compliance with data privacy regulations (such as GDPR, CCPA/CPRA, or COPPA). Always consult qualified legal counsel for binding compliance.
            </p>
          </div>
        </div>
      </div>

      {/* Progress & Overview Card */}
      <div className="rounded-2xl border border-primary/20 bg-card p-6 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Privacy Disclosures Audit Score
            </span>
            <div className="flex items-baseline gap-3 mt-1">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                {progressPercent}%
              </h3>
              <span className="text-sm text-muted-foreground">
                ({completedCount} of {totalTasks} disclosures verified)
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Button
              onClick={handleCopySpec}
              variant="outline"
              size="sm"
              className="text-xs font-medium border-border"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 mr-1.5 text-emerald-600" /> Copied Privacy Spec
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 mr-1.5" /> Copy Privacy Spec Sheet
                </>
              )}
            </Button>

            <Button
              onClick={handleReset}
              variant="ghost"
              size="sm"
              disabled={completedCount === 0}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="h-3.5 w-3.5 mr-1" /> Reset Progress
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
          <div
            className="bg-primary h-3 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Category Pill Navigation */}
        <div className="flex flex-wrap gap-2 pt-1">
          <button
            onClick={() => setActiveCategory("all")}
            className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground border-primary font-semibold"
                : "bg-background text-muted-foreground border-border hover:border-foreground/30"
            }`}
          >
            All Categories ({totalTasks})
          </button>
          {PRIVACY_CATEGORIES.map((cat) => {
            const catTasks = PRIVACY_TASKS.filter((t) => t.category === cat.id);
            const catCompleted = catTasks.filter((t) => completedIds.includes(t.id)).length;
            const isCatComplete = catCompleted === catTasks.length;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs px-2.5 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground border-primary font-semibold"
                    : isCatComplete
                    ? "bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800"
                    : "bg-background text-muted-foreground border-border hover:border-foreground/30"
                }`}
              >
                <span>{cat.shortName}</span>
                <span className="text-[11px] opacity-80">
                  ({catCompleted}/{catTasks.length})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Checklist Tasks List */}
      <div className="space-y-3">
        {filteredTasks.map((task) => {
          const isDone = completedIds.includes(task.id);
          const categoryObj = PRIVACY_CATEGORIES.find((c) => c.id === task.category);

          return (
            <div
              key={task.id}
              onClick={() => toggleItem(task.id)}
              className={`group p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                isDone
                  ? "border-emerald-200/80 bg-emerald-50/20 dark:border-emerald-950/40 dark:bg-emerald-950/10 opacity-80"
                  : "border-border bg-card hover:border-primary/50 shadow-sm"
              }`}
            >
              <button
                type="button"
                aria-label={isDone ? "Mark as unverified" : "Mark as verified"}
                className="mt-0.5 shrink-0 transition-transform group-hover:scale-110"
              >
                {isDone ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
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
                      <Badge variant="destructive" className="text-[10px] py-0 px-1.5 font-semibold">
                        Strict Google Check
                      </Badge>
                    )}
                    <Badge variant="outline" className="text-[10px] py-0 px-1.5">
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

                <div className="pt-1 flex items-center gap-2 text-[11px] text-muted-foreground">
                  <span className="font-semibold text-primary">Play Console Mapping:</span>
                  <span className="font-mono text-[10.5px] bg-muted px-1.5 py-0.5 rounded">{task.dataSafetyMapping}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isMounted && (
        <p className="text-[11px] text-muted-foreground text-center">
          Audit selections are securely saved in your browser local storage.
        </p>
      )}
    </div>
  );
}
