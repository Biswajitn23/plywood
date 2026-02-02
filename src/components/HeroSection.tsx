import heroBg from "@/assets/hero-bg.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury architectural interior with premium wood surfaces"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Decorative Line */}
          <div className="divider-gold-wide mx-auto mb-8" />
          
          {/* Tagline */}
          <p className="text-xs tracking-[0.3em] uppercase text-champagne mb-6">
            Architectural Surfaces
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em] leading-tight mb-6 uppercase whitespace-nowrap bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text text-transparent">
            PLYWOOD HOME
          </h1>

          {/* Sub-headline */}
          <p className="text-base md:text-lg font-medium max-w-2xl mx-auto mb-12 bg-gradient-to-r from-champagne via-white to-champagne bg-clip-text text-transparent">
            A House of Trust Since 1976
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#products" className="btn-luxury-solid">
              Explore Collection
            </a>
            <a href="#about" className="btn-luxury">
              Our Legacy
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#products" className="text-champagne/60 hover:text-champagne transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>

      {/* Side Accent */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-champagne/40 to-transparent" />
          <span className="text-[10px] tracking-[0.2em] text-champagne/60 -rotate-90 whitespace-nowrap">
            SINCE 1976
          </span>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-champagne/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
