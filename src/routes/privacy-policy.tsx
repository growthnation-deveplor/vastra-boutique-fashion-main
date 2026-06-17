import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "../components/ui/card";
import { ArrowLeft, Shield } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
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
          <Shield className="h-8 w-8 text-primary" /> Privacy Policy
        </h1>
        <p className="text-xs text-muted-foreground font-semibold mb-8">
          Last updated: June 14, 2026
        </p>

        <Card className="luxury-panel rounded-2xl p-6 sm:p-8 border-border/50 flex flex-col gap-6 text-sm leading-8 font-medium text-muted-foreground">
          <p className="text-foreground font-semibold">
            Vastra Butique values the privacy of our visitors and customers. This Privacy Policy describes how we collect, use, and protect your personal information when you use our website.
          </p>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              1. Information We Collect
            </h3>
            <p>We collect information you provide directly to us when you register an account, make a purchase, or communicate with us, including:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-2">
              <li>Name, email address, phone number, and shipping/billing address.</li>
              <li>Order history details, cart choices, and coupon usage records.</li>
              <li>Communications you send to us directly or via WhatsApp widgets.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              2. How We Use Your Information
            </h3>
            <p>We use the information we collect to operate, maintain, and improve our services, including to:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-2">
              <li>Process your checkout transactions and ship your ordered outfits.</li>
              <li>Manage your customer account and profile addresses.</li>
              <li>Respond to inquiries, styling requests, and provide order support.</li>
              <li>Provide shipping notifications, tracking details, and support messages on WhatsApp.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              3. Data Protection and Security
            </h3>
            <p>
              We implement industry-standard administrative, technical, and physical security measures to safeguard your personal data. Your checkout payments are processed through secure gateways, and we never store your actual credit/debit card numbers in our databases.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              4. Third-Party Sharing
            </h3>
            <p>
              We do not sell, rent, or lease your personal information to third parties. We share data only with trusted partners required to fulfill services, such as shipping couriers (Delhivery, Bluedart) and simulated payment processors.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground border-b border-border/40 pb-2 mb-3">
              5. Contact Us
            </h3>
            <p>
              If you have any questions or concerns about this Privacy Policy or how your data is handled, please write to us at <a href="mailto:Lekhrajsharma2129@gmail.com" className="text-primary hover:underline font-semibold">Lekhrajsharma2129@gmail.com</a>.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
