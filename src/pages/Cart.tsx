import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { Badge } from "@/components/ui/badge";
import { mockCartItems } from "@/data/extended-mock-data";
import { motion } from "framer-motion";
import { 
  Trash2, 
  Heart, 
  Tag, 
  Truck, 
  Clock,
  ShoppingBag,
  ArrowRight,
  X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState(mockCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + ((item.originalPrice - item.price) * item.quantity);
    }
    return sum;
  }, 0);
  
  const promoDiscount = appliedPromo ? 25 : 0; // Mock discount
  const deliveryFee = subtotal > 100 ? 0 : 15;
  const total = subtotal - promoDiscount + deliveryFee;

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
    toast({
      title: "Item Removed",
      description: "Item has been removed from your cart",
    });
  };

  const handleMoveToWishlist = (itemId: string) => {
    handleRemoveItem(itemId);
    toast({
      title: "Moved to Wishlist",
      description: "Item has been moved to your wishlist",
    });
  };

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setAppliedPromo(promoCode);
      toast({
        title: "Promo Code Applied!",
        description: "You saved AED 25 with code WELCOME10",
      });
    } else {
      toast({
        title: "Invalid Promo Code",
        description: "Please check your promo code and try again",
        variant: "destructive"
      });
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 flex items-center justify-center px-4">
          <motion.div 
            className="text-center max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-10">
              <ShoppingBag className="h-12 w-12 text-muted-foreground/40" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-light text-secondary mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Start exploring our curated collections and discover pieces you'll love
            </p>
            <Link to="/">
              <Button 
                size="lg"
                className="rounded-full px-10 py-6 shadow-soft hover:shadow-medium transition-gentle"
              >
                Continue Shopping
                <ArrowRight className="h-4 w-4 ml-3" />
              </Button>
            </Link>
          </motion.div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-8 md:px-12 lg:px-20 py-12">
          {/* Page Header */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-b border-border pb-8 flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-6 font-medium">
                  Your Selection
                </p>
                <h1 className="font-display text-4xl md:text-5xl font-light text-secondary leading-tight">
                  Shopping Cart
                </h1>
              </div>
              <span className="text-sm text-muted-foreground">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {/* Delivery Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="bg-gradient-soft border-border shadow-soft">
                  <CardContent className="pt-5 pb-5">
                    <div className="flex items-center gap-3 text-sm">
                      <Truck className="h-5 w-5 text-primary" />
                      <span className="text-secondary">
                        {deliveryFee === 0 
                          ? "✨ You qualify for complimentary delivery" 
                          : `Add AED ${(100 - subtotal).toFixed(0)} more for free delivery`
                        }
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Cart Items List */}
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 + index * 0.05 }}
                  >
                    <Card className="shadow-soft hover:shadow-medium transition-gentle border-border overflow-hidden">
                      <CardContent className="p-5">
                        <div className="flex gap-5">
                          {/* Product Image */}
                          <div className="w-28 h-28 flex-none overflow-hidden rounded-lg bg-muted/30">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="w-full h-full object-cover hover:scale-105 transition-elegant"
                            />
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-heading text-base font-medium mb-1 line-clamp-2 text-secondary">
                              {item.title}
                            </h3>
                            <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                              {item.brand}
                            </p>
                            
                            {/* Stock Status */}
                            <div className="flex items-center gap-2 mb-4">
                              {item.inStock ? (
                                <Badge variant="default" className="text-xs rounded-full px-3 py-1">
                                  <Clock className="h-3 w-3 mr-1.5" />
                                  In Stock
                                </Badge>
                              ) : (
                                <Badge variant="destructive" className="text-xs rounded-full px-3 py-1">
                                  Out of Stock
                                </Badge>
                              )}
                              {item.discount && (
                                <Badge variant="secondary" className="text-xs rounded-full px-3 py-1">
                                  {item.discount}% OFF
                                </Badge>
                              )}
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-4">
                              <button 
                                onClick={() => handleRemoveItem(item.id)}
                                className="text-xs text-muted-foreground hover:text-destructive flex items-center gap-1.5 transition-gentle"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                                Remove
                              </button>
                              <button 
                                onClick={() => handleMoveToWishlist(item.id)}
                                className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1.5 transition-gentle"
                              >
                                <Heart className="h-3.5 w-3.5" />
                                Save for Later
                              </button>
                            </div>
                          </div>

                          {/* Price & Quantity */}
                          <div className="text-right space-y-4">
                            <div>
                              <div className="font-heading font-semibold text-lg text-primary">
                                AED {item.price}
                              </div>
                              {item.originalPrice && (
                                <div className="text-xs text-muted-foreground line-through">
                                  AED {item.originalPrice}
                                </div>
                              )}
                            </div>

                            <QuantitySelector
                              value={item.quantity}
                              onChange={(qty) => handleQuantityChange(item.id, qty)}
                              size="sm"
                            />

                            <div className="text-sm font-medium text-secondary pt-2 border-t border-border">
                              Total: AED {(item.price * item.quantity).toFixed(0)}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="sticky top-6 shadow-elegant border-border">
                <CardHeader className="pb-6">
                  <CardTitle className="font-display text-2xl font-light text-secondary">
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Promo Code */}
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <Input
                        placeholder="Enter promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        disabled={!!appliedPromo}
                        className="rounded-lg border-border focus:ring-primary/20 focus:border-primary"
                      />
                      {!appliedPromo && (
                        <Button 
                          variant="outline" 
                          onClick={handleApplyPromo}
                          disabled={!promoCode}
                          className="rounded-lg px-6 border-border hover:bg-primary/5 hover:text-primary transition-gentle"
                        >
                          Apply
                        </Button>
                      )}
                    </div>
                    {appliedPromo && (
                      <div className="flex items-center gap-2 text-sm text-primary bg-primary/5 rounded-lg px-4 py-3">
                        <Tag className="h-4 w-4" />
                        <span className="flex-1">Code {appliedPromo} applied</span>
                        <button 
                          onClick={() => setAppliedPromo(null)}
                          className="text-muted-foreground hover:text-secondary transition-gentle"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-border pt-6 space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
                      </span>
                      <span className="font-medium text-secondary">AED {subtotal.toFixed(0)}</span>
                    </div>
                    
                    {savings > 0 && (
                      <div className="flex justify-between text-sm text-primary">
                        <span>You saved</span>
                        <span className="font-medium">-AED {savings.toFixed(0)}</span>
                      </div>
                    )}
                    
                    {appliedPromo && (
                      <div className="flex justify-between text-sm text-primary">
                        <span>Promo discount</span>
                        <span className="font-medium">-AED {promoDiscount}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Delivery fee</span>
                      <span className="font-medium">
                        {deliveryFee === 0 ? (
                          <span className="text-primary">FREE</span>
                        ) : (
                          <span className="text-secondary">AED {deliveryFee}</span>
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-heading text-base text-muted-foreground">Total</span>
                      <span className="font-display text-3xl font-light text-secondary">
                        AED {total.toFixed(0)}
                      </span>
                    </div>

                    <Link to="/checkout" className="block mb-3">
                      <Button 
                        size="lg" 
                        className="w-full rounded-full py-6 shadow-soft hover:shadow-medium transition-gentle"
                      >
                        Proceed to Checkout
                        <ArrowRight className="h-4 w-4 ml-3" />
                      </Button>
                    </Link>

                    <Link to="/" className="block">
                      <Button 
                        variant="outline" 
                        className="w-full rounded-full py-6 border-border hover:bg-muted/50 transition-gentle"
                      >
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;