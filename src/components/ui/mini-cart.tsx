import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/AppContext";
import { Link } from "react-router-dom";

export function MiniCart({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const { items, total, removeFromCart, updateQuantity } = useCart();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-96" role="dialog" aria-label="Mini cart">
        <SheetHeader>
          <SheetTitle>Cart ({items.length})</SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex flex-col h-full" role="region" aria-live="polite">
          <div className="flex-1 space-y-3 overflow-auto pr-2">
            {items.length === 0 && (
              <div className="text-sm text-muted-foreground">Your cart is empty.</div>
            )}
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-3">
                  <div className="flex gap-3">
                    <img src={item.image} alt={item.title} className="w-16 h-16 rounded object-cover" loading="lazy" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium line-clamp-2">{item.title}</div>
                      <div className="text-xs text-muted-foreground">AED {item.price}</div>
                      <div className="flex items-center gap-2 mt-2">
                        <Button size="icon" variant="outline" onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</Button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <Button size="icon" variant="outline" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                        <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between font-semibold mb-3">
              <span>Total</span>
              <span>AED {total.toFixed(0)}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/cart" onClick={() => onOpenChange(false)}>
                <Button variant="secondary" className="w-full" disabled={items.length === 0}>View Cart</Button>
              </Link>
              <Link to="/checkout" onClick={() => onOpenChange(false)}>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-glow" disabled={items.length === 0}>Checkout</Button>
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}


