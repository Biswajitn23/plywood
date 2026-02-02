import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductShowcase from "@/components/ProductShowcase";
import FeatureBanner from "@/components/FeatureBanner";
import CollectionsSection from "@/components/CollectionsSection";
import QuerySection from "@/components/QuerySection";
import CatalogueSection from "@/components/CatalogueSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductShowcase />
        <FeatureBanner />
        <CollectionsSection />
        <QuerySection />
        <CatalogueSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
