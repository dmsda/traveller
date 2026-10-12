"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GithubIcon } from "./GithubIcon";

// Official GitHub repository link
export const GITHUB_REPO_URL = "https://github.com/dmsda/traveller";

const SHOWCASE_NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Mockups", href: "#mockups" },
  { label: "Features", href: "#features" },
  { label: "Responsive", href: "#responsive" },
  { label: "Design System", href: "#design-system" },
  { label: "Tech Stack", href: "#tech-stack" },
];

export const ShowcaseNavbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#EDE7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Wordmark & Open-Source Badge */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform active:scale-95"
            aria-label="Travellers home"
          >
            <span className="text-xl sm:text-2xl font-black text-[#251613] tracking-tight group-hover:text-[#FF5B3D] transition-colors">
              Travellers
            </span>
          </Link>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFF8F2] border border-[#FF5B3D]/30 text-[10px] sm:text-[11px] font-bold text-[#FF5B3D] uppercase tracking-wider">
            <Layers className="w-3 h-3" />
            Showcase
          </span>
        </div>

        {/* Desktop Anchor Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-[13px] font-semibold text-[#544A48]">
          {SHOWCASE_NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#FF5B3D] transition-colors py-1 relative hover:-translate-y-0.5 transform duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#251613] bg-[#FAF8F5] border border-[#EDE7E2] hover:border-[#251613] hover:bg-white transition-all shadow-2xs"
            title="View on GitHub"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#FF5B3D] hover:bg-[#E84D2F] transition-all shadow-sm hover:shadow-coral-glow"
          >
            <span>Visit Website</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/"
            className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#FF5B3D]"
          >
            Live Site
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl text-[#251613] hover:bg-[#FFF8F2] focus:outline-none focus:ring-2 focus:ring-[#FF5B3D]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-b border-[#EDE7E2] px-6 py-5 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col gap-2.5">
              {SHOWCASE_NAV_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 px-3 rounded-lg text-sm font-semibold text-[#251613] hover:bg-[#FFF8F2] hover:text-[#FF5B3D] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#EDE7E2] flex flex-col gap-2">
                <Link
                  href="/"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center text-white bg-[#FF5B3D]"
                >
                  Visit Main Website
                </Link>
                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center text-[#251613] bg-[#FAF8F5] border border-[#EDE7E2] flex items-center justify-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
