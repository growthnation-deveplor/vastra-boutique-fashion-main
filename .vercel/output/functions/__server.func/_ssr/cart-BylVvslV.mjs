import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useStore, B as Button, g as getProductById, f as formatPrice, k as COUPONS, I as Input } from "./router-DtXWVxDh.mjs";
import { C as Card } from "./card-DyeamIto.mjs";
import { S as Separator } from "./separator-DKBNVZ4e.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { T as Trash2, M as Minus, P as Plus, A as ArrowLeft, x as Tag } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-separator.mjs";
function CartPage() {
  const {
    cart,
    updateCartQuantity,
    removeFromCart,
    cartCount,
    getCartTotal
  } = useStore();
  const [couponInput, setCouponInput] = reactExports.useState("");
  const [activeCoupon, setActiveCoupon] = reactExports.useState(null);
  useNavigate();
  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponInput.trim().toUpperCase();
    if (!code) {
      toast.error("Please enter a coupon code.");
      return;
    }
    if (COUPONS[code] !== void 0) {
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
  const handleQtyChange = (productId, size, colorName, change, currentQty) => {
    updateCartQuantity(productId, size, colorName, currentQty + change);
  };
  const pricing = getCartTotal(activeCoupon);
  if (cart.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell py-16 text-center flex flex-col items-center justify-center min-h-[60vh] gap-4 animate-fade-rise", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-full bg-secondary/50 flex items-center justify-center text-4xl mb-2", children: "🛍️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Your Shopping Bag is Empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-sm mt-1", children: "Looks like you haven't added any beautiful boutique outfits to your bag yet." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "lg", asChild: true, className: "rounded-full mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", children: "Explore Collection" }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background text-foreground pb-16 pt-8 animate-fade-rise", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-foreground sm:text-4xl", children: "Shopping Bag" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "rounded-full px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary", children: [
        cartCount,
        " outfits"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
        cart.map((item) => {
          const product = getProductById(item.productId);
          if (!product) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 sm:p-5 rounded-2xl border-border/40 bg-card/45 hover:bg-card/75 transition-all flex gap-4 sm:gap-6 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/product/${product.id}`, className: "shrink-0 w-24 h-32 sm:w-28 sm:h-36 rounded-xl overflow-hidden border border-border/40 bg-brand-pearl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.images[0], alt: product.name, className: "w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-grow flex flex-col justify-between min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/product/${product.id}`, className: "hover:text-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground text-base sm:text-lg truncate leading-tight", children: product.name }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: () => removeFromCart(item.productId, item.size, item.color.name), className: "h-8 w-8 text-muted-foreground hover:text-destructive rounded-full", "aria-label": "Remove item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-muted-foreground font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Size: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: item.size })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                    "Color:",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-3 h-3 rounded-full border border-black/10", style: {
                      backgroundColor: item.color.hex
                    } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: item.color.name })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Fabric: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: product.fabric })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mt-4 gap-4 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-border/80 rounded-xl h-10 px-1 bg-background", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: () => handleQtyChange(item.productId, item.size, item.color.name, -1, item.quantity), className: "h-8 w-8 rounded-lg hover:bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3.5 w-3.5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 text-center text-sm font-bold text-foreground", children: item.quantity }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: () => handleQtyChange(item.productId, item.size, item.color.name, 1, item.quantity), className: "h-8 w-8 rounded-lg hover:bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-semibold", children: [
                    "Price: ",
                    formatPrice(product.discountPrice)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-foreground mt-0.5", children: formatPrice(product.discountPrice * item.quantity) })
                ] })
              ] })
            ] })
          ] }, `${item.productId}-${item.size}-${item.color.name}`);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline mt-2 w-fit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          "Continue Shopping"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 sticky top-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "luxury-panel rounded-2xl p-5 border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold uppercase tracking-wider text-foreground mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-4.5 w-4.5 text-primary" }),
            "Apply Coupon Code"
          ] }),
          activeCoupon ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-primary/10 rounded-xl px-4 py-3 border border-primary/20 animate-fade-rise", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-4 w-4 text-primary fill-primary/10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-primary", children: activeCoupon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground font-semibold", children: [
                  COUPONS[activeCoupon] * 100,
                  "% Discount Applied"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: handleRemoveCoupon, className: "h-8 px-2 text-xs font-bold text-primary hover:bg-primary/20 rounded-full", children: "Remove" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleApplyCoupon, className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", placeholder: "e.g. VASTRA20", value: couponInput, onChange: (e) => setCouponInput(e.target.value), className: "rounded-xl h-10 text-xs font-semibold placeholder:text-muted-foreground/60 uppercase" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "luxury", className: "h-10 rounded-xl px-4 text-xs font-bold", children: "Apply" })
          ] }),
          !activeCoupon && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3.5 flex flex-col gap-1.5 text-xs text-muted-foreground/80 font-semibold border-t border-border/30 pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "WELCOME10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "10% OFF (First Order)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "VASTRA20" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "20% OFF (Boutique Special)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "FESTIVE30" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "30% OFF (Festive Promo)" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "luxury-panel rounded-2xl p-6 border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground mb-4", children: "Order Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3.5 text-sm font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Bag Subtotal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: formatPrice(pricing.subtotal) })
            ] }),
            pricing.discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-primary bg-primary/5 p-2 rounded-lg border border-primary/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Coupon Discount" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "-",
                formatPrice(pricing.discount)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Shipping Fee" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: pricing.shipping === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-success font-bold uppercase tracking-wider text-[11px] bg-success/10 px-2 py-0.5 rounded border border-success/20", children: "Free" }) : formatPrice(pricing.shipping) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GST/Taxes (5%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: formatPrice(pricing.tax) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-border/60 my-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-base font-bold items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Grand Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl text-primary", children: formatPrice(pricing.total) })
            ] })
          ] }),
          pricing.shipping > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-xs text-muted-foreground bg-secondary/35 border border-border/40 p-3 rounded-xl leading-normal font-semibold", children: [
            "💡 Add ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-primary", children: formatPrice(999 - pricing.subtotal) }),
            " more in products to qualify for ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-success", children: "FREE shipping" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "hero", className: "w-full mt-6 rounded-full h-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/checkout", search: {
            coupon: activeCoupon
          }, children: "Proceed to Checkout" }) })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  CartPage as component
};
