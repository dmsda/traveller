"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { StoreButton } from "@/components/ui/StoreButton";
import { fadeInUp } from "@/lib/motion";

interface DownloadCTASectionProps {
  onStoreClick: (storeName: string) => void;
}

export const DownloadCTASection: React.FC<DownloadCTASectionProps> = ({
  onStoreClick,
}) => {
  return (
    <section id="download" className="relative py-12 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-[1360px] mx-auto">
      {/* Coral Orange Rounded Banner */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-[#FF5B3D] via-[#FF694B] to-[#FF7A45] rounded-[32px] sm:rounded-[40px] px-6 sm:px-12 lg:px-16 py-14 sm:py-18 text-center text-white overflow-hidden shadow-coral-glow"
      >
        {/* Subtle Decorative Curves */}
        <div
          className="absolute -top-24 -left-24 w-80 h-80 rounded-full border border-white/15 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border border-white/15 pointer-events-none"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-tight text-white mb-3">
            Download the travellers community app now !
          </h2>

          <p className="text-sm sm:text-base text-white/95 font-medium mb-8 max-w-lg">
            Be the first one to explore one of the best travel application
          </p>

          {/* Store Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <StoreButton
              store="apple"
              variant="white"
              onClick={() => onStoreClick("Apple App Store")}
            />
            <StoreButton
              store="google"
              variant="white"
              onClick={() => onStoreClick("Google Play Store")}
            />
          </div>
        </div>

        {/* Decorative Speckles on bottom right corner */}
        <div className="absolute bottom-4 right-6 w-16 h-16 opacity-30 pointer-events-none hidden sm:block">
          <Image
            src="/assets/illustrations/speckles.svg"
            alt=""
            width={64}
            height={64}
          />
        </div>
      </motion.div>
    </section>
  );
};
