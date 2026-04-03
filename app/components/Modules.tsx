"use client";

import {
  ShoppingCart,
  ClipboardList,
  Truck,
  Settings,
  Factory,
  Package,
  MapPin,
  Receipt,
  CreditCard,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const modules = [
  { icon: ShoppingCart, label: "Sales Orders & Availability" },
  { icon: ClipboardList, label: "Procurement Planning" },
  { icon: Truck, label: "Purchase Orders & Inward" },
  { icon: Settings, label: "BOM & Production Routing" },
  { icon: Factory, label: "Production Logs & Consumption" },
  { icon: Package, label: "Inventory Ledger & Transfers" },
  { icon: MapPin, label: "Fulfillment & Delivery Trace" },
  { icon: Receipt, label: "Invoicing & Payments" },
  { icon: CreditCard, label: "Debit/Credit Notes" },
  { icon: LayoutDashboard, label: "Dashboards & Reports" },
  { icon: ShieldCheck, label: "Roles, Permissions & Audit Trail" },
];

export default function Modules() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
              Capabilities across the operational backbone
            </h2>
            <p className="mt-4 text-lg text-muted max-w-3xl mx-auto">
              Plan2Yield brings together the controls manufacturers usually split across spreadsheets, registers, WhatsApp updates, and disconnected systems.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          staggerDelay={0.06}
        >
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <StaggerItem key={mod.label}>
                <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm card-hover group cursor-default">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0 group-hover:bg-[#5a32fa] group-hover:border-[#5a32fa] transition-colors duration-300 mt-0.5">
                      <Icon
                        size={20}
                        className="text-[#5a32fa] group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-foreground group-hover:text-[#5a32fa] transition-colors duration-300 block">
                        {mod.label}
                      </span>
                    </div>
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
