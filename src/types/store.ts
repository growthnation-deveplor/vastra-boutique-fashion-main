export interface Color {
  name: string;
  hex: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  categoryName: string;
  price: number;
  discountPrice: number;
  images: string[];
  sizes: string[];
  colors: Color[];
  fabric: string;
  description: string;
  rating: number;
  reviews: number;
  isFeatured?: boolean;
  inStock: boolean;
}

export interface CartItem {
  productId: number;
  size: string;
  color: Color;
  quantity: number;
  addedAt: string;
}

export interface Address {
  id: number;
  name: string;
  email: string;
  phone: string;
  addressLine: string;
  city: string;
  state: string;
  pincode: string;
  isDefault?: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  addresses: Address[];
  orders: string[]; // Order IDs
  createdAt: string;
}

export interface OrderItem {
  productId: number;
  name: string;
  price: number;
  image: string;
  size: string;
  color: Color;
  quantity: number;
}

export interface Pricing {
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
}

export interface Order {
  orderId: string;
  userId: number | null;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: OrderItem[];
  pricing: Pricing;
  shippingAddress: Address;
  paymentMethod: "cod" | "card";
  paymentStatus: string;
  orderStatus: "Processing" | "Shipped" | "Delivered" | "Cancelled";
  createdAt: string;
}
