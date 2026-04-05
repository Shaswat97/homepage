"use client";

import { CheckCircle2, XCircle, AlertCircle, TrendingUp } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

/* --- Mock UI Components --- */

function OrderFeasibilityMock() {
  return (
    <div className="bg-white border flex-1 border-slate-200 rounded-lg p-5 shadow-sm text-sm font-sans flex flex-col h-full">
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800">SO-2024-089 Summary</h4>
        <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-medium">
          Shortage Detected
        </span>
      </div>
      <div className="space-y-3 flex-1">
        <div className="flex justify-between">
          <span className="text-slate-500">Order Qty</span>
          <span className="font-medium">1,200 units</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Finished Stock (Free)</span>
          <span className="font-medium">450 units</span>
        </div>
        <div className="flex justify-between text-slate-500">
          <span>Reserved Stock</span>
          <span className="font-medium line-through">120 units</span>
        </div>
        <div className="flex justify-between pt-2 border-t border-slate-100">
          <span className="font-medium text-slate-800">Production Required</span>
          <span className="font-bold text-slate-800">750 units</span>
        </div>
        <div className="flex justify-between text-red-600 mt-2 bg-red-50 p-2 rounded">
          <div className="flex items-center gap-2">
            <AlertCircle size={14} />
            <span>Raw material shortage</span>
          </div>
          <span className="font-medium">2 Items</span>
        </div>
      </div>
    </div>
  );
}

function ProcurementMock() {
  return (
    <div className="bg-white border flex-1 border-slate-200 rounded-lg p-5 shadow-sm text-sm font-sans flex flex-col h-full">
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800">Shortage to Procurement</h4>
        <button className="bg-[#5a32fa] text-white px-3 py-1 rounded text-xs font-medium">
          Generate Draft POs
        </button>
      </div>
      <div className="space-y-2 flex-1">
        {/* Table header */}
        <div className="grid grid-cols-4 gap-2 text-xs font-semibold text-slate-500 pb-2 border-b border-slate-100 uppercase tracking-wider">
          <div className="col-span-2">Vendor / Item</div>
          <div className="text-right">Qty</div>
          <div className="text-right">Rate</div>
        </div>
        {/* Row 1 */}
        <div className="grid grid-cols-4 gap-2 text-xs items-center py-1">
          <div className="col-span-2 font-medium text-slate-700">
            SteelCorp India<br />
            <span className="text-slate-400 font-normal">CR Sheet 2mm</span>
          </div>
          <div className="text-right font-medium">2,500 kg</div>
          <div className="text-right text-slate-500">₹82.50</div>
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-4 gap-2 text-xs items-center py-1">
          <div className="col-span-2 font-medium text-slate-700">
            PolyPlast Ltd<br />
            <span className="text-slate-400 font-normal">HDPE Granules</span>
          </div>
          <div className="text-right font-medium">850 kg</div>
          <div className="text-right text-slate-500">₹114.00</div>
        </div>
      </div>
    </div>
  );
}

function ProductionMock() {
  return (
    <div className="bg-white border flex-1 border-slate-200 rounded-lg p-5 shadow-sm text-sm font-sans flex flex-col h-full">
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800">Pre-Start Validation</h4>
        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
          Job Card #44B
        </span>
      </div>
      <div className="space-y-2 flex-1">
        <div className="flex items-center gap-3">
          <CheckCircle2 size={16} className="text-green-500" />
          <span className="text-slate-700">Routing seq aligned (Op 1/4)</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle2 size={16} className="text-green-500" />
          <span className="text-slate-700">Machine M-04 Available</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle2 size={16} className="text-green-500" />
          <span className="text-slate-700">Crew authorized for M-04</span>
        </div>
        <div className="flex items-center gap-3 text-red-600 bg-red-50 p-1.5 rounded -mx-1.5 px-3">
          <XCircle size={16} />
          <span className="font-medium">Raw material insufficient in zone</span>
        </div>
        <div className="mt-3 pt-3 border-t border-slate-100 flex justify-between text-xs text-slate-500">
          <span>Max permissible limit:</span>
          <span className="font-medium text-slate-700">500 units</span>
        </div>
      </div>
    </div>
  );
}

function RecoveryMock() {
  return (
    <div className="bg-white border flex-1 border-slate-200 rounded-lg p-5 shadow-sm text-sm font-sans flex flex-col h-full">
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800">Commercial Recovery</h4>
        <TrendingUp size={16} className="text-slate-400" />
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-slate-50 p-2 rounded">
          <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">Open Debit</p>
          <p className="font-bold text-slate-800 text-lg">₹4.2L</p>
        </div>
        <div className="bg-slate-50 p-2 rounded">
          <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">Open Credit</p>
          <p className="font-bold text-slate-800 text-lg">₹1.1L</p>
        </div>
      </div>
      
      <div className="flex-1 space-y-2">
        <p className="text-[10px] uppercase text-slate-500 font-bold mb-1 border-b border-slate-100 pb-1">Top Ageing Counterparties</p>
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-700">Alpha Industries (90+d)</span>
          <span className="text-red-600 font-medium font-mono">₹1.8L</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-700">TechPack Ltd (60d)</span>
          <span className="text-orange-500 font-medium font-mono">₹85k</span>
        </div>
      </div>
    </div>
  );
}

const uiCards = [
  {
    title: "Order Availability Summary",
    component: OrderFeasibilityMock,
  },
  {
    title: "Procurement Action View",
    component: ProcurementMock,
  },
  {
    title: "Production Start Validation",
    component: ProductionMock,
  },
  {
    title: "Recovery / Ageing Dashboard",
    component: RecoveryMock,
  },
];

export default function ProductProof() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
              See the workflows that resolve the problem
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              Plan2Yield is built around the daily decisions manufacturing teams
              actually make — not just record-keeping.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch"
          staggerDelay={0.1}
        >
          {uiCards.map((card, idx) => {
            const MockComponent = card.component;
            return (
              <StaggerItem key={idx} className="flex flex-col h-full">
                <div className="bg-slate-100 p-2 rounded-xl border border-slate-200 mb-4 flex-1 flex flex-col shadow-inner">
                  <MockComponent />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground font-[family-name:var(--font-space-grotesk)] mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-muted font-medium uppercase tracking-wider">
                    What the user sees
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
