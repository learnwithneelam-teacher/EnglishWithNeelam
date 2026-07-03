import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, Section, BulletList, ContactBlock } from "@/components/LegalLayout";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility Statement — English with Neelam" },
      { name: "description", content: "English with Neelam's commitment to web accessibility. Learn how we make our website usable for everyone, including people with disabilities." },
    ],
    links: [{ rel: "canonical", href: "/accessibility" }],
  }),
  component: Accessibility,
});

function Accessibility() {
  return (
    <LegalLayout title="Accessibility Statement" lastUpdated="3 July 2026">
      <p className="text-muted-foreground leading-relaxed">
        English with Neelam is committed to making our website accessible to everyone — including
        people with disabilities. We believe that good education should be reachable by all, and
        that starts with an inclusive online presence.
      </p>

      <Section title="Our Commitment">
        <p className="text-sm">We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. We are actively working to improve the accessibility of our website and welcome feedback from users who experience barriers.</p>
      </Section>

      <Section title="What We Have Done">
        <BulletList items={[
          "Used semantic HTML5 elements for clear document structure",
          "Provided descriptive alt text for all images",
          "Ensured colour contrast meets WCAG AA standards",
          "Designed for keyboard navigation throughout the site",
          "Used legible font sizes and line spacing",
          "Ensured the site is mobile-responsive",
          "Avoided content that flashes more than 3 times per second",
          "Provided descriptive link text (no 'click here' or 'read more' without context)",
        ]} />
      </Section>

      <Section title="Keyboard Navigation">
        <p className="text-sm">Our website can be navigated using a keyboard. You can use the Tab key to move between interactive elements and Enter or Space to activate them. We have ensured that focus indicators are visible throughout.</p>
      </Section>

      <Section title="Screen Readers">
        <p className="text-sm">We have tested our website with common screen readers. All images have descriptive alt text, forms have proper labels, and pages have clear heading hierarchies to aid navigation.</p>
      </Section>

      <Section title="Fonts and Colour">
        <p className="text-sm">We use high-contrast colour combinations and readable fonts. Text can be resized using standard browser controls without loss of content or functionality.</p>
      </Section>

      <Section title="Known Limitations">
        <p className="text-sm">While we strive for full accessibility, some areas of the site may not yet fully meet WCAG 2.1 AA standards. We are aware of the following and are working to address them:</p>
        <BulletList items={["Some older embedded content may lack full accessibility", "PDF resources (if any) may not be fully accessible — contact us for an accessible version"]} />
      </Section>

      <Section title="Future Improvements">
        <p className="text-sm">Accessibility is an ongoing effort. We plan to:</p>
        <BulletList items={["Conduct regular accessibility audits", "Test with users who use assistive technology", "Add captions to any video content we create", "Improve accessibility of all downloadable resources"]} />
      </Section>

      <Section title="Feedback & Contact">
        <p className="text-sm">If you experience any accessibility barrier on our website, or if you need information in an alternative format, please contact us. We aim to respond within 5 working days.</p>
        <ContactBlock />
      </Section>
    </LegalLayout>
  );
}
