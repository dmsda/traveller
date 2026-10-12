import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Heart, Users, Sparkles, Shield } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { ABOUT_VALUES } from "@/data/travelData";

export const metadata: Metadata = {
  title: "About Travellers | Our Story and Mission",
  description:
    "Discover the story behind Travellers, a community designed to connect people through destinations, shared experiences, and travel adventures.",
  openGraph: {
    title: "About Travellers | Our Story and Mission",
    description:
      "Travel is better when shared. Travellers brings people together through new destinations, shared experiences, and meaningful connections.",
  },
};

const VALUE_ICONS: Record<string, React.ElementType> = {
  connection: Heart,
  exploration: Compass,
  authenticity: Sparkles,
  community: Users,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#251613]">
      <Navbar />

      <main className="flex-1">
        {/* Section A: Hero */}
        <section className="relative py-16 sm:py-24 lg:py-28 bg-[#FFF8F2] border-b border-[#EDE7E2]/70 overflow-hidden">
          {/* Subtle Decorative Sketch background */}
          <div className="absolute top-0 right-0 w-full max-w-[600px] h-full pointer-events-none opacity-40 select-none">
            <Image
              src="/assets/illustrations/city-sketch.svg"
              alt=""
              fill
              className="object-contain object-right-top"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <SectionEyebrow hasAccentBar={false}>ABOUT TRAVELLERS</SectionEyebrow>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#251613] tracking-tight leading-[1.1] mt-4 mb-6">
                Travel is better when shared.
              </h1>
              <p className="text-lg sm:text-xl text-[#6E6462] leading-relaxed mb-8 max-w-2xl">
                Travellers brings people together through new destinations, shared experiences, and meaningful connections. Don’t listen to what they say — go see.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/features">
                  <Button variant="primary" size="lg" className="rounded-2xl shadow-coral-glow">
                    <span>Explore Our Features</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/#community">
                  <Button variant="secondary" size="lg" className="rounded-2xl">
                    <span>Discover the Community</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section B: Brand Story */}
        <section id="story" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Visual Composition with real photography */}
              <div className="lg:col-span-5 relative">
                <div className="relative w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-soft border border-[#EDE7E2]">
                  <Image
                    src="/assets/destinations/sajek-hill-sunset.jpg"
                    alt="Scenic mountain ridge view at Sajek Hill"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-sm border border-[#EDE7E2] shadow-sm">
                    <p className="text-xs font-bold text-[#FF5B3D] uppercase tracking-wider">
                      Community Focus
                    </p>
                    <p className="text-sm font-bold text-[#251613] mt-0.5">
                      “More than destinations. It’s about connections.”
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Narrative */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <SectionEyebrow hasAccentBar={false}>OUR STORY</SectionEyebrow>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#251613] tracking-tight leading-tight mt-3 mb-6">
                  More than destinations. <br />
                  It’s about connections.
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-[#6E6462] leading-relaxed">
                  <p>
                    Travel is often romanticized as an escape to exotic landmarks. But when you ask seasoned explorers about their most unforgettable trips, they rarely talk solely about a monument or scenic viewpoint.
                  </p>
                  <p>
                    They recall the fellow traveler who shared fresh coffee on a cold sunrise ridge. They speak of the spontaneous hiking companion who turned a grueling trail into an afternoon of laughter, and the local host who welcomed them like family.
                  </p>
                  <p>
                    Travellers was created around a single conviction: journeys are made richer when we share them. By connecting solo adventurers, digital nomads, and curiosity-driven explorers before they set foot on the road, we transform unfamiliar trails into shared milestones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section C & D: Mission and Vision */}
        <section className="py-16 sm:py-24 bg-[#FFF8F2] border-y border-[#EDE7E2]/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Mission Card */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EDE7E2] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF8F2] text-[#FF5B3D] border border-[#FF5B3D]/20 flex items-center justify-center mb-6">
                    <Compass className="w-6 h-6" />
                  </div>
                  <SectionEyebrow hasAccentBar={false}>OUR MISSION</SectionEyebrow>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#251613] tracking-tight mt-2 mb-4">
                    Make every journey more connected.
                  </h3>
                  <p className="text-base text-[#6E6462] leading-relaxed">
                    Our mission is to empower travellers worldwide to discover extraordinary destinations, meet trustworthy companions who share their travel pace, and exchange honest, community-verified trail insights without commercial noise.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#F2ECE7] flex items-center gap-2 text-xs font-bold text-[#FF5B3D]">
                  <span>COMMUNITY-FIRST ARCHITECTURE</span>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EDE7E2] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF4E8] text-[#FF7A45] border border-[#FF7A45]/20 flex items-center justify-center mb-6">
                    <Heart className="w-6 h-6" />
                  </div>
                  <SectionEyebrow hasAccentBar={false}>OUR VISION</SectionEyebrow>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#251613] tracking-tight mt-2 mb-4">
                    A world where travellers never have to explore alone.
                  </h3>
                  <p className="text-base text-[#6E6462] leading-relaxed">
                    We envision an open global network where solitary wanderlust evolves into lifelong camaraderie. No matter how remote your next trail may be, you are always backed by a community ready to share advice, gear tips, and encouragement.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#F2ECE7] flex items-center gap-2 text-xs font-bold text-[#FF7A45]">
                  <span>GLOBAL ASPIRATION</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section E: Our Values */}
        <section id="values" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionEyebrow align="center">OUR GUIDING PRINCIPLES</SectionEyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#251613] tracking-tight mt-3 mb-4">
                The values that shape every step
              </h2>
              <p className="text-base text-[#6E6462] leading-relaxed">
                We design features and foster community interactions rooted in genuine respect, discovery, and safety.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {ABOUT_VALUES.map((val) => {
                const IconComponent = VALUE_ICONS[val.id] || Sparkles;
                return (
                  <div
                    key={val.id}
                    className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#EDE7E2] flex flex-col justify-between hover:border-[#FF5B3D]/30 transition-all group"
                  >
                    <div>
                      <div
                        className={`w-12 h-12 rounded-2xl ${val.accent} flex items-center justify-center mb-5 border`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-[#251613] group-hover:text-[#FF5B3D] transition-colors mb-2">
                        {val.title}
                      </h3>
                      <p className="text-xs font-bold text-[#9B918F] mb-3 uppercase tracking-wider">
                        {val.subtitle}
                      </p>
                      <p className="text-sm text-[#6E6462] leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Honest Trust & Beta Status Note */}
        <section className="py-12 bg-[#FAF8F5] border-t border-[#EDE7E2]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EDE7E2] text-xs font-bold text-[#251613] mb-4">
              <Shield className="w-4 h-4 text-[#FF5B3D]" />
              <span>Transparent Platform Operations</span>
            </div>
            <p className="text-xs sm:text-sm text-[#6E6462] max-w-2xl mx-auto leading-relaxed">
              Travellers is in active community beta. We do not manufacture artificial reviews, sponsor disguised tourism placements, or sell personal exploration logs. All platform milestones are driven by genuine members.
            </p>
          </div>
        </section>

        {/* Section F: Closing CTA */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#FF5B3D] via-[#FF694B] to-[#FF7A45] rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 lg:p-16 text-center text-white shadow-coral-glow relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
                Your next adventure starts with a connection.
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed">
                Discover curated destinations, find companions headed your direction, and experience travel through a connected lens.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/features">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white text-[#251613] hover:bg-white/90 border-transparent rounded-2xl shadow-sm"
                  >
                    <span>Explore Features</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/40 text-white hover:bg-white/10 rounded-2xl"
                  >
                    <span>Back to Home</span>
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
