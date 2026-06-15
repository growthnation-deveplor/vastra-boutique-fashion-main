import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useStore, B as Button, f as formatPrice } from "./router-DtXWVxDh.mjs";
import { C as Card } from "./card-DyeamIto.mjs";
import { S as Separator } from "./separator-DKBNVZ4e.mjs";
import "../_libs/sonner.mjs";
import { t as CircleCheck, u as Calendar, o as MessageCircle, a as ShoppingBag } from "../_libs/lucide-react.mjs";
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
function CheckoutConfirmation() {
  const {
    getLastOrder
  } = useStore();
  const [order, setOrder] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const last = getLastOrder();
    setOrder(last);
  }, []);
  const getDeliveryDateString = () => {
    const date = /* @__PURE__ */ new Date();
    date.setDate(date.getDate() + 5);
    return date.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  const handleWhatsAppOrderQuery = () => {
    if (!order) return;
    const msg = `Hi Vastra Boutique, I placed an order recently.

*Order ID:* ${order.orderId}
*Customer:* ${order.customerName}
*Total:* ${formatPrice(order.pricing.total)}
*Status:* Please share order confirmation and tracking details.`;
    const url = `https://wa.me/917976396802?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };
  if (!order) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell py-16 text-center flex flex-col items-center justify-center min-h-[60vh] gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: "🧾" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground", children: "No Active Order Receipt" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-sm mt-1", children: "You don't have any recently placed orders to confirm." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", asChild: true, className: "rounded-full mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", children: "Shop Outfits" }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background text-foreground pb-16 pt-8 animate-fade-rise", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8 flex flex-col items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-16 w-16 text-success animate-bounce-soft" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-foreground sm:text-4xl", children: "Order Placed!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-sm leading-relaxed mt-1", children: "Thank you for shopping at Vastra Boutique. Your order has been registered and is being processed." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "luxury-panel rounded-2xl p-6 border-border/50 flex flex-col gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center flex-wrap gap-3 pb-3 border-b border-border/40 text-xs sm:text-sm font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Order ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-base font-bold mt-0.5", children: order.orderId })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Order Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mt-0.5 bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-wider rounded px-2.5 py-0.5 border border-primary/20", children: order.orderStatus })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 bg-secondary/40 border border-border/40 p-4 rounded-xl text-xs sm:text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-5 w-5 text-primary shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground", children: "Estimated Delivery Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-0.5 font-medium", children: getDeliveryDateString() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground/80 mt-1 leading-normal font-semibold", children: "You will receive a WhatsApp notification with tracking details once your package is dispatched." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2", children: "Delivery Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs sm:text-sm font-semibold leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: order.customerName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: order.shippingAddress.addressLine }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
            order.shippingAddress.city,
            ", ",
            order.shippingAddress.state,
            " - ",
            order.shippingAddress.pincode
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Phone: ",
              order.customerPhone
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Email: ",
              order.customerEmail
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-border/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3", children: "Order Items" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: order.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs sm:text-sm font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.name, className: "w-10 h-13 object-cover object-top rounded border border-border/30 bg-brand-pearl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-tight", children: item.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-xs font-medium mt-0.5", children: [
                "Size: ",
                item.size,
                " | Color: ",
                item.color.name,
                " | Qty: ",
                item.quantity
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: formatPrice(item.price * item.quantity) })
        ] }, `${item.productId}-${item.size}-${item.color.name}`)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-border/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2.5 text-xs sm:text-sm font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Items Subtotal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPrice(order.pricing.subtotal) })
        ] }),
        order.pricing.discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Discount Applied" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "-",
            formatPrice(order.pricing.discount)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Shipping Fee" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: order.pricing.shipping === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-success font-bold uppercase tracking-wider text-[10px]", children: "Free" }) : formatPrice(order.pricing.shipping) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GST/Taxes (5%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPrice(order.pricing.tax) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-border/30 my-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm sm:text-base font-bold items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Total Paid (",
            order.paymentMethod.toUpperCase(),
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-primary", children: formatPrice(order.pricing.total) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2 mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleWhatsAppOrderQuery, variant: "outline", className: "w-full border-success/30 bg-success/5 text-success hover:bg-success hover:text-white rounded-full h-11 text-xs font-bold gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4.5 w-4.5 fill-current" }),
        "Confirm Order on WhatsApp"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "hero", className: "w-full rounded-full h-11 text-xs font-bold gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4.5 w-4.5" }),
        "Continue Shopping"
      ] }) })
    ] })
  ] }) });
}
export {
  CheckoutConfirmation as component
};
