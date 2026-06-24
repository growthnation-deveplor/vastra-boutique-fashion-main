import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { useStore } from "../hooks/use-store";
import { PRODUCTS, CATEGORIES, formatPrice, getDiscountPercent } from "../lib/products-db";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
const purpleLook = { url: "/images/hero/hero-purple-gown.jpeg" };
const ivoryLook = { url: "/images/hero/hero-ivory-suit.jpeg" };
const customLook = { url: "/images/hero/hero-custom.png" };
const redKurta = { url: "/images/products/red-cotton-kurta-set.jpeg" };
const pinkKurta = { url: "/images/products/pink-cotton-kurta-set.jpeg" };
const oliveSet = { url: "/images/products/olive-cotton-kurta-set.jpeg" };
const magentaKids = { url: "/images/products/magenta-kids-lehenga.jpeg" };
const burgundyGown = { url: "/images/products/burgundy-kids-gown.jpeg" };
const mintKids = { url: "/images/products/mint-kids-lehenga.jpeg" };
const sageRomper = { url: "/images/products/sage-kids-romper.jpeg" };
const navyDress = { url: "/images/products/navy-kids-dress.jpeg" };
import { Heart, ShoppingBag, Eye, Star, ArrowRight, Sparkles, Scissors, Flower, Layers, Crown, ShieldCheck, Truck } from "lucide-react";

const siteUrl = "https://vastrabutique.shop";
const whatsappUrl = "https://wa.me/917976396802";
const callUrl = "tel:+917976396802";
const floatingMessage = encodeURIComponent(
  "Hi Vastra Butique, I want to know more about your collection."
);

const highlights = [
  "Premium Boutique Collection",
  "Trendy & Stylish Fashion",
  "Affordable Pricing",
  "Quality Fabric",
  "Comfortable Wear",
  "Fashion Carefully Selected",
];

const reasons = [
  {
    title: "Trendy Fashion Collection",
    text: "Modern silhouettes and updated styles chosen for girls who love to stand out with confidence.",
  },
  {
    title: "Premium Quality Fabrics",
    text: "Soft-touch materials, elegant finishes and quality-first selections for premium everyday wear.",
  },
  {
    title: "Stylish & Comfortable Designs",
    text: "Every piece balances graceful style with comfort so girls feel beautiful and at ease all day.",
  },
  {
    title: "Ethnic + Western Variety",
    text: "From festive ethnic sets to western looks and casual outfits, the collection covers every mood.",
  },
  {
    title: "Boutique Fashion Experience",
    text: "Curated collections, tasteful styling and premium presentation create a true boutique shopping feel.",
  },
  {
    title: "Personalized Customer Support",
    text: "Quick replies on WhatsApp and friendly guidance help customers choose the right outfit with ease.",
  },
];

const homeCategories = [
  {
    title: "Women's Designer Blouses",
    description: "Handcrafted boutique blouses with premium embroidery.",
    image: purpleLook.url,
    category: "party-wear",
    icon: <Scissors className="h-5 w-5 text-[#B89047]" />,
  },
  {
    title: "Banarasi Blouses",
    description: "Elegant Banarasi silk blouses with traditional patterns.",
    image: ivoryLook.url,
    category: "ethnic-wear",
    icon: <Flower className="h-5 w-5 text-[#B89047]" />,
  },
  {
    title: "Kids Dresses",
    subtitle: "(6 Months – 12 Years)",
    description: "Cute and stylish boutique dresses for young girls.",
    image: magentaKids.url,
    category: "party-wear",
    icon: <Layers className="h-5 w-5 text-[#B89047]" />,
  },
  {
    title: "Festive Collection",
    description: "Special occasion outfits for premium ethnic styling.",
    image: customLook.url,
    category: "boutique-collection",
    icon: <Sparkles className="h-5 w-5 text-[#B89047]" />,
  },
];

const lookbookImages = [
  {
    image: redKurta.url,
    alt: "Red boutique kurta set for girls.",
  },
  {
    image: mintKids.url,
    alt: "Mint boutique skirt set for girls with heart details.",
  },
  {
    image: sageRomper.url,
    alt: "Sage green girls romper styled as boutique casual wear.",
  },
  {
    image: navyDress.url,
    alt: "Young girl wearing a navy embroidered dress outdoors.",
  },
];

