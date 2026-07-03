import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle, ArrowRight, Phone, BookOpen, Star } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — English with Neelam" },
      { name: "description", content: "Thank you for getting in touch with English with Neelam. We'll be in contact within 24 hours to schedule your free introductory class." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYouPage,
});

const nextSteps = [
  {
    number: "1",
    title: "We'll contact you within 24 hours",
    desc: "Neelam will reach out by phone or WhatsApp to discuss your child's needs and schedule the free introductory session.",
  },
  {
    number: "2",
    title: "Free introductory session",
    desc: "We'll meet your child, understand their current level, and identify the specific areas to focus on — with no obligation.",
  },
  {
    number: "3",
    title: "Personalised learning plan",
    desc: "Based on the first session, we'll create a plan tailored to your child's goals, current level, and schedule.",
  },
];

function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Nav */}
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-xl font-semibold tracking-tight">Learn with <span className="text-primary">Neelam</span></Link>
          <a href="tel:+919971055356" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">
            <Phone className="size-4" /> +91 99710 55356
          </a>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-20 px-6">
        <div className="mx-auto max-w-2xl text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <CheckCircle className="size-10 text-primary" />
          </div>

          <h1 className="font-display text-4xl font-semibold sm:text-5xl">Thank You!</h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Your message has been received. Neelam will get back to you within <strong>24 hours</strong> to schedule your free introductory class.
          </p>

          {/* Next Steps */}
          <div className="mt-12 text-left rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-xl font-semibold text-center mb-8">What Happens Next</h2>
            <div className="space-y-6">
              {nextSteps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground" style={{ backgroundImage: "var(--gradient-primary)" }}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Explore while waiting */}
          <div className="mt-10">
            <p className="text-sm text-muted-foreground mb-5">While you wait, explore more about English with Neelam:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/success-stories" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:bg-secondary">
                <Star className="size-4 text-amber-500" /> Success Stories
              </Link>
              <Link to="/faq" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:bg-secondary">
                <BookOpen className="size-4 text-primary" /> FAQ
              </Link>
              <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:bg-secondary">
                <ArrowRight className="size-4" /> Home
              </Link>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="mt-10 rounded-xl bg-muted/40 border border-border p-6">
            <p className="text-sm text-muted-foreground">Need to reach us immediately? Contact Neelam directly:</p>
            <div className="mt-3 flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/919971055356" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-primary-foreground" style={{ backgroundImage: "var(--gradient-primary)" }}>
                WhatsApp
              </a>
              <a href="tel:+919971055356" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-2.5 text-sm font-semibold hover:bg-secondary">
                <Phone className="size-4" /> +91 99710 55356
              </a>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
