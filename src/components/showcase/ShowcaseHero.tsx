"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, buttonInteraction } from "@/lib/motion";

export const ShowcaseHero: React.FC = () => {
  return (
    <section id="overview" className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#FFF8F2] via-[#FFFBF8] to-white">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#FF5B3D]/10 via-[#FFC94A]/10 to-[#FF7A45]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Badge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EDE7E2] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5B3D]" />
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#FF5B3D]">
              COMMUNITY • TRAVEL • DISCOVERY
            </span>
          </div>
        </motion.div>

        {/* Hero Title & Subheadline */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="text-center max-w-4xl mx-auto space-y-5"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-[#251613] tracking-tight leading-[1.1] text-balance">
            A Better Way to Explore the World Together.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#544A48] max-w-2xl mx-auto font-medium leading-relaxed text-balance">
            Travellers is a travel community experience designed to bring people, journeys, and unforgettable memories closer together.
          </p>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mt-8 sm:mt-10"
        >
          <motion.a
            variants={buttonInteraction}
            whileHover="hover"
            whileTap="tap"
            href="#mockups"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#FF5B3D] text-white font-bold text-sm shadow-md hover:shadow-coral-glow hover:bg-[#E84D2F] transition-all cursor-pointer"
          >
            <span>Explore the Design</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </motion.a>

          <motion.div variants={buttonInteraction} whileHover="hover" whileTap="tap">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-[#251613] font-bold text-sm border border-[#EDE7E2] shadow-2xs hover:border-[#251613] hover:bg-[#FAF8F5] transition-all"
            >
              <span>Visit Travellers</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF5B3D]" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Editorial Pill Highlights */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mt-12 sm:mt-16 pt-8 border-t border-[#EDE7E2]/70 text-center"
        >
          <div className="p-3 bg-white/70 backdrop-blur-xs rounded-xl border border-[#EDE7E2]/60 shadow-2xs">
            <p className="text-xs font-bold text-[#FF5B3D] uppercase tracking-wider">Concept</p>
            <p className="text-sm font-extrabold text-[#251613] mt-0.5">Travel Community</p>
          </div>
          <div className="p-3 bg-white/70 backdrop-blur-xs rounded-xl border border-[#EDE7E2]/60 shadow-2xs">
            <p className="text-xs font-bold text-[#FF5B3D] uppercase tracking-wider">Architecture</p>
            <p className="text-sm font-extrabold text-[#251613] mt-0.5">Multi-Page Next.js</p>
          </div>
          <div className="p-3 bg-white/70 backdrop-blur-xs rounded-xl border border-[#EDE7E2]/60 shadow-2xs">
            <p className="text-xs font-bold text-[#FF5B3D] uppercase tracking-wider">Style</p>
            <p className="text-sm font-extrabold text-[#251613] mt-0.5">Warm Editorial</p>
          </div>
          <div className="p-3 bg-white/70 backdrop-blur-xs rounded-xl border border-[#EDE7E2]/60 shadow-2xs">
            <p className="text-xs font-bold text-[#FF5B3D] uppercase tracking-wider">Responsive</p>
            <p className="text-sm font-extrabold text-[#251613] mt-0.5">Mobile to 1440px+</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
