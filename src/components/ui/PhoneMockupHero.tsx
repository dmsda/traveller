"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Menu, Home, Calendar, MessageSquare, User, Heart, Compass } from "lucide-react";
import { motion } from "motion/react";
import { phoneFloat, cardFloatOffset, badgeFloatOffset } from "@/lib/motion";

interface PhoneMockupHeroProps {
  onCardClick?: (title: string) => void;
}

export const PhoneMockupHero: React.FC<PhoneMockupHeroProps> = ({ onCardClick }) => {
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[370px] select-none py-6 sm:py-8">
      {/* Decorative ambient glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF5B3D]/15 via-[#FFC94A]/10 to-transparent rounded-[50px] blur-2xl -z-10" />

      {/* Decorative tilted speckle dashes on top right */}
      <div className="absolute -top-4 -right-10 w-24 h-24 opacity-60 pointer-events-none hidden sm:block z-10">
        <Image
          src="/assets/illustrations/speckles.svg"
          alt=""
          width={90}
          height={90}
        />
      </div>

      {/* ================= FLOATING CARD 1: Sajek Hill Spot (Floats outside on Left) ================= */}
      <motion.div
        variants={cardFloatOffset}
        animate="animate"
        whileHover={{ scale: 1.04, y: -3 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onCardClick?.("Sajek Hill Spot")}
        className="absolute -left-8 sm:-left-20 top-[40%] w-44 sm:w-48 bg-white rounded-2xl p-2.5 shadow-card-elevated border border-[#EDE7E2] cursor-pointer hover:border-[#FF5B3D]/50 transition-colors z-40 group"
      >
        <div className="relative h-24 sm:h-26 w-full rounded-xl overflow-hidden mb-2">
          <Image
            src="/assets/destinations/sajek-hill-sunset.jpg"
            alt="Sajek Hill Spot"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
            className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-black/35 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
            aria-label="Save destination"
          >
            <Heart
              className={`w-3 h-3 ${
                liked ? "fill-[#FF5B3D] text-[#FF5B3D]" : ""
              }`}
            />
          </button>
        </div>
        <h5 className="text-[12px] font-bold text-[#251613] truncate">
          Sajek Hill Spot
        </h5>
        <div className="flex items-center justify-between mt-1.5">
          <div className="flex -space-x-1.5 items-center">
            <div className="relative w-4 h-4 rounded-full overflow-hidden border border-white">
              <Image
                src="/assets/avatars/smith-england.jpg"
                alt="traveler"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-4 h-4 rounded-full overflow-hidden border border-white">
              <Image
                src="/assets/avatars/jessica-egypt.jpg"
                alt="traveler"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-4 h-4 rounded-full bg-[#FF5B3D] text-white text-[8px] font-bold flex items-center justify-center border border-white">
              +
            </div>
          </div>
          <span className="text-[10px] text-[#6E6462] font-semibold">
            4.9 ★
          </span>
        </div>
      </motion.div>

      {/* ================= FLOATING PILL 2: Martina / Bangladesh (Floats outside on Right) ================= */}
      <motion.div
        variants={badgeFloatOffset}
        animate="animate"
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onCardClick?.("Martina")}
        className="absolute -right-5 sm:-right-12 bottom-20 z-40 bg-white rounded-2xl p-2 sm:p-2.5 shadow-card-elevated border border-[#EDE7E2] flex items-center gap-2.5 cursor-pointer hover:border-[#FF5B3D]/50 transition-colors"
      >
        <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#FFC94A] flex-shrink-0">
          <Image
            src="/assets/avatars/martina-bangladesh.jpg"
            alt="Martina"
            fill
            className="object-cover"
          />
        </div>
        <div className="min-w-0 pr-1">
          <h6 className="text-[11px] font-bold text-[#251613] leading-none">
            Martina
          </h6>
          <p className="text-[9px] text-[#6E6462] mt-0.5">
            Bangladesh
          </p>
        </div>
      </motion.div>

      {/* ================= Outer Phone Hardware Shell with Floating Animation ================= */}
      <motion.div
        variants={phoneFloat}
        animate="animate"
        className="relative rounded-[46px] bg-[#1C1615] p-2.5 sm:p-3 shadow-mockup border-[4px] border-[#2E2421] z-20 will-change-transform"
      >
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-26 h-4 bg-[#140F0E] rounded-full z-30 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-[#201816] mr-3" />
          <div className="w-2 h-2 rounded-full bg-[#182334]" />
        </div>


        {/* Screen Bezel / Container */}
        <div className="relative w-full h-[570px] bg-[#FAF8F5] rounded-[38px] overflow-hidden flex flex-col font-sans">
          {/* App Header with Sunset Hero */}
          <div className="relative h-44 bg-gradient-to-b from-[#E86745] to-[#FF8B5A] p-4 text-white overflow-hidden">
            {/* Background Mountain Photo */}
            <div className="absolute inset-0 mix-blend-overlay opacity-60">
              <Image
                src="/assets/destinations/sajek-hill-sunset.jpg"
                alt="Sajek mountain sunrise"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />

            {/* Top Bar inside app */}
            <div className="relative z-10 flex items-center justify-between pt-5">
              <button
                type="button"
                className="p-1.5 rounded-lg bg-black/25 backdrop-blur-sm text-white hover:bg-black/35 transition-colors"
                aria-label="App Menu"
              >
                <Menu className="w-4 h-4" />
              </button>
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white/70">
                <Image
                  src="/assets/avatars/smith-england.jpg"
                  alt="User avatar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* App Title & Subtitle */}
            <div className="relative z-10 mt-3">
              <h4 className="text-xl font-bold tracking-tight text-white drop-shadow-sm">
                Travelers
              </h4>
              <p className="text-[11px] text-white/90 font-medium">
                App connect with travel community
              </p>
            </div>
          </div>

          {/* Floating Search Bar (overlaps header) */}
          <div className="relative px-4 -mt-5 z-20">
            <div className="flex items-center gap-2.5 bg-white rounded-2xl px-3.5 py-2.5 shadow-soft border border-[#EDE7E2]">
              <div className="w-7 h-7 rounded-xl bg-[#FFF8F2] flex items-center justify-center text-[#FF5B3D]">
                <Search className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-[#9B918F] font-semibold tracking-wider uppercase">
                  Search your destination
                </span>
                <span className="text-xs font-bold text-[#251613]">
                  Sajek Valley, Bangladesh
                </span>
              </div>
            </div>
          </div>

          {/* Body Content inside App */}
          <div className="flex-1 px-4 pt-3.5 pb-2 overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold text-[#251613]">
                  Right now at Sajek
                </span>
                <button
                  type="button"
                  onClick={() => onCardClick?.("Sajek Valley Explorer")}
                  className="text-[10px] text-[#FF5B3D] font-bold hover:underline"
                >
                  See all
                </button>
              </div>

              {/* Destination Card Row inside phone */}
              <div className="grid grid-cols-2 gap-2.5">
                {/* Zero Point Card */}
                <div
                  onClick={() => onCardClick?.("Zero Point")}
                  className="group bg-white rounded-2xl p-2 shadow-sm border border-[#EDE7E2] hover:border-[#FF5B3D]/40 transition-all cursor-pointer"
                >
                  <div className="relative h-24 w-full rounded-xl overflow-hidden mb-2">
                    <Image
                      src="/assets/destinations/lake-valley-green.jpg"
                      alt="Zero Point"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h5 className="text-[11px] font-bold text-[#251613] truncate">
                    Zero Point
                  </h5>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex -space-x-1.5 items-center">
                      <div className="relative w-4 h-4 rounded-full overflow-hidden border border-white">
                        <Image
                          src="/assets/avatars/julie-poland.jpg"
                          alt="traveler"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative w-4 h-4 rounded-full overflow-hidden border border-white">
                        <Image
                          src="/assets/avatars/farzan-georgia.jpg"
                          alt="traveler"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="w-4 h-4 rounded-full bg-[#FFA826] text-white text-[8px] font-bold flex items-center justify-center border border-white">
                        +
                      </div>
                    </div>
                    <span className="text-[9px] text-[#9B918F] font-semibold">
                      4.8 ★
                    </span>
                  </div>
                </div>

                {/* Second Destination Card: Valley Ridge */}
                <div
                  onClick={() => onCardClick?.("Valley Ridge")}
                  className="group bg-white rounded-2xl p-2 shadow-sm border border-[#EDE7E2] hover:border-[#FF5B3D]/40 transition-all cursor-pointer"
                >
                  <div className="relative h-24 w-full rounded-xl overflow-hidden mb-2">
                    <Image
                      src="/assets/destinations/sajek-hill-sunset.jpg"
                      alt="Valley Ridge"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h5 className="text-[11px] font-bold text-[#251613] truncate">
                    Valley Ridge
                  </h5>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex -space-x-1.5 items-center">
                      <div className="relative w-4 h-4 rounded-full overflow-hidden border border-white">
                        <Image
                          src="/assets/avatars/sajon-finland.jpg"
                          alt="traveler"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="w-4 h-4 rounded-full bg-[#FF5B3D] text-white text-[8px] font-bold flex items-center justify-center border border-white">
                        +
                      </div>
                    </div>
                    <span className="text-[9px] text-[#9B918F] font-semibold">
                      4.9 ★
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Activity snippet inside phone */}
            <div className="bg-white rounded-2xl p-2.5 shadow-sm border border-[#EDE7E2]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#251613]">
                  Active Buddies Nearby
                </span>
                <span className="text-[9px] text-[#FF5B3D] font-bold">
                  +18 online
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                {["smith-england", "jessica-egypt", "farzan-georgia", "julie-poland", "sajon-finland"].map((avatar, idx) => (
                  <div key={idx} className="relative w-6 h-6 rounded-full overflow-hidden border border-[#EDE7E2]">
                    <Image
                      src={`/assets/avatars/${avatar}.jpg`}
                      alt="buddy"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom App Navigation Bar */}
          <div className="bg-white border-t border-[#EDE7E2] px-6 py-2.5 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setActiveTab("home")}
              className={`flex flex-col items-center gap-0.5 ${
                activeTab === "home" ? "text-[#FF5B3D]" : "text-[#9B918F]"
              }`}
              aria-label="Home Tab"
            >
              <div
                className={`p-1 rounded-lg ${
                  activeTab === "home" ? "bg-[#FF5B3D]/10" : ""
                }`}
              >
                <Home className="w-4 h-4" />
              </div>
              <span className="text-[8px] font-bold">Home</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("explore")}
              className={`flex flex-col items-center gap-0.5 ${
                activeTab === "explore" ? "text-[#FF5B3D]" : "text-[#9B918F]"
              }`}
              aria-label="Explore Tab"
            >
              <Compass className="w-4 h-4" />
              <span className="text-[8px] font-medium">Explore</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("calendar")}
              className={`flex flex-col items-center gap-0.5 ${
                activeTab === "calendar" ? "text-[#FF5B3D]" : "text-[#9B918F]"
              }`}
              aria-label="Calendar Tab"
            >
              <Calendar className="w-4 h-4" />
              <span className="text-[8px] font-medium">Trips</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("chat")}
              className={`flex flex-col items-center gap-0.5 ${
                activeTab === "chat" ? "text-[#FF5B3D]" : "text-[#9B918F]"
              }`}
              aria-label="Messages Tab"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="text-[8px] font-medium">Chat</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("profile")}
              className={`flex flex-col items-center gap-0.5 ${
                activeTab === "profile" ? "text-[#FF5B3D]" : "text-[#9B918F]"
              }`}
              aria-label="Profile Tab"
            >
              <User className="w-4 h-4" />
              <span className="text-[8px] font-medium">Profile</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
