import React, { useState, useMemo, useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useStore } from "../hooks/use-store";
import { getProductById, getProductsByCategory, formatPrice, getDiscountPercent } from "../lib/products-db";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { createDbEnquiry, checkAdminAuth } from "../lib/api/products.functions";
import {
  Heart,
  ShoppingBag,
  Plus,
  Minus,
  MessageCircle,
  Truck,
  RotateCcw,
  ShieldCheck,
  Star,
  ChevronRight,
  Settings,
} from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/product/$id")({
  component: ProductDetails,
});

interface Review {
  name: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

function ProductDetails() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist, currentUser } = useStore();

  const product = useMemo(() => getProductById(id), [id]);

  if (!product) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center p-6 gap-4 animate-fade-rise">
        <div className="text-5xl">👗</div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Outfit Not Found</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-sm">
            The outfit you are looking for does not exist or has been removed from our catalog.
          </p>
        </div>
        <Button variant="hero" asChild className="rounded-full">
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  // Active selections
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "");
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || { name: "", hex: "" });
  const [quantity, setQuantity] = useState(1);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAdminAuth()
      .then((res) => {
        if (res.isAuthenticated) {
          setIsAdmin(true);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  // Reviews list state (initialized with mock reviews)
  const [reviewsList, setReviewsList] = useState<Review[]>([
    {
      name: "Roshni M.",
      rating: 5,
      date: "06/02/2026",
      title: "Perfect fitting & stunning color!",
      comment: `The outfit is absolutely beautiful. The fabric is soft and the gold embroidery is top notch. Fitting is exactly as expected, sizing chart is highly accurate.`,
      verified: true,
    },
    {
      name: "Sneha P.",
      rating: 5,
      date: "05/18/2026",
      title: "Extremely comfortable & premium quality",
      comment: "Very elegant look, I wore it for a family function and received so many compliments. Perfect blend of traditional and modern boutique styling.",
      verified: true,
    },
    {
      name: "Tanvi S.",
      rating: 4,
      date: "05/01/2026",
      title: "Lovely fabric, slight delay in shipping",
      comment: "Quality is 5 stars, really premium feel. Delivery took 4 days to Pune, but the customer support on WhatsApp was extremely friendly and kept me updated.",
      verified: true,
    },
  ]);

  // Review form state
  const [newReviewName, setNewReviewName] = useState("");
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewTitle, setNewReviewTitle] = useState("");
  const [newReviewComment, setNewReviewComment] = useState("");

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewComment.trim()) {
      toast.error("Please fill in your name and review content.");
      return;
    }

    const review: Review = {
      name: newReviewName.trim(),
      rating: newReviewRating,
      date: new Date().toLocaleDateString("en-US"),
      title: newReviewTitle.trim() || `${newReviewRating} Star Review`,
      comment: newReviewComment.trim(),
      verified: false,
    };

    setReviewsList([review, ...reviewsList]);
    setNewReviewName("");
    setNewReviewTitle("");
    setNewReviewComment("");
    setNewReviewRating(5);
    toast.success("Thank you! Your review has been submitted successfully.");
  };

  const handleQtyChange = (val: number) => {
    const newQty = quantity + val;
    if (newQty >= 1) setQuantity(newQty);
  };

  const handleAddToCart = () => {
    if (!currentUser) {
      toast.warning("Please sign in or register to add items to your cart.");
      navigate({ to: "/account" });
      return;
    }
    addToCart(product.id, selectedSize, selectedColor, quantity);
  };

  const handleBuyNow = () => {
    if (!currentUser) {
      toast.warning("Please sign in or register to buy items.");
      navigate({ to: "/account" });
      return;
    }
    addToCart(product.id, selectedSize, selectedColor, quantity);
    navigate({ to: "/checkout" });
  };

  // Related products
  const relatedProducts = useMemo(() => {
    return getProductsByCategory(product.category)
      .filter((p) => p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  return (
    <div className="min-h-screen bg-background text-foreground pb-16 pt-6 animate-fade-rise">
      {/* Breadcrumbs */}
      <div className="container-shell mb-8 text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 flex-wrap">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link to="/shop" search={{ category: product.category }} className="hover:text-primary transition-colors">
          {product.categoryName}
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
        <span className="text-foreground truncate max-w-[150px]">{product.name}</span>
      </div>

      <div className="container-shell">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 xl:gap-16 items-start">
          {/* Left Column: Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main Image Frame */}
            <div className="luxury-panel rounded-2xl overflow-hidden p-3 bg-card/30 relative">
              <div className="luxury-outline rounded-[1.25rem] bg-brand-pearl overflow-hidden aspect-[4/5] relative">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.04]"
                />

                {/* Wishlist Icon Overlay */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-4 right-4 h-10 w-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow-lg backdrop-blur-sm z-10 transition-transform active:scale-95"
                  aria-label="Wishlist"
                >
                  <Heart
                    className={`h-5 w-5 transition-colors ${
                      isInWishlist(product.id)
                        ? "fill-destructive text-destructive"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  />
                </button>

                {/* Badge Overlay */}
                {product.badge && (
                  <Badge className="absolute top-4 left-4 text-xs uppercase font-bold tracking-wider px-3.5 py-1 rounded-full bg-primary text-primary-foreground shadow-sm">
                    {product.badge}
                  </Badge>
                )}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3 justify-center">
                {product.images.map((img, idx) => (
                  <button
                    key={img}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`h-20 w-16 rounded-xl overflow-hidden border-2 transition-all bg-brand-pearl ${
                      activeImageIndex === idx
                        ? "border-primary scale-105 shadow-md"
                        : "border-border/60 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Specs */}
          <div className="flex flex-col gap-6">
            {/* Header info */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{product.categoryName}</p>
              <h1 className="text-3xl font-bold text-foreground mt-2 sm:text-4xl leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mt-3 flex-wrap">
                <span className="text-brand-gold font-bold flex items-center gap-1.5 text-sm">
                  {"★".repeat(Math.round(product.rating))}
                  {"☆".repeat(5 - Math.round(product.rating))}
                  <span className="text-muted-foreground text-xs font-semibold">
                    {product.rating.toFixed(1)} ({product.reviews} reviews)
                  </span>
                </span>
                <span className="h-4 w-px bg-border/60" />
                <span className="text-xs text-muted-foreground font-semibold">
                  Fabric: <strong className="text-foreground">{product.fabric}</strong>
                </span>
              </div>
            </div>

            {/* Price section */}
            <div className="p-4 rounded-2xl bg-secondary/35 border border-border/40 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-baseline gap-2.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-foreground">
                  {formatPrice(product.discountPrice)}
                </span>
                <span className="text-sm sm:text-base text-muted-foreground line-through">
                  {formatPrice(product.price)}
                </span>
                <Badge variant="default" className="rounded-full text-xs font-semibold ml-1.5 bg-primary text-primary-foreground">
                  Save {getDiscountPercent(product.price, product.discountPrice)}%
                </Badge>
              </div>
              <div className="text-xs text-success font-semibold flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-success inline-block" />
                {product.inStock ? "In Stock (Ready to Ship)" : "Out of Stock"}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-7 text-muted-foreground">
              {product.description}
            </p>

            {/* Sizing Section */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Select Size</h3>
                <span className="text-xs text-primary font-semibold hover:underline cursor-pointer">
                  Sizing Guide
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-10 min-w-[2.5rem] px-3.5 text-xs font-bold rounded-xl border transition-all ${
                      selectedSize === size
                        ? "bg-primary border-primary text-primary-foreground shadow-md scale-105"
                        : "border-border bg-card text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Section */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                Select Color: <strong className="text-foreground">{selectedColor.name}</strong>
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    title={color.name}
                    className={`h-9 w-9 rounded-full border transition-all relative flex items-center justify-center ${
                      selectedColor.name === color.name
                        ? "border-primary scale-110 shadow-md ring-2 ring-primary/20"
                        : "border-border/80 hover:scale-105"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {selectedColor.name === color.name && (
                      <span className="absolute w-2.5 h-2.5 rounded-full bg-white shadow-[0_1px_3.5px_rgba(0,0,0,0.5)]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">Quantity</h3>
              <div className="flex items-center border border-border/80 rounded-xl h-11 w-36 px-1.5 bg-card/40">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQtyChange(-1)}
                  className="h-8 w-8 rounded-lg hover:bg-secondary"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="flex-grow text-center text-sm font-bold text-foreground">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQtyChange(1)}
                  className="h-8 w-8 rounded-lg hover:bg-secondary"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Actions panel */}
            <div className="grid gap-3 mt-2 sm:grid-cols-2">
              <Button
                onClick={handleAddToCart}
                size="lg"
                variant="luxury"
                className="w-full bg-card hover:bg-secondary/40 text-foreground border-border/80 gap-2 h-12 rounded-full"
                disabled={!product.inStock}
              >
                <ShoppingBag className="h-4 w-4 text-primary" />
                Add to Bag
              </Button>
              <Button
                onClick={handleBuyNow}
                size="lg"
                variant="hero"
                className="w-full gap-2 h-12 rounded-full"
                disabled={!product.inStock}
              >
                Buy it Now
              </Button>
            </div>

            {isAdmin && (
              <Button
                asChild
                size="lg"
                className="w-full gap-2 h-12 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold transition-all"
              >
                <Link to="/admin/products/$id/edit" params={{ id: String(product.id) }} className="flex items-center justify-center gap-2">
                  <Settings className="h-4 w-4" />
                  Edit Outfit (Admin Mode)
                </Link>
              </Button>
            )}

            {/* Extra Trust Badges */}
            <div className="border-t border-border/60 pt-5 mt-3 grid gap-3.5 text-xs text-muted-foreground">
              <div className="flex items-center gap-3">
                <Truck className="h-4 w-4 text-primary shrink-0" />
                <span>Free Delivery across India on orders above ₹999</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-4 w-4 text-primary shrink-0" />
                <span>Easy exchanges within 7 days of delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                <span>100% Quality Assurance - Premium boutique fabric & finish</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews and Description Tabs */}
        <div className="mt-16 border-t border-border/50 pt-10">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-[550px] rounded-full bg-secondary/40 p-1 mb-8">
              <TabsTrigger value="details" className="rounded-full text-xs font-semibold py-2.5">Specifications</TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-full text-xs font-semibold py-2.5">
                Reviews ({reviewsList.length})
              </TabsTrigger>
              <TabsTrigger value="enquiry" className="rounded-full text-xs font-semibold py-2.5">
                Enquiry
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="animate-fade-rise">
              <Card className="luxury-panel rounded-2xl p-6 sm:p-8 border-border/50">
                <h3 className="text-lg font-bold text-foreground mb-4">Product Specifications</h3>
                <div className="grid gap-4 sm:grid-cols-2 text-sm leading-7">
                  <div className="grid grid-cols-[120px_minmax(0,1fr)] py-2.5 border-b border-border/30">
                    <span className="font-semibold text-muted-foreground">Fabric</span>
                    <span className="text-foreground">{product.fabric}</span>
                  </div>
                  <div className="grid grid-cols-[120px_minmax(0,1fr)] py-2.5 border-b border-border/30">
                    <span className="font-semibold text-muted-foreground">Category</span>
                    <span className="text-foreground">{product.categoryName}</span>
                  </div>
                  <div className="grid grid-cols-[120px_minmax(0,1fr)] py-2.5 border-b border-border/30">
                    <span className="font-semibold text-muted-foreground">Sizes</span>
                    <span className="text-foreground">{product.sizes.join(", ")}</span>
                  </div>
                  <div className="grid grid-cols-[120px_minmax(0,1fr)] py-2.5 border-b border-border/30">
                    <span className="font-semibold text-muted-foreground">Fit Type</span>
                    <span className="text-foreground">Regular Boutique Fit</span>
                  </div>
                  <div className="grid grid-cols-[120px_minmax(0,1fr)] py-2.5 border-b border-border/30 sm:border-none">
                    <span className="font-semibold text-muted-foreground">Wash Care</span>
                    <span className="text-foreground">Dry Clean Recommended / Gentle Hand Wash</span>
                  </div>
                  <div className="grid grid-cols-[120px_minmax(0,1fr)] py-2.5 sm:border-none">
                    <span className="font-semibold text-muted-foreground">Craftsmanship</span>
                    <span className="text-foreground">Exclusive handwork detailing & borders</span>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="animate-fade-rise">
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
                {/* Reviews List */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-xl font-bold text-foreground">Customer Love & Rating</h3>
                  <div className="flex flex-col gap-4">
                    {reviewsList.map((rev, index) => (
                      <div
                        key={index}
                        className="p-5 rounded-2xl border border-border/40 bg-card/30 flex flex-col gap-2.5"
                      >
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm text-foreground">{rev.name}</span>
                            {rev.verified && (
                              <Badge className="bg-success/15 hover:bg-success/20 text-success text-[9px] uppercase tracking-wider font-bold rounded-md px-1.5 py-0.5 border border-success/30">
                                Verified Buyer
                              </Badge>
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground font-semibold">{rev.date}</span>
                        </div>
                        <div className="flex text-brand-gold text-xs">
                          {"★".repeat(rev.rating)}
                          {"☆".repeat(5 - rev.rating)}
                        </div>
                        <h4 className="font-bold text-foreground text-sm">{rev.title}</h4>
                        <p className="text-xs sm:text-sm leading-6 text-muted-foreground">
                          {rev.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Review Form */}
                <Card className="luxury-panel rounded-2xl p-6 border-border/50">
                  <h3 className="text-lg font-bold text-foreground mb-4">Write a Review</h3>
                  <form onSubmit={handleReviewSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Your Name</label>
                      <Input
                        type="text"
                        placeholder="Enter your name"
                        value={newReviewName}
                        onChange={(e) => setNewReviewName(e.target.value)}
                        className="mt-1 rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Rating</label>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setNewReviewRating(star)}
                            className="text-xl transition-transform hover:scale-110"
                          >
                            <Star
                              className={`h-6 w-6 ${
                                star <= newReviewRating
                                  ? "fill-brand-gold text-brand-gold"
                                  : "text-muted/60"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Review Title</label>
                      <Input
                        type="text"
                        placeholder="Give your review a title"
                        value={newReviewTitle}
                        onChange={(e) => setNewReviewTitle(e.target.value)}
                        className="mt-1 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Review Comments</label>
                      <Textarea
                        placeholder="Write your review comments here..."
                        value={newReviewComment}
                        onChange={(e) => setNewReviewComment(e.target.value)}
                        className="mt-1 rounded-xl min-h-[100px]"
                        required
                      />
                    </div>
                    <Button type="submit" variant="hero" className="w-full mt-2 rounded-full h-11">
                      Submit Review
                    </Button>
                  </form>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="enquiry" className="animate-fade-rise">
              <ProductEnquiryForm product={product} />
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 border-t border-border/50 pt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  to="/product/$id"
                  params={{ id: String(rel.id) }}
                  className="group"
                >
                  <article className="luxury-panel overflow-hidden rounded-[1.35rem] relative flex flex-col h-full bg-card/30 hover:bg-card/75 transition-all duration-300">
                    <div className="overflow-hidden p-2 sm:p-2.5 relative aspect-[4/5] bg-brand-pearl rounded-[1.1rem] m-2">
                      <img
                        src={rel.images[0]}
                        alt={rel.name}
                        className="w-full h-full object-cover object-top rounded-[0.9rem] transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="px-3 pb-3 pt-1 flex-1 flex flex-col justify-between">
                      <h3 className="font-semibold text-foreground text-sm line-clamp-1 group-hover:text-primary transition-colors leading-tight">
                        {rel.name}
                      </h3>
                      <div className="flex items-baseline gap-1.5 mt-2">
                        <span className="text-sm font-bold text-foreground">
                          {formatPrice(rel.discountPrice)}
                        </span>
                        <span className="text-[10px] text-muted-foreground line-through">
                          {formatPrice(rel.price)}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface ProductEnquiryFormProps {
  product: { id: number; name: string };
}

function ProductEnquiryForm({ product }: ProductEnquiryFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(
    `Hi, I would like to inquire about the "${product.name}" (ID: ${product.id}). Please provide more details on availability and sizing.`
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const toastId = toast.loading("Submitting enquiry...");
    try {
      const res = await createDbEnquiry({
        data: {
          name,
          email,
          phone,
          message,
          productReference: `${product.name} (ID: ${product.id})`,
        },
      });

      if (res.success) {
        toast.success("Enquiry submitted successfully! We will contact you soon.", { id: toastId });
        setName("");
        setEmail("");
        setPhone("");
      } else {
        toast.error("Failed to submit enquiry. Please try again.", { id: toastId });
      }
    } catch (err) {
      console.error(err);
      toast.error("Connection failed.", { id: toastId });
    }
  };

  return (
    <Card className="luxury-panel rounded-2xl p-6 sm:p-8 border-border/50 max-w-xl mx-auto">
      <h3 className="text-xl font-bold text-foreground mb-1">Product Enquiry</h3>
      <p className="text-xs text-muted-foreground mb-6">Ask us anything about this outfit's fabric, fit, customization, or delivery time.</p>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name *</label>
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl h-10 text-sm font-medium"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address *</label>
            <Input
              type="email"
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl h-10 text-sm font-medium"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number</label>
          <Input
            type="tel"
            placeholder="Your mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-xl h-10 text-sm font-medium"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Your Message *</label>
          <Textarea
            placeholder="What would you like to know?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-xl min-h-[100px] text-sm"
            required
          />
        </div>

        <Button type="submit" variant="hero" className="w-full mt-2 rounded-full h-11 text-xs font-bold gap-2">
          Submit Enquiry
        </Button>
      </form>
    </Card>
  );
}
