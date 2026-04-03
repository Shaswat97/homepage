"use client";

import {
  BookOpen,
  ShieldCheck,
  Footprints,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const cards = [
  {
    icon: BookOpen,
    title: "Ledger-Driven Inventory",
    description:
      "Every receipt, issue, production output, transfer, adjustment, and scrap movement is recorded zone-wise with valuation.",
    iconBg: "bg-purple-100",
    iconColor: "text-[#5a32fa]",
    border: "border-purple-100",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access Control",
    description:
      "Granular permissions control who can confirm orders, receive purchases, start production, adjust inventory, or manage settings.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    border: "border-blue-100",
  },
  {
    icon: Footprints,
    title: "Complete Audit Trail",
    description:
      "Track who created, approved, updated, received, settled, or changed every key record in the system.",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    border: "border-green-100",
  },
];

const timeline = [
  { label: "Sales Order Confirmed", time: "10:14 AM", user: "Ankit S." },
  { label: "PO Created", time: "10:22 AM", user: "Procurement" },
  { label: "Production Started", time: "11:45 AM", user: "Shop Floor" },
  { label: "Invoice Raised", time: "3:30 PM", user: "Accounts" },
  { label: "Debit Note Settled", time: "4:15 PM", user: "Finance" },
];

export default function Trust() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50/50 relative overflow-hidden">
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
              CONTROLS & TRACEABILITY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
              Stock, approvals, and actions you can actually trust
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              When stock, production, and commercial adjustments are tracked
              casually, teams stop trusting the numbers. Plan2Yield fixes that
              with ledger-backed movements, permissions, and audit history.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left — 3 cards */}
          <StaggerContainer
            className="lg:col-span-3 grid sm:grid-cols-1 gap-5"
            staggerDelay={0.1}
          >
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <StaggerItem key={card.title}>
                  <div
                    className={`bg-white rounded-2xl p-7 border ${card.border} shadow-sm card-hover group h-full`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={22} className={card.iconColor} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground mb-1.5 font-[family-name:var(--font-space-grotesk)]">
                          {card.title}
                        </h3>
                        <p className="text-sm text-muted leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Right — Event Timeline */}
          <FadeIn delay={0.2} direction="left" className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-6">
                <Footprints size={16} className="text-[#5a32fa]" />
                <p className="text-xs font-bold text-muted-light uppercase tracking-wider">
                  Activity Timeline
                </p>
              </div>

              <div className="space-y-0">
                {timeline.map((event, i) => (
                  <div key={event.label} className="flex gap-4">
                    {/* Vertical line + dot */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-3 h-3 rounded-full shrink-0 border-2 ${
                          i === timeline.length - 1
                            ? "bg-green-500 border-green-200"
                            : "bg-[#5a32fa] border-purple-200"
                        }`}
                      />
                      {i < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-slate-200 min-h-[32px]" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-5 -mt-0.5">
                      <p className="text-sm font-semibold text-foreground leading-snug">
                        {event.label}
                      </p>
                      <p className="text-xs text-muted-light mt-0.5">
                        {event.time} · {event.user}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
