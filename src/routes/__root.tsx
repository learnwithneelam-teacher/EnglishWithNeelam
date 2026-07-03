import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Simple nav */}
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-xl font-semibold tracking-tight">
            Learn with <span className="text-primary">Neelam</span>
          </Link>
          <a href="tel:+919971055356" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">
            +91 99710 55356
          </a>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <div className="font-display text-8xl font-bold text-primary/20 select-none">404</div>
        <h1 className="font-display mt-2 text-3xl font-semibold text-foreground">Page Not Found</h1>
        <p className="mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
          The page you're looking for doesn't exist or may have moved. Try one of the popular pages below.
        </p>

        {/* Popular pages */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 max-w-lg w-full">
          {[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Success Stories", href: "/success-stories" },
            { label: "FAQ", href: "/faq" },
            { label: "Testimonials", href: "/testimonials" },
            { label: "Contact", href: "/contact" },
          ].map((p) => (
            <Link key={p.href} to={p.href}
              className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground hover:border-primary/40 hover:bg-secondary transition-colors">
              {p.label}
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link to="/"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-primary-foreground"
            style={{ backgroundImage: "var(--gradient-primary)" }}>
            Go to Home Page
          </Link>
        </div>
      </main>

      <footer className="border-t border-border bg-muted/20 py-6">
        <div className="mx-auto max-w-7xl px-6 text-center text-xs text-muted-foreground">
          © 2026 English with Neelam · Roorkee, Uttarakhand
        </div>
      </footer>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Online English Classes In India | Learn with Neelam" },
      {
        name: "description",
        content:
          "B.Ed & CTET-qualified English teacher in Roorkee offering pre-primary, primary, home and online tuition with a warm, child-centered approach.",
      },
      { name: "author", content: "Neelam" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#2E7D57" },
      { name: "msapplication-TileColor", content: "#2E7D57" },
      { name: "msapplication-TileImage", content: "/mstile-150x150.png" },
      { name: "msapplication-config", content: "/browserconfig.xml" },
      { name: "application-name", content: "English with Neelam" },
      { name: "apple-mobile-web-app-title", content: "EN Tuition" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "mobile-web-app-capable", content: "yes" },
      { property: "og:site_name", content: "Learn with Neelam" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0f5132" },
      { property: "og:title", content: "Online English Classes In India | Learn with Neelam" },
      { name: "twitter:title", content: "Online English Classes In India | Learn with Neelam" },
      { name: "description", content: "Live online English classes for children across India. Improve speaking, grammar, reading, writing and phonics with personalized lessons." },
      { property: "og:description", content: "Live online English classes for children across India. Improve speaking, grammar, reading, writing and phonics with personalized lessons." },
      { name: "twitter:description", content: "Live online English classes for children across India. Improve speaking, grammar, reading, writing and phonics with personalized lessons." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/46d14ded-565f-45f7-9035-b8c528708e8b/id-preview-0542f33f--979ef4d5-ecbd-4ee2-aa96-cc56f7b47c2b.lovable.app-1782585945450.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/46d14ded-565f-45f7-9035-b8c528708e8b/id-preview-0542f33f--979ef4d5-ecbd-4ee2-aa96-cc56f7b47c2b.lovable.app-1782585945450.png" },
    ],
    links: [
      /* ── Favicon package ── */
      { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48x48.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#2E7D57" },
      { rel: "manifest", href: "/site.webmanifest" },
      /* ── Fonts ── */
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "#learn-with-neelam",
          name: "Learn with Neelam",
          description:
            "Pre-primary, primary, home & online English tuition by Neelam — B.Ed and CTET-qualified teacher in Roorkee.",
          image: "/og-image.jpg",
          telephone: "+91-9971055356",
          email: "learnwithneelamy@gmail.com",
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Roorkee",
            addressRegion: "Uttarakhand",
            postalCode: "247667",
            addressCountry: "IN",
          },
          areaServed: ["Roorkee", "Haridwar", "Uttarakhand", "Online (India)"],
          founder: {
            "@type": "Person",
            name: "Neelam",
            jobTitle: "Pre-Primary & Primary English Teacher",
            hasCredential: ["B.Ed", "M.Com", "CTET (Paper 1)"],
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