const testimonials = [
  {
    name: "Happy Customer",
    quote: "Beautiful dresses and amazing quality. My daughter loved the collection!",
    rating: 5,
  },
  {
    name: "Boutique Shopper",
    quote: "Very stylish outfits at affordable prices. Highly recommended.",
    rating: 5,
  },
  {
    name: "Returning Customer",
    quote: "Best boutique collection for girls fashion in Jaipur.",
    rating: 5,
  },
];

const boutiqueSchema = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "Vastra Butique",
  url: siteUrl,
  email: "Lekhrajsharma2129@gmail.com",
  telephone: "+91 7976396802",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 7976396802",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  founder: "Soniya Sharma",
  description:
    "Premium girls fashion boutique offering trendy dresses, ethnic wear, western outfits, party wear and boutique special collections.",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vastra Butique | Premium Girls Fashion Boutique" },
      {
        name: "description",
        content:
          "Shop premium girls fashion at Vastra Butique — trendy dresses, ethnic wear, western wear, party looks and stylish boutique collections with online checkout.",
      },
      { property: "og:title", content: "Vastra Butique | Premium Girls Fashion Boutique" },
      {
        property: "og:description",
        content:
          "Discover beautiful, stylish and premium boutique outfits for girls with secure ordering and luxury-inspired presentation.",
      },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: purpleLook.url },
      { name: "twitter:image", content: purpleLook.url },
    ],
  }),
  component: Index,
});

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center animate-fade-rise">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl leading-none font-semibold text-foreground sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">{text}</p>
    </div>
  );
}

