"use client";

import {
  Settings2,
  ArrowDownToLine,
  Cog,
  BarChart3,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const howItWorks = [
  {
    icon: Settings2,
    step: "Configure",
    description: "Set up plants, warehouses, machines, materials, BOMs, SKUs, employees, permissions, and process rules.",
  },
  {
    icon: ArrowDownToLine,
    step: "Operate",
    description: "Run orders, procurement, inward, production, transfers, dispatch, invoicing, and collections in one connected flow.",
  },
  {
    icon: Cog,
    step: "Control",
    description: "Protect decisions with availability checks, reservations, machine locks, stock guardrails, and approval workflows.",
  },
  {
    icon: BarChart3,
    step: "Review",
    description: "Track dashboards, recoveries, ageing, margin leakage, low-stock risk, output, and financial outcomes in real time.",
  },
];

const badges = [
  "GST-READY DOCUMENTS",
  "DEBIT/CREDIT NOTE LIFECYCLE",
  "INWARD TO DISPATCH VISIBILITY",
  "INR-FIRST OPERATIONS",
  "ROLE-BASED CONTROLS",
  "AUDIT-READY RECORDS",
];

export default function IndiaContext() {
  return (
    <section className="py-24 lg:py-32 bg-purple-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-[family-name:var(--font-space-grotesk)]">
                Built for Indian manufacturing operations
              </h2>
              <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-lg">
                Plan2Yield supports the realities Indian factories deal with every day — GST-ready documentation, debit/credit note workflows, inward and dispatch control, INR-based operations, role-based access, and multi-step production environments.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 bg-white/10 border border-white/15 rounded-full text-xs font-bold text-white/90 tracking-wider backdrop-blur-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right - How it works */}
          <FadeIn delay={0.15} direction="left">
            <div className="glass-dark rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
                How it works
              </h3>
              <StaggerContainer className="space-y-5" staggerDelay={0.1}>
                {howItWorks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <StaggerItem key={item.step}>
                      <div className="flex items-start gap-4 group">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-[#5a32fa] group-hover:border-[#5a32fa] transition-all duration-300">
                            <Icon size={20} className="text-white/80 group-hover:text-white transition-colors" />
                          </div>
                          {index < howItWorks.length - 1 && (
                            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-5 bg-white/10" />
                          )}
                        </div>
                        <div className="pt-1">
                          <h4 className="text-sm font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                            {item.step}
                          </h4>
                          <p className="text-sm text-white/50 mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
