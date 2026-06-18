import React, { useState, useMemo } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { useStore } from "../hooks/use-store";
import { PRODUCTS, CATEGORIES, formatPrice, getDiscountPercent } from "../lib/products-db";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Slider } from "../components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Heart, ShoppingBag, Eye, SlidersHorizontal, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

// Search params schema for filtering and sorting
const shopSearchSchema = z.object({
  search: z.string().optional().catch(""),
  category: z.string().optional().catch(""),
  minPrice: z.number().optional().catch(undefined),
  maxPrice: z.number().optional().catch(undefined),
  size: z.string().optional().catch(""),
  color: z.string().optional().catch(""),
  sortBy: z.string().optional().catch("popular"),
});

type ShopSearchParams = z.infer<typeof shopSearchSchema>;

export const Route = createFileRoute("/shop")({
  validateSearch: (search) => shopSearchSchema.parse(search),
  component: Shop,
});

function Shop() {
  const navigate = useNavigate({ from: Route.fullPath });
  const searchParams = Route.useSearch() as ShopSearchParams;
  const { toggleWishlist, isInWishlist, addToCart, currentUser, products } = useStore();

  // Price range constants
  const maxPriceInDb = products.length > 0 ? Math.max(...products.map((p) => p.discountPrice)) : 9999;
  const minPriceInDb = products.length > 0 ? Math.min(...products.map((p) => p.discountPrice)) : 0;

  // Local state for filter sidebar
  const activeSearch = searchParams.search || "";
  const activeCategory = searchParams.category || "";
  const activeSortBy = searchParams.sortBy || "popular";
  const activeSize = searchParams.size || "";
  const activeColor = searchParams.color || "";

  // Price state
  const [priceRange, setPriceRange] = useState<number[]>([
    searchParams.minPrice ?? minPriceInDb,
    searchParams.maxPrice ?? maxPriceInDb,
  ]);

  // Extract all unique colors and sizes for filter UI
  const allSizes = useMemo(() => {
    const sizes = new Set<string>();
    products.forEach((p) => p.sizes.forEach((s) => sizes.add(s)));
    return Array.from(sizes).sort();
  }, [products]);

  const allColors = useMemo(() => {
    const colorMap = new Map<string, string>();
    products.forEach((p) =>
      p.colors.forEach((c) => {
        if (!colorMap.has(c.name)) {
          colorMap.set(c.name, c.hex);
        }
      })
    );
    return Array.from(colorMap.entries()).map(([name, hex]) => ({ name, hex }));
  }, [products]);

  // Filter products logic
  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Search query
    if (activeSearch.trim()) {
      const q = activeSearch.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q)
      );
    }

    // Category
    if (activeCategory) {
      list = list.filter((p) => p.category === activeCategory);
    }

    // Price
    list = list.filter(
      (p) =>
        p.discountPrice >= (searchParams.minPrice ?? minPriceInDb) &&
        p.discountPrice <= (searchParams.maxPrice ?? maxPriceInDb)
    );

    // Size
    if (activeSize) {
      list = list.filter((p) => p.sizes.includes(activeSize));
    }

    // Color
    if (activeColor) {
      list = list.filter((p) => p.colors.some((c) => c.name === activeColor));
    }

    // Sorting
    switch (activeSortBy) {
      case "price-low":
        list.sort((a, b) => a.discountPrice - b.discountPrice);
        break;
      case "price-high":
        list.sort((a, b) => b.discountPrice - a.discountPrice);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        list.sort((a, b) => b.reviews - a.reviews);
        break;
      case "newest":
        list.sort((a, b) => (b.badge === "new" ? 1 : 0) - (a.badge === "new" ? 1 : 0));
        break;
    }

    return list;
  }, [activeSearch, activeCategory, searchParams.minPrice, searchParams.maxPrice, activeSize, activeColor, activeSortBy, minPriceInDb, maxPriceInDb]);

  // Navigate helper to update URL search parameters
  const updateFilters = (newParams: Partial<ShopSearchParams>) => {
    navigate({
      to: "/shop",
      search: (prev: any) => ({
        ...prev,
        ...newParams,
      }),
    });
  };

  const handlePriceChange = (val: number[]) => {
    setPriceRange(val);
  };

  const applyPriceFilter = () => {
    updateFilters({ minPrice: priceRange[0], maxPrice: priceRange[1] });
  };

  const resetFilters = () => {
    setPriceRange([minPriceInDb, maxPriceInDb]);
    navigate({
      to: "/shop",
      search: {},
    });
  };

  const sidebarFilters = (
    <div className="flex flex-col gap-6 p-1">
      {/* Category Filter */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Categories</h3>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => updateFilters({ category: "" })}
            className={`text-left text-sm py-1.5 px-3 rounded-lg transition-all font-medium ${
              activeCategory === ""
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
            }`}
          >
            All Products ({products.length})
          </button>
          {CATEGORIES.map((cat) => {
            const catCount = products.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => updateFilters({ category: cat.id })}
                className={`text-left text-sm py-1.5 px-3 rounded-lg transition-all font-medium ${
                  activeCategory === cat.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                }`}
              >
                {cat.name} ({catCount})
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={[priceRange[0], priceRange[1]]}
            min={minPriceInDb}
            max={maxPriceInDb}
            step={100}
            value={priceRange}
            onValueChange={handlePriceChange}
            className="my-4"
          />
          <div className="flex items-center justify-between text-xs text-muted-foreground mt-2 font-medium">
            <span>{formatPrice(priceRange[0])}</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
          <Button onClick={applyPriceFilter} variant="outline" size="sm" className="w-full mt-3 rounded-full text-xs">
            Apply Price Filter
          </Button>
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Sizes</h3>
        <div className="flex flex-wrap gap-2">
          {allSizes.map((size) => (
            <button
              key={size}
              onClick={() => updateFilters({ size: activeSize === size ? "" : size })}
              className={`h-9 min-w-[2.25rem] px-2 text-xs font-semibold rounded-lg border transition-all ${
                activeSize === size
                  ? "bg-primary border-primary text-primary-foreground shadow-sm"
                  : "border-border bg-card text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Colors</h3>
        <div className="flex flex-wrap gap-2.5">
          {allColors.map((color) => (
            <button
              key={color.name}
              onClick={() => updateFilters({ color: activeColor === color.name ? "" : color.name })}
              title={color.name}
              className={`h-8 w-8 rounded-full border transition-all relative flex items-center justify-center ${
                activeColor === color.name
                  ? "border-primary scale-110 shadow-md ring-2 ring-primary/20"
                  : "border-border hover:scale-105"
              }`}
              style={{ backgroundColor: color.hex }}
            >
              {activeColor === color.name && (
                <span className="absolute w-2 h-2 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.5)]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <Button
        onClick={resetFilters}
        variant="ghost"
        className="text-xs w-full justify-center gap-2 text-muted-foreground hover:text-foreground hover:bg-secondary/40 py-2.5 rounded-full"
      >
        <RotateCcw className="h-3.5 w-3.5" />
        Reset All Filters
      </Button>
    </div>
  );

  const handleQuickAdd = (e: React.MouseEvent, product: typeof PRODUCTS[0]) => {
    e.preventDefault();
    e.stopPropagation();
    if (!currentUser) {
      toast.warning("Please sign in or register to add items to your cart.");
      navigate({ to: "/account" });
      return;
    }
    // Quick Add defaults to first size & color
    addToCart(product.id, product.sizes[0], product.colors[0], 1);
  };

  const handleWishlistToggle = (e: React.MouseEvent, productId: number) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(productId);
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-12 animate-fade-rise">
      {/* Page Header */}
      <div className="bg-card/40 border-b border-border/50 py-10">
        <div className="container-shell text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Explore Curated Fashion
          </p>
          <h1 className="text-4xl font-semibold text-foreground mt-3 sm:text-5xl">
            Boutique Collection
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted-foreground max-w-xl mx-auto">
            Discover a handpicked range of designer sarees, kurtas, palazzo sets, western dresses, and premium kidswear styled for confidence and comfort.
          </p>
        </div>
      </div>

      <div className="container-shell mt-10">
        <div className="grid lg:grid-cols-[240px_minmax(0,1fr)] gap-8 items-start">
          {/* Desktop Filter Sidebar (Hidden on Mobile) */}
          <aside className="hidden lg:block sticky top-24 max-h-[85vh] overflow-y-auto pr-2">
            <div className="p-4 rounded-2xl border border-border/60 bg-card/50 luxury-panel">
              {sidebarFilters}
            </div>
          </aside>

          {/* Catalog Area */}
          <div>
            {/* Top Bar (Search, Controls, Sort) */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pb-6 border-b border-border/50">
              <div className="text-sm font-semibold text-muted-foreground w-full sm:w-auto">
                Showing <span className="text-foreground">{filteredProducts.length}</span> outfits
              </div>

              <div className="flex gap-2.5 items-center w-full sm:w-auto justify-end">
                {/* Mobile Filters Drawer */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden gap-2 rounded-full h-9">
                      <SlidersHorizontal className="h-4 w-4" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] overflow-y-auto bg-background/95 backdrop-blur-xl luxury-panel border-r border-border/60">
                    <SheetHeader className="pb-4 border-b border-border/60">
                      <SheetTitle className="text-xl font-bold flex items-center gap-2">
                        <SlidersHorizontal className="h-5 w-5 text-primary" />
                        Filters
                      </SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      {sidebarFilters}
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Sorting Select */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap hidden sm:inline">
                    Sort by
                  </span>
                  <Select
                    value={activeSortBy}
                    onValueChange={(val) => updateFilters({ sortBy: val })}
                  >
                    <SelectTrigger className="w-[160px] h-9 rounded-full text-xs font-medium bg-card">
                      <SelectValue placeholder="Sort Products" />
                    </SelectTrigger>
                    <SelectContent className="luxury-panel rounded-xl">
                      <SelectItem value="popular" className="text-xs font-medium cursor-pointer">Popularity</SelectItem>
                      <SelectItem value="newest" className="text-xs font-medium cursor-pointer">Newest Arrivals</SelectItem>
                      <SelectItem value="price-low" className="text-xs font-medium cursor-pointer">Price: Low to High</SelectItem>
                      <SelectItem value="price-high" className="text-xs font-medium cursor-pointer">Price: High to Low</SelectItem>
                      <SelectItem value="rating" className="text-xs font-medium cursor-pointer">Top Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Active Filters Badges */}
            {(activeCategory || activeSize || activeColor || searchParams.search || searchParams.minPrice || searchParams.maxPrice) && (
              <div className="flex flex-wrap gap-2 py-4">
                {searchParams.search && (
                  <Badge variant="secondary" className="gap-1 px-3 py-1 rounded-full text-xs">
                    Search: {searchParams.search}
                    <button onClick={() => updateFilters({ search: "" })} className="hover:text-primary ml-1">×</button>
                  </Badge>
                )}
                {activeCategory && (
                  <Badge variant="secondary" className="gap-1 px-3 py-1 rounded-full text-xs">
                    Category: {CATEGORIES.find((c) => c.id === activeCategory)?.name || activeCategory}
                    <button onClick={() => updateFilters({ category: "" })} className="hover:text-primary ml-1">×</button>
                  </Badge>
                )}
                {activeSize && (
                  <Badge variant="secondary" className="gap-1 px-3 py-1 rounded-full text-xs">
                    Size: {activeSize}
                    <button onClick={() => updateFilters({ size: "" })} className="hover:text-primary ml-1">×</button>
                  </Badge>
                )}
                {activeColor && (
                  <Badge variant="secondary" className="gap-1 px-3 py-1 rounded-full text-xs">
                    Color: {activeColor}
                    <button onClick={() => updateFilters({ color: "" })} className="hover:text-primary ml-1">×</button>
                  </Badge>
                )}
                {(searchParams.minPrice !== undefined || searchParams.maxPrice !== undefined) && (
                  <Badge variant="secondary" className="gap-1 px-3 py-1 rounded-full text-xs">
                    Price: {formatPrice(searchParams.minPrice ?? minPriceInDb)} - {formatPrice(searchParams.maxPrice ?? maxPriceInDb)}
                    <button
                      onClick={() => {
                        setPriceRange([minPriceInDb, maxPriceInDb]);
                        updateFilters({ minPrice: undefined, maxPrice: undefined });
                      }}
                      className="hover:text-primary ml-1"
                    >
                      ×
                    </button>
                  </Badge>
                )}
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center py-20 px-4 gap-4 animate-fade-rise">
                <div className="text-5xl">🔍</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">No outfits found</h3>
                  <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                    We couldn&apos;t find any outfits matching your current filter criteria. Try adjusting your search or filters.
                  </p>
                </div>
                <Button onClick={resetFilters} variant="hero" className="mt-2 rounded-full">
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to="/product/$id"
                    params={{ id: String(product.id) }}
                    className="group"
                  >
                    <article className="luxury-panel overflow-hidden rounded-[1.6rem] relative flex flex-col h-full bg-card/30 hover:bg-card/75 transition-all duration-300">
                      {/* Product Image Section */}
                      <div className="overflow-hidden p-2.5 sm:p-3 relative">
                        <div className="luxury-outline overflow-hidden rounded-[1.25rem] bg-brand-pearl relative aspect-[4/5]">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                          />

                          {/* Wishlist Button Overlay */}
                          <button
                            onClick={(e) => handleWishlistToggle(e, product.id)}
                            className="absolute top-3 right-3 h-8.5 w-8.5 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow-md backdrop-blur-sm z-10 transition-transform active:scale-90"
                            aria-label="Add to Wishlist"
                          >
                            <Heart
                              className={`h-4.5 w-4.5 transition-colors ${
                                isInWishlist(product.id)
                                  ? "fill-destructive text-destructive"
                                  : "text-muted-foreground hover:text-foreground"
                              }`}
                            />
                          </button>

                          {/* Badge Overlay */}
                          {product.badge && (
                            <Badge className={`absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full ${
                              product.badge === "hot"
                                ? "bg-destructive text-destructive-foreground"
                                : product.badge === "sale"
                                ? "bg-primary text-primary-foreground"
                                : "bg-accent text-accent-foreground"
                            }`}>
                              {product.badge}
                            </Badge>
                          )}

                          {/* Hover Actions Panel (Desktops only) */}
                          <div className="absolute inset-0 bg-brand-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                            <Button
                              onClick={(e) => handleQuickAdd(e, product)}
                              size="sm"
                              className="rounded-full shadow-lg bg-background hover:bg-primary hover:text-primary-foreground text-foreground px-3.5 h-9 text-xs font-semibold gap-1.5 transition-transform"
                            >
                              <ShoppingBag className="h-3.5 w-3.5" />
                              Add
                            </Button>
                            <span className="rounded-full shadow-lg bg-background/90 text-foreground px-3 h-9 text-xs font-semibold flex items-center justify-center gap-1.5 transition-transform hover:bg-background">
                              <Eye className="h-3.5 w-3.5" />
                              View
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="px-4 pb-4 pt-1 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Rating & Fabric */}
                          <div className="flex items-center justify-between text-[11px] text-muted-foreground gap-1 flex-wrap">
                            <span className="font-semibold">{product.fabric}</span>
                            <span className="text-brand-gold flex items-center gap-0.5">
                              ⭐️ {product.rating.toFixed(1)}
                            </span>
                          </div>

                          <h3 className="font-semibold text-foreground text-sm sm:text-base mt-2 line-clamp-1 group-hover:text-primary transition-colors leading-tight">
                            {product.name}
                          </h3>
                        </div>

                        {/* Pricing and Quick Buy */}
                        <div className="flex items-center justify-between mt-3 gap-2 flex-wrap">
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-base font-bold text-foreground">
                              {formatPrice(product.discountPrice)}
                            </span>
                            <span className="text-xs text-muted-foreground line-through">
                              {formatPrice(product.price)}
                            </span>
                            <span className="text-[10px] text-primary font-semibold">
                              ({getDiscountPercent(product.price, product.discountPrice)}% off)
                            </span>
                          </div>

                          {/* Mobile quick add button */}
                          <Button
                            onClick={(e) => handleQuickAdd(e, product)}
                            size="icon"
                            variant="secondary"
                            className="lg:hidden h-8 w-8 rounded-full shadow-sm"
                            aria-label="Add to cart"
                          >
                            <ShoppingBag className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
