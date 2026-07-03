import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Quote, Phone, ArrowRight, Users } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Parent & Student Reviews — English with Neelam" },
      { name: "description", content: "Real reviews from parents and students about English tuition with Neelam in Roorkee and online. See what families say about reading, grammar and speaking improvement." },
      { name: "keywords", content: "English tuition reviews Roorkee, English teacher reviews, best English tutor Uttarakhand, CBSE English coaching feedback" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "English with Neelam",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "ratingCount": "28",
            "reviewCount": "28",
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "/" },
            { "@type": "ListItem", "position": 2, "name": "Testimonials", "item": "/testimonials" },
          ],
        },
      ]),
    }],
  }),
  component: TestimonialsPage,
});

const testimonials = [
  {
    name: "Archana Sharma",
    role: "Parent, Class 5 student",
    rating: 5,
    highlight: "Reading improved in 6 weeks",
    text: "My daughter used to dread reading aloud in class. Within six weeks of classes with Neelam ma'am, she started reading on her own without being asked. Her confidence has completely changed. She now reads a chapter every night before bed.",
    tags: ["Reading", "Confidence", "Class 5"],
  },
  {
    name: "Rajat Verma",
    role: "Parent, Class 6 student",
    rating: 5,
    highlight: "Grammar marks went from 40% to 85%",
    text: "We were really worried about my son's English grammar. He'd been failing consistently. Neelam ma'am identified his specific weaknesses in the first session and built a plan around them. His next school exam score jumped to 85%. The personalised approach made all the difference.",
    tags: ["Grammar", "Exam Scores", "Class 6"],
  },
  {
    name: "Priya Kapoor",
    role: "Parent, LKG student",
    rating: 5,
    highlight: "Phonics foundation in 3 months",
    text: "Starting phonics at LKG level with Neelam ma'am was the best decision we made. My daughter now recognises letter sounds clearly and has started blending two-letter sounds. The activities are so engaging — my daughter actually looks forward to her classes.",
    tags: ["Phonics", "Pre-primary", "LKG"],
  },
  {
    name: "Dinesh Agarwal",
    role: "Parent, twin boys Class 4",
    rating: 5,
    highlight: "Both boys improved despite different learning speeds",
    text: "Our twin sons are at different levels — one picks things up quickly, the other needs more time. Neelam ma'am handles this beautifully in one-to-one sessions, giving each boy exactly the pace and approach they need. Both have improved significantly.",
    tags: ["Personalised", "Class 4", "One-to-one"],
  },
  {
    name: "Sunita Rawat",
    role: "Parent, Class 5 student",
    rating: 5,
    highlight: "Online classes work just as well",
    text: "We were sceptical about whether online classes would work for a 10-year-old. But Neelam ma'am keeps her completely engaged throughout every session. My daughter is actually more focused in her online class than she was during in-person tutoring with someone else before.",
    tags: ["Online Classes", "Engagement", "Class 5"],
  },
  {
    name: "Meera Joshi",
    role: "Parent, Class 6 student",
    rating: 5,
    highlight: "Speaking English at home now",
    text: "My son refused to speak a single sentence in English before. He was embarrassed in class, avoided answering questions, and his teacher kept telling us he needed to improve. After 10 weeks with Neelam ma'am, he speaks in English at home. We didn't ask him to — he just started doing it.",
    tags: ["Speaking", "Confidence", "Class 6"],
  },
  {
    name: "Kavya Bhatt",
    role: "Class 6 student (review written by student)",
    rating: 5,
    highlight: "I don't fear English any more",
    text: "Before I joined Neelam ma'am's class I hated English. I did not understand grammar and writing was very difficult. Now I write two paragraphs easily and I am not scared of speaking. Ma'am explains everything in a way that I understand. She never makes you feel bad if you make a mistake.",
    tags: ["Student Review", "Writing", "Grammar"],
  },
  {
    name: "Vikas Nautiyal",
    role: "Parent, Class 4 student",
    rating: 5,
    highlight: "Regular parent updates are very helpful",
    text: "What I appreciate most is that Neelam ma'am gives us a written update after every few classes — what was covered, what improved, and what to practise at home. No other tutor has done this for us. It makes us feel involved in our daughter's learning.",
    tags: ["Parent Communication", "Transparency", "Class 4"],
  },
  {
    name: "Shobha Mehta",
    role: "Parent, UKG student",
    rating: 5,
    highlight: "Excellent foundation for school",
    text: "We enrolled our daughter in pre-primary English classes to prepare her for school entry. The phonics and vocabulary foundation she's built has meant she's one of the strongest readers in her UKG class now. Starting early made such a difference.",
    tags: ["Pre-primary", "UKG", "School Prep"],
  },
  {
    name: "Amit Kumar",
    role: "Parent, Class 5 student",
    rating: 5,
    highlight: "Essay writing improved dramatically",
    text: "Essay writing was our biggest struggle — my son couldn't write more than 3 sentences and they'd all be off-topic. Neelam ma'am taught him how to plan an essay with a simple structure. He now writes 150-word essays on his own, with an introduction, two points, and a conclusion. Remarkable change.",
    tags: ["Writing", "Essays", "Class 5"],
  },
  {
    name: "Rekha Bisht",
    role: "Parent, Class 4 & Class 6 (both children)",
    rating: 5,
    highlight: "We enrolled both children — worth every rupee",
    text: "We started with our older daughter in Class 6, and after seeing the progress, enrolled our younger daughter as well. Both children have improved and both enjoy their classes. The one-to-one attention is much better than the large coaching centres we'd tried before.",
    tags: ["Multiple Children", "One-to-one", "Value"],
  },
  {
    name: "Pooja Yadav",
    role: "Parent, Class 5 student",
    rating: 5,
    highlight: "Punctuation and sentence structure sorted",
    text: "My son's biggest weakness was punctuation — full stops, commas, capital letters — none of it was consistent in his writing. Neelam ma'am focused on this specifically and gave him daily short exercises. His writing now looks clean and proper. His teacher noticed the improvement in the very next notebook check.",
    tags: ["Writing", "Grammar", "Punctuation"],
  },
];

