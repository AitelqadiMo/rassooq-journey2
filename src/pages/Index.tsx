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
    <div className="min-h-screen bg-[#FAFAFA] overflow-x-hidden">
      <Header />

      {/* Editorial Hero Section - Split Screen Layout */}
      <section
        ref={heroRef}
        className="relative h-screen w-full flex items-center overflow-hidden bg-white"
      >
        {/* Hero Image - 60% */}
        <div 
          className="absolute inset-y-0 left-0 w-full md:w-3/5 overflow-hidden"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <div className="relative w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000"
              alt="Luxury product showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        {/* Hero Content - 40% */}
        <div className="relative z-10 w-full md:w-2/5 ml-auto h-full flex items-center bg-white md:bg-transparent">
          <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-0 md:bg-white md:h-full md:flex md:flex-col md:justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-8">
                Premium Marketplace
              </p>
              
              <h1 className="font-display text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] font-light leading-[0.9] mb-8 text-black">
                RASSOOQ
              </h1>
              
              <p className="text-xl md:text-2xl font-light text-gray-700 mb-12 leading-relaxed max-w-md">
                Where sophistication meets innovation in curated commerce
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => navigate('/categories')}
                  variant="ghost"
                  className="group border-b-2 border-black rounded-none px-0 py-6 text-base font-light hover:bg-transparent justify-start"
                >
                  Explore Collection
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button
                  onClick={() => navigate('/plus')}
                  variant="ghost"
                  className="border-b border-gray-300 rounded-none px-0 py-6 text-base font-light hover:bg-transparent justify-start"
                >
                  Join Rassooq+
                </Button>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
              className="hidden md:flex absolute bottom-12 left-12 lg:left-16 xl:left-20 items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <div className="w-px h-16 bg-black/20" />
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 -rotate-90 origin-left translate-y-12">
                Scroll
              </p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-[#FAFAFA] w-full">
        {/* Category Highlights - Editorial Grid */}
        <motion.section
          className="py-32 w-full bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16">
            <motion.div 
              className="mb-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div className="border-b border-black/10 pb-6 mb-2">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">
                  Discover
                </p>
                <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-black">
                  Shop by Style
                </h2>
              </div>
            </motion.div>

            {/* Categories temporarily disabled - will add back with real data */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[].map((category, index) => (
                <motion.div
                  key={category.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1.2,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  onClick={() => navigate(`/c/${category.id}`)}
                >
                  <div className="relative overflow-hidden bg-white">
                    <div className="relative h-[400px] overflow-hidden">
                      <motion.img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8 }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="font-display text-3xl text-white mb-2">{category.title}</h3>
                      <p className="text-sm text-white/80">{category.itemCount} items</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Trending Products */}
        <motion.section
          className="py-32 w-full bg-[#FAFAFA]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16">
            <div className="mb-20">
              <div className="border-b border-black/10 pb-6 mb-2">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">
                  Curated Selection
                </p>
                <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-black">
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

        {/* Featured Brands */}
        <motion.section
          className="py-32 w-full bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16">
            <div className="mb-20">
              <div className="border-b border-black/10 pb-6 mb-2">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">
                  Official Partners
                </p>
                <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-black">
                  Premium Brands
                </h2>
              </div>
            </div>
            <BrandCarousel />
          </div>
        </motion.section>

        {/* New Arrivals */}
        <motion.section
          className="py-32 w-full bg-[#FAFAFA]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16">
            <div className="mb-20">
              <div className="border-b border-black/10 pb-6 mb-2">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">
                  Just Launched
                </p>
                <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-black">
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

        {/* Rassooq+ Premium Section */}
        <motion.section 
          className="py-32 w-full bg-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <SouqPlusPromo />
        </motion.section>

        {/* Best Sellers */}
        {bestSellers.length > 0 && (
          <motion.section 
            className="py-32 w-full bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16">
              <div className="mb-20">
                <div className="border-b border-black/10 pb-6 mb-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">
                    Customer Favorites
                  </p>
                  <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-black">
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

        {/* Personalized Recommendations */}
        <motion.section 
          className="py-32 w-full bg-[#FAFAFA]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16">
            <div className="mb-20">
              <div className="border-b border-black/10 pb-6 mb-2">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">
                  For You
                </p>
                <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-black">
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
