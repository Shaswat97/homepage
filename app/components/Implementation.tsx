"use client";

import { CheckCircle2, Database, KeyRound, Play, UploadCloud } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const steps = [
  {
    icon: Database,
    title: "1. Set up master data",
    description: "Configure plants, warehouses, zones, users, SKUs, BOMs, machines, routing, and counterparties.",
  },
  {
    icon: KeyRound,
    title: "2. Set roles and permissions",
    description: "Control who can confirm, receive, produce, adjust, settle, and review.",
  },
  {
    icon: UploadCloud,
    title: "3. Import opening data",
    description: "Bring in opening stock, price lists, partners, and other required operational masters.",
  },
  {
    icon: Play,
    title: "4. Go live by workflow",
    description: "Start with orders, procurement, stock, production, dispatch, invoicing, or note tracking based on business priority.",
  },
];

const supportPillars = [
  "Import assistance",
  "Role-based onboarding",
  "Workflow walkthroughs",
  "Go-live support",
];

export default function Implementation() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50/50 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
              IMPLEMENTATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
              What rollout looks like
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              Manufacturing software gets adopted only when setup is clear, access is controlled, and teams know what goes live first.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
          staggerDelay={0.1}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.title}>
                <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm h-full flex flex-col relative z-10 hover:shadow-md transition-shadow hover:border-purple-200">
                  <div className="w-12 h-12 bg-purple-50 text-[#5a32fa] rounded-xl flex items-center justify-center mb-5 border border-purple-100">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-3 font-[family-name:var(--font-space-grotesk)] leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Support Strip */}
        <FadeIn delay={0.2}>
          <div className="bg-white border border-slate-200 rounded-xl max-w-4xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 shadow-sm">
            <p className="text-sm font-semibold text-foreground uppercase tracking-wider hidden md:block border-r border-slate-200 pr-5">
              Included
            </p>
            {supportPillars.map((pillar) => (
              <div key={pillar} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" />
                <span className="text-sm text-slate-700 font-medium">{pillar}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
