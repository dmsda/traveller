"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Monitor, Smartphone, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/motion";

const BREAKPOINTS = [
  {
    id: "desktop",
    name: "Desktop & Laptop",
    resolution: "1280px — 1440px+",
    icon: Monitor,
    aspect: "aspect-[16/10]",
    image: "/showcase/desktop-preview.png",
    notes: [
      "Generous editorial whitespace & two-column card balances",
      "Interactive world map with sinuous bezier path drawing",
      "5-column comprehensive footer sitemap with live beta metrics",
    ],
  },
  {
    id: "mobile",
    name: "Smartphone (iOS / Android)",
    resolution: "375px — 430px",
    icon: Smartphone,
    aspect: "aspect-[9/16]",
    image: "/showcase/mobile-preview.png",
    notes: [
      "Smooth slide-down mobile navigation drawer with Escape dismissal",
      "Zero horizontal overflow (`clientWidth === scrollWidth`)",
      "Thumb-friendly touch targets exceeding 44px standard",
    ],
  },
];

export const ShowcaseResponsive: React.FC = () => {
  const [activeBp, setActiveBp] = useState("desktop");

  const current = BREAKPOINTS.find((b) => b.id === activeBp) || BREAKPOINTS[0];

  return (
    <section id="responsive" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#FF5B3D] mb-3">
            RESPONSIVE ENGINEERING
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#251613] tracking-tight">
            One Experience. Every Screen.
          </h2>
          <p className="text-sm sm:text-base text-[#544A48] font-medium mt-3 leading-relaxed">
            Every component is rigorously audited from ultra-compact viewports to high-density desktop displays for flawless typographic scale and hierarchy.
          </p>

          {/* Viewport Selector */}
          <div className="inline-flex p-1.5 bg-[#FAF8F5] rounded-2xl border border-[#EDE7E2] mt-6 gap-2">
            {BREAKPOINTS.map((bp) => {
              const Icon = bp.icon;
              return (
                <button
                  key={bp.id}
                  type="button"
                  onClick={() => setActiveBp(bp.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeBp === bp.id
                      ? "bg-white text-[#FF5B3D] shadow-xs border border-[#EDE7E2]"
                      : "text-[#6E6462] hover:text-[#251613]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{bp.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Responsive Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Visual Display Frame */}
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`lg:col-span-8 ${
              activeBp === "mobile" ? "max-w-sm mx-auto" : "w-full"
            }`}
          >
            <div className="bg-[#FAF8F5] rounded-3xl p-3 sm:p-4 border border-[#EDE7E2] shadow-xl">
              <div className="flex items-center justify-between pb-3 px-2 border-b border-[#EDE7E2]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-[11px] font-mono text-[#6E6462]">
                  {current.resolution}
                </span>
              </div>
              <div
                className={`relative w-full ${current.aspect} rounded-2xl overflow-hidden mt-3 bg-white border border-[#EDE7E2]`}
              >
                <Image
                  src={current.image}
                  alt={`Travellers Responsive - ${current.name}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
            </div>
          </motion.div>

          {/* Key Engineering Details Panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#FFF8F2] rounded-3xl p-6 sm:p-7 border border-[#FF5B3D]/20">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FF5B3D] bg-white px-2.5 py-1 rounded-full border border-[#FF5B3D]/30 inline-block mb-3">
                {current.name}
              </span>
              <h3 className="text-xl font-extrabold text-[#251613]">
                Adaptation Highlights
              </h3>
              <p className="text-xs text-[#544A48] font-medium mt-1 mb-5">
                Target resolution: {current.resolution}
              </p>

              <ul className="space-y-3.5">
                {current.notes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#251613] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5B3D] flex-shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accessibility & Fluid Typescale Note */}
            <div className="bg-[#FAF8F5] rounded-3xl p-5 border border-[#EDE7E2] text-xs text-[#544A48] space-y-2">
              <p className="font-bold text-[#251613]">Fluid Typography Clamp</p>
              <p>
                Headlines dynamically scale using CSS clamp functions (`clamp(2.5rem, 5vw, 4.25rem)`), maintaining tight visual rhythm without awkward mid-breakpoint line wraps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
