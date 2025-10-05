import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface ProductCarouselProps {
  title: string;
  products: Array<{
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
  }>;
  showArrows?: boolean;
}

export const ProductCarousel = ({ 
  title, 
  products, 
  showArrows = true 
}: ProductCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 280; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-4 md:py-6">
      <div className="w-full">
        {title && (
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
              {title}
            </h2>
            {showArrows && (
              <div className="hidden md:flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scroll('left')}
                  className="h-9 w-9 rounded-full hover:shadow-premium transition-all"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scroll('right')}
                  className="h-9 w-9 rounded-full hover:shadow-premium transition-all"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        )}

        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-none w-56 sm:w-64 md:w-72">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};