import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, Section, SubSection, BulletList, ContactBlock } from "@/components/LegalLayout";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — English with Neelam" },
      { name: "description", content: "How English with Neelam uses cookies on its website. Learn about essential, analytics and preference cookies and how to manage them." },
    ],
    links: [{ rel: "canonical", href: "/cookie-policy" }],
  }),
  component: CookiePolicy,
});

function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="3 July 2026">
      <p className="text-muted-foreground leading-relaxed">
        This Cookie Policy explains what cookies are, which cookies we use on the English with
        Neelam website, and how you can manage them.
      </p>

      <Section title="1. What Are Cookies?">
        <p className="text-sm">Cookies are small text files stored on your device when you visit a website. They allow websites to remember your preferences, understand how you use the site, and improve your experience over time. Cookies do not contain personal information like your name or payment details.</p>
      </Section>

      <Section title="2. Cookies We Use">
        <SubSection title="Essential Cookies">
          <p className="text-sm">These are necessary for the website to function. They cannot be disabled without breaking the site. They do not collect personal information.</p>
          <BulletList items={["Session management", "Security tokens", "Site functionality"]} />
        </SubSection>
        <SubSection title="Analytics Cookies">
          <p className="text-sm">We use Google Analytics to understand how visitors interact with our site. These cookies collect anonymised data about page views, session duration, and referral sources. No personally identifiable information is collected.</p>
          <BulletList items={["Google Analytics (_ga, _gid, _gat)", "Data is anonymised before storage", "Used to improve site content and structure"]} />
        </SubSection>
        <SubSection title="Preference Cookies">
          <p className="text-sm">These remember your choices to personalise your experience, such as language settings or display preferences.</p>
        </SubSection>
        <SubSection title="Marketing Cookies">
          <p className="text-sm">We do not currently use marketing or advertising cookies. If this changes in the future, we will update this policy and request your consent.</p>
        </SubSection>
      </Section>

      <Section title="3. Managing Cookies">
        <p className="text-sm">You can control and manage cookies in several ways:</p>
        <BulletList items={["Browser settings: Most browsers allow you to block or delete cookies. See your browser's Help section for instructions.", "Google Analytics opt-out: Install the Google Analytics opt-out browser add-on at tools.google.com/dlpage/gaoptout", "Third-party tools: Use tools like uBlock Origin or Privacy Badger to manage tracking cookies"]} />
        <p className="text-sm mt-2">Please note: disabling essential cookies may affect website functionality.</p>
      </Section>

      <Section title="4. Cookie Consent">
        <p className="text-sm">By continuing to use our website, you consent to the use of essential and analytics cookies as described above. You can withdraw consent at any time by adjusting your browser settings.</p>
      </Section>

      <Section title="5. Changes to This Policy">
        <p className="text-sm">We may update this Cookie Policy from time to time. Updates will be posted on this page with a revised "Last updated" date.</p>
      </Section>

      <Section title="6. Contact"><ContactBlock /></Section>
    </LegalLayout>
  );
}
