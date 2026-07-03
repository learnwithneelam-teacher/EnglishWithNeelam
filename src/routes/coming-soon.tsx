import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Phone, ArrowRight, Bell } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/coming-soon")({
  head: () => ({
    meta: [
      { title: "Coming Soon — English with Neelam" },
      { name: "description", content: "Something new is coming from English with Neelam. Get notified when it launches." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ComingSoonPage,
});

function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col" style={{ backgroundImage: "var(--gradient-hero)" }}>
      {/* Nav */}
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-xl font-semibold tracking-tight">Learn with <span className="text-primary">Neelam</span></Link>
          <a href="tel:+919971055356" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">
            <Phone className="size-4" /> +91 99710 55356
          </a>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-24 px-6">
        <div className="mx-auto max-w-xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Clock className="size-10 text-primary" />
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary mb-5">
            <Bell className="size-3.5" /> Coming Soon
          </span>

          <h1 className="font-display text-4xl font-bold sm:text-5xl leading-tight">Something New is Coming</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            We're working on something exciting for English learners. Get notified on WhatsApp when it launches.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/919971055356?text=Hi%20Neelam%20ma'am%2C%20please%20notify%20me%20when%20the%20new%20feature%20launches." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-primary-foreground" style={{ backgroundImage: "var(--gradient-primary)" }}>
              <Bell className="size-4" /> Get Notified on WhatsApp
            </a>
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-3.5 text-sm font-semibold hover:bg-secondary">
              <ArrowRight className="size-4" /> Back to Home
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/services" className="hover:text-foreground">Our Classes →</Link>
            <Link to="/faq" className="hover:text-foreground">FAQ →</Link>
            <Link to="/contact" className="hover:text-foreground">Contact →</Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
