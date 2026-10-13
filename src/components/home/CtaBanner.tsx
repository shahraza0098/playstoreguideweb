import React from "react";
import Link from "next/link";
import { Check, ShieldCheck, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="py-20 sm:py-28 bg-surface-pale-blue/70 dark:bg-card/40 border-b border-border/80 text-center relative overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[600px] rounded-full bg-primary/6 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/90 bg-surface-panel dark:bg-card p-8 sm:p-14 shadow-floating">
          <Badge
            variant="outline"
            className="py-1 px-3.5 text-xs font-semibold rounded-full border-primary/30 bg-surface-cream text-foreground mb-4"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-primary mr-1" />
            Get Started with PlayStoreGuide
          </Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight max-w-2xl mx-auto">
            Ready to Prepare Your Android App for Google Play Release?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you need 14-day closed testing coordination, production review questionnaire guidance, or rejection recovery assistance, our technical team is ready to support your launch.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className:
                  "rounded-full bg-primary px-8 py-6 text-sm sm:text-base font-semibold text-primary-foreground shadow-card hover:bg-primary/90 transition-all active:scale-98 w-full sm:w-auto",
              })}
            >
              Schedule Publishing Consultation
            </Link>

            <Link
              href="/services"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "rounded-full border-border bg-surface-panel dark:bg-card px-7 py-6 text-sm sm:text-base font-medium text-foreground hover:bg-muted transition-all active:scale-98 w-full sm:w-auto",
              })}
            >
              Explore Publishing Services
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-primary" />
              <span>No long-term contracts</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-primary" />
              <span>Direct developer support</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" />
              <span>Response within 12–24 business hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
