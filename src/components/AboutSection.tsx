import { Award, Users, Leaf, ShieldCheck } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "48+", label: "Years of Excellence" },
    { number: "10,000+", label: "Happy Customers" },
    { number: "500+", label: "Premium Products" },
    { number: "100%", label: "Quality Assured" },
  ];

  const values = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Curated selection of the finest plywood and architectural surfaces",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Dedicated team to help you choose the perfect materials for your project",
    },
    {
      icon: Leaf,
      title: "Sustainable",
      description: "Eco-friendly products that meet international environmental standards",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Legacy",
      description: "Four decades of reliability and customer satisfaction since 1976",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-cream" id="about">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-bronze mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-cream-foreground mb-6">
            A House of Trust Since 1976
          </h2>
          <div className="divider-gold-wide mx-auto mb-8" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <p className="text-lg text-cream-foreground leading-relaxed">
              For nearly five decades, <span className="font-semibold text-bronze">Plywood Home</span> has been
              the cornerstone of trust in architectural surfaces and premium plywood in Patna, Bihar.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What began as a small family venture in 1976 has grown into one of the region's most 
              respected names in quality building materials. Our journey has been built on unwavering 
              commitment to excellence, integrity, and customer satisfaction.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We understand that every project—whether residential or commercial—deserves materials 
              that combine beauty, durability, and sustainability. That's why we carefully curate our 
              collection from the finest manufacturers, ensuring each product meets our exacting standards.
            </p>
            <div className="pt-4">
              <a href="#contact" className="btn-luxury-solid inline-block">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl lg:text-5xl font-serif font-bold text-bronze mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="font-serif text-2xl md:text-3xl font-light text-center text-cream-foreground mb-12">
            Why Choose Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bronze/10 flex items-center justify-center group-hover:bg-bronze/20 transition-colors">
                    <Icon className="w-8 h-8 text-bronze" />
                  </div>
                  <h4 className="text-lg font-semibold text-cream-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
