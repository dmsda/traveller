"use client";

import React from "react";
import Link from "next/link";
import { Globe, Camera, Compass, CreditCard, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/motion";

const CORE_SHOWCASE_FEATURES = [
  {
    icon: Globe,
    title: "Global Travel Community",
    description:
      "Connect with passionate solo adventurers and local travel companions across a continuous interactive world map.",
    accent: "#FF5B3D",
    badge: "Interactive Map",
    link: "/#community",
  },
  {
    icon: Camera,
    title: "Share Travel Memories",
    description:
      "Chronicle breathtaking trails, scenic viewpoints, and authentic road stories with your circle of travel buddies.",
    accent: "#FF7A45",
    badge: "Story Feed",
    link: "/#experience",
  },
  {
    icon: Compass,
    title: "Discover Popular Travelers",
    description:
      "Explore curated recommendations for destinations like Sajek Valley and find verified buddies matching your travel style.",
    accent: "#FFC94A",
    badge: "Curated Spots",
    link: "/#popular",
  },
  {
    icon: CreditCard,
    title: "Flexible Membership Tiers",
    description:
      "Transparent Standard, Essentials, and Premium pricing with seamless monthly and annual billing toggles.",
    accent: "#251613",
    badge: "Transparent Value",
    link: "/#pricing",
  },
];

export const ShowcaseFeatures: React.FC = () => {
  return (
    <section id="features" className="py-16 sm:py-24 bg-[#FAF8F5] border-y border-[#EDE7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#FF5B3D] mb-3">
            PRODUCT ARCHITECTURE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#251613] tracking-tight">
            Designed Around the Journey.
          </h2>
          <p className="text-sm sm:text-base text-[#544A48] font-medium mt-3 leading-relaxed">
            Every feature is purposefully tailored to reduce friction in planning, finding companions, and sharing unforgettable outdoor experiences.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SHOWCASE_FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={idx * 0.1}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EDE7E2] shadow-sm flex flex-col justify-between hover:border-[#FF5B3D]/40 hover:shadow-card-elevated transition-all"
              >
                <div>
                  {/* Card Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${feat.accent}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: feat.accent }} />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#6E6462] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#EDE7E2]">
                      {feat.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#251613] mb-2.5">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#544A48] font-medium leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Direct Link to Live Section */}
                <div className="pt-6 mt-6 border-t border-[#F2ECE7]">
                  <Link
                    href={feat.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5B3D] hover:text-[#E84D2F] transition-colors"
                  >
                    <span>View on Website</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
