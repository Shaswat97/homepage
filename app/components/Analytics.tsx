"use client";

import {
  ClipboardList,
  Package,
  Banknote,
  FileText,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const highlights = [
  {
    icon: ClipboardList,
    title: "Order Backlog & Delivery Completion",
    helper: "See which orders are falling behind before dispatch issues become customer problems",
    iconBg: "bg-purple-100",
    iconColor: "text-[#5a32fa]",
  },
  {
    icon: Package,
    title: "Inventory Value & Low-Stock Alerts",
    helper: "Know where stock value is sitting and which shortages need immediate action",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Banknote,
    title: "Receivables, Payables & Collection Efficiency",
    helper: "Spot cash pressure early and prioritize follow-up where it matters most",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: FileText,
    title: "Debit/Credit Note Ageing & Recovery Trends",
    helper: "See which recoveries are pending too long and where leakage is building up",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
];

/* ── Revenue Trend Line Chart ── */
function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm h-full">
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="text-xs font-medium text-muted-light uppercase tracking-wider">Revenue Trend</p>
          <p className="text-lg font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">₹1.42 Cr</p>
        </div>
        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">+8.3% QoQ</span>
      </div>
      <p className="text-[11px] text-slate-500 mb-5 leading-snug">Track momentum shifts before they affect planning and collections</p>
      <svg viewBox="0 0 320 100" className="w-full h-24" fill="none">
        <defs>
          <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5a32fa" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#5a32fa" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Grid lines */}
        <line x1="0" y1="25" x2="320" y2="25" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="4" />
        <line x1="0" y1="50" x2="320" y2="50" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="4" />
        <line x1="0" y1="75" x2="320" y2="75" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="4" />
        {/* Area */}
        <path d="M0 70 Q40 65 80 55 T160 40 T240 30 T320 20 V100 H0 Z" fill="url(#revFill)" />
        {/* Line */}
        <path d="M0 70 Q40 65 80 55 T160 40 T240 30 T320 20" stroke="#5a32fa" strokeWidth="2.5" strokeLinecap="round" />
        {/* Dot */}
        <circle cx="320" cy="20" r="4" fill="#5a32fa" />
        <circle cx="320" cy="20" r="7" fill="#5a32fa" fillOpacity="0.15" />
      </svg>
      <div className="flex justify-between mt-2 text-[10px] text-muted-light font-medium">
        <span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span>
      </div>
    </div>
  );
}

