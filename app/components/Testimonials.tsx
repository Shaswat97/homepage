"use client";

import { Star, Quote } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const testimonials = [
  {
    quote:
      "We no longer confirm orders blindly. The team can see what is available, what needs production, and what needs procurement before committing.",
    name: "Rajiv M.",
    company: "Plastic Components",
    avatar: "RM",
    avatarBg: "bg-purple-100 text-[#5a32fa]",
  },
  {
    quote:
      "Earlier, shortage claims and debit recoveries got lost in calls and spreadsheets. Now they stay visible until settled.",
    name: "Ankit P.",
    company: "Industrial Supplies",
    avatar: "AP",
    avatarBg: "bg-green-100 text-green-600",
  },
  {
    quote:
      "The biggest value is control. Production, inventory, dispatch, and finance are now connected enough for management to trust the numbers.",
    name: "Neha A.",
    company: "Packaging Manufacturing",
    avatar: "NA",
    avatarBg: "bg-amber-100 text-amber-600",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50/30 relative" id="resources">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
              Trusted by Industry Leaders
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.12}
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm card-hover h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-5">
                  <Quote size={28} className="text-purple-200" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-amber-400"
                      fill="#fbbf24"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-foreground text-[15px] leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-sm font-bold`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-light">{t.company}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
