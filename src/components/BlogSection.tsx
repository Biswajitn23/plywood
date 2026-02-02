import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "What is HPL Laminate? A Complete Guide",
    category: "Materials",
    date: "Jan 15, 2024",
    image: blog1,
    excerpt: "Discover the science behind High-Pressure Laminate and why it's the choice of architects worldwide.",
  },
  {
    id: 2,
    title: "The Art of Plywood in Modern Furniture",
    category: "Design",
    date: "Jan 08, 2024",
    image: blog2,
    excerpt: "How premium plywood is reshaping contemporary furniture design and sustainable living.",
  },
  {
    id: 3,
    title: "Selecting the Perfect Veneer",
    category: "Craftsmanship",
    date: "Dec 28, 2023",
    image: blog3,
    excerpt: "A master craftsman's guide to choosing veneers that complement your architectural vision.",
  },
];

const BlogSection = () => {
  return (
    <section id="journal" className="section-cream py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-bronze mb-4">
              Knowledge & Insights
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-cream-foreground">
              The Journal
            </h2>
          </div>
          <a
            href="#"
            className="mt-6 lg:mt-0 inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-bronze hover:text-warm-grey transition-colors group"
          >
            View All Articles
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Article Image */}
              <div className="overflow-hidden mb-6">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Article Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-bronze">
                  {article.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-bronze/40" />
                <span className="text-[10px] tracking-[0.15em] text-muted-foreground">
                  {article.date}
                </span>
              </div>

              {/* Article Title */}
              <h3 className="font-serif text-xl text-cream-foreground mb-3 group-hover:text-bronze transition-colors duration-300">
                {article.title}
              </h3>

              {/* Article Excerpt */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {article.excerpt}
              </p>

              {/* Read More Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-bronze hover:text-warm-grey transition-colors group/link"
              >
                Read Article
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
