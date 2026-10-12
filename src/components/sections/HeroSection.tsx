"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { StoreButton } from "@/components/ui/StoreButton";
import { PhoneMockupHero } from "@/components/ui/PhoneMockupHero";
import { fadeInUp } from "@/lib/motion";

interface HeroSectionProps {
  onStoreClick: (storeName: string) => void;
  onDestinationClick: (destName: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStoreClick,
  onDestinationClick,
}) => {
  return (
    <section className="relative px-3 sm:px-6 lg:px-8 pt-4 pb-12 sm:pb-16 max-w-[1360px] mx-auto">
      {/* Warm Cream Rounded Card Container */}
      <div className="relative bg-[#FFF8F2] rounded-[36px] sm:rounded-[44px] lg:rounded-[52px] px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 border border-[#F5EDE6]">
        {/* Subtle background ambient warm gradient (isolated overflow-hidden so pill is not clipped) */}
        <div
          className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FFE7D6] rounded-full blur-3xl opacity-60" />
          <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#FFF2DE] rounded-full blur-3xl opacity-60" />
        </div>

        {/* Two-Column Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <motion.h1
              custom={0.05}
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-[62px] xl:text-[68px] font-extrabold text-[#251613] tracking-[-0.03em] leading-[1.08] max-w-xl"
            >
              Don’t listen to<br />
              what they say,<br />
              <span className="text-[#251613]">Go see</span>
            </motion.h1>

            {/* Coral / Yellow Accent Bar */}
            <motion.div
              custom={0.15}
              variants={fadeInUp}
              className="w-12 h-1 bg-[#FFC94A] rounded-full mt-5 mb-6"
              aria-hidden="true"
            />

            {/* Subheadline */}
            <motion.p
              custom={0.2}
              variants={fadeInUp}
              className="text-base sm:text-lg text-[#544A48] font-medium leading-relaxed max-w-md mb-8 sm:mb-10"
            >
              Your ultimate travel companion. Carries all the information you need while travelling.
            </motion.p>

            {/* App Store Download Badges */}
            <motion.div
              custom={0.3}
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <StoreButton
                store="apple"
                variant="light"
                onClick={() => onStoreClick("Apple App Store")}
              />
              <StoreButton
                store="google"
                variant="light"
                onClick={() => onStoreClick("Google Play Store")}
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Smartphone Mockup & Floating Elements */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <PhoneMockupHero onCardClick={onDestinationClick} />
          </motion.div>
        </div>

        {/* Center Bottom Scroll Indicator Pill (Fully visible & unclipped) */}
        <div className="absolute -bottom-6 sm:-bottom-7 left-1/2 -translate-x-1/2 z-30">
          <Link
            href="/#community"
            className="group w-10 h-14 rounded-full bg-white shadow-card-elevated border border-[#EDE7E2] flex items-center justify-center text-[#6E6462] hover:text-[#FF5B3D] hover:border-[#FF5B3D]/40 transition-all hover:scale-105 active:scale-95"
            aria-label="Scroll to Community section"
          >
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4 text-[#251613] group-hover:text-[#FF5B3D] transition-colors" />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};
