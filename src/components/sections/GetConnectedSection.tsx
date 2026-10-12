"use client";

import React from "react";
import Image from "next/image";
import { Scan, Calendar, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { staggerContainer, staggerItem } from "@/lib/motion";

interface GetConnectedSectionProps {
  onQuoteClick?: () => void;
  onFeatureClick?: (feature: string) => void;
}

export const GetConnectedSection: React.FC<GetConnectedSectionProps> = ({
  onQuoteClick,
  onFeatureClick,
}) => {
  const features = [
    {
      id: "sign-up",
      title: "Sign Up",
      description:
        "Make an account and login to keep yourself updated into travellers platform.",
      icon: Scan,
      color: "bg-[#FFF8F2] text-[#FF5B3D]",
    },
    {
      id: "create-events",
      title: "Create Events",
      description:
        "Create an event to gather your fellow travellers and get to know them.",
      icon: Calendar,
      color: "bg-[#FFF4E8] text-[#FF7A45]",
    },
    {
      id: "share-memories",
      title: "Share Memories",
      description:
        "Upload and share stories with your fellow travellers anytime.",
      icon: Sparkles,
      color: "bg-[#FFF9E6] text-[#FFA826]",
    },
  ];

  return (
    <section id="experience" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Traveler Photography + City Sketch + Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex justify-center"
          >
            {/* Background Architectural Sketch */}
            <div className="absolute -top-12 -left-12 w-full max-w-[540px] h-full max-h-[540px] pointer-events-none opacity-60 select-none">
              <Image
                src="/assets/illustrations/city-sketch.svg"
                alt=""
                fill
                className="object-contain object-left"
              />
            </div>

            {/* Main Traveler Photo Container */}
            <div className="relative w-full max-w-[420px] h-[480px] sm:h-[540px] rounded-3xl overflow-hidden shadow-soft border border-[#EDE7E2]">
              <Image
                src="/assets/travelers/traveler-orange-backpack.jpg"
                alt="Traveller with orange backpack capturing memories"
                fill
                className="object-cover object-top hover:scale-102 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Quote Card / Feedback */}
            <motion.div
              id="feedbacks"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={onQuoteClick}
              className="absolute -bottom-8 sm:-bottom-10 right-2 sm:right-0 max-w-[320px] sm:max-w-[360px] bg-white rounded-2xl p-4 sm:p-5 shadow-card-elevated border border-[#EDE7E2] cursor-pointer hover:border-[#FF5B3D]/40 transition-colors z-20 group scroll-mt-28"
            >
              <div className="flex items-start gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#FF7A45] shadow-sm">
                  <Image
                    src="/assets/avatars/luke-james.jpg"
                    alt="Luke James"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs sm:text-[13px] text-[#251613] font-medium leading-relaxed italic">
                    “Every day is a new day, and you’ll never be able to find happiness if you don’t Travel the new places around the world”
                  </p>
                  <p className="text-xs font-bold text-[#FF5B3D] mt-2 group-hover:underline">
                    — Luke James
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Information & 3 Features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="lg:col-span-6 flex flex-col justify-center mt-6 lg:mt-0"
          >
            <motion.div variants={staggerItem}>
              <SectionEyebrow hasAccentBar={false}>GET CONNECTED</SectionEyebrow>
            </motion.div>

            <motion.h2
              variants={staggerItem}
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#251613] tracking-tight leading-[1.15] mt-3 mb-8"
            >
              Share your memories<br />
              with your travel buddys
            </motion.h2>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.id}
                    variants={staggerItem}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onFeatureClick?.(feature.title)}
                    className="flex items-start gap-4 sm:gap-5 p-3 rounded-2xl hover:bg-[#FFF8F2]/60 transition-colors cursor-pointer group"
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center flex-shrink-0 shadow-sm border border-black/5 group-hover:scale-105 transition-transform`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-[#251613] group-hover:text-[#FF5B3D] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[#6E6462] mt-1 leading-relaxed max-w-md">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
