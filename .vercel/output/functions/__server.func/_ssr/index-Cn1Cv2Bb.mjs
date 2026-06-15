import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useStore, P as PRODUCTS, s as siteUrl, B as Button, p as purpleLook, f as formatPrice, i as getDiscountPercent } from "./router-DtXWVxDh.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import "../_libs/sonner.mjs";
import { H as Heart, a as ShoppingBag, E as Eye, F as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-scroll-area.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
const ivoryLook = {
  url: "/images/hero/hero-ivory-suit.jpeg"
};
const redKurta = {
  url: "/images/products/red-cotton-kurta-set.jpeg"
};
const pinkKurta = {
  url: "/images/products/pink-cotton-kurta-set.jpeg"
};
const oliveSet = {
  url: "/images/products/olive-cotton-kurta-set.jpeg"
};
const magentaKids = {
  url: "/images/products/magenta-kids-lehenga.jpeg"
};
const burgundyGown = {
  url: "/images/products/burgundy-kids-gown.jpeg"
};
const mintKids = {
  url: "/images/products/mint-kids-lehenga.jpeg"
};
const sageRomper = {
  url: "/images/products/sage-kids-romper.jpeg"
};
const navyDress = {
  url: "/images/products/navy-kids-dress.jpeg"
};
const callUrl = "tel:+917976396802";
const highlights = ["Premium Boutique Collection", "Trendy & Stylish Fashion", "Affordable Pricing", "Quality Fabric", "Comfortable Wear", "Fashion Carefully Selected"];
const reasons = [{
  title: "Trendy Fashion Collection",
  text: "Modern silhouettes and updated styles chosen for girls who love to stand out with confidence."
}, {
  title: "Premium Quality Fabrics",
  text: "Soft-touch materials, elegant finishes and quality-first selections for premium everyday wear."
}, {
  title: "Stylish & Comfortable Designs",
  text: "Every piece balances graceful style with comfort so girls feel beautiful and at ease all day."
}, {
  title: "Ethnic + Western Variety",
  text: "From festive ethnic sets to western looks and casual outfits, the collection covers every mood."
}, {
  title: "Boutique Fashion Experience",
  text: "Curated collections, tasteful styling and premium presentation create a true boutique shopping feel."
}, {
  title: "Personalized Customer Support",
  text: "Quick replies on WhatsApp and friendly guidance help customers choose the right outfit with ease."
}];
const homeCategories = [{
  title: "Trendy Dresses",
  description: "Statement boutique dresses with rich color, graceful flow and festive elegance.",
  image: purpleLook.url,
  category: "party-wear"
}, {
  title: "Ethnic Wear",
  description: "Soft festive ethnic styles designed for celebrations, comfort and timeless charm.",
  image: ivoryLook.url,
  category: "ethnic-wear"
}, {
  title: "Western Wear",
  description: "Clean silhouettes and trendy everyday fashion with a polished boutique touch.",
  image: pinkKurta.url,
  category: "western-wear"
}, {
  title: "Party Wear",
  description: "Special occasion looks with dramatic silhouettes, volume and premium detailing.",
  image: burgundyGown.url,
  category: "party-wear"
}, {
  title: "Stylish Outfits",
  description: "Fashion-forward wardrobe pieces for girls who love comfort with standout style.",
  image: oliveSet.url,
  category: "casual-wear"
}, {
  title: "Boutique Special Collection",
  description: "Exclusive boutique picks curated for gifting, special moments and standout styling.",
  image: magentaKids.url,
  category: "boutique-collection"
}];
const lookbookImages = [{
  image: redKurta.url,
  alt: "Red boutique kurta set for girls."
}, {
  image: mintKids.url,
  alt: "Mint boutique skirt set for girls with heart details."
}, {
  image: sageRomper.url,
  alt: "Sage green girls romper styled as boutique casual wear."
}, {
  image: navyDress.url,
  alt: "Young girl wearing a navy embroidered dress outdoors."
}];
const testimonials = [{
  name: "Happy Customer",
  quote: "Beautiful dresses and amazing quality. My daughter loved the collection!",
  rating: 5
}, {
  name: "Boutique Shopper",
  quote: "Very stylish outfits at affordable prices. Highly recommended.",
  rating: 5
}, {
  name: "Returning Customer",
  quote: "Best boutique collection for girls fashion in Jaipur.",
  rating: 5
}];
const boutiqueSchema = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "Vastra Boutique",
  url: siteUrl,
  email: "Lekhrajsharma2129@gmail.com",
  telephone: "+91 7976396802",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 7976396802",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"]
  },
  founder: "Soniya Sharma",
  description: "Premium girls fashion boutique offering trendy dresses, ethnic wear, western outfits, party wear and boutique special collections."
};
function SectionHeading({
  eyebrow,
  title,
  text
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center animate-fade-rise", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl leading-none font-semibold text-foreground sm:text-5xl", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base leading-8 text-muted-foreground sm:text-lg", children: text })
  ] });
}
function Index() {
  const {
    toggleWishlist,
    isInWishlist,
    addToCart
  } = useStore();
  const trendingOutfits = PRODUCTS.filter((p) => p.badge === "trending" || p.badge === "hot").slice(0, 6);
  const handleWishlistToggle = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(productId);
  };
  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, product.sizes[0], product.colors[0], 1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify(boutiqueSchema) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-x-hidden text-foreground pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "section-shell relative isolate overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[-8rem] top-20 h-64 w-64 rounded-full bg-brand-rose/25 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-[-6rem] top-10 h-72 w-72 rounded-full bg-brand-gold/30 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl animate-fade-rise", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.34em] text-primary", children: "Premium girls fashion boutique" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 text-5xl leading-none font-semibold text-balance text-foreground sm:text-6xl lg:text-7xl", children: "Trendy Fashion for Stylish Girls ✨" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl", children: "Discover beautiful, trendy & fashionable outfits for girls with the perfect mix of comfort, elegance, ethnic charm & modern western styles." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col gap-3 sm:flex-row", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "lg", asChild: true, className: "rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", children: "Shop Collection" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "luxury", size: "lg", asChild: true, className: "rounded-full bg-transparent hover:bg-secondary/40 text-foreground border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: callUrl, children: "Call Support" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 sm:grid-cols-3", children: [{
              value: "Curated",
              label: "Boutique-led looks"
            }, {
              value: "Premium",
              label: "Fabric & finish"
            }, {
              value: "Easy",
              label: "Seamless checkout"
            }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxury-panel rounded-2xl px-4 py-4 text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-semibold text-foreground", children: item.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground font-semibold", children: item.label })
            ] }, item.label)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[34rem] animate-fade-rise", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-2 top-0 hidden w-44 rounded-[1.6rem] border border-border/70 bg-card/90 p-3 shadow-[var(--shadow-soft)] md:block animate-float-down", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ivoryLook.url, alt: "Ivory festive boutique outfit", className: "aspect-[4/5] w-full rounded-[1.1rem] object-cover", loading: "lazy" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-2 bottom-7 hidden w-40 rounded-[1.6rem] border border-border/70 bg-card/90 p-3 shadow-[var(--shadow-soft)] md:block animate-float-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: navyDress.url, alt: "Navy dress from Vastra Boutique", className: "aspect-[4/5] w-full rounded-[1.1rem] object-cover", loading: "lazy" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxury-panel grain-overlay relative overflow-hidden rounded-[2rem] p-4 shadow-[var(--shadow-luxury)] sm:p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-5 top-5 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-muted-foreground font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Signature edit" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Vastra Signature" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: purpleLook.url, alt: "Featured purple boutique dress from Vastra Boutique", className: "aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top", fetchPriority: "high" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-6 bottom-6 rounded-2xl border border-white/40 bg-background/78 p-4 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground", children: "Signature boutique look" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 truncate text-lg font-semibold text-foreground", children: "Royal Festive Dress" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "sm", asChild: true, className: "rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/1", children: "View Details" }) })
              ] }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "section-shell border-y border-border/60 bg-card/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "About Vastra Boutique", title: "A boutique story built on confidence, comfort and style.", text: "Vastra Boutique was created with a passion for bringing trendy, stylish and comfortable fashion for girls. We believe fashion is not only about clothes — it’s about confidence, personality and style. From trendy western wear to beautiful ethnic collections, we carefully curate stylish outfits designed especially for young girls who love fashion." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: highlights.map((highlight, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxury-panel rounded-xl p-5 animate-fade-rise", style: {
          animationDelay: `${index * 90}ms`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-bold text-foreground", children: highlight }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs leading-6 text-muted-foreground font-semibold", children: "Thoughtfully selected to deliver a premium boutique shopping experience." })
        ] }, highlight)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "collection", className: "section-shell", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Shop By Categories", title: "Curated collections with premium framing and instant details.", text: "Each featured look is presented with a boutique-style frame, clear visibility and direct selectors for fast shopping." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3", children: homeCategories.map((product, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "luxury-panel group overflow-hidden rounded-[1.6rem] animate-fade-rise", style: {
          animationDelay: `${index * 80}ms`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", search: {
            category: product.category
          }, className: "luxury-outline overflow-hidden rounded-[1.25rem] bg-brand-pearl p-2 block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image, alt: product.title, className: "aspect-[4/5] w-full rounded-[1rem] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]", loading: "lazy" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pb-5 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-foreground", children: product.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-background px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-muted-foreground", children: "Collection" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs leading-6 text-muted-foreground font-semibold", children: product.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mt-5 w-full rounded-full", variant: "luxury", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", search: {
              category: product.category
            }, children: "Explore Outfits" }) })
          ] })
        ] }, product.title)) })
      ] }) }),
      trendingOutfits.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-shell bg-secondary/20 border-y border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Trending Outfits", title: "Popular boutique picks this week", text: "Find the most highly reviewed and trending ethnic & western wear hand-selected by Soniya Sharma." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12", children: trendingOutfits.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/product/${product.id}`, className: "group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "luxury-panel overflow-hidden rounded-[1.6rem] relative flex flex-col h-full bg-card/40 hover:bg-card transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden p-2.5 sm:p-3 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxury-outline overflow-hidden rounded-[1.25rem] bg-brand-pearl aspect-[4/5] relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.images[0], alt: product.name, className: "w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => handleWishlistToggle(e, product.id), className: "absolute top-3 right-3 h-8.5 w-8.5 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow-md backdrop-blur-sm z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `h-4.5 w-4.5 transition-colors ${isInWishlist(product.id) ? "fill-destructive text-destructive" : "text-muted-foreground hover:text-foreground"}` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-brand-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: (e) => handleQuickAdd(e, product), size: "sm", className: "rounded-full shadow-lg bg-background hover:bg-primary hover:text-primary-foreground text-foreground px-3.5 h-9 text-xs font-semibold gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-3.5 w-3.5" }),
                "Add"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full shadow-lg bg-background/90 text-foreground px-3 h-9 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-background", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" }),
                "View"
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 pt-1 flex-grow flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] text-muted-foreground font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: product.fabric }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-brand-gold flex items-center gap-0.5", children: [
                  "⭐ ",
                  product.rating
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm sm:text-base mt-2 line-clamp-1 group-hover:text-primary transition-colors leading-tight", children: product.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mt-3 gap-2 flex-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold text-foreground", children: formatPrice(product.discountPrice) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground line-through ml-1", children: formatPrice(product.price) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-primary font-bold ml-1", children: [
                "(",
                getDiscountPercent(product.price, product.discountPrice),
                "% off)"
              ] })
            ] }) })
          ] })
        ] }) }, product.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "hero", className: "rounded-full gap-2 shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", children: [
          "Explore Full Catalog",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4.5 w-4.5" })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-shell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-shell", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxury-panel rounded-[1.75rem] p-8 flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.28em] text-primary", children: "Boutique lookbook" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl sm:text-4xl leading-tight font-semibold text-foreground", children: "More styles for casual, festive and everyday fashion." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-7 text-muted-foreground", children: "Explore the wider boutique mood through carefully framed visuals that strengthen trust and show variety across the collection." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-col gap-3 sm:flex-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "lg", asChild: true, className: "rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", children: "View Full Collection" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "luxury", size: "lg", asChild: true, className: "rounded-full bg-transparent hover:bg-secondary/40 text-foreground border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Talk to Designer" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: lookbookImages.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "luxury-panel group overflow-hidden rounded-[1.35rem] p-3 animate-fade-rise", style: {
          animationDelay: `${index * 100}ms`
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.alt, className: "aspect-[4/5] w-full rounded-[1rem] object-cover transition-transform duration-500 group-hover:scale-[1.03]", loading: "lazy" }) }, item.image)) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "why-us", className: "section-shell border-y border-border/60 bg-card/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Why Choose Us", title: "Boutique trust signals designed to turn visitors into buyers.", text: "Luxury presentation alone is not enough — the experience also feels reliable, friendly and easy to order from." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3", children: reasons.map((reason, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "luxury-panel rounded-[1.25rem] p-6 animate-fade-rise", style: {
          animationDelay: `${index * 80}ms`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)] font-bold text-sm", children: [
            "0",
            index + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-bold text-foreground", children: reason.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs leading-6 text-muted-foreground font-semibold", children: reason.text })
        ] }, reason.title)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "testimonials", className: "section-shell", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Customer Love", title: "Warm reviews that reinforce boutique quality and trust.", text: "Real boutique energy comes from delighted customers who return for quality, fit and style." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 lg:grid-cols-3", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "luxury-panel rounded-[1.45rem] p-7 animate-fade-rise", style: {
          animationDelay: `${index * 100}ms`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-brand-gold text-xs font-semibold", children: "★".repeat(testimonial.rating) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-sm sm:text-base leading-7 text-foreground font-medium", children: [
            "“",
            testimonial.quote,
            "”"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs font-bold text-muted-foreground uppercase tracking-wider", children: testimonial.name })
        ] }, index)) })
      ] }) })
    ] }) })
  ] });
}
export {
  Index as component
};
