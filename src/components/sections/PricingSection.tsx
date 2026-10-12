"use client";

import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { PRICING_PLANS, PricingPlan } from "@/data/travelData";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan, isAnnual: boolean) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlan,
}) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-16 sm:py-20 lg:py-24 px-3 sm:px-6 lg:px-8 max-w-[1360px] mx-auto">
      {/* Warm Cream Rounded Section Container */}
      <div className="bg-[#FFF8F2] rounded-[36px] sm:rounded-[44px] lg:rounded-[52px] px-6 sm:px-10 lg:px-14 py-16 sm:py-20 border border-[#F5EDE6]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <SectionEyebrow align="center">PRICING TABLE</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#251613] tracking-tight mt-3">
            Choose the plan that’s right for you
          </h2>

            {/* Monthly / Annual Toggle Switch */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8">
            <span
              id="bill-monthly-label"
              className={`text-sm sm:text-base font-bold transition-colors cursor-pointer select-none ${
                !isAnnual ? "text-[#251613]" : "text-[#9B918F]"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Bill Monthly
            </span>

            <button
              type="button"
              role="switch"
              aria-checked={isAnnual}
              aria-labelledby="bill-monthly-label bill-annually-label"
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full p-1 border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B3D] focus-visible:ring-offset-2 ${
                isAnnual ? "bg-[#FF5B3D]" : "bg-[#DDD6CE]"
              }`}
            >
              <span className="sr-only">Toggle billing period between monthly and annual</span>
              <motion.span
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="pointer-events-none inline-block h-6 w-6 rounded-full bg-white shadow-md will-change-transform"
              />
            </button>

            <div className="flex items-center gap-2">
              <span
                id="bill-annually-label"
                className={`text-sm sm:text-base font-bold transition-colors cursor-pointer select-none ${
                  isAnnual ? "text-[#251613]" : "text-[#9B918F]"
                }`}
                onClick={() => setIsAnnual(true)}
              >
                Bill Annually
              </span>
              <span className="text-xs font-bold bg-[#FF5B3D]/10 text-[#FF5B3D] px-2.5 py-0.5 rounded-full border border-[#FF5B3D]/20">
                Save 20%
              </span>
            </div>
          </div>
        </motion.div>

        {/* Single 3-Card Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto"
        >
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const isFeatured = plan.isPopular;

            return (
              <motion.div
                key={plan.id}
                variants={staggerItem}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                className={`relative bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between h-full transition-shadow duration-200 ${
                  isFeatured
                    ? "shadow-card-elevated border-2 border-[#FF5B3D]/30 md:-translate-y-2"
                    : "shadow-soft border border-[#EDE7E2] hover:border-[#FF5B3D]/40"
                }`}
              >
                <div>
                  {/* Price Row */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#251613]">
                      $<motion.span
                        key={price}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        {price}
                      </motion.span>
                    </span>
                    <span className="text-sm font-semibold text-[#6E6462]">
                      /month
                    </span>
                  </div>

                  {/* Plan Name & Description */}
                  <h3 className="text-xl font-extrabold text-[#251613] mt-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[#6E6462] leading-relaxed mt-2 mb-6 min-h-[44px]">
                    {plan.description}
                  </p>

                  <div className="w-full h-px bg-[#F2ECE7] mb-6" />

                  {/* Features Checklist */}
                  <ul className="space-y-3.5 mb-8" aria-label={`${plan.name} features`}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#251613]">
                        <Check className="w-4 h-4 text-[#FF5B3D] stroke-[2.5] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug text-[#4A3F3D]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Get Started Button */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectPlan(plan, isAnnual)}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B3D] focus-visible:ring-offset-2 ${
                    isFeatured
                      ? "bg-[#FF5B3D] text-white hover:bg-[#E84D2F] shadow-coral-glow"
                      : "bg-white text-[#251613] hover:bg-[#FFF8F2] border border-[#EDE7E2] hover:border-[#FF5B3D]/40"
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
