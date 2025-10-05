import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, Star, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useCart, useWishlist } from "@/contexts/AppContext";
import { QuickViewModal } from "@/components/product/QuickViewModal";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  title: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  discount?: number;
  isFlashSale?: boolean;
  badges?: string[];
  className?: string;
}

export const ProductCard = ({
  id,
  title,
  brand,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  discount,
  isFlashSale,
  badges = [],
  className
}: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  const wishlisted = isInWishlist(id || title);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({ id: id || title, title, price, image });
    toast.success(`Added ${title} to cart`, {
      duration: 2000,
      description: `MAD ${price.toLocaleString()}`,
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (wishlisted) {
      removeFromWishlist(id || title);
      toast.info(`Removed from wishlist`, { duration: 2000 });
    } else {
      addToWishlist(id || title);
      toast.success(`Added to wishlist`, { duration: 2000 });
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Card className={cn(
          "group cursor-pointer overflow-hidden bg-gradient-card glass-card border-0 shadow-medium hover:shadow-glow transition-all duration-500",
          isFlashSale && "ring-2 ring-flash/50 shadow-glow",
          className
        )}>
          <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative aspect-square overflow-hidden" onClick={() => navigate(`/p/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-') )}`)}>
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-elegant duration-700"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />
          
          {/* Discount Badge */}
          {discount && (
            <Badge 
              variant={isFlashSale ? "default" : "destructive"}
              className={cn(
                "absolute top-3 left-3 text-xs font-bold shadow-medium backdrop-blur-sm",
                isFlashSale && "bg-gradient-flash text-flash-foreground animate-flash shadow-glow"
              )}
            >
              -{discount}%
            </Badge>
          )}
          
          {/* Other Badges */}
          {badges.length > 0 && (
            <div className="absolute top-3 right-3 flex flex-col gap-1">
              {badges.map((badge, index) => (
                <Badge key={index} variant="secondary" className="text-xs glass-panel">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
          
          {/* Action Buttons - Top Right */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {/* Wishlist Button */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ scale: 1.1 }}
              className="opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full glass-card hover:glass-premium backdrop-blur-xl"
                onClick={handleToggleWishlist}
              >
                <Heart className={cn("h-4 w-4 transition-colors", wishlisted && "fill-red-500 text-red-500")} />
              </Button>
            </motion.div>

            {/* Quick View Button */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ scale: 1.1 }}
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full glass-card hover:glass-premium backdrop-blur-xl"
                onClick={(e) => { e.stopPropagation(); setQuickViewOpen(true); }}
              >
                <Eye className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Quick Add to Cart */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <Button
              variant="default"
              size="sm"
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold shadow-glow hover:shadow-orange-500/50 transition-all duration-300 hover:scale-[1.02]"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </motion.div>
        </div>
        
        {/* Content Section */}
        <div className="p-4 space-y-2">
          {/* Brand */}
          <p className="text-sm text-muted-foreground font-medium tracking-wide">{brand}</p>
          
          {/* Title */}
          <h3 className="font-semibold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors min-h-[2.5rem]">
            {title}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">({reviewCount.toLocaleString()})</span>
          </div>
          
          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-primary">
              MAD {price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                MAD {originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
      </motion.div>

      {/* Quick View Modal */}
      <QuickViewModal
        open={quickViewOpen}
        onOpenChange={setQuickViewOpen}
        product={{
          id,
          title,
          brand,
          price,
          originalPrice,
          rating,
          reviewCount,
          image,
          discount,
          badges
        }}
      />
    </>
  );
};
