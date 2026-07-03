import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Sparkles,
  Star,
  CheckCircle2,
  Award,
  Users,
  Trophy,
  Phone,
  MapPin,
  Mail,
  Heart,
  Palette,
  Languages,
  MessageCircle,
  Target,
  Briefcase,
  Mic,
  PenLine,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import neelamPortrait from "@/assets/neelam-portrait.jpg.asset.json";
import neelamStudents from "@/assets/neelam-students.jpg.asset.json";
import neelamPtm from "@/assets/neelam-ptm.jpg.asset.json";

const WHATSAPP_URL =
  "https://wa.me/919971055356?text=Hi%20Neelam%20ma'am%2C%20I%27d%20like%20to%20enquire%20about%20classes%20for%20my%20child.";

const outcomeTracks = [
  {
    id: "beginner",
    label: "Beginner",
    tagline: "Start from zero — build a confident base.",
    icon: Sparkles,
    vocab: "~500 words",
    duration: "8–12 weeks",
    outcomes: [
      "Read simple English sentences with ease",
      "Introduce yourself confidently",
      "Use basic grammar correctly",
      "Ask simple, everyday questions",
      "Speak in common day-to-day situations",
      "Build a working vocabulary of ~500 words",
    ],
  },
  {
    id: "intermediate",
    label: "Intermediate",
    tagline: "Move from knowing English to using English.",
    icon: Target,
    vocab: "~1500 words",
    duration: "12–16 weeks",
    outcomes: [
      "Speak fluently in everyday conversations",
      "Write clear essays and emails",
      "Understand English movies with subtitles",
      "Apply advanced grammar correctly",
      "Improve pronunciation and clarity",
      "Expand vocabulary to ~1500 words",
    ],
  },
  {
    id: "advanced",
    label: "Advanced",
    tagline: "Near-native fluency for work, study and life.",
    icon: Trophy,
    vocab: "Professional level",
    duration: "16–20 weeks",
    outcomes: [
      "Speak with confident, near-native fluency",
      "Write professional reports and emails",
      "Deliver presentations with poise",
      "Crack interviews with clarity",
      "Communicate in business English",
      "Enjoy books, podcasts and movies without effort",
    ],
  },
];

const audienceOutcomes = [
  {
    title: "Kids (Grades 1–5)",
    icon: Heart,
    bullets: [
      "Learn English through stories and games",
      "Build basic vocabulary",
      "Read simple books",
      "Form complete sentences",
      "Speak with growing confidence",
      "Develop good pronunciation",
    ],
  },
  {
    title: "School Students (Grades 6–12)",
    icon: BookOpen,
    bullets: [
      "Improve school grades",
      "Master grammar concepts",
      "Write better answers in exams",
      "Speak confidently in English",
      "Build vocabulary for academic success",
      "Develop presentation and debate skills",
    ],
  },
  {
    title: "Adults & Professionals",
    icon: Briefcase,
    bullets: [
      "Speak fluent English for work and daily life",
      "Prepare effectively for interviews",
      "Improve workplace communication",
      "Write professional emails",
      "Build confidence in meetings and presentations",
      "Sharpen overall business communication",
    ],
  },
];

