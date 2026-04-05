"use client";

import {
  ShoppingCart,
  Truck,
  Cog,
  Package,
  Receipt,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const steps = [
  { number: 1, label: "ORDER CHECK", icon: ShoppingCart, description: "Finished stock, reservations, BOM requirement, raw availability" },
  { number: 2, label: "PROCUREMENT PLAN", icon: Truck, description: "Shortage detection, preferred vendor mapping, draft PO generation" },
  { number: 3, label: "PRODUCTION CONTROL", icon: Cog, description: "Routing, machine lock, crew validation, raw sufficiency, FIFO consumption", active: true },
  { number: 4, label: "FULFILLMENT TRACE", icon: Package, description: "Allocation, dispatch, delivery status, invoice linkage, audit trail" },
  { number: 5, label: "FINANCIAL RECOVERY", icon: Receipt, description: "Debit/credit notes, settlement lifecycle, ageing, open recoveries, warning signals" },
];

export default function Flow() {
  return (
    <section id="solutions" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
              One connected workflow from order booking to settlement
            </h2>
            <p className="mt-4 text-lg text-muted max-w-3xl mx-auto">
              Every stage stays linked, so your team can see whether an order is feasible, what must be procured, what can go to production, what has been fulfilled, and what remains financially unresolved.
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="overflow-x-auto pb-8 -mx-6 px-6 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0 snap-x hide-scrollbar">
          <StaggerContainer
            className="flex items-stretch justify-between relative min-w-[800px] lg:min-w-0"
            staggerDelay={0.15}
          >
            {/* Connector Line */}
            <div className="absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-slate-200 via-[#5a32fa]/50 to-slate-200 z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = step.active;
            return (
              <StaggerItem key={step.number} className="flex-1 relative z-10 snap-center">
                <div className="flex flex-col items-center text-center group cursor-default">
                  {/* Circle */}
                  <div
                    className={`w-[104px] h-[104px] rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105 ${
                      isActive
                        ? "bg-[#5a32fa] shadow-xl shadow-purple-600/25 animate-pulse-glow"
                        : "bg-white border-2 border-slate-200 shadow-md group-hover:border-purple-300 group-hover:shadow-lg"
                    }`}
                  >
                    <Icon
                      size={28}
                      className={isActive ? "text-white" : "text-slate-500 group-hover:text-[#5a32fa] transition-colors"}
                    />
                    <span
                      className={`text-xs font-bold mt-1.5 ${
                        isActive ? "text-white/80" : "text-slate-400"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Label */}
                  <h3
                    className={`mt-5 text-sm font-bold tracking-wider ${
                      isActive ? "text-[#5a32fa]" : "text-foreground"
                    } font-[family-name:var(--font-space-grotesk)]`}
                  >
                    {step.label}
                  </h3>
                  <p className="mt-1 text-xs text-muted-light">{step.description}</p>
                </div>
              </StaggerItem>
            );
          })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
