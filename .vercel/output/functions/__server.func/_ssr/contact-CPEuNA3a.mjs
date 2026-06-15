import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { I as Input, B as Button } from "./router-DtXWVxDh.mjs";
import { C as Card } from "./card-DyeamIto.mjs";
import { T as Textarea } from "./textarea-CsQtpeuN.mjs";
import { L as Label } from "./label-jaOl_0Lw.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { p as Send, q as MapPin, r as Phone, s as Mail, k as Clock } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
function ContactPage() {
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [subject, setSubject] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success(`Thank you, ${name}! Your message has been sent successfully. We will email you at ${email} shortly.`);
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };
  const contactCards = [{
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-6 w-6 text-primary" }),
    title: "Our Boutique Studio",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground leading-relaxed", children: [
      "Vastra Boutique Studio,",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Johri Bazar Road, Near Hawa Mahal,",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Jaipur, Rajasthan — 302002"
    ] })
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6 text-primary" }),
    title: "Call & WhatsApp Support",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground leading-relaxed flex flex-col gap-1 font-semibold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Mobile: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+917976396802", className: "text-primary hover:underline", children: "+91 7976396802" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "WhatsApp: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/917976396802", className: "text-primary hover:underline", children: "+91 7976396802" })
      ] })
    ] })
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-6 w-6 text-primary" }),
    title: "Email Support",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground leading-relaxed flex flex-col gap-1 font-semibold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Inquiries: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:Lekhrajsharma2129@gmail.com", className: "text-foreground hover:text-primary transition-colors", children: "Lekhrajsharma2129@gmail.com" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Order Support: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@vastraboutique.in", className: "text-foreground hover:text-primary transition-colors", children: "support@vastraboutique.in" })
      ] })
    ] })
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-6 w-6 text-primary" }),
    title: "Boutique Hours",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground leading-relaxed flex flex-col font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Monday — Saturday: 10:00 AM – 8:00 PM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sunday: 11:00 AM – 6:00 PM" })
    ] })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground pb-16 animate-fade-rise", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card/40 border-b border-border/50 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground", children: "Get In Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-semibold text-foreground mt-3 sm:text-5xl", children: "Contact Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-6 text-muted-foreground max-w-xl mx-auto", children: "Have a question about fabric, custom styling sizing, or shipping? Reach out to us or visit our studio in Jaipur. We are here to help you." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-shell mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.25em] text-primary", children: "Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-semibold text-foreground leading-tight", children: "Connect With Store Owner Soniya Sharma" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed font-semibold", children: "Visit our flagship boutique location in the heart of Jaipur or chat with us online for immediate assistance." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4 mt-2", children: contactCards.map((card, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border border-border/40 bg-card/25 rounded-2xl flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: card.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-foreground text-sm", children: card.title }),
            card.content
          ] })
        ] }, idx)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "luxury-panel rounded-[2rem] p-6 sm:p-8 border-border/50 flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.25em] text-primary", children: "Message Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground mt-1.5", children: "Send a Message" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleContactSubmit, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contactName", className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Full Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "contactName", type: "text", placeholder: "Your name", value: name, onChange: (e) => setName(e.target.value), className: "rounded-xl h-10 text-sm font-medium", required: true })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contactEmail", className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Email Address *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "contactEmail", type: "email", placeholder: "name@email.com", value: email, onChange: (e) => setEmail(e.target.value), className: "rounded-xl h-10 text-sm font-medium", required: true })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contactPhone", className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Phone Number (Optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "contactPhone", type: "tel", placeholder: "Your mobile number", value: phone, onChange: (e) => setPhone(e.target.value), className: "rounded-xl h-10 text-sm font-medium" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contactSubject", className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Subject *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "contactSubject", type: "text", placeholder: "What is this regarding?", value: subject, onChange: (e) => setSubject(e.target.value), className: "rounded-xl h-10 text-sm font-medium", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contactMessage", className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Message Content *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "contactMessage", placeholder: "Write details about your custom styling inquiry or shipping question...", value: message, onChange: (e) => setMessage(e.target.value), className: "rounded-xl min-h-[120px] text-sm", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", variant: "hero", className: "w-full mt-2 rounded-full h-11 text-xs font-bold gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
            "Send Message"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-shell mt-16 rounded-[2rem] overflow-hidden border border-border/50 h-[400px] shadow-md bg-brand-pearl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.511877685637!2d75.8239023150537!3d26.92095598312389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db14022a10df3%3A0xe54e3d3b6a9ad797!2sHawa%20Mahal!5e0!3m2!1sen!2sin!4v1623690000000!5m2!1sen!2sin", width: "100%", height: "100%", style: {
      border: 0,
      filter: "grayscale(0.1) contrast(1.05)"
    }, allowFullScreen: true, loading: "lazy", title: "Vastra Boutique Studio Jaipur Location" }) })
  ] });
}
export {
  ContactPage as component
};
