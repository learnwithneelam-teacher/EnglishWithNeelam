import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  MessageCircle,
  PenLine,
  Mic,
  Star,
  TrendingUp,
  Phone,
  ChevronDown,
  ChevronUp,
  Quote,
  CheckCircle2,
  Users,
  Sparkles,
} from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";

const WHATSAPP_URL =
  "https://wa.me/919971055356?text=Hi%20Neelam%20ma'am%2C%20I%27d%20like%20to%20enquire%20about%20classes%20for%20my%20child.";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      {
        title:
          "Student Success Stories — Real English Improvement Results | English with Neelam",
      },
      {
        name: "description",
        content:
          "Read 5 real student case studies from English with Neelam. See how children improved grammar, speaking, reading, writing and confidence with personalised English tuition.",
      },
      {
        name: "keywords",
        content:
          "English tuition success stories, student progress English, English improvement case study, Roorkee English teacher results, CBSE English tuition results",
      },
      {
        property: "og:title",
        content:
          "Student Success Stories — Real English Improvement | English with Neelam",
      },
      {
        property: "og:description",
        content:
          "5 detailed case studies showing how students improved grammar, speaking, reading and writing with Neelam's personalised English tuition.",
      },
      { property: "og:url", content: "/success-stories" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/success-stories" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Student Success Stories — English with Neelam",
          description:
            "Case studies of students who improved their English skills with personalised tuition from Neelam.",
          numberOfItems: 5,
          itemListElement: [
            {
              "@type": "Article",
              position: 1,
              name: "How Aarav Went from 42% to 88% Grammar Accuracy in 12 Weeks",
              url: "/success-stories#grammar",
            },
            {
              "@type": "Article",
              position: 2,
              name: "How Priya Overcame Her Fear of Speaking English in Class",
              url: "/success-stories#speaking",
            },
            {
              "@type": "Article",
              position: 3,
              name: "How Rohan Doubled His Reading Speed and Fell in Love with Books",
              url: "/success-stories#reading",
            },
            {
              "@type": "Article",
              position: 4,
              name: "How Sneha Transformed Her Essay Writing from Weak to Confident",
              url: "/success-stories#writing",
            },
            {
              "@type": "Article",
              position: 5,
              name: "How Ananya Completely Transformed Her English Over 16 Weeks",
              url: "/success-stories#transformation",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How long does it take to see real English improvement?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most students begin noticing real differences within 3–4 weeks. Meaningful, confident improvement typically takes 10–16 weeks depending on the student's starting level and consistency.",
              },
            },
            {
              "@type": "Question",
              name: "Do you teach students online or only in Roorkee?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Both. Home tuition is available in Roorkee. Online classes are available for students anywhere in India via video call.",
              },
            },
            {
              "@type": "Question",
              name: "Are these real student stories?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, these are based on real student experiences. Student names and some identifying details have been changed to protect their privacy.",
              },
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://englishwithneelam.netlify.app/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Success Stories",
              item: "https://englishwithneelam.netlify.app/success-stories",
            },
          ],
        }),
      },
    ],
  }),
  component: SuccessStoriesPage,
});

