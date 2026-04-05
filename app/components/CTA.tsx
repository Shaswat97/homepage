"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./AnimationWrapper";
import { motion } from "framer-motion";

export default function CTA() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section
      id="demo"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-50/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
              Ready to run your factory with more control and fewer surprises?
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              See how Plan2Yield helps manufacturing teams check order feasibility, control stock and production, track recoveries, and review operations through live dashboards.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="max-w-3xl mx-auto">
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl shadow-black/[0.06] border border-slate-100"
              whileHover={{ boxShadow: "0 25px 50px rgba(0, 0, 0, 0.08)" }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-foreground placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#5a32fa]/20 focus:border-[#5a32fa] transition-all bg-slate-50/50"
                    required
                    aria-label="Full Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-foreground placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#5a32fa]/20 focus:border-[#5a32fa] transition-all bg-slate-50/50"
                    required
                    aria-label="Company Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Work Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-foreground placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#5a32fa]/20 focus:border-[#5a32fa] transition-all bg-slate-50/50"
                    required
                    aria-label="Work Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-foreground placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#5a32fa]/20 focus:border-[#5a32fa] transition-all bg-slate-50/50"
                    required
                    aria-label="Phone Number"
                  />
                </div>
              </div>

              <button
                type="submit"
                id="cta-submit-btn"
                className="mt-8 w-full py-4 bg-[#5a32fa] text-white font-bold rounded-xl shadow-xl shadow-purple-600/25 hover:bg-purple-700 hover:shadow-purple-600/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-base cursor-pointer"
              >
                Book My Demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-5 pt-5 border-t border-slate-100 flex flex-col items-center">
                <p className="text-xs text-slate-500 mb-3 text-center">
                  Not ready for a call? Start with a sample order-to-resolution flow.
                </p>
                <button
                  type="button"
                  className="w-full py-3 bg-slate-50 text-foreground font-semibold rounded-xl border border-slate-200 hover:bg-slate-100 hover:border-slate-300 transition-colors flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    const el = document.getElementById("story-flow");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View Example Workflow
                </button>
              </div>
            </motion.form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
