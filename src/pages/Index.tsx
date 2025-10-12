import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { ProductCarousel } from "@/components/sections/product-carousel";
import { motion } from "framer-motion";
import { SouqPlusPromo } from "@/components/sections/souq-plus-promo";
import { BrandCarousel } from "@/components/sections/brand-carousel";
import { useAmplifyProducts } from "@/hooks/use-amplify-products";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const Index = () => {
  const { items: realProducts } = useAmplifyProducts(32);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Use only real products from Amplify
  const cap = (n: number) => Math.min(n, realProducts.length);
  const newArrivals = realProducts.slice(0, cap(8));
  const bestSellers = realProducts.slice(0, cap(8));
  const featuredProducts = realProducts.slice(0, cap(8));
  const trendingProducts = realProducts.slice(0, cap(8));

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hoojan-Inspired Hero Section - Elegant Split Screen */}
      <section
        ref={heroRef}
        className="relative h-screen w-full flex items-center overflow-hidden bg-gradient-hero"
      >
        {/* Hero Image - 60% with subtle parallax */}
        <div 
          className="absolute inset-y-0 left-0 w-full md:w-3/5 overflow-hidden"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        >
          <div className="relative w-full h-full hover-zoom">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000"
              alt="Curated luxury products"
              className="w-full h-full object-cover transition-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-white/30" />
          </div>
        </div>

        {/* Hero Content - 40% Elegant Typography */}
        <div className="relative z-10 w-full md:w-2/5 ml-auto h-full flex items-center bg-gradient-hero md:bg-card">
          <div className="w-full px-8 md:px-12 lg:px-16 xl:px-24 py-16 md:py-0 md:h-full md:flex md:flex-col md:justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-10 font-medium">
                Curated Premium Marketplace
              </p>
              
              <h1 className="font-logo text-[90px] sm:text-[110px] md:text-[130px] lg:text-[150px] font-light leading-[0.85] mb-10 text-secondary tracking-[0.02em]">
                RASSOOQ
              </h1>
              
              <p className="text-lg md:text-xl font-light text-muted-foreground mb-14 leading-relaxed max-w-lg">
                Where timeless elegance meets thoughtful curation in every piece
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Button
                  onClick={() => navigate('/categories')}
                  variant="ghost"
                  size="lg"
                  className="group relative border-b-[1.5px] border-secondary rounded-none px-0 py-7 text-sm font-normal hover:bg-transparent justify-start tracking-wide text-secondary"
                >
                  Explore Collection
                  <ArrowRight className="ml-4 h-4 w-4 group-hover:translate-x-1 transition-elegant" />
                </Button>
                <Button
                  onClick={() => navigate('/plus')}
                  variant="ghost"
                  size="lg"
                  className="border-b border-border rounded-none px-0 py-7 text-sm font-light hover:bg-transparent justify-start tracking-wide text-muted-foreground hover:text-secondary"
                >
                  Discover Rassooq+
                </Button>
              </div>
            </motion.div>

            {/* Elegant Scroll Indicator */}
            <motion.div 
              className="hidden md:flex absolute bottom-16 left-12 lg:left-16 xl:left-24 items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.8 }}
            >
              <div className="w-[1px] h-20 bg-border" />
              <p className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground -rotate-90 origin-left translate-y-14 font-medium">
                Scroll
              </p>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="h-4 w-4 text-muted-foreground/60" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-background w-full">
        {/* Category Highlights - Minimal Masonry Grid */}
        <motion.section
          className="py-28 w-full bg-card"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
            <motion.div 
              className="mb-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="border-b border-border pb-8 mb-3">
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-8 font-medium">
                  Discover Collections
                </p>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-secondary leading-tight">
                  Shop by Style
                </h2>
              </div>
            </motion.div>

            {/* Categories temporarily disabled - will add back with real data */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[].map((category, index) => (
                <motion.div
                  key={category.id}
                  className="group cursor-pointer hover-lift"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1.4,
                    delay: index * 0.12,
                    ease: [0.19, 1, 0.22, 1]
                  }}
                  viewport={{ once: true }}
                  onClick={() => navigate(`/c/${category.id}`)}
                >
                  <div className="relative overflow-hidden bg-card shadow-soft rounded-lg">
                    <div className="relative h-[420px] overflow-hidden hover-zoom">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover transition-elegant"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-gentle">
                      <h3 className="font-display text-2xl text-card mb-1 font-light tracking-wide">{category.title}</h3>
                      <p className="text-xs text-card/80 uppercase tracking-wider">{category.itemCount} pieces</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Trending Products - Elegant Showcase */}
        <motion.section
          className="py-28 w-full bg-background"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true }}
        >
          <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
            <div className="mb-24">
              <div className="border-b border-border pb-8 mb-3">
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-8 font-medium">
                  Curated Selection
                </p>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-secondary leading-tight">
                  Trending Now
                </h2>
              </div>
            </div>
            <ProductCarousel
              title=""
              products={trendingProducts}
            />
          </div>
        </motion.section>

        {/* Featured Brands - Refined Display */}
        <motion.section
          className="py-28 w-full bg-card"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
            <div className="mb-24">
              <div className="border-b border-border pb-8 mb-3">
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-8 font-medium">
                  Official Partners
                </p>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-secondary leading-tight">
                  Premium Brands
                </h2>
              </div>
            </div>
            <BrandCarousel />
          </div>
        </motion.section>

        {/* New Arrivals - Fresh Collection */}
        <motion.section
          className="py-28 w-full bg-background"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true }}
        >
          <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
            <div className="mb-24">
              <div className="border-b border-border pb-8 mb-3">
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-8 font-medium">
                  Just Launched
                </p>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-secondary leading-tight">
                  New Arrivals
                </h2>
              </div>
            </div>
            <ProductCarousel
              title=""
              products={newArrivals}
            />
          </div>
        </motion.section>

        {/* Rassooq+ Premium Section - Sophisticated Membership */}
        <motion.section 
          className="py-32 w-full bg-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
        >
          <SouqPlusPromo />
        </motion.section>

        {/* Best Sellers - Customer Favorites */}
        {bestSellers.length > 0 && (
          <motion.section 
            className="py-28 w-full bg-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true }}
          >
            <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
              <div className="mb-24">
                <div className="border-b border-border pb-8 mb-3">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-8 font-medium">
                    Customer Favorites
                  </p>
                  <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-secondary leading-tight">
                    Best Sellers
                  </h2>
                </div>
              </div>
              <ProductCarousel
                title=""
                products={bestSellers}
              />
            </div>
          </motion.section>
        )}

        {/* Personalized Recommendations - For You */}
        <motion.section 
          className="py-28 w-full bg-background"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true }}
        >
          <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
            <div className="mb-24">
              <div className="border-b border-border pb-8 mb-3">
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-8 font-medium">
                  For You
                </p>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-secondary leading-tight">
                  Recommended
                </h2>
              </div>
            </div>
            <ProductCarousel
              title=""
              products={featuredProducts}
            />
          </div>
        </motion.section>
      </main>
      
      {/* Bottom nav and floating cart handled globally in AppShell */}
      
      <Footer />
    </div>
  );
};

export default Index;
