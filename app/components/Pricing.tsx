"use client";

import { Check } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const plans = [
  {
    name: "Starter",
    price: "₹9,999",
    period: "/mo",
    description: "For smaller factories moving from spreadsheet-led operations to connected workflows",
    features: [
      "Up to 5 users",
      "Core order, purchase, inventory, and invoice workflows",
      "Standard dashboards",
      "Single plant or warehouse setup",
      "Email support",
    ],
    cta: "Book a Demo",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹24,999",
    period: "/mo",
    description: "For growing manufacturers that need tighter control across orders, procurement, stock, production, and finance",
    features: [
      "Up to 25 users",
      "Advanced production and fulfillment workflows",
      "Multi-warehouse visibility",
      "Debit/credit note workflows",
      "Priority support",
      "Basic integrations",
    ],
    cta: "Book a Demo",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For larger operations that need deeper controls, governance, integrations, and custom process support",
    features: [
      "Unlimited users",
      "Advanced reporting and governance",
      "Full API/integration support",
      "Custom workflows",
      "Dedicated onboarding and support",
      "On-premise or controlled deployment options",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/20 to-white -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
              Pricing based on the control your operations need
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Start with the workflows that matter now, and expand as your factory adds complexity, teams, and reporting needs.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          staggerDelay={0.15}
        >
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={`rounded-2xl p-8 h-full flex flex-col relative ${
                  plan.popular
                    ? "pricing-popular bg-white"
                    : "bg-white border border-slate-200 shadow-sm"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-[#5a32fa] text-white text-xs font-bold rounded-full shadow-lg shadow-purple-600/25">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-lg font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-light mt-1">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-6 mb-6">
                  <span className="text-4xl font-extrabold text-foreground font-[family-name:var(--font-space-grotesk)]">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-light font-medium">
                      {plan.period}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-700"
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          plan.popular
                            ? "bg-[#5a32fa]/10"
                            : "bg-green-50"
                        }`}
                      >
                        <Check
                          size={12}
                          className={
                            plan.popular ? "text-[#5a32fa]" : "text-green-500"
                          }
                          strokeWidth={3}
                        />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`mt-8 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                    plan.popular
                      ? "bg-[#5a32fa] text-white shadow-lg shadow-purple-600/25 hover:bg-purple-700 hover:shadow-purple-600/40 hover:-translate-y-0.5"
                      : "bg-slate-100 text-foreground hover:bg-slate-200 border border-slate-200"
                  }`}
                  id={`pricing-${plan.name.toLowerCase()}-btn`}
                >
                  {plan.cta}
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
