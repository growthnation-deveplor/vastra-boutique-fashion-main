import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root$1, V as Viewport, C as Corner, S as ScrollAreaScrollbar, a as ScrollAreaThumb } from "../_libs/radix-ui__react-scroll-area.mjs";
import { R as Root, T as Trigger$1, C as Close, P as Portal, a as Content, b as Title, O as Overlay, D as Description } from "../_libs/radix-ui__react-dialog.mjs";
import { R as Root2, T as Trigger, P as Portal2, C as Content2, L as Label2, S as Separator2, I as Item2, a as SubTrigger2, b as SubContent2, c as CheckboxItem2, d as ItemIndicator2, e as RadioItem2 } from "../_libs/radix-ui__react-dropdown-menu.mjs";
import { S as Search, H as Heart, U as User, C as ClipboardList, L as LogOut, a as ShoppingBag, M as Minus, P as Plus, T as Trash2, b as Menu, X, c as ChevronRight, d as Check, e as Circle } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__primitive.mjs";
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
const appCss = "/assets/styles-m6rqrqY2.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const PRODUCTS = [
  // ============ PARTY WEAR DRESSES (8) ============
  {
    id: 1,
    name: "Sequin Embroidered Party Gown",
    category: "party-wear",
    categoryName: "Party Wear Dresses",
    price: 4999,
    discountPrice: 3499,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Maroon", hex: "#800000" }, { name: "Navy", hex: "#000080" }, { name: "Gold", hex: "#DAA520" }],
    fabric: "Georgette with Sequin Work",
    description: "Stunning sequin embroidered party gown perfect for special occasions. Features intricate beadwork, a fitted bodice, and a flowing skirt that moves beautifully.",
    rating: 4.8,
    reviews: 124,
    badge: "trending",
    inStock: true
  },
  {
    id: 2,
    name: "Velvet Off-Shoulder Evening Dress",
    category: "party-wear",
    categoryName: "Party Wear Dresses",
    price: 5499,
    discountPrice: 3999,
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=800&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Black", hex: "#000000" }, { name: "Wine", hex: "#722F37" }],
    fabric: "Premium Velvet",
    description: "Elegant velvet off-shoulder evening dress with a sleek silhouette. Perfect for cocktail parties and formal events.",
    rating: 4.7,
    reviews: 89,
    badge: "new",
    inStock: true
  },
  {
    id: 3,
    name: "Glitter A-Line Party Dress",
    category: "party-wear",
    categoryName: "Party Wear Dresses",
    price: 3999,
    discountPrice: 2799,
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=800&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Rose Gold", hex: "#B76E79" }, { name: "Silver", hex: "#C0C0C0" }],
    fabric: "Shimmer Net with Lining",
    description: "Sparkle and shine in this gorgeous glitter A-line dress. Features a flattering neckline and a twirl-worthy skirt.",
    rating: 4.6,
    reviews: 67,
    badge: "sale",
    inStock: true
  },
  {
    id: 4,
    name: "Lace Cocktail Mini Dress",
    category: "party-wear",
    categoryName: "Party Wear Dresses",
    price: 3499,
    discountPrice: 2499,
    images: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=600&h=800&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Blush", hex: "#DE5D83" }, { name: "White", hex: "#FFFFFF" }],
    fabric: "French Lace with Satin Lining",
    description: "Delicate French lace cocktail dress with a modern mini silhouette. Features scalloped edges and a fitted waist.",
    rating: 4.5,
    reviews: 53,
    badge: null,
    inStock: true
  },
  {
    id: 5,
    name: "Satin Wrap Party Dress",
    category: "party-wear",
    categoryName: "Party Wear Dresses",
    price: 4299,
    discountPrice: 3199,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop"
    ],
    sizes: ["S", "M", "L"],
    colors: [{ name: "Emerald", hex: "#50C878" }, { name: "Burgundy", hex: "#800020" }],
    fabric: "Premium Satin",
    description: "Luxurious satin wrap dress with an elegant drape. The adjustable wrap design flatters every body type.",
    rating: 4.9,
    reviews: 142,
    badge: "trending",
    inStock: true
  },
  {
    id: 6,
    name: "Beaded Bodycon Party Dress",
    category: "party-wear",
    categoryName: "Party Wear Dresses",
    price: 4799,
    discountPrice: 3599,
    images: [
      "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=600&h=800&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Black", hex: "#000000" }, { name: "Red", hex: "#FF0000" }],
    fabric: "Stretch Crepe with Beading",
    description: "Show-stopping beaded bodycon dress that hugs your curves in all the right places. Hand-embellished with premium beadwork.",
    rating: 4.7,
    reviews: 98,
    badge: null,
    inStock: true
  },
  {
    id: 7,
    name: "Tulle Princess Ball Gown",
    category: "party-wear",
    categoryName: "Party Wear Dresses",
    price: 6999,
    discountPrice: 5499,
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d44?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&h=800&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Pastel Pink", hex: "#FFD1DC" }, { name: "Lavender", hex: "#E6E6FA" }],
    fabric: "Multi-layer Tulle with Satin",
    description: "Live your fairy tale moment in this dreamy tulle princess ball gown. Multiple layers of soft tulle create a volumious skirt.",
    rating: 4.9,
    reviews: 201,
    badge: "hot",
    inStock: true
  },
  {
    id: 8,
    name: "Metallic One-Shoulder Dress",
    category: "party-wear",
    categoryName: "Party Wear Dresses",
    price: 3999,
    discountPrice: 2999,
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1582142839970-2b9e04b60f65?w=600&h=800&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Gold", hex: "#FFD700" }, { name: "Silver", hex: "#C0C0C0" }],
    fabric: "Metallic Fabric with Stretch",
    description: "Bold and beautiful metallic one-shoulder dress. The asymmetric neckline adds a modern edge to this party essential.",
    rating: 4.4,
    reviews: 45,
    badge: "new",
    inStock: true
  },
  // ============ WESTERN DRESSES (7) ============
  {
    id: 9,
    name: "Floral Maxi Sundress",
    category: "western-wear",
    categoryName: "Western Dresses",
    price: 2999,
    discountPrice: 2199,
    images: [
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d44?w=600&h=800&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Floral Blue", hex: "#6495ED" }, { name: "Floral Pink", hex: "#FFB6C1" }],
    fabric: "Rayon Crepe",
    description: "Breezy floral maxi sundress perfect for summer outings. Features a flattering V-neckline and flowing silhouette.",
    rating: 4.6,
    reviews: 78,
    badge: "trending",
    inStock: true
  },
  {
    id: 10,
    name: "Denim Shirt Dress",
    category: "western-wear",
    categoryName: "Western Dresses",
    price: 2499,
    discountPrice: 1899,
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&h=800&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Light Blue", hex: "#ADD8E6" }, { name: "Dark Blue", hex: "#00008B" }],
    fabric: "Premium Denim",
    description: "Classic denim shirt dress with a belt for a chic casual look. Versatile enough for day or night styling.",
    rating: 4.5,
    reviews: 62,
    badge: null,
    inStock: true
  },
  {
    id: 11,
    name: "Ruffle Midi Dress",
    category: "western-wear",
    categoryName: "Western Dresses",
    price: 3299,
    discountPrice: 2499,
    images: [
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?w=600&h=800&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Coral", hex: "#FF7F50" }, { name: "Sage", hex: "#BCB88A" }],
    fabric: "Cotton Blend",
    description: "Romantic ruffle midi dress with tiered layers and a cinched waist. Effortlessly elegant for any occasion.",
    rating: 4.7,
    reviews: 91,
    badge: "new",
    inStock: true
  },
  {
    id: 12,
    name: "Blazer Dress",
    category: "western-wear",
    categoryName: "Western Dresses",
    price: 3999,
    discountPrice: 2999,
    images: [
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551833726-b6549d0a1de2?w=600&h=800&fit=crop"
    ],
    sizes: ["S", "M", "L"],
    colors: [{ name: "Black", hex: "#000000" }, { name: "White", hex: "#FFFFFF" }, { name: "Beige", hex: "#F5F5DC" }],
    fabric: "Structured Polyester Blend",
    description: "Power dressing made easy with this tailored blazer dress. Sharp shoulders and a mini length create a bold look.",
    rating: 4.8,
    reviews: 115,
    badge: "trending",
    inStock: true
  },
  {
    id: 13,
    name: "Polka Dot Wrap Dress",
    category: "western-wear",
    categoryName: "Western Dresses",
    price: 2799,
    discountPrice: 1999,
    images: [
      "https://images.unsplash.com/photo-1623609163859-ca93c959b98a?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Navy Polka", hex: "#000080" }, { name: "Red Polka", hex: "#DC143C" }],
    fabric: "Crepe",
    description: "Timeless polka dot wrap dress with a flattering wrap silhouette. The classic print adds charm to your everyday style.",
    rating: 4.4,
    reviews: 56,
    badge: "sale",
    inStock: true
  },
  {
    id: 14,
    name: "Stripe Knit Bodycon",
    category: "western-wear",
    categoryName: "Western Dresses",
    price: 2299,
    discountPrice: 1699,
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=800&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Black/White", hex: "#333333" }, { name: "Navy/White", hex: "#000080" }],
    fabric: "Knit Fabric",
    description: "Chic stripe knit bodycon dress that combines comfort with style. The stretchy fabric ensures a perfect fit.",
    rating: 4.3,
    reviews: 41,
    badge: null,
    inStock: true
  },
  {
    id: 15,
    name: "Puff Sleeve Mini Dress",
    category: "western-wear",
    categoryName: "Western Dresses",
    price: 2599,
    discountPrice: 1899,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Lilac", hex: "#C8A2C8" }, { name: "Peach", hex: "#FFDAB9" }],
    fabric: "Cotton Poplin",
    description: "Trendy puff sleeve mini dress with a square neckline. A must-have wardrobe staple for the season.",
    rating: 4.6,
    reviews: 73,
    badge: "new",
    inStock: true
  },
  // ============ ETHNIC WEAR (7) ============
  {
    id: 16,
    name: "Embroidered Anarkali Suit",
    category: "ethnic-wear",
    categoryName: "Ethnic Wear",
    price: 5999,
    discountPrice: 4499,
    images: [
      "/images/products/purple-mirror-anarkali.jpeg",
      "/images/products/ivory-mirror-suit.jpeg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Purple", hex: "#800080" }, { name: "Ivory", hex: "#FFFFF0" }],
    fabric: "Georgette with Heavy Mirror Embroidery",
    description: "Regal embroidered Anarkali suit with intricate mirror work and gold border embellishments. Comes with matching dupatta and bottom.",
    rating: 4.9,
    reviews: 167,
    badge: "trending",
    inStock: true
  },
  {
    id: 17,
    name: "Silk Palazzo Suit Set",
    category: "ethnic-wear",
    categoryName: "Ethnic Wear",
    price: 4499,
    discountPrice: 3299,
    images: [
      "/images/products/ivory-mirror-suit.jpeg",
      "/images/products/purple-mirror-anarkali.jpeg"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Ivory", hex: "#FFFFF0" }, { name: "Purple", hex: "#800080" }],
    fabric: "Art Silk with Mirror Work",
    description: "Elegant silk palazzo suit set with mirror work embellishments and matching palazzo pants. A sophisticated choice for festive occasions.",
    rating: 4.7,
    reviews: 98,
    badge: "sale",
    inStock: true
  },
  {
    id: 18,
    name: "Mirror Work Lehenga Set",
    category: "ethnic-wear",
    categoryName: "Ethnic Wear",
    price: 8999,
    discountPrice: 6999,
    images: [
      "/images/products/purple-mirror-anarkali.jpeg",
      "/images/products/ivory-mirror-suit.jpeg"
    ],
    sizes: ["S", "M", "L"],
    colors: [{ name: "Purple", hex: "#800080" }, { name: "Ivory", hex: "#FFFFF0" }],
    fabric: "Heavy Georgette with Mirror Work",
    description: "Stunning mirror work lehenga set with heavy embroidery. Perfect for weddings and grand celebrations. Includes choli and dupatta.",
    rating: 4.9,
    reviews: 234,
    badge: "hot",
    inStock: true
  },
  {
    id: 19,
    name: "Cotton Printed Kurti",
    category: "ethnic-wear",
    categoryName: "Ethnic Wear",
    price: 1499,
    discountPrice: 999,
    images: [
      "/images/products/red-cotton-kurta-set.jpeg",
      "/images/products/olive-cotton-kurta-set.jpeg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Red", hex: "#8B0000" }, { name: "Olive", hex: "#556B2F" }, { name: "Pink", hex: "#FFB6C1" }],
    fabric: "Pure Cotton",
    description: "Comfortable cotton printed kurti with elegant gathers and pockets. Perfect for daily wear with a touch of ethnic charm.",
    rating: 4.5,
    reviews: 189,
    badge: null,
    inStock: true
  },
  {
    id: 20,
    name: "Chikankari Kurta Set",
    category: "ethnic-wear",
    categoryName: "Ethnic Wear",
    price: 3999,
    discountPrice: 2999,
    images: [
      "/images/products/pink-cotton-kurta-set.jpeg",
      "/images/products/blue-cotton-kurta-set.jpeg"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Pink", hex: "#DB7093" }, { name: "Blue", hex: "#B0C4DE" }],
    fabric: "Modal Cotton with Chikankari",
    description: "Exquisite Lucknowi Chikankari kurta set with delicate hand embroidery. Timeless elegance meets comfortable styling.",
    rating: 4.8,
    reviews: 156,
    badge: "trending",
    inStock: true
  },
  {
    id: 21,
    name: "Brocade Silk Suit",
    category: "ethnic-wear",
    categoryName: "Ethnic Wear",
    price: 6499,
    discountPrice: 4999,
    images: [
      "/images/products/olive-cotton-kurta-set.jpeg",
      "/images/products/red-cotton-kurta-set.jpeg"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Olive", hex: "#556B2F" }, { name: "Red", hex: "#8B0000" }],
    fabric: "Banarasi Brocade",
    description: "Luxurious Banarasi brocade silk suit with rich golden zari work. A statement piece for weddings and celebrations.",
    rating: 4.8,
    reviews: 112,
    badge: "new",
    inStock: true
  },
  {
    id: 22,
    name: "Sharara Suit Set",
    category: "ethnic-wear",
    categoryName: "Ethnic Wear",
    price: 5499,
    discountPrice: 3999,
    images: [
      "https://images.unsplash.com/photo-1609748340510-afb7a56cf652?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583391733981-8b530b07ef08?w=600&h=800&fit=crop"
    ],
    sizes: ["S", "M", "L"],
    colors: [{ name: "Rust", hex: "#B7410E" }, { name: "Olive", hex: "#808000" }],
    fabric: "Chiffon with Embroidery",
    description: "Graceful sharara suit set with flowing sharara pants and a beautifully embroidered kurta. Includes matching dupatta.",
    rating: 4.6,
    reviews: 87,
    badge: null,
    inStock: true
  },
  // ============ BOUTIQUE COLLECTION (7) ============
  {
    id: 23,
    name: "Designer Cape Dress",
    category: "boutique-collection",
    categoryName: "Boutique Collection",
    price: 7999,
    discountPrice: 5999,
    images: [
      "/images/products/teal-scallop-blouse-front.jpeg",
      "/images/products/teal-scallop-blouse-back.jpeg"
    ],
    sizes: ["S", "M", "L"],
    colors: [{ name: "Ivory", hex: "#FFFFF0" }, { name: "Champagne", hex: "#F7E7CE" }],
    fabric: "Crepe with Organza Cape",
    description: "Exclusive designer cape dress with an attached organza cape. A boutique-exclusive piece that exudes sophistication.",
    rating: 4.9,
    reviews: 78,
    badge: "hot",
    inStock: true
  },
  {
    id: 24,
    name: "Hand-Painted Silk Dress",
    category: "boutique-collection",
    categoryName: "Boutique Collection",
    price: 9999,
    discountPrice: 7499,
    images: [
      "/images/products/green-brocade-blouse-front.jpeg",
      "/images/products/green-brocade-blouse-back.jpeg"
    ],
    sizes: ["S", "M", "L"],
    colors: [{ name: "Multi", hex: "#FF6347" }],
    fabric: "Pure Silk with Hand Painting",
    description: "One-of-a-kind hand-painted silk dress by artisan craftsmen. Each piece is unique with original artwork patterns.",
    rating: 5,
    reviews: 45,
    badge: "trending",
    inStock: true
  },
  {
    id: 25,
    name: "Embroidered Jacket Dress",
    category: "boutique-collection",
    categoryName: "Boutique Collection",
    price: 6499,
    discountPrice: 4999,
    images: [
      "/images/products/burgundy-velvet-blouse-front.jpeg",
      "/images/products/burgundy-velvet-blouse-back.jpeg"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Black", hex: "#000000" }, { name: "Blush", hex: "#DE5D83" }],
    fabric: "Velvet with Thread Embroidery",
    description: "Statement embroidered jacket dress from our boutique collection. The rich velvet fabric and detailed embroidery create a luxurious look.",
    rating: 4.7,
    reviews: 63,
    badge: "new",
    inStock: true
  },
  {
    id: 26,
    name: "Pearl Embellished Gown",
    category: "boutique-collection",
    categoryName: "Boutique Collection",
    price: 11999,
    discountPrice: 8999,
    images: [
      "/images/products/black-brocade-blouse.jpeg",
      "/images/products/burgundy-velvet-blouse-back.jpeg"
    ],
    sizes: ["S", "M", "L"],
    colors: [{ name: "Pearl White", hex: "#FEFEFE" }, { name: "Soft Pink", hex: "#FFB6C1" }],
    fabric: "Organza with Pearl Work",
    description: "Exquisite pearl embellished gown handcrafted with thousands of pearls. A masterpiece for the most special occasions.",
    rating: 5,
    reviews: 34,
    badge: "hot",
    inStock: true
  },
  {
    id: 27,
    name: "Asymmetric Draped Dress",
    category: "boutique-collection",
    categoryName: "Boutique Collection",
    price: 5999,
    discountPrice: 4499,
    images: [
      "/images/products/teal-v-neck-blouse.jpeg",
      "/images/products/teal-ruffle-blouse-front.jpeg"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Teal", hex: "#008080" }, { name: "Wine", hex: "#722F37" }],
    fabric: "Satin Blend",
    description: "Modern asymmetric draped dress with a sculptural silhouette. The innovative draping technique creates a unique look.",
    rating: 4.6,
    reviews: 52,
    badge: null,
    inStock: true
  },
  {
    id: 28,
    name: "Feather Trim Cocktail Dress",
    category: "boutique-collection",
    categoryName: "Boutique Collection",
    price: 8499,
    discountPrice: 6499,
    images: [
      "/images/products/magenta-bow-blouse.jpeg",
      "/images/products/magenta-halter-blouse.jpeg"
    ],
    sizes: ["S", "M", "L"],
    colors: [{ name: "Black", hex: "#000000" }, { name: "Blush Pink", hex: "#FFB6C1" }],
    fabric: "Crepe with Ostrich Feather Trim",
    description: "Glamorous cocktail dress featuring genuine ostrich feather trim at the hemline. A show-stopping boutique exclusive.",
    rating: 4.8,
    reviews: 41,
    badge: "trending",
    inStock: true
  },
  {
    id: 29,
    name: "Crystal Studded Mini",
    category: "boutique-collection",
    categoryName: "Boutique Collection",
    price: 7499,
    discountPrice: 5499,
    images: [
      "/images/products/sage-blouse-front.jpeg",
      "/images/products/sage-blouse-back.jpeg"
    ],
    sizes: ["XS", "S", "M"],
    colors: [{ name: "Crystal Clear", hex: "#F0F0F0" }, { name: "Midnight Blue", hex: "#191970" }],
    fabric: "Italian Crepe with Swarovski Elements",
    description: "Dazzling crystal studded mini dress featuring genuine Swarovski elements. Each crystal is hand-placed for maximum sparkle.",
    rating: 4.9,
    reviews: 29,
    badge: "new",
    inStock: true
  },
  // ============ TRADITIONAL WEAR (6) ============
  {
    id: 30,
    name: "Banarasi Silk Saree",
    category: "traditional-wear",
    categoryName: "Traditional Wear",
    price: 7999,
    discountPrice: 5999,
    images: [
      "https://images.unsplash.com/photo-1610030469668-6963b1e8e3fd?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583391733981-8b530b07ef08?w=600&h=800&fit=crop"
    ],
    sizes: ["Free Size"],
    colors: [{ name: "Red", hex: "#DC143C" }, { name: "Purple", hex: "#800080" }],
    fabric: "Pure Banarasi Silk",
    description: "Authentic Banarasi silk saree with traditional motifs and rich golden zari border. A timeless treasure for your collection.",
    rating: 4.9,
    reviews: 198,
    badge: "trending",
    inStock: true
  },
  {
    id: 31,
    name: "Kanjeevaram Silk Saree",
    category: "traditional-wear",
    categoryName: "Traditional Wear",
    price: 12999,
    discountPrice: 9999,
    images: [
      "https://images.unsplash.com/photo-1583391733981-8b530b07ef08?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1609748340510-afb7a56cf652?w=600&h=800&fit=crop"
    ],
    sizes: ["Free Size"],
    colors: [{ name: "Emerald Green", hex: "#50C878" }, { name: "Royal Blue", hex: "#4169E1" }],
    fabric: "Pure Kanjeevaram Silk",
    description: "Premium Kanjeevaram silk saree handwoven by master artisans. Rich pallu and intricate temple border design.",
    rating: 5,
    reviews: 87,
    badge: "hot",
    inStock: true
  },
  {
    id: 32,
    name: "Patola Print Dress",
    category: "traditional-wear",
    categoryName: "Traditional Wear",
    price: 3999,
    discountPrice: 2999,
    images: [
      "https://images.unsplash.com/photo-1609748340510-afb7a56cf652?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1610030469668-6963b1e8e3fd?w=600&h=800&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Red Multi", hex: "#DC143C" }, { name: "Green Multi", hex: "#228B22" }],
    fabric: "Silk Blend",
    description: "Beautiful Patola print inspired dress combining traditional artistry with modern cuts. Perfect blend of heritage and contemporary.",
    rating: 4.6,
    reviews: 65,
    badge: null,
    inStock: true
  },
  {
    id: 33,
    name: "Bandhani Print Suit",
    category: "traditional-wear",
    categoryName: "Traditional Wear",
    price: 3499,
    discountPrice: 2499,
    images: [
      "https://images.unsplash.com/photo-1583391733981-8b530b07ef08?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1610030469668-6963b1e8e3fd?w=600&h=800&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Yellow", hex: "#FFD700" }, { name: "Red", hex: "#DC143C" }],
    fabric: "Silk with Bandhani Print",
    description: "Traditional Bandhani tie-dye printed suit set with vibrant colors. Represents the rich textile heritage of Rajasthan.",
    rating: 4.5,
    reviews: 54,
    badge: "sale",
    inStock: true
  },
  {
    id: 34,
    name: "Zardozi Embroidered Suit",
    category: "traditional-wear",
    categoryName: "Traditional Wear",
    price: 8999,
    discountPrice: 6999,
    images: [
      "https://images.unsplash.com/photo-1610030469668-6963b1e8e3fd?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1609748340510-afb7a56cf652?w=600&h=800&fit=crop"
    ],
    sizes: ["S", "M", "L"],
    colors: [{ name: "Gold", hex: "#DAA520" }, { name: "Silver", hex: "#C0C0C0" }],
    fabric: "Velvet with Zardozi Work",
    description: "Opulent Zardozi embroidered suit with gold and silver metallic thread work. Museum-quality craftsmanship for grand events.",
    rating: 4.9,
    reviews: 76,
    badge: "hot",
    inStock: true
  },
  {
    id: 35,
    name: "Gota Patti Lehenga",
    category: "traditional-wear",
    categoryName: "Traditional Wear",
    price: 9999,
    discountPrice: 7499,
    images: [
      "https://images.unsplash.com/photo-1609748340510-afb7a56cf652?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583391733981-8b530b07ef08?w=600&h=800&fit=crop"
    ],
    sizes: ["S", "M", "L"],
    colors: [{ name: "Hot Pink", hex: "#FF69B4" }, { name: "Orange", hex: "#FFA500" }],
    fabric: "Georgette with Gota Patti Work",
    description: "Magnificent Gota Patti lehenga with traditional Rajasthani goldwork embroidery. Complete set with choli and dupatta.",
    rating: 4.8,
    reviews: 143,
    badge: "trending",
    inStock: true
  },
  // ============ CASUAL WEAR (6) ============
  {
    id: 36,
    name: "Cotton T-Shirt Dress",
    category: "casual-wear",
    categoryName: "Casual Wear",
    price: 1299,
    discountPrice: 899,
    images: [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "White", hex: "#FFFFFF" }, { name: "Grey", hex: "#808080" }, { name: "Black", hex: "#000000" }],
    fabric: "100% Cotton",
    description: "Relaxed-fit cotton t-shirt dress for everyday comfort. Soft, breathable fabric perfect for casual outings.",
    rating: 4.4,
    reviews: 245,
    badge: null,
    inStock: true
  },
  {
    id: 37,
    name: "Linen Shirt Dress",
    category: "casual-wear",
    categoryName: "Casual Wear",
    price: 2299,
    discountPrice: 1699,
    images: [
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=800&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Natural", hex: "#F5F0E8" }, { name: "Olive", hex: "#808000" }, { name: "Sky Blue", hex: "#87CEEB" }],
    fabric: "Pure Linen",
    description: "Effortlessly chic linen shirt dress with a relaxed silhouette. Perfect for warm weather styling with a natural aesthetic.",
    rating: 4.6,
    reviews: 134,
    badge: "trending",
    inStock: true
  },
  {
    id: 38,
    name: "Jersey Maxi Dress",
    category: "casual-wear",
    categoryName: "Casual Wear",
    price: 1999,
    discountPrice: 1499,
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d44?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Black", hex: "#000000" }, { name: "Navy", hex: "#000080" }, { name: "Burgundy", hex: "#800020" }],
    fabric: "Stretch Jersey",
    description: "Comfortable jersey maxi dress that transitions effortlessly from day to evening. Super soft stretch fabric.",
    rating: 4.5,
    reviews: 178,
    badge: "sale",
    inStock: true
  },
  {
    id: 39,
    name: "Chambray Smock Dress",
    category: "casual-wear",
    categoryName: "Casual Wear",
    price: 1799,
    discountPrice: 1299,
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&h=800&fit=crop"
    ],
    sizes: ["S", "M", "L"],
    colors: [{ name: "Light Wash", hex: "#B0C4DE" }, { name: "Medium Wash", hex: "#6495ED" }],
    fabric: "Chambray Cotton",
    description: "Cute chambray smock dress with puff sleeves and a relaxed fit. Casual yet stylish for everyday wear.",
    rating: 4.3,
    reviews: 67,
    badge: null,
    inStock: true
  },
  {
    id: 40,
    name: "Printed Sundress",
    category: "casual-wear",
    categoryName: "Casual Wear",
    price: 1599,
    discountPrice: 1199,
    images: [
      "https://images.unsplash.com/photo-1623609163859-ca93c959b98a?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=600&h=800&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Tropical", hex: "#FF6347" }, { name: "Garden", hex: "#90EE90" }],
    fabric: "Viscose Rayon",
    description: "Cheerful printed sundress perfect for sunny days. Lightweight viscose fabric keeps you cool and comfortable.",
    rating: 4.4,
    reviews: 89,
    badge: "new",
    inStock: true
  },
  {
    id: 41,
    name: "Hoodie Sweatshirt Dress",
    category: "casual-wear",
    categoryName: "Casual Wear",
    price: 1999,
    discountPrice: 1499,
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=800&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Pink", hex: "#FFB6C1" }, { name: "Lavender", hex: "#E6E6FA" }, { name: "Grey", hex: "#808080" }],
    fabric: "French Terry",
    description: "Cozy hoodie sweatshirt dress for laid-back weekends. Ultra-soft French terry fabric with kangaroo pocket.",
    rating: 4.6,
    reviews: 112,
    badge: null,
    inStock: true
  },
  // ============ TRENDY FASHION (5) ============
  {
    id: 42,
    name: "Cut-Out Bodycon Dress",
    category: "trendy-fashion",
    categoryName: "Trendy Fashion",
    price: 2999,
    discountPrice: 2199,
    images: [
      "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Black", hex: "#000000" }, { name: "Neon Green", hex: "#39FF14" }],
    fabric: "Ribbed Knit",
    description: "Trendy cut-out bodycon dress with strategic cutouts for a daring look. The ribbed knit fabric provides the perfect fit.",
    rating: 4.5,
    reviews: 76,
    badge: "trending",
    inStock: true
  },
  {
    id: 43,
    name: "Corset Top & Skirt Set",
    category: "trendy-fashion",
    categoryName: "Trendy Fashion",
    price: 3499,
    discountPrice: 2599,
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=600&h=800&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "White", hex: "#FFFFFF" }, { name: "Baby Blue", hex: "#89CFF0" }],
    fabric: "Stretch Satin",
    description: "Trendy corset top and matching mini skirt set. The structured corset flatters your silhouette while the satin fabric adds luxury.",
    rating: 4.7,
    reviews: 93,
    badge: "hot",
    inStock: true
  },
  {
    id: 44,
    name: "Mesh Overlay Dress",
    category: "trendy-fashion",
    categoryName: "Trendy Fashion",
    price: 2799,
    discountPrice: 1999,
    images: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=600&h=800&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Black/Nude", hex: "#000000" }, { name: "All White", hex: "#FFFFFF" }],
    fabric: "Mesh with Inner Lining",
    description: "Edgy mesh overlay dress layered over a sleek inner lining. The sheer mesh adds an element of allure.",
    rating: 4.4,
    reviews: 58,
    badge: "new",
    inStock: true
  },
  {
    id: 45,
    name: "Cargo Pocket Dress",
    category: "trendy-fashion",
    categoryName: "Trendy Fashion",
    price: 2499,
    discountPrice: 1899,
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&h=800&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Khaki", hex: "#C3B091" }, { name: "Black", hex: "#000000" }, { name: "Olive", hex: "#808000" }],
    fabric: "Cotton Twill",
    description: "Utilitarian-chic cargo pocket dress with oversized pockets and a cinched waist. The hottest trend of the season.",
    rating: 4.6,
    reviews: 84,
    badge: "trending",
    inStock: true
  },
  {
    id: 46,
    name: "Crochet Mini Dress",
    category: "trendy-fashion",
    categoryName: "Trendy Fashion",
    price: 2999,
    discountPrice: 2299,
    images: [
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d44?w=600&h=800&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Cream", hex: "#FFFDD0" }, { name: "Tan", hex: "#D2B48C" }],
    fabric: "Hand Crochet Cotton",
    description: "Boho-chic hand crochet mini dress with intricate openwork patterns. Each piece is hand-crocheted for a unique look.",
    rating: 4.8,
    reviews: 67,
    badge: null,
    inStock: true
  },
  // ============ 14+ GIRLS COLLECTION (6) ============
  {
    id: 47,
    name: "Pastel Ruffle Top & Jeans Set",
    category: "girls-14-plus",
    categoryName: "14+ Girls Collection",
    price: 2499,
    discountPrice: 1799,
    images: [
      "/images/products/navy-kids-dress.jpeg",
      "/images/products/yellow-blue-kids-dress.jpeg"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Pink", hex: "#FFB6C1" }, { name: "Mint", hex: "#98FB98" }],
    fabric: "Cotton Blend",
    description: "Trendy pastel ruffle top paired with fitted jeans. Age-appropriate style that's perfect for teens who love fashion.",
    rating: 4.5,
    reviews: 95,
    badge: "trending",
    inStock: true
  },
  {
    id: 48,
    name: "Denim Pinafore Dress",
    category: "girls-14-plus",
    categoryName: "14+ Girls Collection",
    price: 1999,
    discountPrice: 1499,
    images: [
      "/images/products/sage-kids-romper.jpeg",
      "/images/products/olive-kids-set.jpeg"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Blue", hex: "#4682B4" }, { name: "Black", hex: "#000000" }],
    fabric: "Stretch Denim",
    description: "Cute denim pinafore dress that can be layered over tees and turtlenecks. A versatile wardrobe essential for young fashionistas.",
    rating: 4.6,
    reviews: 78,
    badge: "new",
    inStock: true
  },
  {
    id: 49,
    name: "Printed Skater Dress",
    category: "girls-14-plus",
    categoryName: "14+ Girls Collection",
    price: 1799,
    discountPrice: 1299,
    images: [
      "/images/products/magenta-kids-lehenga.jpeg",
      "/images/products/mint-kids-lehenga.jpeg"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Floral", hex: "#FF69B4" }, { name: "Abstract", hex: "#6A5ACD" }],
    fabric: "Scuba Knit",
    description: "Fun printed skater dress with a twirl-worthy flared skirt. Perfect for birthday parties and casual gatherings.",
    rating: 4.4,
    reviews: 112,
    badge: null,
    inStock: true
  },
  {
    id: 50,
    name: "Crop Top & Palazzo Set",
    category: "girls-14-plus",
    categoryName: "14+ Girls Collection",
    price: 2299,
    discountPrice: 1699,
    images: [
      "/images/products/burgundy-kids-gown.jpeg",
      "/images/products/magenta-kids-lehenga.jpeg"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Yellow/White", hex: "#FFD700" }, { name: "Pink/White", hex: "#FFB6C1" }],
    fabric: "Cotton Lycra",
    description: "Stylish crop top and palazzo pants set perfect for outings. Comfortable stretch fabric with vibrant prints.",
    rating: 4.5,
    reviews: 87,
    badge: "sale",
    inStock: true
  },
  {
    id: 51,
    name: "Tie-Dye Oversized Tee Dress",
    category: "girls-14-plus",
    categoryName: "14+ Girls Collection",
    price: 1299,
    discountPrice: 999,
    images: [
      "/images/products/yellow-blue-kids-dress.jpeg",
      "/images/products/navy-kids-dress.jpeg"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Purple Swirl", hex: "#9370DB" }, { name: "Blue Ocean", hex: "#4682B4" }, { name: "Sunset", hex: "#FF6347" }],
    fabric: "100% Cotton",
    description: "Cool tie-dye oversized tee dress for the trend-conscious teen. Unique hand-dyed patterns make each piece one-of-a-kind.",
    rating: 4.7,
    reviews: 156,
    badge: "trending",
    inStock: true
  },
  {
    id: 52,
    name: "Athletic Chic Dress",
    category: "girls-14-plus",
    categoryName: "14+ Girls Collection",
    price: 1999,
    discountPrice: 1499,
    images: [
      "/images/products/mint-kids-lehenga.jpeg",
      "/images/products/sage-kids-romper.jpeg"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Black/White", hex: "#000000" }, { name: "Grey/Pink", hex: "#808080" }],
    fabric: "Performance Knit",
    description: "Sporty-chic athletic dress that goes from class to hangouts. Moisture-wicking performance fabric with trendy styling.",
    rating: 4.3,
    reviews: 64,
    badge: null,
    inStock: true
  }
];
const CATEGORIES = [
  {
    id: "party-wear",
    name: "Party Wear Dresses",
    count: 8,
    image: "/images/products/burgundy-kids-gown.jpeg",
    description: "Stunning dresses for parties and celebrations"
  },
  {
    id: "western-wear",
    name: "Western Dresses",
    count: 7,
    image: "/images/products/pink-cotton-kurta-set.jpeg",
    description: "Modern western styles for every occasion"
  },
  {
    id: "ethnic-wear",
    name: "Ethnic Wear",
    count: 7,
    image: "/images/categories/ethnic-wear.jpeg",
    description: "Traditional and ethnic fashion collection"
  },
  {
    id: "boutique-collection",
    name: "Boutique Collection",
    count: 7,
    image: "/images/categories/boutique-collection.jpeg",
    description: "Exclusive designer boutique pieces"
  },
  {
    id: "traditional-wear",
    name: "Traditional Wear",
    count: 6,
    image: "/images/categories/traditional-wear.jpeg",
    description: "Timeless traditional clothing"
  },
  {
    id: "casual-wear",
    name: "Casual Wear",
    count: 6,
    image: "/images/products/olive-cotton-kurta-set.jpeg",
    description: "Comfortable everyday fashion"
  },
  {
    id: "trendy-fashion",
    name: "Trendy Fashion",
    count: 5,
    image: "/images/products/red-blouse.jpeg",
    description: "Latest fashion trends and styles"
  },
  {
    id: "girls-14-plus",
    name: "14+ Girls Collection",
    count: 6,
    image: "/images/categories/kids-collection.jpeg",
    description: "Trendy fashion for young girls"
  }
];
const COUPONS = {
  "WELCOME10": 0.1,
  // 10% OFF
  "VASTRA20": 0.2,
  // 20% OFF
  "FESTIVE30": 0.3
  // 30% OFF
};
function getProductById(id) {
  return PRODUCTS.find((p) => p.id === Number(id));
}
function getProductsByCategory(categoryId) {
  return PRODUCTS.filter((p) => p.category === categoryId);
}
function getDiscountPercent(price, discountPrice) {
  return Math.round((price - discountPrice) / price * 100);
}
function formatPrice(price) {
  return "₹" + price.toLocaleString("en-IN");
}
const StoreContext = reactExports.createContext(void 0);
const StoreProvider = ({ children }) => {
  const [cart, setCart] = reactExports.useState([]);
  const [wishlist, setWishlist] = reactExports.useState([]);
  const [currentUser, setCurrentUser] = reactExports.useState(null);
  const [orders, setOrders] = reactExports.useState([]);
  reactExports.useEffect(() => {
    try {
      const storedCart = localStorage.getItem("vastra_cart");
      if (storedCart) setCart(JSON.parse(storedCart));
      const storedWishlist = localStorage.getItem("vastra_wishlist");
      if (storedWishlist) setWishlist(JSON.parse(storedWishlist));
      const storedUser = localStorage.getItem("vastra_current_user");
      if (storedUser) setCurrentUser(JSON.parse(storedUser));
      const storedOrders = localStorage.getItem("vastra_orders");
      if (storedOrders) setOrders(JSON.parse(storedOrders));
    } catch (e) {
      console.error("Error loading state from localStorage:", e);
    }
  }, []);
  const saveCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("vastra_cart", JSON.stringify(newCart));
  };
  const saveWishlist = (newWishlist) => {
    setWishlist(newWishlist);
    localStorage.setItem("vastra_wishlist", JSON.stringify(newWishlist));
  };
  const saveCurrentUser = (user) => {
    setCurrentUser(user);
    if (user) {
      localStorage.setItem("vastra_current_user", JSON.stringify(user));
      try {
        const users = JSON.parse(localStorage.getItem("vastra_users") || "[]");
        const index = users.findIndex((u) => u.id === user.id);
        if (index > -1) {
          users[index] = { ...users[index], ...user };
          localStorage.setItem("vastra_users", JSON.stringify(users));
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      localStorage.removeItem("vastra_current_user");
    }
  };
  const saveOrders = (newOrders) => {
    setOrders(newOrders);
    localStorage.setItem("vastra_orders", JSON.stringify(newOrders));
  };
  const addToCart = (productId, size, color, quantity = 1) => {
    const product = getProductById(productId);
    if (!product) {
      toast.error("Product not found");
      return;
    }
    const existingIndex = cart.findIndex(
      (item) => item.productId === productId && item.size === size && item.color.name === color.name
    );
    let newCart = [...cart];
    if (existingIndex > -1) {
      newCart[existingIndex].quantity += quantity;
    } else {
      newCart.push({
        productId,
        size,
        color,
        quantity,
        addedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    saveCart(newCart);
    toast.success(`${product.name} added to cart`);
  };
  const removeFromCart = (productId, size, colorName) => {
    const newCart = cart.filter(
      (item) => !(item.productId === productId && item.size === size && item.color.name === colorName)
    );
    saveCart(newCart);
    toast.info("Product removed from cart");
  };
  const updateCartQuantity = (productId, size, colorName, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, size, colorName);
      return;
    }
    const newCart = cart.map((item) => {
      if (item.productId === productId && item.size === size && item.color.name === colorName) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    saveCart(newCart);
  };
  const clearCart = () => {
    saveCart([]);
  };
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => {
    const product = getProductById(item.productId);
    const price = product ? product.discountPrice : 0;
    return total + price * item.quantity;
  }, 0);
  const getCartTotal = (couponCode) => {
    let discount = 0;
    if (couponCode && COUPONS[couponCode.toUpperCase()]) {
      discount = cartSubtotal * COUPONS[couponCode.toUpperCase()];
    }
    const shipping = cartSubtotal > 999 || cartSubtotal === 0 ? 0 : 99;
    const tax = Math.round(cartSubtotal * 0.05);
    const total = Math.round(cartSubtotal - discount + shipping + tax);
    return {
      subtotal: cartSubtotal,
      discount: Math.round(discount),
      shipping,
      tax,
      total
    };
  };
  const toggleWishlist = (productId) => {
    const index = wishlist.indexOf(productId);
    let added = false;
    let newWishlist = [...wishlist];
    if (index === -1) {
      newWishlist.push(productId);
      added = true;
      toast.success("Product added to wishlist");
    } else {
      newWishlist.splice(index, 1);
      toast.info("Product removed from wishlist");
    }
    saveWishlist(newWishlist);
    return added;
  };
  const isInWishlist = (productId) => {
    return wishlist.includes(productId);
  };
  const registerUser = (name, email, password) => {
    try {
      const users = JSON.parse(localStorage.getItem("vastra_users") || "[]");
      if (users.some((u) => u.email === email)) {
        toast.error("Email already registered");
        return false;
      }
      const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        // In a production app, password would be hashed
        addresses: [],
        orders: [],
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      users.push(newUser);
      localStorage.setItem("vastra_users", JSON.stringify(users));
      const sessionUser = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        addresses: [],
        orders: [],
        createdAt: newUser.createdAt
      };
      saveCurrentUser(sessionUser);
      toast.success("Registration successful!");
      return true;
    } catch (e) {
      console.error(e);
      toast.error("Error registering user");
      return false;
    }
  };
  const loginUser = (email, password) => {
    try {
      const users = JSON.parse(localStorage.getItem("vastra_users") || "[]");
      const user = users.find((u) => u.email === email && u.password === password);
      if (!user) {
        toast.error("Invalid email or password");
        return false;
      }
      const sessionUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        addresses: user.addresses || [],
        orders: user.orders || [],
        createdAt: user.createdAt
      };
      saveCurrentUser(sessionUser);
      toast.success(`Welcome back, ${user.name}!`);
      return true;
    } catch (e) {
      console.error(e);
      toast.error("Error logging in");
      return false;
    }
  };
  const logoutUser = () => {
    saveCurrentUser(null);
    toast.info("Logged out successfully");
  };
  const addAddress = (address) => {
    if (!currentUser) {
      toast.error("Please login to add address");
      return false;
    }
    const newAddress = {
      ...address,
      id: Date.now()
    };
    const addresses = [...currentUser.addresses || [], newAddress];
    saveCurrentUser({
      ...currentUser,
      addresses
    });
    toast.success("Address added successfully");
    return true;
  };
  const deleteAddress = (addressId) => {
    if (!currentUser) return false;
    const addresses = (currentUser.addresses || []).filter((a) => a.id !== addressId);
    saveCurrentUser({
      ...currentUser,
      addresses
    });
    toast.info("Address deleted successfully");
    return true;
  };
  const placeOrder = (shippingAddress, paymentMethod, couponCode) => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return null;
    }
    const pricing = getCartTotal(couponCode);
    const orderItems = cart.map((item) => {
      const product = getProductById(item.productId);
      return {
        productId: item.productId,
        name: product.name,
        price: product.discountPrice,
        image: product.images[0],
        size: item.size,
        color: item.color,
        quantity: item.quantity
      };
    });
    const newOrder = {
      orderId: "VB-" + Math.floor(1e5 + Math.random() * 9e5),
      userId: currentUser ? currentUser.id : null,
      customerName: shippingAddress.name,
      customerEmail: shippingAddress.email,
      customerPhone: shippingAddress.phone,
      items: orderItems,
      pricing,
      shippingAddress: { ...shippingAddress, id: Date.now() },
      paymentMethod,
      paymentStatus: paymentMethod === "cod" ? "Pending (COD)" : "Paid",
      orderStatus: "Processing",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const newOrdersList = [...orders, newOrder];
    saveOrders(newOrdersList);
    if (currentUser) {
      const userOrders = [...currentUser.orders || [], newOrder.orderId];
      saveCurrentUser({
        ...currentUser,
        orders: userOrders
      });
    }
    localStorage.setItem("vastra_last_order", JSON.stringify(newOrder));
    clearCart();
    toast.success("Order placed successfully!");
    return newOrder;
  };
  const getLastOrder = () => {
    try {
      const last = localStorage.getItem("vastra_last_order");
      return last ? JSON.parse(last) : null;
    } catch (e) {
      console.error(e);
      return null;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StoreContext.Provider,
    {
      value: {
        cart,
        wishlist,
        currentUser,
        orders,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        getCartTotal,
        toggleWishlist,
        isInWishlist,
        registerUser,
        loginUser,
        logoutUser,
        addAddress,
        deleteAddress,
        placeOrder,
        getLastOrder
      },
      children
    }
  );
};
const useStore = () => {
  const context = reactExports.useContext(StoreContext);
  if (context === void 0) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:translate-y-[-1px] hover:shadow-lg",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground shadow-[var(--shadow-luxury)] hover:translate-y-[-2px] hover:opacity-95",
        whatsapp: "bg-success text-primary-foreground shadow-[var(--shadow-soft)] hover:translate-y-[-2px] hover:shadow-[var(--shadow-luxury)]",
        luxury: "border border-[color:color-mix(in_oklab,var(--brand-gold)_45%,var(--border))] bg-[color:var(--card)] text-foreground shadow-[var(--shadow-glow)] hover:translate-y-[-2px] hover:bg-[color:var(--surface)]"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-7 text-base",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const ScrollArea = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Root$1,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollBar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Corner, {})
    ]
  }
));
ScrollArea.displayName = Root$1.displayName;
const ScrollBar = reactExports.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
const Sheet = Root;
const SheetTrigger = Trigger$1;
const SheetClose = Close;
const SheetPortal = Portal;
const SheetOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = reactExports.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = Content.displayName;
const SheetHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
SheetHeader.displayName = "SheetHeader";
const SheetTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = Title.displayName;
const SheetDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = Description.displayName;
const DropdownMenu = Root2;
const DropdownMenuTrigger = Trigger;
const DropdownMenuSubTrigger = reactExports.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SubTrigger2,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
const DropdownMenuSubContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SubContent2,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = SubContent2.displayName;
const DropdownMenuContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = Content2.displayName;
const DropdownMenuItem = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Item2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = Item2.displayName;
const DropdownMenuCheckboxItem = reactExports.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  CheckboxItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
const DropdownMenuRadioItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  RadioItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
const DropdownMenuLabel = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label2,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = Label2.displayName;
const DropdownMenuSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator2,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = Separator2.displayName;
const Navbar = () => {
  const {
    cart,
    wishlist,
    currentUser,
    logoutUser,
    updateCartQuantity,
    removeFromCart,
    cartCount,
    cartSubtotal
  } = useStore();
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = reactExports.useState(false);
  const navigate = useNavigate();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate({
        to: "/shop",
        search: { search: searchQuery.trim() }
      });
      setSearchQuery("");
    }
  };
  const handleCartItemQuantity = (productId, size, colorName, change, currentQty) => {
    updateCartQuantity(productId, size, colorName, currentQty + change);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell flex items-center justify-between py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-card text-xs font-semibold tracking-[0.25em] text-primary shadow-[var(--shadow-soft)]", children: "VB" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-semibold leading-tight text-foreground", children: "Vastra Boutique" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-muted-foreground", children: "Girls Fashion Boutique" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/",
            activeProps: { className: "text-primary font-semibold" },
            inactiveProps: { className: "text-muted-foreground hover:text-foreground" },
            className: "text-sm font-medium transition-colors",
            children: "Home"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/shop",
            activeProps: { className: "text-primary font-semibold" },
            inactiveProps: { className: "text-muted-foreground hover:text-foreground" },
            className: "text-sm font-medium transition-colors",
            children: "Shop Collection"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/about",
            activeProps: { className: "text-primary font-semibold" },
            inactiveProps: { className: "text-muted-foreground hover:text-foreground" },
            className: "text-sm font-medium transition-colors",
            children: "About Us"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contact",
            activeProps: { className: "text-primary font-semibold" },
            inactiveProps: { className: "text-muted-foreground hover:text-foreground" },
            className: "text-sm font-medium transition-colors",
            children: "Contact"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSearchSubmit, className: "relative hidden lg:block w-48 xl:w-60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "text",
              placeholder: "Search outfits...",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: "pr-8 h-9 rounded-full bg-secondary/50 border-none placeholder:text-muted-foreground/60 text-xs"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", asChild: true, className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/wishlist", "aria-label": "Wishlist", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5" }),
          wishlist.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute -top-1 -right-1 h-5 w-5 min-w-0 rounded-full flex items-center justify-center p-0 text-[10px] bg-primary text-primary-foreground", children: wishlist.length })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", "aria-label": "Account Menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: `h-5 w-5 ${currentUser ? "text-primary" : ""}` }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuContent, { align: "end", className: "w-56 mt-2 luxury-panel rounded-xl", children: currentUser ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuLabel, { className: "font-semibold text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: currentUser.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-normal truncate", children: currentUser.email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, { className: "bg-border/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, className: "hover:bg-accent/40 cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/account", className: "w-full flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
              "My Profile & Addresses"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, className: "hover:bg-accent/40 cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/account", search: { tab: "orders" }, className: "w-full flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "h-4 w-4" }),
              "Order History"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, { className: "bg-border/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownMenuItem,
              {
                onClick: logoutUser,
                className: "text-destructive hover:bg-destructive/10 focus:text-destructive cursor-pointer flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
                  "Logout"
                ]
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuLabel, { className: "font-semibold text-foreground text-sm", children: "Welcome to Vastra" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, { className: "bg-border/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, className: "hover:bg-accent/40 cursor-pointer font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/account", className: "w-full text-center", children: "Login / Register" }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "icon", className: "relative", "aria-label": "Shopping Cart", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5" }),
            cartCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute -top-1 -right-1 h-5 w-5 min-w-0 rounded-full flex items-center justify-center p-0 text-[10px] bg-primary text-primary-foreground", children: cartCount })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { className: "w-full sm:max-w-md flex flex-col luxury-panel h-full border-l border-border/60 bg-background/95 backdrop-blur-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { className: "pb-4 border-b border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { className: "text-2xl font-bold flex items-center gap-2 text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-6 w-6 text-primary" }),
              "Your Bag (",
              cartCount,
              ")"
            ] }) }),
            cart.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center text-center p-6 gap-4 animate-fade-rise", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center text-3xl", children: "🛍️" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: "Your bag is empty" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1 max-w-xs", children: "Looks like you haven't added anything to your cart yet." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "lg", asChild: true, className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", children: "Explore Collection" }) }) })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1 -mx-6 px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4", children: cart.map((item) => {
                const product = getProductById(item.productId);
                if (!product) return null;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex gap-4 p-3 rounded-xl border border-border/40 bg-card/40 hover:bg-card/85 transition-colors",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: product.images[0],
                          alt: product.name,
                          className: "w-20 h-24 object-cover object-top rounded-lg border border-border/40 bg-brand-pearl"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-between min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground text-sm truncate leading-snug", children: product.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1 flex items-center gap-2 flex-wrap", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                              "Size: ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: item.size })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-0.5 bg-border" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                              "Color:",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "inline-block w-2.5 h-2.5 rounded-full border border-black/10",
                                  style: { backgroundColor: item.color.hex }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: item.color.name })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-border/80 rounded-full h-8 px-1 bg-background", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Button,
                              {
                                variant: "ghost",
                                size: "icon",
                                onClick: () => handleCartItemQuantity(
                                  item.productId,
                                  item.size,
                                  item.color.name,
                                  -1,
                                  item.quantity
                                ),
                                className: "h-6 w-6 rounded-full hover:bg-secondary",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3 w-3" })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center text-xs font-semibold text-foreground", children: item.quantity }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Button,
                              {
                                variant: "ghost",
                                size: "icon",
                                onClick: () => handleCartItemQuantity(
                                  item.productId,
                                  item.size,
                                  item.color.name,
                                  1,
                                  item.quantity
                                ),
                                className: "h-6 w-6 rounded-full hover:bg-secondary",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: formatPrice(product.discountPrice * item.quantity) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Button,
                              {
                                variant: "ghost",
                                size: "icon",
                                onClick: () => removeFromCart(item.productId, item.size, item.color.name),
                                className: "h-7 w-7 text-muted-foreground hover:text-destructive rounded-full",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" })
                              }
                            )
                          ] })
                        ] })
                      ] })
                    ]
                  },
                  `${item.productId}-${item.size}-${item.color.name}`
                );
              }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/60 pt-4 mt-auto flex flex-col gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-foreground font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-primary", children: formatPrice(cartSubtotal) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-normal", children: "Shipping, taxes, and discounts will be calculated during checkout. Free shipping on orders above ₹999." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "lg", asChild: true, className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/checkout", children: "Proceed to Checkout" }) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "luxury", size: "lg", asChild: true, className: "w-full bg-transparent hover:bg-secondary/40 text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cart", children: "View Full Cart Details" }) }) })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
            className: "md:hidden",
            "aria-label": "Toggle Menu",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
          }
        )
      ] })
    ] }),
    isMobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl px-4 py-4 flex flex-col gap-3 shadow-lg animate-fade-rise", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSearchSubmit, className: "relative w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "text",
            placeholder: "Search outfits...",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            className: "pr-8 h-10 w-full rounded-full bg-secondary/50 border-none placeholder:text-muted-foreground/60 text-sm"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/",
          onClick: () => setIsMobileMenuOpen(false),
          activeProps: { className: "text-primary font-semibold pl-2 border-l-2 border-primary" },
          inactiveProps: { className: "text-muted-foreground hover:text-foreground pl-2" },
          className: "text-sm font-medium transition-all py-1.5",
          children: "Home"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/shop",
          onClick: () => setIsMobileMenuOpen(false),
          activeProps: { className: "text-primary font-semibold pl-2 border-l-2 border-primary" },
          inactiveProps: { className: "text-muted-foreground hover:text-foreground pl-2" },
          className: "text-sm font-medium transition-all py-1.5",
          children: "Shop Collection"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/about",
          onClick: () => setIsMobileOpen(false),
          activeProps: { className: "text-primary font-semibold pl-2 border-l-2 border-primary" },
          inactiveProps: { className: "text-muted-foreground hover:text-foreground pl-2" },
          className: "text-sm font-medium transition-all py-1.5",
          children: "About Us"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/contact",
          onClick: () => setIsMobileMenuOpen(false),
          activeProps: { className: "text-primary font-semibold pl-2 border-l-2 border-primary" },
          inactiveProps: { className: "text-muted-foreground hover:text-foreground pl-2" },
          className: "text-sm font-medium transition-all py-1.5",
          children: "Contact"
        }
      )
    ] })
  ] });
};
const Footer = () => {
  const whatsappUrl = "https://wa.me/917976396802";
  const callUrl = "tel:+917976396802";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border/60 bg-background/90", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell grid gap-8 py-12 sm:grid-cols-2 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-card text-[10px] font-semibold tracking-[0.25em] text-primary shadow-sm", children: "VB" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-foreground", children: "Vastra Boutique" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.26em] text-muted-foreground", children: "Girls Fashion Boutique" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-6 text-muted-foreground max-w-xs", children: "Premium girls fashion boutique offering designer sarees, kurtis, and women's ethnic wear. Handpicked fabrics, elegant designs, and direct delivery." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-[0.24em] text-foreground mb-4", children: "Shop By Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", search: { category: "party-wear" }, className: "text-muted-foreground hover:text-primary transition-colors", children: "Party Wear Dresses" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", search: { category: "western-wear" }, className: "text-muted-foreground hover:text-primary transition-colors", children: "Western Outfits" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", search: { category: "ethnic-wear" }, className: "text-muted-foreground hover:text-primary transition-colors", children: "Ethnic Suits & Sets" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", search: { category: "traditional-wear" }, className: "text-muted-foreground hover:text-primary transition-colors", children: "Traditional Sarees" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", search: { category: "boutique-collection" }, className: "text-muted-foreground hover:text-primary transition-colors", children: "Boutique Specials" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-[0.24em] text-foreground mb-4", children: "Policies & Support" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shipping-policy", className: "text-muted-foreground hover:text-primary transition-colors", children: "Shipping & Delivery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/exchange-policy", className: "text-muted-foreground hover:text-primary transition-colors", children: "Exchange Policy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/refund-policy", className: "text-muted-foreground hover:text-primary transition-colors", children: "Refund Policy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy-policy", className: "text-muted-foreground hover:text-primary transition-colors", children: "Privacy Policy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "text-muted-foreground hover:text-primary transition-colors", children: "Terms of Service" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-[0.24em] text-foreground mb-4", children: "Boutique Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-muted-foreground/60", children: "Phone Support" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: callUrl, className: "font-medium text-foreground hover:text-primary transition-colors mt-0.5", children: "+91 7976396802" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-muted-foreground/60", children: "Email Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:Lekhrajsharma2129@gmail.com", className: "font-medium text-foreground hover:text-primary transition-colors mt-0.5 break-all", children: "Lekhrajsharma2129@gmail.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-muted-foreground/60", children: "Store Owner" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground mt-0.5", children: "Soniya Sharma" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `${whatsappUrl}?text=${encodeURIComponent("Hi Vastra Boutique, I need styling assistance.")}`,
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center justify-center rounded-full bg-success/10 border border-success/30 px-4 py-2 text-xs font-semibold text-success hover:bg-success hover:text-white transition-all w-fit mt-1",
              children: "Chat on WhatsApp"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/40 py-6 text-center text-xs text-muted-foreground/70 bg-card/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-shell flex flex-col gap-2 sm:flex-row sm:justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Vastra Boutique. All Rights Reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "flex items-center gap-1.5", children: "Designed with Premium Quality & Comfort ✨" })
    ] }) })
  ] });
};
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const siteUrl$1 = "https://vastrabutique.shop";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$g = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vastra Boutique | Girls Fashion Boutique" },
      {
        name: "description",
        content: "Vastra Boutique offers trendy dresses, ethnic wear, western outfits, party wear and boutique fashion for stylish girls."
      },
      { name: "author", content: "Vastra Boutique" },
      { name: "keywords", content: "girls fashion boutique, trendy dresses for girls, ethnic wear, western wear, party wear, Vastra Boutique" },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Vastra Boutique | Girls Fashion Boutique" },
      {
        property: "og:description",
        content: "Discover premium boutique outfits for girls with stylish ethnic, western, party and casual collections."
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl$1 },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vastra Boutique | Girls Fashion Boutique" },
      {
        name: "twitter:description",
        content: "Luxury-inspired boutique fashion for girls with WhatsApp-first ordering and stylish curated collections."
      },
      { name: "description", content: "Vastra Boutique Showcase is a premium single-page website for a girls' fashion boutique." },
      { property: "og:description", content: "Vastra Boutique Showcase is a premium single-page website for a girls' fashion boutique." },
      { name: "twitter:description", content: "Vastra Boutique Showcase is a premium single-page website for a girls' fashion boutique." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/918a8cd6-e293-4477-94f8-4b2d2fe09f2f/id-preview-293e85c4--273ffc1c-6193-4f79-b86a-47fb0cfbcb15.lovable.app-1781179064005.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/918a8cd6-e293-4477-94f8-4b2d2fe09f2f/id-preview-293e85c4--273ffc1c-6193-4f79-b86a-47fb0cfbcb15.lovable.app-1781179064005.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
      },
      { rel: "canonical", href: siteUrl$1 }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$g.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(StoreProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-grow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://wa.me/917976396802?text=Hi%20Vastra%20Boutique%2C%20I%20want%20to%20know%20more%20about%20your%20collection.",
          target: "_blank",
          rel: "noreferrer",
          "aria-label": "Chat with Vastra Boutique on WhatsApp",
          className: "animate-pulse-soft fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-success px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-luxury)] hover:scale-[1.02]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-2.5 w-2.5 rounded-full bg-primary-foreground/90" }),
            "WhatsApp Chat"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] }) });
}
const $$splitComponentImporter$e = () => import("./wishlist-BVGnREsd.mjs");
const Route$f = createFileRoute("/wishlist")({
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./terms-ipXoerq9.mjs");
const Route$e = createFileRoute("/terms")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const BASE_URL = "https://vastrabutique.shop";
const Route$d = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [{ path: "/", changefreq: "weekly", priority: "1.0" }];
        const urls = entries.map(
          (entry) => [
            "  <url>",
            `    <loc>${BASE_URL}${entry.path}</loc>`,
            entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>` : null,
            entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : null,
            entry.priority ? `    <priority>${entry.priority}</priority>` : null,
            "  </url>"
          ].filter(Boolean).join("\n")
        );
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...urls,
          "</urlset>"
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$c = () => import("./shop-DbkusoB1.mjs");
const shopSearchSchema = objectType({
  search: stringType().optional().catch(""),
  category: stringType().optional().catch(""),
  minPrice: numberType().optional().catch(void 0),
  maxPrice: numberType().optional().catch(void 0),
  size: stringType().optional().catch(""),
  color: stringType().optional().catch(""),
  sortBy: stringType().optional().catch("popular")
});
const Route$c = createFileRoute("/shop")({
  validateSearch: (search) => shopSearchSchema.parse(search),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./shipping-policy-oDl0aIXk.mjs");
const Route$b = createFileRoute("/shipping-policy")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./refund-policy-BMK9_LuV.mjs");
const Route$a = createFileRoute("/refund-policy")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./privacy-policy-D2bUa1j0.mjs");
const Route$9 = createFileRoute("/privacy-policy")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./exchange-policy-Cwlv2xbm.mjs");
const Route$8 = createFileRoute("/exchange-policy")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./contact-CPEuNA3a.mjs");
const Route$7 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./checkout-confirmation-CDgZmcRY.mjs");
const Route$6 = createFileRoute("/checkout-confirmation")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./checkout-CUzPnPkO.mjs");
const checkoutSearchSchema = objectType({
  coupon: stringType().optional().catch("")
});
const Route$5 = createFileRoute("/checkout")({
  validateSearch: (search) => checkoutSearchSchema.parse(search),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./cart-BylVvslV.mjs");
const Route$4 = createFileRoute("/cart")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./account-BLYjBf1n.mjs");
const accountSearchSchema = objectType({
  tab: stringType().optional().catch("")
});
const Route$3 = createFileRoute("/account")({
  validateSearch: (search) => accountSearchSchema.parse(search),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about-BaxCADs0.mjs");
const Route$2 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const purpleLook = {
  url: "/images/hero/hero-purple-gown.jpeg"
};
const siteUrl = "https://vastrabutique.shop";
const $$splitComponentImporter$1 = () => import("./index-Cn1Cv2Bb.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Vastra Boutique | Premium Girls Fashion Boutique"
    }, {
      name: "description",
      content: "Shop premium girls fashion at Vastra Boutique — trendy dresses, ethnic wear, western wear, party looks and stylish boutique collections with online checkout."
    }, {
      property: "og:title",
      content: "Vastra Boutique | Premium Girls Fashion Boutique"
    }, {
      property: "og:description",
      content: "Discover beautiful, stylish and premium boutique outfits for girls with secure ordering and luxury-inspired presentation."
    }, {
      property: "og:url",
      content: siteUrl
    }, {
      property: "og:image",
      content: purpleLook.url
    }, {
      name: "twitter:image",
      content: purpleLook.url
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./product._id-CeiupoN0.mjs");
const Route = createFileRoute("/product/$id")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WishlistRoute = Route$f.update({
  id: "/wishlist",
  path: "/wishlist",
  getParentRoute: () => Route$g
});
const TermsRoute = Route$e.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$g
});
const SitemapDotxmlRoute = Route$d.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$g
});
const ShopRoute = Route$c.update({
  id: "/shop",
  path: "/shop",
  getParentRoute: () => Route$g
});
const ShippingPolicyRoute = Route$b.update({
  id: "/shipping-policy",
  path: "/shipping-policy",
  getParentRoute: () => Route$g
});
const RefundPolicyRoute = Route$a.update({
  id: "/refund-policy",
  path: "/refund-policy",
  getParentRoute: () => Route$g
});
const PrivacyPolicyRoute = Route$9.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$g
});
const ExchangePolicyRoute = Route$8.update({
  id: "/exchange-policy",
  path: "/exchange-policy",
  getParentRoute: () => Route$g
});
const ContactRoute = Route$7.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$g
});
const CheckoutConfirmationRoute = Route$6.update({
  id: "/checkout-confirmation",
  path: "/checkout-confirmation",
  getParentRoute: () => Route$g
});
const CheckoutRoute = Route$5.update({
  id: "/checkout",
  path: "/checkout",
  getParentRoute: () => Route$g
});
const CartRoute = Route$4.update({
  id: "/cart",
  path: "/cart",
  getParentRoute: () => Route$g
});
const AccountRoute = Route$3.update({
  id: "/account",
  path: "/account",
  getParentRoute: () => Route$g
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$g
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$g
});
const ProductIdRoute = Route.update({
  id: "/product/$id",
  path: "/product/$id",
  getParentRoute: () => Route$g
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AccountRoute,
  CartRoute,
  CheckoutRoute,
  CheckoutConfirmationRoute,
  ContactRoute,
  ExchangePolicyRoute,
  PrivacyPolicyRoute,
  RefundPolicyRoute,
  ShippingPolicyRoute,
  ShopRoute,
  SitemapDotxmlRoute,
  TermsRoute,
  WishlistRoute,
  ProductIdRoute
};
const routeTree = Route$g._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  CATEGORIES as C,
  Input as I,
  PRODUCTS as P,
  Route$c as R,
  Sheet as S,
  SheetTrigger as a,
  SheetContent as b,
  cn as c,
  SheetHeader as d,
  SheetTitle as e,
  formatPrice as f,
  getProductById as g,
  Badge as h,
  getDiscountPercent as i,
  Route$5 as j,
  COUPONS as k,
  Route$3 as l,
  Route as m,
  getProductsByCategory as n,
  purpleLook as p,
  router as r,
  siteUrl as s,
  useStore as u
};
