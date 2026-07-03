import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ArrowRight, Phone, Calendar, Tag } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "English Learning Blog — English with Neelam" },
      { name: "description", content: "Practical English learning tips for parents and students — grammar, reading, speaking, vocabulary, and CBSE exam prep from Neelam." },
      { name: "keywords", content: "English learning tips India, CBSE English tips, improve English grammar, English speaking confidence, teach English children India" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "English with Neelam — Blog",
        "description": "Practical English learning tips for Indian students and parents",
        "url": "/blog",
        "author": {
          "@type": "Person",
          "name": "Neelam Yadav",
          "jobTitle": "English Teacher",
          "address": { "@type": "PostalAddress", "addressLocality": "Roorkee", "addressRegion": "Uttarakhand", "postalCode": "247667", "addressCountry": "IN" },
        },
      }),
    }],
  }),
  component: BlogPage,
});

const posts = [
  {
    category: "Grammar",
    slug: "why-indian-students-struggle-english-tenses",
    title: "Why Indian Students Struggle With English Tenses (And How to Fix It)",
    excerpt: "Tense errors are the most common grammar mistake I see in my students. But the reason isn't what most parents think — it's not laziness, it's a specific gap in how tenses are taught. Here's what actually works.",
    readTime: "5 min read",
    date: "June 2026",
    featured: true,
  },
  {
    category: "Speaking",
    slug: "help-child-speak-english-confidently",
    title: "How to Help Your Child Speak English Confidently at Home",
    excerpt: "Most children who are afraid to speak English are not afraid of English — they're afraid of making mistakes in front of others. Here are 7 strategies parents can use at home, even if you don't speak English yourself.",
    readTime: "6 min read",
    date: "June 2026",
    featured: true,
  },
  {
    category: "Reading",
    slug: "cbse-reading-comprehension-strategy",
    title: "The 4-Step Strategy for CBSE Reading Comprehension Questions",
    excerpt: "Most students lose marks in comprehension not because they don't understand the passage, but because they answer the wrong thing. This 4-step strategy ensures students answer what the question is actually asking.",
    readTime: "4 min read",
    date: "May 2026",
    featured: true,
  },
  {
    category: "Parents",
    slug: "how-to-support-english-learning-at-home",
    title: "How to Support Your Child's English Learning at Home (Even If You're Not Confident in English)",
    excerpt: "You don't need to be a fluent English speaker to help your child improve. These 6 practical strategies work for any parent — and they take less than 15 minutes a day.",
    readTime: "5 min read",
    date: "May 2026",
    featured: false,
  },
  {
    category: "Vocabulary",
    slug: "vocabulary-beyond-word-lists",
    title: "Why Word Lists Don't Work (And What to Do Instead)",
    excerpt: "Copying words from a dictionary is one of the least effective ways to learn vocabulary. Here's the research-backed approach that my students use to actually remember new words.",
    readTime: "4 min read",
    date: "April 2026",
    featured: false,
  },
  {
    category: "Writing",
    slug: "teach-children-essay-structure",
    title: "Teaching Essay Structure to Class 4–6 Students: A Simple Method",
    excerpt: "A good essay structure is like a recipe — once students learn it, they can apply it to any topic. I've been using this method for 8 years and it works every time.",
    readTime: "5 min read",
    date: "April 2026",
    featured: false,
  },
  {
    category: "Grammar",
    slug: "articles-a-an-the-for-indian-students",
    title: "Articles (A, An, The) — Why Indian Students Get Confused and How to Explain Them",
    excerpt: "Hindi, Punjabi, and most Indian languages don't have articles. So when students encounter 'a', 'an', and 'the' in English, there's no mental map to attach them to. Here's how I explain them in a way that clicks.",
    readTime: "6 min read",
    date: "March 2026",
    featured: false,
  },
  {
    category: "Online Classes",
    slug: "making-online-english-classes-work",
    title: "Making Online English Classes Work for Young Children: 8 Practical Tips",
    excerpt: "Online classes for children under 10 require a different setup than for adults or teenagers. After teaching dozens of young learners online, here's exactly what makes the difference between an engaged student and a distracted one.",
    readTime: "5 min read",
    date: "March 2026",
    featured: false,
  },
];

