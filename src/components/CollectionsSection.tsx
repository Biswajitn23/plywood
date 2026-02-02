import { useRef } from "react";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const collections = [
  {
    id: 1,
    name: "Noir Collection",
    description: "Deep, sophisticated tones for statement interiors",
    image: collection1,
    year: "2024",
  },
  {
    id: 2,
    name: "Nordic Series",
    description: "Light, natural finishes inspired by Scandinavian design",
    image: collection2,
    year: "2024",
  },
  {
    id: 3,
    name: "Terra Finishes",
    description: "Earthy textures celebrating natural beauty",
    image: collection3,
    year: "2024",
  },
];

const CollectionsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="collections" className="section-dark py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-champagne mb-4">
              Premium Collections
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">
              Curated Excellence
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 mt-6 lg:mt-0">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 border border-champagne/30 flex items-center justify-center text-champagne/60 hover:text-champagne hover:border-champagne transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 border border-champagne/30 flex items-center justify-center text-champagne/60 hover:text-champagne hover:border-champagne transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide px-6 lg:px-12 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="flex-shrink-0 w-[350px] lg:w-[450px] group cursor-pointer"
          >
            {/* Collection Image */}
            <div className="relative overflow-hidden mb-6">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              
              {/* Year Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 border border-champagne/40 text-[10px] tracking-[0.2em] text-champagne uppercase">
                {collection.year}
              </div>
            </div>

            {/* Collection Info */}
            <h3 className="font-serif text-2xl text-champagne mb-2 group-hover:text-foreground transition-colors">
              {collection.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {collection.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionsSection;
