import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "../components/ui/card";
import { ArrowLeft, Scale } from "lucide-react";

export const Route = createFileRoute("/terms")({
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
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
          <Scale className="h-8 w-8 text-primary" /> Terms of Service
        </h1>
        <p className="text-xs text-muted-foreground font-semibold mb-8">
          Last updated: June 14, 2026
        </p>

        <Card className="luxury-panel rounded-2xl p-6 sm:p-8 border-border/50 flex flex-col gap-6 text-sm leading-8 font-medium text-muted-foreground">
          <p className="text-foreground font-semibold">
            Welcome to Vastra Butique. By accessing or using our website, you agree to comply with and be bound by the following Terms of Service. Please review them carefully.
          </p>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              1. General Terms & Account Use
            </h3>
            <p>
              By accessing this website, you warrant that you are at least 18 years of age or using the site under the supervision of a parent or guardian. If you create an account, you are responsible for maintaining the confidentiality of your login credentials and for restricting access to your computer or device.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              2. Products, Pricing & Availability
            </h3>
            <p>
              We strive to represent our boutique collection colors, details, and dimensions as accurately as possible. However, actual colors may vary slightly due to screen setups and lighting. 
            </p>
            <p className="mt-1.5">
              All prices are listed in Indian Rupees (INR) and include GST unless specified otherwise. We reserve the right to alter pricing, details, and inventory listings at any time without prior notice.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              3. Orders & Billing
            </h3>
            <p>
              We reserve the right to refuse or cancel any orders at our sole discretion, including orders that contain typographical errors in pricing, inventory stock limits, or suspected transaction fraud. If an order is canceled after you have completed payment, a full refund will be issued to the original payment source.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              4. Return, Exchange & Delivery Conditions
            </h3>
            <p>
              All purchases, deliveries, exchanges, and return claims are governed strictly by our active <Link to="/shipping-policy" className="text-primary hover:underline font-semibold">Shipping Policy</Link>, <Link to="/exchange-policy" className="text-primary hover:underline font-semibold">Exchange Policy</Link>, and <Link to="/refund-policy" className="text-primary hover:underline font-semibold">Replacement Policy</Link> documents.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              5. Governing Jurisdiction
            </h3>
            <p>
              These Terms of Service and any transactional disputes related to this website are governed by and construed in accordance with the laws of India. Any legal claims must be filed exclusively under the jurisdiction of the courts of <strong>Jaipur, Rajasthan</strong>.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
