import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowLeft, Truck, Clock, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/shipping-policy")({
  component: ShippingPolicyPage,
});

function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-16 pt-8 animate-fade-rise">
      <div className="container-shell max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-foreground sm:text-4xl mb-2 flex items-center gap-3">
          <Truck className="h-8 w-8 text-primary" /> Shipping & Delivery Policy
        </h1>
        <p className="text-xs text-muted-foreground font-semibold mb-8">
          Last updated: June 14, 2026
        </p>

        <Card className="luxury-panel rounded-2xl p-6 sm:p-8 border-border/50 flex flex-col gap-6 text-sm leading-8 font-medium text-muted-foreground">
          <p className="text-foreground font-semibold">
            Thank you for visiting and shopping at Vastra Butique. Below are the terms and conditions that constitute our Shipping Policy.
          </p>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              1. Shipping Charges & Cash on Delivery (COD)
            </h3>
            <p>We offer competitive shipping rates across India:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-2">
              <li>
                <strong>Orders above ₹999:</strong> <span className="text-success font-bold">Free Shipping</span>.
              </li>
              <li>
                <strong>Orders below ₹999:</strong> Flat shipping charge of <strong>₹99</strong>.
              </li>
              <li>
                <strong>Cash on Delivery (COD):</strong> No extra collection fee. Pay the exact order total shown on checkout.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              2. Processing & Dispatch Timeline
            </h3>
            <p>
              All standard stock items are processed and dispatched within <strong>1-2 business days</strong>. Custom orders, altered garments, or heavy boutique suits may require <strong>3-5 business days</strong> for tailoring and custom stitching.
            </p>
            <p className="mt-1">
              Please note that we do not process or dispatch orders on Sundays and national public holidays.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              3. Delivery Estimates
            </h3>
            <p>We ship via leading domestic couriers like Delhivery, Bluedart, Ecom Express, and DTDC. Delivery timeline estimates are:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-2">
              <li>
                <strong>Metro Cities (Delhi, Mumbai, Bangalore, Jaipur):</strong> 2-3 business days.
              </li>
              <li>
                <strong>Other Cities & Towns:</strong> 3-5 business days.
              </li>
              <li>
                <strong>Northeast & Remote Regions:</strong> 5-7 business days.
              </li>
            </ul>
            <p className="mt-2 text-xs italic text-muted-foreground/80 flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-primary" /> Delivery delays can occasionally occur due to extreme weather, regional festivals, or logistics problems.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              4. Shipment Tracking
            </h3>
            <p>
              Once your order is handed over to the courier, you will receive a tracking link via email and WhatsApp. You can monitor the parcel&apos;s progress in real-time or log in to your <Link to="/account" className="text-primary hover:underline font-semibold">Account Dashboard</Link> to track active shipments.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              5. Damaged Shipments
            </h3>
            <p>
              If your package is visibly damaged or tampered with at the time of delivery, please refuse the delivery and contact our customer support team immediately. If you have already received the parcel and found it damaged, please keep the box packaging and report it to us within 24 hours.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
