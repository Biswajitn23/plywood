import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, MessageCircle, Download, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const catalogues = [
    { name: "CU DECOR Catalogue", url: "/cudecor_E_catlouge_.pdf", size: "55.21 MB" },
    { name: "CU DECOR Digital", url: "/CU DECOR DIGITAL CATALOGUE (1).pdf", size: "5.96 MB" },
    { name: "ULTIMO LAMX 2025-26", url: "/ULTIMO LAMX 2025-26.pdf", size: "1.04 MB" },
  ];

  const faqs = [
    {
      question: "What is the difference between plywood and laminate?",
      answer: "Plywood is a engineered wood product made from thin layers of wood veneer glued together. Laminate is a synthetic material applied to a base. Plywood is more durable and better for structural applications, while laminates offer more design options and affordability."
    },
    {
      question: "What are your delivery timeframes?",
      answer: "Standard delivery typically takes 5-7 business days within the city. For bulk orders or special locations, delivery may take 10-14 days. Express delivery options are available upon request."
    },
    {
      question: "Do you provide sample materials?",
      answer: "Yes, we provide samples of our products for customers to evaluate. You can request samples by contacting our sales team through phone, email, or WhatsApp. Shipping charges may apply for large sample requests."
    },
    {
      question: "What is your warranty on plywood products?",
      answer: "Our plywood products come with a manufacturer's warranty against manufacturing defects. The warranty period typically covers 2-5 years depending on the product. Please contact our support team for specific warranty details."
    },
    {
      question: "How do I care for and maintain plywood surfaces?",
      answer: "Regularly clean with a soft, damp cloth. Avoid excessive moisture and direct sunlight. Use appropriate finishes and sealants for protection. For detailed care instructions, refer to the product documentation provided with your purchase."
    }
  ];

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
                { label: "Contact", href: "#contact" },
                { label: "Catalogues", href: "#catalogue" }
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
              {[
                { label: "Downloads", action: "download" },
                { label: "FAQs", action: "faq" }
              ].map((link) => (
                <li key={link.label}>
                  {link.action === "download" ? (
                    <button
                      onClick={() => setIsDownloadModalOpen(true)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsFaqModalOpen(true)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  )}
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
                  Krishna Market, Exhibition Road Patna-800 001 Opp. Hotel Tolsons
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-champagne flex-shrink-0" />
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <a href="tel:+917677181818">+91 7677181818</a>, <a href="tel:+919708191919">+91 9708191919</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-champagne flex-shrink-0" />
                <a
                  href="mailto:help.plywoodhome@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  help.plywoodhome@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-champagne flex-shrink-0" />
                <a
                  href="https://wa.me/917677181818"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  WhatsApp
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
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-xs text-muted-foreground">
                © 2026 Plywood Home. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground/80">
                Crafted with excellence by{" "}
                <a 
                  href="mailto:help.plywoodhome@gmail.com" 
                  className="hover:text-champagne transition-colors"
                >
                  Nitin
                </a>
                {" & "}
                <a 
                  href="mailto:help.plywoodhome@gmail.com" 
                  className="hover:text-champagne transition-colors"
                >
                  Biswajit
                </a>
              </p>
            </div>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setIsPrivacyModalOpen(true)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setIsTermsModalOpen(true)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Downloads Modal */}
      {isDownloadModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setIsDownloadModalOpen(false)}>
          <div className="bg-background border border-border rounded-lg max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-champagne" />
                <h3 className="text-lg font-semibold text-white">Download Catalogues</h3>
              </div>
              <button
                onClick={() => setIsDownloadModalOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-2 -m-2 touch-manipulation"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-3">
              {catalogues.map((catalogue) => (
                <a
                  key={catalogue.name}
                  href={catalogue.url}
                  download
                  className="flex items-center justify-between p-4 bg-bronze/5 border border-bronze/20 rounded-lg hover:bg-bronze/10 hover:border-bronze/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Download className="w-4 h-4 text-bronze group-hover:text-champagne" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{catalogue.name}</p>
                      <p className="text-xs text-muted-foreground">{catalogue.size}</p>
                    </div>
                  </div>
                  <span className="text-xs text-champagne opacity-0 group-hover:opacity-100 transition-opacity">
                    Download
                  </span>
                </a>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-border">
              <button
                onClick={() => setIsDownloadModalOpen(false)}
                className="w-full px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors text-sm font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAQs Modal */}
      {isFaqModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setIsFaqModalOpen(false)}>
          <div className="bg-background border border-border rounded-lg max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-background">
              <h3 className="text-lg font-semibold text-white">Frequently Asked Questions</h3>
              <button
                onClick={() => setIsFaqModalOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-2 -m-2 touch-manipulation"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-bronze/20 rounded-lg overflow-hidden hover:border-bronze/40 transition-colors"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-4 py-4 bg-bronze/5 hover:bg-bronze/10 transition-colors flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-foreground text-sm">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-champagne transition-transform duration-300 flex-shrink-0 ${
                        expandedFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 py-4 bg-background border-t border-bronze/20">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 p-6 border-t border-border bg-background">
              <button
                onClick={() => setIsFaqModalOpen(false)}
                className="w-full px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors text-sm font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setIsPrivacyModalOpen(false)}>
          <div className="bg-background border border-border rounded-lg max-w-3xl w-full shadow-2xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-background flex-shrink-0">
              <h3 className="text-lg font-semibold text-white">Privacy Policy</h3>
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-2 -m-2 touch-manipulation"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 overflow-y-auto flex-1" style={{ touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' }}>
              <p className="text-xs text-muted-foreground">Last Updated: February 3, 2026</p>
              
              <div className="space-y-4">
                <section>
                  <h4 className="text-sm font-semibold text-champagne mb-2">1. Information We Collect</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We collect information you provide directly to us, including name, email address, phone number, and project specifications when you contact us or submit inquiries through our website.
                  </p>
                </section>

                <section>
                  <h4 className="text-sm font-semibold text-champagne mb-2">2. How We Use Your Information</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We use the information we collect to respond to your inquiries, provide product recommendations, process orders, send catalogues and product information, and improve our services.
                  </p>
                </section>

                <section>
                  <h4 className="text-sm font-semibold text-champagne mb-2">3. Information Sharing</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
                  </p>
                </section>

                <section>
                  <h4 className="text-sm font-semibold text-champagne mb-2">4. Data Security</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h4 className="text-sm font-semibold text-champagne mb-2">5. Your Rights</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You have the right to access, correct, or delete your personal information. You may also opt-out of marketing communications at any time by contacting us.
                  </p>
                </section>

                <section>
                  <h4 className="text-sm font-semibold text-champagne mb-2">6. Contact Us</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    If you have questions about this Privacy Policy, please contact us at help.plywoodhome@gmail.com or call +91 7677181818.
                  </p>
                </section>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-border bg-background flex-shrink-0">
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="w-full px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors text-sm font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {isTermsModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setIsTermsModalOpen(false)}>
          <div className="bg-background border border-border rounded-lg max-w-3xl w-full shadow-2xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-background flex-shrink-0">
              <h3 className="text-lg font-semibold text-white">Terms of Service</h3>
              <button
                onClick={() => setIsTermsModalOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-2 -m-2 touch-manipulation"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 overflow-y-auto flex-1" style={{ touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' }}>
              <p className="text-xs text-muted-foreground">Last Updated: February 3, 2026</p>
              
              <div className="space-y-4">
                <section>
                  <h4 className="text-sm font-semibold text-champagne mb-2">1. Acceptance of Terms</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
                  </p>
                </section>

                <section>
                  <h4 className="text-sm font-semibold text-champagne mb-2">2. Products and Services</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We strive to provide accurate product descriptions, specifications, and pricing. However, we reserve the right to modify product information, pricing, and availability without prior notice.
                  </p>
                </section>

                <section>
                  <h4 className="text-sm font-semibold text-champagne mb-2">3. Orders and Payment</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order. Payment terms will be communicated at the time of purchase.
                  </p>
                </section>

                <section>
                  <h4 className="text-sm font-semibold text-champagne mb-2">4. Delivery</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Delivery timeframes are estimates and may vary based on location and product availability. We are not liable for delays beyond our reasonable control.
                  </p>
                </section>

                <section>
                  <h4 className="text-sm font-semibold text-champagne mb-2">5. Returns and Warranties</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Product warranties are subject to manufacturer terms. Returns and exchanges are handled on a case-by-case basis. Please contact our customer service team for specific return policies.
                  </p>
                </section>

                <section>
                  <h4 className="text-sm font-semibold text-champagne mb-2">6. Intellectual Property</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All content on this website, including text, images, logos, and designs, is the property of Plywood Home and protected by copyright laws.
                  </p>
                </section>

                <section>
                  <h4 className="text-sm font-semibold text-champagne mb-2">7. Limitation of Liability</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Plywood Home shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services.
                  </p>
                </section>

                <section>
                  <h4 className="text-sm font-semibold text-champagne mb-2">8. Contact Information</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    For questions about these Terms of Service, contact us at sales@plywoodhome.com or call +91 7677181818.
                  </p>
                </section>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-border bg-background flex-shrink-0">
              <button
                onClick={() => setIsTermsModalOpen(false)}
                className="w-full px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors text-sm font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