const coursePromises = [
  { icon: Mic, text: "Speak English confidently — without hesitation" },
  { icon: BookOpen, text: "Read and understand English texts independently" },
  { icon: PenLine, text: "Write correct sentences, paragraphs and essays" },
  { icon: CheckCircle2, text: "Use grammar accurately in speaking and writing" },
  { icon: Sparkles, text: "Build a strong everyday & academic vocabulary" },
  { icon: Target, text: "Communicate effectively in school, interviews and life" },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title:
          "English Tuition Services in Roorkee — Pre-Primary, Primary & Online | Learn with Neelam",
      },
      {
        name: "description",
        content:
          "Pre-primary (LKG–UKG), CBSE primary English (Class 4–6) and home & online tuition in Roorkee with Neelam — B.Ed & CTET qualified. Beginner, intermediate & advanced courses.",
      },
      {
        property: "og:title",
        content: "English Tuition Services in Roorkee — Learn with Neelam",
      },
      {
        property: "og:description",
        content:
          "Pre-primary, primary CBSE English and online tuition with clear learning outcomes for every level.",
      },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "English Tuition Services",
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Course",
                name: s.title,
                description: s.desc,
                provider: {
                  "@type": "EducationalOrganization",
                  name: "Learn with Neelam",
                  sameAs: "/",
                },
                hasCourseInstance: {
                  "@type": "CourseInstance",
                  courseMode: ["onsite", "online"],
                  location: {
                    "@type": "Place",
                    name: "Roorkee, Uttarakhand",
                  },
                },
              },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]),
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Sparkles,
    title: "Pre-Primary (LKG & UKG)",
    desc: "Engaging, activity-based learning that builds confidence, phonics, and curiosity in our youngest learners.",
    level: "Ages 3–6",
    points: ["Phonics & storytelling", "Play-based learning", "Confidence first"],
    accent: "from-primary to-primary-glow",
  },
  {
    icon: BookOpen,
    title: "Primary English (Class 4–6)",
    desc: "CBSE-aligned English lessons focused on reading, grammar, writing and speaking — currently teaching at SNDK Public School.",
    level: "CBSE Board",
    points: ["Reading & comprehension", "Grammar foundations", "Creative writing"],
    accent: "from-primary to-accent",
    featured: true,
  },
  {
    icon: GraduationCap,
    title: "Home & Online Tuition",
    desc: "Personalized one-on-one tutoring (online or in Roorkee) tailored to each child's pace and learning style.",
    level: "All Levels",
    points: ["Customized lesson plans", "Parent progress updates", "English & Hindi support"],
    accent: "from-accent to-primary-glow",
  },
];

const education = [
  { course: "B.Ed", board: "Barkatullah University", marks: "1st Division", year: "2017" },
  { course: "M.Com", board: "RDVV Jabalpur", marks: "80.00% — First", year: "2012" },
  { course: "B.Com", board: "RDVV Jabalpur", marks: "64.78% — First", year: "2010" },
  { course: "12th", board: "UP Board", marks: "63.40% — First", year: "2007" },
  { course: "10th", board: "UP Board", marks: "60.83% — First", year: "2005" },
];

const experience = [
  {
    period: "2025 – Present",
    role: "English Teacher — SNDK Public School",
    detail: "Teaching English to Class 4, 5 and 6 (CBSE Board), Roorkee.",
  },
  {
    period: "2021 – 2024",
    role: "Online Tutor",
    detail: "Online tutoring for primary & pre-primary students based in Delhi.",
  },
  {
    period: "2017 – 2020",
    role: "Home Tutor",
    detail: "Private home tuition in Bhopal, Madhya Pradesh.",
  },
  {
    period: "Jun – Aug 2016",
    role: "Internship — Government School, MP",
    detail:
      "Conducted interactive classroom activities, assisted in lesson planning and developed teaching aids.",
  },
];

const achievements = [
  "House In-charge at SNDK Public School",
  "Best Teacher Award — 2025",
  "Assembly In-charge",
  "Stage-level award — Bharat Jano Competition, Roorkee",
  "1st Prize — Science & Art Exhibition, SNDK Public School",
  "Multiple parent appreciations during PTMs",
];

const faqs = [
  {
    q: "What age groups and classes do you teach?",
    a: "I teach pre-primary (LKG & UKG), primary CBSE English (Class 4–6), and offer home & online tuition for kids and school students up to Class 8.",
  },
  {
    q: "Do you offer online English classes outside Roorkee?",
    a: "Yes. I take one-on-one online English tuition for students across India over video call, with the same lesson plans and parent updates as my in-person classes.",
  },
  {
    q: "Are you qualified to teach English?",
    a: "Yes — I am B.Ed and CTET (Paper 1) qualified, with M.Com and 8+ years of teaching experience including my current role at SNDK Public School, Roorkee.",
  },
  {
    q: "Is there a free trial or intro class?",
    a: "Yes. I offer a free 15-minute intro call so parents and children can meet me, share goals and decide if we are a good fit — no commitment required.",
  },
  {
    q: "What are your fees and timings?",
    a: "Fees depend on the program, frequency and class level. Please call +91 99710 55356 or message on WhatsApp for current rates and available slots.",
  },
  {
    q: "Where in Roorkee are you located?",
    a: "Home tuition is offered in Roorkee, Uttarakhand – 247667. Online classes are available anywhere in India.",
  },
];

