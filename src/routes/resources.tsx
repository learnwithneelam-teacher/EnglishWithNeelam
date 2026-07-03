import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Mic, Pen, Globe, AlignLeft, Hash, Phone, ArrowRight, Download } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Free English Learning Resources — English with Neelam" },
      { name: "description", content: "Free English learning resources for CBSE students — grammar tips, vocabulary lists, reading strategies, writing guides, speaking exercises, and more from Neelam." },
      { name: "keywords", content: "free English resources CBSE, English grammar tips India, vocabulary for class 4 5 6, English reading comprehension, speaking practice exercises" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

const resourceCategories = [
  {
    icon: AlignLeft,
    title: "Grammar",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    description: "Master English grammar one rule at a time.",
    resources: [
      { title: "The 12 Tenses — Simple Reference Chart", desc: "All tenses in one clear table with examples from everyday life.", type: "Guide" },
      { title: "Articles (A, An, The) — When to Use Which", desc: "The most common grammar error, explained simply.", type: "Guide" },
      { title: "Prepositions Practice Sheet", desc: "Fill-in exercises to practise in, on, at, under, between, and more.", type: "Worksheet" },
      { title: "Active vs Passive Voice — Conversion Exercises", desc: "Practice sentences with an answer key.", type: "Worksheet" },
      { title: "Punctuation Rules — Quick Reference Card", desc: "Full stops, commas, question marks, exclamation marks, and apostrophes.", type: "Guide" },
    ],
  },
  {
    icon: Hash,
    title: "Vocabulary",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-100",
    description: "Build a rich and useful English word bank.",
    resources: [
      { title: "100 Words Every Class 5 Student Should Know", desc: "Sorted by topic with meanings and example sentences.", type: "Wordlist" },
      { title: "Synonyms & Antonyms Practice Exercises", desc: "50 pairs with fill-in exercises.", type: "Worksheet" },
      { title: "One Word Substitution — CBSE Level", desc: "Common substitutions asked in CBSE exams.", type: "Guide" },
      { title: "Idioms for Class 5 & 6 — With Meanings", desc: "20 common idioms with explanations and sentences.", type: "Guide" },
      { title: "Word Families — Root Words Chart", desc: "Expand vocabulary by learning word families (act → action, active, activity).", type: "Guide" },
    ],
  },
  {
    icon: BookOpen,
    title: "Reading",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-100",
    description: "Read faster, understand better.",
    resources: [
      { title: "How to Answer Reading Comprehension Questions", desc: "A step-by-step strategy that works for all CBSE passages.", type: "Strategy" },
      { title: "Phonics Sound Chart — All 44 Phonemes", desc: "Complete phoneme chart for beginner readers.", type: "Guide" },
      { title: "Skimming & Scanning Techniques", desc: "Find information faster in long passages.", type: "Strategy" },
      { title: "5 Short Comprehension Passages with Questions", desc: "Timed practice for Class 4–6 with answer keys.", type: "Worksheet" },
      { title: "Building a Daily Reading Habit — Tips for Parents", desc: "Practical strategies to make daily reading happen.", type: "Guide" },
    ],
  },
  {
    icon: Pen,
    title: "Writing",
    color: "text-purple-700",
    bg: "bg-purple-50",
    border: "border-purple-100",
    description: "Write clearly, confidently, and correctly.",
    resources: [
      { title: "The Paragraph Formula", desc: "Topic sentence → supporting details → closing. Always works.", type: "Framework" },
      { title: "Essay Planning Worksheet", desc: "A printable mind-map for planning before writing.", type: "Worksheet" },
      { title: "Formal Letter Format — CBSE Style", desc: "Address, date, subject, salutation, body, and closing — with examples.", type: "Guide" },
      { title: "Informal Letter vs Formal Letter — Key Differences", desc: "Clear comparison with sample letters.", type: "Guide" },
      { title: "Daily Sentence Writing Journal Prompts", desc: "30 days of simple prompts for 3–5 sentences daily.", type: "Worksheet" },
    ],
  },
  {
    icon: Mic,
    title: "Speaking",
    color: "text-rose-700",
    bg: "bg-rose-50",
    border: "border-rose-100",
    description: "Build the confidence to speak clearly.",
    resources: [
      { title: "Picture Description Practice — 10 Images", desc: "Describe what you see in clear, complete sentences.", type: "Exercise" },
      { title: "Conversation Starters for Shy Speakers", desc: "Low-pressure phrases to start and continue a conversation.", type: "Guide" },
      { title: "Role Play Scenarios — Everyday English", desc: "Shopkeeper, doctor, teacher, friend — practise real conversations.", type: "Exercise" },
      { title: "Pronunciation Tips — Common Indian-English Mistakes", desc: "The sounds Indian students often mispronounce and how to fix them.", type: "Guide" },
      { title: "3-Minute Oral Presentation Framework", desc: "Introduction, 2 points, conclusion. Works for any topic.", type: "Framework" },
    ],
  },
  {
    icon: Globe,
    title: "General English",
    color: "text-teal-700",
    bg: "bg-teal-50",
    border: "border-teal-100",
    description: "Tips and tools for overall English improvement.",
    resources: [
      { title: "How to Use a Dictionary Effectively", desc: "Parts of a dictionary entry and how to understand them.", type: "Guide" },
      { title: "10 Habits of Strong English Students", desc: "What the best learners do consistently that others don't.", type: "Guide" },
      { title: "English Learning Apps — What Actually Works", desc: "Honest assessment of apps for Indian school students.", type: "Guide" },
      { title: "How to Watch English TV Shows to Learn English", desc: "Structured watching technique with vocabulary journaling.", type: "Strategy" },
      { title: "Monthly Progress Tracker for Students", desc: "Track your reading, writing, and speaking practice every day.", type: "Worksheet" },
    ],
  },
];

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-xl font-semibold tracking-tight">Learn with <span className="text-primary">Neelam</span></Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <Link to="/resources" className="font-semibold text-foreground">Resources</Link>
            <Link to="/blog" className="hover:text-foreground">Blog</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </nav>
          <a href="tel:+919971055356" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm transition-transform hover:scale-[1.02]">
            <Phone className="size-4" /> +91 99710 55356
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 text-center" style={{ backgroundImage: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-2xl px-6">
          <nav className="mb-4 flex justify-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link><span>/</span><span className="text-foreground">Resources</span>
          </nav>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            <Download className="size-3.5" /> Free for All Students
          </span>
          <h1 className="font-display mt-5 text-4xl font-semibold leading-tight sm:text-5xl">Free English Learning Resources</h1>
          <p className="mt-4 text-muted-foreground">Guides, worksheets, and practice materials for CBSE English students, prepared by Neelam.</p>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <div className="bg-amber-50 border-y border-amber-200 py-3 text-center text-sm text-amber-800">
        <strong>Resources coming soon!</strong> These materials are being prepared and will be available for free download shortly.
        <a href="https://wa.me/919971055356?text=Hi%20Neelam%20ma'am%2C%20please%20let%20me%20know%20when%20the%20free%20resources%20are%20available." target="_blank" rel="noopener noreferrer" className="ml-2 underline">Join the waitlist on WhatsApp →</a>
      </div>

      {/* Resource Categories */}
      <section className="mx-auto max-w-6xl px-6 py-16 space-y-14">
        {resourceCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div key={cat.title}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`rounded-xl p-3 ${cat.bg} ${cat.border} border`}>
                  <Icon className={`size-6 ${cat.color}`} />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-foreground">{cat.title}</h2>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.resources.map((r, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold text-foreground leading-snug">{r.title}</h3>
                      <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${cat.bg} ${cat.color} border ${cat.border}`}>{r.type}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                    <button disabled className="mt-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-lg px-3 py-2 cursor-not-allowed opacity-60">
                      <Download className="size-3.5" /> Coming Soon
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/20 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-display text-3xl font-semibold">Want Personalised Help?</h2>
          <p className="mt-3 text-muted-foreground">Resources are great, but one-to-one tuition is faster. Book a free class and get a learning plan built specifically for your child.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/919971055356?text=Hi%20Neelam%20ma'am%2C%20I'd%20like%20to%20book%20a%20free%20class." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-primary-foreground" style={{ backgroundImage: "var(--gradient-primary)" }}>
              Book Free Class <ArrowRight className="size-4" />
            </a>
            <Link to="/faq" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-3.5 text-sm font-semibold hover:bg-secondary">
              Common Questions
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
