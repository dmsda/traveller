import React from "react";
import Link from "next/link";
import { GITHUB_REPO_URL } from "./ShowcaseNavbar";
import { GithubIcon } from "./GithubIcon";

export const ShowcaseFooter: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-white border-t border-[#EDE7E2] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#EDE7E2]">
          {/* Logo & Description */}
          <div className="text-center md:text-left space-y-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black text-[#251613] tracking-tight">
                Travellers
              </span>
            </Link>
            <p className="text-xs text-[#544A48] font-medium max-w-sm">
              An open-source travel community website experience designed with editorial elegance.
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#544A48]">
            <Link href="/" className="hover:text-[#FF5B3D] transition-colors">
              Main Website
            </Link>
            <Link href="/about" className="hover:text-[#FF5B3D] transition-colors">
              About Us
            </Link>
            <Link href="/features" className="hover:text-[#FF5B3D] transition-colors">
              Features
            </Link>
            <Link href="/privacy" className="hover:text-[#FF5B3D] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#FF5B3D] transition-colors">
              Terms of Service
            </Link>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#251613] hover:text-[#FF5B3D] transition-colors font-bold"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Bottom Sub-row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E6462] font-medium">
          <p>© {currentYear} Travellers Open-Source Project. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Next.js 16 • Turbopack
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
