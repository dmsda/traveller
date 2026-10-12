"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { AlertCircle, ChevronRight, FileText, CheckCircle2 } from "lucide-react";

export interface LegalSectionItem {
  id: string;
  title: string;
}

interface LegalLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated?: string;
  sections: LegalSectionItem[];
  children: React.ReactNode;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  eyebrow,
  title,
  description,
  sections,
  children,
}) => {
  const [activeSection, setActiveSection] = useState<string>(
    sections[0]?.id || ""
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#251613]">
      <Navbar />

      <main className="flex-1">
        {/* Editorial Hero Header */}
        <div className="bg-[#FFF8F2] border-b border-[#EDE7E2] py-14 sm:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-[#9B918F] mb-6">
              <Link href="/" className="hover:text-[#FF5B3D] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#251613]">{title}</span>
            </nav>

            <SectionEyebrow hasAccentBar={false}>{eyebrow}</SectionEyebrow>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#251613] tracking-tight mt-3 mb-4">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-[#6E6462] max-w-3xl leading-relaxed">
              {description}
            </p>

            {/* Mandatory Draft Notice Banner */}
            <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 flex items-start gap-3.5 shadow-sm">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-[13px] leading-relaxed">
                <p className="font-bold text-amber-950">
                  DOCUMENT STATUS: DRAFT FOR REVIEW
                </p>
                <p className="mt-1 text-amber-900/90">
                  This document is an architectural draft prepared for product owner and legal counsel review. It reflects current prototype capabilities, avoids speculative third-party commitments, and awaits formal corporate verification before commercial launch.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Body with Sticky Table of Contents */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Sidebar: Sticky Table of Contents */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-28 bg-[#FAF8F5] border border-[#EDE7E2] rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#EDE7E2]">
                  <FileText className="w-4 h-4 text-[#FF5B3D]" />
                  <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#251613]">
                    Table of Contents
                  </h2>
                </div>
                <nav className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
                  {sections.map((s, idx) => {
                    const isActive = activeSection === s.id;
                    return (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(s.id);
                          if (el) {
                            el.scrollIntoView({ behavior: "smooth" });
                            setActiveSection(s.id);
                          }
                        }}
                        className={`block text-xs sm:text-[13px] py-1.5 px-2.5 rounded-lg font-medium transition-all ${
                          isActive
                            ? "bg-[#FF5B3D] text-white font-bold shadow-sm"
                            : "text-[#6E6462] hover:bg-[#FFF8F2] hover:text-[#251613]"
                        }`}
                      >
                        <span className="opacity-75 mr-2">
                          {String(idx + 1).padStart(2, "0")}.
                        </span>
                        {s.title}
                      </a>
                    );
                  })}
                </nav>

                {/* Audit confirmation card */}
                <div className="mt-6 pt-5 border-t border-[#EDE7E2] text-[11px] text-[#9B918F] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[#251613] font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Factual Implementation Audit</span>
                  </div>
                  <p>
                    Verified against current Next.js client-side prototype. No unverified trackers or third-party cookies detected.
                  </p>
                </div>
              </div>
            </aside>

            {/* Right: Rich Legal Prose Content */}
            <article className="lg:col-span-8 order-1 lg:order-2 max-w-none text-[#251613] leading-relaxed">
              <div className="space-y-12">{children}</div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
