import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight, X } from "lucide-react";
import { useCart } from "@/contexts/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export const CartDrawer = () => {
  const { items, total, itemCount, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const shipping = itemCount > 0 ? (total > 100 ? 0 : 15) : 0;
  const estimatedTotal = total + shipping;

  const handleRemoveItem = (id: string, title: string) => {
    removeFromCart(id);
    toast.success(`Removed ${title} from cart`, {
      duration: 2000,
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number, title: string) => {
    updateQuantity(id, quantity);
    if (quantity === 0) {
      toast.success(`Removed ${title} from cart`, {
        duration: 2000,
      });
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="sm"
            className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-2xl glass-card hover:shadow-medium hover:bg-primary/10 transition-all duration-200 p-0"
          >
            <ShoppingCart className="h-5 w-5 text-white" />
            <AnimatePresence mode="wait">
              {itemCount > 0 && (
                <motion.div
                  key={itemCount}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 25
                  }}
                  className="absolute -top-1 -right-1"
                >
                  <Badge
                    className="h-5 w-5 flex items-center justify-center p-0 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full text-xs font-bold shadow-lg"
                  >
                    <motion.span
                      key={`count-${itemCount}`}
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {itemCount}
                    </motion.span>
                  </Badge>
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg p-0 flex flex-col h-full">
        {/* Header */}
        <SheetHeader className="px-6 py-5 border-b border-border/10 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-2xl font-display font-bold flex items-center gap-3">
              <ShoppingCart className="h-6 w-6 text-primary" />
              Shopping Cart
              {itemCount > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'}
                </Badge>
              )}
            </SheetTitle>
          </div>
        </SheetHeader>

        {/* Cart Items - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <AnimatePresence mode="popLayout">
            {items.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center h-full text-center py-12"
              >
                <div className="w-24 h-24 rounded-full bg-muted/30 flex items-center justify-center mb-6">
                  <ShoppingCart className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground mb-6 max-w-sm">
                  Discover amazing products and start shopping!
                </p>
                <Button
                  onClick={() => navigate('/')}
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white rounded-full px-8"
                >
                  Start Shopping
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-premium rounded-2xl p-4 hover:shadow-glow transition-all duration-300 group"
                  >
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-muted/20">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-semibold text-sm line-clamp-2 flex-1">
                            {item.title}
                          </h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveItem(item.id, item.title)}
                            className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive rounded-lg"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                          {/* Quantity Stepper */}
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1, item.title)}
                              className="h-8 w-8 p-0 rounded-lg hover:bg-primary/10 hover:border-primary transition-all"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-12 text-center font-semibold text-sm">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1, item.title)}
                              className="h-8 w-8 p-0 rounded-lg hover:bg-primary/10 hover:border-primary transition-all"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="font-bold text-primary">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            {item.quantity > 1 && (
                              <p className="text-xs text-muted-foreground">
                                ${item.price.toFixed(2)} each
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer - Totals & Checkout */}
        {items.length > 0 && (
          <div className="border-t border-border/10 bg-gradient-to-br from-background via-primary/5 to-secondary/5 p-6 space-y-4">
            {/* Shipping Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-muted-foreground">
                <span>Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? (
                    <span className="text-green-600 font-semibold">FREE</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              {total < 100 && total > 0 && (
                <div className="text-xs text-orange-600 bg-orange-50 dark:bg-orange-900/20 px-3 py-2 rounded-lg">
                  Add ${(100 - total).toFixed(2)} more for FREE shipping!
                </div>
              )}
            </div>

            {/* Total */}
            <div className="flex items-center justify-between pt-3 border-t border-border/20">
              <span className="text-lg font-bold">Estimated Total</span>
              <span className="text-2xl font-bold text-primary">
                ${estimatedTotal.toFixed(2)}
              </span>
            </div>

            {/* Checkout Button */}
            <Button
              onClick={() => navigate('/checkout')}
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white rounded-2xl shadow-glow hover:shadow-orange-500/50 transition-all duration-300 hover:scale-[1.02]"
            >
              Proceed to Checkout
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="w-full h-12 rounded-xl"
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
