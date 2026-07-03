import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-xl font-semibold tracking-tight">
            Learn with <span className="text-primary">Neelam</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <Link to="/success-stories" className="hover:text-foreground">Success Stories</Link>
            <Link to="/about" className="hover:text-foreground">About</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </nav>
          <a
            href="tel:+919971055356"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm transition-transform hover:scale-[1.02]"
          >
            <Phone className="size-4" />
            +91 99710 55356
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-16">
        <nav className="mb-6 flex gap-2 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <span className="text-foreground">{title}</span>
        </nav>

        <h1 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-10 prose-custom">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6 text-sm text-muted-foreground">
          <div>
            <div className="font-display font-semibold text-foreground">Learn with Neelam</div>
            <div className="mt-1">Roorkee, Uttarakhand, 247667</div>
          </div>
          <nav className="flex flex-wrap gap-4 text-xs">
            <Link to="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
            <Link to="/disclaimer" className="hover:text-foreground">Disclaimer</Link>
            <Link to="/cookie-policy" className="hover:text-foreground">Cookies</Link>
            <Link to="/refund-policy" className="hover:text-foreground">Refund Policy</Link>
            <Link to="/accessibility" className="hover:text-foreground">Accessibility</Link>
          </nav>
          <div className="text-xs">© 2026 English with Neelam</div>
        </div>
      </footer>
    </div>
  );
}

/* Reusable prose section components */
export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-semibold text-foreground mb-3">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <div className="text-muted-foreground leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1.5 pl-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ContactBlock() {
  return (
    <div className="mt-6 rounded-xl border border-border bg-card p-5">
      <p className="font-semibold text-foreground mb-2">Contact us</p>
      <p className="text-sm text-muted-foreground">
        Email:{" "}
        <a href="mailto:learnwithneelamy@gmail.com" className="text-primary hover:underline">
          learnwithneelamy@gmail.com
        </a>
      </p>
      <p className="text-sm text-muted-foreground mt-1">
        Phone: <a href="tel:+919971055356" className="text-primary hover:underline">+91 99710 55356</a>
      </p>
      <p className="text-sm text-muted-foreground mt-1">
        Address: Roorkee, Uttarakhand, 247667, India
      </p>
    </div>
  );
}
