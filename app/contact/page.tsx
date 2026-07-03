import Link from "next/link";

import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919971055356?text=Hi%20Neelam%20ma'am%2C%20I%27d%20like%20to%20enquire%20about%20classes.";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <nav className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>{" "}
        / <span className="text-foreground">Contact</span>
      </nav>
      <h1 className="font-display mt-6 text-5xl font-semibold leading-tight">Get in touch with Neelam</h1>
      <p className="mt-5 text-muted-foreground">
        Looking for a caring, qualified English teacher in Roorkee — or online from anywhere in India? Reach out by phone, email or WhatsApp. I usually respond within a day.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <a
          href="tel:+919971055356"
          className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:bg-secondary"
        >
          <Phone className="mt-1 size-5 text-primary" />
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
            <div className="font-display text-lg font-semibold">+91 99710 55356</div>
          </div>
        </a>
        <a
          href="mailto:learnwithneelamy@gmail.com"
          className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:bg-secondary"
        >
          <Mail className="mt-1 size-5 text-primary" />
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
            <div className="font-display text-lg font-semibold">learnwithneelamy@gmail.com</div>
          </div>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:bg-secondary"
        >
          <MessageCircle className="mt-1 size-5 text-primary" />
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
            <div className="font-display text-lg font-semibold">Chat instantly</div>
          </div>
        </a>
        <a
          href="https://www.instagram.com/neelammamji/"
          target="_blank"
          rel="noreferrer"
          className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:bg-secondary"
        >
          <Instagram className="mt-1 size-5 text-primary" />
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Instagram</div>
            <div className="font-display text-lg font-semibold">@neelammamji</div>
          </div>
        </a>
        <address className="not-italic flex items-start gap-4 rounded-2xl border border-border bg-card p-6 sm:col-span-2">
          <MapPin className="mt-1 size-5 text-primary" />
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Location</div>
            <div className="text-sm">Roorkee, Uttarakhand, India</div>
          </div>
        </address>
      </div>
    </main>
  );
}

