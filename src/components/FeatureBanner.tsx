import featureBg from "@/assets/feature-banner.jpg";

const FeatureBanner = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={featureBg}
          alt="Luxury showroom with premium surfaces"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Elements */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-champagne/40" />
            <span className="text-champagne text-xs tracking-[0.3em] uppercase">
              Vision & Craft
            </span>
            <div className="h-px w-16 bg-champagne/40" />
          </div>

          {/* Main Statement */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-light tracking-wider leading-tight mb-8 gradient-text">
            The Future
            <span className="block mt-2">of Surfaces</span>
          </h2>

          {/* Sub-text */}
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-10">
            Innovating tradition since 1976. Our surfaces define the spaces where 
            life's finest moments unfold.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto mt-12">
            <div className="text-center">
              <p className="font-serif text-3xl lg:text-4xl text-champagne mb-2">48+</p>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                Years Legacy
              </p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl lg:text-4xl text-champagne mb-2">500+</p>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                Surface Designs
              </p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl lg:text-4xl text-champagne mb-2">50K+</p>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                Projects
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="w-24 h-24 border border-champagne/20" />
      </div>
    </section>
  );
};

export default FeatureBanner;
