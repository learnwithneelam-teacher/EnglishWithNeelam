import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, BookOpen, GraduationCap, Heart, Phone } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Neelam — B.Ed, CTET English Teacher in Roorkee" },
      {
        name: "description",
        content:
          "Meet Neelam — a B.Ed, M.Com and CTET (Paper 1) qualified English teacher in Roorkee with 8+ years of pre-primary, primary, home and online tuition experience.",
      },
      { property: "og:title", content: "About Neelam — English Teacher in Roorkee" },
      {
        property: "og:description",
        content:
          "B.Ed, M.Com, CTET-qualified English teacher with 8+ years of classroom and tuition experience.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "profile" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Neelam",
          mainEntity: {
            "@type": "Person",
            name: "Neelam",
            jobTitle: "English Teacher",
            description:
              "B.Ed, M.Com and CTET-qualified English teacher in Roorkee with experience across pre-primary, primary, home and online tuition.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Roorkee",
              addressRegion: "Uttarakhand",
              addressCountry: "IN",
            },
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-xl font-semibold tracking-tight">
            Learn with <span className="text-primary">Neelam</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <Link to="/success-stories" className="hover:text-foreground">Success Stories</Link>
            <Link to="/about" className="font-semibold text-foreground">About</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </nav>
          <a href="tel:+919971055356" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm transition-transform hover:scale-[1.02]">
            <Phone className="size-4" /> +91 99710 55356
          </a>
        </div>
      </header>

      <main className="flex-1 mx-auto max-w-3xl w-full px-6 py-16">
        <nav className="mb-6 flex gap-2 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <span className="text-foreground">About</span>
        </nav>

        <h1 className="font-display mt-2 text-5xl font-semibold leading-tight">About Neelam</h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          I'm Neelam — a pre-primary and primary English teacher based in Roorkee, Uttarakhand.
          I'm currently teaching Classes 4, 5 and 6 at SNDK Public School, and I also take home
          and online tuitions for kids and school students.
        </p>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">My approach</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            I believe early years shape a child's love for learning. My classrooms are warm,
            inclusive and creative — blending phonics, stories, art and conversation so every
            child finds their voice in English.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">Qualifications</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            <li className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <GraduationCap className="mt-1 size-5 text-primary" />
              <div>
                <div className="font-semibold">B.Ed</div>
                <div className="text-sm text-muted-foreground">Barkatullah University, 2017</div>
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <BookOpen className="mt-1 size-5 text-primary" />
              <div>
                <div className="font-semibold">M.Com (First Division)</div>
                <div className="text-sm text-muted-foreground">RDVV Jabalpur, 2012</div>
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <Award className="mt-1 size-5 text-primary" />
              <div>
                <div className="font-semibold">CTET (Paper 1) Qualified</div>
                <div className="text-sm text-muted-foreground">2016</div>
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <Heart className="mt-1 size-5 text-primary" />
              <div>
                <div className="font-semibold">8+ years</div>
                <div className="text-sm text-muted-foreground">Teaching & tuition experience</div>
              </div>
            </li>
          </ul>
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            See services
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            Contact Neelam
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
