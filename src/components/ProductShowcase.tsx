import { useState, useRef, useEffect, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import productWalnut from "@/assets/product-walnut.jpg";
import productOak from "@/assets/product-oak.jpg";
import productCharcoal from "@/assets/product-charcoal.jpg";
import productTeak from "@/assets/product-teak.jpg";
import productAsh from "@/assets/product-ash.jpg";
import productEbony from "@/assets/product-ebony.jpg";

const products = [
  { id: 1, name: "AURUM WOOD", code: "3101", size: "5 inch x 8 feet", description: "Luxurious golden wood finish with rich grain patterns. Perfect for creating warm, elegant interiors with a touch of sophistication.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0004.jpg" },
  { id: 2, name: "MARQUINA COPPER", code: "3102", size: "5 inch x 8 feet", description: "Striking marble-inspired design with copper metallic accents. Ideal for modern luxury spaces and feature walls.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0005.jpg" },
  { id: 3, name: "MIDNIGHT VEIN", code: "3103", size: "5 inch x 8 feet", description: "Deep black surface with dramatic veining patterns. Creates bold, contemporary statements in any interior design.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0006.jpg" },
  { id: 4, name: "WOOD FUSION", code: "3104", size: "5 inch x 8 feet", description: "Harmonious blend of multiple wood tones creating a unique fusion effect. Brings natural warmth and character to spaces.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0007.jpg" },
  { id: 5, name: "SILVERCRETE", code: "3105", size: "5 inch x 8 feet", description: "Industrial-chic concrete texture with silver undertones. Perfect for minimalist and urban design aesthetics.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0008.jpg" },
  { id: 6, name: "CORK NOIR", code: "3106", size: "5 inch x 8 feet", description: "Natural cork texture in deep charcoal tones. Eco-friendly option with exceptional tactile and visual appeal.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0009.jpg" },
  { id: 7, name: "GOLDLINE WOOD DARK", code: "3201", size: "5 inch x 8 feet", description: "Rich dark wood with subtle golden striping. Exudes luxury and sophistication for premium interior applications.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0010.jpg" },
  { id: 8, name: "WOOD LUXE", code: "3202", size: "5 inch x 8 feet", description: "Premium wood finish with satin-smooth texture. Combines elegance with durability for high-end residential and commercial spaces.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0011.jpg" },
  { id: 9, name: "MUTED LUXE", code: "3301", size: "5 inch x 8 feet", description: "Soft, subdued tones with luxurious finish. Creates calming, sophisticated ambiance in contemporary interiors.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0012.jpg" },
  { id: 10, name: "PREMIUM COLLECTION", code: "3302, 3303, 3306, 3307, 3308", size: "5 inch x 8 feet", description: "Exclusive designer collection featuring 5 unique designs:\n\n• 3302 - SOFT SPECTRUM\n• 3303 - SERENE SHADES\n• 3306 - ASH MIST\n• 3307 - GENTLE AURA\n• 3308 - PASTEL HARMONY\n\nPremium finishes with sophisticated patterns, specially curated for discerning clients seeking exceptional aesthetics for high-end residential and commercial applications.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0013.jpg" },
  { id: 11, name: "STEEL LUXE", code: "3304", size: "5 inch x 8 feet", description: "Brushed steel aesthetic with metallic sheen. Modern industrial look perfect for contemporary commercial spaces.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0014.jpg" },
  { id: 12, name: "AURUM COPPER", code: "3305", size: "5 inch x 8 feet", description: "Warm copper tones with golden highlights. Adds opulent metallic elegance to interior design projects.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0015.jpg" },
  { id: 13, name: "TRIWOOD", code: "3309", size: "5 inch x 8 feet", description: "Three-tone wood pattern creating dimensional depth. Unique geometric arrangement for distinctive interior features.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0016.jpg" },
  { id: 14, name: "TIMBER GEOMETRY", code: "3310", size: "5 inch x 8 feet", description: "Architectural wood patterns with geometric precision. Modern interpretation of classic timber aesthetics.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0017.jpg" },
  { id: 15, name: "MAHOGANY GLOW", code: "3401", size: "5 inch x 8 feet", description: "Rich mahogany finish with luminous warmth. Classic elegance meets contemporary design sensibilities.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0018.jpg" },
  { id: 16, name: "DECO WOOD", code: "3402", size: "5 inch x 8 feet", description: "Art deco inspired wood patterns. Retro glamour reimagined for modern luxury interiors.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0019.jpg" },
  { id: 17, name: "CORK ROYALE", code: "3403", size: "5 inch x 8 feet", description: "Premium cork texture with regal finish. Sustainable luxury combining eco-consciousness with sophisticated design.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0020.jpg" },
  { id: 18, name: "URBAN GREY", code: "3404", size: "5 inch x 8 feet", description: "Contemporary grey tones perfect for urban aesthetics. Versatile neutral option for modern interior schemes.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0021.jpg" },
  { id: 19, name: "COCOA WOOD", code: "3405", size: "5 inch x 8 feet", description: "Warm cocoa-brown wood finish. Inviting and comfortable aesthetic for residential and hospitality spaces.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0022.jpg" },
  { id: 20, name: "VENATO BIANCO", code: "3406", size: "5 inch x 8 feet", description: "White marble appearance with delicate veining. Timeless elegance for luxurious bathroom and kitchen applications.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0023.jpg" },
  { id: 21, name: "MATTE INLAY", code: "3501", size: "5 inch x 8 feet", description: "Subtle matte finish with inlay patterns. Understated sophistication for refined interior design projects.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0024.jpg" },
  { id: 22, name: "DECORA GLEAM", code: "3502", size: "5 inch x 8 feet", description: "High-gloss decorative surface with light-reflecting properties. Creates spacious, luminous interiors.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0025.jpg" },
  { id: 23, name: "WOOD AURA", code: "3503", size: "5 inch x 8 feet", description: "Natural wood character with ethereal quality. Brings organic warmth and tranquility to living spaces.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0026.jpg" },
  { id: 24, name: "PURE SATVARIO", code: "3504", size: "5 inch x 8 feet", description: "Pure white surface with elegant simplicity. Clean, minimalist aesthetic for modern architectural design.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0027.jpg" },
  { id: 25, name: "COPPER ALLOY", code: "3505", size: "5 inch x 8 feet", description: "Industrial copper finish with aged patina. Bold metallic statement for contemporary design projects.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0028.jpg" },
  { id: 26, name: "AURUM SPARKLE", code: "3506", size: "5 inch x 8 feet", description: "Shimmering golden surface with sparkle effect. Glamorous option for feature walls and luxury applications.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0029.jpg" },
  { id: 27, name: "COPPER ALLOY", code: "3507", size: "5 inch x 8 feet", description: "Refined copper alloy finish with metallic depth. Industrial elegance for modern commercial interiors.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0030.jpg" },
  { id: 28, name: "AURUM SPARKLE", code: "3508", size: "5 inch x 8 feet", description: "Luminous gold with crystalline sparkle. Creates dazzling focal points in upscale interior designs.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0031.jpg" },
  { id: 29, name: "COPPER ALLOY", code: "3601", size: "5 inch x 8 feet", description: "Versatile copper tone with contemporary appeal. Perfect for accent walls and architectural features.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0032.jpg" },
  { id: 30, name: "AURUM SPARKLE", code: "3602", size: "5 inch x 8 feet", description: "Radiant golden finish with light-catching sparkle. Luxurious statement piece for exclusive interiors.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0033.jpg" },
  { id: 31, name: "COPPER ALLOY", code: "3603", size: "5 inch x 8 feet", description: "Classic copper aesthetic with modern execution. Timeless metallic finish for diverse design applications.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0034.jpg" },
  { id: 32, name: "AURUM SPARKLE", code: "3604", size: "5 inch x 8 feet", description: "Brilliant golden surface with glittering finish. Ultimate luxury choice for prestigious interior projects.", image: "/products/CU DECOR DIGITAL CATALOGUE (1)_cropped_page-0035.jpg" },
];

const ProductShowcase = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([...Array(6).keys()].map((_, i) => i + 1)));
  const displayProducts = showAll ? products : products.slice(0, 6);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<Map<number, HTMLImageElement>>(new Map());

  // Set up Intersection Observer for progressive image loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const productId = parseInt((entry.target as HTMLElement).dataset.productId || '0');
            if (productId > 0) {
              setLoadedImages(prev => new Set([...prev, productId]));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { rootMargin: '100px', threshold: 0 }
    );

    document.querySelectorAll('[data-product-id]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [displayProducts]);

  useEffect(() => {
    if (showAll) {
      // Pre-load all images when showing all
      setLoadedImages(new Set(products.map(p => p.id)));
    }
  }, [showAll]);

  const handleRequestQuote = (product: typeof products[0]) => {
    const whatsappNumber = "917677181818";
    const whatsappMessage = `Hi! I'm interested in the following product:\n\nProduct Name: ${product.name}\nProduct Code: ${product.code}\nSize: ${product.size}\n\nCould you please provide a quote for this product?`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, "_blank");
  };

  const handleToggle = () => {
    if (showAll) {
      // First scroll to button, then collapse
      buttonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        setShowAll(false);
        // Reset loaded images to first 6
        setLoadedImages(new Set([...Array(6).keys()].map((_, i) => i + 1)));
      }, 500);
    } else {
      setShowAll(true);
    }
  };
  
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
          {displayProducts.map((product, index) => (
            <div
              key={product.id}
              data-product-id={product.id}
              className="product-panel group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => {
                setSelectedProduct(product);
                setIsDialogOpen(true);
              }}
            >
              {/* Product Image */}
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
                {loadedImages.has(product.id) ? (
                  <img
                    ref={(el) => {
                      if (el) imageRefs.current.set(product.id, el);
                    }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 fade-in"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-100 animate-pulse" />
                )}
              </div>
              
              {/* Product Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                <h3 className="font-serif text-xl text-white mb-1">
                  {product.name}
                </h3>
                <p className="text-xs tracking-[0.15em] text-gray-300 uppercase">
                  {product.code}
                </p>
                {product.size && (
                  <p className="text-xs text-gray-300 mt-2">
                    {product.size}
                  </p>
                )}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="btn-luxury text-xs">View Details</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div ref={buttonRef} className="text-center mt-16">
          <button 
            onClick={handleToggle}
            className="btn-luxury-solid"
          >
            {showAll ? "Show Less" : "View All Surfaces"}
          </button>
        </div>
      </div>

      {/* Product Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[95vh] overflow-hidden flex flex-col p-4 md:p-6">
          {selectedProduct && (
            <>
              <DialogHeader className="flex-shrink-0 pb-3 md:pb-4">
                <DialogTitle className="text-xl md:text-3xl font-serif pr-8">{selectedProduct.name}</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 overflow-y-auto flex-1">
                <div className="h-[300px] md:h-[500px] overflow-hidden rounded-lg border border-border/20 bg-gray-50 flex items-center justify-center flex-shrink-0">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-3 md:space-y-4 overflow-y-auto pb-4">
                  <div>
                    <h3 className="text-xs md:text-sm font-semibold text-gray-600 uppercase mb-1 md:mb-2">Product Code</h3>
                    <p className="text-base md:text-lg break-words">{selectedProduct.code}</p>
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-semibold text-gray-600 uppercase mb-1 md:mb-2">Size</h3>
                    <p className="text-base md:text-lg">{selectedProduct.size}</p>
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-semibold text-gray-600 uppercase mb-1 md:mb-2">Description</h3>
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line text-xs md:text-sm">
                      {selectedProduct.description.split('\n').map((line, index) => {
                        // Check if line starts with bullet point and contains a code
                        if (line.trim().startsWith('•') && line.includes('-')) {
                          const [code, ...nameParts] = line.split('-');
                          const name = nameParts.join('-').trim();
                          return (
                            <div key={index} className="py-0.5">
                              <span className="font-semibold text-champagne text-xs md:text-sm">{code.trim()}</span>
                              <span className="font-medium text-foreground text-xs md:text-sm"> - {name}</span>
                            </div>
                          );
                        }
                        return <div key={index}>{line}</div>;
                      })}
                    </div>
                  </div>
                  <div className="pt-2 md:pt-4">
                    <button 
                      onClick={() => {
                        handleRequestQuote(selectedProduct);
                        setIsDialogOpen(false);
                      }}
                      className="btn-luxury-solid w-full text-center text-sm md:text-base touch-manipulation min-h-[44px] flex items-center justify-center"
                    >
                      Ask for Quote
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductShowcase;