/* ── Production Output Stacked Bar ── */
function ProductionChart() {
  const months = [
    { label: "Oct", good: 72, reject: 8, scrap: 4 },
    { label: "Nov", good: 68, reject: 10, scrap: 6 },
    { label: "Dec", good: 78, reject: 6, scrap: 3 },
    { label: "Jan", good: 82, reject: 5, scrap: 3 },
    { label: "Feb", good: 75, reject: 9, scrap: 5 },
    { label: "Mar", good: 85, reject: 4, scrap: 2 },
  ];
  const maxVal = 95;

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm h-full">
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="text-xs font-medium text-muted-light uppercase tracking-wider">Production Output</p>
          <p className="text-lg font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">Good / Reject / Scrap</p>
        </div>
      </div>
      <p className="text-[11px] text-slate-500 mb-5 leading-snug">See reject and scrap pressure early enough to intervene operationally</p>
      <div className="flex items-end justify-between gap-3 h-28">
        {months.map((m) => (
          <div key={m.label} className="flex-1 flex flex-col items-center gap-0.5">
            <div className="w-full flex flex-col-reverse rounded-t overflow-hidden" style={{ height: "100%" }}>
              <div className="bg-[#5a32fa] rounded-t-sm" style={{ height: `${(m.good / maxVal) * 100}%` }} />
              <div className="bg-orange-400" style={{ height: `${(m.reject / maxVal) * 100}%` }} />
              <div className="bg-red-300" style={{ height: `${(m.scrap / maxVal) * 100}%` }} />
            </div>
            <span className="text-[10px] text-muted-light font-medium mt-1">{m.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-4">
        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-[#5a32fa]" /><span className="text-[10px] text-muted-light">Good</span></div>
        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-orange-400" /><span className="text-[10px] text-muted-light">Reject</span></div>
        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-red-300" /><span className="text-[10px] text-muted-light">Scrap</span></div>
      </div>
    </div>
  );
}

/* ── Inventory Donut Chart ── */
function InventoryDonut() {
  // Donut segments: Free 40%, In-Use 25%, Finished 20%, Scrap 15%
  const segments = [
    { label: "Free Stock", pct: 40, color: "#5a32fa", offset: 0 },
    { label: "In-Use / WIP", pct: 25, color: "#3b82f6", offset: 40 },
    { label: "Finished Goods", pct: 20, color: "#10b981", offset: 65 },
    { label: "Scrap / Waste", pct: 15, color: "#f59e0b", offset: 85 },
  ];
  const r = 40;
  const c = 2 * Math.PI * r;

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm h-full">
      <div className="mb-2">
        <p className="text-xs font-medium text-muted-light uppercase tracking-wider">Inventory Value Split</p>
        <p className="text-lg font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">₹38.2L</p>
      </div>
      <p className="text-[11px] text-slate-500 mb-5 leading-snug">Understand where working capital is locked across free, WIP, finished, and scrap stock</p>
      <div className="flex items-center gap-6">
        <div className="relative w-32 h-32 shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            {segments.map((seg) => (
              <circle
                key={seg.label}
                cx="50" cy="50" r={r}
                fill="none"
                stroke={seg.color}
                strokeWidth="12"
                strokeDasharray={`${(seg.pct / 100) * c} ${c}`}
                strokeDashoffset={-(seg.offset / 100) * c}
                strokeLinecap="butt"
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">100%</span>
          </div>
        </div>
        <div className="space-y-2.5 flex-1">
          {segments.map((seg) => (
            <div key={seg.label} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: seg.color }} />
              <span className="text-xs text-muted-light flex-1">{seg.label}</span>
              <span className="text-xs font-semibold text-foreground">{seg.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Note Ageing Bar Chart ── */
function NoteAgeingChart() {
  const buckets = [
    { label: "0–30d", value: 12.4, pct: 45, color: "bg-green-500" },
    { label: "31–60d", value: 6.8, pct: 25, color: "bg-amber-400" },
    { label: "61–90d", value: 3.2, pct: 12, color: "bg-orange-500" },
    { label: "90+d", value: 4.8, pct: 18, color: "bg-red-500" },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm h-full">
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="text-xs font-medium text-muted-light uppercase tracking-wider">Note Ageing</p>
          <p className="text-lg font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">₹27.2L outstanding</p>
        </div>
        <span className="text-xs font-semibold text-red-500 bg-red-50 px-2.5 py-1 rounded-full shrink-0">₹4.8L overdue</span>
      </div>
      <p className="text-[11px] text-slate-500 mb-5 leading-snug break-words">Prioritize old open notes before they become write-offs or relationship issues</p>
      <div className="space-y-3">
        {buckets.map((b) => (
          <div key={b.label} className="flex items-center gap-3">
            <span className="text-xs font-medium text-muted-light w-12 shrink-0">{b.label}</span>
            <div className="flex-1 h-5 bg-slate-100 rounded-full overflow-hidden">
              <div className={`h-full ${b.color} rounded-full transition-all`} style={{ width: `${b.pct}%` }} />
            </div>
            <span className="text-xs font-semibold text-foreground w-12 text-right">₹{b.value}L</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Analytics() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-purple-50 border border-purple-100 rounded-full text-xs font-bold text-[#5a32fa] uppercase tracking-widest mb-4">
              DASHBOARDS & ANALYTICS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
              See the factory through live numbers, not end-of-month surprises
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              Plan2Yield gives management a command-center view across backlog, inventory, production, collections, payables, recoveries, and margin leakage, so management knows exactly where to act first.
            </p>
          </div>
        </FadeIn>

        {/* Analytics Highlight Cards */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12" staggerDelay={0.08}>
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <StaggerItem key={h.title}>
                <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm card-hover group">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl border border-slate-100 ${h.iconBg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                      <Icon size={20} className={h.iconColor} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground leading-snug mb-1 font-[family-name:var(--font-space-grotesk)]">{h.title}</p>
                      <p className="text-[11px] text-muted-light leading-snug">{h.helper}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Chart Grid */}
        <FadeIn delay={0.15}>
          <div className="grid md:grid-cols-2 gap-6">
            <RevenueChart />
            <ProductionChart />
            <InventoryDonut />
            <NoteAgeingChart />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
