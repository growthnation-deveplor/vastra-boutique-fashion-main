import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { l as Route$3, u as useStore, I as Input, B as Button, f as formatPrice, h as Badge } from "./router-DtXWVxDh.mjs";
import { C as Card } from "./card-DyeamIto.mjs";
import { L as Label } from "./label-jaOl_0Lw.mjs";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-hLemMMa4.mjs";
import { S as Separator } from "./separator-DKBNVZ4e.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { s as Mail, y as Lock, U as User, z as UserCheck, L as LogOut, C as ClipboardList, P as Plus, T as Trash2, u as Calendar, o as MessageCircle } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__react-separator.mjs";
function AccountPage() {
  const searchParams = Route$3.useSearch();
  const navigate = useNavigate();
  const {
    currentUser,
    orders,
    registerUser,
    loginUser,
    logoutUser,
    addAddress,
    deleteAddress
  } = useStore();
  const activeTab = searchParams.tab || "profile";
  const [loginEmail, setLoginEmail] = reactExports.useState("");
  const [loginPassword, setLoginPassword] = reactExports.useState("");
  const [regName, setRegName] = reactExports.useState("");
  const [regEmail, setRegEmail] = reactExports.useState("");
  const [regPassword, setRegPassword] = reactExports.useState("");
  const [regConfirmPassword, setRegConfirmPassword] = reactExports.useState("");
  const [showAddressForm, setShowAddressForm] = reactExports.useState(false);
  const [addrName, setAddrName] = reactExports.useState("");
  const [addrPhone, setAddrPhone] = reactExports.useState("");
  const [addrEmail, setAddrEmail] = reactExports.useState("");
  const [addrLine, setAddrLine] = reactExports.useState("");
  const [addrCity, setAddrCity] = reactExports.useState("");
  const [addrState, setAddrState] = reactExports.useState("");
  const [addrPin, setAddrPin] = reactExports.useState("");
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginEmail.trim() || !loginPassword.trim()) {
      toast.error("Please fill in email and password.");
      return;
    }
    const success = loginUser(loginEmail.trim(), loginPassword.trim());
    if (success) {
      setLoginEmail("");
      setLoginPassword("");
      navigate({
        to: "/account",
        search: {
          tab: "profile"
        }
      });
    }
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!regName.trim() || !regEmail.trim() || !regPassword.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (regPassword !== regConfirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    const success = registerUser(regName.trim(), regEmail.trim(), regPassword.trim());
    if (success) {
      setRegName("");
      setRegEmail("");
      setRegPassword("");
      setRegConfirmPassword("");
      navigate({
        to: "/account",
        search: {
          tab: "profile"
        }
      });
    }
  };
  const handleAddAddressSubmit = (e) => {
    e.preventDefault();
    if (!addrName.trim() || !addrPhone.trim() || !addrEmail.trim() || !addrLine.trim() || !addrCity.trim() || !addrState.trim() || !addrPin.trim()) {
      toast.error("Please fill in all address details.");
      return;
    }
    const success = addAddress({
      name: addrName.trim(),
      phone: addrPhone.trim(),
      email: addrEmail.trim(),
      addressLine: addrLine.trim(),
      city: addrCity.trim(),
      state: addrState.trim(),
      pincode: addrPin.trim()
    });
    if (success) {
      setShowAddressForm(false);
      setAddrName("");
      setAddrPhone("");
      setAddrEmail("");
      setAddrLine("");
      setAddrCity("");
      setAddrState("");
      setAddrPin("");
    }
  };
  const userOrders = currentUser ? orders.filter((o) => o.userId === currentUser.id) : [];
  const handleWhatsAppOrderQuery = (orderId, total) => {
    const msg = `Hi Vastra Boutique, I am checking the status of my order.

*Order ID:* ${orderId}
*Total:* ${formatPrice(total)}`;
    const url = `https://wa.me/917976396802?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };
  if (!currentUser) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background text-foreground pb-16 pt-12 flex justify-center items-center px-4 animate-fade-rise", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "luxury-panel rounded-2xl w-full max-w-[460px] p-6 sm:p-8 border-border/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground", children: "Welcome to Vastra" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Access your order history, shipping addresses, and wishlist." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "login", className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-2 rounded-xl bg-secondary/40 p-1 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "login", className: "rounded-lg text-xs font-semibold py-2", children: "Login" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "register", className: "rounded-lg text-xs font-semibold py-2", children: "Register" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "login", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLoginSubmit, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "loginEmail", className: "text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }),
              " Email Address"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "loginEmail", type: "email", placeholder: "name@example.com", value: loginEmail, onChange: (e) => setLoginEmail(e.target.value), className: "rounded-xl h-10 text-sm font-semibold", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "loginPass", className: "text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3.5 w-3.5" }),
              " Password"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "loginPass", type: "password", placeholder: "••••••••", value: loginPassword, onChange: (e) => setLoginPassword(e.target.value), className: "rounded-xl h-10 text-sm font-semibold", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "hero", className: "w-full rounded-full h-11 text-xs font-bold mt-2", children: "Sign In" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "register", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleRegisterSubmit, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "regName", className: "text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3.5 w-3.5" }),
              " Full Name"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "regName", type: "text", placeholder: "Enter name", value: regName, onChange: (e) => setRegName(e.target.value), className: "rounded-xl h-10 text-sm font-semibold", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "regEmail", className: "text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }),
              " Email Address"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "regEmail", type: "email", placeholder: "name@example.com", value: regEmail, onChange: (e) => setRegEmail(e.target.value), className: "rounded-xl h-10 text-sm font-semibold", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "regPass", className: "text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3.5 w-3.5" }),
              " Password"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "regPass", type: "password", placeholder: "Create password", value: regPassword, onChange: (e) => setRegPassword(e.target.value), className: "rounded-xl h-10 text-sm font-semibold", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "regConfirmPass", className: "text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3.5 w-3.5" }),
              " Confirm Password"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "regConfirmPass", type: "password", placeholder: "Re-enter password", value: regConfirmPassword, onChange: (e) => setRegConfirmPassword(e.target.value), className: "rounded-xl h-10 text-sm font-semibold", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "hero", className: "w-full rounded-full h-11 text-xs font-bold mt-2", children: "Create Account" })
        ] }) })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background text-foreground pb-16 pt-8 animate-fade-rise", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-foreground", children: "My Account" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1 flex items-center gap-1.5 font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "h-4 w-4 text-success" }),
          "Welcome back, ",
          currentUser.name,
          "! Registered since ",
          new Date(currentUser.createdAt).toLocaleDateString("en-IN")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: logoutUser, variant: "outline", className: "text-xs font-semibold gap-1.5 border-destructive/20 text-destructive hover:bg-destructive/10 rounded-full h-9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-3.5 w-3.5" }),
        "Logout"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[240px_minmax(0,1fr)] gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex md:flex-col gap-1 border-b border-border/50 pb-2 md:pb-0 md:border-b-0 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigate({
          to: "/account",
          search: {
            tab: "profile"
          }
        }), className: `flex items-center gap-2.5 text-sm font-semibold py-2.5 px-4 rounded-xl transition-all w-full md:w-auto text-left ${activeTab === "profile" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4.5 w-4.5" }),
          "Profile & Addresses"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigate({
          to: "/account",
          search: {
            tab: "orders"
          }
        }), className: `flex items-center gap-2.5 text-sm font-semibold py-2.5 px-4 rounded-xl transition-all w-full md:w-auto text-left ${activeTab === "orders" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "h-4.5 w-4.5" }),
          "Order History (",
          userOrders.length,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        activeTab === "profile" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 animate-fade-rise", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "luxury-panel rounded-2xl p-6 border-border/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground mb-4", children: "Profile Details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 text-sm leading-normal font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-2.5 border-b border-border/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Full Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground mt-0.5", children: currentUser.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-2.5 border-b border-border/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Email Address" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground mt-0.5", children: currentUser.email })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "luxury-panel rounded-2xl p-6 border-border/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground", children: "Saved Addresses" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setShowAddressForm(!showAddressForm), variant: "outline", size: "sm", className: "text-xs font-semibold gap-1 rounded-full h-8 px-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
                "Add New Address"
              ] })
            ] }),
            showAddressForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAddAddressSubmit, className: "border border-border/40 p-4 rounded-xl bg-secondary/25 flex flex-col gap-3.5 mb-5 animate-fade-rise", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-foreground", children: "New Shipping Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "Contact Name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Full name", value: addrName, onChange: (e) => setAddrName(e.target.value), className: "h-9 text-xs", required: true })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "Phone Number" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Mobile number", value: addrPhone, onChange: (e) => setAddrPhone(e.target.value), className: "h-9 text-xs", required: true })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "Email Address" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Email", value: addrEmail, onChange: (e) => setAddrEmail(e.target.value), className: "h-9 text-xs", required: true })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "Street Address" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Flat/House number, Apartment, Colony", value: addrLine, onChange: (e) => setAddrLine(e.target.value), className: "h-9 text-xs", required: true })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "City" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "City", value: addrCity, onChange: (e) => setAddrCity(e.target.value), className: "h-9 text-xs", required: true })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "State" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "State", value: addrState, onChange: (e) => setAddrState(e.target.value), className: "h-9 text-xs", required: true })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "Pincode" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Pincode", value: addrPin, onChange: (e) => setAddrPin(e.target.value), className: "h-9 text-xs", required: true })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", onClick: () => setShowAddressForm(false), className: "text-xs rounded-full h-8", children: "Cancel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "luxury", className: "text-xs rounded-full h-8 px-4 font-bold", children: "Save Address" })
              ] })
            ] }),
            !currentUser.addresses || currentUser.addresses.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground/80 leading-normal text-center py-4 font-medium", children: `You haven't saved any shipping addresses yet. Click "Add New Address" above.` }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: currentUser.addresses.map((addr) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-border/40 bg-card/20 rounded-xl relative flex justify-between items-start gap-4 hover:border-border transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs sm:text-sm font-semibold leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: addr.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-0.5", children: addr.addressLine }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                  addr.city,
                  ", ",
                  addr.state,
                  " - ",
                  addr.pincode
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground/80 mt-1 font-medium", children: [
                  "Phone: ",
                  addr.phone,
                  " | Email: ",
                  addr.email
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: () => deleteAddress(addr.id), className: "h-7 w-7 text-muted-foreground hover:text-destructive rounded-full shrink-0", "aria-label": "Delete address", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
            ] }, addr.id)) })
          ] })
        ] }),
        activeTab === "orders" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 animate-fade-rise", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold text-foreground", children: [
            "Order History (",
            userOrders.length,
            ")"
          ] }),
          userOrders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "luxury-panel rounded-2xl p-10 text-center flex flex-col items-center justify-center gap-4 border-border/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: "🧾" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground", children: "No orders placed yet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1 max-w-sm", children: "You haven't placed any orders with this account. Shop some elegant dresses to see them here!" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", asChild: true, className: "rounded-full mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", children: "Shop Outfits" }) })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-5", children: userOrders.map((order) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "luxury-panel rounded-2xl p-5 border-border/50 flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start gap-4 pb-3 border-b border-border/40 text-xs sm:text-sm font-semibold flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-[10px] uppercase tracking-wider", children: "Order ID" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-bold mt-0.5", children: order.orderId })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-[10px] uppercase tracking-wider", children: "Date Placed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground mt-0.5 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                  new Date(order.createdAt).toLocaleDateString("en-IN")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-[10px] uppercase tracking-wider", children: "Grand Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary font-bold mt-0.5", children: formatPrice(order.pricing.total) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-[10px] uppercase tracking-wider", children: "Delivery Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary border-primary/20 text-[9px] uppercase font-bold tracking-wider rounded mt-0.5", children: order.orderStatus })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: order.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs sm:text-sm font-semibold gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.name, className: "w-10 h-13 object-cover object-top rounded border border-border/30 bg-brand-pearl" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground truncate leading-snug", children: item.name }),
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground shrink-0", children: formatPrice(item.price * item.quantity) })
            ] }, `${item.productId}-${item.size}-${item.color.name}`)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-border/30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex sm:justify-between sm:items-center flex-col sm:flex-row gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground font-semibold leading-normal", children: [
                "Payment method: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground uppercase", children: order.paymentMethod }),
                " • Status: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: order.paymentStatus })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => handleWhatsAppOrderQuery(order.orderId, order.pricing.total), variant: "outline", className: "h-8.5 rounded-full border-success/30 bg-success/5 hover:bg-success hover:text-white text-success text-xs font-bold gap-1.5 px-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4 fill-current" }),
                "Inquire on WhatsApp"
              ] })
            ] })
          ] }, order.orderId)) })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  AccountPage as component
};
