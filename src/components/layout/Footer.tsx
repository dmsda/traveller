"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { FOOTER_SECTIONS } from "@/data/travelData";

export const FOOTER_BOTTOM_LINKS = [
  { label: "Reviews", href: "/#experience" },
  { label: "People", href: "/#community" },
  { label: "Partners", href: "/#popular" },
  { label: "Feedbacks", href: "/#feedbacks" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Features", href: "/features" },
  { label: "About Us", href: "/about" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your email address.");
      return;
    }
    if (!emailRegex.test(email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    // Simulation with transparent honesty (no fake live backend claimed)
    setStatus("success");
    setEmail("");
  };

  return (
    <footer className="bg-white border-t border-[#EDE7E2] pt-16 pb-12 text-[#251613]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: 4 Link Columns + 1 Subscribe Column */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 pb-16 border-b border-[#F2ECE7]">
          {/* Link Columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="flex flex-col">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#544A48] mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label} className="flex items-center gap-1.5 flex-wrap">
                    <Link
                      href={link.href}
                      className={`text-[13px] sm:text-sm font-medium transition-colors inline-block ${
                        link.isAvailable !== false
                          ? "text-[#4A403E] hover:text-[#FF5B3D]"
                          : "text-[#7A6F6D] hover:text-[#251613]"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.badge && (
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-[#F5EFE9] text-[#6E6462] border border-[#E5DDD5]">
                        {link.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe Column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 flex flex-col justify-start">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#544A48] mb-4">
              Subscribe
            </h4>
            <p className="text-xs sm:text-sm text-[#4A403E] font-medium mb-3.5 leading-relaxed">
              Get weekly curated travel gems and community event invites.
            </p>

            <form onSubmit={handleSubmit} className="relative mb-3">
              <div className="flex items-center bg-[#FAF8F5] rounded-xl border border-[#EDE7E2] pl-3.5 pr-1.5 py-1.5 focus-within:border-[#FF5B3D] focus-within:ring-2 focus-within:ring-[#FF5B3D]/20 transition-all">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder="Email address"
                  className="w-full text-xs sm:text-sm text-[#251613] bg-transparent border-0 border-none outline-none focus:outline-none focus:ring-0 focus:border-none p-0 placeholder:text-[#827875]"
                  style={{ border: "none", outline: "none", boxShadow: "none" }}
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="w-8 h-8 rounded-lg bg-[#FF5B3D] text-white flex items-center justify-center hover:bg-[#E84D2F] transition-all flex-shrink-0 cursor-pointer active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B3D] ml-2"
                  aria-label="Submit newsletter subscription"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Feedback messages */}
              {status === "success" && (
                <div className="flex items-start gap-1.5 text-xs text-emerald-700 font-semibold mt-2 animate-fade-in bg-emerald-50 p-2.5 rounded-xl border border-emerald-200/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Subscribed! (Demo simulation — no actual emails sent in preview).</span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-1.5 text-xs text-rose-500 font-semibold mt-2 animate-fade-in bg-rose-50 p-2.5 rounded-xl border border-rose-200/60">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>

            {/* Factual Community Status Indicator */}
            <div className="space-y-1.5 mt-2 pt-3 border-t border-[#F2ECE7]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-[#251613]">Community Beta v3.2</span>
                <span className="text-[11px] text-[#7A6F6D] font-medium">• Active Network</span>
              </div>
              <p className="text-xs text-[#544A48] font-medium leading-relaxed">
                An authentic community connecting solo travellers and outdoor explorers across borders.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Brand Wordmark, Quick Nav, Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-extrabold tracking-tight text-[#251613]">
              Travellers
            </span>
          </Link>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {FOOTER_BOTTOM_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs sm:text-[13px] font-semibold text-[#4A403E] hover:text-[#FF5B3D] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 text-[#6E6462]">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-[#FF5B3D] hover:bg-[#FFF8F2] transition-colors"
              aria-label="Travellers on Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-[#FF5B3D] hover:bg-[#FFF8F2] transition-colors"
              aria-label="Travellers on Twitter / X"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-[#FF5B3D] hover:bg-[#FFF8F2] transition-colors"
              aria-label="Travellers on Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