const categories = ["All", "Grammar", "Speaking", "Reading", "Writing", "Vocabulary", "Parents", "Online Classes"];

const categoryColors: Record<string, string> = {
  Grammar: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Speaking: "bg-rose-50 text-rose-700 border-rose-100",
  Reading: "bg-blue-50 text-blue-700 border-blue-100",
  Writing: "bg-purple-50 text-purple-700 border-purple-100",
  Vocabulary: "bg-amber-50 text-amber-700 border-amber-100",
  Parents: "bg-teal-50 text-teal-700 border-teal-100",
  "Online Classes": "bg-indigo-50 text-indigo-700 border-indigo-100",
};

function BlogPage() {
  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-xl font-semibold tracking-tight">Learn with <span className="text-primary">Neelam</span></Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <Link to="/resources" className="hover:text-foreground">Resources</Link>
            <Link to="/blog" className="font-semibold text-foreground">Blog</Link>
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
            <Link to="/" className="hover:text-foreground">Home</Link><span>/</span><span className="text-foreground">Blog</span>
          </nav>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            <BookOpen className="size-3.5" /> English Tips & Guides
          </span>
          <h1 className="font-display mt-5 text-4xl font-semibold leading-tight sm:text-5xl">English Learning Blog</h1>
          <p className="mt-4 text-muted-foreground">Practical tips for parents and students — grammar, reading, speaking, vocabulary, and more.</p>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <div className="bg-amber-50 border-y border-amber-200 py-3 text-center text-sm text-amber-800">
        <strong>Articles coming soon!</strong> Full articles will be published shortly. Get notified on WhatsApp:
        <a href="https://wa.me/919971055356?text=Hi%20Neelam%20ma'am%2C%20please%20let%20me%20know%20when%20new%20blog%20posts%20are%20published." target="_blank" rel="noopener noreferrer" className="ml-2 underline">Follow on WhatsApp →</a>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <span key={cat} className={`cursor-pointer rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${cat === "All" ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:text-foreground"}`}>
              {cat}
            </span>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h2 className="font-display text-2xl font-semibold mb-6">Featured Articles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((post) => (
              <article key={post.slug} className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4 hover:border-primary/30 transition-colors">
                <div className="flex items-center justify-between">
                  <span className={`rounded-full border px-3 py-0.5 text-[10px] font-semibold ${categoryColors[post.category] || "bg-secondary text-muted-foreground border-border"}`}>
                    {post.category}
                  </span>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1"><Calendar className="size-3" /> {post.date}</span>
                </div>
                <h3 className="font-semibold text-foreground leading-snug">{post.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-[10px] text-muted-foreground">{post.readTime}</span>
                  <button disabled className="inline-flex items-center gap-1 text-xs text-primary font-semibold opacity-60 cursor-not-allowed">
                    Read soon <ArrowRight className="size-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="font-display text-2xl font-semibold mb-6">All Articles</h2>
          <div className="space-y-4">
            {rest.map((post) => (
              <article key={post.slug} className="rounded-xl border border-border bg-card p-5 flex gap-5 items-start hover:border-primary/30 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${categoryColors[post.category] || "bg-secondary text-muted-foreground border-border"}`}>
                      {post.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{post.date}</span>
                    <span className="text-[10px] text-muted-foreground">· {post.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-sm text-foreground leading-snug mb-2">{post.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </div>
                <button disabled className="shrink-0 rounded-lg border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground opacity-60 cursor-not-allowed">
                  Soon
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="border-t border-border bg-muted/20 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-display text-3xl font-semibold">Want Direct Guidance?</h2>
          <p className="mt-3 text-muted-foreground">Blog posts give you general advice. A one-to-one class gives your child a personalised plan. Book a free class today.</p>
          <div className="mt-6">
            <a href="https://wa.me/919971055356?text=Hi%20Neelam%20ma'am%2C%20I'd%20like%20to%20book%20a%20free%20class." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-primary-foreground" style={{ backgroundImage: "var(--gradient-primary)" }}>
              Book Free Class <ArrowRight className="size-4" />
            </a>
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
