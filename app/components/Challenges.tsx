"use client";

import {
  Calendar,
  AlertTriangle,
  Gauge,
  FileWarning,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const challenges = [
  {
    icon: Calendar,
    title: "Orders get committed without checking production reality",
    description:
      "Sales teams promise quantities and dates without a live view of finished stock, raw shortages, BOM requirements, or existing reservations.",
    color: "text-red-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
  },
  {
    icon: AlertTriangle,
    title: "Procurement reacts too late",
    description:
      "Teams discover shortages only after planning or production has already moved, leading to delays, rush buying, and avoidable cost.",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
  },
  {
    icon: Gauge,
    title: "Production runs with hidden conflicts",
    description:
      "Machine overlap, missing routing, insufficient raw material, invalid crew, and overproduction risk are often caught too late.",
    color: "text-red-400",
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
  },
  {
    icon: FileWarning,
    title: "Financial leakage stays invisible",
    description:
      "Debit notes, shortage claims, returns, open recoveries, and delayed settlements quietly reduce margins unless tracked operationally.",
    color: "text-orange-400",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
  },
];

export default function Challenges() {
  return (
    <section id="platform" className="py-24 lg:py-32 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-red-50 border border-red-100 rounded-full text-xs font-bold text-red-500 uppercase tracking-widest mb-4">
              THE PROBLEM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
              Why spreadsheets fail once factory operations get real
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Spreadsheets can record activity. They cannot protect decisions across stock, production, machines, dispatch, and commercial follow-through.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
          {challenges.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-hover h-full group">
                  <div
                    className={`w-12 h-12 rounded-xl ${item.bgColor} ${item.borderColor} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={22} className={item.color} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
