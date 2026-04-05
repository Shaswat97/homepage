"use client";

import {
  PackageX,
  Clock,
  Ban,
  ShieldAlert,
  ArchiveX,
  EyeOff,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const problems = [
  {
    icon: EyeOff,
    problem: "Committing orders blindly",
    resolution:
      "Availability checks show what is ready, what needs production, and what needs purchase before confirmation",
  },
  {
    icon: Clock,
    problem: "Discovering shortages too late",
    resolution:
      "Shortages turn into vendor-wise procurement planning with quantity and cost visibility",
  },
  {
    icon: Ban,
    problem: "Running jobs with machine conflicts",
    resolution:
      "Machine locks and production guardrails block invalid or conflicting starts",
  },
  {
    icon: PackageX,
    problem: "Stock numbers nobody trusts",
    resolution:
      "Ledger-backed inventory tracks receipts, issues, transfers, output, and adjustments zone-wise",
  },
  {
    icon: ArchiveX,
    problem: "Recoveries getting forgotten",
    resolution:
      "Debit notes, credit notes, ageing, and settlements stay visible until closure",
  },
  {
    icon: ShieldAlert,
    problem: "Management seeing issues too late",
    resolution:
      "Dashboards surface backlog, low stock, collections, payables, output, and leakage in real time",
  },
];

export default function ProblemsSolved() {
  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-red-50 border border-red-100 rounded-full text-xs font-bold text-red-600 uppercase tracking-widest mb-4">
              PROBLEMS SOLVED
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
              Problems Plan2Yield solves every day
            </h2>
            <p className="mt-4 text-lg text-muted max-w-3xl mx-auto leading-relaxed">
              Factory teams rarely struggle with one isolated issue. Orders,
              shortages, production delays, dispatch gaps, and recoveries usually
              break together. Plan2Yield helps resolve them from one connected
              system.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={idx}>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 h-full flex flex-col hover:border-purple-200 transition-colors">
                  {/* Problem */}
                  <div className="mb-6 flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-red-100/50 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={16} className="text-red-500" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider block mb-1">
                        Problem
                      </span>
                      <p className="text-sm font-semibold text-foreground leading-snug">
                        {item.problem}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-slate-200 mb-6" />

                  {/* Resolution */}
                  <div className="mt-auto">
                    <span className="text-[10px] font-bold text-[#5a32fa] uppercase tracking-wider block mb-2">
                      Resolution
                    </span>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.resolution}
                    </p>
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
