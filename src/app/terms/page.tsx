import React from "react";
import type { Metadata } from "next";
import { LegalLayout, LegalSectionItem } from "@/components/layout/LegalLayout";
import { AlertCircle, ShieldAlert, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Travellers",
  description:
    "Review the Travellers Terms of Service to understand the conditions for accessing and using the website and related services.",
  robots: {
    index: false,
    follow: true,
  },
};

const TERMS_SECTIONS: LegalSectionItem[] = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "service", title: "About the Service" },
  { id: "responsibilities", title: "User Responsibilities" },
  { id: "ugc", title: "User-Generated Content" },
  { id: "safety", title: "Community Safety" },
  { id: "events", title: "Events & Activity Disclaimer" },
  { id: "ip", title: "Intellectual Property" },
  { id: "third-party", title: "Third-Party Links" },
  { id: "availability", title: "Service Availability" },
  { id: "termination", title: "Account Suspension" },
  { id: "disclaimer", title: "Disclaimers of Warranties" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "changes", title: "Changes to Terms" },
  { id: "governing-law", title: "Governing Law (Confirmation)" },
  { id: "contact", title: "Contact Information" },
];

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      eyebrow="LEGAL & TERMS"
      title="Terms of Service"
      description="Understand the terms, guidelines, and mutual responsibilities associated with accessing the Travellers website, community features, and digital services."
      sections={TERMS_SECTIONS}
    >
      {/* 1. Acceptance of Terms */}
      <section id="acceptance" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          1. Acceptance of Terms
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          By accessing or using the Travellers website, applications, or associated digital services, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. If you do not agree to these terms, you must not use or access the services.
        </p>
        <p className="text-[#6E6462] leading-relaxed">
          This document currently represents an architectural draft under review. Electronic consent mechanisms and affirmative click-through agreements will be introduced alongside user account registration.
        </p>
      </section>

      {/* 2. About the Service */}
      <section id="service" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          2. About the Service
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          Travellers is a conceptual travel community platform designed to help explorers discover places, connect with travel companions, join community events, and share stories.
        </p>
        <p className="text-[#6E6462] leading-relaxed">
          <strong className="text-[#251613]">Prototype Notice:</strong> Currently, this website provides interactive design demonstrations and preview interfaces. Certain backend capabilities—such as live companion messaging, event booking transactions, and automated buddy matching—are prototypes and do not represent active commercial booking contracts.
        </p>
      </section>

      {/* 3. User Responsibilities */}
      <section id="responsibilities" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          3. User Responsibilities & Conduct
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          When participating in the Travellers community, you agree to:
        </p>
        <ul className="space-y-2 text-sm text-[#6E6462] list-disc list-inside">
          <li>Act respectfully, honestly, and courteously toward fellow travelers and hosts.</li>
          <li>Never impersonate other travelers, falsify travel experience, or misrepresent safety credentials.</li>
          <li>Refrain from publishing spam, commercial solicitations, or unauthorized affiliate promotions.</li>
          <li>Comply with all local environmental conservation guidelines, park rules, and trail laws.</li>
        </ul>
      </section>

      {/* 4. User-Generated Content */}
      <section id="ugc" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          4. User-Generated Content
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          You retain full copyright and ownership of all travel photographs, journals, and commentary you submit to Travellers.
        </p>
        <p className="text-[#6E6462] leading-relaxed">
          By publishing content to public areas of the platform, you grant Travellers a non-exclusive, worldwide, royalty-free license to display, adapt, and distribute your content solely for the purpose of operating and promoting community features. You warrant that your uploads do not infringe upon any third-party copyrights or privacy rights.
        </p>
      </section>

      {/* 5. Community Safety */}
      <section id="safety" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          5. Community Safety & Verification
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          While Travellers encourages authentic peer-to-peer relationships, we do not conduct formal background checks, law-enforcement verifications, or physical fitness assessments of members.
        </p>
        <p className="text-[#6E6462] leading-relaxed">
          You are solely responsible for exercising prudent judgment when meeting fellow travelers in person, sharing transportation, or choosing accommodations.
        </p>
      </section>

      {/* 6. Events & Activity Disclaimer */}
      <section id="events" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          6. Events and Travel Activities Disclaimer
        </h2>
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-2.5">
          <div className="font-bold flex items-center gap-2 text-amber-900">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            CRITICAL OUTDOOR ACTIVITY NOTICE
          </div>
          <p className="leading-relaxed text-amber-900/90">
            Hiking, backpacking, high-altitude trekking, camping, and outdoor exploration carry inherent physical risks, including extreme weather, steep terrain, altitude illness, and unpredictable environmental hazards.
          </p>
          <p className="leading-relaxed text-amber-900/90">
            Community-organized events and member meetups are self-directed gatherings between independent individuals. Travellers is neither a certified tour operator, mountain guide service, travel agency, nor insurer. Travellers accepts no liability for personal injury, illness, property loss, or travel disruptions occurring during private or community journeys.
          </p>
        </div>
      </section>

      {/* 7. Intellectual Property */}
      <section id="ip" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          7. Intellectual Property
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          The Travellers wordmark, brand logos, custom illustrations, design tokens, and software codebase are the intellectual property of Travellers. All rights reserved. You may not copy, reverse-engineer, or commercially exploit platform assets without prior written consent.
        </p>
      </section>

      {/* 8. Third-Party Links */}
      <section id="third-party" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          8. Third-Party Services and Links
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          Our website may contain links to third-party services, trail registries, or social networks. Travellers has no control over and assumes no responsibility for the content, privacy policies, or terms of any external websites.
        </p>
      </section>

      {/* 9. Service Availability */}
      <section id="availability" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          9. Service Availability & Prototype Status
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          We strive for continuous availability, but do not provide explicit Service Level Agreements (SLAs) or uptime guarantees during this preview release. Features may be modified, tested, or temporarily paused without liability.
        </p>
      </section>

      {/* 10. Account Suspension */}
      <section id="termination" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          10. Account Suspension and Termination
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          We reserve the right to suspend or terminate access to any user who violates community guidelines, engages in harassment, or compromises member safety, subject to proportionate review.
        </p>
      </section>

      {/* 11. Disclaimers of Warranties */}
      <section id="disclaimer" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          11. Disclaimers of Warranties
        </h2>
        <p className="text-[#6E6462] leading-relaxed uppercase text-xs font-bold tracking-wide">
          The services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied, including fitness for a particular purpose or non-infringement.
        </p>
      </section>

      {/* 12. Limitation of Liability */}
      <section id="liability" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          12. Limitation of Liability
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          To the maximum extent permitted by applicable law, Travellers and its directors, employees, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your access to or use of the platform.
        </p>
      </section>

      {/* 13. Changes to Terms */}
      <section id="changes" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          13. Changes to Terms
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          We reserve the right to revise these Terms of Service. Notice of substantial revisions will be posted on this page with an updated modification notice.
        </p>
      </section>

      {/* 14. Governing Law */}
      <section id="governing-law" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          14. Governing Law (Requires Confirmation)
        </h2>
        <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EDE7E2] text-xs sm:text-sm text-[#6E6462] space-y-2">
          <p className="font-bold text-[#251613] flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            Decision Pending:
          </p>
          <p>
            The formal jurisdiction and governing law clause must be established by the product owner in consultation with legal counsel prior to commercial launch. No speculative court jurisdiction has been asserted in this draft.
          </p>
        </div>
      </section>

      {/* 15. Contact Information */}
      <section id="contact" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          15. Contact Information
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          If you have questions regarding these Terms of Service or community guidelines:
        </p>
        <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EDE7E2] inline-flex items-center gap-3 text-sm font-semibold text-[#251613]">
          <Mail className="w-4 h-4 text-[#FF5B3D]" />
          <span>legal@travellers.community (Draft placeholder awaiting corporate verification)</span>
        </div>
      </section>
    </LegalLayout>
  );
}