const testimonials = [
  {
    quote:
      "Neelam ma'am is incredibly patient and creative. My daughter looks forward to every English class and her confidence has grown so much.",
    name: "Parent of Class 5 student",
    role: "SNDK Public School",
  },
  {
    quote:
      "Her lessons are fun and engaging. She knows exactly how to bring out the best in young learners.",
    name: "Parent, Online Tuition",
    role: "Delhi",
  },
  {
    quote:
      "A dedicated and caring teacher — the kind every parent hopes for. Highly recommend Learn with Neelam.",
    name: "Parent of LKG student",
    role: "Roorkee",
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-xl font-semibold tracking-tight">
            Learn with <span className="text-primary">Neelam</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#outcomes" className="hover:text-foreground">Outcomes</a>
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#achievements" className="hover:text-foreground">Achievements</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
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

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              <Sparkles className="size-3.5" /> Pre-Primary & Primary Educator
            </span>
            <h1 className="font-display mt-6 text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              Helping little minds <em className="not-italic text-primary">grow</em> through joyful learning.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Hi, I'm Neelam — a B.Ed and CTET-qualified English teacher in Roorkee with years of
              experience in pre-primary, primary, home and online tuition. I create nurturing,
              child-centered classrooms where every learner feels seen.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Explore my services
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[
                { k: "8+", v: "Years teaching" },
                { k: "B.Ed", v: "Qualified" },
                { k: "CTET", v: "Certified" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl font-semibold text-foreground">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[var(--shadow-card)]">
              <img
                src={neelamPortrait.url}
                alt="Neelam — Pre-primary & primary English teacher in Roorkee"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-background/85 p-4 backdrop-blur-md">
                <div className="font-display text-base font-semibold">Neelam</div>
                <div className="text-xs text-muted-foreground">B.Ed · CTET · M.Com · Roorkee</div>
              </div>
            </div>

            <div className="absolute -left-6 top-10 hidden rounded-2xl border border-border bg-card/90 p-4 shadow-[var(--shadow-soft)] backdrop-blur-md sm:block">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Heart className="size-5" />
                </div>
                <div>
                  <div className="font-display text-xl font-semibold">LKG–6th</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    Age groups taught
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-8 hidden rounded-2xl border border-border bg-card/90 p-4 shadow-[var(--shadow-soft)] backdrop-blur-md sm:block">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-accent/30 text-accent-foreground">
                  <Trophy className="size-5" />
                </div>
                <div>
                  <div className="font-display text-xl font-semibold">Best Teacher</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    2025 Award
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What I Offer
            </span>
            <h2 className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              Programs tailored for every young learner
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            From the very first ABCs to confident primary-school English — flexible, friendly and
            built around your child.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className={`group relative overflow-hidden rounded-3xl border bg-card p-8 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1 ${
                  c.featured ? "border-primary/30 ring-1 ring-primary/20" : "border-border"
                }`}
              >
                {c.featured && (
                  <span className="absolute right-6 top-6 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                    Currently teaching
                  </span>
                )}
                <div
                  className={`mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${c.accent} text-primary-foreground shadow-[var(--shadow-soft)]`}
                >
                  <Icon className="size-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>

                <ul className="mt-6 space-y-2.5">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center justify-between border-t border-border pt-5 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="size-3.5" /> {c.level}
                  </span>
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Enquire now
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      {/* Learning Outcomes */}
      <section
        id="outcomes"
        className="relative overflow-hidden border-y border-border bg-secondary/40"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                What you'll achieve
              </span>
              <h2 className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                Clear learning outcomes — at every level
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                A transparent promise for parents and students. Here's exactly what learners walk
                away with after each English course.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              Join a class <ArrowRight className="size-4" />
            </a>
          </div>

          {/* By level */}
          <Tabs defaultValue="beginner" className="mt-12">
            <TabsList className="h-auto flex-wrap gap-2 bg-card p-2 shadow-[var(--shadow-soft)]">
              {outcomeTracks.map((t) => {
                const Icon = t.icon;
                return (
                  <TabsTrigger
                    key={t.id}
                    value={t.id}
                    className="gap-2 rounded-md px-4 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Icon className="size-4" />
                    {t.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {outcomeTracks.map((t) => {
              const Icon = t.icon;
              return (
                <TabsContent key={t.id} value={t.id} className="mt-6">
                  <div className="grid gap-6 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] lg:grid-cols-[1fr_1.5fr]">
                    <div className="flex flex-col justify-between gap-6 border-b border-border pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                      <div>
                        <div
                          className="inline-flex size-12 items-center justify-center rounded-2xl text-primary-foreground shadow-[var(--shadow-soft)]"
                          style={{ backgroundImage: "var(--gradient-primary)" }}
                        >
                          <Icon className="size-5" />
                        </div>
                        <h3 className="font-display mt-5 text-2xl font-semibold">
                          {t.label} Course
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">{t.tagline}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-xl border border-border bg-background p-3">
                          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                            Vocabulary
                          </div>
                          <div className="font-display mt-1 text-base font-semibold">{t.vocab}</div>
                        </div>
                        <div className="rounded-xl border border-border bg-background p-3">
                          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                            Duration
                          </div>
                          <div className="font-display mt-1 text-base font-semibold">
                            {t.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {t.outcomes.map((o) => (
                        <li
                          key={o}
                          className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 text-sm"
                        >
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>

          {/* By audience */}
          <div className="mt-16">
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">
              Outcomes by learner group
            </h3>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              From little learners to working professionals — tailored goals for every age.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {audienceOutcomes.map((a) => {
                const Icon = a.icon;
                return (
                  <article
                    key={a.title}
                    className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
                  >
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h4 className="font-display mt-5 text-xl font-semibold">{a.title}</h4>
                    <ul className="mt-5 space-y-2.5">
                      {a.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Course promise */}
          <div
            className="mt-16 overflow-hidden rounded-[2rem] border border-primary/20 p-10 sm:p-14"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  My promise to you
                </span>
                <h3 className="font-display mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                  By the end of the course, every student will…
                </h3>
                <p className="mt-4 max-w-md text-muted-foreground">
                  A simple, honest commitment for parents and learners. Works for both school
                  classes and online coaching.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"
                >
                  <MessageCircle className="size-4" /> Ask about results
                </a>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {coursePromises.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li
                      key={p.text}
                      className="flex items-start gap-3 rounded-2xl border border-border bg-card/90 p-4 text-sm shadow-[var(--shadow-soft)] backdrop-blur"
                    >
                      <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-4" />
                      </div>
                      <span className="pt-1.5 font-medium">{p.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About / Experience */}
      <section
        id="about"
        className="relative overflow-hidden bg-foreground text-background"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(60% 60% at 100% 0%, oklch(0.68 0.16 162 / 0.45), transparent 60%), radial-gradient(60% 60% at 0% 100%, oklch(0.82 0.13 75 / 0.3), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">
                About Neelam
              </span>
              <h2 className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                A teacher who leads with patience and play.
              </h2>
              <p className="mt-5 max-w-md text-background/70">
                I believe early years shape a child's love for learning. My classrooms are warm,
                inclusive and creative — blending phonics, stories, art and conversation so every
                child finds their voice.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <SkillPill icon={Heart} label="Child-centered" />
                <SkillPill icon={Palette} label="Creative methods" />
                <SkillPill icon={Languages} label="English & Hindi" />
                <SkillPill icon={BookOpen} label="Curriculum planning" />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-background/90">
                  Professional Experience
                </h3>
                <ol className="mt-5 space-y-4">
                  {experience.map((e) => (
                    <li
                      key={e.role}
                      className="rounded-2xl border border-background/10 bg-background/5 p-5"
                    >
                      <div className="text-xs font-semibold uppercase tracking-wider text-primary-glow">
                        {e.period}
                      </div>
                      <div className="mt-1 font-display text-lg font-semibold">{e.role}</div>
                      <p className="mt-1 text-sm text-background/60">{e.detail}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-background/90">
                  Education
                </h3>
                <div className="mt-5 overflow-hidden rounded-2xl border border-background/10">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-background/5 text-xs uppercase tracking-wider text-background/60">
                      <tr>
                        <th className="px-4 py-3">Course</th>
                        <th className="px-4 py-3">Board / University</th>
                        <th className="px-4 py-3">Result</th>
                        <th className="px-4 py-3">Year</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-background/10">
                      {education.map((row) => (
                        <tr key={row.course} className="text-background/80">
                          <td className="px-4 py-3 font-semibold">{row.course}</td>
                          <td className="px-4 py-3 text-background/70">{row.board}</td>
                          <td className="px-4 py-3 text-background/70">{row.marks}</td>
                          <td className="px-4 py-3 text-background/70">{row.year}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-background/50">
                  Also CTET (Paper 1) qualified, 2016.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moments gallery */}
      <section id="moments" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Moments in the classroom
            </span>
            <h2 className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              Real classrooms, real smiles
            </h2>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="size-4" /> Chat on WhatsApp
          </a>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <figure className="group relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)] md:row-span-2 md:aspect-auto">
            <img
              src={neelamStudents.url}
              alt="Neelam with students at the Science & Art Exhibition"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-5 text-background">
              <div className="font-display text-lg font-semibold">Science & Art Exhibition</div>
              <div className="text-xs opacity-80">1st Prize — SNDK Public School</div>
            </figcaption>
          </figure>

          <figure className="group relative aspect-square overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
            <img
              src={neelamPtm.url}
              alt="Neelam ma'am hosting PTM and announcing rank holders"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 text-background">
              <div className="font-display text-base font-semibold">Welcome to PTM</div>
              <div className="text-[11px] opacity-80">Celebrating rank holders</div>
            </figcaption>
          </figure>

          <div className="flex flex-col justify-between gap-4 rounded-3xl border border-primary/20 bg-card p-7 shadow-[var(--shadow-card)]">
            <div>
              <Trophy className="size-7 text-primary" />
              <h3 className="font-display mt-4 text-2xl font-semibold leading-tight">
                Book a free intro class
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                See if Learn with Neelam is right for your child — no commitment, just a friendly
                 15-minute call.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Request a callback <ArrowRight className="size-4" />
              </a>
              <a
                href="tel:+919971055356"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                <Phone className="size-4" /> Call now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Achievements
          </span>
          <h2 className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
            Recognized for dedication & impact
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <div
              key={a}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/30 text-accent-foreground">
                <Award className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  #{String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-1 font-display text-base font-semibold leading-snug">{a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Parent Voices
          </span>
          <h2 className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
            What parents say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
            >
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <div className="font-display text-base font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Questions parents ask
          </span>
          <h2 className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
            Frequently asked questions
          </h2>
        </div>
        <dl className="mt-10 divide-y divide-border rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
          {faqs.map((f) => (
            <div key={f.q} className="p-6 sm:p-8">
              <dt className="font-display text-lg font-semibold">{f.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
        <div
          className="relative overflow-hidden rounded-[2rem] border border-border p-10 sm:p-16"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Get in touch
              </span>
              <h2 className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                Let's help your child shine.
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Looking for a caring, qualified teacher for your child? Reach out — happy to chat
                about classes, tuition timings or your child's learning goals.
              </p>

              <div className="mt-10 space-y-5">
                <ContactRow
                  icon={MapPin}
                  title="Location"
                  value="Roorkee, Uttarakhand – 247667"
                />
                <ContactRow
                  icon={Phone}
                  title="Phone"
                  value="+91 99710 55356"
                  href="tel:+919971055356"
                />
                <ContactRow
                  icon={Mail}
                  title="Email"
                  value="learnwithneelamy@gmail.com"
                  href="mailto:learnwithneelamy@gmail.com"
                />
              </div>
            </div>

            <form className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <h3 className="font-display text-2xl font-semibold">Request a callback</h3>
              <p className="mt-1 text-sm text-muted-foreground">I'll respond within 24 hours.</p>
              <div className="mt-6 space-y-4">
                <Field label="Parent's name" placeholder="Your name" />
                <Field label="Phone" placeholder="+91 ..." type="tel" />
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Service of interest
                  </label>
                  <select className="mt-2 h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring">
                    <option>Pre-Primary (LKG & UKG)</option>
                    <option>Primary English (Class 4–6)</option>
                    <option>Home & Online Tuition</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.01]"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  Send request <ArrowRight className="size-4" />
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
                >
                  <MessageCircle className="size-4" /> Message on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <div className="font-display text-base font-semibold text-foreground">
            Learn with <span className="text-primary">Neelam</span>
          </div>
          <div>© {new Date().getFullYear()} Learn with Neelam. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

function SkillPill({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-background/10 bg-background/5 p-4">
      <div className="grid size-9 place-items-center rounded-lg bg-primary-glow/20 text-primary-glow">
        <Icon className="size-4" />
      </div>
      <span className="text-sm font-medium text-background/90">{label}</span>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <div className="flex items-start gap-4">
      <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </div>
        <div className="mt-1 font-display text-lg font-semibold">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{Inner}</a> : Inner;
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
