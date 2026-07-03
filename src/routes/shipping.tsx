import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, Section, BulletList, ContactBlock } from "@/components/LegalLayout";

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: "Shipping & Delivery Policy — English with Neelam" },
      { name: "description", content: "English with Neelam is a fully digital tutoring service. There is no physical shipping. Learn how online classes and digital resources are delivered." },
    ],
    links: [{ rel: "canonical", href: "/shipping" }],
  }),
  component: Shipping,
});

function Shipping() {
  return (
    <LegalLayout title="Shipping & Delivery Policy" lastUpdated="3 July 2026">
      <p className="text-muted-foreground leading-relaxed">
        English with Neelam is a <strong>fully digital tutoring service</strong>. We do not sell or
        ship any physical products. This page explains how our online classes and digital resources
        are delivered to you.
      </p>

      <Section title="1. No Physical Products">
        <p className="text-sm">We do not sell, manufacture, or ship any physical goods. There is no physical delivery of books, stationery, materials, or equipment. All services and content are delivered digitally.</p>
      </Section>

      <Section title="2. How Online Classes Are Delivered">
        <BulletList items={[
          "Classes are conducted live via video call on a mutually agreed platform (e.g., Google Meet, Zoom, or WhatsApp video)",
          "A class link or meeting ID is shared with the student or parent before the scheduled session",
          "No software installation is required — a standard browser on any device is sufficient",
          "Students receive session notes or practice worksheets digitally (via WhatsApp, email, or a shared folder) after each class",
        ]} />
      </Section>

      <Section title="3. Digital Learning Materials">
        <p className="text-sm">Any worksheets, practice exercises, reading materials, or study guides are shared electronically. You will receive these via:</p>
        <BulletList items={["WhatsApp (PDF or image format)", "Email attachment", "Google Drive shared link (where applicable)"]} />
        <p className="text-sm mt-2">Digital materials are typically shared within 24 hours of a session or within 48 hours for newly prepared materials.</p>
      </Section>

      <Section title="4. Class Scheduling & Delivery Timeline">
        <BulletList items={[
          "Classes begin after confirmation of enrolment and receipt of payment (where applicable)",
          "First session is typically scheduled within 2–5 working days of confirmation",
          "All scheduling is agreed directly with the student or parent via phone, WhatsApp, or email",
        ]} />
      </Section>

      <Section title="5. Technical Requirements">
        <p className="text-sm">For a smooth online class experience, students need:</p>
        <BulletList items={["A device with a working camera and microphone (smartphone, tablet, or computer)", "A stable internet connection (4G/5G mobile data or broadband)", "A quiet, well-lit space to attend the class"]} />
      </Section>

      <Section title="6. Class Interruptions & Rescheduling">
        <p className="text-sm">If a class is interrupted by a technical failure on our side, we will reschedule at no additional charge. If the disruption is on the student's side, we will try to accommodate rescheduling where possible, subject to availability.</p>
      </Section>

      <Section title="7. Contact">
        <p className="text-sm">If you have any questions about how classes are delivered or how to access your digital materials, please contact us.</p>
        <ContactBlock />
      </Section>
    </LegalLayout>
  );
}
