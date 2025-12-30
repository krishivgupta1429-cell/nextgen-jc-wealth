import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-2xl font-serif font-semibold tracking-tight">
              NextGen JC
            </span>
            <p className="mt-4 text-primary-foreground/70 max-w-md leading-relaxed">
              Strategic home loan advice for professionals, investors, and borrowers with complex income structures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/60">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/professional-lending" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Professional Lending
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/60">
              Contact
            </h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Sydney, Australia</li>
              <li>
                <a href="mailto:enquiries@nextgenjc.com.au" className="hover:text-primary-foreground transition-colors">
                  enquiries@nextgenjc.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} NextGen JC. All rights reserved.</p>
            <p>
              Australian Credit Licence Holder. Credit Representative.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