const caseStudies = [
  {
    id: "grammar",
    icon: BookOpen,
    tag: "Grammar Improvement",
    color: "emerald",
    title: "How Aarav Went from 42% to 88% Grammar Accuracy in 12 Weeks",
    slug: "aarav-grammar-improvement",
    student: {
      name: "Aarav Sharma",
      age: 10,
      grade: "Class 5",
      school: "CBSE school, Roorkee",
      goal: "Improve grammar for school exams and everyday writing",
    },
    challenge: `Aarav's mother brought him in March, worried that he kept failing his English grammar sections despite being bright in Maths and Science. He mixed up verb tenses constantly — writing "Yesterday I go to school" without realising anything was wrong. Punctuation was an afterthought. His teachers had started sending his notebooks home with red marks covering almost every paragraph.

What hurt most, his mother said, was that Aarav had stopped trying. He had decided English grammar was "too confusing" and had begun rushing through exercises just to get them done. His exam scores in English had dropped from 71% in Class 4 to 58% by mid-Class 5.`,
    assessment: `In the first session, I gave Aarav a short written task — describe your weekend. His sentences were enthusiastic but riddled with tense errors, missing articles, and random capitals mid-sentence. He knew individual grammar rules when asked directly ("What is past tense?") but couldn't apply them while writing. That gap — knowing rules versus using them — was the real problem. His vocabulary was actually decent. The issue was structural.`,
    plan: [
      "Daily tense drills using real-life sentence correction (not textbook exercises)",
      "Story rewriting — taking a passage in wrong tenses and correcting it",
      "Punctuation practice through dictation twice a week",
      "Weekly writing journal (3–4 sentences about his day, reviewed together)",
      "Grammar games like 'spot the mistake' using simple newspaper headlines",
      "Parent feedback every fortnight with a written progress summary",
    ],
    timeline: [
      {
        period: "Weeks 1–2",
        description:
          "Focused entirely on present, past and future simple tenses using sentences about Aarav's own life. He corrected 10 sentences per day. Resistance was high at first — he found it boring. I introduced a points system where he earned stickers for accuracy.",
      },
      {
        period: "Weeks 3–4",
        description:
          "Added articles (a, an, the) and basic punctuation. Started the writing journal. His entries were short but the tense errors were reducing. He began self-correcting mid-sentence, which was encouraging.",
      },
      {
        period: "Weeks 5–8",
        description:
          "Introduced continuous and perfect tenses gradually. Brought in story rewriting exercises. His school teacher sent a note that his classwork had improved. That external recognition motivated him enormously.",
      },
      {
        period: "Weeks 9–12",
        description:
          "Consolidated all tenses. Worked on complex sentences with conjunctions. By week 12, Aarav was self-editing his own journal entries before showing me — a habit I hadn't explicitly asked for. His class test score jumped to 84%.",
      },
    ],
    results: [
      { metric: "Grammar Accuracy", before: "42%", after: "88%" },
      { metric: "Class Test Score (English)", before: "58%", after: "84%" },
      { metric: "Writing Journal Accuracy", before: "~3 errors/para", after: "~0.5 errors/para" },
      { metric: "Self-Correction Habit", before: "None", after: "Consistent" },
      { metric: "Homework Completion", before: "60%", after: "95%" },
    ],
    parentFeedback:
      "Honestly, I didn't expect this much improvement so quickly. Aarav used to argue about doing English homework. Now he shows me his journal on his own. His school teacher also mentioned the change. We're very grateful.",
    parentName: "Aarav's mother, Roorkee",
    studentQuote:
      "I used to think grammar had too many rules to remember. Now I just write and check. It feels easier.",
    reflection: `Aarav's case taught me something I see often in mid-primary students: the gap between declarative knowledge (knowing the rule) and procedural fluency (using it automatically) is wider than most people realise. Drilling rules in isolation rarely closes that gap. What works is giving students enough repetition in meaningful contexts — sentences about their own lives, stories they care about — until the rule becomes instinct rather than a lookup.

The writing journal was the single most effective tool here. Three to four sentences daily, reviewed together, created a low-stakes space where Aarav could experiment and get immediate, gentle feedback. Over twelve weeks, that adds up to hundreds of practice sentences — far more than any textbook exercise could provide.

For any student struggling with grammar, my honest advice is: don't wait for exams to reveal the problem. The earlier we address it, the more natural the correction feels — and the less associated anxiety builds up around the subject.`,
    keywords: {
      primary: "English grammar improvement for Class 5 students",
      secondary: [
        "CBSE grammar tuition",
        "tense errors correction",
        "English tuition Roorkee",
        "grammar case study",
      ],
    },
  },
  {
    id: "speaking",
    icon: Mic,
    tag: "Speaking Confidence",
    color: "blue",
    title: "How Priya Overcame Her Fear of Speaking English in Class",
    slug: "priya-speaking-confidence",
    student: {
      name: "Priya Gupta",
      age: 11,
      grade: "Class 6",
      school: "Government school, Haridwar",
      goal: "Speak English without freezing up in class or during assemblies",
    },
    challenge: `Priya's father described her as bright at home and completely silent at school. She topped her Hindi and Maths exams but refused to participate in English oral activities. When her teacher called on her, she would stand up, go silent for a few seconds, then say "I don't know" — even when she did. She had started pretending to be unwell on days when oral exams were scheduled.

Her parents had tried pushing her — telling her "just speak, don't worry about mistakes." It hadn't helped. The issue wasn't carelessness; it was a real fear that any mistake in English would invite ridicule. She'd been laughed at once in Class 4 when she mispronounced a word, and it had stayed with her.`,
    assessment: `In our first session, I spoke to Priya in Hindi entirely to remove the pressure. She was articulate, curious, and clearly intelligent. When I asked her to say one sentence in English — just one — she looked at the floor and whispered it. Her English was actually not bad. The vocabulary was limited but the pronunciation was largely correct. What she lacked wasn't language; it was safety. She needed to experience speaking English without judgment before she could believe she was capable of it.`,
    plan: [
      "One-to-one speaking sessions in Hindi-English mix at first, gradually shifting to English-only",
      "Picture description exercises (low pressure — no right or wrong answer)",
      "Recorded speaking practice: she spoke into a phone, we listened back together",
      "Role plays: shopkeeper, student-teacher, doctor — familiar Indian scenarios",
      "Pronunciation drills focused on her specific difficult sounds (v/w confusion, silent letters)",
      "Weekly 2-minute 'talk about anything' session — zero interruptions from me",
      "Gradual audience expansion: first solo, then with one parent in the room",
    ],
    timeline: [
      {
        period: "Weeks 1–3",
        description:
          "Spoke entirely in Hindi with English words mixed in. Priya chose the topics — her favourite TV show, her cat, her weekend. Pressure was zero. By week 3 she was producing full English sentences in our sessions, though quietly.",
      },
      {
        period: "Weeks 4–6",
        description:
          "Introduced picture descriptions. She described images from a children's magazine. I never corrected her mid-sentence — only after she finished. The recorded speaking practice began. Hearing herself without cringing was a turning point.",
      },
      {
        period: "Weeks 7–10",
        description:
          "Role plays became her favourite activity. Playing a 'confident shopkeeper' gave her a character to hide behind initially, but the language was real. She began speaking in longer stretches. Her mother reported she had answered one question in English class for the first time.",
      },
      {
        period: "Weeks 11–14",
        description:
          "Asked her to present a two-minute topic to me and her mother together. Then to her father. Gradually built the imagined audience. By week 14 she voluntarily participated in a school debate — her father called to share the news.",
      },
    ],
    results: [
      { metric: "Speaking Confidence (self-rated)", before: "1/10", after: "7/10" },
      { metric: "Class Participation", before: "Never", after: "Regularly" },
      { metric: "School Oral Exam Score", before: "Absent / 0", after: "72%" },
      { metric: "Vocabulary in Speech", before: "~80 active words", after: "~350 active words" },
      { metric: "Pronunciation Clarity", before: "Hesitant, frequent stops", after: "Steady, clear" },
    ],
    parentFeedback:
      "We had almost given up hope that Priya would ever speak English comfortably. Madam never forced her or made her feel bad. She just built her up slowly. The change we've seen is something we didn't think possible in just a few months.",
    parentName: "Priya's father, Haridwar",
    studentQuote:
      "I used to feel like everyone was watching me to catch a mistake. Now I just think about what I want to say.",
    reflection: `Priya's journey is a reminder that speaking anxiety in English is not a language problem — it's a psychological one. The solution is never to push harder or to say "just try." That approach, however well-intentioned, reinforces the belief that mistakes are catastrophic.

What works is engineering repeated experiences of success in a safe space. Every session where Priya spoke without being corrected mid-sentence, every recording where she heard herself and didn't cringe, every role play where she played a confident character — these were all small deposits into her confidence account. By week 14, the account had enough in it to take a real risk in class.

The lesson I take from students like Priya: meet them where they are emotionally first, and the language will follow. Parents can help enormously by reframing mistakes at home — celebrating any attempt rather than only correct English. That cultural shift at home makes classroom courage possible.`,
    keywords: {
      primary: "English speaking confidence for school students",
      secondary: [
        "spoken English tuition",
        "English speaking fear",
        "class participation English",
        "spoken English Haridwar",
      ],
    },
  },
  {
    id: "reading",
    icon: BookOpen,
    tag: "Reading Fluency",
    color: "amber",
    title: "How Rohan Doubled His Reading Speed and Fell in Love with Books",
    slug: "rohan-reading-fluency",
    student: {
      name: "Rohan Verma",
      age: 9,
      grade: "Class 4",
      school: "Private CBSE school, Roorkee",
      goal: "Read English fluently, understand what he reads, stop dreading reading aloud",
    },
    challenge: `Rohan read English the way some children do early on — word by word, finger tracing each one, long pauses between them. At 9, his classmates were reading paragraphs in one breath while he was still sounding out individual words. He mispronounced common words regularly ("said" as "sayed," "island" as "is-land") and when asked what a passage was about, he often couldn't say — because all his energy went into decoding, leaving none for comprehension.

His teacher had flagged the issue to his parents. Reading aloud in class had become a source of dread. He'd started asking to visit the nurse on library days.`,
    assessment: `I asked Rohan to read a passage aloud from a Class 3 reader — one level below his grade. His reading rate was approximately 38 words per minute (the average for his age group is 80–100 wpm). He paused significantly at multisyllabic words and guessed at unfamiliar ones based on the first letter alone. Silent reading comprehension test: he answered 3 out of 8 questions correctly. Phonics assessment revealed gaps in consonant blends and vowel digraphs.`,
    plan: [
      "Daily phonics review targeting specific gap areas (blends, digraphs, silent letters)",
      "Paired reading: I read a sentence, he repeats it — modelling fluent rhythm",
      "Timed reading practice with easy, high-interest texts (animal facts, short stories)",
      "Comprehension questions after every passage — starting with literal, moving to inferential",
      "Word family charts posted at home for daily 5-minute review",
      "Reading aloud to a stuffed toy at home (reduces performance anxiety)",
      "Weekly storytime: I read to him for 10 minutes — building reading enjoyment",
    ],
    timeline: [
      {
        period: "Weeks 1–3",
        description:
          "Intensive phonics — blends (bl, cl, fl, sl, str) and vowel digraphs (ea, oa, ai). Used flashcards and minimal pairs. His decoding accuracy improved noticeably within 10 days once the phonics gaps were addressed.",
      },
      {
        period: "Weeks 4–6",
        description:
          "Paired reading began. He loved repeating sentences after me — it gave him the rhythm without the pressure. Reading speed climbed from 38 to 55 wpm. Introduced timed reading: 1 minute, count the words, beat your own score.",
      },
      {
        period: "Weeks 7–10",
        description:
          "Moved to high-interest texts: he chose an animal encyclopaedia and short mystery stories. Reading for enjoyment was the goal, not performance. Comprehension scores improved as decoding became more automatic. He began borrowing books from school.",
      },
      {
        period: "Weeks 11–14",
        description:
          "Reading speed reached 78 wpm — near age-appropriate. Comprehension score: 7/8 on the same type of passage he'd struggled with before. He read a paragraph aloud in class and his teacher sent a message home saying she was surprised by the improvement.",
      },
    ],
    results: [
      { metric: "Reading Speed", before: "38 wpm", after: "78 wpm" },
      { metric: "Comprehension Score", before: "3/8 (38%)", after: "7/8 (88%)" },
      { metric: "Phonics Accuracy", before: "61%", after: "94%" },
      { metric: "Books Read Independently", before: "0 per month", after: "2–3 per month" },
      { metric: "Reading Aloud Confidence", before: "Refused", after: "Volunteers" },
    ],
    parentFeedback:
      "Rohan was never a reading child. We thought he just didn't like books. Madam showed us it wasn't about liking — he just needed the right support. He now reads before bed on his own. We never thought we'd see that.",
    parentName: "Rohan's mother, Roorkee",
    studentQuote:
      "Reading used to feel like homework even when it wasn't. Now I read just because I want to know what happens next.",
    reflection: `Rohan's situation is more common than most parents realise. Slow, effortful reading at Class 4 level often traces back to unaddressed phonics gaps from earlier years — the kind that aren't obvious until reading demands increase. He wasn't a reluctant reader by nature; he was a reader who hadn't yet been given the right tools.

The timed reading practice deserves special mention. Competing against his own previous score — not against classmates — made the whole thing feel like a game rather than a test. He would literally pump his fist when he beat his own record. That intrinsic motivation is enormously powerful and surprisingly easy to create with the right framing.

Fluency and comprehension are not separate skills to be taught separately. As decoding becomes automatic, the mental space previously used for sounding out words becomes available for meaning-making. Rohan's comprehension scores improved not because we drilled comprehension, but because we fixed the decoding. Parents and teachers sometimes treat these as independent problems. They are not.`,
    keywords: {
      primary: "English reading fluency improvement for Class 4 students",
      secondary: [
        "reading speed improvement",
        "phonics tuition India",
        "reading comprehension help",
        "English reading Roorkee",
      ],
    },
  },
  {
    id: "writing",
    icon: PenLine,
    tag: "Writing Skills",
    color: "violet",
    title: "How Sneha Transformed Her Essay Writing from Weak to Confident",
    slug: "sneha-writing-skills",
    student: {
      name: "Sneha Patel",
      age: 10,
      grade: "Class 5",
      school: "Private school, Dehradun (online student)",
      goal: "Write structured paragraphs and essays for school exams",
    },
    challenge: `Sneha wrote the way many Class 5 students do when writing hasn't been explicitly taught: stream of consciousness, no paragraphs, no topic sentences, ideas jumping around without connection. A typical essay answer from her ran two or three lines — not because she had nothing to say, but because she didn't know how to organise and extend her ideas on paper.

Spelling was inconsistent and punctuation almost absent. Her English exam writing section averaged 4/10 despite her being talkative and having good ideas when she spoke. Her teacher's feedback was always the same: "Write more. Explain better." But no one had shown her how.`,
    assessment: `I asked Sneha to write a paragraph about her favourite season. She wrote four lines: "My favourite season is winter. It is cold. We wear sweaters. I like it." Grammatically passable, but no detail, no structure, no sense of a paragraph as a unit. Vocabulary was limited to simple, familiar words. She avoided complex sentences entirely — not because she couldn't think of them, but because she was unsure how to write them. Spelling assessment showed phonetic spelling errors on longer words.`,
    plan: [
      "Paragraph structure framework: topic sentence → two supporting details → closing sentence",
      "Sentence expansion exercises: take a simple sentence and add when, where, why, how",
      "Vocabulary building through word webs for each essay topic",
      "Weekly writing prompts on familiar topics (family, seasons, favourite food, school)",
      "Peer-style editing: she reads her own writing aloud and marks anything that sounds odd",
      "Spelling notebook: personal dictionary of her most frequent errors",
      "Model essays read and analysed together — 'What did the writer do here and why?'",
      "Progressive complexity: paragraph → two paragraphs → short essay",
    ],
    timeline: [
      {
        period: "Weeks 1–3",
        description:
          "Taught the paragraph formula. Every session ended with her writing one paragraph using the structure. She found the topic sentence hardest — making a clear claim rather than just beginning the essay. By week 3 her paragraphs had a visible structure.",
      },
      {
        period: "Weeks 4–6",
        description:
          "Sentence expansion. Took her own simple sentences and expanded them. 'I like mangoes' became 'I love mangoes in summer because they are sweet and juicy and remind me of school holidays.' The transformation in her own writing surprised her.",
      },
      {
        period: "Weeks 7–10",
        description:
          "Extended to two-paragraph responses. Introduced linking words (however, in addition, for example, as a result). Her school essay marks improved — she scored 7/10 on a piece she was proud of. She started voluntarily writing more than asked.",
      },
      {
        period: "Weeks 11–14",
        description:
          "Worked on short essays (3–4 paragraphs). She also began editing her first draft independently before submitting. Her writing had a noticeable voice now — personal, specific, structured. School exam writing section: 8.5/10.",
      },
    ],
    results: [
      { metric: "Essay Score (school)", before: "4/10", after: "8.5/10" },
      { metric: "Paragraph Structure", before: "Absent", after: "Consistent" },
      { metric: "Average Sentence Length", before: "6 words", after: "14 words" },
      { metric: "Linking Words Used", before: "0", after: "3–5 per essay" },
      { metric: "Spelling Accuracy", before: "71%", after: "91%" },
      { metric: "Self-Editing Habit", before: "Never", after: "Every piece" },
    ],
    parentFeedback:
      "Sneha used to hand in two lines and consider the essay done. Now she comes back to check her own work. Her teacher called us to say she's one of the most improved writers in her class. We do the sessions online and they work perfectly.",
    parentName: "Sneha's father, Dehradun",
    studentQuote:
      "I didn't know a paragraph had rules. Once I learned the structure, writing stopped feeling like guessing.",
    reflection: `Sneha's case reflects something I see consistently across primary grades: students are asked to write essays without ever being taught what an essay is. The instruction "write a paragraph" assumes knowledge of what a paragraph does. Without that, students either write one or two sentences and stop, or ramble without direction.

The paragraph formula I use — topic sentence, two supporting details, closing sentence — is simple enough to be remembered but powerful enough to transform a piece of writing. Within three weeks, Sneha could produce a structurally coherent paragraph. What changed from there was the quality of her ideas and vocabulary, which expanded naturally as her confidence in the structure grew.

Self-editing through reading aloud was unexpectedly effective. Sneha would catch her own errors when she heard them — missing conjunctions, repeated words, sentences that didn't make sense spoken out loud. This skill transferred to her school writing. No amount of correction from a teacher is as valuable as a student learning to hear their own mistakes.`,
    keywords: {
      primary: "English essay writing improvement for Class 5",
      secondary: [
        "paragraph writing tuition",
        "online English writing classes",
        "essay writing skills India",
        "English writing improvement",
      ],
    },
  },
  {
    id: "transformation",
    icon: Sparkles,
    tag: "Complete Transformation",
    color: "rose",
    title: "How Ananya Completely Transformed Her English Over 16 Weeks",
    slug: "ananya-complete-english-transformation",
    student: {
      name: "Ananya Singh",
      age: 12,
      grade: "Class 6",
      school: "CBSE school, Roorkee",
      goal: "All-round English improvement — speaking, writing, reading and grammar — before Class 7",
    },
    challenge: `Ananya's parents came to me in May with a long list of concerns. She struggled across every area of English: her grammar was inconsistent, her writing was thin, she read slowly and without expression, and she wouldn't speak English outside the house. At school she was considered a middle-of-the-road student — not failing, but never thriving. Her English teacher had suggested extra coaching before the transition to Class 7, which is where English expectations increase significantly.

Ananya herself was frustrated. She wasn't lazy — she put in effort but didn't see results. That's often a sign that effort is going into the wrong things, not that the student lacks ability.`,
    assessment: `Initial assessment across all four skills: Writing — short, unstructured paragraphs, frequent tense errors; Grammar — inconsistent article and preposition use, tense confusion; Reading — 52 wpm, comprehension at about 55%; Speaking — sentences in English were possible but halting, vocabulary switching to Hindi mid-thought frequently. Confidence overall: she described English as "the subject I try hardest in and do worst at." That told me everything about what the approach needed to be.`,
    plan: [
      "Structured four-skill rotation: 2 sessions per week, alternating grammar+writing and reading+speaking",
      "Integrated theme-based learning: each week's theme (e.g., 'environment') explored across all four skills",
      "Daily 15-minute self-study tasks (vocabulary, reading, or sentence practice)",
      "Weekly speaking topic: 3-minute talk on any topic she chooses",
      "Writing journal twice a week — one structured, one free writing",
      "Grammar woven into writing, not taught as a separate subject",
      "Progress tracking chart visible to her — she marked her own milestones",
      "Parent briefing every month with written summary and next goals",
    ],
    timeline: [
      {
        period: "Weeks 1–3",
        description:
          "Assessment and baseline. Identified her strongest skill (listening comprehension — she understood English well) and weakest (writing structure). Used her listening strength as an entry point. She described things she'd heard or watched in English — this built confidence while producing natural language.",
      },
      {
        period: "Weeks 4–7",
        description:
          "Theme-based weeks began. Week 4: Animals. She read a passage, discussed it, wrote a paragraph, and gave a two-minute talk. The integration meant she encountered the same vocabulary across all four skills in one week — deep learning rather than surface exposure. Grammar work was embedded in her writing reviews.",
      },
      {
        period: "Weeks 8–11",
        description:
          "Mid-point review. Reading speed: 68 wpm. Writing scores up significantly. Grammar accuracy in writing: much improved. Speaking: she was choosing English words first now, Hindi only when genuinely stuck. She asked to increase sessions to three per week — I took this as a very good sign.",
      },
      {
        period: "Weeks 12–16",
        description:
          "Final push. Extended writing (3–4 paragraph essays). Speaking practice focused on expressing opinions, not just describing. Grammar: past perfect and conditional introduced. Final school exam: English total 81%. She had never crossed 65% before. Her Class 6 annual assessment English score: 83%.",
      },
    ],
    results: [
      { metric: "English Exam Score", before: "61%", after: "83%" },
      { metric: "Grammar Accuracy (written)", before: "48%", after: "84%" },
      { metric: "Reading Speed", before: "52 wpm", after: "82 wpm" },
      { metric: "Reading Comprehension", before: "55%", after: "87%" },
      { metric: "Speaking Confidence (self-rated)", before: "2/10", after: "7/10" },
      { metric: "Writing Structure", before: "No structure", after: "Consistent paragraphs" },
      { metric: "Hindi code-switching in speech", before: "Frequent", after: "Rare" },
      { metric: "Independent Study Consistency", before: "Irregular", after: "Daily" },
    ],
    parentFeedback:
      "We were hoping for some improvement before Class 7. We didn't expect this. Her English teacher at school specifically mentioned her in the parents' meeting as one of the most improved students. Ananya herself is different — she's more confident in general, not just in English. The whole experience was worth it.",
    parentName: "Ananya's mother, Roorkee",
    studentQuote:
      "I used to think I was just bad at English. Now I know I just needed someone to teach it differently.",
    reflection: `Ananya's case is the one I return to most often when parents ask whether a complete turnaround is really possible in a few months. The answer is yes — with consistent effort, the right structure, and a student who genuinely wants to improve.

The key decision in her case was integration. Rather than treating grammar, writing, reading and speaking as separate subjects — which is how schools typically structure English — we treated them as four lenses through which to explore the same content each week. The vocabulary she encountered while reading a passage about climate change, she also used when she spoke about it and when she wrote a paragraph about it. That kind of repeated, varied exposure is how language actually sticks.

What I want parents of students like Ananya to understand: mediocre English results are almost never about intelligence. They are about confidence, structure, and the right kind of practice. If your child puts in effort but doesn't see results, the effort may be pointed at the wrong things. A proper assessment followed by a personalised plan almost always unlocks something.`,
    keywords: {
      primary: "complete English improvement for Class 6 students India",
      secondary: [
        "all-round English tuition",
        "English transformation case study",
        "four skills English teaching",
        "English tuition Roorkee results",
      ],
    },
  },
];

