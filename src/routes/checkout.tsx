import React, { useState, useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { useStore } from "../hooks/use-store";
import { getProductById, formatPrice } from "../lib/products-db";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Separator } from "../components/ui/separator";
import { Truck, CreditCard, ShieldCheck, ArrowLeft, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "../components/ui/badge";

const checkoutSearchSchema = z.object({
  coupon: z.string().optional().catch(""),
});

export const Route = createFileRoute("/checkout")({
  validateSearch: (search) => checkoutSearchSchema.parse(search),
  component: Checkout,
});

function Checkout() {
  const navigate = useNavigate();
  const { coupon } = Route.useSearch();
  const {
    cart,
    currentUser,
    getCartTotal,
    placeOrder,
  } = useStore();

  // Redirect to account if not logged in
  useEffect(() => {
    if (!currentUser) {
      toast.warning("Please sign in or register to proceed to checkout.");
      navigate({ to: "/account" });
    }
  }, [currentUser, navigate]);

  const pricing = getCartTotal(coupon);

  // Address Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  // Payment Method
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "card">("card");

  // Razorpay Integration state
  const [isProcessing, setIsProcessing] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Load Razorpay SDK Script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => {
      console.error("Failed to load Razorpay SDK");
      toast.error("Failed to load payment gateway script. Please check your network connection.");
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Pre-fill form if user is logged in
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setEmail(currentUser.email || "");
      
      // If user has saved addresses, pre-fill with the first one
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

  // Select from saved addresses handler
  const handleSelectAddress = (addrId: number) => {
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

  const handlePlaceOrderSubmit = async (e: React.FormEvent) => {
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
      pincode: pincode.trim(),
    };

    // Razorpay checkout flow
    if (!scriptLoaded || !(window as any).Razorpay) {
      toast.error("Payment gateway is still loading. Please try again in a few seconds.");
      return;
    }

    setIsProcessing(true);

    try {
      // Step 1: Create Order on backend
      const totalInPaise = Math.round(pricing.total * 100);
      
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: totalInPaise,
          currency: "INR",
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to create order");
      }

      const orderData = await response.json();
      
      // Step 2: Open Razorpay checkout modal
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || "",
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Vastra Butique",
        description: "Purchase luxury designer wear",
        image: "/logo.png",
        order_id: orderData.id,
        handler: async function (paymentResponse: any) {
          try {
            // Step 3: Verify signature on backend
            const verifyResponse = await fetch("/api/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: paymentResponse.razorpay_order_id,
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                razorpay_signature: paymentResponse.razorpay_signature,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyResponse.ok && verifyData.success) {
              // Step 4: Complete order placement locally
              const orderObj = placeOrder(shippingAddress, "card", coupon);
              if (orderObj) {
                navigate({ to: "/checkout-confirmation" });
              }
            } else {
              toast.error(verifyData.error || "Payment signature verification failed.");
            }
          } catch (err: any) {
            console.error("Verification error:", err);
            toast.error("An error occurred during payment verification.");
          } finally {
            setIsProcessing(false);
          }
        },
        prefill: {
          name: shippingAddress.name,
          email: shippingAddress.email,
          contact: shippingAddress.phone,
        },
        theme: {
          color: "#111111",
        },
        modal: {
          ondismiss: function () {
            toast.info("Payment process cancelled.");
            setIsProcessing(false);
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error: any) {
      console.error("Razorpay error:", error);
      toast.error(error.message || "Failed to initiate payment gateway.");
      setIsProcessing(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="container-shell py-16 text-center flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="text-4xl">🛒</div>
        <h2 className="text-2xl font-bold text-foreground">Your bag is empty</h2>
        <p className="text-sm text-muted-foreground max-w-sm mt-1">
          You must add items to your cart before proceeding to checkout.
        </p>
        <Button variant="hero" asChild className="rounded-full mt-2">
          <Link to="/shop">Explore Collection</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-16 pt-8 animate-fade-rise">
      <div className="container-shell">
        {/* Back Link */}
        <Link to="/cart" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Bag
        </Link>

        <h1 className="text-3xl font-bold text-foreground sm:text-4xl mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          {/* Left Column: Shipping details and Payment */}
          <form onSubmit={handlePlaceOrderSubmit} className="flex flex-col gap-6">
            {/* Address Selection (if logged in and has addresses) */}
            {currentUser && currentUser.addresses && currentUser.addresses.length > 0 && (
              <Card className="luxury-panel rounded-2xl p-5 border-border/50">
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">
                  Choose Saved Address
                </h3>
                <div className="flex flex-col gap-2.5">
                  {currentUser.addresses.map((addr) => (
                    <div
                      key={addr.id}
                      onClick={() => handleSelectAddress(addr.id)}
                      className="p-3 border border-border/40 hover:border-primary/50 bg-card/20 rounded-xl cursor-pointer transition-all flex items-start justify-between"
                    >
                      <div className="text-xs sm:text-sm">
                        <p className="font-semibold text-foreground">{addr.name} ({addr.phone})</p>
                        <p className="text-muted-foreground mt-0.5 text-xs">
                          {addr.addressLine}, {addr.city}, {addr.state} - {addr.pincode}
                        </p>
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-[9px] uppercase tracking-wider font-bold">Select</Badge>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Shipping Address Form */}
            <Card className="luxury-panel rounded-2xl p-6 border-border/50 flex flex-col gap-4">
              <h3 className="text-lg font-bold text-foreground">Shipping Details</h3>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="custName" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Contact Name</Label>
                  <Input
                    id="custName"
                    type="text"
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-xl h-10 text-sm font-medium"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="custPhone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number</Label>
                  <Input
                    id="custPhone"
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-xl h-10 text-sm font-medium"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="custEmail" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</Label>
                <Input
                  id="custEmail"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl h-10 text-sm font-medium"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="custAddr" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Street Address</Label>
                <Input
                  id="custAddr"
                  type="text"
                  placeholder="Flat/House number, Apartment, Colony"
                  value={addressLine}
                  onChange={(e) => setAddressLine(e.target.value)}
                  className="rounded-xl h-10 text-sm font-medium"
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="custCity" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">City</Label>
                  <Input
                    id="custCity"
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="rounded-xl h-10 text-sm font-medium"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="custState" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">State</Label>
                  <Input
                    id="custState"
                    type="text"
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="rounded-xl h-10 text-sm font-medium"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="custPin" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Pincode</Label>
                  <Input
                    id="custPin"
                    type="text"
                    placeholder="6 digits"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="rounded-xl h-10 text-sm font-medium"
                    required
                  />
                </div>
              </div>
            </Card>

            {/* Payment Method Choice */}
            <Card className="luxury-panel rounded-2xl p-6 border-border/50 flex flex-col gap-4">
              <h3 className="text-lg font-bold text-foreground">Payment Method</h3>
              <div className="flex items-start gap-3.5 p-4 border border-primary/30 rounded-xl bg-card/25">
                <CreditCard className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground text-sm">
                    Online Payment (Prepaid Only)
                  </p>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-normal font-semibold">
                    Pay securely using Credit/Debit Cards, UPI, Netbanking, or Wallets via Razorpay gateway.
                  </p>
                </div>
              </div>
            </Card>

            {/* Submit checkout */}
            <Button 
              type="submit" 
              size="lg" 
              variant="hero" 
              className="w-full rounded-full h-12"
              disabled={isProcessing}
            >
              {isProcessing 
                ? "Processing Payment..." 
                : `Place Order (${formatPrice(pricing.total)})`}
            </Button>
          </form>

          {/* Right Column: Order details & Products summary */}
          <div className="flex flex-col gap-6 sticky top-24">
            <Card className="luxury-panel rounded-2xl p-6 border-border/50">
              <h3 className="text-lg font-bold text-foreground mb-4">Order Summary</h3>
              
              {/* Product items in checkout list */}
              <div className="flex flex-col gap-3.5 max-h-[300px] overflow-y-auto pr-1 mb-5">
                {cart.map((item) => {
                  const product = getProductById(item.productId);
                  if (!product) return null;

                  return (
                    <div
                      key={`${item.productId}-${item.size}-${item.color.name}`}
                      className="flex items-center gap-3"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-12 h-16 object-cover object-top rounded-lg border border-border/30 bg-brand-pearl"
                      />
                      <div className="flex-1 min-w-0 text-xs">
                        <p className="font-semibold text-foreground truncate">{product.name}</p>
                        <p className="text-muted-foreground mt-0.5 flex gap-1.5 flex-wrap">
                          <span>Size: {item.size}</span>
                          <span>Color: {item.color.name}</span>
                          <span>Qty: {item.quantity}</span>
                        </p>
                      </div>
                      <span className="font-semibold text-foreground text-xs text-right whitespace-nowrap">
                        {formatPrice(product.discountPrice * item.quantity)}
                      </span>
                    </div>
                  );
                })}
              </div>

              <Separator className="bg-border/60 my-4" />

              <div className="flex flex-col gap-3 text-sm font-semibold">
                <div className="flex justify-between text-muted-foreground">
                  <span>Items Subtotal</span>
                  <span className="text-foreground">{formatPrice(pricing.subtotal)}</span>
                </div>
                {pricing.discount > 0 && (
                  <div className="flex justify-between text-primary">
                    <span>Discount Applied</span>
                    <span>-{formatPrice(pricing.discount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping Fee</span>
                  <span className="text-foreground">
                    {pricing.shipping === 0 ? (
                      <span className="text-success font-bold uppercase tracking-wider text-[11px]">Free</span>
                    ) : (
                      formatPrice(pricing.shipping)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>GST/Taxes (5%)</span>
                  <span className="text-foreground">{formatPrice(pricing.tax)}</span>
                </div>
                
                <Separator className="bg-border/60 my-2" />

                <div className="flex justify-between text-base font-bold items-center">
                  <span>Grand Total</span>
                  <span className="text-xl text-primary">{formatPrice(pricing.total)}</span>
                </div>
              </div>

              {/* Extra Trust Badges */}
              <div className="border-t border-border/60 pt-5 mt-6 grid gap-2.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-success" />
                  <span>Secure 256-bit SSL encrypted connection</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
