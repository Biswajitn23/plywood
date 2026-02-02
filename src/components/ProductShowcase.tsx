import productWalnut from "@/assets/product-walnut.jpg";
import productOak from "@/assets/product-oak.jpg";
import productCharcoal from "@/assets/product-charcoal.jpg";
import productTeak from "@/assets/product-teak.jpg";
import productAsh from "@/assets/product-ash.jpg";
import productEbony from "@/assets/product-ebony.jpg";

const products = [
  { id: 1, name: "Royal Walnut", code: "PH-WN-2401", image: productWalnut },
  { id: 2, name: "Nordic Oak", code: "PH-OK-2402", image: productOak },
  { id: 3, name: "Charcoal Mist", code: "PH-CM-2403", image: productCharcoal },
  { id: 4, name: "Golden Teak", code: "PH-TK-2404", image: productTeak },
  { id: 5, name: "Alpine Ash", code: "PH-AS-2405", image: productAsh },
  { id: 6, name: "Midnight Ebony", code: "PH-EB-2406", image: productEbony },
];

const ProductShowcase = () => {
  return (
    <section id="products" className="section-cream py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-bronze mb-4">
            Curated Selection
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-6 bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-700 bg-clip-text text-transparent pb-2">
            Signature Surfaces
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Each surface tells a story of nature, refined through generations of craftsmanship
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="product-panel group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="aspect-[4/5] overflow-hidden bg-cream">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Product Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/90 to-transparent">
                <h3 className="font-serif text-xl text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase">
                  {product.code}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="btn-luxury text-xs">View Details</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a href="#" className="btn-luxury-solid">
            View All Surfaces
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
