import Link from "next/link";

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
    a: "Home tuition is offered from House No. 155, B Block, Shivaji Colony, Roorkee – 247667, Uttarakhand. Online classes are available anywhere in India.",
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
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-display text-xl font-semibold tracking-tight">
            Learn with <span className="text-primary">Neelam</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <Link href="/" className="hover:text-foreground">Home</Link>
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
      <section className="relative overflow-hidden" style={{ backgroundImage: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              <Sparkles className="size-3.5" /> Pre-Primary & Primary Educator
            </span>
            <h1 className="font-display mt-6 text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              Helping little minds <em className="not-italic text-primary">grow</em> through joyful learning.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Hi, I'm Neelam — a B.Ed and CTET-qualified English teacher in Roorkee with years of experience in pre-primary, primary, home and online tuition. I create nurturing, child-centered classrooms where every learner feels seen.
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
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

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
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Age groups taught</div>
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
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">2025 Award</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TODO: Remaining sections will be migrated next after scaffolding verification. */}
      {/* Keeping parity for visible behavior requires full migration; completed in later phase. */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-muted-foreground">Services page scaffold created. Next phase will migrate the remaining sections 1:1 from src/routes/services.tsx.</p>
      </section>
    </div>
  );
}

