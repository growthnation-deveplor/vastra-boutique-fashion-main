import React, { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useStore } from "../hooks/use-store";
import { getProductById, formatPrice, COUPONS } from "../lib/products-db";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Trash2, Plus, Minus, Tag, ChevronRight, ShoppingBag, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "../components/ui/badge";

export const Route = createFileRoute("/cart")({
  component: CartPage,
});

function CartPage() {
  const {
    cart,
    updateCartQuantity,
    removeFromCart,
    cartCount,
    getCartTotal,
    currentUser,
  } = useStore();

  const [couponInput, setCouponInput] = useState("");
  const [activeCoupon, setActiveCoupon] = useState<string | null>(null);
  const navigate = useNavigate();

  // Redirect to account if not logged in
  React.useEffect(() => {
    if (!currentUser) {
      toast.warning("Please sign in or register to view your shopping bag.");
      navigate({ to: "/account" });
    }
  }, [currentUser, navigate]);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponInput.trim().toUpperCase();

    if (!code) {
      toast.error("Please enter a coupon code.");
      return;
    }

    if (COUPONS[code] !== undefined) {
      setActiveCoupon(code);
      toast.success(`Coupon "${code}" applied successfully!`);
    } else {
      toast.error("Invalid coupon code. Try WELCOME10, VASTRA20, or FESTIVE30.");
    }
  };

  const handleRemoveCoupon = () => {
    setActiveCoupon(null);
    setCouponInput("");
    toast.info("Coupon removed.");
  };

  const handleQtyChange = (productId: number, size: string, colorName: string, change: number, currentQty: number) => {
    updateCartQuantity(productId, size, colorName, currentQty + change);
  };

  const pricing = getCartTotal(activeCoupon);

  if (cart.length === 0) {
    return (
      <div className="container-shell py-16 text-center flex flex-col items-center justify-center min-h-[60vh] gap-4 animate-fade-rise">
        <div className="w-24 h-24 rounded-full bg-secondary/50 flex items-center justify-center text-4xl mb-2">
          🛍️
        </div>
        <h1 className="text-3xl font-bold text-foreground">Your Shopping Bag is Empty</h1>
        <p className="text-sm text-muted-foreground max-w-sm mt-1">
          Looks like you haven&apos;t added any beautiful boutique outfits to your bag yet.
        </p>
        <Button variant="hero" size="lg" asChild className="rounded-full mt-4">
          <Link to="/shop">Explore Collection</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-16 pt-8 animate-fade-rise">
      <div className="container-shell">
        {/* Page title */}
        <div className="flex items-center gap-2 mb-8">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Shopping Bag</h1>
          <Badge variant="secondary" className="rounded-full px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary">
            {cartCount} outfits
          </Badge>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          {/* Cart Items List */}
          <div className="flex flex-col gap-4">
            {cart.map((item) => {
              const product = getProductById(item.productId);
              if (!product) return null;

              return (
                <Card
                  key={`${item.productId}-${item.size}-${item.color.name}`}
                  className="p-4 sm:p-5 rounded-2xl border-border/40 bg-card/45 hover:bg-card/75 transition-all flex gap-4 sm:gap-6 relative"
                >
                  {/* Image */}
                  <Link
                    to="/product/$id"
                    params={{ id: String(product.id) }}
                    className="shrink-0 w-24 h-32 sm:w-28 sm:h-36 rounded-xl overflow-hidden border border-border/40 bg-brand-pearl"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Specs & controls */}
                  <div className="flex-grow flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <Link 
                          to="/product/$id" 
                          params={{ id: String(product.id) }} 
                          className="hover:text-primary transition-colors"
                        >
                          <h3 className="font-bold text-foreground text-base sm:text-lg truncate leading-tight">
                            {product.name}
                          </h3>
                        </Link>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.productId, item.size, item.color.name)}
                          className="h-8 w-8 text-muted-foreground hover:text-destructive rounded-full"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Size, Color, Fabric info */}
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-muted-foreground font-semibold">
                        <span>Size: <strong className="text-foreground">{item.size}</strong></span>
                        <span className="flex items-center gap-1.5">
                          Color:
                          <span
                            className="inline-block w-3 h-3 rounded-full border border-black/10"
                            style={{ backgroundColor: item.color.hex }}
                          />
                          <strong className="text-foreground">{item.color.name}</strong>
                        </span>
                        <span>Fabric: <strong className="text-foreground">{product.fabric}</strong></span>
                      </div>
                    </div>

                    <div className="flex items-end justify-between mt-4 gap-4 flex-wrap">
                      {/* Quantity select */}
                      <div className="flex items-center border border-border/80 rounded-xl h-10 px-1 bg-background">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleQtyChange(item.productId, item.size, item.color.name, -1, item.quantity)}
                          className="h-8 w-8 rounded-lg hover:bg-secondary"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </Button>
                        <span className="w-10 text-center text-sm font-bold text-foreground">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleQtyChange(item.productId, item.size, item.color.name, 1, item.quantity)}
                          className="h-8 w-8 rounded-lg hover:bg-secondary"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </Button>
                      </div>

                      {/* Pricing */}
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground font-semibold">
                          Price: {formatPrice(product.discountPrice)}
                        </p>
                        <p className="text-lg font-bold text-foreground mt-0.5">
                          {formatPrice(product.discountPrice * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}

            {/* Back to Shop Link */}
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline mt-2 w-fit"
            >
              <ArrowLeft className="h-4 w-4" />
              Continue Shopping
            </Link>
          </div>

          {/* Cart Sidebar Summary */}
          <div className="flex flex-col gap-6 sticky top-24">
            {/* Promo Code Card */}
            <Card className="luxury-panel rounded-2xl p-5 border-border/50">
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 flex items-center gap-2">
                <Tag className="h-4.5 w-4.5 text-primary" />
                Apply Coupon Code
              </h3>
              {activeCoupon ? (
                <div className="flex items-center justify-between bg-primary/10 rounded-xl px-4 py-3 border border-primary/20 animate-fade-rise">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary fill-primary/10" />
                    <div>
                      <p className="text-sm font-bold text-primary">{activeCoupon}</p>
                      <p className="text-[10px] text-muted-foreground font-semibold">
                        {(COUPONS[activeCoupon] * 100)}% Discount Applied
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={handleRemoveCoupon} className="h-8 px-2 text-xs font-bold text-primary hover:bg-primary/20 rounded-full">
                    Remove
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="e.g. VASTRA20"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    className="rounded-xl h-10 text-xs font-semibold placeholder:text-muted-foreground/60 uppercase"
                  />
                  <Button type="submit" variant="luxury" className="h-10 rounded-xl px-4 text-xs font-bold">
                    Apply
                  </Button>
                </form>
              )}
              {!activeCoupon && (
                <div className="mt-3.5 flex flex-col gap-1.5 text-xs text-muted-foreground/80 font-semibold border-t border-border/30 pt-3">
                  <p className="flex justify-between">
                    <span>WELCOME10</span>
                    <span className="text-foreground">10% OFF (First Order)</span>
                  </p>
                  <p className="flex justify-between">
                    <span>VASTRA20</span>
                    <span className="text-foreground">20% OFF (Boutique Special)</span>
                  </p>
                  <p className="flex justify-between">
                    <span>FESTIVE30</span>
                    <span className="text-foreground">30% OFF (Festive Promo)</span>
                  </p>
                </div>
              )}
            </Card>

            {/* Summary details card */}
            <Card className="luxury-panel rounded-2xl p-6 border-border/50">
              <h3 className="text-lg font-bold text-foreground mb-4">Order Summary</h3>
              <div className="flex flex-col gap-3.5 text-sm font-semibold">
                <div className="flex justify-between text-muted-foreground">
                  <span>Bag Subtotal</span>
                  <span className="text-foreground">{formatPrice(pricing.subtotal)}</span>
                </div>
                
                {pricing.discount > 0 && (
                  <div className="flex justify-between text-primary bg-primary/5 p-2 rounded-lg border border-primary/10">
                    <span>Coupon Discount</span>
                    <span>-{formatPrice(pricing.discount)}</span>
                  </div>
                )}

                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping Fee</span>
                  <span className="text-foreground">
                    {pricing.shipping === 0 ? (
                      <span className="text-success font-bold uppercase tracking-wider text-[11px] bg-success/10 px-2 py-0.5 rounded border border-success/20">
                        Free
                      </span>
                    ) : (
                      formatPrice(pricing.shipping)
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-muted-foreground">
                  <span>GST/Taxes (5%)</span>
                  <span className="text-foreground">{formatPrice(pricing.tax)}</span>
                </div>

                <Separator className="bg-border/60 my-2" />

                <div className="flex justify-between text-base font-bold items-center">
                  <span>Grand Total</span>
                  <span className="text-2xl text-primary">{formatPrice(pricing.total)}</span>
                </div>
              </div>

              {pricing.shipping > 0 && (
                <div className="mt-4 text-xs text-muted-foreground bg-secondary/35 border border-border/40 p-3 rounded-xl leading-normal font-semibold">
                  💡 Add <strong className="text-primary">{formatPrice(999 - pricing.subtotal)}</strong> more in products to qualify for <strong className="text-success">FREE shipping</strong>.
                </div>
              )}

              <Button asChild size="lg" variant="hero" className="w-full mt-6 rounded-full h-12">
                <Link to="/checkout" search={{ coupon: activeCoupon ?? undefined }}>
                  Proceed to Checkout
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
