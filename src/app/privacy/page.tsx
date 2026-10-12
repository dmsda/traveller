import React from "react";
import type { Metadata } from "next";
import { LegalLayout, LegalSectionItem } from "@/components/layout/LegalLayout";
import { AlertCircle, CheckCircle2, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Travellers",
  description:
    "Read the Travellers Privacy Policy to understand how personal information is handled when using our website and services.",
  robots: {
    index: false,
    follow: true,
  },
};

const PRIVACY_SECTIONS: LegalSectionItem[] = [
  { id: "intro", title: "Introduction & Scope" },
  { id: "collection", title: "Information We Collect" },
  { id: "usage", title: "How We Use Information" },
  { id: "cookies", title: "Cookies & Analytics Audit" },
  { id: "third-party", title: "Third-Party Services" },
  { id: "retention", title: "Data Retention" },
  { id: "security", title: "Data Security" },
  { id: "rights", title: "User Rights" },
  { id: "children", title: "Children’s Privacy" },
  { id: "updates", title: "Policy Updates" },
  { id: "decisions", title: "Items Requiring Confirmation" },
  { id: "contact", title: "Contact Information" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      eyebrow="LEGAL & TRANSPARENCY"
      title="Privacy Policy"
      description="Your privacy matters. Learn how information is handled when you interact with the Travellers website, mobile prototype, and community features."
      sections={PRIVACY_SECTIONS}
    >
      {/* 1. Introduction & Scope */}
      <section id="intro" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          1. Introduction & Document Scope
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          Welcome to Travellers (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). This Privacy Policy explains our current data handling posture and our planned privacy principles for the Travellers community platform.
        </p>
        <p className="text-[#6E6462] leading-relaxed">
          This document applies to your interactions with the Travellers website located at this domain and associated preview applications. As Travellers continues active prototype development, we maintain strict architectural separation between features currently live on our frontend demonstration and planned production capabilities.
        </p>
      </section>

      {/* 2. Information We Collect */}
      <section id="collection" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          2. Information We Collect (Actual vs. Planned)
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          In alignment with our engineering audit, we categorize data collection strictly based on verified system behavior:
        </p>

        <div className="space-y-4 mt-4">
          <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EDE7E2]">
            <h3 className="text-sm font-bold text-[#251613] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              A. Currently Active on This Website
            </h3>
            <ul className="mt-2 space-y-2 text-xs sm:text-sm text-[#6E6462] list-disc list-inside">
              <li>
                <strong className="text-[#251613]">Newsletter Input:</strong> If you enter an email address in the footer form, it is validated client-side and simulated in demonstration mode. No live remote server database currently stores or broadcasts this email.
              </li>
              <li>
                <strong className="text-[#251613]">Technical Hosting Logs:</strong> Standard HTTP request logs (IP address, user agent, requested URL) generated automatically by your web browser and processed ephemerally by hosting infrastructure for network stability.
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EDE7E2]">
            <h3 className="text-sm font-bold text-[#251613] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              B. Planned for Commercial Platform Launch
            </h3>
            <ul className="mt-2 space-y-2 text-xs sm:text-sm text-[#6E6462] list-disc list-inside">
              <li>
                <strong className="text-[#251613]">Account Registration:</strong> Name, chosen traveler handle, verified email address, and optional biographical notes.
              </li>
              <li>
                <strong className="text-[#251613]">User-Generated Content:</strong> Travel stories, photography, and event RSVPs uploaded voluntarily to the community feed.
              </li>
              <li>
                <strong className="text-[#251613]">Location Check-ins:</strong> Optional, user-initiated destination tagging (e.g. Sajek Hill). Real-time GPS background tracking is not performed.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. How We Use Information */}
      <section id="usage" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          3. How We Use Information
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          We use data solely for direct functional requirements:
        </p>
        <ul className="space-y-2 text-sm text-[#6E6462] list-disc list-inside">
          <li>Delivering core website interfaces, responsive styling, and navigation.</li>
          <li>Preventing abuse, malicious traffic, and automated scraping.</li>
          <li>Testing frontend interaction flows (e.g. pricing toggle, buddy preview modal).</li>
        </ul>
        <p className="text-[#6E6462] leading-relaxed mt-2">
          We do not sell personal data, license user profiles to third-party data brokers, or deploy automated profiling tools.
        </p>
      </section>

      {/* 4. Cookies & Analytics */}
      <section id="cookies" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          4. Cookies and Analytics Audit
        </h2>
        <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold mb-1">
              Audit Finding: Zero Tracking Cookies Active
            </strong>
            This website currently employs no advertising cookies, no retargeting pixels, and no third-party behavioral analytics suites (such as Google Analytics or Meta Pixel). Local client storage is used strictly for non-sensitive UI states where necessary.
          </div>
        </div>
      </section>

      {/* 5. Third-Party Services */}
      <section id="third-party" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          5. Third-Party Services
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          The current frontend deployment integrates only the following direct third-party asset provider:
        </p>
        <ul className="space-y-2 text-sm text-[#6E6462] list-disc list-inside">
          <li>
            <strong className="text-[#251613]">Google Fonts:</strong> The Plus Jakarta Sans font family is loaded via Next.js Font Optimization to provide consistent typography. Font assets are downloaded during build time and served locally where possible.
          </li>
        </ul>
        <p className="text-[#6E6462] leading-relaxed">
          No external ad networks, payment processors, or data telemetry services receive requests from this prototype.
        </p>
      </section>

      {/* 6. Data Retention */}
      <section id="retention" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          6. Data Retention Policy
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          Because this deployment operates as a client-side prototype with demonstration feedback, no persistent user profiles or personal message archives are currently stored on backend servers.
        </p>
        <p className="text-[#6E6462] leading-relaxed">
          Prior to the full production rollout, exact retention schedules for registered accounts, photos, and messages will be finalized and documented in this section.
        </p>
      </section>

      {/* 7. Data Security */}
      <section id="security" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          7. Data Security
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          We adopt security-by-design principles:
        </p>
        <ul className="space-y-2 text-sm text-[#6E6462] list-disc list-inside">
          <li>All web traffic is enforced over HTTPS (TLS encryption in transit).</li>
          <li>Minimalist architecture eliminating unnecessary backend attack surfaces in preview mode.</li>
          <li>Future authentication will employ industry-standard hashed credentials and token-based authorization.</li>
        </ul>
      </section>

      {/* 8. User Rights */}
      <section id="rights" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          8. User Rights
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          Depending on your jurisdiction, you may hold legal rights regarding personal data, including the right to request access, correction, deletion, or restriction of processing.
        </p>
        <p className="text-[#6E6462] leading-relaxed">
          Upon commercial launch of the Travellers membership system, account holders will have direct self-service tools within settings to download their data archive or delete their account permanently.
        </p>
      </section>

      {/* 9. Children's Privacy */}
      <section id="children" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          9. Children’s Privacy
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          Travellers is intended for solo travelers, backpackers, and community explorers aged 18 and older (or the age of legal majority in your country). We do not knowingly collect personal data from minors.
        </p>
      </section>

      {/* 10. Policy Updates */}
      <section id="updates" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          10. Policy Updates
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          We may update this draft policy as additional platform features, databases, or payment gateways are incorporated. Substantive updates will be clearly reflected on this page alongside updated revision notes.
        </p>
      </section>

      {/* 11. Decisions Requiring Confirmation */}
      <section id="decisions" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          11. Items Requiring Product Owner Confirmation
        </h2>
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-3">
          <p className="font-bold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            Checklist before Production Publication:
          </p>
          <ul className="space-y-1.5 list-disc list-inside text-amber-900/90">
            <li>Confirm registered legal entity name and physical registered office address.</li>
            <li>Select operational email newsletter service provider (e.g. Resend, Sendgrid) and data processor agreement.</li>
            <li>Confirm specific data protection officer (DPO) contact if operating within EU/EEA or UK.</li>
            <li>Determine formal statutory retention duration for inactive user accounts.</li>
          </ul>
        </div>
      </section>

      {/* 12. Contact Information */}
      <section id="contact" className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold text-[#251613] pb-2 border-b border-[#EDE7E2]">
          12. Contact Information
        </h2>
        <p className="text-[#6E6462] leading-relaxed">
          For privacy inquiries, technical audits, or suggestions regarding this draft policy:
        </p>
        <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EDE7E2] inline-flex items-center gap-3 text-sm font-semibold text-[#251613]">
          <Mail className="w-4 h-4 text-[#FF5B3D]" />
          <span>privacy@travellers.community (Draft placeholder awaiting domain setup)</span>
        </div>
      </section>
    </LegalLayout>
  );
}
