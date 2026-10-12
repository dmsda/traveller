"use client";

import React from "react";
import { Code2, Cpu, GitBranch, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/motion";

const TECH_STACK_ITEMS = [
  { name: "Next.js 16.4", role: "Framework with Turbopack & React 19 App Router", category: "Core" },
  { name: "TypeScript 5", role: "Strict type safety across routes & component props", category: "Language" },
  { name: "Tailwind CSS v4", role: "Utility-first design tokens & zero-runtime styles", category: "Styling" },
  { name: "Motion (Framer Motion)", role: "Fluid gestures, route line drawing & reduced-motion fallback", category: "Motion" },
  { name: "Lucide React", role: "Crisp vector icons tailored to editorial travel UI", category: "Icons" },
  { name: "Plus Jakarta Sans", role: "Editorial Google Font via next/font optimization", category: "Typography" },
];

const REPO_SPECS = [
  { label: "Project Name", value: "Travellers" },
  { label: "Category", value: "Travel Community & Discovery Website" },
  { label: "Type", value: "Open-Source Showcase & Web Application" },
  { label: "Multi-Page Routes", value: "6 Static Pages (/, /about, /features, /privacy, /terms, /showcase)" },
  { label: "Responsive Matrix", value: "Audited on Mobile (375-430px), Tablet (768px), Desktop (1440px+)" },
  { label: "Quality Gates", value: "Zero ESLint warnings • 100% Turbopack Build Pass" },
];

export const ShowcaseProjectInfo: React.FC = () => {
  return (
    <section id="tech-stack" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF8F2] border border-[#FF5B3D]/20 text-[11px] font-extrabold uppercase tracking-wider text-[#FF5B3D] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            ENGINEERING SPECIFICATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#251613] tracking-tight">
            Project Information & Tech Stack
          </h2>
          <p className="text-sm sm:text-base text-[#544A48] font-medium mt-3">
            Built using modern full-stack web standards, prioritizing high-performance compilation and accessible design.
          </p>
        </motion.div>

        {/* Technical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Tech Stack Cards */}
          <div className="lg:col-span-7 space-y-3">
            <h3 className="text-lg font-bold text-[#251613] mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-[#FF5B3D]" />
              Modern Web Dependencies
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TECH_STACK_ITEMS.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EDE7E2] hover:border-[#FF5B3D]/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-sm font-extrabold text-[#251613]">{item.name}</p>
                    <span className="text-[10px] font-bold text-[#FF5B3D] bg-[#FFF8F2] px-2 py-0.5 rounded-full border border-[#FF5B3D]/20">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#544A48] font-medium leading-relaxed">{item.role}</p>
                </div>
              ))}
            </div>

            {/* Terminal Quick Start Box */}
            <div className="mt-6 p-4 rounded-2xl bg-[#1C1615] text-white font-mono text-xs border border-[#2E2421]">
              <div className="flex items-center gap-2 text-[#9B918F] mb-2.5">
                <Terminal className="w-4 h-4 text-[#FF5B3D]" />
                <span>Quick Run Locally</span>
              </div>
              <p className="text-emerald-400">git clone &lt;repo-url&gt; &amp;&amp; cd traveller</p>
              <p className="text-stone-300 mt-1">npm install &amp;&amp; npm run dev</p>
            </div>
          </div>

          {/* Repository & Audit Specs */}
          <div className="lg:col-span-5 bg-[#FFF8F2] rounded-3xl p-6 sm:p-7 border border-[#FF5B3D]/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GitBranch className="w-5 h-5 text-[#FF5B3D]" />
                <h3 className="text-lg font-bold text-[#251613]">Verified Project Metadata</h3>
              </div>

              <div className="divide-y divide-[#EDE7E2]">
                {REPO_SPECS.map((spec) => (
                  <div key={spec.label} className="py-3 flex flex-col gap-0.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#6E6462]">
                      {spec.label}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#251613]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#FF5B3D]/20 text-[11px] text-[#6E6462]">
              Strictly adheres to open-source transparency: no simulated review ratings or unconfirmed business metrics.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
