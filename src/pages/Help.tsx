import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Search, 
  Package, 
  CreditCard, 
  RotateCcw, 
  Crown, 
  Store, 
  Shield,
  MessageCircle,
  Phone,
  Mail,
  ChevronRight,
  BookOpen,
  Video,
  FileText,
  Zap
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const helpCategories = [
    {
      id: "orders",
      title: "Orders & Delivery",
      icon: Package,
      color: "primary",
      description: "Track orders, delivery options, and shipping information",
      articleCount: 12
    },
    {
      id: "payments",
      title: "Payments & Billing", 
      icon: CreditCard,
      color: "secondary",
      description: "Payment methods, invoices, and billing questions",
      articleCount: 8
    },
    {
      id: "returns",
      title: "Returns & Refunds",
      icon: RotateCcw,
      color: "accent",
      description: "Return process, refund status, and exchange policies",
      articleCount: 10
    },
    {
      id: "rassooq-plus",
      title: "Rassooq+ Premium",
      icon: Crown,
      color: "flash",
      description: "Membership benefits, billing, and premium features",
      articleCount: 6
    },
    {
      id: "selling",
      title: "Selling on Rassooq",
      icon: Store,
      color: "tertiary",
      description: "Seller registration, payouts, and store management",
      articleCount: 15
    },
    {
      id: "security",
      title: "Account & Security",
      icon: Shield,
      color: "secondary",
      description: "Account settings, security, and privacy controls",
      articleCount: 9
    }
  ];

  const popularArticles = [
    {
      title: "How to track your order in real-time",
      category: "Orders",
      views: "15.2K views",
      readTime: "2 min read"
    },
    {
      title: "Complete guide to returns and exchanges",
      category: "Returns", 
      views: "12.8K views",
      readTime: "4 min read"
    },
    {
      title: "Setting up your seller account",
      category: "Selling",
      views: "11.5K views",
      readTime: "3 min read"
    },
    {
      title: "Rassooq+ membership benefits explained",
      category: "Premium",
      views: "9.7K views", 
      readTime: "3 min read"
    }
  ];

  const quickActions = [
    {
      icon: Package,
      title: "Track Order",
      description: "Check your order status",
      action: "Track Now"
    },
    {
      icon: RotateCcw,
      title: "Return Item", 
      description: "Start a return request",
      action: "Return"
    },
    {
      icon: MessageCircle,
      title: "Contact Support",
      description: "Get help from our team",
      action: "Chat Now"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Search */}
      <section className="relative py-24 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 glass-premium px-6 py-3 rounded-full mb-8">
              <BookOpen className="w-5 h-5" />
              <span className="font-semibold">Help Center</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              How Can We
              <span className="block bg-gradient-to-r from-flash via-primary to-accent bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-12">
              Search our knowledge base or browse categories to find answers quickly
            </p>

            {/* Enhanced Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
              <Input
                type="text"
                placeholder="Search articles, guides, orders, returns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-20 py-4 bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-md rounded-2xl text-lg"
              />
              <Button 
                size="sm" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 -mt-8 relative z-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-premium border-white/10 hover:shadow-glow transition-all duration-500 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <action.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{action.title}</h3>
                        <p className="text-muted-foreground text-sm">{action.description}</p>
                      </div>
                      <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        {action.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-xl text-muted-foreground">
              Find the help you need organized by topic
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover:shadow-glow transition-all duration-500 cursor-pointer group h-full">
                  <CardContent className="p-8">
                    <div className={`p-4 rounded-2xl bg-${category.color}/10 w-fit mb-6`}>
                      <category.icon className={`w-8 h-8 text-${category.color}`} />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{category.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {category.articleCount} articles
                      </span>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Most Popular</span>
            </div>
            <h2 className="font-display text-4xl font-bold mb-4">Trending Help Articles</h2>
            <p className="text-xl text-muted-foreground">
              The most viewed and helpful articles from our community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-premium border-primary/5 hover:shadow-glow transition-all duration-500 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <FileText className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{article.views}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-secondary/10 text-secondary px-6 py-3 rounded-full mb-6">
              <Video className="w-5 h-5" />
              <span className="font-semibold">Video Guides</span>
            </div>
            <h2 className="font-display text-4xl font-bold mb-4">Learn with Video Tutorials</h2>
            <p className="text-xl text-muted-foreground">
              Step-by-step visual guides to help you get the most out of Rassooq
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <motion.div
                key={video}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover:shadow-glow transition-all duration-500 cursor-pointer group overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Video className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">Getting Started with Rassooq</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Complete walkthrough for new users
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>5:30 mins</span>
                      <span>2.1K views</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Our expert support team is standing by 24/7 to assist you
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-premium p-8 rounded-2xl border border-white/10 hover:shadow-glow transition-all duration-500">
                <MessageCircle className="w-12 h-12 text-flash mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Live Chat</h3>
                <p className="text-white/80 mb-6 text-sm">
                  Average response time: 30 seconds
                </p>
                <Button className="w-full bg-white text-secondary hover:bg-white/90">
                  Start Chat Now
                </Button>
              </div>

              <div className="glass-premium p-8 rounded-2xl border border-white/10 hover:shadow-glow transition-all duration-500">
                <Phone className="w-12 h-12 text-flash mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Phone Support</h3>
                <p className="text-white/80 mb-6 text-sm">
                  Available 24/7 in multiple languages
                </p>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  +971 800 RASSOOQ
                </Button>
              </div>

              <div className="glass-premium p-8 rounded-2xl border border-white/10 hover:shadow-glow transition-all duration-500">
                <Mail className="w-12 h-12 text-flash mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Email Support</h3>
                <p className="text-white/80 mb-6 text-sm">
                  Detailed responses within 2 hours
                </p>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  Send Email
                </Button>
              </div>
            </div>

            <div className="mt-12 glass-premium p-6 rounded-2xl border border-white/10">
              <p className="text-white/80">
                <strong>Pro Tip:</strong> Include your order number or account email for faster assistance
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Help;