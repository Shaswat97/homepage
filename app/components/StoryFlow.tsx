"use client";

import {
  Users,
  SearchCheck,
  ClipboardList,
  Factory,
  Receipt,
  ArrowRight,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";
import { Fragment } from "react";

const storySteps = [
  {
    icon: Users,
    title: "Sales enters the order",
    description:
      "System checks finished stock, reservations, BOM needs, and raw availability",
  },
  {
    icon: SearchCheck,
    title: "Feasibility becomes clear",
    description:
      "The team sees what can be fulfilled now and what needs production or purchase",
  },
  {
    icon: ClipboardList,
    title: "Shortages become a plan",
    description:
      "Required raw material turns into vendor-wise procurement action",
  },
  {
    icon: Factory,
    title: "Production runs with checks",
    description:
      "Routing, machine, crew, and material guardrails protect execution",
  },
  {
    icon: Receipt,
    title: "Dispatch, invoice, and recovery stay linked",
    description:
      "Fulfillment, billing, payments, and debit/credit follow-up remain connected",
  },
];

export default function StoryFlow() {
  return (
    <section id="story-flow" className="py-20 lg:py-28 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
              How one order moves through Plan2Yield
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              One connected workflow replaces the usual back-and-forth between
              spreadsheets, calls, and disconnected teams.
            </p>
          </div>
        </FadeIn>

        <div className="overflow-x-auto pb-8 -mx-6 px-6 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0 hide-scrollbar snap-x">
          <StaggerContainer
            className="flex items-start gap-4 lg:gap-6 min-w-[1000px] lg:min-w-0"
            staggerDelay={0.1}
          >
            {storySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Fragment key={idx}>
                  <StaggerItem className="flex-1 snap-center">
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 lg:p-6 h-full flex flex-col hover:shadow-md transition-shadow hover:border-purple-200">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 border border-slate-100 text-[#5a32fa]">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-sm font-bold text-foreground mb-2 leading-tight font-[family-name:var(--font-space-grotesk)]">
                        {step.title}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </StaggerItem>

                  {/* Render arrows between cards on desktop layout spacing */}
                  {idx < storySteps.length - 1 && (
                    <div className="pt-10 shrink-0 text-slate-300 hidden lg:block">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </Fragment>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
