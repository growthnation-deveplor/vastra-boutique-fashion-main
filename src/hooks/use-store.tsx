import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem, Address, User, Order, Pricing, Color, Product } from "../types/store";
import { getProductById, COUPONS, setDynamicProducts } from "../lib/products-db";
import { toast } from "sonner";
import { createDbOrder } from "../lib/api/products.functions";

interface StoreContextType {
  cart: CartItem[];
  wishlist: number[];
  currentUser: User | null;
  orders: Order[];
  products: Product[];
  addToCart: (productId: number, size: string, color: Color, quantity?: number) => void;
  removeFromCart: (productId: number, size: string, colorName: string) => void;
  updateCartQuantity: (productId: number, size: string, colorName: string, newQuantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  getCartTotal: (couponCode?: string | null) => Pricing;
  toggleWishlist: (productId: number) => boolean;
  isInWishlist: (productId: number) => boolean;
  registerUser: (name: string, email: string, password: string) => boolean;
  loginUser: (email: string, password: string) => boolean;
  logoutUser: () => void;
  addAddress: (address: Omit<Address, "id">) => boolean;
  deleteAddress: (addressId: number) => boolean;
  placeOrder: (shippingAddress: Omit<Address, "id">, paymentMethod: "cod" | "card", couponCode?: string | null) => Order | null;
  getLastOrder: () => Order | null;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode; initialProducts?: Product[] }> = ({ children, initialProducts = [] }) => {
  // --- Initialize states from localStorage ---
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [products, setProducts] = useState<Product[]>(initialProducts);

  useEffect(() => {
    if (initialProducts && initialProducts.length > 0) {
      setProducts(initialProducts);
      setDynamicProducts(initialProducts);
    }
  }, [initialProducts]);

  useEffect(() => {
    setDynamicProducts(products);
  }, [products]);

  // Load initial state client-side only (avoid SSR mismatch)
  useEffect(() => {
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

  // --- Sync with localStorage ---
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("vastra_cart", JSON.stringify(newCart));
  };

  const saveWishlist = (newWishlist: number[]) => {
    setWishlist(newWishlist);
    localStorage.setItem("vastra_wishlist", JSON.stringify(newWishlist));
  };

  const saveCurrentUser = (user: User | null) => {
    setCurrentUser(user);
    if (user) {
      localStorage.setItem("vastra_current_user", JSON.stringify(user));
      // Update persistent users database
      try {
        const users = JSON.parse(localStorage.getItem("vastra_users") || "[]") as any[];
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

  const saveOrders = (newOrders: Order[]) => {
    setOrders(newOrders);
    localStorage.setItem("vastra_orders", JSON.stringify(newOrders));
  };

  // --- Cart System ---
  const addToCart = (productId: number, size: string, color: Color, quantity = 1) => {
    if (!currentUser) {
      toast.warning("Please sign in or register to add items to your cart.");
      return;
    }
    const product = getProductById(productId);
    if (!product) {
      toast.error("Product not found");
      return;
    }

    const existingIndex = cart.findIndex(
      (item) =>
        item.productId === productId &&
        item.size === size &&
        item.color.name === color.name
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
        addedAt: new Date().toISOString(),
      });
    }

    saveCart(newCart);
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (productId: number, size: string, colorName: string) => {
    const newCart = cart.filter(
      (item) =>
        !(
          item.productId === productId &&
          item.size === size &&
          item.color.name === colorName
        )
    );
    saveCart(newCart);
    toast.info("Product removed from cart");
  };

  const updateCartQuantity = (productId: number, size: string, colorName: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, size, colorName);
      return;
    }

    const newCart = cart.map((item) => {
      if (
        item.productId === productId &&
        item.size === size &&
        item.color.name === colorName
      ) {
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

  const getCartTotal = (couponCode?: string | null): Pricing => {
    let discount = 0;
    if (couponCode && COUPONS[couponCode.toUpperCase()]) {
      discount = cartSubtotal * COUPONS[couponCode.toUpperCase()];
    }

    const shipping = cartSubtotal > 1999 || cartSubtotal === 0 ? 0 : 99; // Free shipping above ₹1999
    const tax = Math.round(cartSubtotal * 0.05); // 5% GST
    const total = Math.round(cartSubtotal - discount + shipping + tax);

    return {
      subtotal: cartSubtotal,
      discount: Math.round(discount),
      shipping,
      tax,
      total,
    };
  };

  // --- Wishlist System ---
  const toggleWishlist = (productId: number): boolean => {
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

  const isInWishlist = (productId: number) => {
    return wishlist.includes(productId);
  };

  // --- Authentication System ---
  const registerUser = (name: string, email: string, password: string): boolean => {
    try {
      const users = JSON.parse(localStorage.getItem("vastra_users") || "[]");
      if (users.some((u: any) => u.email === email)) {
        toast.error("Email already registered");
        return false;
      }

      const newUser = {
        id: Date.now(),
        name,
        email,
        password, // In a production app, password would be hashed
        addresses: [],
        orders: [],
        createdAt: new Date().toISOString(),
      };

      users.push(newUser);
      localStorage.setItem("vastra_users", JSON.stringify(users));

      // Auto login
      const sessionUser: User = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        addresses: [],
        orders: [],
        createdAt: newUser.createdAt,
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

  const loginUser = (email: string, password: string): boolean => {
    try {
      const users = JSON.parse(localStorage.getItem("vastra_users") || "[]");
      const user = users.find((u: any) => u.email === email && u.password === password);

      if (!user) {
        toast.error("Invalid email or password");
        return false;
      }

      const sessionUser: User = {
        id: user.id,
        name: user.name,
        email: user.email,
        addresses: user.addresses || [],
        orders: user.orders || [],
        createdAt: user.createdAt,
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

  const addAddress = (address: Omit<Address, "id">): boolean => {
    if (!currentUser) {
      toast.error("Please login to add address");
      return false;
    }

    const newAddress: Address = {
      ...address,
      id: Date.now(),
    };

    const addresses = [...(currentUser.addresses || []), newAddress];
    saveCurrentUser({
      ...currentUser,
      addresses,
    });
    toast.success("Address added successfully");
    return true;
  };

  const deleteAddress = (addressId: number): boolean => {
    if (!currentUser) return false;

    const addresses = (currentUser.addresses || []).filter((a) => a.id !== addressId);
    saveCurrentUser({
      ...currentUser,
      addresses,
    });
    toast.info("Address deleted successfully");
    return true;
  };

  // --- Order System ---
  const placeOrder = (shippingAddress: Omit<Address, "id">, paymentMethod: "cod" | "card", couponCode?: string | null): Order | null => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return null;
    }

    const pricing = getCartTotal(couponCode);

    const orderItems = cart.map((item) => {
      const product = getProductById(item.productId)!;
      return {
        productId: item.productId,
        name: product.name,
        price: product.discountPrice,
        image: product.images[0],
        size: item.size,
        color: item.color,
        quantity: item.quantity,
      };
    });

    const newOrder: Order = {
      orderId: "VB-" + Math.floor(100000 + Math.random() * 900000),
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
      createdAt: new Date().toISOString(),
    };

    // Save order in global store
    const newOrdersList = [...orders, newOrder];
    saveOrders(newOrdersList);

    // Save order in user history if logged in
    if (currentUser) {
      const userOrders = [...(currentUser.orders || []), newOrder.orderId];
      saveCurrentUser({
        ...currentUser,
        orders: userOrders,
      });
    }

    // Save last placed order detail to display on confirmation page
    localStorage.setItem("vastra_last_order", JSON.stringify(newOrder));

    // Save order in backend database asynchronously
    createDbOrder({
      data: {
        id: newOrder.orderId,
        email: newOrder.customerEmail,
        phone: newOrder.customerPhone,
        name: newOrder.customerName,
        addressLine: shippingAddress.addressLine || "",
        city: shippingAddress.city || "",
        state: shippingAddress.state || "",
        pincode: shippingAddress.pincode || "",
        totalAmount: pricing.total,
        paymentMethod,
        paymentStatus: paymentMethod === "cod" ? "Pending" : "Paid",
        items: orderItems.map(item => ({
          productId: item.productId,
          name: item.name,
          price: item.price,
          image: item.image,
          size: item.size,
          colorName: item.color.name,
          colorHex: item.color.hex,
          quantity: item.quantity
        }))
      }
    }).catch(err => {
      console.error("Failed to store order in database:", err);
    });

    // Clear cart
    clearCart();

    toast.success("Order placed successfully!");
    return newOrder;
  };

  const getLastOrder = (): Order | null => {
    try {
      const last = localStorage.getItem("vastra_last_order");
      return last ? JSON.parse(last) : null;
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        currentUser,
        orders,
        products,
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
        getLastOrder,
        setProducts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
