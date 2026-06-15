import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useStore, g as getProductById, B as Button, f as formatPrice } from "./router-DtXWVxDh.mjs";
import "../_libs/sonner.mjs";
import { T as Trash2, a as ShoppingBag } from "../_libs/lucide-react.mjs";
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
function WishlistPage() {
  const {
    wishlist,
    toggleWishlist,
    addToCart
  } = useStore();
  const wishlistProducts = reactExports.useMemo(() => {
    return wishlist.map((id) => getProductById(id)).filter((p) => p !== void 0);
  }, [wishlist]);
  const handleRemove = (productId) => {
    toggleWishlist(productId);
  };
  const handleAddToCart = (product) => {
    addToCart(product.id, product.sizes[0], product.colors[0], 1);
  };
  if (wishlistProducts.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell py-16 text-center flex flex-col items-center justify-center min-h-[60vh] gap-4 animate-fade-rise", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-full bg-secondary/50 flex items-center justify-center text-4xl mb-2", children: "💖" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Your Wishlist is Empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-sm mt-1", children: "Save your favorite outfits here to keep track of what you love!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "lg", asChild: true, className: "rounded-full mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", children: "Explore Outfits" }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background text-foreground pb-16 pt-8 animate-fade-rise", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold text-foreground sm:text-4xl mb-8 flex items-center gap-3", children: [
      "Favorites Wishlist",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-muted-foreground", children: [
        "(",
        wishlistProducts.length,
        " outfits)"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6", children: wishlistProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "luxury-panel overflow-hidden rounded-[1.6rem] relative flex flex-col h-full bg-card/30 hover:bg-card/75 transition-all duration-300 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden p-2.5 sm:p-3 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/product/${product.id}`, className: "luxury-outline overflow-hidden rounded-[1.25rem] bg-brand-pearl relative aspect-[4/5] block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.images[0], alt: product.name, className: "w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]", loading: "lazy" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleRemove(product.id), className: "absolute top-4.5 right-4.5 h-8.5 w-8.5 rounded-full bg-background/90 hover:bg-destructive hover:text-white text-muted-foreground flex items-center justify-center shadow-md backdrop-blur-sm z-10 transition-all", "aria-label": "Remove from wishlist", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 pt-1 flex-1 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] text-muted-foreground font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: product.fabric }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-brand-gold", children: [
              "⭐️ ",
              product.rating
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/product/${product.id}`, className: "hover:text-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm sm:text-base mt-2 line-clamp-1 leading-tight", children: product.name }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1.5 mt-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold text-foreground", children: formatPrice(product.discountPrice) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground line-through", children: formatPrice(product.price) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => handleAddToCart(product), variant: "hero", size: "sm", className: "w-full mt-4 rounded-full text-xs font-semibold gap-1.5 h-9", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-3.5 w-3.5" }),
          "Add to Bag"
        ] })
      ] })
    ] }, product.id)) })
  ] }) });
}
export {
  WishlistPage as component
};
