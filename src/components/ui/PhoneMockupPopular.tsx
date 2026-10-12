"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ArrowRight, MessageCircle, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { TravelerProfile } from "@/data/travelData";
import { phoneFloat, cardFloatOffset } from "@/lib/motion";

interface PhoneMockupPopularProps {
  onSelectTraveler?: (traveler: TravelerProfile) => void;
}

export const PhoneMockupPopular: React.FC<PhoneMockupPopularProps> = ({
  onSelectTraveler,
}) => {
  const alex: TravelerProfile = {
    id: "alex-viojwan",
    name: "Alex Viojwan",
    country: "England",
    location: "Sajek Zero Point",
    avatar: "/assets/avatars/alex-viojwan.jpg",
    bio: "The original solo female travel blogger who documents her blog Adventurous Alex with stories from 40+ countries.",
    recentPost: "Sunrise above the clouds in Sajek Valley.",
    recentImages: ["/assets/destinations/sajek-hill-sunset.jpg"],
    tripsCount: 42,
    followers: "15.8k",
  };

  const sandy: TravelerProfile = {
    id: "sandy-kart",
    name: "Sandy Kart",
    country: "Canada",
    location: "Sajek Hill Spot",
    avatar: "/assets/avatars/sandy-kart.jpg",
    bio: "travel blogger who documents her globetrotting via blog Adventurous Kate.",
    recentPost: "Chasing turquoise lakes and alpine ridges.",
    recentImages: [
      "/assets/destinations/lake-valley-green.jpg",
      "/assets/destinations/sajek-hill-sunset.jpg",
    ],
    tripsCount: 38,
    followers: "19.3k",
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] select-none py-6">
      {/* ================= Background Organic Coral Blob ================= */}
      <div
        className="absolute -inset-8 sm:-inset-14 bg-[#FF5B3D] rounded-[65px] sm:rounded-[85px] rotate-3 z-0 shadow-xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative speckles on top left of blob */}
      <div className="absolute -top-12 -left-8 w-24 h-24 opacity-70 pointer-events-none hidden sm:block z-10">
        <Image
          src="/assets/illustrations/speckles.svg"
          alt=""
          width={96}
          height={96}
        />
      </div>

      {/* ================= Outer Phone Hardware Shell with Floating Motion ================= */}
      <motion.div
        variants={phoneFloat}
        animate="animate"
        className="relative rounded-[44px] bg-[#1C1615] p-2.5 sm:p-3 shadow-mockup border-[3px] border-[#382C29] z-10 will-change-transform"
      >
        {/* Dynamic Island Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-3.5 bg-[#140F0E] rounded-full z-30" />

        {/* Screen Frame */}
        <div className="relative w-full h-[540px] bg-[#FAF8F5] rounded-[36px] overflow-hidden flex flex-col font-sans p-4">
          {/* Top Header */}
          <div className="flex items-center justify-between pt-5 pb-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="p-1 rounded-lg text-[#251613] hover:bg-[#EDE7E2]"
                aria-label="Back"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h4 className="text-sm font-extrabold text-[#251613]">
                Popular Travelers
              </h4>
            </div>
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#EDE7E2]">
              <Image
                src="/assets/avatars/luke-james.jpg"
                alt="My profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Travelers inside App */}
          <div className="flex-1 space-y-3.5 overflow-hidden pt-1">
            {/* Alex Viojwan Card */}
            <div className="relative bg-white rounded-2xl p-3 shadow-sm border border-[#EDE7E2] transition-all hover:border-[#FF5B3D]/50">
              <div className="flex items-start gap-2.5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-[#EDE7E2]">
                  <Image
                    src={alex.avatar}
                    alt={alex.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-xs font-bold text-[#251613]">
                    {alex.name}
                  </h5>
                  <div className="flex items-center gap-2 text-[10px] text-[#6E6462] mt-0.5">
                    <span>From {alex.country}</span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5 text-[#FF5B3D] font-medium">
                      <MapPin className="w-2.5 h-2.5" />
                      {alex.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio & Recent Post */}
              <div className="mt-2.5">
                <p className="text-[10px] font-bold text-[#251613]">
                  Alex Viojwan <span className="font-normal text-[#9B918F]">Just now</span>
                </p>
                <p className="text-[10px] text-[#6E6462] line-clamp-2 mt-1 leading-relaxed">
                  {alex.bio}
                </p>
              </div>

              <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-[#F2ECE7]">
                <button
                  type="button"
                  onClick={() => onSelectTraveler?.(alex)}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FF5B3D] hover:underline"
                >
                  See Profile <ArrowRight className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTraveler?.(alex)}
                  className="w-7 h-7 rounded-xl bg-[#FFF8F2] flex items-center justify-center text-[#FF5B3D] hover:bg-[#FFECE0]"
                  aria-label="Message Alex"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Background card preview inside phone */}
            <div className="bg-white rounded-2xl p-3 shadow-sm border border-[#EDE7E2] opacity-75">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FFE7D6] flex items-center justify-center text-[#FF5B3D] font-bold text-xs">
                  SK
                </div>
                <div>
                  <p className="text-xs font-bold text-[#251613]">Sandy Kart</p>
                  <p className="text-[10px] text-[#6E6462]">From Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ================= FLOATING FOREGROUND CARD FOR SANDY KART ================= */}
      <motion.div
        variants={cardFloatOffset}
        animate="animate"
        whileHover={{ y: -4, scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onSelectTraveler?.(sandy)}
        className="absolute -bottom-6 -right-4 sm:-right-10 w-64 sm:w-72 bg-white rounded-2xl p-3.5 sm:p-4 shadow-2xl border border-[#EDE7E2] cursor-pointer transition-colors duration-300 z-30 group"
      >
        <div className="flex items-center gap-2.5">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#FFC94A] flex-shrink-0">
            <Image
              src={sandy.avatar}
              alt="Sandy Kart"
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <h6 className="text-xs font-bold text-[#251613] leading-snug">
              Sandy Kart
            </h6>
            <div className="flex items-center gap-1.5 text-[10px] text-[#6E6462]">
              <span>From Canada</span>
              <span>•</span>
              <span className="text-[#FF5B3D] font-medium">Sajek Hill Spot</span>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <p className="text-[10px] font-bold text-[#251613]">
            Sandy Kart <span className="font-normal text-[#9B918F]">Just now</span>
          </p>
          <p className="text-[10px] text-[#6E6462] mt-1 leading-snug line-clamp-2">
            travel blogger who documents her globetrotting via blog Adventurous Kate.
          </p>
        </div>

        {/* Two Photo Previews */}
        <div className="flex items-center gap-2 mt-2.5">
          <div className="relative w-14 h-10 rounded-lg overflow-hidden border border-[#EDE7E2]">
            <Image
              src="/assets/destinations/lake-valley-green.jpg"
              alt="preview"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-14 h-10 rounded-lg overflow-hidden border border-[#EDE7E2]">
            <Image
              src="/assets/destinations/sajek-hill-sunset.jpg"
              alt="preview"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Action Bottom */}
        <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-[#F2ECE7]">
          <span className="text-[11px] font-bold text-[#FF5B3D] group-hover:underline">
            See Profile
          </span>
          <div className="w-7 h-7 rounded-lg bg-[#FF5B3D] text-white flex items-center justify-center shadow-sm">
            <MessageCircle className="w-3.5 h-3.5" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
