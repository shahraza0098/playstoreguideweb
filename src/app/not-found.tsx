import React from "react";
import Link from "next/link";
import { ShieldAlert, Home, BookOpen, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-24 px-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted text-muted-foreground mb-6">
        <ShieldAlert className="h-8 w-8 text-primary" />
      </div>

      <span className="text-xs font-bold uppercase tracking-wider text-primary">
        404 Error • Page Not Found
      </span>
      <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-foreground">
        This Route Does Not Exist
      </h1>
      <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
        The page you are looking for may have moved or been updated. Explore our Google Play developer services or browse our technical guides below.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link href="/">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            <Home className="h-4 w-4 mr-1.5" /> Return to Homepage
          </Button>
        </Link>
        <Link href="/services">
          <Button variant="outline" className="border-border">
            <Layers className="h-4 w-4 mr-1.5" /> Publishing Services
          </Button>
        </Link>
        <Link href="/blog">
          <Button variant="outline" className="border-border">
            <BookOpen className="h-4 w-4 mr-1.5" /> Developer Blog
          </Button>
        </Link>
      </div>
    </div>
  );
}
