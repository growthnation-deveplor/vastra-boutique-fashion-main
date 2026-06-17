import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Shield, Sparkles, HeartHandshake, MapPin, Milestone } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const brandValues = [
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Premium Fabrics & Finishes",
      desc: "We source only the finest fabrics — from pure Banarasi silk to premium georgette and soft-touch modal cotton, ensuring every outfit feels as luxurious as it looks.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Artisan Hand-Embroidery",
      desc: "Our collections highlight traditional Indian techniques including Lucknowi Chikankari, Zardozi work, and Rajasthani Gota Patti hand-stitched by native craftsmen.",
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: "Customer-First Boutique Care",
      desc: "From friendly sizing assistance on WhatsApp to secure orders and flexible exchanges, our boutique ensures your satisfaction is our top priority.",
    },
  ];

  const timelineEvents = [
    {
      year: "2020",
      title: "Founded in Jaipur",
      desc: "Vastra Butique began as a small boutique studio in the heart of Jaipur, Rajasthan, driven by a passion to combine traditional Indian textiles with modern western silhouettes.",
    },
    {
      year: "2022",
      title: "National E-Commerce Launch",
      desc: "Due to high local praise, we expanded online to offer our curated boutique collection nationwide, providing fast shipping and COD orders across India.",
    },
    {
      year: "2024",
      title: "10,000+ Happy Customers",
      desc: "Served over 10,000 happy families across major cities in India, maintaining a stellar 4.8★ average customer satisfaction rating.",
    },
    {
      year: "2026",
      title: "Expanding the Vision",
      desc: "Now carrying over 50+ curated collections, exclusive designer sets, and a growing community of fashion-forward girls seeking comfort and premium style.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pb-16 animate-fade-rise">
      {/* Hero Banner */}
      <section className="relative h-[360px] sm:h-[420px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-ink/50 z-10" />
        <img
          src="/images/hero/hero-teal-blouse-front.jpeg"
          alt="Boutique Studio"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-20 max-w-2xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Vastra Butique Story
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mt-4 leading-none">
            Crafting Elegance Since 2020
          </h1>
          <p className="text-white/80 mt-5 text-sm sm:text-base leading-7 max-w-lg mx-auto font-medium">
            Where every stitch tells a story of Indian craftsmanship, traditional heritage, and contemporary elegance.
          </p>
        </div>
      </section>

      {/* Brand Mission & Showcase */}
      <section className="section-shell container-shell">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex flex-col gap-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Our Vision & Mission
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Empowering Girls through Confident Styling
            </h2>
            <p className="text-sm leading-7 text-muted-foreground mt-2">
              At Vastra Butique, we believe that fashion is a powerful way to express confidence, personality, and charm. Founded in Jaipur — the heritage craft capital of India — our boutique curates the finest fabrics, traditional craft handiworks, and premium silhouettes designed specifically for girls.
            </p>
            <p className="text-sm leading-7 text-muted-foreground">
              From festive ethnic sets to trendy western outfits, each piece in our collection represents Jaipur&apos;s rich textile heritage integrated with global fashion sensibilities.
            </p>
          </div>
          <div className="luxury-panel p-3 rounded-2xl bg-card/30">
            <div className="luxury-outline rounded-xl overflow-hidden aspect-[4/5]">
              <img
                src="/images/products/green-brocade-blouse-front.jpeg"
                alt="Jaipur Boutique Craft"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-shell bg-card/45 border-y border-border/50">
        <div className="container-shell">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">What We Stand For</p>
            <h2 className="text-3xl font-semibold text-foreground mt-3 sm:text-4xl">Our Core Values</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {brandValues.map((value, idx) => (
              <Card key={idx} className="luxury-panel rounded-2xl p-6 flex flex-col gap-4 text-center border-border/40 hover:bg-card transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-1">
                  {value.icon}
                </div>
                <h3 className="font-bold text-foreground text-lg">{value.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-6 font-medium">
                  {value.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-shell container-shell max-w-3xl">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">Our Growth</p>
          <h2 className="text-3xl font-semibold text-foreground mt-3 sm:text-4xl">The Vastra Butique Journey</h2>
        </div>

        <div className="relative pl-8 sm:pl-12 border-l border-primary/20 flex flex-col gap-10">
          {timelineEvents.map((event, idx) => (
            <div key={idx} className="relative group">
              {/* Point Node Indicator */}
              <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 h-6.5 w-6.5 rounded-full bg-primary border-4 border-background shadow-md flex items-center justify-center text-white text-[9px] font-bold group-hover:scale-110 transition-transform">
                ✓
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {event.year}
              </span>
              <h4 className="text-lg font-bold text-foreground mt-1.5">{event.title}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-6 font-medium max-w-xl">
                {event.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Action CTA Section */}
      <section className="container-shell mt-10">
        <div className="rounded-[2rem] overflow-hidden p-8 sm:p-12 text-center bg-gradient-to-br from-primary to-primary-foreground text-primary-foreground relative shadow-xl">
          <div className="absolute inset-0 bg-brand-ink/10 pointer-events-none" />
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-none">Ready to Explore?</h2>
            <p className="text-white/80 text-sm mt-4 leading-6 font-medium">
              Discover Jaipur&apos;s finest girls clothing collection, handpicked and crafted for your next special moment.
            </p>
            <div className="flex gap-3.5 justify-center mt-8 flex-wrap">
              <Button asChild size="lg" variant="hero" className="rounded-full bg-white text-primary hover:bg-white/95">
                <Link to="/shop">Shop Collection</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10 hover:text-white">
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
