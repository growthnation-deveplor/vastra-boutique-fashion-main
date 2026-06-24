import React from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";

// Placeholder category data
const categories = [
  {
    title: "Women's Designer Blouses",
    description: "Handcrafted boutique blouses with premium embroidery.",
    image: "/images/hero/hero-purple.jpeg",
    category: "party-wear",
    icon: <svg className="h-5 w-5 text-[#B89047]" /* placeholder */></svg>,
  },
  {
    title: "Banarasi Blouses",
    description: "Elegant Banarasi silk blouses with traditional patterns.",
    image: "/images/hero/hero-ivory.jpeg",
    category: "ethnic-wear",
    icon: <svg className="h-5 w-5 text-[#B89047]" /* placeholder */></svg>,
  },
  {
    title: "Kids Dresses",
    description: "Cute and stylish boutique dresses for young girls.",
    image: "/images/products/magenta-kids-lehenga.jpeg",
    category: "kids-wear",
    icon: <svg className="h-5 w-5 text-[#B89047]" /* placeholder */></svg>,
  },
  {
    title: "Festive Collection",
    description: "Special occasion outfits for premium ethnic styling.",
    image: "/images/hero/hero-custom.png",
    category: "boutique-collection",
    icon: <svg className="h-5 w-5 text-[#B89047]" /* placeholder */></svg>,
  },
];

export default function CategoryGrid() {
  return (
    <section id="collection" className="section-shell bg-[#FAF7F2]/30 border-t border-border/50 py-12">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center mb-12 animate-fade-rise">
          <h2 className="text-2xl sm:text-3xl font-display font-medium uppercase tracking-[0.2em] text-[#2F1B12] flex items-center justify-center gap-3">
            <span className="text-[#B89047] text-lg sm:text-xl">⤛</span>
            Shop By Category
            <span className="text-[#B89047] text-lg sm:text-xl">⤜</span>
          </h2>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, idx) => (
            <Link
              key={cat.title}
              to="/shop"
              search={{ category: cat.category }}
              className="group flex flex-col items-center animate-fade-rise hover:no-underline"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="relative w-full aspect-[4/5] rounded-[1.6rem] overflow-hidden bg-brand-pearl shadow-md">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#B89047]/50 shadow-md flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
                  {cat.icon}
                </div>
              </div>
              <div className="mt-8 text-center px-2 flex flex-col items-center">
                <h3 className="text-base font-display font-bold text-[#2F1B12] group-hover:text-[#B89047] transition-colors leading-tight">
                  {cat.title}
                </h3>
                {cat.description && (
                  <p className="mt-1 text-[11px] font-semibold text-[#B89047] uppercase tracking-wider">
                    {cat.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
