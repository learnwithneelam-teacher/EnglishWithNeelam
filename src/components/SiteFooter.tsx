import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="font-display text-lg font-semibold text-foreground">
              Learn with <span className="text-primary">Neelam</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              B.Ed & CTET-qualified English teacher in Roorkee. Pre-primary, primary, home & online English tuition.
            </p>
            <div className="mt-4 space-y-1 text-sm text-muted-foreground">
              <div><a href="tel:+919971055356" className="hover:text-primary">+91 99710 55356</a></div>
              <div><a href="mailto:learnwithneelamy@gmail.com" className="hover:text-primary">learnwithneelamy@gmail.com</a></div>
              <div>Roorkee, Uttarakhand, 247667</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Quick Links</div>
            <nav className="space-y-2 text-sm">
              <div><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></div>
              <div><Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link></div>
              <div><Link to="/success-stories" className="text-muted-foreground hover:text-primary">Success Stories</Link></div>
              <div><Link to="/about" className="text-muted-foreground hover:text-primary">About Neelam</Link></div>
              <div><Link to="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></div>
              <div><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></div>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Resources</div>
            <nav className="space-y-2 text-sm">
              <div><Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></div>
              <div><Link to="/resources" className="text-muted-foreground hover:text-primary">Free Resources</Link></div>
              <div><Link to="/testimonials" className="text-muted-foreground hover:text-primary">Testimonials</Link></div>
              <div><Link to="/sitemap-page" className="text-muted-foreground hover:text-primary">Sitemap</Link></div>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Legal & Policies</div>
            <nav className="space-y-2 text-sm">
              <div><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></div>
              <div><Link to="/terms" className="text-muted-foreground hover:text-primary">Terms & Conditions</Link></div>
              <div><Link to="/disclaimer" className="text-muted-foreground hover:text-primary">Disclaimer</Link></div>
              <div><Link to="/cookie-policy" className="text-muted-foreground hover:text-primary">Cookie Policy</Link></div>
              <div><Link to="/refund-policy" className="text-muted-foreground hover:text-primary">Refund Policy</Link></div>
              <div><Link to="/accessibility" className="text-muted-foreground hover:text-primary">Accessibility</Link></div>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} English with Neelam. All rights reserved.</div>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
            <Link to="/sitemap-page" className="hover:text-foreground">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
