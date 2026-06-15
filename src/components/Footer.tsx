import React from "react";
import { Link } from "@tanstack/react-router";

export const Footer: React.FC = () => {
  const whatsappUrl = "https://wa.me/917976396802";
  const callUrl = "tel:+917976396802";

  return (
    <footer className="border-t border-border/60 bg-background/90">
      <div className="container-shell grid gap-8 py-12 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand section */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-card text-[10px] font-semibold tracking-[0.25em] text-primary shadow-sm">
              VB
            </div>
            <div>
              <p className="text-lg font-bold text-foreground">Vastra Boutique</p>
              <p className="text-[9px] uppercase tracking-[0.26em] text-muted-foreground">
                Girls Fashion Boutique
              </p>
            </div>
          </Link>
          <p className="text-sm leading-6 text-muted-foreground max-w-xs">
            Premium girls fashion boutique offering designer sarees, kurtis, and women&apos;s ethnic wear. Handpicked fabrics, elegant designs, and direct delivery.
          </p>
        </div>

        {/* Shop links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground mb-4">
            Shop By Category
          </h4>
          <div className="flex flex-col gap-2.5 text-sm">
            <Link to="/shop" search={{ category: "party-wear" }} className="text-muted-foreground hover:text-primary transition-colors">
              Party Wear Dresses
            </Link>
            <Link to="/shop" search={{ category: "western-wear" }} className="text-muted-foreground hover:text-primary transition-colors">
              Western Outfits
            </Link>
            <Link to="/shop" search={{ category: "ethnic-wear" }} className="text-muted-foreground hover:text-primary transition-colors">
              Ethnic Suits & Sets
            </Link>
            <Link to="/shop" search={{ category: "traditional-wear" }} className="text-muted-foreground hover:text-primary transition-colors">
              Traditional Sarees
            </Link>
            <Link to="/shop" search={{ category: "boutique-collection" }} className="text-muted-foreground hover:text-primary transition-colors">
              Boutique Specials
            </Link>
          </div>
        </div>

        {/* Support & Policies */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground mb-4">
            Policies & Support
          </h4>
          <div className="flex flex-col gap-2.5 text-sm">
            <Link to="/shipping-policy" className="text-muted-foreground hover:text-primary transition-colors">
              Shipping & Delivery
            </Link>
            <Link to="/exchange-policy" className="text-muted-foreground hover:text-primary transition-colors">
              Exchange Policy
            </Link>
            <Link to="/refund-policy" className="text-muted-foreground hover:text-primary transition-colors">
              Refund Policy
            </Link>
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground mb-4">
            Boutique Contact
          </h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <p className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-muted-foreground/60">Phone Support</span>
              <a href={callUrl} className="font-medium text-foreground hover:text-primary transition-colors mt-0.5">
                +91 7976396802
              </a>
            </p>
            <p className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-muted-foreground/60">Email Address</span>
              <a href="mailto:Lekhrajsharma2129@gmail.com" className="font-medium text-foreground hover:text-primary transition-colors mt-0.5 break-all">
                Lekhrajsharma2129@gmail.com
              </a>
            </p>
            <p className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-muted-foreground/60">Store Owner</span>
              <span className="font-medium text-foreground mt-0.5">Soniya Sharma</span>
            </p>
            <a
              href={`${whatsappUrl}?text=${encodeURIComponent("Hi Vastra Boutique, I need styling assistance.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-success/10 border border-success/30 px-4 py-2 text-xs font-semibold text-success hover:bg-success hover:text-white transition-all w-fit mt-1"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground/70 bg-card/40">
        <div className="container-shell flex flex-col gap-2 sm:flex-row sm:justify-between items-center">
          <p>© {new Date().getFullYear()} Vastra Boutique. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed with Premium Quality & Comfort ✨
          </p>
        </div>
      </div>
    </footer>
  );
};
