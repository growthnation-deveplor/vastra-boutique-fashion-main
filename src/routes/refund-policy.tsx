import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "../components/ui/card";
import { ArrowLeft, Landmark, History, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/refund-policy")({
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
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
          <Landmark className="h-8 w-8 text-primary" /> Return & Replacement Policy
        </h1>
        <p className="text-xs text-muted-foreground font-semibold mb-8">
          Last updated: June 18, 2026
        </p>

        <Card className="luxury-panel rounded-2xl p-6 sm:p-8 border-border/50 flex flex-col gap-6 text-sm leading-8 font-medium text-muted-foreground">
          <div className="p-4 rounded-xl border border-destructive/20 bg-destructive/5 text-foreground font-bold flex items-start gap-2.5">
            <span className="text-base">⚠️</span>
            <div>
              <p className="text-sm uppercase tracking-wider text-destructive font-black">Strict Policy Notice</p>
              <p className="text-xs text-muted-foreground mt-0.5 leading-normal">
                Vastra Butique maintains a strict <strong>No Refund Policy</strong>. We only offer replacement and exchange options for our clothing. Please read the guidelines below before placing your order.
              </p>
            </div>
          </div>

          <p className="text-foreground font-semibold">
            At Vastra Butique, we are committed to providing you with premium quality apparel and custom designs. If you are not entirely satisfied with your garment's sizing or receive a defective piece, we are here to help you get it replaced or exchanged.
          </p>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              1. Returns for Replacement Eligibility
            </h3>
            <p>We accept return requests for replacement under the following conditions:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-2">
              <li>The item must be unused, unwashed, and in the same brand-new condition as when you received it.</li>
              <li>The item must remain in its original packaging with all boutique tags and product cards attached.</li>
              <li>The replacement request must be raised within <strong>7 days</strong> of delivery.</li>
              <li>Customized orders or custom stitched suits are <strong>not eligible</strong> for return/replacement unless they arrive damaged or defective.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              2. Return Process
            </h3>
            <p>To initiate a return for replacement, please follow these steps:</p>
            <ol className="list-decimal pl-5 flex flex-col gap-3.5 mt-2">
              <li>
                Send an email to <a href="mailto:Lekhrajsharma2129@gmail.com" className="text-primary hover:underline font-semibold">Lekhrajsharma2129@gmail.com</a> or message us on WhatsApp at <strong>+91 7976396802</strong> with your Order ID and photos of the item.
              </li>
              <li>
                Once approved, we will arrange a reverse pickup from your shipping address (available in select PIN codes).
              </li>
              <li>
                If reverse pickup is not available for your location, you will need to self-ship the item back to our boutique studio in Jaipur. We will credit a shipping allowance of up to ₹100 as store credit.
              </li>
            </ol>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              3. Strictly No Cash Refunds
            </h3>
            <p>Please note that we do not issue monetary refunds to original payment methods (cards/UPI/netbanking) or cash refunds for any orders:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-2">
              <li>
                <strong>Replacements:</strong> Once inspected at our boutique, we will ship the replacement item (new size/color) free of cost.
              </li>
              <li>
                <strong>Store Credit:</strong> If the requested item size or design is out of stock, we will issue you a **Vastra Butique Store Credit Coupon** of equivalent purchase value, which has lifetime validity.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              4. Exchanges
            </h3>
            <p>
              If you wish to exchange an item for a different size or color, please refer to our <Link to="/exchange-policy" className="text-primary hover:underline font-semibold">Exchange Policy</Link>. Sizing exchanges are processed free of charge on your first exchange request.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              5. Damaged or Defective Items
            </h3>
            <p>
              In the rare event that your product arrives damaged, defective, or incorrect, please notify us within <strong>24 hours</strong> of delivery. We will issue a brand-new replacement of the same product immediately at zero additional cost.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
