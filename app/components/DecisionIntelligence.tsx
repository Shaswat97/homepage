"use client";

import {
  ClipboardCheck,
  ShoppingBag,
  ShieldAlert,
  TrendingDown,
  AlertTriangle,
  PackageX,
  Banknote,
  Clock,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const proofCards = [
  {
    icon: ClipboardCheck,
    title: "Order Feasibility",
    description:
      "Checks finished stock, reservations, BOM requirements, and raw shortages before confirming an order.",
    iconBg: "bg-purple-100",
    iconColor: "text-[#5a32fa]",
  },
  {
    icon: ShoppingBag,
    title: "Procurement Readiness",
    description:
      "Turns shortages into vendor-wise purchase planning with quantity and cost visibility.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: ShieldAlert,
    title: "Production Safety",
    description:
      "Prevents production starts when routing, machine, crew, or material conditions are not valid.",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: TrendingDown,
    title: "Recovery & Risk Signals",
    description:
      "Surfaces vendor issues, customer return patterns, open debit recoveries, and ageing notes.",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
];

const metrics = [
  {
    icon: AlertTriangle,
    label: "Orders at Risk",
    value: "4",
    color: "text-red-600",
    bg: "bg-red-50",
    borderColor: "border-red-100",
    barWidth: "w-[35%]",
    barColor: "bg-red-400",
  },
  {
    icon: PackageX,
    label: "Raw Material Shortages",
    value: "7",
    color: "text-orange-600",
    bg: "bg-orange-50",
    borderColor: "border-orange-100",
    barWidth: "w-[60%]",
    barColor: "bg-orange-400",
  },
  {
    icon: Banknote,
    label: "Open Recoveries",
    value: "₹4.2L",
    color: "text-purple-600",
    bg: "bg-purple-50",
    borderColor: "border-purple-100",
    barWidth: "w-[48%]",
    barColor: "bg-purple-400",
  },
  {
    icon: Clock,
    label: "Delayed Deliveries",
    value: "3",
    color: "text-amber-600",
    bg: "bg-amber-50",
    borderColor: "border-amber-100",
    barWidth: "w-[25%]",
    barColor: "bg-amber-400",
  },
];

export default function DecisionIntelligence() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-50/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
              What Plan2Yield helps you see{" "}
              <span className="text-[#5a32fa]">before</span> it becomes a
              problem
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              The platform does more than record transactions. It calculates
              feasibility, flags risk, and shows where decisions will break
              before they hit the factory floor or the P&L.
            </p>
          </div>
        </FadeIn>

        {/* Proof Cards */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
          staggerDelay={0.1}
        >
          {proofCards.map((card) => {
            const Icon = card.icon;
            return (
              <StaggerItem key={card.title}>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm card-hover h-full">
                  <div
                    className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}
                  >
                    <Icon size={20} className={card.iconColor} />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Mini Dashboard */}
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-lg shadow-black/[0.04] p-6 sm:p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs font-medium text-muted-light uppercase tracking-wider">
                  Live Risk Summary
                </p>
                <h3 className="text-lg font-bold text-foreground mt-0.5 font-[family-name:var(--font-space-grotesk)]">
                  Operational Warnings
                </h3>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-green-600">
                  Live
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className={`${metric.bg} rounded-xl p-4 border ${metric.borderColor}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={14} className={metric.color} />
                      <p className="text-xs font-medium text-muted-light">
                        {metric.label}
                      </p>
                    </div>
                    <p
                      className={`text-2xl font-bold ${metric.color} font-[family-name:var(--font-space-grotesk)]`}
                    >
                      {metric.value}
                    </p>
                    {/* Horizontal bar */}
                    <div className="mt-3 h-1.5 bg-slate-200/60 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${metric.barColor} rounded-full ${metric.barWidth}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
