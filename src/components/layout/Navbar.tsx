"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/Button";

interface NavbarProps {
  onGetAppClick?: () => void;
}

export const MAIN_NAV_ITEMS = [
  { label: "Reviews", href: "/#experience" },
  { label: "People", href: "/#community" },
  { label: "Partners", href: "/#popular" },
  { label: "Feedbacks", href: "/#feedbacks" },
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/#pricing" },
];

export const MOBILE_EXTRA_LINKS = [
  { label: "Product Showcase", href: "/showcase" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export const Navbar: React.FC<NavbarProps> = ({ onGetAppClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleGetApp = () => {
    if (onGetAppClick) {
      onGetAppClick();
    } else {
      router.push("/#download");
    }
  };

  const isLinkActive = (href: string) => {
    if (href.startsWith("/#")) {
      return false;
    }
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EDE7E2]/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Wordmark Logo */}
        <Link
          href="/"
          className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B3D] rounded-lg"
          aria-label="Travellers Home"
        >
          <span className="text-xl sm:text-[22px] font-extrabold tracking-tight text-[#251613]">
            Travellers
          </span>
        </Link>

        {/* Desktop Navigation Links (Responsive Gaps & Clean Type) */}
        <nav className="hidden md:flex items-center gap-3.5 lg:gap-6 xl:gap-7" aria-label="Main Navigation">
          {MAIN_NAV_ITEMS.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative flex flex-col items-center text-xs lg:text-[13px] font-semibold transition-colors py-1 ${
                  active
                    ? "text-[#FF5B3D]"
                    : "text-[#544A48] hover:text-[#251613]"
                }`}
              >
                <span>{link.label}</span>
                {active ? (
                  <span
                    className="w-3.5 h-[2.5px] bg-[#FF5B3D] rounded-full mt-1 animate-fade-in"
                    aria-hidden="true"
                  />
                ) : (
                  <span className="w-3.5 h-[2.5px] bg-transparent mt-1" aria-hidden="true" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <Button
            variant="primary"
            size="sm"
            onClick={handleGetApp}
            className="rounded-xl px-5 py-2.5 text-xs font-bold shadow-sm hover:shadow-coral-glow"
          >
            Get the App
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl text-[#251613] hover:bg-[#FFF8F2] focus:outline-none focus:ring-2 focus:ring-[#FF5B3D]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Smooth Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white border-b border-[#EDE7E2] px-6 py-6 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col gap-2">
              {MAIN_NAV_ITEMS.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold py-2.5 px-2 rounded-xl flex items-center justify-between transition-colors hover:bg-[#FFF8F2] border-b border-[#EDE7E2]/30 ${
                      active ? "text-[#FF5B3D] bg-[#FFF8F2]" : "text-[#251613]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className={`w-4 h-4 ${active ? "text-[#FF5B3D]" : "text-[#6E6462]"}`} />
                  </Link>
                );
              })}

              {/* Mobile Extra Links */}
              <div className="pt-3 pb-1 flex gap-4 text-xs font-semibold text-[#544A48] px-2">
                {MOBILE_EXTRA_LINKS.map((extra) => (
                  <Link
                    key={extra.label}
                    href={extra.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[#FF5B3D] underline"
                  >
                    {extra.label}
                  </Link>
                ))}
              </div>

              <div className="pt-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    setIsOpen(false);
                    handleGetApp();
                  }}
                  className="w-full rounded-2xl shadow-coral-glow"
                >
                  Get the App
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


