"use client";

import {
  ShieldCheck,
  Lock,
  Cog,
  Ban,
  BookOpen,
  AlertTriangle,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const protections = [
  {
    icon: ShieldCheck,
    title: "Order confirmation guard",
    description:
      "Orders stay in quote if material shortages exist.",
    iconBg: "bg-purple-100",
    iconColor: "text-[#5a32fa]",
    border: "border-purple-100",
  },
  {
    icon: Lock,
    title: "Raw material reservation",
    description:
      "Confirmed orders reserve raw material so the same stock cannot be promised twice.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    border: "border-blue-100",
  },
  {
    icon: Cog,
    title: "Production start guardrails",
    description:
      "Production cannot start without valid routing, available machines, sufficient material, and correct quantity limits.",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    border: "border-green-100",
  },
  {
    icon: Ban,
    title: "Machine collision prevention",
    description:
      "Open production logs lock route machines and block conflicting jobs.",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    border: "border-red-100",
  },
  {
    icon: BookOpen,
    title: "Ledger-based stock control",
    description:
      "Every movement is recorded zone-wise with valuation and traceability.",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    border: "border-amber-100",
  },
  {
    icon: AlertTriangle,
    title: "Settlement and warning signals",
    description:
      "Open claims, repeat quality issues, returns, and recoveries surface before repeat business decisions are made.",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    border: "border-orange-100",
  },
];

export default function Guardrails() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-100/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-green-50 border border-green-100 rounded-full text-xs font-bold text-green-600 uppercase tracking-widest mb-4">
              BUILT-IN PROTECTION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
              How Plan2Yield prevents bad decisions
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              Most factory systems tell you what happened. Plan2Yield is built to
              stop avoidable mistakes before they become delays, shortages,
              write-offs, or margin loss.
            </p>
          </div>
        </FadeIn>

        {/* Protection Cards — 3x2 grid */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.08}
        >
          {protections.map((card) => {
            const Icon = card.icon;
            return (
              <StaggerItem key={card.title}>
                <div
                  className={`bg-white rounded-2xl p-7 border ${card.border} shadow-sm card-hover h-full group relative overflow-hidden`}
                >
                  {/* Left accent bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 ${card.iconBg} rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

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
      </div>
    </section>
  );
}
