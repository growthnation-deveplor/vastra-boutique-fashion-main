import React, { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useStore } from "../hooks/use-store";
import { Order } from "../types/store";
import { formatPrice } from "../lib/products-db";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { CheckCircle2, ShoppingBag, MessageCircle, Truck, Calendar } from "lucide-react";

export const Route = createFileRoute("/checkout-confirmation")({
  component: CheckoutConfirmation,
});

function CheckoutConfirmation() {
  const { getLastOrder } = useStore();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    // Load last placed order on mount
    const last = getLastOrder();
    setOrder(last);
  }, []);

  // Estimate delivery date (5 days from now)
  const getDeliveryDateString = () => {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    return date.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleWhatsAppOrderQuery = () => {
    if (!order) return;
    const msg = `Hi Vastra Boutique, I placed an order recently.\n\n*Order ID:* ${order.orderId}\n*Customer:* ${order.customerName}\n*Total:* ${formatPrice(order.pricing.total)}\n*Status:* Please share order confirmation and tracking details.`;
    const url = `https://wa.me/917976396802?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  if (!order) {
    return (
      <div className="container-shell py-16 text-center flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="text-4xl">🧾</div>
        <h2 className="text-2xl font-bold text-foreground">No Active Order Receipt</h2>
        <p className="text-sm text-muted-foreground max-w-sm mt-1">
          You don&apos;t have any recently placed orders to confirm.
        </p>
        <Button variant="hero" asChild className="rounded-full mt-2">
          <Link to="/shop">Shop Outfits</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-16 pt-8 animate-fade-rise">
      <div className="container-shell max-w-2xl">
        {/* Confirmation Banner */}
        <div className="text-center mb-8 flex flex-col items-center gap-3">
          <CheckCircle2 className="h-16 w-16 text-success animate-bounce-soft" />
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Order Placed!</h1>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mt-1">
            Thank you for shopping at Vastra Butique. Your order has been registered and is being processed.
          </p>
        </div>

        {/* Order Info Card */}
        <Card className="luxury-panel rounded-2xl p-6 border-border/50 flex flex-col gap-5">
          <div className="flex justify-between items-center flex-wrap gap-3 pb-3 border-b border-border/40 text-xs sm:text-sm font-semibold">
            <div>
              <p className="text-muted-foreground">Order ID</p>
              <p className="text-foreground text-base font-bold mt-0.5">{order.orderId}</p>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground">Order Status</p>
              <span className="inline-block mt-0.5 bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-wider rounded px-2.5 py-0.5 border border-primary/20">
                {order.orderStatus}
              </span>
            </div>
          </div>

          {/* Delivery Timeline info */}
          <div className="flex items-start gap-3 bg-secondary/40 border border-border/40 p-4 rounded-xl text-xs sm:text-sm">
            <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-foreground">Estimated Delivery Date</p>
              <p className="text-muted-foreground mt-0.5 font-medium">{getDeliveryDateString()}</p>
              <p className="text-[11px] text-muted-foreground/80 mt-1 leading-normal font-semibold">
                You will receive an email notification with tracking details once your package is dispatched.
              </p>
            </div>
          </div>

          {/* Shipping Details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Delivery Address</h3>
            <div className="text-xs sm:text-sm font-semibold leading-relaxed">
              <p className="text-foreground">{order.customerName}</p>
              <p className="text-muted-foreground">{order.shippingAddress.addressLine}</p>
              <p className="text-muted-foreground">
                {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
              </p>
              <p className="text-muted-foreground mt-1 flex items-center gap-2">
                <span>Phone: {order.customerPhone}</span>
                <span>•</span>
                <span>Email: {order.customerEmail}</span>
              </p>
            </div>
          </div>

          <Separator className="bg-border/40" />

          {/* Items Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Order Items</h3>
            <div className="flex flex-col gap-3">
              {order.items.map((item) => (
                <div key={`${item.productId}-${item.size}-${item.color.name}`} className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-13 object-cover object-top rounded border border-border/30 bg-brand-pearl"
                    />
                    <div>
                      <p className="text-foreground leading-tight">{item.name}</p>
                      <p className="text-muted-foreground text-xs font-medium mt-0.5">
                        Size: {item.size} | Color: {item.color.name} | Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <span className="text-foreground">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator className="bg-border/40" />

          {/* Totals */}
          <div className="flex flex-col gap-2.5 text-xs sm:text-sm font-semibold">
            <div className="flex justify-between text-muted-foreground">
              <span>Items Subtotal</span>
              <span>{formatPrice(order.pricing.subtotal)}</span>
            </div>
            {order.pricing.discount > 0 && (
              <div className="flex justify-between text-primary">
                <span>Discount Applied</span>
                <span>-{formatPrice(order.pricing.discount)}</span>
              </div>
            )}
            <div className="flex justify-between text-muted-foreground">
              <span>Shipping Fee</span>
              <span>
                {order.pricing.shipping === 0 ? (
                  <span className="text-success font-bold uppercase tracking-wider text-[10px]">Free</span>
                ) : (
                  formatPrice(order.pricing.shipping)
                )}
              </span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>GST/Taxes (5%)</span>
              <span>{formatPrice(order.pricing.tax)}</span>
            </div>
            <Separator className="bg-border/30 my-1" />
            <div className="flex justify-between text-sm sm:text-base font-bold items-center">
              <span>Total Paid ({order.paymentMethod.toUpperCase()})</span>
              <span className="text-xl text-primary">{formatPrice(order.pricing.total)}</span>
            </div>
          </div>
        </Card>

        {/* Buttons Action */}
        <div className="mt-8">
          <Button asChild variant="hero" className="w-full rounded-full h-11 text-xs font-bold gap-2">
            <Link to="/shop">
              <ShoppingBag className="h-4.5 w-4.5" />
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
