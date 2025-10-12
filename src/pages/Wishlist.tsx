import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useWishlist, useCart } from "@/contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, X } from "lucide-react";
import { motion } from "framer-motion";

const Wishlist = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (id: string) => {
    // Mock product info from id for demo
    addToCart({ id, title: id, price: 99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop" });
    removeFromWishlist(id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-8 md:px-12 lg:px-20 py-16">
        {/* Page Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="border-b border-border pb-8">
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-6 font-medium">
              Your Favorites
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-light text-secondary leading-tight">
              Wishlist
            </h1>
          </div>
        </motion.div>

        {items.length === 0 ? (
          <motion.div 
            className="text-center py-24"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-8">
              <Heart className="h-10 w-10 text-muted-foreground/40" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-light text-secondary mb-4">
              Your Wishlist is Empty
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
              Save items you love for later. Start exploring our curated collections.
            </p>
            <Button 
              onClick={() => navigate('/c/electronics')} 
              size="lg"
              className="rounded-full px-10 py-6 shadow-soft hover:shadow-medium transition-gentle"
            >
              Explore Collections
            </Button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((id, index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <Card className="group overflow-hidden shadow-soft hover:shadow-medium transition-gentle border-border">
                  <CardContent className="p-0">
                    {/* Image Container */}
                    <div className="relative overflow-hidden bg-muted/30 hover-zoom">
                      <img 
                        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop" 
                        alt={id} 
                        className="w-full aspect-square object-cover transition-elegant"
                      />
                      
                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromWishlist(id)}
                        className="absolute top-3 right-3 w-9 h-9 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-gentle shadow-soft hover:shadow-medium hover:bg-card"
                      >
                        <X className="h-4 w-4 text-muted-foreground hover:text-secondary" />
                      </button>
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-5">
                      <h3 className="font-heading text-sm font-medium mb-3 text-secondary truncate tracking-wide">
                        {id}
                      </h3>
                      
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          onClick={() => handleAddToCart(id)}
                          className="flex-1 rounded-full shadow-soft hover:shadow-medium transition-gentle"
                        >
                          <ShoppingCart className="h-3.5 w-3.5 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;


