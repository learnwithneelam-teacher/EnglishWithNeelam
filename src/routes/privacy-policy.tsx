import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, Section, SubSection, BulletList, ContactBlock } from "@/components/LegalLayout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — English with Neelam" },
      { name: "description", content: "How English with Neelam collects, uses and protects your personal information. We are committed to your privacy and your child's safety online." },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="3 July 2026">
      <p className="text-muted-foreground leading-relaxed">
        English with Neelam ("we", "our", or "us") is committed to protecting your privacy and the
        privacy of children who use our services. This policy explains what information we collect,
        how we use it, and the choices you have.
      </p>

      <Section title="1. Information We Collect">
        <SubSection title="Information you give us">
          <BulletList items={["Your name and your child's name", "Email address", "Phone number", "Your child's age and class/grade", "Any message or enquiry you send us"]} />
        </SubSection>
        <SubSection title="Information collected automatically">
          <BulletList items={["Anonymised IP address", "Browser type and version", "Pages visited and time spent", "Referring website", "Device type (desktop, mobile, tablet)"]} />
        </SubSection>
      </Section>

      <Section title="2. How We Use Your Information">
        <BulletList items={["To respond to your enquiry and schedule classes", "To send you information about our services (only if requested)", "To improve our website and teaching services", "To understand site usage via aggregated analytics"]} />
        <p className="text-sm mt-3">We do not sell, rent or share your personal data with third parties for marketing purposes.</p>
      </Section>

      <Section title="3. Cookies">
        <p className="text-sm">We use cookies to understand how visitors use the site:</p>
        <BulletList items={["Essential cookies: required for basic site function", "Analytics cookies: Google Analytics (anonymised)", "Preference cookies: remember your settings"]} />
        <p className="text-sm mt-2">See our <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a> for full details. You can manage cookies in your browser settings.</p>
      </Section>

      <Section title="4. Google Analytics & Search Console">
        <p className="text-sm">We use Google Analytics (with IP anonymisation) to understand site traffic. We also use Google Search Console to monitor search performance — this does not collect personal data from visitors.</p>
      </Section>

      <Section title="5. Children's Privacy">
        <p className="text-sm">We collect information about children only from their parents or guardians, never directly from children. We do not knowingly collect data from children under 13 without verified parental consent. If you believe we have, please contact us and we will delete it promptly.</p>
      </Section>

      <Section title="6. Data Security">
        <p className="text-sm">We take reasonable steps to protect your information. No internet transmission is 100% secure — we cannot guarantee absolute security, but we follow current best practices.</p>
      </Section>

      <Section title="7. Third-Party Services">
        <BulletList items={["Google Analytics — website analytics", "Google Search Console — search monitoring", "Netlify — website hosting", "WhatsApp — when you contact us via WhatsApp link"]} />
      </Section>

      <Section title="8. Your Rights">
        <BulletList items={["Access the personal data we hold about you", "Request correction of inaccurate data", "Request deletion of your personal data", "Withdraw consent at any time", "Lodge a complaint with the relevant data authority"]} />
      </Section>

      <Section title="9. Data Retention">
        <p className="text-sm">We retain your data only as long as necessary. Enquiry data is typically retained for 12 months.</p>
      </Section>

      <Section title="10. Changes to This Policy">
        <p className="text-sm">We may update this policy periodically. Changes will be posted here with an updated "Last updated" date.</p>
      </Section>

      <Section title="11. Contact Us"><ContactBlock /></Section>
    </LegalLayout>
  );
}
