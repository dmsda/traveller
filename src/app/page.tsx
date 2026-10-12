"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Users,
  CheckCircle2,
  QrCode,
  MessageCircle,
  Heart,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { GetConnectedSection } from "@/components/sections/GetConnectedSection";
import { PopularTravellersSection } from "@/components/sections/PopularTravellersSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { DownloadCTASection } from "@/components/sections/DownloadCTASection";
import { Footer } from "@/components/layout/Footer";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { StoreButton } from "@/components/ui/StoreButton";
import {
  TravelerProfile,
  PricingPlan,
  FEATURED_DESTINATIONS,
} from "@/data/travelData";

export default function Home() {
  // Modal states
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [appStoreSource, setAppStoreSource] = useState("Apple App Store");

  const [selectedTraveler, setSelectedTraveler] =
    useState<TravelerProfile | null>(null);

  const [selectedPlan, setSelectedPlan] = useState<{
    plan: PricingPlan;
    isAnnual: boolean;
  } | null>(null);

  const [selectedDestination, setSelectedDestination] = useState<string | null>(
    null
  );

  const [activeFeatureTitle, setActiveFeatureTitle] = useState<string | null>(
    null
  );

  const [isAddBuddyOpen, setIsAddBuddyOpen] = useState(false);
  const [buddyAdded, setBuddyAdded] = useState(false);
  const [buddyInput, setBuddyInput] = useState("");

  // Handlers
  const handleStoreClick = (storeName: string) => {
    setAppStoreSource(storeName);
    setIsAppModalOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan, isAnnual: boolean) => {
    setSelectedPlan({ plan, isAnnual });
  };

  const handleSelectTraveler = (traveler: TravelerProfile) => {
    setSelectedTraveler(traveler);
  };

  const handleSelectDestination = (destName: string) => {
    setSelectedDestination(destName);
  };

  const handleFeatureClick = (title: string) => {
    setActiveFeatureTitle(title);
  };

  const currentDest = FEATURED_DESTINATIONS.find(
    (d) => d.name.toLowerCase() === selectedDestination?.toLowerCase()
  ) || {
    id: "sajek-custom",
    name: selectedDestination || "Sajek Valley",
    location: "Chittagong Hill Tracts, Bangladesh",
    image: "/assets/destinations/sajek-hill-sunset.jpg",
    visitorsCount: "+42 travellers currently checked in",
    avatars: [
      "/assets/avatars/smith-england.jpg",
      "/assets/avatars/jessica-egypt.jpg",
      "/assets/avatars/farzan-georgia.jpg",
    ],
    tag: "Trending Destination",
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-[#251613]">
      {/* 1. Global Navigation Bar */}
      <Navbar onGetAppClick={() => handleStoreClick("Apple App Store")} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection
          onStoreClick={handleStoreClick}
          onDestinationClick={handleSelectDestination}
        />

        {/* 3. Community Section */}
        <CommunitySection
          onSelectTraveler={handleSelectTraveler}
          onSelectDestination={handleSelectDestination}
        />

        {/* 4. Get Connected / Share Your Travel Experiences Section */}
        <GetConnectedSection
          onQuoteClick={() => {
            const luke = {
              id: "luke-james",
              name: "Luke James",
              country: "New Zealand",
              avatar: "/assets/avatars/luke-james.jpg",
              bio: "Travel photographer & adventurer. Exploring remote peaks and capturing human connection across continents.",
              location: "Queenstown • Currently trekking Sajek",
              tripsCount: 36,
              followers: "24.5k",
            };
            setSelectedTraveler(luke);
          }}
          onFeatureClick={handleFeatureClick}
        />

        {/* 5. Popular Travellers Section */}
        <PopularTravellersSection
          onSelectTraveler={handleSelectTraveler}
          onAddBuddyClick={() => {
            setBuddyAdded(false);
            setBuddyInput("");
            setIsAddBuddyOpen(true);
          }}
        />

        {/* 6. Pricing Section */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 7. Download App CTA Section */}
        <DownloadCTASection onStoreClick={handleStoreClick} />
      </main>

      {/* 8. Comprehensive Footer */}
      <Footer />

      {/* ================= MODALS & INTERACTION OVERLAYS ================= */}

      {/* Modal 1: Get the App / Store Download Demo Modal */}
      <Modal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        title="Get Travellers Mobile App"
        subtitle={`Experience mobile travel companion on your phone via ${appStoreSource}`}
      >
        <div className="space-y-6 text-center">
          {/* Simulated QR Code & Badge */}
          <div className="p-6 bg-[#FFF8F2] rounded-2xl border border-[#EDE7E2] inline-flex flex-col items-center mx-auto">
            <div className="w-40 h-40 bg-white p-3 rounded-xl shadow-sm border border-[#EDE7E2] flex items-center justify-center">
              <QrCode className="w-32 h-32 text-[#251613]" />
            </div>
            <p className="text-xs font-semibold text-[#6E6462] mt-3">
              Scan with your phone camera to download demo build
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <StoreButton
              store="apple"
              variant="light"
              onClick={() => alert("Demo link: Apple App Store download initiated.")}
            />
            <StoreButton
              store="google"
              variant="light"
              onClick={() => alert("Demo link: Google Play Store download initiated.")}
            />
          </div>

          <p className="text-[11px] text-[#9B918F]">
            * Note: Travellers app is currently in community private beta. Downloading gives instant demo access.
          </p>
        </div>
      </Modal>

      {/* Modal 2: Traveler Profile Inspection Modal */}
      {selectedTraveler && (
        <Modal
          isOpen={!!selectedTraveler}
          onClose={() => setSelectedTraveler(null)}
          title={selectedTraveler.name}
          subtitle={`Traveller from ${selectedTraveler.country}`}
        >
          <div className="space-y-5">
            {/* Header with Avatar & Status */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#FF5B3D]/30 shadow-md">
                <Image
                  src={selectedTraveler.avatar}
                  alt={selectedTraveler.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#251613]">
                  {selectedTraveler.name}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-[#6E6462]">
                  <MapPin className="w-3.5 h-3.5 text-[#FF5B3D]" />
                  <span>{selectedTraveler.location || selectedTraveler.country}</span>
                </div>
                <div className="flex items-center gap-3 mt-1.5 text-xs">
                  <span className="font-semibold text-[#251613]">
                    {selectedTraveler.tripsCount || 18} Trips
                  </span>
                  <span>•</span>
                  <span className="font-semibold text-[#FF5B3D]">
                    {selectedTraveler.followers || "5.2k"} Followers
                  </span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="p-4 bg-[#FFF8F2] rounded-2xl border border-[#EDE7E2]">
              <p className="text-xs sm:text-sm text-[#251613] leading-relaxed">
                {selectedTraveler.bio ||
                  "Passionate explorer wandering around mountain spots, seeking travel buddies for weekend hikes and cultural explorations."}
              </p>
            </div>

            {/* Recent Travel Photos */}
            {selectedTraveler.recentImages && (
              <div>
                <p className="text-xs font-bold text-[#6E6462] mb-2 uppercase tracking-wider">
                  Recent Memories
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {selectedTraveler.recentImages.map((img, i) => (
                    <div
                      key={i}
                      className="relative h-28 rounded-xl overflow-hidden border border-[#EDE7E2]"
                    >
                      <Image
                        src={img}
                        alt="memory"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="md"
                className="flex-1 rounded-xl"
                onClick={() => {
                  alert(
                    `Connecting with ${selectedTraveler.name}! Conversation request sent.`
                  );
                  setSelectedTraveler(null);
                }}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Message Buddy</span>
              </Button>
              <Button
                variant="outline"
                size="md"
                className="rounded-xl px-4"
                onClick={() => {
                  alert(`Followed ${selectedTraveler.name}!`);
                }}
              >
                <Heart className="w-4 h-4 text-[#FF5B3D]" />
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Modal 3: Pricing Plan Checkout Demo Modal */}
      {selectedPlan && (
        <Modal
          isOpen={!!selectedPlan}
          onClose={() => setSelectedPlan(null)}
          title={`Join ${selectedPlan.plan.name} Plan`}
          subtitle={`Billed ${selectedPlan.isAnnual ? "Annually" : "Monthly"}`}
        >
          <div className="space-y-5">
            <div className="p-5 bg-[#FFF8F2] rounded-2xl border border-[#EDE7E2] flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-[#6E6462] uppercase tracking-wider">
                  Total Demo Price
                </p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-extrabold text-[#251613]">
                    $
                    {selectedPlan.isAnnual
                      ? selectedPlan.plan.annualPrice
                      : selectedPlan.plan.monthlyPrice}
                  </span>
                  <span className="text-xs text-[#6E6462]">/month</span>
                </div>
              </div>

              {selectedPlan.isAnnual && (
                <span className="text-xs font-bold bg-[#FF5B3D] text-white px-2.5 py-1 rounded-full">
                  20% Savings Applied
                </span>
              )}
            </div>

            <div>
              <p className="text-xs font-bold text-[#6E6462] mb-3 uppercase tracking-wider">
                Included with this plan:
              </p>
              <ul className="space-y-2">
                {selectedPlan.plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-[#251613]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5B3D]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                className="w-full rounded-xl"
                onClick={() => {
                  alert(
                    `Congratulations! You've activated the demo trial for ${selectedPlan.plan.name} plan.`
                  );
                  setSelectedPlan(null);
                }}
              >
                Start 14-Day Free Demo Trial
              </Button>
              <p className="text-[11px] text-center text-[#9B918F] mt-2">
                * No credit card required. This is an interactive product demo.
              </p>
            </div>
          </div>
        </Modal>
      )}

      {/* Modal 4: Destination Detail Modal */}
      {selectedDestination && (
        <Modal
          isOpen={!!selectedDestination}
          onClose={() => setSelectedDestination(null)}
          title={currentDest.name}
          subtitle={currentDest.location}
        >
          <div className="space-y-4">
            <div className="relative h-48 w-full rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={currentDest.image}
                alt={currentDest.name}
                fill
                className="object-cover"
              />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#FF5B3D] text-xs font-bold px-2.5 py-1 rounded-full">
                {currentDest.tag || "Popular Spot"}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#6E6462] leading-relaxed">
              Famous for breath-taking cloud valleys, golden sunsets over green rolling ridges, and vibrant local cottage culture. Connect with fellow travelers planning excursions to this spot.
            </p>

            <div className="p-3 bg-[#FFF8F2] rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 font-bold text-[#251613]">
                <Users className="w-4 h-4 text-[#FF5B3D]" />
                <span>{currentDest.visitorsCount}</span>
              </div>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  alert(`You are now checked in to ${currentDest.name}!`);
                  setSelectedDestination(null);
                }}
              >
                Join Trip Group
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Modal 5: Feature Detail Modal */}
      {activeFeatureTitle && (
        <Modal
          isOpen={!!activeFeatureTitle}
          onClose={() => setActiveFeatureTitle(null)}
          title={activeFeatureTitle}
          subtitle="Travellers Community Feature Details"
        >
          <div className="space-y-4">
            <div className="p-4 bg-[#FFF8F2] rounded-2xl border border-[#EDE7E2]">
              <p className="text-sm text-[#251613] leading-relaxed">
                {activeFeatureTitle === "Sign Up" &&
                  "Create your personalized traveller profile in under a minute. Set your travel style, destinations on your bucket list, and discover instant matches."}
                {activeFeatureTitle === "Create Events" &&
                  "Host group treks, sunset photo walks, or coffee meetups in any city or valley. Fellow registered travelers can RSVP and join your journey."}
                {activeFeatureTitle === "Share Memories" &&
                  "Publish photo stories, geotagged trails, and honest reviews. Build your travel journal and inspire thousands in the Travellers community."}
              </p>
            </div>
            <Button
              variant="primary"
              size="md"
              className="w-full rounded-xl"
              onClick={() => setActiveFeatureTitle(null)}
            >
              Explore in App
            </Button>
          </div>
        </Modal>
      )}

      {/* Modal 6: Add Buddy Modal */}
      <Modal
        isOpen={isAddBuddyOpen}
        onClose={() => setIsAddBuddyOpen(false)}
        title="Find a Travel Buddy"
        subtitle="Search travellers by destination, travel style or interests"
      >
        <div className="space-y-4">
          {!buddyAdded ? (
            <>
              <div>
                <label
                  htmlFor="buddy-input"
                  className="block text-xs font-bold text-[#6E6462] uppercase tracking-wider mb-2"
                >
                  Destination or Buddy Username
                </label>
                <input
                  id="buddy-input"
                  type="text"
                  value={buddyInput}
                  onChange={(e) => setBuddyInput(e.target.value)}
                  placeholder="e.g. Sajek Valley, Alex, England"
                  className="w-full px-4 py-3 rounded-xl border border-[#EDE7E2] bg-[#FAF8F5] text-sm text-[#251613] focus:outline-none focus:border-[#FF5B3D]"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {["Sajek Valley", "Solo Backpacking", "Photography", "Europe"].map(
                  (tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setBuddyInput(tag)}
                      className="text-xs bg-[#FFF8F2] text-[#FF5B3D] px-2.5 py-1 rounded-lg border border-[#FF5B3D]/20 hover:bg-[#FFECE0]"
                    >
                      #{tag}
                    </button>
                  )
                )}
              </div>

              <Button
                variant="primary"
                size="md"
                className="w-full rounded-xl mt-2"
                onClick={() => {
                  if (buddyInput.trim()) {
                    setBuddyAdded(true);
                  } else {
                    alert("Please enter a destination or interest first.");
                  }
                }}
              >
                Search Travel Buddies
              </Button>
            </>
          ) : (
            <div className="text-center py-4 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#251613]">
                Matches Found for &ldquo;{buddyInput}&rdquo;!
              </h4>
              <p className="text-xs text-[#6E6462]">
                We found 14 travellers heading to {buddyInput} this month. Open the app to view their itineraries.
              </p>
              <Button
                variant="primary"
                size="md"
                className="rounded-xl mt-2"
                onClick={() => {
                  setIsAddBuddyOpen(false);
                  setIsAppModalOpen(true);
                }}
              >
                Connect in App
              </Button>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