function Index() {
  const { toggleWishlist, isInWishlist, addToCart, currentUser, products } = useStore();
  const navigate = useNavigate();

  const heroImages = [
    customLook.url,
    purpleLook.url,
    ivoryLook.url,
    redKurta.url,
    pinkKurta.url,
    oliveSet.url,
    magentaKids.url,
    burgundyGown.url,
    mintKids.url,
    sageRomper.url,
    navyDress.url,
  ];

  const [heroImageIdx, setHeroImageIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Curated slider looks on the right side of the hero section
  const featuredLooks = [
    { url: customLook.url, title: "Designer Signature Outfit", id: "1" },
    { url: purpleLook.url, title: "Royal Festive Dress", id: "1" },
    { url: ivoryLook.url, title: "Ivory Silk Suit Set", id: "2" },
    { url: pinkKurta.url, title: "Premium Pink Kurta Set", id: "4" },
    { url: burgundyGown.url, title: "Burgundy Velvet Gown", id: "5" },
    { url: magentaKids.url, title: "Magenta Kids Lehenga", id: "8" },
  ];

  const [featuredLookIdx, setFeaturedLookIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setFeaturedLookIdx((prev) => (prev + 1) % featuredLooks.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [featuredLooks.length]);

  // Grab trending outfits from database for the products slider
  const trendingOutfits = products.filter((p) => p.badge === "trending" || p.badge === "hot" || p.isFeatured).slice(0, 6);

  const handleWishlistToggle = (e: React.MouseEvent, productId: number) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(productId);
  };

  const handleQuickAdd = (e: React.MouseEvent, product: typeof PRODUCTS[0]) => {
    e.preventDefault();
    e.stopPropagation();
    if (!currentUser) {
      toast.warning("Please sign in or register to add items to your cart.");
      navigate({ to: "/account" });
      return;
    }
    addToCart(product.id, product.sizes[0], product.colors[0], 1);
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(boutiqueSchema)}</script>

      <div className="relative overflow-x-hidden text-foreground pb-12">
        <main>
          {/* Hero Section */}
          <section id="home" className="section-shell relative isolate overflow-hidden">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              {/* Sliding background images */}
              {heroImages.map((img, idx) => (
                <div
                  key={img}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    idx === heroImageIdx ? "opacity-22" : "opacity-0"
                  }`}
                >
                  <img
                    src={img}
                    alt="Background slide"
                    className="w-full h-full object-cover filter blur-[2px] animate-kenburns"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
                </div>
              ))}
              <div className="absolute left-[-8rem] top-20 h-64 w-64 rounded-full bg-brand-rose/25 blur-3xl" />
              <div className="absolute right-[-6rem] top-10 h-72 w-72 rounded-full bg-brand-gold/30 blur-3xl" />
              <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
            </div>

            <div className="container-shell grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] pt-8 pb-12">
              {/* Image Slider (now on the left) */}
              <div className="relative min-h-[34rem] animate-fade-rise flex items-center justify-center">
                <div className="relative overflow-hidden rounded-[1.6rem] shadow-[var(--shadow-luxury)] aspect-[4/5] w-full max-w-[420px]">
                  <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-white/95 font-bold z-20 drop-shadow-md">
                    <span>Signature edit</span>
                    <span>Vastra Signature</span>
                  </div>
                  <div className="relative w-full h-full overflow-hidden bg-brand-pearl">
                    {featuredLooks.map((look, idx) => (
                      <div
                        key={look.url}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                          idx === featuredLookIdx ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                        }`}
                      >
                        <img
                          src={look.url}
                          alt={look.title}
                          className="w-full h-full object-cover object-top"
                          fetchPriority={idx === 0 ? "high" : "low"}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/40 bg-background/85 p-4 backdrop-blur-xl z-20 shadow-lg">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-[10px] font-bold uppercase tracking-[0.24em] text-[#B89047]">
                          Signature boutique look
                        </p>
                        <p className="mt-1 truncate text-base font-extrabold text-[#2F1B12] transition-all duration-300">
                          {featuredLooks[featuredLookIdx].title}
                        </p>
                      </div>
                      <Button variant="hero" size="sm" asChild className="rounded-full bg-[#2F1B12] text-white hover:bg-[#432A1F] h-8 text-[10px] px-3 font-bold border-0">
                        <Link to="/product/$id" params={{ id: featuredLooks[featuredLookIdx].id }}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Block (now on the right) */}
              <div className="max-w-2xl animate-fade-rise text-center lg:text-right flex flex-col items-center lg:items-end">
                <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#B89047]">
                  Exquisite Ethnic Elegance
                </p>
                <h1 className="mt-4 font-display text-5xl leading-tight font-medium text-[#2F1B12] sm:text-6xl lg:text-7.5xl text-balance">
                  Timeless Luxury for
                  <br />
                  <span className="font-display italic text-[#B89047] font-semibold">Every Woman</span>
                </h1>
                <div className="my-5 flex items-center justify-center lg:justify-end gap-2.5 text-[#B89047]/70">
                  <div className="h-[1px] w-10 bg-current" />
                  <span className="text-[10px] transform rotate-45">✦</span>
                  <div className="h-[1px] w-10 bg-current" />
                </div>
                <p className="max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground font-semibold">
                  Hand‑crafted blouses, couture kids wear, and exclusive boutique collections that celebrate heritage with modern flair.
                </p>
                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row w-full sm:w-auto">
                  <Button
                    variant="hero"
                    size="lg"
                    asChild
                    className="rounded-none bg-[#2F1B12] text-white hover:bg-[#432A1F] uppercase tracking-[0.2em] text-[10px] font-bold py-4 px-8 h-auto border-0 cursor-pointer shadow-md"
                  >
                    <Link to="/shop">Shop Now</Link>
                  </Button>
                  <Button
                    variant="luxury"
                    size="lg"
                    asChild
                    className="rounded-none bg-transparent hover:bg-[#2F1B12]/5 text-[#2F1B12] border border-[#2F1B12] uppercase tracking-[0.2em] text-[10px] font-bold py-4 px-8 h-auto cursor-pointer"
                  >
                    <Link to="/shop">Explore Collection</Link>
                  </Button>
                </div>
              </div>

              {/* Slider Dots Indicator */}
              <div className="mt-10 flex items-center gap-2">
                {featuredLooks.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setFeaturedLookIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === featuredLookIdx ? "w-6 bg-[#2F1B12]" : "w-2 bg-[#2F1B12]/20 hover:bg-[#2F1B12]/40"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="section-shell border-y border-border/60 bg-card/30">
            <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="About Vastra Butique"
                  title="A boutique story built on confidence, comfort and style."
                  text="Vastra Butique was created with a passion for bringing trendy, stylish and comfortable fashion for girls. We believe fashion is not only about clothes — it’s about confidence, personality and style. From trendy western wear to beautiful ethnic collections, we carefully curate stylish outfits designed especially for young girls who love fashion."
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((highlight, index) => (
                  <div
                    key={highlight}
                    className="luxury-panel rounded-xl p-5 animate-fade-rise"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    <p className="text-base font-bold text-foreground">{highlight}</p>
                    <p className="mt-2 text-xs leading-6 text-muted-foreground font-semibold">
                      Thoughtfully selected to deliver a premium boutique shopping experience.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Category Collection Grid */}
          <section id="collection" className="section-shell bg-[#FAF7F2]/30 border-t border-border/50">
            <div className="container-shell">
              <div className="mx-auto max-w-3xl text-center mb-12 animate-fade-rise">
                <h2 className="text-2xl sm:text-3xl font-display font-medium uppercase tracking-[0.2em] text-[#2F1B12] flex items-center justify-center gap-3">
                  <span className="text-[#B89047] text-lg sm:text-xl">⤛</span>
                  Shop By Category
                  <span className="text-[#B89047] text-lg sm:text-xl">⤜</span>
                </h2>
              </div>

              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {homeCategories.map((product, index) => (
                  <Link
                    key={product.title}
                    to="/shop"
                    search={{ category: product.category }}
                    className="group flex flex-col items-center animate-fade-rise hover:no-underline"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    {/* Image container with rounded top and floating icon */}
                    <div className="relative w-full aspect-[4/5] rounded-t-[2.5rem] overflow-hidden bg-brand-pearl shadow-md">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                        loading="lazy"
                      />
                      {/* Floating Circle Icon */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#B89047]/50 shadow-md flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
                        {product.icon}
                      </div>
                    </div>

                    {/* Centered text descriptions */}
                    <div className="mt-8 text-center px-2 flex flex-col items-center">
                      <h3 className="text-base font-display font-bold text-[#2F1B12] group-hover:text-[#B89047] transition-colors leading-tight">
                        {product.title}
                      </h3>
                      {product.subtitle && (
                        <p className="mt-1 text-[11px] font-semibold text-[#B89047] uppercase tracking-wider">
                          {product.subtitle}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Highlights Row Section */}
          <section className="py-12 bg-[#FAF7F2] border-y border-border/60">
            <div className="container-shell">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-border/60">
                {[
                  {
                    icon: <Crown className="h-7 w-7 text-[#B89047]" />,
                    title: "Premium Quality",
                    desc: "Finest fabrics & perfect stitching",
                  },
                  {
                    icon: <Scissors className="h-7 w-7 text-[#B89047]" />,
                    title: "Custom Stitching",
                    desc: "Made just for you",
                  },
                  {
                    icon: <Heart className="h-7 w-7 text-[#B89047]" />,
                    title: "Handmade Designs",
                    desc: "Unique designs crafted with love",
                  },
                  {
                    icon: <ShieldCheck className="h-7 w-7 text-[#B89047]" />,
                    title: "Secure Payments",
                    desc: "100% safe & trusted",
                  },
                  {
                    icon: <Truck className="h-7 w-7 text-[#B89047]" />,
                    title: "Fast Delivery",
                    desc: "Quick delivery at your doorstep",
                  },
                ].map((item, idx) => (
                  <div 
                    key={item.title} 
                    className={`flex flex-col items-center text-center px-4 animate-fade-rise ${
                      idx % 2 === 1 && idx < 2 ? "pt-0" : idx >= 2 ? "pt-6 md:pt-0" : "pt-0"
                    }`}
                    style={{ animationDelay: `${idx * 70}ms` }}
                  >
                    <div className="mb-3.5 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#2F1B12] font-display">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground font-semibold max-w-[160px]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Trending Outfits Real Products Section */}
          {trendingOutfits.length > 0 && (
            <section className="section-shell bg-secondary/20 border-y border-border/50">
              <div className="container-shell">
                <SectionHeading
                  eyebrow="Trending Outfits"
                  title="Popular boutique picks this week"
                  text="Find the most highly reviewed and trending ethnic & western wear hand-selected by Soniya Sharma."
                />

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                  {trendingOutfits.map((product) => (
                    <Link
                      key={product.id}
                      to="/product/$id"
                      params={{ id: String(product.id) }}
                      className="group"
                    >
                      <article className="luxury-panel overflow-hidden rounded-[1.6rem] relative flex flex-col h-full bg-card/40 hover:bg-card transition-all duration-300">
                        {/* Image */}
                        <div className="overflow-hidden p-2.5 sm:p-3 relative">
                          <div className="luxury-outline overflow-hidden rounded-[1.25rem] bg-brand-pearl aspect-[4/5] relative">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                            />

                            {/* Wishlist Icon Overlay */}
                            <button
                              onClick={(e) => handleWishlistToggle(e, product.id)}
                              className="absolute top-3 right-3 h-8.5 w-8.5 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow-md backdrop-blur-sm z-10"
                            >
                              <Heart
                                className={`h-4.5 w-4.5 transition-colors ${
                                  isInWishlist(product.id)
                                    ? "fill-destructive text-destructive"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                              />
                            </button>

                            {/* Hover overlay icons */}
                            <div className="absolute inset-0 bg-brand-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                              <Button
                                onClick={(e) => handleQuickAdd(e, product)}
                                size="sm"
                                className="rounded-full shadow-lg bg-background hover:bg-primary hover:text-primary-foreground text-foreground px-3.5 h-9 text-xs font-semibold gap-1.5"
                              >
                                <ShoppingBag className="h-3.5 w-3.5" />
                                Add
                              </Button>
                              <span className="rounded-full shadow-lg bg-background/90 text-foreground px-3 h-9 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-background">
                                <Eye className="h-3.5 w-3.5" />
                                View
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="px-4 pb-4 pt-1 flex-grow flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between text-[11px] text-muted-foreground font-semibold">
                              <span>{product.fabric}</span>
                              <span className="text-brand-gold flex items-center gap-0.5">⭐ {product.rating}</span>
                            </div>
                            <h3 className="font-semibold text-foreground text-sm sm:text-base mt-2 line-clamp-1 group-hover:text-primary transition-colors leading-tight">
                              {product.name}
                            </h3>
                          </div>

                          <div className="flex items-center justify-between mt-3 gap-2 flex-wrap">
                            <div className="flex items-baseline gap-1">
                              <span className="text-base font-bold text-foreground">
                                {formatPrice(product.discountPrice)}
                              </span>
                              <span className="text-[10px] text-muted-foreground line-through ml-1">
                                {formatPrice(product.price)}
                              </span>
                              <span className="text-[10px] text-primary font-bold ml-1">
                                ({getDiscountPercent(product.price, product.discountPrice)}% off)
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>

                <div className="text-center mt-10">
                  <Button asChild size="lg" variant="hero" className="rounded-full gap-2 shadow-md">
                    <Link to="/shop">
                      Explore Full Catalog
                      <ArrowRight className="h-4.5 w-4.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          )}

          {/* Lookbook section */}
          <section className="section-shell">
            <div className="container-shell">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
                <div className="luxury-panel rounded-[1.75rem] p-8 flex flex-col gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                    Boutique lookbook
                  </p>
                  <h3 className="text-3xl sm:text-4xl leading-tight font-semibold text-foreground">
                    More styles for casual, festive and everyday fashion.
                  </h3>
                  <p className="text-sm leading-7 text-muted-foreground">
                    Explore the wider boutique mood through carefully framed visuals that strengthen
                    trust and show variety across the collection.
                  </p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <Button variant="hero" size="lg" asChild className="rounded-full">
                      <Link to="/shop">View Full Collection</Link>
                    </Button>
                    <Button variant="luxury" size="lg" asChild className="rounded-full bg-transparent hover:bg-secondary/40 text-foreground border-border">
                      <Link to="/contact">Talk to Designer</Link>
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {lookbookImages.map((item, index) => (
                    <div
                      key={item.image}
                      className="luxury-panel group overflow-hidden rounded-[1.35rem] p-3 animate-fade-rise"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="aspect-[4/5] w-full rounded-[1rem] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section id="why-us" className="section-shell border-y border-border/60 bg-card/30">
            <div className="container-shell">
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Boutique trust signals designed to turn visitors into buyers."
                text="Luxury presentation alone is not enough — the experience also feels reliable, friendly and easy to order from."
              />

              <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {reasons.map((reason, index) => (
                  <article
                    key={reason.title}
                    className="luxury-panel rounded-[1.25rem] p-6 animate-fade-rise"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)] font-bold text-sm">
                      0{index + 1}
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-foreground">{reason.title}</h3>
                    <p className="mt-3 text-xs leading-6 text-muted-foreground font-semibold">{reason.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section id="testimonials" className="section-shell">
            <div className="container-shell">
              <SectionHeading
                eyebrow="Customer Love"
                title="Warm reviews that reinforce boutique quality and trust."
                text="Real boutique energy comes from delighted customers who return for quality, fit and style."
              />

              <div className="mt-14 grid gap-6 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <article
                    key={index}
                    className="luxury-panel rounded-[1.45rem] p-7 animate-fade-rise"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-brand-gold text-xs font-semibold">
                      {"★".repeat(testimonial.rating)}
                    </div>
                    <p className="mt-5 text-sm sm:text-base leading-7 text-foreground font-medium">“{testimonial.quote}”</p>
                    <p className="mt-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">{testimonial.name}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