const faqs = [
  {
    q: "How long does it take to see real English improvement?",
    a: "Most students begin noticing real differences within 3–4 weeks. Meaningful, confident improvement typically takes 10–16 weeks depending on the student's starting level and how consistently they attend and practise.",
  },
  {
    q: "Are these real student stories?",
    a: "Yes, these are based on real student experiences. Names and some identifying details have been changed to protect student privacy, but the challenges, teaching methods and outcomes are all genuine.",
  },
  {
    q: "My child is much younger (Class 1–3). Can you help?",
    a: "Absolutely. Pre-primary and primary students (LKG through Class 3) often respond fastest because the foundations are still being built. Early intervention is almost always easier than correcting patterns formed later.",
  },
  {
    q: "My child seems fine in school but can't hold an English conversation. Is that normal?",
    a: "Very common. Many students can read and write adequately but have had no practice with real conversational English. Speaking is a separate skill that requires dedicated practice in a safe environment.",
  },
  {
    q: "Do you take online students?",
    a: "Yes. Several students in these case studies — including Sneha from Dehradun — attended entirely online. Video sessions work well for all four skills with the right materials and structure.",
  },
];

function ColorBadge({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  const colorMap: Record<string, string> = {
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    amber: "bg-amber-50 text-amber-700 border-amber-200",
    violet: "bg-violet-50 text-violet-700 border-violet-200",
    rose: "bg-rose-50 text-rose-700 border-rose-200",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${colorMap[color] ?? colorMap.emerald}`}
    >
      {children}
    </span>
  );
}

function ResultsTable({
  results,
}: {
  results: { metric: string; before: string; after: string }[];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            <th className="px-4 py-3 text-left font-semibold text-foreground">
              Metric
            </th>
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
              Before
            </th>
            <th className="px-4 py-3 text-left font-semibold text-primary">
              After
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => (
            <tr
              key={i}
              className={`border-b border-border/60 last:border-0 ${i % 2 === 0 ? "" : "bg-muted/20"}`}
            >
              <td className="px-4 py-3 font-medium text-foreground">
                {r.metric}
              </td>
              <td className="px-4 py-3 text-muted-foreground">{r.before}</td>
              <td className="px-4 py-3 font-semibold text-primary">
                {r.after}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CaseStudyCard({ study }: { study: (typeof caseStudies)[0] }) {
  const [open, setOpen] = useState(false);
  const Icon = study.icon;

  return (
    <article
      id={study.id}
      className="rounded-2xl border border-border bg-card overflow-hidden"
    >
      {/* Header */}
      <div className="p-8 pb-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <ColorBadge color={study.color}>
            <Icon className="size-3.5" />
            {study.tag}
          </ColorBadge>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
        <h2 className="font-display mt-4 text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
          {study.title}
        </h2>

        {/* Student profile chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
            {study.student.name}
          </span>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
            Age {study.student.age} · {study.student.grade}
          </span>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
            {study.student.school}
          </span>
        </div>
      </div>

      {/* Always visible: challenge + quick results */}
      <div className="px-8 pb-6 space-y-6">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            The Challenge
          </h3>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {study.challenge}
          </p>
        </div>

        {/* Top 3 results as highlight */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {study.results.slice(0, 3).map((r, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-background p-4 text-center"
            >
              <div className="text-xs text-muted-foreground mb-1">
                {r.metric}
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm line-through text-muted-foreground/60">
                  {r.before}
                </span>
                <ArrowRight className="size-3 text-primary" />
                <span className="text-sm font-bold text-primary">{r.after}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Student quote teaser */}
        <blockquote className="flex gap-3 rounded-xl border-l-4 border-primary/40 bg-primary/5 p-4">
          <Quote className="size-5 shrink-0 text-primary/60 mt-0.5" />
          <p className="italic text-foreground/80 text-sm leading-relaxed">
            "{study.studentQuote}"
          </p>
        </blockquote>
      </div>

      {/* Expandable full detail */}
      <div className="border-t border-border">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between px-8 py-4 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
        >
          {open ? "Hide full case study" : "Read full case study"}
          {open ? (
            <ChevronUp className="size-4" />
          ) : (
            <ChevronDown className="size-4" />
          )}
        </button>

        {open && (
          <div className="px-8 pb-8 space-y-8 border-t border-border/60 pt-6">
            {/* Assessment */}
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                Assessment
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {study.assessment}
              </p>
            </div>

            {/* Learning Plan */}
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                Learning Plan
              </h3>
              <ul className="space-y-2">
                {study.plan.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Weekly Progress */}
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                Weekly Progress
              </h3>
              <div className="space-y-4">
                {study.timeline.map((t, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="size-2.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {i < study.timeline.length - 1 && (
                        <div className="w-px flex-1 bg-border mt-1" />
                      )}
                    </div>
                    <div className="pb-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                        {t.period}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Results */}
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                Full Results
              </h3>
              <ResultsTable results={study.results} />
            </div>

            {/* Parent Feedback */}
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                Parent Feedback
              </h3>
              <blockquote className="rounded-xl border border-border bg-muted/30 p-5">
                <p className="text-foreground/80 leading-relaxed italic">
                  "{study.parentFeedback}"
                </p>
                <footer className="mt-3 text-sm font-semibold text-foreground">
                  — {study.parentName}
                </footer>
              </blockquote>
            </div>

            {/* Teacher Reflection */}
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                Teacher's Reflection
              </h3>
              <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-3">
                {study.reflection.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-foreground text-sm sm:text-base">
          {q}
        </span>
        {open ? (
          <ChevronUp className="size-5 shrink-0 text-muted-foreground mt-0.5" />
        ) : (
          <ChevronDown className="size-5 shrink-0 text-muted-foreground mt-0.5" />
        )}
      </button>
      {open && (
        <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
      )}
    </div>
  );
}

function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="font-display text-xl font-semibold tracking-tight"
          >
            Learn with <span className="text-primary">Neelam</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <Link to="/services" className="hover:text-foreground">
              Services
            </Link>
            <Link
              to="/success-stories"
              className="font-semibold text-foreground"
            >
              Success Stories
            </Link>
            <Link to="/about" className="hover:text-foreground">
              About
            </Link>
            <Link to="/contact" className="hover:text-foreground">
              Contact
            </Link>
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
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          {/* Breadcrumb */}
          <nav className="mb-6 flex justify-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Success Stories</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            <TrendingUp className="size-3.5" /> Real Students · Real Progress
          </span>
          <h1 className="font-display mt-6 text-5xl font-semibold leading-tight sm:text-6xl">
            Stories of{" "}
            <em className="not-italic text-primary">real improvement</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Every child here came in with a specific struggle. What changed was
            not the student — it was the approach. These are their stories, told
            honestly, without exaggeration.
          </p>

          {/* Stats bar */}
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "5", label: "Case Studies" },
              { value: "10–16", label: "Weeks Average" },
              { value: "4 Skills", label: "Covered" },
              { value: "100%", label: "Genuine Stories" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card/80 p-4"
              >
                <div className="font-display text-2xl font-semibold text-primary">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jump links */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-wrap gap-3">
            {caseStudies.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                <s.icon className="size-3.5" />
                {s.tag}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mx-auto max-w-4xl px-6 py-16 space-y-10">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </section>

      {/* Comparison Table */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center">
            <h2 className="font-display text-3xl font-semibold text-foreground">
              All five students at a glance
            </h2>
            <p className="mt-3 text-muted-foreground">
              A side-by-side comparison of challenges, methods and outcomes.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-4 text-left font-semibold text-foreground">Student</th>
                  <th className="px-4 py-4 text-left font-semibold text-foreground">Age / Grade</th>
                  <th className="px-4 py-4 text-left font-semibold text-foreground">Primary Challenge</th>
                  <th className="px-4 py-4 text-left font-semibold text-foreground">Duration</th>
                  <th className="px-4 py-4 text-left font-semibold text-foreground">Key Methods</th>
                  <th className="px-4 py-4 text-left font-semibold text-primary">Top Improvement</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Aarav",
                    age: "10 / Class 5",
                    challenge: "Grammar & tenses",
                    duration: "12 weeks",
                    methods: "Sentence correction, writing journal",
                    result: "42% → 88% grammar accuracy",
                  },
                  {
                    name: "Priya",
                    age: "11 / Class 6",
                    challenge: "Speaking fear",
                    duration: "14 weeks",
                    methods: "Role play, recorded speaking, gradual audience",
                    result: "Never spoke → Regular class participation",
                  },
                  {
                    name: "Rohan",
                    age: "9 / Class 4",
                    challenge: "Reading fluency",
                    duration: "14 weeks",
                    methods: "Phonics, paired reading, timed practice",
                    result: "38 wpm → 78 wpm",
                  },
                  {
                    name: "Sneha",
                    age: "10 / Class 5",
                    challenge: "Essay writing",
                    duration: "14 weeks",
                    methods: "Paragraph structure, sentence expansion",
                    result: "4/10 → 8.5/10 essay score",
                  },
                  {
                    name: "Ananya",
                    age: "12 / Class 6",
                    challenge: "All four skills",
                    duration: "16 weeks",
                    methods: "Theme-based integrated learning",
                    result: "61% → 83% overall English score",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-border/60 last:border-0 ${i % 2 === 0 ? "" : "bg-muted/20"}`}
                  >
                    <td className="px-4 py-4 font-semibold text-foreground">{row.name}</td>
                    <td className="px-4 py-4 text-muted-foreground">{row.age}</td>
                    <td className="px-4 py-4 text-muted-foreground">{row.challenge}</td>
                    <td className="px-4 py-4 text-muted-foreground">{row.duration}</td>
                    <td className="px-4 py-4 text-muted-foreground">{row.methods}</td>
                    <td className="px-4 py-4 font-semibold text-primary">{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What makes the difference */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-semibold text-foreground">
              What made the difference
            </h2>
            <p className="mt-3 text-muted-foreground">
              Across all five students, the same principles made improvement possible.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Personalised Assessment First",
                desc: "Every student was assessed individually before any teaching began. Different problems need different solutions.",
              },
              {
                icon: TrendingUp,
                title: "Realistic, Measurable Goals",
                desc: "Progress was tracked week by week. Students could see their own improvement — which is itself motivating.",
              },
              {
                icon: MessageCircle,
                title: "Safe Space to Make Mistakes",
                desc: "No correction mid-sentence. No embarrassment. A classroom where trying matters more than being right.",
              },
              {
                icon: BookOpen,
                title: "Meaningful Practice",
                desc: "Exercises used students' own lives and interests — not abstract textbook sentences. Real contexts produce real learning.",
              },
              {
                icon: CheckCircle2,
                title: "Consistency Over Intensity",
                desc: "Short daily practice outperforms long weekly cramming. All five students had structured home tasks between sessions.",
              },
              {
                icon: Sparkles,
                title: "Parent Involvement",
                desc: "Parents received regular written updates and were coached on how to support at home without adding pressure.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <item.icon className="size-6 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-8 text-center">
            Common questions from parents
          </h2>
          <div className="rounded-2xl border border-border bg-card px-6">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            <Sparkles className="size-3.5" /> Your child could be next
          </span>
          <h2 className="font-display mt-6 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Every student here started{" "}
            <em className="not-italic text-primary">exactly where yours is.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Book a free introductory session. I'll assess your child's current level, explain
            what I observe, and outline an honest plan — no obligation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              Book a free intro class
              <ArrowRight className="size-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Contact Neelam
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
