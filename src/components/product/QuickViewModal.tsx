import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star, Plus, Minus, X, Share2 } from "lucide-react";
import { useCart, useWishlist } from "@/contexts/AppContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface QuickViewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: {
    id: string;
    title: string;
    brand: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviewCount: number;
    image: string;
    discount?: number;
    description?: string;
    badges?: string[];
  } | null;
}

export const QuickViewModal = ({ open, onOpenChange, product }: QuickViewModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  if (!product) return null;

  const wishlisted = isInWishlist(product.id || product.title);

  const handleAddToCart = () => {
    addToCart({
      id: product.id || product.title,
      title: product.title,
      price: product.price,
      image: product.image
    }, quantity);
    onOpenChange(false);
  };

  const handleViewFullDetails = () => {
    navigate(`/p/${encodeURIComponent(product.title.toLowerCase().replace(/\s+/g, '-'))}`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Product Image */}
          <div className="relative aspect-square md:aspect-auto bg-muted/20">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            {product.discount && (
              <Badge
                variant="destructive"
                className="absolute top-4 left-4 text-sm font-bold"
              >
                -{product.discount}%
              </Badge>
            )}
            {product.badges && product.badges.length > 0 && (
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {product.badges.map((badge, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="p-6 md:p-8 flex flex-col">
            <DialogHeader className="mb-6">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground font-medium mb-2">
                    {product.brand}
                  </p>
                  <DialogTitle className="text-2xl font-bold leading-tight mb-4">
                    {product.title}
                  </DialogTitle>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-muted-foreground">
                  ({product.reviewCount.toLocaleString()} reviews)
                </span>
              </div>
            </DialogHeader>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-primary">
                MAD {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">
                    MAD {product.originalPrice.toLocaleString()}
                  </span>
                  <Badge variant="destructive" className="ml-2">
                    Save {product.discount}%
                  </Badge>
                </>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {product.description}
              </p>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10 rounded-lg"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-16 text-center font-semibold text-lg">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10 rounded-lg"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mt-auto">
              <Button
                onClick={handleAddToCart}
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white rounded-xl shadow-glow hover:shadow-orange-500/50 transition-all duration-300"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    wishlisted ? removeFromWishlist(product.id || product.title) : addToWishlist(product.id || product.title);
                  }}
                  className="h-11 rounded-xl"
                >
                  <Heart className={`h-4 w-4 mr-2 ${wishlisted ? "fill-red-500 text-red-500" : ""}`} />
                  {wishlisted ? "Saved" : "Save"}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleViewFullDetails}
                  className="h-11 rounded-xl"
                >
                  View Details
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-border/10">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>In Stock</span>
                </div>
                <div>Free Delivery on orders over MAD 100</div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
