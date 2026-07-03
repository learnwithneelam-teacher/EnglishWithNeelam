import { createFileRoute, Link } from "@tanstack/react-router";
import { Map, Phone } from "lucide-react";

export const Route = createFileRoute("/sitemap-page")({
  head: () => ({
    meta: [
      { title: "Sitemap — English with Neelam" },
      { name: "description", content: "Full sitemap for the English with Neelam website. Find all pages, policies, and resources in one place." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/sitemap-page" }],
  }),
  component: SitemapPage,
});

const sections = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Services & Classes", href: "/services" },
      { label: "About Neelam", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Student & Parent Resources",
    links: [
      { label: "Success Stories", href: "/success-stories" },
      { label: "Testimonials & Reviews", href: "/testimonials" },
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "Free Learning Resources", href: "/resources" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal & Policies",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Accessibility Statement", href: "/accessibility" },
      { label: "Shipping & Delivery Policy", href: "/shipping" },
    ],
  },
  {
    title: "Utility Pages",
    links: [
      { label: "Thank You", href: "/thank-you" },
      { label: "Coming Soon", href: "/coming-soon" },
      { label: "Sitemap (this page)", href: "/sitemap-page" },
    ],
  },
  {
    title: "Technical Files",
    links: [
      { label: "XML Sitemap", href: "/sitemap.xml" },
      { label: "Robots.txt", href: "/robots.txt" },
      { label: "Humans.txt", href: "/humans.txt" },
      { label: "Security.txt", href: "/.well-known/security.txt" },
    ],
  },
];

function SitemapPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-xl font-semibold tracking-tight">Learn with <span className="text-primary">Neelam</span></Link>
          <a href="tel:+919971055356" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">
            <Phone className="size-4" /> +91 99710 55356
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-14 text-center border-b border-border" style={{ backgroundImage: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-xl px-6">
          <nav className="mb-4 flex justify-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link><span>/</span><span className="text-foreground">Sitemap</span>
          </nav>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            <Map className="size-3.5" /> Full Site Map
          </span>
          <h1 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">Sitemap</h1>
          <p className="mt-3 text-sm text-muted-foreground">Every page on the English with Neelam website, organised by category.</p>
        </div>
      </section>

      {/* Sitemap Grid */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4 pb-2 border-b border-border">
                {section.title}
              </h2>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("http") || link.href.includes(".txt") || link.href.includes(".xml") || link.href.startsWith("/.") ? (
                      <a href={link.href} className="text-sm text-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                        <span className="size-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.href} className="text-sm text-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                        <span className="size-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/20 py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© 2026 English with Neelam · Roorkee, Uttarakhand</div>
          <nav className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
