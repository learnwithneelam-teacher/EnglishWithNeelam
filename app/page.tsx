import Link from "next/link";

import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-center">
      <div className="max-w-xl">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Learn with Neelam
        </span>
        <h1 className="font-display mt-4 text-5xl font-semibold leading-tight sm:text-6xl">
          Live online English classes for{" "}
          <em className="not-italic text-primary">children across India</em>.
        </h1>
        <p className="mt-5 text-muted-foreground">
          Improve speaking, grammar, reading, writing and phonics with personalized
          lessons from Neelam — a B.Ed and CTET-qualified English teacher.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            See services <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            Book free intro class
          </Link>
        </div>
        <nav aria-label="Footer" className="mt-12 flex justify-center gap-6 text-sm text-muted-foreground">
          <Link href="/services" className="hover:text-foreground">
            Services
          </Link>
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </main>
  );
}

