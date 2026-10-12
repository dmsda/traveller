"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Monitor, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/motion";

const PREVIEW_OPTIONS = [
  {
    id: "homepage",
    label: "Homepage Hero",
    desktopSrc: "/showcase/desktop-preview.png",
    mobileSrc: "/showcase/mobile-preview.png",
    description: "High-contrast editorial hero with smartphone mockup, app store CTA buttons, and warm cream canvas.",
  },
  {
    id: "community",
    label: "Community Map",
    desktopSrc: "/showcase/community-preview.png",
    mobileSrc: "/showcase/mobile-community-preview.png",
    description: "Continuous sinuous route connecting 6 traveler waypoints across stippled world geography.",
  },
  {
    id: "pricing",
    label: "Pricing & Plans",
    desktopSrc: "/showcase/pricing-preview.png",
    mobileSrc: "/showcase/mobile-preview.png",
    description: "Interactive monthly/annual billing toggle with 3 clear membership tiers and transparent values.",
  },
  {
    id: "features",
    label: "Features Platform",
    desktopSrc: "/showcase/features-preview.png",
    mobileSrc: "/showcase/mobile-preview.png",
    description: "Full multi-page platform showcase highlighting destinations, companions, events, and memories.",
  },
];

export const ShowcaseMainMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState("homepage");

  const currentPreview =
    PREVIEW_OPTIONS.find((p) => p.id === activeTab) || PREVIEW_OPTIONS[0];

  return (
    <section id="mockups" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF8F2] border border-[#FF5B3D]/20 text-[11px] font-extrabold uppercase tracking-wider text-[#FF5B3D] mb-3">
            <Monitor className="w-3.5 h-3.5" />
            ACTUAL APPLICATION PREVIEWS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#251613] tracking-tight">
            Crafted for Big Screens & Handheld Devices
          </h2>
          <p className="text-sm sm:text-base text-[#544A48] font-medium mt-3">
            Real viewport renderings captured directly from the live Next.js application.
          </p>

          {/* Interactive Screen Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 p-1.5 bg-[#FAF8F5] rounded-2xl border border-[#EDE7E2] max-w-xl mx-auto">
            {PREVIEW_OPTIONS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-white text-[#FF5B3D] shadow-2xs border border-[#EDE7E2]"
                    : "text-[#6E6462] hover:text-[#251613] hover:bg-white/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Composition: Desktop Browser + Mobile Overlap */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* ================= DESKTOP BROWSER FRAME ================= */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-[#EDE7E2] shadow-2xl p-2.5 sm:p-4 transition-all">
            {/* Browser Window Chrome */}
            <div className="flex items-center justify-between pb-3 sm:pb-3.5 px-2 border-b border-[#EDE7E2]/70">
              {/* Traffic Light Dots */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>

              {/* URL Address Bar */}
              <div className="flex items-center gap-2 px-4 py-1 rounded-xl bg-white border border-[#EDE7E2] text-[11px] sm:text-xs text-[#6E6462] font-mono shadow-2xs max-w-md w-full mx-4">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span className="truncate">https://travellers.app</span>
                <span className="ml-auto text-[10px] text-emerald-700 font-sans font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                  200 OK
                </span>
              </div>

              {/* External Link Action */}
              <Link
                href="/"
                className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-[#FF5B3D] hover:underline"
              >
                <span>Live View</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>

            {/* Desktop Screen Content */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-xl sm:rounded-2xl overflow-hidden mt-3 bg-white border border-[#EDE7E2]/80">
              <Image
                src={currentPreview.desktopSrc}
                alt={`Travellers Desktop Showcase - ${currentPreview.label}`}
                fill
                priority
                className="object-cover object-top transition-opacity duration-300"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>
          </div>

          {/* ================= MOBILE SMARTPHONE OVERLAP (Desktop Overlap, Mobile Stacking) ================= */}
          <div className="relative lg:absolute lg:-right-6 lg:-bottom-12 mt-6 lg:mt-0 max-w-[280px] sm:max-w-[310px] mx-auto z-20">
            {/* Smartphone Badge Caption */}
            <div className="flex items-center justify-center mb-2">
              <span className="px-3 py-1 rounded-full bg-[#251613] text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                DESIGNED FOR EVERY JOURNEY
              </span>
            </div>

            {/* Minimalist Phone Hardware Mockup */}
            <div className="rounded-[44px] bg-[#1C1615] p-2.5 sm:p-3 shadow-2xl border-[3px] border-[#382C29]">
              {/* Dynamic Island Notch */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-20 h-3 bg-[#140F0E] rounded-full z-30" />

              {/* Smartphone Screen Viewport */}
              <div className="relative w-full h-[460px] sm:h-[500px] bg-white rounded-[34px] overflow-hidden border border-[#EDE7E2]">
                <Image
                  src={currentPreview.mobileSrc}
                  alt="Travellers Mobile Experience"
                  fill
                  className="object-cover object-top"
                  sizes="320px"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Caption & Current View Summary */}
        <div className="max-w-2xl mx-auto text-center mt-12 sm:mt-16 lg:mt-20">
          <p className="text-xs sm:text-sm text-[#544A48] font-medium leading-relaxed">
            {currentPreview.description}
          </p>
          <div className="mt-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#FF5B3D] hover:underline"
            >
              <span>Explore full interactive website</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
