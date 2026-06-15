import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$c, u as useStore, P as PRODUCTS, C as CATEGORIES, f as formatPrice, B as Button, S as Sheet, a as SheetTrigger, b as SheetContent, d as SheetHeader, e as SheetTitle, h as Badge, i as getDiscountPercent, c as cn } from "./router-DtXWVxDh.mjs";
import { S as Slider$1, a as SliderTrack, b as SliderRange, c as SliderThumb } from "../_libs/radix-ui__react-slider.mjs";
import { S as Select$1, a as SelectValue$1, b as SelectTrigger$1, c as SelectIcon, d as SelectPortal, e as SelectContent$1, f as SelectViewport, g as SelectItem$1, h as SelectItemIndicator, i as SelectItemText, j as SelectScrollUpButton$1, k as SelectScrollDownButton$1, l as SelectLabel$1, m as SelectSeparator$1 } from "../_libs/radix-ui__react-select.mjs";
import "../_libs/sonner.mjs";
import { R as RotateCcw, g as SlidersHorizontal, H as Heart, a as ShoppingBag, E as Eye, h as ChevronDown, d as Check, i as ChevronUp } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, n as numberType } from "../_libs/zod.mjs";
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
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
const Slider = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Slider$1,
  {
    ref,
    className: cn("relative flex w-full touch-none select-none items-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SliderTrack, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SliderRange, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = Slider$1.displayName;
const Select = Select$1;
const SelectValue = SelectValue$1;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectTrigger$1,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectIcon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectTrigger$1.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectScrollUpButton$1,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectScrollDownButton$1,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectPortal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectContent$1,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectViewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectContent$1.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectLabel$1,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectLabel$1.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectItem$1,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectItem$1.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectSeparator$1,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectSeparator$1.displayName;
objectType({
  search: stringType().optional().catch(""),
  category: stringType().optional().catch(""),
  minPrice: numberType().optional().catch(void 0),
  maxPrice: numberType().optional().catch(void 0),
  size: stringType().optional().catch(""),
  color: stringType().optional().catch(""),
  sortBy: stringType().optional().catch("popular")
});
function Shop() {
  const navigate = useNavigate({
    from: Route$c.fullPath
  });
  const searchParams = Route$c.useSearch();
  const {
    toggleWishlist,
    isInWishlist,
    addToCart
  } = useStore();
  const maxPriceInDb = Math.max(...PRODUCTS.map((p) => p.discountPrice));
  const minPriceInDb = Math.min(...PRODUCTS.map((p) => p.discountPrice));
  const activeSearch = searchParams.search || "";
  const activeCategory = searchParams.category || "";
  const activeSortBy = searchParams.sortBy || "popular";
  const activeSize = searchParams.size || "";
  const activeColor = searchParams.color || "";
  const [priceRange, setPriceRange] = reactExports.useState([searchParams.minPrice ?? minPriceInDb, searchParams.maxPrice ?? maxPriceInDb]);
  const allSizes = reactExports.useMemo(() => {
    const sizes = /* @__PURE__ */ new Set();
    PRODUCTS.forEach((p) => p.sizes.forEach((s) => sizes.add(s)));
    return Array.from(sizes).sort();
  }, []);
  const allColors = reactExports.useMemo(() => {
    const colorMap = /* @__PURE__ */ new Map();
    PRODUCTS.forEach((p) => p.colors.forEach((c) => {
      if (!colorMap.has(c.name)) {
        colorMap.set(c.name, c.hex);
      }
    }));
    return Array.from(colorMap.entries()).map(([name, hex]) => ({
      name,
      hex
    }));
  }, []);
  const filteredProducts = reactExports.useMemo(() => {
    let list = [...PRODUCTS];
    if (activeSearch.trim()) {
      const q = activeSearch.toLowerCase().trim();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.fabric.toLowerCase().includes(q) || p.categoryName.toLowerCase().includes(q));
    }
    if (activeCategory) {
      list = list.filter((p) => p.category === activeCategory);
    }
    list = list.filter((p) => p.discountPrice >= (searchParams.minPrice ?? minPriceInDb) && p.discountPrice <= (searchParams.maxPrice ?? maxPriceInDb));
    if (activeSize) {
      list = list.filter((p) => p.sizes.includes(activeSize));
    }
    if (activeColor) {
      list = list.filter((p) => p.colors.some((c) => c.name === activeColor));
    }
    switch (activeSortBy) {
      case "price-low":
        list.sort((a, b) => a.discountPrice - b.discountPrice);
        break;
      case "price-high":
        list.sort((a, b) => b.discountPrice - a.discountPrice);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        list.sort((a, b) => b.reviews - a.reviews);
        break;
      case "newest":
        list.sort((a, b) => (b.badge === "new" ? 1 : 0) - (a.badge === "new" ? 1 : 0));
        break;
    }
    return list;
  }, [activeSearch, activeCategory, searchParams.minPrice, searchParams.maxPrice, activeSize, activeColor, activeSortBy, minPriceInDb, maxPriceInDb]);
  const updateFilters = (newParams) => {
    navigate({
      to: "/shop",
      search: (prev) => ({
        ...prev,
        ...newParams
      })
    });
  };
  const handlePriceChange = (val) => {
    setPriceRange(val);
  };
  const applyPriceFilter = () => {
    updateFilters({
      minPrice: priceRange[0],
      maxPrice: priceRange[1]
    });
  };
  const resetFilters = () => {
    setPriceRange([minPriceInDb, maxPriceInDb]);
    navigate({
      to: "/shop",
      search: {}
    });
  };
  const sidebarFilters = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 p-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold uppercase tracking-wider text-foreground mb-3", children: "Categories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => updateFilters({
          category: ""
        }), className: `text-left text-sm py-1.5 px-3 rounded-lg transition-all font-medium ${activeCategory === "" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"}`, children: [
          "All Products (",
          PRODUCTS.length,
          ")"
        ] }),
        CATEGORIES.map((cat) => {
          const catCount = PRODUCTS.filter((p) => p.category === cat.id).length;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => updateFilters({
            category: cat.id
          }), className: `text-left text-sm py-1.5 px-3 rounded-lg transition-all font-medium ${activeCategory === cat.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"}`, children: [
            cat.name,
            " (",
            catCount,
            ")"
          ] }, cat.id);
        })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold uppercase tracking-wider text-foreground mb-3", children: "Price Range" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { defaultValue: [priceRange[0], priceRange[1]], min: minPriceInDb, max: maxPriceInDb, step: 100, value: priceRange, onValueChange: handlePriceChange, className: "my-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground mt-2 font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPrice(priceRange[0]) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPrice(priceRange[1]) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: applyPriceFilter, variant: "outline", size: "sm", className: "w-full mt-3 rounded-full text-xs", children: "Apply Price Filter" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold uppercase tracking-wider text-foreground mb-3", children: "Sizes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: allSizes.map((size) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateFilters({
        size: activeSize === size ? "" : size
      }), className: `h-9 min-w-[2.25rem] px-2 text-xs font-semibold rounded-lg border transition-all ${activeSize === size ? "bg-primary border-primary text-primary-foreground shadow-sm" : "border-border bg-card text-muted-foreground hover:border-foreground hover:text-foreground"}`, children: size }, size)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold uppercase tracking-wider text-foreground mb-3", children: "Colors" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2.5", children: allColors.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateFilters({
        color: activeColor === color.name ? "" : color.name
      }), title: color.name, className: `h-8 w-8 rounded-full border transition-all relative flex items-center justify-center ${activeColor === color.name ? "border-primary scale-110 shadow-md ring-2 ring-primary/20" : "border-border hover:scale-105"}`, style: {
        backgroundColor: color.hex
      }, children: activeColor === color.name && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute w-2 h-2 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.5)]" }) }, color.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: resetFilters, variant: "ghost", className: "text-xs w-full justify-center gap-2 text-muted-foreground hover:text-foreground hover:bg-secondary/40 py-2.5 rounded-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-3.5 w-3.5" }),
      "Reset All Filters"
    ] })
  ] });
  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, product.sizes[0], product.colors[0], 1);
  };
  const handleWishlistToggle = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(productId);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground pb-12 animate-fade-rise", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card/40 border-b border-border/50 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground", children: "Explore Curated Fashion" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-semibold text-foreground mt-3 sm:text-5xl", children: "Boutique Collection" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-6 text-muted-foreground max-w-xl mx-auto", children: "Discover a handpicked range of designer sarees, kurtas, palazzo sets, western dresses, and premium kidswear styled for confidence and comfort." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-shell mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[240px_minmax(0,1fr)] gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden lg:block sticky top-24 max-h-[85vh] overflow-y-auto pr-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 rounded-2xl border border-border/60 bg-card/50 luxury-panel", children: sidebarFilters }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 items-center justify-between pb-6 border-b border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold text-muted-foreground w-full sm:w-auto", children: [
            "Showing ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: filteredProducts.length }),
            " outfits"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5 items-center w-full sm:w-auto justify-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "lg:hidden gap-2 rounded-full h-9", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "h-4 w-4" }),
                "Filters"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { side: "left", className: "w-[300px] overflow-y-auto bg-background/95 backdrop-blur-xl luxury-panel border-r border-border/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { className: "pb-4 border-b border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { className: "text-xl font-bold flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "h-5 w-5 text-primary" }),
                  "Filters"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: sidebarFilters })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground whitespace-nowrap hidden sm:inline", children: "Sort by" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: activeSortBy, onValueChange: (val) => updateFilters({
                sortBy: val
              }), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[160px] h-9 rounded-full text-xs font-medium bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Sort Products" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "luxury-panel rounded-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "popular", className: "text-xs font-medium cursor-pointer", children: "Popularity" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "newest", className: "text-xs font-medium cursor-pointer", children: "Newest Arrivals" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "price-low", className: "text-xs font-medium cursor-pointer", children: "Price: Low to High" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "price-high", className: "text-xs font-medium cursor-pointer", children: "Price: High to Low" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "rating", className: "text-xs font-medium cursor-pointer", children: "Top Rated" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        (activeCategory || activeSize || activeColor || searchParams.search || searchParams.minPrice || searchParams.maxPrice) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 py-4", children: [
          searchParams.search && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "gap-1 px-3 py-1 rounded-full text-xs", children: [
            "Search: ",
            searchParams.search,
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateFilters({
              search: ""
            }), className: "hover:text-primary ml-1", children: "×" })
          ] }),
          activeCategory && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "gap-1 px-3 py-1 rounded-full text-xs", children: [
            "Category: ",
            CATEGORIES.find((c) => c.id === activeCategory)?.name || activeCategory,
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateFilters({
              category: ""
            }), className: "hover:text-primary ml-1", children: "×" })
          ] }),
          activeSize && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "gap-1 px-3 py-1 rounded-full text-xs", children: [
            "Size: ",
            activeSize,
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateFilters({
              size: ""
            }), className: "hover:text-primary ml-1", children: "×" })
          ] }),
          activeColor && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "gap-1 px-3 py-1 rounded-full text-xs", children: [
            "Color: ",
            activeColor,
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateFilters({
              color: ""
            }), className: "hover:text-primary ml-1", children: "×" })
          ] }),
          (searchParams.minPrice !== void 0 || searchParams.maxPrice !== void 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "gap-1 px-3 py-1 rounded-full text-xs", children: [
            "Price: ",
            formatPrice(searchParams.minPrice ?? minPriceInDb),
            " - ",
            formatPrice(searchParams.maxPrice ?? maxPriceInDb),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setPriceRange([minPriceInDb, maxPriceInDb]);
              updateFilters({
                minPrice: void 0,
                maxPrice: void 0
              });
            }, className: "hover:text-primary ml-1", children: "×" })
          ] })
        ] }),
        filteredProducts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center text-center py-20 px-4 gap-4 animate-fade-rise", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl", children: "🔍" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-foreground", children: "No outfits found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2 max-w-sm", children: "We couldn't find any outfits matching your current filter criteria. Try adjusting your search or filters." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: resetFilters, variant: "hero", className: "mt-2 rounded-full", children: "Clear All Filters" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6", children: filteredProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/product/${product.id}`, className: "group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "luxury-panel overflow-hidden rounded-[1.6rem] relative flex flex-col h-full bg-card/30 hover:bg-card/75 transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden p-2.5 sm:p-3 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxury-outline overflow-hidden rounded-[1.25rem] bg-brand-pearl relative aspect-[4/5]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.images[0], alt: product.name, className: "w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]", loading: "lazy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => handleWishlistToggle(e, product.id), className: "absolute top-3 right-3 h-8.5 w-8.5 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow-md backdrop-blur-sm z-10 transition-transform active:scale-90", "aria-label": "Add to Wishlist", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `h-4.5 w-4.5 transition-colors ${isInWishlist(product.id) ? "fill-destructive text-destructive" : "text-muted-foreground hover:text-foreground"}` }) }),
            product.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full ${product.badge === "hot" ? "bg-destructive text-destructive-foreground" : product.badge === "sale" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`, children: product.badge }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-brand-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: (e) => handleQuickAdd(e, product), size: "sm", className: "rounded-full shadow-lg bg-background hover:bg-primary hover:text-primary-foreground text-foreground px-3.5 h-9 text-xs font-semibold gap-1.5 transition-transform", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-3.5 w-3.5" }),
                "Add"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full shadow-lg bg-background/90 text-foreground px-3 h-9 text-xs font-semibold flex items-center justify-center gap-1.5 transition-transform hover:bg-background", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" }),
                "View"
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 pt-1 flex-1 flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] text-muted-foreground gap-1 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: product.fabric }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-brand-gold flex items-center gap-0.5", children: [
                  "⭐️ ",
                  product.rating.toFixed(1)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm sm:text-base mt-2 line-clamp-1 group-hover:text-primary transition-colors leading-tight", children: product.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3 gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold text-foreground", children: formatPrice(product.discountPrice) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground line-through", children: formatPrice(product.price) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-primary font-semibold", children: [
                  "(",
                  getDiscountPercent(product.price, product.discountPrice),
                  "% off)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: (e) => handleQuickAdd(e, product), size: "icon", variant: "secondary", className: "lg:hidden h-8 w-8 rounded-full shadow-sm", "aria-label": "Add to cart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4" }) })
            ] })
          ] })
        ] }) }, product.id)) })
      ] })
    ] }) })
  ] });
}
export {
  Shop as component
};
