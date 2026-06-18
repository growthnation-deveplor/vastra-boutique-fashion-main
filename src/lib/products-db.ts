import { Product, Color } from "../types/store";

export const PRODUCTS: Product[] = [
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
    rating: 5.0,
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
    rating: 5.0,
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
    rating: 5.0,
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

export const CATEGORIES = [
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

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    initials: "PS",
    location: "Delhi",
    rating: 5,
    text: "Absolutely love the quality and design! The Anarkali suit I ordered was even more beautiful in person. The fabric quality is outstanding and the stitching is perfect."
  },
  {
    name: "Neha Gupta",
    initials: "NG",
    location: "Mumbai",
    rating: 5,
    text: "VastraBoutique has become my go-to for fashion. The party wear collection is to die for! Quick delivery and amazing packaging too."
  },
  {
    name: "Anjali Patel",
    initials: "AP",
    location: "Jaipur",
    rating: 5,
    text: "Great collection of ethnic wear. The Chikankari kurta I bought received so many compliments. Will definitely order again!"
  },
  {
    name: "Ritu Singh",
    initials: "RS",
    location: "Bangalore",
    rating: 5,
    text: "The boutique collection is absolutely stunning. Every piece looks like it's been carefully curated. Premium quality at reasonable prices."
  },
  {
    name: "Kavita Joshi",
    initials: "KJ",
    location: "Pune",
    rating: 5,
    text: "Ordered for my daughter's birthday and she was thrilled! The western dress fit perfectly and the quality exceeded expectations."
  },
  {
    name: "Meera Reddy",
    initials: "MR",
    location: "Hyderabad",
    rating: 4,
    text: "Fast delivery and excellent customer service. The traditional wear collection is beautiful. The Banarasi silk saree is a masterpiece!"
  }
];

export const COUPONS: Record<string, number> = {
  'WELCOME10': 0.10, // 10% OFF
  'VASTRA20': 0.20,  // 20% OFF
  'FESTIVE30': 0.30  // 30% OFF
};

export let dynamicProducts: Product[] = [];
export function setDynamicProducts(list: Product[]) {
  dynamicProducts = list;
}

export function getProductById(id: number | string): Product | undefined {
  const list = dynamicProducts.length > 0 ? dynamicProducts : PRODUCTS;
  return list.find(p => p.id === Number(id));
}

export function getProductsByCategory(categoryId: string): Product[] {
  const list = dynamicProducts.length > 0 ? dynamicProducts : PRODUCTS;
  return list.filter(p => p.category === categoryId);
}

export function getDiscountPercent(price: number, discountPrice: number): number {
  return Math.round(((price - discountPrice) / price) * 100);
}

export function formatPrice(price: number): string {
  return '₹' + price.toLocaleString('en-IN');
}

export function getNewArrivals(): Product[] {
  const list = dynamicProducts.length > 0 ? dynamicProducts : PRODUCTS;
  return list.filter(p => p.badge === 'new');
}

export function getTrendingProducts(): Product[] {
  const list = dynamicProducts.length > 0 ? dynamicProducts : PRODUCTS;
  return list.filter(p => p.badge === 'trending' || p.badge === 'hot');
}

export function getBestSelling(): Product[] {
  const list = dynamicProducts.length > 0 ? dynamicProducts : PRODUCTS;
  return list.filter(p => p.reviews > 100 || p.isBestseller).sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
}

export function searchProducts(query: string): Product[] {
  const list = dynamicProducts.length > 0 ? dynamicProducts : PRODUCTS;
  const q = query.toLowerCase();
  return list.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    (p.categoryName && p.categoryName.toLowerCase().includes(q)) ||
    p.description.toLowerCase().includes(q) ||
    (p.fabric && p.fabric.toLowerCase().includes(q))
  );
}

