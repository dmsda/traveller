"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TravelerProfile } from "@/data/travelData";
import { fadeInUp, pathDraw, mapFadeIn } from "@/lib/motion";

interface CommunitySectionProps {
  onSelectTraveler: (traveler: TravelerProfile) => void;
  onSelectDestination: (destName: string) => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({
  onSelectTraveler,
  onSelectDestination,
}) => {
  const travelers: TravelerProfile[] = [
    {
      id: "smith",
      name: "Smith",
      country: "England",
      avatar: "/assets/avatars/smith-england.jpg",
      bio: "Solo trekker exploring historical trails and mountain passes.",
      location: "England • UK",
    },
    {
      id: "jessica",
      name: "Jessica",
      country: "Egypt",
      avatar: "/assets/avatars/jessica-egypt.jpg",
      bio: "Cultural nomad and documentary photographer.",
      location: "Cairo • Egypt",
    },
    {
      id: "julie",
      name: "Julie",
      country: "Poland",
      avatar: "/assets/avatars/julie-poland.jpg",
      bio: "Hiking enthusiast and coffee lover seeking sunrise summits.",
      location: "Krakow • Poland",
    },
    {
      id: "farzan",
      name: "Farzan",
      country: "Georgia",
      avatar: "/assets/avatars/farzan-georgia.jpg",
      bio: "Caucasus mountain guide and winter backpacking specialist.",
      location: "Tbilisi • Georgia",
    },
    {
      id: "sajon",
      name: "Sajon",
      country: "Finland",
      avatar: "/assets/avatars/sajon-finland.jpg",
      bio: "Wilderness camper, Northern lights hunter, and road trip storyteller.",
      location: "Helsinki • Finland",
    },
  ];

  return (
    <section id="community" className="relative py-10 sm:py-14 lg:py-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-10"
        >
          <SectionEyebrow align="center">BUILD UP A COMMUNITY</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#251613] tracking-tight mt-3">
            Join the biggest community of Travellers
          </h2>
          <div
            className="w-10 h-1 bg-[#FF5B3D] rounded-full mx-auto mt-3.5"
            aria-hidden="true"
          />
        </motion.div>

        {/* Community Map Canvas (Refined harmonious height) */}
        <div className="relative min-h-[440px] sm:min-h-[480px] lg:min-h-[500px] flex items-center justify-center">
          {/* Background Dotted World Map with Fade-in Animation */}
          <motion.div
            variants={mapFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
          >
            <Image
              src="/assets/illustrations/world-map-dots.svg"
              alt=""
              width={1050}
              height={500}
              className="w-full max-w-5xl h-auto object-contain opacity-80"
            />
          </motion.div>

          {/* ================= Organic Blobs (Balanced & Properly Layered at z-10) ================= */}
          {/* 1. Large Center Coral Blob (Behind Sajek Hill Spot) */}
          <div
            className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 sm:w-60 h-52 sm:h-60 bg-[#FF5B3D] rounded-[40px] sm:rounded-[48px] rotate-6 z-10 shadow-lg pointer-events-none opacity-90 animate-pulse-center-blob"
            aria-hidden="true"
          />

          {/* 2. Left Warm Yellow/Amber Blob */}
          <div
            className="absolute top-[22%] left-[10%] sm:left-[12%] w-18 sm:w-22 h-18 sm:h-22 bg-[#FFA826] rounded-[22px] sm:rounded-[28px] -rotate-12 z-10 shadow-md pointer-events-none opacity-85"
            aria-hidden="true"
          />

          {/* 3. Right Warm Yellow/Amber Blob */}
          <div
            className="absolute top-[42%] right-[6%] sm:right-[8%] w-18 sm:w-22 h-18 sm:h-22 bg-[#FFA826] rounded-[22px] sm:rounded-[28px] rotate-45 z-10 shadow-md pointer-events-none opacity-85"
            aria-hidden="true"
          />

          {/* ================= Continuous Sinuous Route Line Connecting All Waypoints ================= */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-15 hidden md:block"
            viewBox="0 0 1000 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.path
              variants={pathDraw}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              d="M 60 140 C 120 120, 150 110, 190 110 C 240 110, 250 250, 290 290 C 340 340, 430 215, 500 205 C 570 195, 605 260, 645 305 C 695 350, 730 150, 770 120 C 810 90, 850 185, 890 235 C 925 280, 955 250, 980 230"
              stroke="#FF7A45"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />
            {/* Waypoint Connection Dots & Subtle Glow Rings */}
            {[
              { cx: 190, cy: 110, delay: 0.35 },
              { cx: 290, cy: 290, delay: 0.55 },
              { cx: 500, cy: 205, delay: 0.85 },
              { cx: 645, cy: 305, delay: 1.05 },
              { cx: 770, cy: 120, delay: 1.25 },
              { cx: 890, cy: 235, delay: 1.45 },
            ].map((dot, idx) => (
              <g key={idx}>
                <motion.circle
                  cx={dot.cx}
                  cy={dot.cy}
                  r="7.5"
                  fill="#FF5B3D"
                  opacity="0.25"
                  animate={{ scale: [1, 1.35, 1], opacity: [0.3, 0.1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2.4, delay: dot.delay }}
                />
                <motion.circle
                  cx={dot.cx}
                  cy={dot.cy}
                  r="4.5"
                  fill="#FF5B3D"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.3, delay: dot.delay }}
                />
              </g>
            ))}
          </svg>

          {/* ================= Desktop Composition (Harmonious Whitespace & Staggered Reveal) ================= */}
          <div className="w-full relative hidden md:block h-[440px] lg:h-[480px] z-20">
            {/* 1. Smith (England) - Upper Left (delay 0.3s) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectTraveler(travelers[0])}
              className="absolute top-[18%] left-[12%] sm:left-[14%] bg-white rounded-2xl p-2.5 shadow-card-elevated border border-[#EDE7E2] flex items-center gap-2.5 cursor-pointer hover:border-[#FF5B3D]/50 hover:shadow-xl transition-all z-30"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#EDE7E2] flex-shrink-0">
                <Image
                  src={travelers[0].avatar}
                  alt={travelers[0].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pr-1">
                <p className="text-xs sm:text-[13px] font-bold text-[#251613]">
                  {travelers[0].name}
                </p>
                <p className="text-[11px] text-[#544A48] font-medium">
                  {travelers[0].country}
                </p>
              </div>
            </motion.div>

            {/* 2. Julie (Poland) - Lower Left (delay 0.4s: +100ms stagger) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectTraveler(travelers[2])}
              className="absolute top-[56%] left-[20%] sm:left-[24%] bg-white rounded-2xl p-2.5 shadow-card-elevated border border-[#EDE7E2] flex items-center gap-2.5 cursor-pointer hover:border-[#FF5B3D]/50 hover:shadow-xl transition-all z-30"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#FFC94A] flex-shrink-0">
                <Image
                  src={travelers[2].avatar}
                  alt={travelers[2].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pr-1">
                <p className="text-xs sm:text-[13px] font-bold text-[#251613]">
                  {travelers[2].name}
                </p>
                <p className="text-[11px] text-[#544A48] font-medium">
                  {travelers[2].country}
                </p>
              </div>
            </motion.div>

            {/* 3. CENTER HIGHLIGHT: Sajek Hill Spot Destination Card (delay 0.5s: +100ms stagger) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectDestination("Sajek Hill Spot")}
              className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-54 sm:w-58 bg-white rounded-2xl p-3 shadow-2xl border border-white/80 cursor-pointer z-40 group hover:shadow-coral-glow/30 transition-all"
            >
              <div className="relative h-28 sm:h-30 w-full rounded-xl overflow-hidden mb-2">
                <Image
                  src="/assets/destinations/sajek-hill-sunset.jpg"
                  alt="Sajek Hill Spot"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-sm font-bold text-[#251613] text-center">
                Sajek Hill Spot
              </h4>
              <div className="flex items-center justify-center gap-1.5 mt-1.5">
                <div className="flex -space-x-1.5">
                  <div className="relative w-5 h-5 rounded-full overflow-hidden border border-white">
                    <Image
                      src={travelers[0].avatar}
                      alt="Traveler"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-5 h-5 rounded-full overflow-hidden border border-white">
                    <Image
                      src={travelers[1].avatar}
                      alt="Traveler"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-5 h-5 rounded-full bg-[#251613] text-white text-[9px] font-bold flex items-center justify-center border border-white">
                    +
                  </div>
                </div>
                <span className="text-[11px] text-[#544A48] font-semibold ml-1">
                  42 travellers
                </span>
              </div>
            </motion.div>

            {/* 4. Farzan (Georgia) - Lower Mid-Right (delay 0.6s: +100ms stagger) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectTraveler(travelers[3])}
              className="absolute top-[58%] left-[58%] sm:left-[60%] bg-white rounded-2xl p-2.5 shadow-card-elevated border border-[#EDE7E2] flex items-center gap-2.5 cursor-pointer hover:border-[#FF5B3D]/50 hover:shadow-xl transition-all z-30"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#EDE7E2] flex-shrink-0">
                <Image
                  src={travelers[3].avatar}
                  alt={travelers[3].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pr-1">
                <p className="text-xs sm:text-[13px] font-bold text-[#251613]">
                  {travelers[3].name}
                </p>
                <p className="text-[11px] text-[#544A48] font-medium">
                  {travelers[3].country}
                </p>
              </div>
            </motion.div>

            {/* 5. Jessica (Egypt) - Mid-Right (delay 0.7s: +100ms stagger) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectTraveler(travelers[1])}
              className="absolute top-[20%] right-[18%] sm:right-[20%] bg-white rounded-2xl p-2.5 shadow-card-elevated border border-[#EDE7E2] flex items-center gap-2.5 cursor-pointer hover:border-[#FF5B3D]/50 hover:shadow-xl transition-all z-30"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#FFC94A] flex-shrink-0">
                <Image
                  src={travelers[1].avatar}
                  alt={travelers[1].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pr-1">
                <p className="text-xs sm:text-[13px] font-bold text-[#251613]">
                  {travelers[1].name}
                </p>
                <p className="text-[11px] text-[#544A48] font-medium">
                  {travelers[1].country}
                </p>
              </div>
            </motion.div>

            {/* 6. Sajon (Finland) - Far Right (delay 0.8s: +100ms stagger) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectTraveler(travelers[4])}
              className="absolute top-[44%] right-[6%] sm:right-[8%] bg-white rounded-2xl p-2.5 shadow-card-elevated border border-[#EDE7E2] flex items-center gap-2.5 cursor-pointer hover:border-[#FF5B3D]/50 hover:shadow-xl transition-all z-30"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#EDE7E2] flex-shrink-0">
                <Image
                  src={travelers[4].avatar}
                  alt={travelers[4].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pr-1">
                <p className="text-xs sm:text-[13px] font-bold text-[#251613]">
                  {travelers[4].name}
                </p>
                <p className="text-[11px] text-[#544A48] font-medium">
                  {travelers[4].country}
                </p>
              </div>
            </motion.div>
          </div>

          {/* ================= Mobile Clean Card Grid (at z-20) ================= */}
          <div className="md:hidden grid grid-cols-2 gap-3 w-full max-w-md relative z-20 px-2">
            {/* Featured destination first */}
            <div
              onClick={() => onSelectDestination("Sajek Hill Spot")}
              className="col-span-2 bg-white rounded-2xl p-3 shadow-card-elevated border border-[#EDE7E2] flex items-center gap-3 cursor-pointer"
            >
              <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="/assets/destinations/sajek-hill-sunset.jpg"
                  alt="Sajek Hill Spot"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[9px] bg-[#FFF8F2] text-[#FF5B3D] px-1.5 py-0.5 rounded font-bold">
                  Featured Spot
                </span>
                <h4 className="text-sm font-bold text-[#251613] mt-1">
                  Sajek Hill Spot
                </h4>
                <p className="text-[11px] text-[#6E6462]">42 travellers joined</p>
              </div>
            </div>

            {/* Traveler Cards */}
            {travelers.map((traveler) => (
              <div
                key={traveler.id}
                onClick={() => onSelectTraveler(traveler)}
                className="bg-white rounded-2xl p-3 shadow-sm border border-[#EDE7E2] flex items-center gap-2.5 cursor-pointer active:scale-95 transition-transform"
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#EDE7E2] flex-shrink-0">
                  <Image
                    src={traveler.avatar}
                    alt={traveler.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#251613] truncate">
                    {traveler.name}
                  </p>
                  <p className="text-[10px] text-[#6E6462] truncate">
                    {traveler.country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
