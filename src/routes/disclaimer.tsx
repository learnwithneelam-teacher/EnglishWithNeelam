import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, Section, ContactBlock } from "@/components/LegalLayout";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — English with Neelam" },
      { name: "description", content: "Important disclaimer for the English with Neelam website. Read about the limitations of educational content and individual results." },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: Disclaimer,
});

function Disclaimer() {
  return (
    <LegalLayout title="Disclaimer" lastUpdated="3 July 2026">
      <p className="text-muted-foreground leading-relaxed">
        Please read this disclaimer carefully before using the English with Neelam website or
        enrolling in any of our English tuition programmes.
      </p>

      <Section title="1. Educational Purposes">
        <p className="text-sm">The information, resources, and teaching materials provided on this website and during our classes are for educational purposes only. They are intended to help students improve their English language skills in a supportive, structured environment.</p>
      </Section>

      <Section title="2. No Guaranteed Results">
        <p className="text-sm">While we are committed to providing high-quality English tuition and have seen many students improve significantly, we do not guarantee specific results, exam scores, grades, or outcomes. Every student is different. Progress depends on factors including — but not limited to — the student's current level, effort, consistency, attendance, and learning environment at home.</p>
        <p className="text-sm mt-2">Success stories and results shared on this website reflect individual students' experiences and are not typical or guaranteed outcomes for all students.</p>
      </Section>

      <Section title="3. Learning Outcomes">
        <p className="text-sm">References to improvement in grammar, reading, writing, speaking or confidence on this website are based on real student experiences. Individual results will vary. We encourage parents to discuss their child's specific goals with us directly before enrolment.</p>
      </Section>

      <Section title="4. External Links">
        <p className="text-sm">Our website may contain links to external websites for reference and educational purposes. We do not control the content of those sites and are not responsible for their accuracy, legality, or practices. Linking to a third-party site does not constitute an endorsement.</p>
      </Section>

      <Section title="5. Accuracy of Information">
        <p className="text-sm">We make every effort to keep the information on this website accurate and up to date. However, we cannot guarantee that all content is always current, complete, or error-free. Information about fees, schedules, and availability is subject to change — please contact us directly for the most current details.</p>
      </Section>

      <Section title="6. Professional Advice">
        <p className="text-sm">The content on this website is not a substitute for professional advice from qualified educational psychologists, speech therapists, special educators, or other specialists. If your child has specific learning difficulties or needs a formal assessment, please seek appropriate professional guidance.</p>
      </Section>

      <Section title="7. Affiliate Disclosure">
        <p className="text-sm">This website does not currently participate in affiliate programmes. If this changes in the future, we will disclose it clearly on the relevant page.</p>
      </Section>

      <Section title="8. Contact"><ContactBlock /></Section>
    </LegalLayout>
  );
}
