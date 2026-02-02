import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="section-dark border-t border-border/50">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-serif text-2xl tracking-[0.1em] mb-2">PLYWOOD HOME</h3>
              <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase">
                A House of Trust Since 1976
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Crafting premium architectural surfaces for spaces that inspire generations.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/plywoodhome4?utm_source=qr&igsh=cmlrd2RqbXNobHV2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-champagne hover:border-champagne transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-champagne mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Products", href: "#products" },
                { label: "Collections", href: "#collections" },
                { label: "Journal", href: "#journal" },
                { label: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-champagne mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              {["Technical Specs", "Downloads", "Certifications", "Sustainability", "FAQs"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-champagne mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-champagne mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/J1NQduAHRLH878RMA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Opposite Gargee Grand, Near Mohini Market, Exhibition Rd, Patna, Bihar 800001
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-champagne flex-shrink-0" />
                <a
                  href="tel:+917677181818"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  +91 7677181818
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-champagne flex-shrink-0" />
                <a
                  href="mailto:sales@plywoodhome.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  sales@plywoodhome.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 Plywood Home. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
