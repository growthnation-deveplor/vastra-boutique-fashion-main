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
          <Landmark className="h-8 w-8 text-primary" /> Refund & Return Policy
        </h1>
        <p className="text-xs text-muted-foreground font-semibold mb-8">
          Last updated: June 14, 2026
        </p>

        <Card className="luxury-panel rounded-2xl p-6 sm:p-8 border-border/50 flex flex-col gap-6 text-sm leading-8 font-medium text-muted-foreground">
          <p className="text-foreground font-semibold">
            At Vastra Boutique, we are committed to providing you with premium quality apparel and custom designs. If you are not entirely satisfied with your purchase, we are here to help. Please read our returns and refunds procedure below.
          </p>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              1. Returns Eligibility
            </h3>
            <p>We accept return requests under the following conditions:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-2">
              <li>The item must be unused, unwashed, and in the same condition as when you received it.</li>
              <li>The item must remain in its original packaging with all boutique tags and product cards attached.</li>
              <li>The return request must be raised within <strong>7 days</strong> of delivery.</li>
              <li>Customized orders or custom stitched suits are <strong>not eligible</strong> for returns unless they arrive damaged or defective.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              2. Return Process
            </h3>
            <p>To initiate a return, please follow these steps:</p>
            <ol className="list-decimal pl-5 flex flex-col gap-3.5 mt-2">
              <li>
                Send an email to <a href="mailto:Lekhrajsharma2129@gmail.com" className="text-primary hover:underline font-semibold">Lekhrajsharma2129@gmail.com</a> or message us on WhatsApp at <strong>+91 7976396802</strong> with your Order ID and photos of the item.
              </li>
              <li>
                Once approved, we will arrange a reverse pickup from your shipping address (available in select PIN codes).
              </li>
              <li>
                If reverse pickup is not available for your location, you will need to self-ship the item back to our studio in Jaipur. We will credit a shipping allowance of up to ₹100 as store credit.
              </li>
            </ol>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              3. Refunds & Store Credit
            </h3>
            <p>Once your return package is received at our quality warehouse and inspected, we will notify you of the approval or rejection of your refund:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-2">
              <li>
                <strong>Approved returns:</strong> Refunds are processed back to your original payment source (Credit/Debit card, UPI, Bank account) within 5-7 business days.
              </li>
              <li>
                <strong>Cash on Delivery (COD) orders:</strong> COD orders are refunded via Bank Transfer or UPI. You will need to provide your banking details to our customer support representatives.
              </li>
              <li>
                Alternatively, you can choose to receive your refund as <strong>Vastra Boutique Store Credit</strong>, which has lifetime validity.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              4. Exchanges
            </h3>
            <p>
              If you wish to exchange an item for a different size or color, please refer to our <Link to="/exchange-policy" className="text-primary hover:underline font-semibold">Exchange Policy</Link>. Size exchanges are processed free of charge.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              5. Damaged or Defective Items
            </h3>
            <p>
              In the rare event that your product arrives damaged, defective, or incorrect, please notify us within <strong>24 hours</strong> of delivery. We will issue a replacement or full refund including any extra shipping fees immediately.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
