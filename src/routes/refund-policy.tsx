import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, Section, BulletList, ContactBlock } from "@/components/LegalLayout";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — English with Neelam" },
      { name: "description", content: "Refund and cancellation policy for English with Neelam tuition classes. Understand your rights and our process before booking." },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
  component: RefundPolicy,
});

function RefundPolicy() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="3 July 2026">
      <p className="text-muted-foreground leading-relaxed">
        We want every family to feel confident booking with English with Neelam. This policy
        explains our approach to refunds and cancellations clearly and fairly.
      </p>

      <Section title="1. Free Introductory Session">
        <p className="text-sm">We offer a free introductory session before any payment is made. This gives you a chance to meet Neelam, understand the teaching approach, and assess whether it is right for your child — with no obligation to continue.</p>
      </Section>

      <Section title="2. General Refund Principles">
        <BulletList items={[
          "Fees paid for a completed month are non-refundable",
          "Fees paid in advance for a future period may be refunded pro-rata in certain circumstances",
          "Refunds are not available for classes attended or cancelled with less than 24 hours' notice",
          "Refunds are processed within 7–10 working days of approval",
        ]} />
      </Section>

      <Section title="3. Eligible Refund Situations">
        <p className="text-sm">A full or partial refund may be considered in the following circumstances:</p>
        <BulletList items={[
          "Prolonged illness or medical emergency (documentation may be requested)",
          "Relocation making attendance impossible",
          "Service discontinuation by English with Neelam",
          "Failure to deliver classes as agreed",
        ]} />
      </Section>

      <Section title="4. Non-Refundable Situations">
        <BulletList items={[
          "Classes attended and completed",
          "Classes missed without adequate notice (less than 24 hours)",
          "Change of mind after enrolment has begun",
          "Failure to complete homework or engage with the programme",
        ]} />
      </Section>

      <Section title="5. How to Request a Refund">
        <p className="text-sm">To request a refund, please contact us by email or phone with your name, your child's name, the class dates in question, and the reason for your request. We will respond within 3 working days.</p>
        <ContactBlock />
      </Section>

      <Section title="6. Online Classes">
        <p className="text-sm">Online class fees follow the same refund policy as in-person classes. If a technical failure on our end prevents a class from taking place, the class will either be rescheduled or refunded.</p>
      </Section>

      <Section title="7. Changes to This Policy">
        <p className="text-sm">We reserve the right to update this policy. Any changes will be communicated to enrolled families in advance.</p>
      </Section>
    </LegalLayout>
  );
}
