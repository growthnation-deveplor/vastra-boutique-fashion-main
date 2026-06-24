import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useStore } from "../hooks/use-store";
import { getProductById, formatPrice } from "../lib/products-db";
import { checkAdminAuth } from "../lib/api/products.functions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  ShoppingBag,
  Heart,
  User,
  Search,
  Menu,
  Plus,
  Minus,
  Trash2,
  LogOut,
  MapPin,
  ClipboardList,
  Settings,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const {
    cart,
    wishlist,
    currentUser,
    logoutUser,
    updateCartQuantity,
    removeFromCart,
    cartCount,
    cartSubtotal,
  } = useStore();

  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAdminAuth()
      .then((res) => {
        if (res.isAuthenticated) {
          setIsAdmin(true);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate({
        to: "/shop",
        search: { search: searchQuery.trim() },
      });
      setSearchQuery("");
    }
  };

  const handleCartItemQuantity = (
    productId: number,
    size: string,
    colorName: string,
    change: number,
    currentQty: number
  ) => {
    updateCartQuantity(productId, size, colorName, currentQty + change);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      {/* Announcement Bar */}
      <div className="bg-[#2F1B12] text-[#E5D5C5] text-[10px] sm:text-xs py-2 px-4 text-center font-bold tracking-widest flex items-center justify-center gap-2 uppercase">
        <span>🚚 Free Shipping on Orders Above ₹1999</span>
      </div>

      <div className="container-shell flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Vastra Butique Logo"
            className="h-16 w-auto max-h-[64px] shrink-0 object-contain"
          />
          <div className="hidden sm:block">
            <p className="text-xl font-semibold leading-tight text-foreground">Vastra Butique</p>
            <p className="text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
              Girls Fashion Boutique
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            activeProps={{ className: "text-primary font-semibold" }}
            inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
            className="text-sm font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to="/shop"
            activeProps={{ className: "text-primary font-semibold" }}
            inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
            className="text-sm font-medium transition-colors"
          >
            Shop Collection
          </Link>
          <Link
            to="/about"
            activeProps={{ className: "text-primary font-semibold" }}
            inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
            className="text-sm font-medium transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            activeProps={{ className: "text-primary font-semibold" }}
            inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
            className="text-sm font-medium transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Actions (Search, Wishlist, Account, Cart, Mobile Menu) */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search bar */}
          <form onSubmit={handleSearchSubmit} className="relative hidden lg:block w-48 xl:w-60">
            <Input
              type="text"
              placeholder="Search outfits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-8 h-9 rounded-full bg-secondary/50 border-none placeholder:text-muted-foreground/60 text-xs"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>

          {/* Wishlist Link */}
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link to="/wishlist" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 min-w-0 rounded-full flex items-center justify-center p-0 text-[10px] bg-primary text-primary-foreground">
                  {wishlist.length}
                </Badge>
              )}
            </Link>
          </Button>

          {/* Account Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Account Menu">
                <User className={`h-5 w-5 ${currentUser ? "text-primary" : ""}`} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 mt-2 luxury-panel rounded-xl">
              {isAdmin && (
                <>
                  <DropdownMenuItem asChild className="hover:bg-accent/40 cursor-pointer text-primary font-bold">
                    <Link to="/admin" className="w-full flex items-center gap-2">
                      <Settings className="h-4 w-4 text-primary" />
                      Admin Console
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-border/60" />
                </>
              )}
              {currentUser ? (
                <>
                  <DropdownMenuLabel className="font-semibold text-foreground">
                    <p className="text-sm">{currentUser.name}</p>
                    <p className="text-xs text-muted-foreground font-normal truncate">
                      {currentUser.email}
                    </p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-border/60" />
                  <DropdownMenuItem asChild className="hover:bg-accent/40 cursor-pointer">
                    <Link to="/account" className="w-full flex items-center gap-2">
                      <User className="h-4 w-4" />
                      My Profile & Addresses
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-accent/40 cursor-pointer">
                    <Link to="/account" search={{ tab: "orders" }} className="w-full flex items-center gap-2">
                      <ClipboardList className="h-4 w-4" />
                      Order History
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-border/60" />
                  <DropdownMenuItem
                    onClick={logoutUser}
                    className="text-destructive hover:bg-destructive/10 focus:text-destructive cursor-pointer flex items-center gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuLabel className="font-semibold text-foreground text-sm">
                    Welcome to Vastra
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-border/60" />
                  <DropdownMenuItem asChild className="hover:bg-accent/40 cursor-pointer font-medium">
                    <Link to="/account" className="w-full text-center">
                      Login / Register
                    </Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Cart Drawer */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative" aria-label="Shopping Cart">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 min-w-0 rounded-full flex items-center justify-center p-0 text-[10px] bg-primary text-primary-foreground">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md flex flex-col luxury-panel h-full border-l border-border/60 bg-background/95 backdrop-blur-xl">
              <SheetHeader className="pb-4 border-b border-border/60">
                <SheetTitle className="text-2xl font-bold flex items-center gap-2 text-foreground">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                  Your Bag ({cartCount})
                </SheetTitle>
              </SheetHeader>

              {cart.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-6 gap-4 animate-fade-rise">
                  <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center text-3xl">
                    🛍️
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Your bag is empty</h3>
                    <p className="text-sm text-muted-foreground mt-1 max-w-xs">
                      Looks like you haven&apos;t added anything to your cart yet.
                    </p>
                  </div>
                  <SheetClose asChild>
                    <Button variant="hero" size="lg" asChild className="mt-2">
                      <Link to="/shop">Explore Collection</Link>
                    </Button>
                  </SheetClose>
                </div>
              ) : (
                <>
                  <ScrollArea className="flex-1 -mx-6 px-6 py-4">
                    <div className="flex flex-col gap-4">
                      {cart.map((item) => {
                        const product = getProductById(item.productId);
                        if (!product) return null;

                        return (
                          <div
                            key={`${item.productId}-${item.size}-${item.color.name}`}
                            className="flex gap-4 p-3 rounded-xl border border-border/40 bg-card/40 hover:bg-card/85 transition-colors"
                          >
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-20 h-24 object-cover object-top rounded-lg border border-border/40 bg-brand-pearl"
                            />
                            <div className="flex-1 flex flex-col justify-between min-w-0">
                              <div>
                                <h4 className="font-semibold text-foreground text-sm truncate leading-snug">
                                  {product.name}
                                </h4>
                                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-2 flex-wrap">
                                  <span>Size: <strong className="text-foreground">{item.size}</strong></span>
                                  <span className="h-2.5 w-0.5 bg-border" />
                                  <span className="flex items-center gap-1">
                                    Color:
                                    <span
                                      className="inline-block w-2.5 h-2.5 rounded-full border border-black/10"
                                      style={{ backgroundColor: item.color.hex }}
                                    />
                                    <strong className="text-foreground">{item.color.name}</strong>
                                  </span>
                                </p>
                              </div>

                              <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center border border-border/80 rounded-full h-8 px-1 bg-background">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() =>
                                      handleCartItemQuantity(
                                        item.productId,
                                        item.size,
                                        item.color.name,
                                        -1,
                                        item.quantity
                                      )
                                    }
                                    className="h-6 w-6 rounded-full hover:bg-secondary"
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="w-8 text-center text-xs font-semibold text-foreground">
                                    {item.quantity}
                                  </span>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() =>
                                      handleCartItemQuantity(
                                        item.productId,
                                        item.size,
                                        item.color.name,
                                        1,
                                        item.quantity
                                      )
                                    }
                                    className="h-6 w-6 rounded-full hover:bg-secondary"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>

                                <div className="text-right">
                                  <p className="font-semibold text-foreground text-sm">
                                    {formatPrice(product.discountPrice * item.quantity)}
                                  </p>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() =>
                                      removeFromCart(item.productId, item.size, item.color.name)
                                    }
                                    className="h-7 w-7 text-muted-foreground hover:text-destructive rounded-full"
                                  >
                                    <Trash2 className="h-3.5 w-3.5" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </ScrollArea>

                  {/* Summary & Checkout */}
                  <div className="border-t border-border/60 pt-4 mt-auto flex flex-col gap-4">
                    <div className="flex justify-between items-center text-foreground font-semibold">
                      <span>Subtotal</span>
                      <span className="text-xl text-primary">{formatPrice(cartSubtotal)}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-normal">
                      Shipping, taxes, and discounts will be calculated during checkout. Free shipping on orders above ₹999.
                    </p>
                    <div className="grid gap-2">
                      <SheetClose asChild>
                        <Button variant="hero" size="lg" asChild className="w-full">
                          <Link to="/checkout">Proceed to Checkout</Link>
                        </Button>
                      </SheetClose>
                      <SheetClose asChild>
                        <Button variant="luxury" size="lg" asChild className="w-full bg-transparent hover:bg-secondary/40 text-foreground">
                          <Link to="/cart">View Full Cart Details</Link>
                        </Button>
                      </SheetClose>
                    </div>
                  </div>
                </>
              )}
            </SheetContent>
          </Sheet>

          {/* Mobile Menu Icon */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl px-4 py-4 flex flex-col gap-3 shadow-lg animate-fade-rise">
          {/* Mobile Search bar */}
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <Input
              type="text"
              placeholder="Search outfits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-8 h-10 w-full rounded-full bg-secondary/50 border-none placeholder:text-muted-foreground/60 text-sm"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>

          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            activeProps={{ className: "text-primary font-semibold pl-2 border-l-2 border-primary" }}
            inactiveProps={{ className: "text-muted-foreground hover:text-foreground pl-2" }}
            className="text-sm font-medium transition-all py-1.5"
          >
            Home
          </Link>
          <Link
            to="/shop"
            onClick={() => setIsMobileMenuOpen(false)}
            activeProps={{ className: "text-primary font-semibold pl-2 border-l-2 border-primary" }}
            inactiveProps={{ className: "text-muted-foreground hover:text-foreground pl-2" }}
            className="text-sm font-medium transition-all py-1.5"
          >
            Shop Collection
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMobileOpen(false)}
            activeProps={{ className: "text-primary font-semibold pl-2 border-l-2 border-primary" }}
            inactiveProps={{ className: "text-muted-foreground hover:text-foreground pl-2" }}
            className="text-sm font-medium transition-all py-1.5"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            activeProps={{ className: "text-primary font-semibold pl-2 border-l-2 border-primary" }}
            inactiveProps={{ className: "text-muted-foreground hover:text-foreground pl-2" }}
            className="text-sm font-medium transition-all py-1.5"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};
