import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Collections", href: "#collections" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Journal", href: "#journal" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="/" className="flex flex-col">
            <span className="font-serif text-xl lg:text-2xl tracking-[0.15em] text-white">
              PLYWOOD HOME
            </span>
            <span className="text-[10px] tracking-[0.2em] text-white/70 uppercase">
              A House of Trust Since 1976
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-xs tracking-[0.15em] uppercase text-white/90 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-bronze after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="#contact" className="btn-luxury text-xs py-3 px-6">
              Request Samples
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm tracking-[0.15em] uppercase text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn-luxury text-xs py-3 px-6 text-center mt-4">
              Request Samples
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
