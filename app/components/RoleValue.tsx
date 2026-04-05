"use client";

import { useState } from "react";
import {
  BriefcaseBusiness,
  Headset,
  ShoppingCart,
  Factory,
  Landmark,
  CheckCircle2,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const roles = [
  {
    id: "owner",
    title: "Owner / Director",
    icon: BriefcaseBusiness,
    value:
      "See backlog, stock value, receivables, payables, recoveries, and operational risk in one place",
    outcome: "so you stop managing by surprises and start directing by numbers.",
    color: "text-[#5a32fa]",
    bg: "bg-purple-100",
    border: "border-[#5a32fa]",
  },
  {
    id: "sales",
    title: "Sales / Order Team",
    icon: Headset,
    value:
      "Check what can be committed, what needs production, and what needs purchase before promising delivery",
    outcome: "so promised dates become reliable execution dates.",
    color: "text-blue-600",
    bg: "bg-blue-100",
    border: "border-blue-600",
  },
  {
    id: "procurement",
    title: "Procurement",
    icon: ShoppingCart,
    value:
      "Track shortages, vendor-wise planning, inward, bills, and follow-up on commercial recoveries",
    outcome: "so material arrives on time and leakage is recovered.",
    color: "text-orange-600",
    bg: "bg-orange-100",
    border: "border-orange-600",
  },
  {
    id: "production",
    title: "Production / Stores",
    icon: Factory,
    value:
      "Run production with machine, crew, routing, and stock checks while keeping inventory movements accurate",
    outcome: "so invalid jobs are blocked before they disrupt the floor.",
    color: "text-green-600",
    bg: "bg-green-100",
    border: "border-green-600",
  },
  {
    id: "finance",
    title: "Finance / Accounts",
    icon: Landmark,
    value:
      "Track invoices, collections, payables, notes, settlements, ageing, and GST-ready documents",
    outcome: "so books are closed faster and cash flow is protected.",
    color: "text-amber-600",
    bg: "bg-amber-100",
    border: "border-amber-600",
  },
];

export default function RoleValue() {
  const [activeTab, setActiveTab] = useState(roles[0].id);

  const activeRole = roles.find((r) => r.id === activeTab) || roles[0];
  const ActiveIcon = activeRole.icon;

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-y border-slate-100">
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-xs font-bold text-slate-600 uppercase tracking-widest mb-4">
              WHO IT HELPS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
              Different teams use Plan2Yield differently
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              The value of the system changes by role, but the source of truth stays the same.
            </p>
          </div>
        </FadeIn>

        {/* Desktop Tabs */}
        <div className="hidden lg:block">
          {/* Tab Navigation */}
          <div className="flex justify-center border-b border-slate-200 mb-10">
            {roles.map((role) => {
              const Icon = role.icon;
              const isActive = activeTab === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveTab(role.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-semibold text-sm transition-all border-b-2 -mb-[2px] ${
                    isActive
                      ? `${role.color} ${role.border}`
                      : "text-slate-500 border-transparent hover:text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <Icon size={18} />
                  {role.title}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <FadeIn key={activeTab}>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-10 max-w-4xl mx-auto flex items-start gap-8 shadow-sm">
              <div
                className={`w-20 h-20 shrink-0 rounded-2xl ${activeRole.bg} flex items-center justify-center opacity-90`}
              >
                <ActiveIcon size={36} className={activeRole.color} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
                  {activeRole.title}
                </h3>
                <div className="flex gap-4 items-start mb-6 text-slate-700">
                  <CheckCircle2 size={24} className={`${activeRole.color} shrink-0`} />
                  <p className="text-lg leading-relaxed">{activeRole.value}</p>
                </div>
                <div className="pl-10">
                  <p className="text-sm font-semibold italic text-slate-500">
                    ...{activeRole.outcome}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Mobile Stacked Cards */}
        <div className="lg:hidden">
          <StaggerContainer className="flex flex-col gap-4" staggerDelay={0.1}>
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <StaggerItem key={role.id}>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 rounded-lg ${role.bg} flex items-center justify-center shrink-0`}
                      >
                        <Icon size={18} className={role.color} />
                      </div>
                      <h3 className="text-base font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                        {role.title}
                      </h3>
                    </div>
                    <div className="flex gap-3 items-start mb-4">
                      <CheckCircle2 size={18} className={`${role.color} shrink-0 mt-0.5`} />
                      <p className="text-sm text-foreground leading-relaxed">
                        {role.value}
                      </p>
                    </div>
                    <p className="text-xs font-semibold italic text-slate-500 ml-7">
                      ...{role.outcome}
                    </p>
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
