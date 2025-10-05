import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { RassooqHero } from "@/components/hero/RassooqHero";
// import { CategoryGrid } from "@/components/ui/category-grid";
import { ProductCarousel } from "@/components/sections/product-carousel";
import { motion } from "framer-motion";
import { SouqPlusPromo } from "@/components/sections/souq-plus-promo";
import { BrandCarousel } from "@/components/sections/brand-carousel";
import { heroBanners } from "@/data/mock-data";
import { useAmplifyProducts } from "@/hooks/use-amplify-products";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Award } from "lucide-react";

const Index = () => {
  const { items: realProducts } = useAmplifyProducts(32);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [cartItems, setCartItems] = useState(0);
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

  // Auto-rotate hero banners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % heroBanners.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Full-Width Immersive Hero Banner */}
      <section
        ref={heroRef}
        className="relative h-screen w-screen flex items-center justify-center overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        {/* Dynamic Gradient Background with Better Contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-orange-500 to-yellow-400" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />

        {/* Hero Content */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10 max-w-7xl mx-auto">
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold text-white shadow-lg">
              <Sparkles className="w-5 h-5" />
              <span>Premium Marketplace Experience</span>
            </div>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 text-white drop-shadow-2xl">
              RASSOOQ
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-12 leading-relaxed text-white drop-shadow-lg max-w-4xl mx-auto">
              Where <span className="font-bold text-yellow-300">Innovation</span> meets{" "}
              <span className="font-bold text-orange-300">Commerce</span>
              <br />
              <span className="text-white/90 text-lg md:text-xl lg:text-2xl">Discover • Experience • Transcend</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button
                size="lg"
                onClick={() => navigate('/categories')}
                className="bg-orange-500 hover:bg-orange-600 text-white border-0 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50 group w-full sm:w-auto"
              >
                Explore Collection
                <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/plus')}
                className="bg-white/10 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white/20 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Join Rassooq+
                <Sparkles className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="relative z-10 bg-background w-screen">
        {/* Category Highlights - Full Width */}
        <motion.section
          className="py-16 md:py-24 w-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 glass-premium px-6 py-3 rounded-full text-sm font-semibold mb-8">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>Discover Categories</span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Shop by Style
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
                Curated collections designed for your lifestyle
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {/* Categories temporarily disabled - will add back with real data */}
              {[].map((category, index) => (
                <motion.div
                  key={category.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 60, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  onClick={() => navigate(`/c/${category.id}`)}
                >
                  <div className="glass-premium p-8 rounded-3xl hover:shadow-glow transition-all duration-500 border border-white/10 backdrop-blur-lg">
                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <h3 className="font-semibold text-lg text-center mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground text-center">{category.itemCount} items</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Trending Products - Full Width */}
        <motion.section
          className="py-16 md:py-24 w-screen bg-gradient-subtle"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-orange-500/10 text-orange-600 px-6 py-3 rounded-full mb-4">
                <TrendingUp className="h-5 w-5" />
                <span className="font-semibold">Trending Now</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
                What's Hot
              </h2>
              <p className="text-xl text-muted-foreground">
                Discover what everyone's talking about
              </p>
            </div>
            <ProductCarousel
              title=""
              products={trendingProducts}
            />
          </div>
        </motion.section>

        {/* Featured Brands - Full Width Glassmorphic Strip */}
        <motion.section
          className="py-16 md:py-24 w-screen relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
                Official Stores
              </h2>
              <p className="text-xl text-muted-foreground">
                Shop directly from premium brands
              </p>
            </div>
            <BrandCarousel />
          </div>
        </motion.section>

        {/* New Arrivals */}
        <motion.section
          className="py-16 md:py-24 w-screen bg-gradient-subtle"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-tertiary/10 text-tertiary px-6 py-3 rounded-full mb-4">
                <Sparkles className="h-5 w-5" />
                <span className="font-semibold">Just Launched</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
                Fresh Arrivals
              </h2>
              <p className="text-xl text-muted-foreground">
                The latest additions to our premium collection
              </p>
            </div>
            <ProductCarousel
              title=""
              products={newArrivals}
            />
          </div>
        </motion.section>

        {/* Rassooq+ Premium Section - Full Width */}
        <motion.section 
          className="py-24 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SouqPlusPromo />
        </motion.section>

        {/* Best Sellers */}
        {bestSellers.length > 0 && (
          <motion.section 
            className="py-24 w-full bg-gradient-subtle"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-7xl mx-auto px-8 lg:px-12">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full mb-4">
                  <Award className="h-5 w-5" />
                  <span className="font-semibold">Customer Favorites</span>
                </div>
                <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
                  Best Sellers
                </h2>
                <p className="text-xl text-muted-foreground">
                  Loved by thousands, chosen by you
                </p>
              </div>
              <ProductCarousel
                title=""
                products={bestSellers}
              />
            </div>
          </motion.section>
        )}

        {/* Personalized Recommendations */}
        <motion.section 
          className="py-24 w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-secondary/10 text-secondary px-6 py-3 rounded-full mb-4">
                <TrendingUp className="h-5 w-5" />
                <span className="font-semibold">For You</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
                Recommended
              </h2>
              <p className="text-xl text-muted-foreground">
                Specially curated products based on your preferences
              </p>
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
