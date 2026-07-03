import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ChevronUp, Phone, ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — English with Neelam" },
      { name: "description", content: "Answers to common questions about English tuition with Neelam — courses, fees, online classes, grammar, speaking, reading, and more." },
      { name: "keywords", content: "English tuition FAQ, online English classes India, English grammar help, speaking English children, Roorkee English teacher" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What age groups do you teach?", acceptedAnswer: { "@type": "Answer", text: "I teach pre-primary students (LKG & UKG), primary CBSE students (Class 4–6), and offer home & online tuition for students up to Class 8." } },
          { "@type": "Question", name: "Do you offer online classes?", acceptedAnswer: { "@type": "Answer", text: "Yes. Online classes are available via video call for students anywhere in India." } },
          { "@type": "Question", name: "What is the fee for classes?", acceptedAnswer: { "@type": "Answer", text: "Fees depend on the programme, frequency, and class level. Please contact us directly for current rates." } },
          { "@type": "Question", name: "Is there a free trial class?", acceptedAnswer: { "@type": "Answer", text: "Yes — I offer a free introductory session with no obligation before you decide to enrol." } },
        ],
      }),
    }],
  }),
  component: FAQPage,
});

const faqGroups = [
  {
    category: "General",
    faqs: [
      { q: "Who is Neelam and what are her qualifications?", a: "Neelam is a B.Ed and CTET (Paper 1) qualified English teacher with an M.Com degree and 8+ years of teaching experience. She currently teaches Classes 4, 5 and 6 at SNDK Public School, Roorkee, and also offers home and online tuition." },
      { q: "What age groups do you teach?", a: "I teach pre-primary (LKG & UKG), primary CBSE English (Class 4–6), and offer home and online tuition for students up to Class 8. Online classes are available for students of all ages." },
      { q: "Where are you located?", a: "I am based in Roorkee, Uttarakhand. Home tuition is available in Roorkee. Online classes are available for students anywhere in India." },
      { q: "How is English with Neelam different from other tuitions?", a: "Every student gets a personalised assessment before we begin. Lessons are tailored to their specific strengths and weaknesses — not a one-size-fits-all syllabus. I also provide regular written progress updates to parents." },
      { q: "Is there a free trial class?", a: "Yes. I offer a free introductory session with no obligation. This lets you meet me, see my teaching style, and decide whether it's the right fit for your child." },
    ],
  },
  {
    category: "Courses & Classes",
    faqs: [
      { q: "What subjects do you teach?", a: "I specialise in English — grammar, reading, writing, speaking, vocabulary, and phonics. I teach CBSE English curriculum for school students and communication English for general improvement." },
      { q: "How many students are in each class?", a: "I offer one-to-one tuition and small groups (up to 3 students). One-to-one sessions give the most personalised attention and are generally more effective." },
      { q: "How long is each session?", a: "Sessions are typically 45–60 minutes for pre-primary and primary students. Duration can be adjusted based on the student's age, attention span, and learning goals." },
      { q: "How often should my child attend?", a: "For best results, 2–3 sessions per week is recommended. However, even once a week with consistent home practice can produce good results." },
      { q: "Do you follow the CBSE syllabus?", a: "Yes. For school students, I follow the CBSE syllabus and also incorporate additional material to deepen understanding beyond what textbooks cover." },
    ],
  },
  {
    category: "Grammar",
    faqs: [
      { q: "My child keeps making tense mistakes. How do you fix this?", a: "Tense errors are very common and almost always fixable with the right approach. I use sentence correction exercises, writing journals, and real-life sentence practice to build the habit of correct tense use — not just memorising rules." },
      { q: "What grammar topics do you cover?", a: "Tenses (all), articles, prepositions, conjunctions, punctuation, parts of speech, sentence formation, active and passive voice, direct and indirect speech, and more — based on the student's level." },
      { q: "My child knows the rules but still makes mistakes. Why?", a: "There is a gap between knowing a rule and applying it automatically. This gap closes with enough meaningful practice. I focus on closing exactly this gap through daily exercises using sentences from the student's own life." },
      { q: "How long does it take to improve grammar significantly?", a: "Most students see noticeable improvement within 4–6 weeks with consistent practice. A strong, confident grasp of grammar typically develops over 10–14 weeks." },
    ],
  },
  {
    category: "Speaking",
    faqs: [
      { q: "My child is afraid to speak English in class. Can you help?", a: "Absolutely. Fear of speaking English is one of the most common challenges I work with. My approach creates a completely safe, judgement-free space — no corrections mid-sentence, no pressure. Confidence builds gradually through structured speaking practice." },
      { q: "What speaking activities do you use?", a: "Picture description, role plays (shopkeeper, doctor, student-teacher), daily topic talks, recorded speaking practice (students listen back to themselves), and progressive audience expansion from solo to small group." },
      { q: "My child switches to Hindi when speaking English. Is this normal?", a: "Very common, especially in the early stages. It usually means the student's active English vocabulary is limited. We build vocabulary through immersive, topic-based learning so English words come naturally." },
      { q: "Will my child be able to speak fluently after the course?", a: "Fluency is a journey, not a single destination. Students who attend consistently and practise daily can expect to speak confidently and clearly within 3–5 months. 'Fluency' develops over longer periods." },
    ],
  },
  {
    category: "Reading",
    faqs: [
      { q: "My child reads very slowly. What can be done?", a: "Slow reading is usually linked to phonics gaps — difficulty decoding certain sounds quickly. I start with a phonics assessment, address the gaps, and use timed reading practice to build speed without sacrificing comprehension." },
      { q: "My child reads but doesn't understand what they've read. Why?", a: "When decoding (sounding out words) is effortful, no mental energy is left for comprehension. As decoding becomes automatic through practice, comprehension improves naturally alongside it." },
      { q: "What reading materials do you use?", a: "I use a mix of graded readers, high-interest non-fiction (animals, science facts, sports), CBSE comprehension passages, and books chosen to match the student's interests — because engagement matters enormously for reading progress." },
      { q: "How can parents help with reading at home?", a: "Read together for 10 minutes daily. Let your child choose books on topics they enjoy. Never correct every mistake — it interrupts flow. Focus on enjoyment first, accuracy second." },
    ],
  },
  {
    category: "Writing",
    faqs: [
      { q: "My child's essays are very short and have no structure. How do you address this?", a: "I teach a simple paragraph formula (topic sentence → supporting details → closing) before anything else. Once students have a structure to hang their ideas on, length and detail improve naturally." },
      { q: "What writing tasks do you assign?", a: "Writing journals (3–4 sentences daily), weekly structured essays, paragraph expansion exercises, letter writing, story completion, and descriptive writing based on images." },
      { q: "My child's spelling is very weak. Can this be fixed?", a: "Yes. I use a personal spelling notebook where students record their own most frequent errors. Research shows this personalised approach is more effective than generic spelling lists." },
      { q: "How do you teach writing without making it feel like homework?", a: "I let students choose topics they care about whenever possible. Writing about your favourite food or a dream holiday feels very different from writing about 'my summer vacation' for the 5th time." },
    ],
  },
  {
    category: "Parents",
    faqs: [
      { q: "How will I know if my child is improving?", a: "I provide written progress updates to parents at regular intervals (every 2–4 weeks). These include specific observations, what we've worked on, what has improved, and what needs more practice." },
      { q: "How involved should I be in my child's English learning?", a: "Very involved, but in a supportive rather than pressurising way. Encouraging daily reading, celebrating any English spoken at home, and avoiding comparison with other children makes a significant difference." },
      { q: "My child is shy. Will one-to-one tuition help more than group classes?", a: "Yes, almost always for shy students. One-to-one removes the fear of being judged by peers, which is often the biggest barrier for quiet children." },
      { q: "Can I sit in on my child's class?", a: "For the first session, yes. For ongoing sessions, I recommend parents not sit in, as most students perform better when they know it's just them and the teacher — it's a more natural learning environment." },
    ],
  },
  {
    category: "Online Classes",
    faqs: [
      { q: "Do online classes work as well as in-person classes?", a: "For most students, yes. Several of my best-performing students attend entirely online. The key is a stable internet connection, a quiet space, and a device with a working camera and microphone." },
      { q: "What platform do you use for online classes?", a: "Classes are conducted via video call. The platform will be confirmed when you book — we use a reliable, easy-to-use video tool suitable for children." },
      { q: "My child gets distracted during online classes. What can I do?", a: "A dedicated study space (even a corner of a room) with minimal distraction helps enormously. Turn off notifications on the device. Younger children may benefit from a parent sitting nearby (but not interrupting)." },
      { q: "Do you teach students outside Roorkee?", a: "Yes. I teach students from across India via online classes. All you need is a device and a stable internet connection." },
    ],
  },
  {
    category: "Fees & Payment",
    faqs: [
      { q: "How much do classes cost?", a: "Fees depend on the programme, frequency, and the student's level. Please contact me directly for current rates and we can discuss what works best for your family." },
      { q: "Is payment required in advance?", a: "Typically yes — fees are paid monthly in advance. We can discuss flexible arrangements if needed." },
      { q: "What payment methods do you accept?", a: "Payment methods will be shared when you enquire. We support common digital payment methods used in India." },
      { q: "Are there any hidden charges?", a: "No. All fees are discussed and agreed before classes begin. There are no hidden charges." },
    ],
  },
  {
    category: "Contact",
    faqs: [
      { q: "How do I book a free introductory class?", a: "You can WhatsApp me, call, or fill out the contact form on this website. I'll get back to you within 24 hours to schedule a convenient time." },
      { q: "What is the best way to reach you?", a: "WhatsApp or phone is usually fastest. Email is also fine for detailed enquiries. Contact details are on the Contact page." },
      { q: "How quickly do you respond to enquiries?", a: "I aim to respond to all enquiries within 24 hours on working days." },
      { q: "Can I visit in person before deciding?", a: "Yes, if you are based in Roorkee, you are welcome to attend a free in-person introductory session. Please contact us to arrange a time." },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button onClick={() => setOpen(!open)} className="flex w-full items-start justify-between gap-4 py-4 text-left">
        <span className="text-sm font-semibold text-foreground sm:text-base">{q}</span>
        {open ? <ChevronUp className="size-5 shrink-0 text-muted-foreground mt-0.5" /> : <ChevronDown className="size-5 shrink-0 text-muted-foreground mt-0.5" />}
      </button>
      {open && <p className="pb-4 text-sm text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
}

function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("General");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-xl font-semibold tracking-tight">Learn with <span className="text-primary">Neelam</span></Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <Link to="/faq" className="font-semibold text-foreground">FAQ</Link>
            <Link to="/about" className="hover:text-foreground">About</Link>
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
            <Link to="/" className="hover:text-foreground">Home</Link><span>/</span><span className="text-foreground">FAQ</span>
          </nav>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            <Sparkles className="size-3.5" /> {faqGroups.reduce((a, g) => a + g.faqs.length, 0)} Questions Answered
          </span>
          <h1 className="font-display mt-5 text-4xl font-semibold leading-tight sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-muted-foreground">Everything parents and students want to know about English classes with Neelam.</p>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="border-b border-border bg-muted/20 sticky top-[73px] z-30">
        <div className="mx-auto max-w-5xl px-6 py-3 flex gap-2 overflow-x-auto">
          {faqGroups.map((g) => (
            <button key={g.category} onClick={() => setActiveCategory(g.category)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${activeCategory === g.category ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}>
              {g.category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Content */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        {faqGroups.filter(g => g.category === activeCategory).map((group) => (
          <div key={group.category}>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6">{group.category}</h2>
            <div className="rounded-2xl border border-border bg-card px-6">
              {group.faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
            </div>
          </div>
        ))}

        <div className="mt-10 text-center rounded-2xl border border-border bg-card p-8">
          <h3 className="font-display text-xl font-semibold">Still have a question?</h3>
          <p className="mt-2 text-sm text-muted-foreground">I'm happy to answer any question directly. Contact me on WhatsApp or by phone.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/919971055356?text=Hi%20Neelam%20ma'am%2C%20I%20have%20a%20question%20about%20your%20classes." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground" style={{ backgroundImage: "var(--gradient-primary)" }}>
              Ask on WhatsApp <ArrowRight className="size-4" />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:bg-secondary">
              Contact Form
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
