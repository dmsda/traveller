import type { Metadata } from "next";
import { ShowcaseNavbar } from "@/components/showcase/ShowcaseNavbar";
import { ShowcaseHero } from "@/components/showcase/ShowcaseHero";
import { ShowcaseMainMockup } from "@/components/showcase/ShowcaseMainMockup";
import { ShowcaseFeatures } from "@/components/showcase/ShowcaseFeatures";
import { ShowcaseResponsive } from "@/components/showcase/ShowcaseResponsive";
import { ShowcaseDesignSystem } from "@/components/showcase/ShowcaseDesignSystem";
import { ShowcaseProjectInfo } from "@/components/showcase/ShowcaseProjectInfo";
import { ShowcaseCta } from "@/components/showcase/ShowcaseCta";
import { ShowcaseFooter } from "@/components/showcase/ShowcaseFooter";

export const metadata: Metadata = {
  title: "Travellers Showcase — Digital Product Presentation & Design System",
  description:
    "An editorial showcase presenting the Travellers travel community platform, featuring desktop and mobile mockups, design tokens, responsive architecture, and technology specs.",
  openGraph: {
    title: "Travellers Showcase — Digital Product Presentation & Design System",
    description:
      "A Better Way to Explore the World Together. Travellers is an open-source travel community website experience built with Next.js 16 and Tailwind CSS.",
    type: "website",
  },
};

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-white text-[#251613] selection:bg-[#FF5B3D]/20 selection:text-[#FF5B3D] overflow-x-hidden">
      {/* 1. Minimalist Navigation Bar */}
      <ShowcaseNavbar />

      <main id="main-content">
        {/* 2. Hero Section */}
        <ShowcaseHero />

        {/* 3. Main Desktop & Mobile Mockups */}
        <ShowcaseMainMockup />

        {/* 4. Core Feature Highlights */}
        <ShowcaseFeatures />

        {/* 5. Responsive Design Breakdown */}
        <ShowcaseResponsive />

        {/* 6. Design System Snapshot (Colors, Typography, UI) */}
        <ShowcaseDesignSystem />

        {/* 7. Project Information & Tech Stack */}
        <ShowcaseProjectInfo />

        {/* 8. Closing CTA */}
        <ShowcaseCta />
      </main>

      {/* 9. Showcase Footer */}
      <ShowcaseFooter />
    </div>
  );
}
