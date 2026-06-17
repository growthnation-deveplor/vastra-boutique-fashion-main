import React, { useMemo } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useStore } from "../hooks/use-store";
import { toast } from "sonner";
import { getProductById, formatPrice, getDiscountPercent } from "../lib/products-db";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Heart, ShoppingBag, Eye, Trash2 } from "lucide-react";

export const Route = createFileRoute("/wishlist")({
  component: WishlistPage,
});

function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart, currentUser } = useStore();
  const navigate = useNavigate();

  const wishlistProducts = useMemo(() => {
    return wishlist
      .map((id) => getProductById(id))
      .filter((p) => p !== undefined) as any[];
  }, [wishlist]);

  const handleRemove = (productId: number) => {
    toggleWishlist(productId);
  };

  const handleAddToCart = (product: any) => {
    if (!currentUser) {
      toast.warning("Please sign in or register to add items to your cart.");
      navigate({ to: "/account" });
      return;
    }
    addToCart(product.id, product.sizes[0], product.colors[0], 1);
  };

  if (wishlistProducts.length === 0) {
    return (
      <div className="container-shell py-16 text-center flex flex-col items-center justify-center min-h-[60vh] gap-4 animate-fade-rise">
        <div className="w-24 h-24 rounded-full bg-secondary/50 flex items-center justify-center text-4xl mb-2">
          💖
        </div>
        <h1 className="text-3xl font-bold text-foreground">Your Wishlist is Empty</h1>
        <p className="text-sm text-muted-foreground max-w-sm mt-1">
          Save your favorite outfits here to keep track of what you love!
        </p>
        <Button variant="hero" size="lg" asChild className="rounded-full mt-4">
          <Link to="/shop">Explore Outfits</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-16 pt-8 animate-fade-rise">
      <div className="container-shell">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl mb-8 flex items-center gap-3">
          Favorites Wishlist
          <span className="text-sm font-semibold text-muted-foreground">({wishlistProducts.length} outfits)</span>
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {wishlistProducts.map((product) => (
            <article
              key={product.id}
              className="luxury-panel overflow-hidden rounded-[1.6rem] relative flex flex-col h-full bg-card/30 hover:bg-card/75 transition-all duration-300 group"
            >
              {/* Product Image Section */}
              <div className="overflow-hidden p-2.5 sm:p-3 relative">
                <Link
                  to="/product/$id"
                  params={{ id: String(product.id) }}
                  className="luxury-outline overflow-hidden rounded-[1.25rem] bg-brand-pearl relative aspect-[4/5] block"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </Link>

                {/* Remove button */}
                <button
                  onClick={() => handleRemove(product.id)}
                  className="absolute top-4.5 right-4.5 h-8.5 w-8.5 rounded-full bg-background/90 hover:bg-destructive hover:text-white text-muted-foreground flex items-center justify-center shadow-md backdrop-blur-sm z-10 transition-all"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              {/* Specs area */}
              <div className="px-4 pb-4 pt-1 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground font-semibold">
                    <span>{product.fabric}</span>
                    <span className="text-brand-gold">⭐️ {product.rating}</span>
                  </div>
                  <Link 
                    to="/product/$id" 
                    params={{ id: String(product.id) }} 
                    className="hover:text-primary transition-colors"
                  >
                    <h3 className="font-semibold text-foreground text-sm sm:text-base mt-2 line-clamp-1 leading-tight">
                      {product.name}
                    </h3>
                  </Link>
                </div>

                <div className="flex items-baseline gap-1.5 mt-2 flex-wrap">
                  <span className="text-base font-bold text-foreground">
                    {formatPrice(product.discountPrice)}
                  </span>
                  <span className="text-xs text-muted-foreground line-through">
                    {formatPrice(product.price)}
                  </span>
                </div>

                {/* Add to cart from favorites action */}
                <Button
                  onClick={() => handleAddToCart(product)}
                  variant="hero"
                  size="sm"
                  className="w-full mt-4 rounded-full text-xs font-semibold gap-1.5 h-9"
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                  Add to Bag
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
