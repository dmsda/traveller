"use client";

import React, { useState } from "react";
import { Copy, Check, Palette, Type, Component } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/motion";

const DESIGN_COLORS = [
  { name: "Primary Coral", hex: "#FF5B3D", rgb: "255, 91, 61", role: "Primary CTA, Active Markers, Brand Accent" },
  { name: "Secondary Sunset", hex: "#FF7A45", rgb: "255, 122, 69", role: "Gradients, Route Line, Secondary Glows" },
  { name: "Sunshine Amber", hex: "#FFC94A", rgb: "255, 201, 74", role: "Organic Blobs, Highlight Tags, Avatar Borders" },
  { name: "Warm Cream Canvas", hex: "#FFF8F2", rgb: "255, 248, 242", role: "Hero Canvas, Pricing Container Background" },
  { name: "Subtle Surface", hex: "#FAF8F5", rgb: "250, 248, 245", role: "Search Input Pill, Legal Cards, Base Shell" },
  { name: "Espresso Dark", hex: "#251613", rgb: "37, 22, 19", role: "Primary Headings, Wordmark Logo, High Contrast" },
  { name: "Warm Charcoal", hex: "#4A403E", rgb: "74, 64, 62", role: "Body Copy, Section Descriptions, Footer Headings" },
  { name: "Border Subtle", hex: "#EDE7E2", rgb: "237, 231, 226", role: "Hairline Dividers, Card Outlines, Frame Rings" },
];

export const ShowcaseDesignSystem: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section id="design-system" className="py-16 sm:py-24 bg-[#FAF8F5] border-y border-[#EDE7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EDE7E2] text-[11px] font-extrabold uppercase tracking-wider text-[#FF5B3D] mb-3">
            <Palette className="w-3.5 h-3.5" />
            DESIGN TOKENS & SYSTEM
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#251613] tracking-tight">
            Design System Snapshot
          </h2>
          <p className="text-sm sm:text-base text-[#544A48] font-medium mt-3">
            Derived directly from editorial travel magazines, balancing warm earth tones with high-energy coral orange.
          </p>
        </motion.div>

        {/* 1. Color Palette Tokens */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Palette className="w-5 h-5 text-[#FF5B3D]" />
            <h3 className="text-xl font-extrabold text-[#251613]">Core Color Palette</h3>
            <span className="text-xs text-[#6E6462] font-medium ml-auto">Click any tile to copy hex</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {DESIGN_COLORS.map((c) => (
              <div
                key={c.name}
                onClick={() => handleCopy(c.hex)}
                className="bg-white rounded-2xl p-3 border border-[#EDE7E2] shadow-2xs hover:shadow-md hover:border-[#FF5B3D]/50 transition-all cursor-pointer group"
              >
                {/* Color Swatch */}
                <div
                  className="w-full h-20 rounded-xl mb-3 border border-[#251613]/5 relative flex items-center justify-center"
                  style={{ backgroundColor: c.hex }}
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-[11px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
                    {copiedHex === c.hex ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Copy Hex
                      </>
                    )}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-[#251613] truncate">{c.name}</p>
                    <code className="text-[11px] font-mono font-bold text-[#FF5B3D]">{c.hex}</code>
                  </div>
                  <p className="text-[11px] text-[#6E6462] line-clamp-1">{c.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Typography & UI Components Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Typography Scale */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EDE7E2] shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Type className="w-5 h-5 text-[#FF5B3D]" />
              <h3 className="text-xl font-extrabold text-[#251613]">Typography System</h3>
              <span className="text-xs font-mono text-[#FF5B3D] bg-[#FFF8F2] px-2 py-0.5 rounded-md border border-[#FF5B3D]/20 ml-auto">
                Plus Jakarta Sans
              </span>
            </div>

            <div className="space-y-6">
              <div className="pb-4 border-b border-[#F2ECE7]">
                <p className="text-[11px] font-bold text-[#6E6462] uppercase tracking-wider mb-1">
                  Display Hero Headline (Weight 800)
                </p>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#251613] tracking-tight leading-tight">
                  Don&apos;t listen to what they say, Go see.
                </p>
              </div>

              <div className="pb-4 border-b border-[#F2ECE7]">
                <p className="text-[11px] font-bold text-[#6E6462] uppercase tracking-wider mb-1">
                  Section Header (Weight 800)
                </p>
                <p className="text-xl sm:text-2xl font-extrabold text-[#251613] tracking-tight">
                  Join the biggest community of Travellers
                </p>
              </div>

              <div className="pb-4 border-b border-[#F2ECE7]">
                <p className="text-[11px] font-bold text-[#6E6462] uppercase tracking-wider mb-1">
                  Editorial Body Copy (Weight 500)
                </p>
                <p className="text-sm text-[#4A403E] leading-relaxed">
                  Your ultimate travel companion. Carries all the information you need while travelling across unfamiliar borders.
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold text-[#6E6462] uppercase tracking-wider mb-1">
                  Category Eyebrow (Weight 800 • Tracking Wide)
                </p>
                <p className="text-xs font-extrabold uppercase tracking-widest text-[#FF5B3D]">
                  BUILD UP A COMMUNITY
                </p>
              </div>
            </div>
          </div>

          {/* Core UI Elements Library */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EDE7E2] shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Component className="w-5 h-5 text-[#FF5B3D]" />
              <h3 className="text-xl font-extrabold text-[#251613]">Interactive UI Tokens</h3>
            </div>

            <div className="space-y-6">
              {/* Buttons */}
              <div className="space-y-2">
                <p className="text-[11px] font-bold text-[#6E6462] uppercase tracking-wider">
                  Button Variants
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    className="px-5 py-2.5 rounded-xl bg-[#FF5B3D] text-white text-xs font-bold shadow-sm hover:shadow-coral-glow transition-all"
                  >
                    Primary Button
                  </button>
                  <button
                    type="button"
                    className="px-5 py-2.5 rounded-xl bg-[#FAF8F5] text-[#251613] text-xs font-bold border border-[#EDE7E2] hover:bg-white transition-all shadow-2xs"
                  >
                    Secondary Button
                  </button>
                  <button
                    type="button"
                    className="px-5 py-2.5 rounded-xl bg-white text-[#FF5B3D] text-xs font-bold border border-[#FF5B3D]/30 hover:bg-[#FFF8F2] transition-all"
                  >
                    Outline Accent
                  </button>
                </div>
              </div>

              {/* Status Badges */}
              <div className="space-y-2">
                <p className="text-[11px] font-bold text-[#6E6462] uppercase tracking-wider">
                  Verified Status Indicators
                </p>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Community Beta v3.2
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F5EFE9] text-[#6E6462] text-[10px] font-bold">
                    Planned
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F5EFE9] text-[#6E6462] text-[10px] font-bold">
                    Roadmap
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FFF8F2] border border-[#FF5B3D]/30 text-[#FF5B3D] text-[10px] font-bold">
                    Save 20%
                  </span>
                </div>
              </div>

              {/* Elevated Pill / Card Sample */}
              <div className="space-y-2">
                <p className="text-[11px] font-bold text-[#6E6462] uppercase tracking-wider">
                  Shadow Elevations & Radius
                </p>
                <div className="p-4 rounded-2xl bg-[#FFF8F2] border border-[#EDE7E2] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF5B3D] flex items-center justify-center text-white font-extrabold text-sm shadow-coral-glow">
                      T
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#251613]">Sajek Valley Spot</p>
                      <p className="text-[11px] text-[#6E6462]">Elevation Low • 24px Radius</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#FF5B3D]">4.9 ★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
