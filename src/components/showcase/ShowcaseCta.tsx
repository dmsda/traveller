"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, buttonInteraction } from "@/lib/motion";
import { GITHUB_REPO_URL } from "./ShowcaseNavbar";
import { GithubIcon } from "./GithubIcon";

export const ShowcaseCta: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FFF8F2] relative overflow-hidden border-t border-[#EDE7E2]">
      {/* Decorative Warm Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#FF5B3D]/15 via-[#FFC94A]/15 to-[#FF7A45]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#FF5B3D]/30 text-[11px] font-extrabold uppercase tracking-widest text-[#FF5B3D] shadow-2xs">
            <Heart className="w-3.5 h-3.5 fill-[#FF5B3D]" />
            OPEN-SOURCE DIGITAL PRODUCT
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#251613] tracking-tight leading-tight">
            Built for the Love of Exploring.
          </h2>

          <p className="text-base sm:text-lg text-[#544A48] max-w-xl mx-auto font-medium leading-relaxed">
            Explore the project, discover the design, and make it your own.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <motion.div variants={buttonInteraction} whileHover="hover" whileTap="tap">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-[#FF5B3D] text-white font-bold text-sm shadow-md hover:bg-[#E84D2F] hover:shadow-coral-glow transition-all"
              >
                <span>Visit Website</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div variants={buttonInteraction} whileHover="hover" whileTap="tap">
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white text-[#251613] font-bold text-sm border border-[#EDE7E2] shadow-2xs hover:border-[#251613] hover:bg-[#FAF8F5] transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
