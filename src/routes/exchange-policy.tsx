import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "../components/ui/card";
import { ArrowLeft, RefreshCw, CheckCircle2, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/exchange-policy")({
  component: ExchangePolicyPage,
});

function ExchangePolicyPage() {
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
          <RefreshCw className="h-8 w-8 text-primary" /> Exchange & Returns Policy
        </h1>
        <p className="text-xs text-muted-foreground font-semibold mb-8">
          Last updated: June 14, 2026
        </p>

        <Card className="luxury-panel rounded-2xl p-6 sm:p-8 border-border/50 flex flex-col gap-6 text-sm leading-8 font-medium text-muted-foreground">
          <p className="text-foreground font-semibold">
            At Vastra Butique, we want to ensure you get the absolute perfect fit. If the garment you ordered doesn&apos;t fit quite right, we offer a hassle-free exchange service. Please note that we do not offer monetary refunds; all return requests are processed strictly via product replacement, design exchange, or boutique store credit.
          </p>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              1. Exchange Window
            </h3>
            <p>
              You can request a size or color exchange within <strong>7 days</strong> of receiving your package. Exchange requests made after this 7-day window will not be processed.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              2. Eligibility Criteria
            </h3>
            <p>To qualify for an exchange, items must meet the following guidelines:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-2">
              <li>Garments must be unused, unwashed, and stain-free.</li>
              <li>All tags, labels, and product cards must be intact.</li>
              <li>The item must be in its original plastic or boutique packaging.</li>
              <li>Custom-fit alterations or made-to-measure designs cannot be exchanged.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              3. How to Request an Exchange
            </h3>
            <p>Getting a size exchange is simple:</p>
            <ol className="list-decimal pl-5 flex flex-col gap-3.5 mt-2">
              <li>
                Contact us via email <a href="mailto:Lekhrajsharma2129@gmail.com" className="text-primary hover:underline font-semibold">Lekhrajsharma2129@gmail.com</a> with your Order ID and the new size/color you need.
              </li>
              <li>
                We will schedule a reverse pickup from your shipping address. When the courier agent arrives, hand over the original item in secure packaging.
              </li>
              <li>
                Once our quality inspection team reviews and approves the returned item, your new exchange garment will be dispatched to your address free of cost.
              </li>
            </ol>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              4. Cost of Exchange
            </h3>
            <p>
              Your <strong>first exchange request</strong> for any order is <strong>100% Free</strong>. If you require subsequent exchanges for the same purchase, a flat processing and courier handling fee of ₹150 will be charged.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              5. Out of Stock Exchanges
            </h3>
            <p>
              If the size you requested is out of stock, we will issue a store credit coupon for the item&apos;s purchase value or offer you a different design of equivalent price.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
