import React, { useState, useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { useStore } from "../hooks/use-store";
import { getProductById, formatPrice } from "../lib/products-db";
import { getDbOrdersByEmail } from "../lib/api/products.functions";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import {
  User,
  MapPin,
  ClipboardList,
  Plus,
  Trash2,
  Lock,
  Mail,
  UserCheck,
  MessageCircle,
  LogOut,
  Calendar,
} from "lucide-react";
import { toast } from "sonner";

const accountSearchSchema = z.object({
  tab: z.string().optional().catch(""),
});

export const Route = createFileRoute("/account")({
  validateSearch: (search) => accountSearchSchema.parse(search),
  component: AccountPage,
});

function AccountPage() {
  const searchParams = Route.useSearch();
  const navigate = useNavigate();
  const {
    currentUser,
    orders,
    registerUser,
    loginUser,
    logoutUser,
    addAddress,
    deleteAddress,
  } = useStore();

  const activeTab = searchParams.tab || "profile";

  // Login Form State
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register Form State
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");

  // New Address Form State
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addrName, setAddrName] = useState("");
  const [addrPhone, setAddrPhone] = useState("");
  const [addrEmail, setAddrEmail] = useState("");
  const [addrLine, setAddrLine] = useState("");
  const [addrCity, setAddrCity] = useState("");
  const [addrState, setAddrState] = useState("");
  const [addrPin, setAddrPin] = useState("");

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail.trim() || !loginPassword.trim()) {
      toast.error("Please fill in email and password.");
      return;
    }
    const success = loginUser(loginEmail.trim(), loginPassword.trim());
    if (success) {
      setLoginEmail("");
      setLoginPassword("");
      navigate({ to: "/account", search: { tab: "profile" } });
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
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
      navigate({ to: "/account", search: { tab: "profile" } });
    }
  };

  const handleAddAddressSubmit = (e: React.FormEvent) => {
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
      pincode: addrPin.trim(),
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

  const [dbOrders, setDbOrders] = useState<any[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(false);

  useEffect(() => {
    if (currentUser?.email) {
      setLoadingOrders(true);
      getDbOrdersByEmail({ data: { email: currentUser.email } })
        .then((res) => {
          setDbOrders(res || []);
        })
        .catch((err) => {
          console.error("Failed to fetch order history from database:", err);
        })
        .finally(() => {
          setLoadingOrders(false);
        });
    } else {
      setDbOrders([]);
    }
  }, [currentUser?.email]);

  // Filter orders related to this logged in user
  const userOrders = dbOrders.map((o) => ({
    orderId: o.id,
    userId: currentUser?.id || null,
    customerName: o.name,
    customerEmail: o.email,
    customerPhone: o.phone,
    items: o.items.map((item: any) => ({
      productId: item.productId,
      name: item.name,
      price: item.price,
      image: item.image,
      size: item.size,
      color: { name: item.colorName, hex: item.colorHex },
      quantity: item.quantity,
    })),
    pricing: {
      subtotal: o.totalAmount,
      discount: 0,
      shipping: 0,
      tax: 0,
      total: o.totalAmount,
    },
    shippingAddress: {
      id: Date.now(),
      name: o.name,
      phone: o.phone,
      email: o.email,
      addressLine: o.addressLine,
      city: o.city,
      state: o.state,
      pincode: o.pincode,
    },
    paymentMethod: o.paymentMethod,
    paymentStatus: o.paymentStatus,
    orderStatus: o.orderStatus,
    createdAt: o.createdAt,
  }));




  // --- Unauthenticated view (Login/Register) ---
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-background text-foreground pb-16 pt-12 flex justify-center items-center px-4 animate-fade-rise">
        <Card className="luxury-panel rounded-2xl w-full max-w-[460px] p-6 sm:p-8 border-border/50">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-foreground">Welcome to Vastra</h1>
            <p className="text-xs text-muted-foreground mt-1">
              Access your order history, shipping addresses, and wishlist.
            </p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 rounded-xl bg-secondary/40 p-1 mb-6">
              <TabsTrigger value="login" className="rounded-lg text-xs font-semibold py-2">Login</TabsTrigger>
              <TabsTrigger value="register" className="rounded-lg text-xs font-semibold py-2">Register</TabsTrigger>
            </TabsList>

            {/* Login Tab Content */}
            <TabsContent value="login">
              <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="loginEmail" className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5" /> Email Address
                  </Label>
                  <Input
                    id="loginEmail"
                    type="email"
                    placeholder="name@example.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="rounded-xl h-10 text-sm font-semibold"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="loginPass" className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Lock className="h-3.5 w-3.5" /> Password
                  </Label>
                  <Input
                    id="loginPass"
                    type="password"
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="rounded-xl h-10 text-sm font-semibold"
                    required
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full rounded-full h-11 text-xs font-bold mt-2">
                  Sign In
                </Button>
              </form>
            </TabsContent>

            {/* Register Tab Content */}
            <TabsContent value="register">
              <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="regName" className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" /> Full Name
                  </Label>
                  <Input
                    id="regName"
                    type="text"
                    placeholder="Enter name"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    className="rounded-xl h-10 text-sm font-semibold"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="regEmail" className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5" /> Email Address
                  </Label>
                  <Input
                    id="regEmail"
                    type="email"
                    placeholder="name@example.com"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    className="rounded-xl h-10 text-sm font-semibold"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="regPass" className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Lock className="h-3.5 w-3.5" /> Password
                  </Label>
                  <Input
                    id="regPass"
                    type="password"
                    placeholder="Create password"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    className="rounded-xl h-10 text-sm font-semibold"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="regConfirmPass" className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Lock className="h-3.5 w-3.5" /> Confirm Password
                  </Label>
                  <Input
                    id="regConfirmPass"
                    type="password"
                    placeholder="Re-enter password"
                    value={regConfirmPassword}
                    onChange={(e) => setRegConfirmPassword(e.target.value)}
                    className="rounded-xl h-10 text-sm font-semibold"
                    required
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full rounded-full h-11 text-xs font-bold mt-2">
                  Create Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    );
  }

  // --- Authenticated dashboard view ---
  return (
    <div className="min-h-screen bg-background text-foreground pb-16 pt-8 animate-fade-rise">
      <div className="container-shell">
        {/* Profile Welcome Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Account</h1>
            <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5 font-medium">
              <UserCheck className="h-4 w-4 text-success" />
              Welcome back, {currentUser.name}! Registered since {new Date(currentUser.createdAt).toLocaleDateString("en-IN")}
            </p>
          </div>
          <Button
            onClick={logoutUser}
            variant="outline"
            className="text-xs font-semibold gap-1.5 border-destructive/20 text-destructive hover:bg-destructive/10 rounded-full h-9"
          >
            <LogOut className="h-3.5 w-3.5" />
            Logout
          </Button>
        </div>

        {/* Dashboard Panels */}
        <div className="grid md:grid-cols-[240px_minmax(0,1fr)] gap-8 items-start">
          {/* Sidebar tabs triggers */}
          <nav className="flex md:flex-col gap-1 border-b border-border/50 pb-2 md:pb-0 md:border-b-0 flex-wrap">
            <button
              onClick={() => navigate({ to: "/account", search: { tab: "profile" } })}
              className={`flex items-center gap-2.5 text-sm font-semibold py-2.5 px-4 rounded-xl transition-all w-full md:w-auto text-left ${
                activeTab === "profile"
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
              }`}
            >
              <User className="h-4.5 w-4.5" />
              Profile & Addresses
            </button>
            <button
              onClick={() => navigate({ to: "/account", search: { tab: "orders" } })}
              className={`flex items-center gap-2.5 text-sm font-semibold py-2.5 px-4 rounded-xl transition-all w-full md:w-auto text-left ${
                activeTab === "orders"
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
              }`}
            >
              <ClipboardList className="h-4.5 w-4.5" />
              Order History ({userOrders.length})
            </button>
          </nav>

          {/* Tab Content Areas */}
          <div>
            {/* 1. PROFILE & ADDRESSES PANEL */}
            {activeTab === "profile" && (
              <div className="flex flex-col gap-6 animate-fade-rise">
                <Card className="luxury-panel rounded-2xl p-6 border-border/50">
                  <h3 className="text-lg font-bold text-foreground mb-4">Profile Details</h3>
                  <div className="grid gap-4 sm:grid-cols-2 text-sm leading-normal font-semibold">
                    <div className="py-2.5 border-b border-border/30">
                      <p className="text-xs text-muted-foreground">Full Name</p>
                      <p className="text-foreground mt-0.5">{currentUser.name}</p>
                    </div>
                    <div className="py-2.5 border-b border-border/30">
                      <p className="text-xs text-muted-foreground">Email Address</p>
                      <p className="text-foreground mt-0.5">{currentUser.email}</p>
                    </div>
                  </div>
                </Card>

                {/* Addresses lists and form */}
                <Card className="luxury-panel rounded-2xl p-6 border-border/50">
                  <div className="flex justify-between items-center mb-5">
                    <h3 className="text-lg font-bold text-foreground">Saved Addresses</h3>
                    <Button
                      onClick={() => setShowAddressForm(!showAddressForm)}
                      variant="outline"
                      size="sm"
                      className="text-xs font-semibold gap-1 rounded-full h-8 px-3"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      Add New Address
                    </Button>
                  </div>

                  {/* Add Address Form */}
                  {showAddressForm && (
                    <form onSubmit={handleAddAddressSubmit} className="border border-border/40 p-4 rounded-xl bg-secondary/25 flex flex-col gap-3.5 mb-5 animate-fade-rise">
                      <h4 className="text-sm font-bold text-foreground">New Shipping Address</h4>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="flex flex-col gap-1">
                          <Label className="text-[10px] uppercase tracking-wider text-muted-foreground">Contact Name</Label>
                          <Input
                            placeholder="Full name"
                            value={addrName}
                            onChange={(e) => setAddrName(e.target.value)}
                            className="h-9 text-xs"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <Label className="text-[10px] uppercase tracking-wider text-muted-foreground">Phone Number</Label>
                          <Input
                            placeholder="Mobile number"
                            value={addrPhone}
                            onChange={(e) => setAddrPhone(e.target.value)}
                            className="h-9 text-xs"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Label className="text-[10px] uppercase tracking-wider text-muted-foreground">Email Address</Label>
                        <Input
                          placeholder="Email"
                          value={addrEmail}
                          onChange={(e) => setAddrEmail(e.target.value)}
                          className="h-9 text-xs"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <Label className="text-[10px] uppercase tracking-wider text-muted-foreground">Street Address</Label>
                        <Input
                          placeholder="Flat/House number, Apartment, Colony"
                          value={addrLine}
                          onChange={(e) => setAddrLine(e.target.value)}
                          className="h-9 text-xs"
                          required
                        />
                      </div>
                      <div className="grid gap-3 sm:grid-cols-3">
                        <div className="flex flex-col gap-1">
                          <Label className="text-[10px] uppercase tracking-wider text-muted-foreground">City</Label>
                          <Input
                            placeholder="City"
                            value={addrCity}
                            onChange={(e) => setAddrCity(e.target.value)}
                            className="h-9 text-xs"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <Label className="text-[10px] uppercase tracking-wider text-muted-foreground">State</Label>
                          <Input
                            placeholder="State"
                            value={addrState}
                            onChange={(e) => setAddrState(e.target.value)}
                            className="h-9 text-xs"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <Label className="text-[10px] uppercase tracking-wider text-muted-foreground">Pincode</Label>
                          <Input
                            placeholder="Pincode"
                            value={addrPin}
                            onChange={(e) => setAddrPin(e.target.value)}
                            className="h-9 text-xs"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 justify-end mt-2">
                        <Button type="button" variant="ghost" onClick={() => setShowAddressForm(false)} className="text-xs rounded-full h-8">
                          Cancel
                        </Button>
                        <Button type="submit" variant="luxury" className="text-xs rounded-full h-8 px-4 font-bold">
                          Save Address
                        </Button>
                      </div>
                    </form>
                  )}

                  {/* List Addresses */}
                  {(!currentUser.addresses || currentUser.addresses.length === 0) ? (
                    <p className="text-sm text-muted-foreground/80 leading-normal text-center py-4 font-medium">
                      You haven&apos;t saved any shipping addresses yet. Click &quot;Add New Address&quot; above.
                    </p>
                  ) : (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {currentUser.addresses.map((addr) => (
                        <div
                          key={addr.id}
                          className="p-4 border border-border/40 bg-card/20 rounded-xl relative flex justify-between items-start gap-4 hover:border-border transition-colors"
                        >
                          <div className="text-xs sm:text-sm font-semibold leading-relaxed">
                            <p className="text-foreground">{addr.name}</p>
                            <p className="text-muted-foreground mt-0.5">{addr.addressLine}</p>
                            <p className="text-muted-foreground">
                              {addr.city}, {addr.state} - {addr.pincode}
                            </p>
                            <p className="text-[11px] text-muted-foreground/80 mt-1 font-medium">
                              Phone: {addr.phone} | Email: {addr.email}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteAddress(addr.id)}
                            className="h-7 w-7 text-muted-foreground hover:text-destructive rounded-full shrink-0"
                            aria-label="Delete address"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            )}

            {/* 2. ORDER HISTORY PANEL */}
            {activeTab === "orders" && (
              <div className="flex flex-col gap-6 animate-fade-rise">
                <h2 className="text-xl font-bold text-foreground">Order History ({userOrders.length})</h2>

                {loadingOrders ? (
                  <Card className="luxury-panel rounded-2xl p-10 text-center flex flex-col items-center justify-center gap-4 border-border/50">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="text-sm text-muted-foreground font-semibold mt-2">Retrieving your order history...</p>
                  </Card>
                ) : userOrders.length === 0 ? (
                  <Card className="luxury-panel rounded-2xl p-10 text-center flex flex-col items-center justify-center gap-4 border-border/50">
                    <div className="text-4xl">🧾</div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">No orders placed yet</h3>
                      <p className="text-sm text-muted-foreground mt-1 max-w-sm">
                        You haven&apos;t placed any orders with this account. Shop some elegant dresses to see them here!
                      </p>
                    </div>
                    <Button variant="hero" asChild className="rounded-full mt-2">
                      <Link to="/shop">Shop Outfits</Link>
                    </Button>
                  </Card>
                ) : (
                  <div className="flex flex-col gap-5">
                    {userOrders.map((order) => (
                      <Card
                        key={order.orderId}
                        className="luxury-panel rounded-2xl p-5 border-border/50 flex flex-col gap-4"
                      >
                        {/* Order Header Summary */}
                        <div className="flex justify-between items-start gap-4 pb-3 border-b border-border/40 text-xs sm:text-sm font-semibold flex-wrap">
                          <div>
                            <p className="text-muted-foreground text-[10px] uppercase tracking-wider">Order ID</p>
                            <p className="text-foreground font-bold mt-0.5">{order.orderId}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-[10px] uppercase tracking-wider">Date Placed</p>
                            <p className="text-foreground mt-0.5 flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                              {new Date(order.createdAt).toLocaleDateString("en-IN")}
                            </p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-[10px] uppercase tracking-wider">Grand Total</p>
                            <p className="text-primary font-bold mt-0.5">{formatPrice(order.pricing.total)}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-[10px] uppercase tracking-wider">Delivery Status</p>
                            <Badge className="bg-primary/10 text-primary border-primary/20 text-[9px] uppercase font-bold tracking-wider rounded mt-0.5">
                              {order.orderStatus}
                            </Badge>
                          </div>
                        </div>

                        {/* Order Product list */}
                        <div className="flex flex-col gap-3">
                          {order.items.map((item) => (
                            <div
                              key={`${item.productId}-${item.size}-${item.color.name}`}
                              className="flex items-center justify-between text-xs sm:text-sm font-semibold gap-3"
                            >
                              <div className="flex items-center gap-2.5">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-10 h-13 object-cover object-top rounded border border-border/30 bg-brand-pearl"
                                />
                                <div className="min-w-0">
                                  <p className="text-foreground truncate leading-snug">{item.name}</p>
                                  <p className="text-muted-foreground text-xs font-medium mt-0.5">
                                    Size: {item.size} | Color: {item.color.name} | Qty: {item.quantity}
                                  </p>
                                </div>
                              </div>
                              <span className="text-foreground shrink-0">{formatPrice(item.price * item.quantity)}</span>
                            </div>
                          ))}
                        </div>

                        <Separator className="bg-border/30" />

                        {/* Order Details */}
                        <div className="flex sm:justify-between sm:items-center flex-col sm:flex-row gap-3">
                          <p className="text-[11px] text-muted-foreground font-semibold leading-normal">
                            Payment method: <strong className="text-foreground uppercase">{order.paymentMethod}</strong> • Status: <strong className="text-foreground">{order.paymentStatus}</strong>
                          </p>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
