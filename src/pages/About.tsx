import { motion } from "framer-motion";
import { 
  Globe, 
  Target, 
  Heart, 
  Shield, 
  Leaf, 
  Zap, 
  Users, 
  TrendingUp,
  Award,
  Sparkles,
  Eye,
  Lightbulb
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Every transaction is protected with industry-leading security and verified seller network."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Pioneering the future of commerce with AI-driven personalization and immersive experiences."
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Breaking down barriers with multi-language support and inclusive design for everyone."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to eco-conscious practices and supporting sustainable brands and packaging."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Founded with a vision to revolutionize Middle Eastern e-commerce"
    },
    {
      year: "2021",
      title: "Growth",
      description: "Reached 100,000+ active users and 1,000+ verified sellers"
    },
    {
      year: "2022",
      title: "Innovation",
      description: "Launched AI-powered recommendations and AR product previews"
    },
    {
      year: "2023",
      title: "Expansion",
      description: "Extended to 12 countries across MENA region"
    },
    {
      year: "2024",
      title: "Future",
      description: "Leading the next generation of immersive shopping experiences"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass-premium px-6 py-3 rounded-full text-white mb-8">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">About Rassooq</span>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-8">
              The Future of 
              <span className="block bg-gradient-to-r from-primary via-flash to-accent bg-clip-text text-transparent">
                Shopping
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              We're building the most advanced, immersive, and accessible marketplace 
              that connects millions across the Middle East with quality products and trusted sellers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-premium p-12 rounded-3xl border border-primary/10">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                  <h2 className="font-display text-4xl font-bold">Our Story</h2>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Born from a simple belief that shopping should be effortless, inspiring, and deeply personal. 
                  We saw a region rich in culture and commerce, yet underserved by outdated e-commerce experiences.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, Rassooq stands at the forefront of digital transformation, empowering sellers 
                  with advanced tools and delighting buyers with immersive, AI-powered shopping journeys 
                  that feel like magic.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">2M+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
                <div className="text-muted-foreground">Trusted Sellers</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-accent mb-2">12</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-tertiary mb-2">1M+</div>
                <div className="text-muted-foreground">Products</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-premium p-12 rounded-3xl border border-secondary/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-secondary" />
                <h3 className="font-display text-3xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To make shopping effortless, immersive, and borderless by creating 
                the world's most advanced marketplace that understands, anticipates, 
                and exceeds customer expectations while empowering sellers with cutting-edge tools.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-premium p-12 rounded-3xl border border-primary/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-primary" />
                <h3 className="font-display text-3xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the definitive shopping destination where AI-driven personalization, 
                immersive AR experiences, and sustainable practices converge to create 
                the future of commerce in the Middle East and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Our Values</span>
            </div>
            <h2 className="font-display text-5xl font-bold mb-6">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every decision, every feature, every interaction is guided by these core principles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl hover:shadow-glow transition-all duration-500 group"
              >
                <div className="mb-6">
                  <value.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-secondary/10 text-secondary px-6 py-3 rounded-full mb-6">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">Our Journey</span>
            </div>
            <h2 className="font-display text-5xl font-bold mb-6">Milestones</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startup to the region's leading marketplace platform
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-20 rounded-full" />
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="glass-premium p-8 rounded-2xl border border-primary/10">
                      <div className="text-primary font-bold text-xl mb-2">{milestone.year}</div>
                      <h3 className="font-heading text-2xl font-bold mb-4">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow" />
                  
                  <div className="lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 glass-premium px-6 py-3 rounded-full mb-8">
              <Lightbulb className="w-5 h-5 text-flash" />
              <span className="font-semibold">The Future</span>
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8">
              What's Next for Rassooq
            </h2>
            
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              We're pioneering AI-driven hyper-personalization, immersive AR shopping experiences, 
              sustainable supply chains, and voice-activated commerce to create the most intuitive 
              and delightful shopping platform ever conceived.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-premium p-6 rounded-2xl border border-white/10">
                <Zap className="w-8 h-8 text-flash mb-4 mx-auto" />
                <h3 className="font-bold text-lg mb-2">AI-Powered</h3>
                <p className="text-white/80">Predictive shopping with neural networks</p>
              </div>
              <div className="glass-premium p-6 rounded-2xl border border-white/10">
                <Globe className="w-8 h-8 text-flash mb-4 mx-auto" />
                <h3 className="font-bold text-lg mb-2">AR Shopping</h3>
                <p className="text-white/80">Try before you buy with immersive previews</p>
              </div>
              <div className="glass-premium p-6 rounded-2xl border border-white/10">
                <Leaf className="w-8 h-8 text-flash mb-4 mx-auto" />
                <h3 className="font-bold text-lg mb-2">Carbon Neutral</h3>
                <p className="text-white/80">Zero-emission delivery by 2025</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;