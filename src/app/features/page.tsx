import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Calendar,
  Check,
  Search,
  MapPin,
  Heart,
  Share2,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { HOW_IT_WORKS_STEPS } from "@/data/travelData";

export const metadata: Metadata = {
  title: "Travellers Features | Discover, Connect and Explore",
  description:
    "Explore Travellers features for discovering destinations, meeting fellow travellers, joining travel events, and sharing travel memories.",
  openGraph: {
    title: "Travellers Features | Discover, Connect and Explore",
    description:
      "Everything you need for a more connected journey. Discover places, meet fellow travellers, and turn shared interests into memorable experiences.",
  },
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#251613]">
      <Navbar />

      <main className="flex-1">
        {/* Section A: Hero */}
        <section className="relative py-16 sm:py-24 lg:py-28 bg-[#FFF8F2] border-b border-[#EDE7E2]/70 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <SectionEyebrow hasAccentBar={false}>EXPLORE THE PLATFORM</SectionEyebrow>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#251613] tracking-tight leading-[1.1] mt-4 mb-6">
                Everything you need for a more connected journey.
              </h1>
              <p className="text-lg sm:text-xl text-[#6E6462] leading-relaxed mb-8 max-w-2xl">
                Discover places, meet fellow travellers, and turn shared interests into memorable experiences. Designed specifically for community-minded explorers.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/#community">
                  <Button variant="primary" size="lg" className="rounded-2xl shadow-coral-glow">
                    <span>Discover the Community</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/#download">
                  <Button variant="secondary" size="lg" className="rounded-2xl">
                    <span>Get the App</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section B: Feature 1 — Discover Destinations */}
        <section id="destinations" className="py-16 sm:py-24 bg-white border-b border-[#EDE7E2]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Visual Mockup / Cards */}
              <div className="lg:col-span-6 relative">
                <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#EDE7E2] shadow-sm space-y-5">
                  {/* Search Bar Visual */}
                  <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl border border-[#EDE7E2] shadow-xs">
                    <Search className="w-4 h-4 text-[#9B918F]" />
                    <span className="text-xs sm:text-sm text-[#251613] font-medium">
                      Search Sajek Valley, Lake District, Caucasus...
                    </span>
                  </div>

                  {/* Destination Spotlight Card */}
                  <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#EDE7E2]">
                    <Image
                      src="/assets/destinations/sajek-hill-sunset.jpg"
                      alt="Sajek Hill spot sunset view"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#FF5B3D] text-white inline-block mb-1.5">
                        Trending Destination
                      </span>
                      <h4 className="text-lg font-extrabold text-white">Sajek Hill Spot</h4>
                      <p className="text-xs text-white/80 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#FFC94A]" />
                        <span>Rangamati, Bangladesh • +42 travellers checked in</span>
                      </p>
                    </div>
                  </div>

                  {/* Secondary mini card */}
                  <div className="flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-[#EDE7E2]">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src="/assets/destinations/lake-valley-green.jpg"
                        alt="Lake Valley Green"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#251613]">Zero Point Valley Pass</p>
                      <p className="text-[11px] text-[#6E6462]">High altitude ridge trails & camp spots</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Copy & Benefits */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <SectionEyebrow hasAccentBar={false}>FEATURE 01 — DESTINATIONS</SectionEyebrow>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#251613] tracking-tight leading-tight mt-3 mb-5">
                  Find places worth exploring.
                </h2>
                <p className="text-base sm:text-lg text-[#6E6462] leading-relaxed mb-6">
                  Skip the crowded commercial tourist traps. Travellers spotlights scenic viewpoints, serene valleys, and quiet camp locations documented directly by backpackers and local outdoor hosts.
                </p>

                <ul className="space-y-3.5">
                  {[
                    "Community check-ins showing who is currently in the region",
                    "Authentic route notes, seasonal packing advice, and trail conditions",
                    "Curated by genuine travelers without commercial sponsorship bias",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FFF8F2] text-[#FF5B3D] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#FF5B3D]/30">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm sm:text-base text-[#251613] font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section C: Feature 2 — Meet Fellow Travellers */}
        <section id="travelers" className="py-16 sm:py-24 bg-[#FFF8F2] border-b border-[#EDE7E2]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Copy */}
              <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
                <SectionEyebrow hasAccentBar={false}>FEATURE 02 — COMPANION DISCOVERY</SectionEyebrow>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#251613] tracking-tight leading-tight mt-3 mb-5">
                  Meet people who share your passion for travel.
                </h2>
                <p className="text-base sm:text-lg text-[#6E6462] leading-relaxed mb-6">
                  Solo travel doesn’t mean being on your own forever. Discover companions whose walking pace, photography interests, and departure dates match yours.
                </p>

                <ul className="space-y-3.5">
                  {[
                    "Detailed traveler bios including recent trips and home countries",
                    "Direct buddy connection requests with clear mutual interests",
                    "Filter by travel style: backpacker, digital nomad, or weekend trekker",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white text-[#FF7A45] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#FF7A45]/30">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm sm:text-base text-[#251613] font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Traveler Profile Cards */}
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Smith",
                      country: "England",
                      avatar: "/assets/avatars/smith-england.jpg",
                      trips: "18 trips",
                      bio: "Solo trekker exploring mountain passes across Asia.",
                    },
                    {
                      name: "Jessica",
                      country: "Egypt",
                      avatar: "/assets/avatars/jessica-egypt.jpg",
                      trips: "24 trips",
                      bio: "Documentary photographer capturing ancient alleys.",
                    },
                    {
                      name: "Julie",
                      country: "Poland",
                      avatar: "/assets/avatars/julie-poland.jpg",
                      trips: "12 trips",
                      bio: "Coffee lover seeking buddies for sunrise summits.",
                    },
                    {
                      name: "Farzan",
                      country: "Georgia",
                      avatar: "/assets/avatars/farzan-georgia.jpg",
                      trips: "31 trips",
                      bio: "Caucasus mountain guide and winter trek specialist.",
                    },
                  ].map((t) => (
                    <div
                      key={t.name}
                      className="bg-white rounded-2xl p-5 border border-[#EDE7E2] shadow-sm space-y-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#EDE7E2]">
                          <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                        </div>
                        <div>
                          <h4 className="text-sm font-extrabold text-[#251613]">{t.name}</h4>
                          <span className="text-[11px] font-semibold text-[#FF5B3D]">
                            {t.country} • {t.trips}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-[#6E6462] leading-relaxed">{t.bio}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section D: Feature 3 — Create and Join Events */}
        <section id="events" className="py-16 sm:py-24 bg-white border-b border-[#EDE7E2]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Demonstration Event Card */}
              <div className="lg:col-span-6">
                <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#EDE7E2] shadow-sm">
                  <div className="flex items-center justify-between pb-4 border-b border-[#EDE7E2] mb-5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#FFF4E8] text-[#FF7A45] border border-[#FF7A45]/20">
                      Editorial Demonstration
                    </span>
                    <span className="text-xs font-semibold text-[#9B918F]">Sample Event Card</span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-extrabold text-[#251613]">
                      Sunrise Valley Hike & Photography Gathering
                    </h3>
                    <div className="space-y-2 text-xs text-[#6E6462]">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#FF5B3D]" />
                        <span>Sajek Hill Spot, Basecamp Point B</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#FF7A45]" />
                        <span>Saturday Morning • 05:00 AM Departure</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#FFA826]" />
                        <span>6 Confirmed Explorers • 4 Spots Open</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#EDE7E2] flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[
                          "/assets/avatars/smith-england.jpg",
                          "/assets/avatars/jessica-egypt.jpg",
                          "/assets/avatars/julie-poland.jpg",
                          "/assets/avatars/farzan-georgia.jpg",
                        ].map((src, i) => (
                          <div
                            key={i}
                            className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-xs"
                          >
                            <Image src={src} alt="Attendee" fill className="object-cover" />
                          </div>
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#FF5B3D]">Join Gathering</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Copy */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <SectionEyebrow hasAccentBar={false}>FEATURE 03 — EVENTS</SectionEyebrow>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#251613] tracking-tight leading-tight mt-3 mb-5">
                  Make every journey a shared experience.
                </h2>
                <p className="text-base sm:text-lg text-[#6E6462] leading-relaxed mb-6">
                  Turn informal plans into collaborative gatherings. Propose a morning summit trek, an afternoon food crawl, or an astronomy campout, and invite compatible travelers to assemble.
                </p>

                <ul className="space-y-3.5">
                  {[
                    "Define meetup coordinates, trail difficulty, and packing checklists",
                    "Transparent attendee previews with community profiles",
                    "Built for organic, non-commercial explorer gatherings",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FFF8F2] text-[#FF5B3D] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#FF5B3D]/30">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm sm:text-base text-[#251613] font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section E: Feature 4 — Share Memories */}
        <section id="memories" className="py-16 sm:py-24 bg-[#FFF8F2] border-b border-[#EDE7E2]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Copy */}
              <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
                <SectionEyebrow hasAccentBar={false}>FEATURE 04 — MEMORIES</SectionEyebrow>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#251613] tracking-tight leading-tight mt-3 mb-5">
                  Keep the memories. Share the stories.
                </h2>
                <p className="text-base sm:text-lg text-[#6E6462] leading-relaxed mb-6">
                  Preserve your travel stories where they inspire real people instead of disappearing into endless generic algorithmic feeds.
                </p>

                <ul className="space-y-3.5">
                  {[
                    "Photo stories tagged directly to trail coordinates and summits",
                    "Authentic traveler reflections, gear lessons, and route learnings",
                    "Encouragement and dialogue with travelers planning the same path",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white text-[#FF7A45] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#FF7A45]/30">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm sm:text-base text-[#251613] font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Visual Photo Story Preview */}
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EDE7E2] shadow-sm space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#EDE7E2]">
                      <Image
                        src="/assets/avatars/alex-viojwan.jpg"
                        alt="Alex Viojwan"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#251613]">Alex Viojwan</p>
                      <p className="text-[11px] text-[#9B918F]">Sunrise above the clouds in Sajek</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 h-56 sm:h-64">
                    <div className="relative rounded-2xl overflow-hidden border border-[#EDE7E2]">
                      <Image
                        src="/assets/destinations/sajek-hill-sunset.jpg"
                        alt="Sunrise over Sajek ridge"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 250px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md">
                        Sajek Summit
                      </span>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border border-[#EDE7E2]">
                      <Image
                        src="/assets/destinations/lake-valley-green.jpg"
                        alt="Lake valley green trail"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 250px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md">
                        Green Pass
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#6E6462] pt-2">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 font-semibold text-[#FF5B3D]">
                        <Heart className="w-4 h-4 fill-current" /> 142 cheers
                      </span>
                      <span className="flex items-center gap-1">
                        <Share2 className="w-4 h-4" /> 18 saves
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-[#9B918F]">Rangamati Trail</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section F: Feature 5 — Build Your Travel Community */}
        <section id="community-network" className="py-16 sm:py-24 bg-white border-b border-[#EDE7E2]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Visual Map Composition */}
              <div className="lg:col-span-6 relative">
                <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#EDE7E2] relative overflow-hidden">
                  <div className="relative w-full h-64 sm:h-72">
                    <Image
                      src="/assets/illustrations/world-map-dots.svg"
                      alt="World map network"
                      fill
                      className="object-contain opacity-80"
                    />

                    {/* Floating Traveler Waypoints */}
                    <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full border border-[#EDE7E2] shadow-xs">
                      <div className="relative w-5 h-5 rounded-full overflow-hidden border border-[#FF5B3D]">
                        <Image src="/assets/avatars/smith-england.jpg" alt="Smith" fill className="object-cover" />
                      </div>
                      <span className="text-[11px] font-bold text-[#251613]">Smith • England</span>
                    </div>

                    <div className="absolute bottom-12 right-6 flex items-center gap-2 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full border border-[#EDE7E2] shadow-xs">
                      <div className="relative w-5 h-5 rounded-full overflow-hidden border border-[#FF7A45]">
                        <Image src="/assets/avatars/martina-bangladesh.jpg" alt="Martina" fill className="object-cover" />
                      </div>
                      <span className="text-[11px] font-bold text-[#251613]">Martina • Sajek</span>
                    </div>

                    <div className="absolute top-1/2 left-1/3 flex items-center gap-2 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full border border-[#EDE7E2] shadow-xs">
                      <div className="relative w-5 h-5 rounded-full overflow-hidden border border-[#FFA826]">
                        <Image src="/assets/avatars/farzan-georgia.jpg" alt="Farzan" fill className="object-cover" />
                      </div>
                      <span className="text-[11px] font-bold text-[#251613]">Farzan • Georgia</span>
                    </div>
                  </div>

                  <div className="mt-2 p-3.5 rounded-2xl bg-white border border-[#EDE7E2] shadow-xs text-center">
                    <p className="text-xs font-extrabold text-[#251613]">
                      Global Network: 40+ Traveler Origins
                    </p>
                    <p className="text-[11px] text-[#6E6462] mt-0.5">
                      England • Egypt • Poland • Georgia • Finland • Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Copy */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <SectionEyebrow hasAccentBar={false}>FEATURE 05 — GLOBAL NETWORK</SectionEyebrow>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#251613] tracking-tight leading-tight mt-3 mb-5">
                  Your people are out there.
                </h2>
                <p className="text-base sm:text-lg text-[#6E6462] leading-relaxed mb-6">
                  Turn isolated wanderlust into a reliable international network. Before stepping onto unfamiliar terrain, tap into verified peer tips and discover friendly faces already stationed at your destination.
                </p>

                <ul className="space-y-3.5">
                  {[
                    "Cross-border explorer circles that stay connected year after year",
                    "Real advice directly from members who walked the exact trail last week",
                    "A respectful, welcoming environment open to beginners and experts alike",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FFF8F2] text-[#FF5B3D] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#FF5B3D]/30">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm sm:text-base text-[#251613] font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section G: How It Works */}
        <section className="py-16 sm:py-24 bg-[#FFF8F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionEyebrow align="center">HOW IT WORKS</SectionEyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#251613] tracking-tight mt-3 mb-4">
                Three simple steps to connect
              </h2>
              <p className="text-base text-[#6E6462] leading-relaxed">
                A seamless conceptual workflow designed to move you from inspiration to shared adventures safely.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {HOW_IT_WORKS_STEPS.map((s) => (
                <div
                  key={s.step}
                  className="bg-white rounded-3xl p-8 border border-[#EDE7E2] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-black text-[#FF5B3D]/25 font-mono mb-4 block">
                      {s.step}
                    </span>
                    <h3 className="text-xl font-bold text-[#251613] mb-2">{s.title}</h3>
                    <p className="text-xs font-bold text-[#9B918F] uppercase tracking-wider mb-3">
                      {s.headline}
                    </p>
                    <p className="text-sm text-[#6E6462] leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section H: Closing CTA */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#FF5B3D] via-[#FF694B] to-[#FF7A45] rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 lg:p-16 text-center text-white shadow-coral-glow relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
                Ready to see more of the world?
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed">
                Connect with travelers, plan events, and explore destinations together with our community.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/#download">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white text-[#251613] hover:bg-white/90 border-transparent rounded-2xl shadow-sm"
                  >
                    <span>Download the App</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/40 text-white hover:bg-white/10 rounded-2xl"
                  >
                    <span>Explore Travellers</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
