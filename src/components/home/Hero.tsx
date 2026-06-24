import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";

// Placeholder assets – replace with actual URLs or imported images
const customLook = { url: "/images/hero/hero-custom.png" };
const purpleLook = { url: "/images/hero/hero-purple-gown.jpeg" };
const ivoryLook = { url: "/images/hero/hero-ivory-suit.jpeg" };
const redKurta = { url: "/images/products/red-cotton-kurta-set.jpeg" };
const pinkKurta = { url: "/images/products/pink-cotton-kurta-set.jpeg" };
const oliveSet = { url: "/images/products/olive-cotton-kurta-set.jpeg" };
const magentaKids = { url: "/images/products/magenta-kids-lehenga.jpeg" };
const burgundyGown = { url: "/images/products/burgundy-kids-gown.jpeg" };
const mintKids = { url: "/images/products/mint-kids-lehenga.jpeg" };
const sageRomper = { url: "/images/products/sage-kids-romper.jpeg" };
const navyDress = { url: "/images/products/navy-kids-dress.jpeg" };

// Animation variants
const imageVariants = {
  hidden: { x: 80, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.8 } },
  scaleLoop: {
    scale: [1, 1.03, 1],
    transition: { repeat: Infinity, duration: 12, ease: "easeInOut" },
  },
};

const textVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  // ----- Background carousel -----
  const heroImages = [
    customLook.url,
    purpleLook.url,
    ivoryLook.url,
    redKurta.url,
    pinkKurta.url,
    oliveSet.url,
    magentaKids.url,
    burgundyGown.url,
    mintKids.url,
    sageRomper.url,
    navyDress.url,
  ];

  const [heroIdx, setHeroIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setHeroIdx((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // ----- Signature look carousel (right side) -----
  const featuredLooks = [
    { url: customLook.url, title: "Designer Signature Outfit", id: "1" },
    { url: purpleLook.url, title: "Royal Festive Dress", id: "2" },
    { url: ivoryLook.url, title: "Ivory Silk Suit Set", id: "3" },
    { url: pinkKurta.url, title: "Premium Pink Kurta Set", id: "4" },
    { url: burgundyGown.url, title: "Burgundy Velvet Gown", id: "5" },
    { url: magentaKids.url, title: "Magenta Kids Lehenga", id: "6" },
  ];

  const [lookIdx, setLookIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setLookIdx((i) => (i + 1) % featuredLooks.length), 3500);
    return () => clearInterval(timer);
  }, [featuredLooks.length]);

  // ----- Accessibility helpers -----
  const handleDotKey = (e: React.KeyboardEvent, setter: (i: number) => void, idx: number) => {
    if (e.key === "Enter" || e.key === " ") setter(idx);
  };

  // ----- Parallax effect (simple scroll‑based translate) -----
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgTranslate = scrollY * 0.15; // slower than page scroll

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FCFAF8] bg-gradient-radial from-[#F8F2EB] to-[#FCFAF8] min-h-[620px] md:min-h-[700px] lg:min-h-[760px]"
      style={{ transform: `translateY(${bgTranslate}px)` }}
    >
      {/* Background image carousel */}
      <AnimatePresence>
        <motion.img
          key={heroImages[heroIdx]}
          src={heroImages[heroIdx]}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover filter blur-[2px]"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        />
      </AnimatePresence>
      {/* Radial overlay for warmth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-[#F8F2EB]/70 to-transparent" />

      {/* Content container */}
      <div className="container-shell grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] pt-12 pb-12 max-w-screen-xl">
        {/* Left column – text */}
        <motion.div
          className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#B89047]">ELEGANT ETHNIC FASHION</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-medium text-[#2F1B12] leading-tight">
            For Every <br />
            <span className="italic text-[#B89047] font-semibold">Woman</span>
          </h1>
          <div className="my-5 flex items-center justify-center lg:justify-start gap-2.5 text-[#B89047]/70">
            <div className="h-[1px] w-10 bg-current" />
            <span className="text-[10px] rotate-45">✦</span>
            <div className="h-[1px] w-10 bg-current" />
          </div>
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground font-semibold">
            Handcrafted Blouses &amp; Kids Fashion Collection
          </p>
          {/* Buttons with staggered animation */}
          <motion.div
            className="mt-8 flex flex-col gap-3.5 sm:flex-row w-full sm:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Button
              variant="hero"
              size="lg"
              asChild
              className="rounded-none bg-[#2F1B12] text-white hover:bg-[#432A1F] uppercase tracking-[0.2em] text-[10px] font-bold py-4 px-8 shadow-md"
            >
              <Link to="/shop">SHOP NOW</Link>
            </Button>
            <Button
              variant="luxury"
              size="lg"
              asChild
              className="rounded-none bg-transparent hover:bg-[#2F1B12]/5 text-[#2F1B12] border border-[#2F1B12] uppercase tracking-[0.2em] text-[10px] font-bold py-4 px-8 shadow-md"
            >
              <Link to="/shop">EXPLORE COLLECTION</Link>
            </Button>
          </motion.div>
          {/* Background carousel navigation dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setHeroIdx(idx)}
                onKeyDown={(e) => handleDotKey(e, setHeroIdx, idx)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${idx === heroIdx ? "w-6 bg-[#2F1B12]" : "w-2 bg-[#2F1B12]/20 hover:bg-[#2F1B12]/40"}`}
                aria-label={`Hero slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Right column – signature look image carousel */}
        <motion.div
          className="relative flex items-center justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="overflow-hidden rounded-[1.6rem] shadow-[var(--shadow-luxury)] aspect-[4/5] w-full max-w-[420px]"
            animate="scaleLoop"
          >
            <AnimatePresence>
              <motion.div
                key={featuredLooks[lookIdx].url}
                className="relative w-full h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={featuredLooks[lookIdx].url}
                  alt={featuredLooks[lookIdx].title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  priority={lookIdx === 0}
                />
                {/* Overlay info */}
                <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-white/95 font-bold z-20 drop-shadow-md">
                  <span>Signature edit</span>
                  <span>Vastra Signature</span>
                </div>
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/40 bg-background/85 p-4 backdrop-blur-xl z-20 shadow-lg">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-[10px] font-bold uppercase tracking-[0.24em] text-[#B89047]">Signature boutique look</p>
                      <p className="mt-1 truncate text-base font-extrabold text-[#2F1B12] transition-all duration-300">
                        {featuredLooks[lookIdx].title}
                      </p>
                    </div>
                    <Button
                      variant="hero"
                      size="sm"
                      asChild
                      className="rounded-full bg-[#2F1B12] text-white hover:bg-[#432A1F] h-8 text-[10px] px-3 font-bold border-0"
                    >
                      <Link to="/product/$id" params={{ id: featuredLooks[lookIdx].id }}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          {/* Dots for signature carousel */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {featuredLooks.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setLookIdx(idx)}
                onKeyDown={(e) => handleDotKey(e, setLookIdx, idx)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${idx === lookIdx ? "w-6 bg-[#2F1B12]" : "w-2 bg-[#2F1B12]/20 hover:bg-[#2F1B12]/40"}`}
                aria-label={`Signature slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";

// Placeholder assets – replace with actual URLs or imported images
const customLook = { url: "/images/hero/hero-custom.png" };
const purpleLook = { url: "/images/hero/hero-purple-gown.jpeg" };
const ivoryLook = { url: "/images/hero/hero-ivory-suit.jpeg" };
const redKurta = { url: "/images/products/red-cotton-kurta-set.jpeg" };
const pinkKurta = { url: "/images/products/pink-cotton-kurta-set.jpeg" };
const oliveSet = { url: "/images/products/olive-cotton-kurta-set.jpeg" };
const magentaKids = { url: "/images/products/magenta-kids-lehenga.jpeg" };
const burgundyGown = { url: "/images/products/burgundy-kids-gown.jpeg" };
const mintKids = { url: "/images/products/mint-kids-lehenga.jpeg" };
const sageRomper = { url: "/images/products/sage-kids-romper.jpeg" };
const navyDress = { url: "/images/products/navy-kids-dress.jpeg" };

// Animation variants
const imageVariants = {
  hidden: { x: 80, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
  scaleLoop: {
    scale: [1, 1.03, 1],
    transition: { repeat: Infinity, duration: 12, ease: "easeInOut" },
  },
};

const textVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const heroImages = [customLook.url, purpleLook.url, ivoryLook.url, redKurta.url, pinkKurta.url, oliveSet.url, magentaKids.url, burgundyGown.url, mintKids.url, sageRomper.url, navyDress.url];

  const [heroImageIdx, setHeroImageIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setHeroImageIdx((prev) => (prev + 1) % heroImages.length), 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const featuredLooks = [
    { url: customLook.url, title: "Designer Signature Outfit", id: "1" },
    { url: purpleLook.url, title: "Royal Festive Dress", id: "2" },
    { url: ivoryLook.url, title: "Ivory Silk Suit Set", id: "3" },
    { url: pinkKurta.url, title: "Premium Pink Kurta Set", id: "4" },
    { url: burgundyGown.url, title: "Burgundy Velvet Gown", id: "5" },
    { url: magentaKids.url, title: "Magenta Kids Lehenga", id: "6" },
  ];

  const [featuredLookIdx, setFeaturedLookIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setFeaturedLookIdx((prev) => (prev + 1) % featuredLooks.length), 3500);
    return () => clearInterval(timer);
  }, [featuredLooks.length]);

  // Accessibility: expose dot navigation via keyboard
  const handleDotKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "Enter" || e.key === " ") setFeaturedLookIdx(idx);
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#FCFAF8] bg-gradient-radial from-[#F8F2EB] to-[#FCFAF8] animate-fade-rise"
      style={{ minHeight: "620px" }}
    >
      {/* Background carousel */}
      <AnimatePresence>
        <motion.img
          key={heroImages[heroImageIdx]}
          src={heroImages[heroImageIdx]}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover filter blur-[2px]"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        />
      </AnimatePresence>
      {/* Subtle radial overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-[#F8F2EB]/70 to-transparent" />

      <div className="container-shell grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] pt-12 pb-12 max-w-screen-xl">
        {/* Left text column */}
        <motion.div
          className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#B89047]">ELEGANT ETHNIC FASHION</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-medium text-[#2F1B12] leading-tight">
            For Every <br />
            <span className="italic text-[#B89047] font-semibold">Woman</span>
          </h1>
          <div className="my-5 flex items-center justify-center lg:justify-start gap-2.5 text-[#B89047]/70">
            <div className="h-[1px] w-10 bg-current" />
            <span className="text-[10px] rotate-45">✦</span>
            <div className="h-[1px] w-10 bg-current" />
          </div>
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground font-semibold">
            Handcrafted Blouses & Kids Fashion Collection
          </p>
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row w-full sm:w-auto">
            <Button
              variant="hero"
              size="lg"
              asChild
              className="rounded-none bg-[#2F1B12] text-white hover:bg-[#432A1F] uppercase tracking-[0.2em] text-[10px] font-bold py-4 px-8 shadow-md"
            >
              <Link to="/shop">SHOP NOW</Link>
            </Button>
            <Button
              variant="luxury"
              size="lg"
              asChild
              className="rounded-none bg-transparent hover:bg-[#2F1B12]/5 text-[#2F1B12] border border-[#2F1B12] uppercase tracking-[0.2em] text-[10px] font-bold py-4 px-8 shadow-md"
            >
              <Link to="/shop">EXPLORE COLLECTION</Link>
            </Button>
          </div>
          {/* Navigation dots */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {featuredLooks.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setFeaturedLookIdx(idx)}
                onKeyDown={(e) => handleDotKey(e, idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === featuredLookIdx ? "w-6 bg-[#2F1B12]" : "w-2 bg-[#2F1B12]/20 hover:bg-[#2F1B12]/40"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Right image column */}
        <motion.div
          className="relative flex items-center justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="overflow-hidden rounded-[1.6rem] shadow-[var(--shadow-luxury)] aspect-[4/5] w-full max-w-[420px]"
            animate="scaleLoop"
          >
            <AnimatePresence>
              <motion.div
                key={featuredLooks[featuredLookIdx].url}
                className="relative w-full h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={featuredLooks[featuredLookIdx].url}
                  alt={featuredLooks[featuredLookIdx].title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  priority={featuredLookIdx === 0}
                />
                <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-white/95 font-bold z-20 drop-shadow-md">
                  <span>Signature edit</span>
                  <span>Vastra Signature</span>
                </div>
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/40 bg-background/85 p-4 backdrop-blur-xl z-20 shadow-lg">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-[10px] font-bold uppercase tracking-[0.24em] text-[#B89047]">Signature boutique look</p>
                      <p className="mt-1 truncate text-base font-extrabold text-[#2F1B12] transition-all duration-300">
                        {featuredLooks[featuredLookIdx].title}
                      </p>
                    </div>
                    <Button
                      variant="hero"
                      size="sm"
                      asChild
                      className="rounded-full bg-[#2F1B12] text-white hover:bg-[#432A1F] h-8 text-[10px] px-3 font-bold border-0"
                    >
                      <Link to="/product/$id" params={{ id: featuredLooks[featuredLookIdx].id }}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { Heart, ShoppingBag, Eye, ArrowRight } from "lucide-react";

// Placeholder assets - replace with actual URLs or imported images
const customLook = { url: "/images/hero/hero-custom.png" };
const purpleLook = { url: "/images/hero/hero-purple-gown.jpeg" };
const ivoryLook = { url: "/images/hero/hero-ivory-suit.jpeg" };
const redKurta = { url: "/images/products/red-cotton-kurta-set.jpeg" };
const pinkKurta = { url: "/images/products/pink-cotton-kurta-set.jpeg" };
const oliveSet = { url: "/images/products/olive-cotton-kurta-set.jpeg" };
const magentaKids = { url: "/images/products/magenta-kids-lehenga.jpeg" };
const burgundyGown = { url: "/images/products/burgundy-kids-gown.jpeg" };
const mintKids = { url: "/images/products/mint-kids-lehenga.jpeg" };
const sageRomper = { url: "/images/products/sage-kids-romper.jpeg" };
const navyDress = { url: "/images/products/navy-kids-dress.jpeg" };

export default function Hero() {
  const heroImages = [
    customLook.url,
    purpleLook.url,
    ivoryLook.url,
    redKurta.url,
    pinkKurta.url,
    oliveSet.url,
    magentaKids.url,
    burgundyGown.url,
    mintKids.url,
    sageRomper.url,
    navyDress.url,
  ];

  const [heroImageIdx, setHeroImageIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const featuredLooks = [
    { url: customLook.url, title: "Designer Signature Outfit", id: "1" },
    { url: purpleLook.url, title: "Royal Festive Dress", id: "2" },
    { url: ivoryLook.url, title: "Ivory Silk Suit Set", id: "3" },
    { url: pinkKurta.url, title: "Premium Pink Kurta Set", id: "4" },
    { url: burgundyGown.url, title: "Burgundy Velvet Gown", id: "5" },
    { url: magentaKids.url, title: "Magenta Kids Lehenga", id: "6" },
  ];

  const [featuredLookIdx, setFeaturedLookIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setFeaturedLookIdx((prev) => (prev + 1) % featuredLooks.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [featuredLooks.length]);

  return (
    <section id="home" className="section-shell relative isolate overflow-hidden animate-fade-rise">
      {/* Background slides */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {heroImages.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === heroImageIdx ? "opacity-100" : "opacity-0"}`}
          >
            <img src={img} alt="Background slide" className="w-full h-full object-cover filter blur-[2px] animate-kenburns" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          </div>
        ))}
        <div className="absolute left-[-8rem] top-20 h-64 w-64 rounded-full bg-brand-rose/25 blur-3xl" />
        <div className="absolute right-[-6rem] top-10 h-72 w-72 rounded-full bg-brand-gold/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="container-shell grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] pt-8 pb-12">
        {/* Text Intro (left) */}
        <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start animate-fade-rise">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#B89047]">Elegant Ethnic Fashion</p>
          <h1 className="mt-4 font-display text-5xl leading-tight font-medium text-[#2F1B12] sm:text-6xl lg:text-7.5xl text-balance">
            For Every <br />
            <span className="font-display italic text-[#B89047] font-semibold">Woman</span>
          </h1>
          <div className="my-5 flex items-center justify-center lg:justify-start gap-2.5 text-[#B89047]/70">
            <div className="h-[1px] w-10 bg-current" />
            <span className="text-[10px] transform rotate-45">✦</span>
            <div className="h-[1px] w-10 bg-current" />
          </div>
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground font-semibold">
            Handcrafted Blouses & Kids Fashion Collection
          </p>
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row w-full sm:w-auto">
            <Button
              variant="hero"
              size="lg"
              asChild
              className="rounded-none bg-[#2F1B12] text-white hover:bg-[#432A1F] uppercase tracking-[0.2em] text-[10px] font-bold py-4 px-8 h-auto border-0 cursor-pointer shadow-md"
            >
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button
              variant="luxury"
              size="lg"
              asChild
              className="rounded-none bg-transparent hover:bg-[#2F1B12]/5 text-[#2F1B12] border border-[#2F1B12] uppercase tracking-[0.2em] text-[10px] font-bold py-4 px-8 h-auto cursor-pointer"
            >
              <Link to="/shop">Explore Collection</Link>
            </Button>
          </div>
          {/* Slider Dots */}
          <div className="mt-10 flex items-center gap-2">
            {featuredLooks.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setFeaturedLookIdx(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === featuredLookIdx ? "w-6 bg-[#2F1B12]" : "w-2 bg-[#2F1B12]/20 hover:bg-[#2F1B12]/40"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Signature Look (right) */}
        <div className="relative min-h-[34rem] animate-fade-rise flex items-center justify-center">
          <div className="relative overflow-hidden rounded-[1.6rem] shadow-[var(--shadow-luxury)] aspect-[4/5] w-full max-w-[420px]">
            <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-white/95 font-bold z-20 drop-shadow-md">
              <span>Signature edit</span>
              <span>Vastra Signature</span>
            </div>
            <div className="relative w-full h-full overflow-hidden bg-brand-pearl">
              {featuredLooks.map((look, idx) => (
                <div
                  key={look.url}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === featuredLookIdx ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
                >
                  <img src={look.url} alt={look.title} className="w-full h-full object-cover object-top" fetchPriority={idx === 0 ? "high" : "low"} />
                </div>
              ))}
            </div>
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/40 bg-background/85 p-4 backdrop-blur-xl z-20 shadow-lg">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <div className="min-w-0">
                  <p className="truncate text-[10px] font-bold uppercase tracking-[0.24em] text-[#B89047]">Signature boutique look</p>
                  <p className="mt-1 truncate text-base font-extrabold text-[#2F1B12] transition-all duration-300">
                    {featuredLooks[featuredLookIdx].title}
                  </p>
                </div>
                <Button variant="hero" size="sm" asChild className="rounded-full bg-[#2F1B12] text-white hover:bg-[#432A1F] h-8 text-[10px] px-3 font-bold border-0">
                  <Link to="/product/$id" params={{ id: featuredLooks[featuredLookIdx].id }}>View Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
