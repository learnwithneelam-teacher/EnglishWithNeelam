import "../src/styles.css";

// NOTE: This file will be converted to a Next.js-compatible layout once Next is installed.


import type { ReactNode } from "react";


// Preserve existing document structure and meta/scripts strategy
// from src/routes/__root.tsx.
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const metadata = {
  title: "Online English Classes In India | Learn with Neelam",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Online English Classes In India | Learn with Neelam</title>

        <meta
          name="description"
          content="B.Ed & CTET-qualified English teacher in Roorkee offering pre-primary, primary, home and online tuition with a warm, child-centered approach."
        />
        <meta name="author" content="Neelam" />
        <meta name="robots" content="index, follow" />

        <meta property="og:site_name" content="Learn with Neelam" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#0f5132" />

        <meta property="og:title" content="Online English Classes In India | Learn with Neelam" />
        <meta name="twitter:title" content="Online English Classes In India | Learn with Neelam" />

        <meta
          name="description"
          content="Live online English classes for children across India. Improve speaking, grammar, reading, writing and phonics with personalized lessons."
        />
        <meta
          property="og:description"
          content="Live online English classes for children across India. Improve speaking, grammar, reading, writing and phonics with personalized lessons."
        />
        <meta
          name="twitter:description"
          content="Live online English classes for children across India. Improve speaking, grammar, reading, writing and phonics with personalized lessons."
        />

        <meta
          property="og:image"
          content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/46d14ded-565f-45f7-9035-b8c528708e8b/id-preview-0542f33f--979ef4d5-ecbd-4ee2-aa96-cc56f7b47c2b.lovable.app-1782585945450.png"
        />
        <meta
          name="twitter:image"
          content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/46d14ded-565f-45f7-9035-b8c528708e8b/id-preview-0542f33f--979ef4d5-ecbd-4ee2-aa96-cc56f7b47c2b.lovable.app-1782585945450.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        />

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                streetAddress: "House No. 155, B Block, Shivaji Colony",
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
          }}
        />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </body>
    </html>
  );
}

