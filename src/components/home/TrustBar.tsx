import React from "react";
import { motion } from "framer-motion";
import { Crown, Scissors, Heart, ShieldCheck, Truck } from "lucide-react";

// Trust items data
const trustItems = [
  {
    title: "Premium Quality",
    description: "Finest fabrics & perfect stitching",
    icon: <Crown className="h-7 w-7 text-[#B89047]" />, // 0
  },
  {
    title: "Custom Stitching",
    description: "Made just for you",
    icon: <Scissors className="h-7 w-7 text-[#B89047]" />, // 1
  },
  {
    title: "Handmade Designs",
    description: "Unique designs crafted with love",
    icon: <Heart className="h-7 w-7 text-[#B89047]" />, // 2
  },
  {
    title: "Secure Payments",
    description: "100% safe & trusted",
    icon: <ShieldCheck className="h-7 w-7 text-[#B89047]" />, // 3
  },
  {
    title: "Fast Delivery",
    description: "Quick delivery at your doorstep",
    icon: <Truck className="h-7 w-7 text-[#B89047]" />, // 4
  },
];

// Animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function TrustBar() {
  return (
    <section aria-label="Trust bar" className="bg-white py-12">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="rounded-[24px] shadow-[0_4px_12px_rgba(0,0,0,0.07)] bg-white overflow-hidden">
          <div className="flex flex-nowrap md:grid md:grid-cols-5 gap-4 p-6 md:p-8">
            {trustItems.map((item, idx) => (
              <motion.div
                key={item.title}
                custom={idx}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="group flex flex-col items-center text-center p-4 hover:-translate-y-1.5 transition-transform duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F8F2EB] mb-3 transition-transform duration-300 group-hover:scale-108">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#2F1B12] font-display mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground max-w-xs">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
