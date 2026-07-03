import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, Section, BulletList, ContactBlock } from "@/components/LegalLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — English with Neelam" },
      { name: "description", content: "Terms and conditions for using the English with Neelam website and enrolling in English tuition classes. Please read before booking." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="3 July 2026">
      <p className="text-muted-foreground leading-relaxed">
        By using our website or enrolling in any class or course offered by English with Neelam,
        you agree to these Terms & Conditions. Please read them carefully. If you do not agree,
        please do not use our services.
      </p>

      <Section title="1. Website Usage">
        <p className="text-sm">The content on this website is provided for general information purposes. You may use the website for lawful personal use only. You may not:</p>
        <BulletList items={["Copy or reproduce content without permission", "Use the site in any way that is unlawful or harmful", "Attempt to gain unauthorised access to any part of the site", "Transmit spam or harmful code"]} />
      </Section>

      <Section title="2. Enrolment & Classes">
        <BulletList items={["Classes are confirmed only after fee payment or written agreement", "A free introductory session is offered before enrolment — no obligation", "Schedules are agreed between parent/student and Neelam directly", "Neelam reserves the right to decline or end enrolment if conduct is disruptive or abusive"]} />
      </Section>

      <Section title="3. Payments">
        <BulletList items={["Fees are communicated directly and agreed before classes begin", "Fees are payable in advance (monthly or as agreed)", "Payment methods will be shared on request", "We reserve the right to revise fees with reasonable notice"]} />
      </Section>

      <Section title="4. Cancellations & Rescheduling">
        <BulletList items={["Please give at least 24 hours' notice to cancel or reschedule a class", "Classes cancelled with less than 24 hours' notice may be counted as attended", "We will give at least 24 hours' notice if we need to reschedule", "Missed classes due to illness will be considered case by case"]} />
      </Section>

      <Section title="5. Refunds">
        <p className="text-sm">See our <a href="/refund-policy" className="text-primary hover:underline">Refund Policy</a> for full details. In general, fees paid for a completed month are non-refundable. Unused prepaid classes may be eligible for a pro-rata refund in exceptional circumstances.</p>
      </Section>

      <Section title="6. Intellectual Property">
        <p className="text-sm">All website content — text, images, lesson materials, worksheets, and resources — is the intellectual property of English with Neelam. You may not copy, reproduce, distribute or sell this content without explicit written permission.</p>
        <p className="text-sm mt-2">Materials shared with students during classes are for personal learning only and may not be shared publicly or sold.</p>
      </Section>

      <Section title="7. User Responsibilities">
        <BulletList items={["Students are expected to attend classes punctually", "Parents are responsible for ensuring a suitable learning environment for online classes", "Abusive, disrespectful or inappropriate behaviour will result in immediate termination of enrolment", "Students and parents must not record classes without prior written consent"]} />
      </Section>

      <Section title="8. Limitation of Liability">
        <p className="text-sm">English with Neelam provides educational instruction in good faith. We do not guarantee specific exam results or learning outcomes, as progress depends on many factors including student effort and attendance. Our liability is limited to the fees paid for the relevant period.</p>
      </Section>

      <Section title="9. Third-Party Links">
        <p className="text-sm">Our website may link to external sites for reference. We are not responsible for the content or privacy practices of those sites.</p>
      </Section>

      <Section title="10. Termination">
        <p className="text-sm">We reserve the right to terminate access to our services or website at any time for breach of these terms. Students or parents may end enrolment at any time subject to the notice and refund terms above.</p>
      </Section>

      <Section title="11. Governing Law">
        <p className="text-sm">These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Roorkee, Uttarakhand, India.</p>
      </Section>

      <Section title="12. Changes to These Terms">
        <p className="text-sm">We may update these terms from time to time. Continued use of our website or services after changes constitutes acceptance of the revised terms.</p>
      </Section>

      <Section title="13. Contact"><ContactBlock /></Section>
    </LegalLayout>
  );
}
