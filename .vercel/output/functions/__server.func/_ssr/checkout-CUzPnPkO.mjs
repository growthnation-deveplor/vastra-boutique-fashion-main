import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { j as Route$5, u as useStore, B as Button, I as Input, f as formatPrice, g as getProductById, c as cn } from "./router-DtXWVxDh.mjs";
import { C as Card } from "./card-DyeamIto.mjs";
import { L as Label } from "./label-jaOl_0Lw.mjs";
import { R as RadioGroup$1, a as RadioGroupItem$1, b as RadioGroupIndicator } from "../_libs/radix-ui__react-radio-group.mjs";
import { S as Separator } from "./separator-DKBNVZ4e.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as ArrowLeft, j as Truck, v as CreditCard, w as ShieldCheck, e as Circle } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-separator.mjs";
const RadioGroup = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroup$1, { className: cn("grid gap-2", className), ...props, ref });
});
RadioGroup.displayName = RadioGroup$1.displayName;
const RadioGroupItem = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RadioGroupItem$1,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupIndicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-3.5 w-3.5 fill-primary" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupItem$1.displayName;
function Checkout() {
  const navigate = useNavigate();
  const {
    coupon
  } = Route$5.useSearch();
  const {
    cart,
    currentUser,
    getCartTotal,
    placeOrder
  } = useStore();
  const pricing = getCartTotal(coupon);
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [addressLine, setAddressLine] = reactExports.useState("");
  const [city, setCity] = reactExports.useState("");
  const [state, setState] = reactExports.useState("");
  const [pincode, setPincode] = reactExports.useState("");
  const [paymentMethod, setPaymentMethod] = reactExports.useState("cod");
  reactExports.useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setEmail(currentUser.email || "");
      if (currentUser.addresses && currentUser.addresses.length > 0) {
        const addr = currentUser.addresses[0];
        setName(addr.name || currentUser.name);
        setEmail(addr.email || currentUser.email);
        setPhone(addr.phone || "");
        setAddressLine(addr.addressLine || "");
        setCity(addr.city || "");
        setState(addr.state || "");
        setPincode(addr.pincode || "");
      }
    }
  }, [currentUser]);
  const handleSelectAddress = (addrId) => {
    if (!currentUser) return;
    const addr = currentUser.addresses.find((a) => a.id === addrId);
    if (addr) {
      setName(addr.name);
      setEmail(addr.email);
      setPhone(addr.phone);
      setAddressLine(addr.addressLine);
      setCity(addr.city);
      setState(addr.state);
      setPincode(addr.pincode);
      toast.info(`Auto-filled address: ${addr.name}`);
    }
  };
  const handlePlaceOrderSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !addressLine.trim() || !city.trim() || !state.trim() || !pincode.trim()) {
      toast.error("Please fill in all shipping details.");
      return;
    }
    const shippingAddress = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      addressLine: addressLine.trim(),
      city: city.trim(),
      state: state.trim(),
      pincode: pincode.trim()
    };
    const orderObj = placeOrder(shippingAddress, paymentMethod, coupon);
    if (orderObj) {
      navigate({
        to: "/checkout-confirmation"
      });
    }
  };
  if (cart.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell py-16 text-center flex flex-col items-center justify-center min-h-[60vh] gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: "🛒" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Your bag is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-sm mt-1", children: "You must add items to your cart before proceeding to checkout." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", asChild: true, className: "rounded-full mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", children: "Explore Collection" }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background text-foreground pb-16 pt-8 animate-fade-rise", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cart", className: "inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      "Back to Bag"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-foreground sm:text-4xl mb-8", children: "Checkout" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handlePlaceOrderSubmit, className: "flex flex-col gap-6", children: [
        currentUser && currentUser.addresses && currentUser.addresses.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "luxury-panel rounded-2xl p-5 border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-foreground mb-3", children: "Choose Saved Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2.5", children: currentUser.addresses.map((addr) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => handleSelectAddress(addr.id), className: "p-3 border border-border/40 hover:border-primary/50 bg-card/20 rounded-xl cursor-pointer transition-all flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs sm:text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-foreground", children: [
                addr.name,
                " (",
                addr.phone,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-0.5 text-xs", children: [
                addr.addressLine,
                ", ",
                addr.city,
                ", ",
                addr.state,
                " - ",
                addr.pincode
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary border-primary/20 text-[9px] uppercase tracking-wider font-bold", children: "Select" })
          ] }, addr.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "luxury-panel rounded-2xl p-6 border-border/50 flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground", children: "Shipping Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "custName", className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Contact Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "custName", type: "text", placeholder: "Enter full name", value: name, onChange: (e) => setName(e.target.value), className: "rounded-xl h-10 text-sm font-medium", required: true })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "custPhone", className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Phone Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "custPhone", type: "tel", placeholder: "10-digit mobile number", value: phone, onChange: (e) => setPhone(e.target.value), className: "rounded-xl h-10 text-sm font-medium", required: true })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "custEmail", className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Email Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "custEmail", type: "email", placeholder: "name@example.com", value: email, onChange: (e) => setEmail(e.target.value), className: "rounded-xl h-10 text-sm font-medium", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "custAddr", className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Street Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "custAddr", type: "text", placeholder: "Flat/House number, Apartment, Colony", value: addressLine, onChange: (e) => setAddressLine(e.target.value), className: "rounded-xl h-10 text-sm font-medium", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "custCity", className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "City" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "custCity", type: "text", placeholder: "City", value: city, onChange: (e) => setCity(e.target.value), className: "rounded-xl h-10 text-sm font-medium", required: true })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "custState", className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "State" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "custState", type: "text", placeholder: "State", value: state, onChange: (e) => setState(e.target.value), className: "rounded-xl h-10 text-sm font-medium", required: true })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "custPin", className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Pincode" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "custPin", type: "text", placeholder: "6 digits", value: pincode, onChange: (e) => setPincode(e.target.value), className: "rounded-xl h-10 text-sm font-medium", required: true })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "luxury-panel rounded-2xl p-6 border-border/50 flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground", children: "Payment Method" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioGroup, { value: paymentMethod, onValueChange: (val) => setPaymentMethod(val), className: "flex flex-col gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3.5 border border-border/40 hover:border-primary/40 rounded-xl bg-card/25 cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "cod", id: "payCod", className: "mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "payCod", className: "flex-1 cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-foreground text-sm flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-4.5 w-4.5 text-primary" }),
                  "Cash on Delivery (COD)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-normal font-semibold", children: "Pay with cash when your gorgeous outfits are delivered. Free shipping on cod orders over ₹999." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3.5 border border-border/40 hover:border-primary/40 rounded-xl bg-card/25 cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "card", id: "payCard", className: "mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "payCard", className: "flex-1 cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-foreground text-sm flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-4.5 w-4.5 text-primary" }),
                  "Simulate Card Payment"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-normal font-semibold", children: "Checkout immediately using a simulated payment gateway. Your order status will mark as paid." })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", size: "lg", variant: "hero", className: "w-full rounded-full h-12", children: [
          "Place Order (",
          formatPrice(pricing.total),
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-6 sticky top-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "luxury-panel rounded-2xl p-6 border-border/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground mb-4", children: "Order Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3.5 max-h-[300px] overflow-y-auto pr-1 mb-5", children: cart.map((item) => {
          const product = getProductById(item.productId);
          if (!product) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.images[0], alt: product.name, className: "w-12 h-16 object-cover object-top rounded-lg border border-border/30 bg-brand-pearl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground truncate", children: product.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-0.5 flex gap-1.5 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Size: ",
                  item.size
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Color: ",
                  item.color.name
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Qty: ",
                  item.quantity
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-xs text-right whitespace-nowrap", children: formatPrice(product.discountPrice * item.quantity) })
          ] }, `${item.productId}-${item.size}-${item.color.name}`);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-border/60 my-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 text-sm font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Items Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: formatPrice(pricing.subtotal) })
          ] }),
          pricing.discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Discount Applied" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "-",
              formatPrice(pricing.discount)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Shipping Fee" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: pricing.shipping === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-success font-bold uppercase tracking-wider text-[11px]", children: "Free" }) : formatPrice(pricing.shipping) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GST/Taxes (5%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: formatPrice(pricing.tax) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-border/60 my-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-base font-bold items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Grand Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-primary", children: formatPrice(pricing.total) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/60 pt-5 mt-6 grid gap-2.5 text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Secure 256-bit SSL encrypted connection" })
        ] }) })
      ] }) })
    ] })
  ] }) });
}
export {
  Checkout as component
};
