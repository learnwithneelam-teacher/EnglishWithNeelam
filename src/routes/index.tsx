import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Learn with Neelam — English Tutor in Roorkee | Online & Home Tuition" },
      {
        name: "description",
        content:
          "B.Ed & CTET-qualified English teacher in Roorkee. Pre-primary, primary, home & online English tuition for kids and school students. Book a free intro class.",
      },
      { name: "keywords", content: "English teacher Roorkee, home tuition Roorkee, online English classes, LKG UKG tutor, CBSE English tutor, spoken English coaching" },
      { property: "og:title", content: "Learn with Neelam — English Tutor in Roorkee" },
      {
        property: "og:description",
        content:
          "Pre-primary, primary, home & online English tuition with Neelam — B.Ed and CTET-qualified teacher in Roorkee.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Learn with Neelam — English Tutor in Roorkee" },
      {
        name: "twitter:description",
        content: "Pre-primary, primary, home & online English tuition in Roorkee.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Neelam",
          jobTitle: "Pre-Primary & Primary English Teacher",
          telephone: "+91-9971055356",
          email: "learnwithneelamy@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Roorkee",
            addressRegion: "Uttarakhand",
            addressCountry: "IN",
          },
          hasCredential: [
            { "@type": "EducationalOccupationalCredential", name: "B.Ed" },
            { "@type": "EducationalOccupationalCredential", name: "M.Com" },
            { "@type": "EducationalOccupationalCredential", name: "CTET (Paper 1)" },
          ],
          knowsLanguage: ["English", "Hindi"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
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
            to="/services"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            See services <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            Book free intro class
          </Link>
        </div>
        <nav aria-label="Footer" className="mt-12 flex justify-center gap-6 text-sm text-muted-foreground">
          <Link to="/services" className="hover:text-foreground">Services</Link>
          <Link to="/about" className="hover:text-foreground">About</Link>
          <Link to="/contact" className="hover:text-foreground">Contact</Link>
        </nav>
      </div>
    </main>
  );
}
