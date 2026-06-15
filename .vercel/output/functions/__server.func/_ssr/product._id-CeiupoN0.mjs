import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as Route, u as useStore, g as getProductById, B as Button, n as getProductsByCategory, h as Badge, f as formatPrice, i as getDiscountPercent, I as Input } from "./router-DtXWVxDh.mjs";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-hLemMMa4.mjs";
import { C as Card } from "./card-DyeamIto.mjs";
import { T as Textarea } from "./textarea-CsQtpeuN.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { c as ChevronRight, H as Heart, M as Minus, P as Plus, a as ShoppingBag, o as MessageCircle, j as Truck, R as RotateCcw, w as ShieldCheck, G as Star } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-scroll-area.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
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
import "../_libs/radix-ui__react-tabs.mjs";
function ProductDetails() {
  const {
    id
  } = Route.useParams();
  const navigate = useNavigate();
  const {
    addToCart,
    toggleWishlist,
    isInWishlist
  } = useStore();
  const product = reactExports.useMemo(() => getProductById(id), [id]);
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-[70vh] flex-col items-center justify-center text-center p-6 gap-4 animate-fade-rise", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl", children: "👗" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Outfit Not Found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2 max-w-sm", children: "The outfit you are looking for does not exist or has been removed from our catalog." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", asChild: true, className: "rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", children: "Back to Shop" }) })
    ] });
  }
  const [activeImageIndex, setActiveImageIndex] = reactExports.useState(0);
  const [selectedSize, setSelectedSize] = reactExports.useState(product.sizes[0] || "");
  const [selectedColor, setSelectedColor] = reactExports.useState(product.colors[0] || {
    name: "",
    hex: ""
  });
  const [quantity, setQuantity] = reactExports.useState(1);
  const [reviewsList, setReviewsList] = reactExports.useState([{
    name: "Roshni M.",
    rating: 5,
    date: "06/02/2026",
    title: "Perfect fitting & stunning color!",
    comment: `The outfit is absolutely beautiful. The fabric is soft and the gold embroidery is top notch. Fitting is exactly as expected, sizing chart is highly accurate.`,
    verified: true
  }, {
    name: "Sneha P.",
    rating: 5,
    date: "05/18/2026",
    title: "Extremely comfortable & premium quality",
    comment: "Very elegant look, I wore it for a family function and received so many compliments. Perfect blend of traditional and modern boutique styling.",
    verified: true
  }, {
    name: "Tanvi S.",
    rating: 4,
    date: "05/01/2026",
    title: "Lovely fabric, slight delay in shipping",
    comment: "Quality is 5 stars, really premium feel. Delivery took 4 days to Pune, but the customer support on WhatsApp was extremely friendly and kept me updated.",
    verified: true
  }]);
  const [newReviewName, setNewReviewName] = reactExports.useState("");
  const [newReviewRating, setNewReviewRating] = reactExports.useState(5);
  const [newReviewTitle, setNewReviewTitle] = reactExports.useState("");
  const [newReviewComment, setNewReviewComment] = reactExports.useState("");
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewComment.trim()) {
      toast.error("Please fill in your name and review content.");
      return;
    }
    const review = {
      name: newReviewName.trim(),
      rating: newReviewRating,
      date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US"),
      title: newReviewTitle.trim() || `${newReviewRating} Star Review`,
      comment: newReviewComment.trim(),
      verified: false
    };
    setReviewsList([review, ...reviewsList]);
    setNewReviewName("");
    setNewReviewTitle("");
    setNewReviewComment("");
    setNewReviewRating(5);
    toast.success("Thank you! Your review has been submitted successfully.");
  };
  const handleQtyChange = (val) => {
    const newQty = quantity + val;
    if (newQty >= 1) setQuantity(newQty);
  };
  const handleAddToCart = () => {
    addToCart(product.id, selectedSize, selectedColor, quantity);
  };
  const handleBuyNow = () => {
    addToCart(product.id, selectedSize, selectedColor, quantity);
    navigate({
      to: "/checkout"
    });
  };
  const handleWhatsAppOrder = () => {
    const baseMessage = `Hi Vastra Boutique, I want to order this outfit:

*Product:* ${product.name}
*Price:* ${formatPrice(product.discountPrice)}
*Size:* ${selectedSize}
*Color:* ${selectedColor.name}
*Quantity:* ${quantity}
*Link:* https://vastraboutique.in/product/${product.id}`;
    const url = `https://wa.me/917976396802?text=${encodeURIComponent(baseMessage)}`;
    window.open(url, "_blank");
  };
  const relatedProducts = reactExports.useMemo(() => {
    return getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4);
  }, [product]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground pb-16 pt-6 animate-fade-rise", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell mb-8 text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-primary transition-colors", children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "hover:text-primary transition-colors", children: "Shop" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", search: {
        category: product.category
      }, className: "hover:text-primary transition-colors", children: product.categoryName }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5 text-muted-foreground/60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground truncate max-w-[150px]", children: product.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.1fr_0.9fr] gap-10 xl:gap-16 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "luxury-panel rounded-2xl overflow-hidden p-3 bg-card/30 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxury-outline rounded-[1.25rem] bg-brand-pearl overflow-hidden aspect-[4/5] relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.images[activeImageIndex] || product.images[0], alt: product.name, className: "w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.04]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggleWishlist(product.id), className: "absolute top-4 right-4 h-10 w-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow-lg backdrop-blur-sm z-10 transition-transform active:scale-95", "aria-label": "Wishlist", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `h-5 w-5 transition-colors ${isInWishlist(product.id) ? "fill-destructive text-destructive" : "text-muted-foreground hover:text-foreground"}` }) }),
            product.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute top-4 left-4 text-xs uppercase font-bold tracking-wider px-3.5 py-1 rounded-full bg-primary text-primary-foreground shadow-sm", children: product.badge })
          ] }) }),
          product.images.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 justify-center", children: product.images.map((img, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveImageIndex(idx), className: `h-20 w-16 rounded-xl overflow-hidden border-2 transition-all bg-brand-pearl ${activeImageIndex === idx ? "border-primary scale-105 shadow-md" : "border-border/60 opacity-60 hover:opacity-100"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: `Thumbnail ${idx + 1}`, className: "w-full h-full object-cover object-top" }) }, img)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.25em] text-primary", children: product.categoryName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-foreground mt-2 sm:text-4xl leading-tight", children: product.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-3 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-brand-gold font-bold flex items-center gap-1.5 text-sm", children: [
                "★".repeat(Math.round(product.rating)),
                "☆".repeat(5 - Math.round(product.rating)),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs font-semibold", children: [
                  product.rating.toFixed(1),
                  " (",
                  product.reviews,
                  " reviews)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-4 w-px bg-border/60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-semibold", children: [
                "Fabric: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: product.fabric })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-secondary/35 border border-border/40 flex items-center justify-between gap-4 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl sm:text-3xl font-extrabold text-foreground", children: formatPrice(product.discountPrice) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm sm:text-base text-muted-foreground line-through", children: formatPrice(product.price) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "hero", className: "rounded-full text-xs font-semibold ml-1.5 bg-primary text-primary-foreground", children: [
                "Save ",
                getDiscountPercent(product.price, product.discountPrice),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-success font-semibold flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-success inline-block" }),
              product.inStock ? "In Stock (Ready to Ship)" : "Out of Stock"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-7 text-muted-foreground", children: product.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-foreground", children: "Select Size" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-primary font-semibold hover:underline cursor-pointer", children: "Sizing Guide" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2.5", children: product.sizes.map((size) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedSize(size), className: `h-10 min-w-[2.5rem] px-3.5 text-xs font-bold rounded-xl border transition-all ${selectedSize === size ? "bg-primary border-primary text-primary-foreground shadow-md scale-105" : "border-border bg-card text-muted-foreground hover:border-foreground hover:text-foreground"}`, children: size }, size)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-bold uppercase tracking-wider text-foreground mb-2", children: [
              "Select Color: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: selectedColor.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: product.colors.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedColor(color), title: color.name, className: `h-9 w-9 rounded-full border transition-all relative flex items-center justify-center ${selectedColor.name === color.name ? "border-primary scale-110 shadow-md ring-2 ring-primary/20" : "border-border/80 hover:scale-105"}`, style: {
              backgroundColor: color.hex
            }, children: selectedColor.name === color.name && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute w-2.5 h-2.5 rounded-full bg-white shadow-[0_1px_3.5px_rgba(0,0,0,0.5)]" }) }, color.name)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-foreground mb-2", children: "Quantity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-border/80 rounded-xl h-11 w-36 px-1.5 bg-card/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: () => handleQtyChange(-1), className: "h-8 w-8 rounded-lg hover:bg-secondary", disabled: quantity <= 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-grow text-center text-sm font-bold text-foreground", children: quantity }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: () => handleQtyChange(1), className: "h-8 w-8 rounded-lg hover:bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 mt-2 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleAddToCart, size: "lg", variant: "luxury", className: "w-full bg-card hover:bg-secondary/40 text-foreground border-border/80 gap-2 h-12 rounded-full", disabled: !product.inStock, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4 text-primary" }),
              "Add to Bag"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleBuyNow, size: "lg", variant: "hero", className: "w-full gap-2 h-12 rounded-full", disabled: !product.inStock, children: "Buy it Now" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleWhatsAppOrder, size: "lg", className: "w-full sm:col-span-2 bg-success text-white hover:bg-success/90 gap-2 h-12 rounded-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5 fill-white" }),
              "Inquire & Order on WhatsApp"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/60 pt-5 mt-3 grid gap-3.5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-4 w-4 text-primary shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Free Delivery across India on orders above ₹999" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4 text-primary shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Easy exchanges within 7 days of delivery" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-primary shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "100% Quality Assurance - Premium boutique fabric & finish" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 border-t border-border/50 pt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "details", className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-2 max-w-[400px] rounded-full bg-secondary/40 p-1 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "details", className: "rounded-full text-xs font-semibold py-2.5", children: "Specifications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "reviews", className: "rounded-full text-xs font-semibold py-2.5", children: [
            "Reviews (",
            reviewsList.length,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "details", className: "animate-fade-rise", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "luxury-panel rounded-2xl p-6 sm:p-8 border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground mb-4", children: "Product Specifications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 text-sm leading-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[120px_minmax(0,1fr)] py-2.5 border-b border-border/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-muted-foreground", children: "Fabric" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: product.fabric })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[120px_minmax(0,1fr)] py-2.5 border-b border-border/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-muted-foreground", children: "Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: product.categoryName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[120px_minmax(0,1fr)] py-2.5 border-b border-border/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-muted-foreground", children: "Sizes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: product.sizes.join(", ") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[120px_minmax(0,1fr)] py-2.5 border-b border-border/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-muted-foreground", children: "Fit Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Regular Boutique Fit" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[120px_minmax(0,1fr)] py-2.5 border-b border-border/30 sm:border-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-muted-foreground", children: "Wash Care" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Dry Clean Recommended / Gentle Hand Wash" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[120px_minmax(0,1fr)] py-2.5 sm:border-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-muted-foreground", children: "Craftsmanship" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Exclusive handwork detailing & borders" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "reviews", className: "animate-fade-rise", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-foreground", children: "Customer Love & Rating" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4", children: reviewsList.map((rev, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl border border-border/40 bg-card/30 flex flex-col gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm text-foreground", children: rev.name }),
                  rev.verified && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-success/15 hover:bg-success/20 text-success text-[9px] uppercase tracking-wider font-bold rounded-md px-1.5 py-0.5 border border-success/30", children: "Verified Buyer" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-semibold", children: rev.date })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex text-brand-gold text-xs", children: [
                "★".repeat(rev.rating),
                "☆".repeat(5 - rev.rating)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-foreground text-sm", children: rev.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm leading-6 text-muted-foreground", children: rev.comment })
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "luxury-panel rounded-2xl p-6 border-border/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground mb-4", children: "Write a Review" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleReviewSubmit, className: "flex flex-col gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Your Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", placeholder: "Enter your name", value: newReviewName, onChange: (e) => setNewReviewName(e.target.value), className: "mt-1 rounded-xl", required: true })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1", children: "Rating" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setNewReviewRating(star), className: "text-xl transition-transform hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `h-6 w-6 ${star <= newReviewRating ? "fill-brand-gold text-brand-gold" : "text-muted/60"}` }) }, star)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Review Title" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", placeholder: "Give your review a title", value: newReviewTitle, onChange: (e) => setNewReviewTitle(e.target.value), className: "mt-1 rounded-xl" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Review Comments" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { placeholder: "Write your review comments here...", value: newReviewComment, onChange: (e) => setNewReviewComment(e.target.value), className: "mt-1 rounded-xl min-h-[100px]", required: true })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "hero", className: "w-full mt-2 rounded-full h-11", children: "Submit Review" })
            ] })
          ] })
        ] }) })
      ] }) }),
      relatedProducts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 border-t border-border/50 pt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold text-foreground text-center mb-10", children: "You May Also Like" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6", children: relatedProducts.map((rel) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/product/${rel.id}`, className: "group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "luxury-panel overflow-hidden rounded-[1.35rem] relative flex flex-col h-full bg-card/30 hover:bg-card/75 transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden p-2 sm:p-2.5 relative aspect-[4/5] bg-brand-pearl rounded-[1.1rem] m-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: rel.images[0], alt: rel.name, className: "w-full h-full object-cover object-top rounded-[0.9rem] transition-transform duration-500 group-hover:scale-[1.03]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pb-3 pt-1 flex-1 flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm line-clamp-1 group-hover:text-primary transition-colors leading-tight", children: rel.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1.5 mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground", children: formatPrice(rel.discountPrice) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground line-through", children: formatPrice(rel.price) })
            ] })
          ] })
        ] }) }, rel.id)) })
      ] })
    ] })
  ] });
}
export {
  ProductDetails as component
};
