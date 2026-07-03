import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://englishwithneelam.in";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = "2026-07-03";
        const entries: SitemapEntry[] = [
          // Core pages — highest priority
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
          { path: "/services", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/about", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/contact", changefreq: "monthly", priority: "0.8", lastmod: today },

          // Trust & social proof pages
          { path: "/success-stories", changefreq: "monthly", priority: "0.85", lastmod: today },
          { path: "/testimonials", changefreq: "monthly", priority: "0.80", lastmod: today },

          // Content & resource pages
          { path: "/faq", changefreq: "monthly", priority: "0.75", lastmod: today },
          { path: "/resources", changefreq: "weekly", priority: "0.70", lastmod: today },
          { path: "/blog", changefreq: "weekly", priority: "0.70", lastmod: today },

          // Legal & policy pages
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.30", lastmod: today },
          { path: "/terms", changefreq: "yearly", priority: "0.30", lastmod: today },
          { path: "/disclaimer", changefreq: "yearly", priority: "0.25", lastmod: today },
          { path: "/cookie-policy", changefreq: "yearly", priority: "0.25", lastmod: today },
          { path: "/refund-policy", changefreq: "yearly", priority: "0.30", lastmod: today },
          { path: "/accessibility", changefreq: "yearly", priority: "0.25", lastmod: today },
          { path: "/shipping", changefreq: "yearly", priority: "0.20", lastmod: today },

          // Utility pages
          { path: "/sitemap-page", changefreq: "monthly", priority: "0.20", lastmod: today },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`,
          `        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"`,
          `        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9`,
          `        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