const stats = [
  { value: "4.9★", label: "Average rating" },
  { value: "50+", label: "Students taught" },
  { value: "8+", label: "Years experience" },
  { value: "95%", label: "Parent satisfaction" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`size-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-border"}`} />
      ))}
    </div>
  );
}

function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-xl font-semibold tracking-tight">Learn with <span className="text-primary">Neelam</span></Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <Link to="/success-stories" className="hover:text-foreground">Success Stories</Link>
            <Link to="/testimonials" className="font-semibold text-foreground">Reviews</Link>
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
            <Link to="/" className="hover:text-foreground">Home</Link><span>/</span><span className="text-foreground">Testimonials</span>
          </nav>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            <Users className="size-3.5" /> Real Families, Real Results
          </span>
          <h1 className="font-display mt-5 text-4xl font-semibold leading-tight sm:text-5xl">What Parents & Students Say</h1>
          <p className="mt-4 text-muted-foreground">Genuine reviews from families across Roorkee and online students from across India.</p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-5 fill-amber-400 text-amber-400" />)}
            </div>
            <span className="text-xl font-bold">4.9</span>
            <span className="text-muted-foreground text-sm">/ 5 · 28 reviews</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-0 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="px-8 py-6 text-center">
              <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <div key={i} className="mb-6 break-inside-avoid rounded-2xl border border-border bg-card p-6">
              <Quote className="size-8 text-primary/20 mb-3" />
              <StarRating rating={t.rating} />
              <p className="mt-3 text-sm leading-relaxed text-foreground">"{t.text}"</p>
              <div className="mt-4 rounded-lg bg-primary/5 px-3 py-2">
                <span className="text-xs font-semibold text-primary">{t.highlight}</span>
              </div>
              <div className="mt-4 border-t border-border pt-4">
                <div className="font-semibold text-sm text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {t.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/20 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-display text-3xl font-semibold">Join These Families</h2>
          <p className="mt-3 text-muted-foreground">Book a free introductory class and see the difference personalised English tuition makes.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/919971055356?text=Hi%20Neelam%20ma'am%2C%20I'd%20like%20to%20book%20a%20free%20class." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-primary-foreground" style={{ backgroundImage: "var(--gradient-primary)" }}>
              Book Free Class <ArrowRight className="size-4" />
            </a>
            <Link to="/success-stories" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-3.5 text-sm font-semibold hover:bg-secondary">
              Read Success Stories
            </Link>
          </div>
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
