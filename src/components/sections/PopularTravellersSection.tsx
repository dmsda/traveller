"use client";

import React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { motion } from "motion/react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { PhoneMockupPopular } from "@/components/ui/PhoneMockupPopular";
import { TravelerProfile } from "@/data/travelData";
import { staggerContainer, staggerItem } from "@/lib/motion";

interface PopularTravellersSectionProps {
  onSelectTraveler: (traveler: TravelerProfile) => void;
  onAddBuddyClick: () => void;
}

export const PopularTravellersSection: React.FC<PopularTravellersSectionProps> = ({
  onSelectTraveler,
  onAddBuddyClick,
}) => {
  const avatarList = [
    { name: "Smith", avatar: "/assets/avatars/smith-england.jpg" },
    { name: "Jessica", avatar: "/assets/avatars/jessica-egypt.jpg" },
    { name: "Farzan", avatar: "/assets/avatars/farzan-georgia.jpg" },
    { name: "Julie", avatar: "/assets/avatars/julie-poland.jpg" },
  ];

  return (
    <section id="popular" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Description, Buddy Avatar Row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            <motion.div variants={staggerItem}>
              <SectionEyebrow hasAccentBar={false}>POPULAR TRAVELLERS</SectionEyebrow>
            </motion.div>

            <motion.h2
              variants={staggerItem}
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#251613] tracking-tight leading-[1.15] mt-3"
            >
              Know the people you’re<br />
              going to meet
            </motion.h2>

            {/* Coral Accent Line */}
            <motion.div
              variants={staggerItem}
              className="w-12 h-1 bg-[#FF5B3D] rounded-full mt-4 mb-6"
              aria-hidden="true"
            />

            <motion.p
              variants={staggerItem}
              className="text-base sm:text-lg text-[#6E6462] leading-relaxed max-w-lg mb-8"
            >
              Have a quick conversation anytime you need with your fellow travellers you’re going to travel with.
            </motion.p>

            {/* Travel Buddy Avatars Row + Add Button inside pill container */}
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 p-1.5 bg-[#FFF8F2] border border-[#EDE7E2] rounded-full shadow-sm mb-6 max-w-fit"
            >
              <div className="flex -space-x-2 items-center">
                {avatarList.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                    transition={{ duration: 0.15 }}
                    className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm cursor-pointer"
                    title={item.name}
                  >
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Add Buddy Button */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                onClick={onAddBuddyClick}
                className="w-9 h-9 rounded-full bg-white border border-[#FF5B3D]/30 text-[#FF5B3D] flex items-center justify-center hover:bg-[#FF5B3D] hover:text-white transition-colors shadow-sm cursor-pointer"
                aria-label="Add a new travel buddy"
              >
                <Plus className="w-4 h-4" />
              </motion.button>
            </motion.div>

            <motion.p
              variants={staggerItem}
              className="text-xs sm:text-sm font-medium text-[#6E6462] max-w-sm"
            >
              With one simple click you can know who you can have as your travel buddy.
            </motion.p>
          </motion.div>

          {/* Right Column: Phone Mockup Popular with Coral Backdrop */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <PhoneMockupPopular onSelectTraveler={onSelectTraveler} />
          </motion.div>
        </div>
      </div>

      {/* Large faint background watermark "Travelers" */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="watermark-text opacity-40">Travelers</span>
      </div>
    </section>
  );
};
