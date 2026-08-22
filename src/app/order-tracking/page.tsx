"use client";

import { CheckCircle2, Clock, Truck, ShieldCheck, Hammer, Package } from "lucide-react";

export default function OrderTrackingPage() {
  const steps = [
    { title: "Order Placed", desc: "Specifications logged", status: "completed", date: "Aug 18" },
    { title: "Material Selection", desc: "Selecting prime solid oak", status: "completed", date: "Aug 19" },
    { title: "Precision Cutting", desc: "CNC & rough dimensioning", status: "completed", date: "Aug 20" },
    { title: "Hand Joinery & Assembly", desc: "Craftsmen assembling", status: "current", date: "In Progress" },
    { title: "Sanding & Finishing", desc: "Hand-sanding & matte lacquering", status: "upcoming", date: "Pending" },
    { title: "Quality Check", desc: "Multi-point inspection", status: "upcoming", date: "Pending" },
    { title: "White Glove Delivery", desc: "In-home delivery", status: "upcoming", date: "Pending" },
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="bg-white p-6 sm:p-8 border border-light-gray mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-1">
              Workshop Status Tracker
            </p>
            <h1 className="font-[var(--font-heading)] text-2xl sm:text-3xl text-dark-brown">
              Order #FN-84920
            </h1>
            <p className="text-xs text-medium-gray mt-1">
              Arden Solid Wood Dining Table · Estimated Delivery: Sept 02, 2026
            </p>
          </div>
          <div className="px-4 py-2 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider rounded-full flex items-center gap-2">
            <Hammer className="w-4 h-4 text-amber-600 animate-spin" /> Step 4 of 7: Hand Joinery
          </div>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block bg-white p-10 border border-light-gray mb-12">
          <h2 className="font-[var(--font-heading)] text-xl text-dark-brown mb-10">
            Crafting & Delivery Progress
          </h2>
          <div className="relative flex justify-between items-start">
            {/* Connecting Bar */}
            <div className="absolute top-5 left-8 right-8 h-1 bg-light-gray -z-0">
              <div className="h-full bg-gold w-[48%]" />
            </div>

            {steps.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center max-w-[130px]">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 mb-3 bg-white transition-all ${
                    step.status === "completed"
                      ? "border-gold bg-gold text-white"
                      : step.status === "current"
                      ? "border-gold text-gold ring-4 ring-gold/20"
                      : "border-light-gray text-medium-gray"
                  }`}
                >
                  {step.status === "completed" ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : step.status === "current" ? (
                    <Clock className="w-5 h-5 animate-pulse" />
                  ) : (
                    <span className="text-xs font-bold">{i + 1}</span>
                  )}
                </div>
                <p className="text-xs font-semibold text-dark-brown leading-snug">{step.title}</p>
                <p className="text-[10px] text-medium-gray mt-1">{step.desc}</p>
                <span className="text-[10px] font-bold text-gold mt-2">{step.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden bg-white p-6 border border-light-gray mb-10">
          <h2 className="font-[var(--font-heading)] text-lg text-dark-brown mb-6">
            Crafting & Delivery Progress
          </h2>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 shrink-0 ${
                      step.status === "completed"
                        ? "border-gold bg-gold text-white"
                        : step.status === "current"
                        ? "border-gold text-gold ring-2 ring-gold/20"
                        : "border-light-gray text-medium-gray bg-white"
                    }`}
                  >
                    {step.status === "completed" ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : step.status === "current" ? (
                      <Clock className="w-4 h-4 animate-pulse" />
                    ) : (
                      <span className="text-xs font-bold">{i + 1}</span>
                    )}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`w-[2px] flex-1 my-1 ${
                        step.status === "completed" ? "bg-gold" : "bg-light-gray"
                      }`}
                    />
                  )}
                </div>
                <div className="pb-4">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-dark-brown">{step.title}</p>
                    <span className="text-[10px] font-bold text-gold uppercase">{step.date}</span>
                  </div>
                  <p className="text-xs text-medium-gray mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Workshop Note */}
        <div className="bg-dark-brown text-white p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0">
              <Hammer className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-[var(--font-heading)] text-lg">Workshop Master Note</h3>
              <p className="text-xs text-white/60">Artisan: Marcus Vance</p>
            </div>
          </div>
          <div className="md:col-span-2 text-xs sm:text-sm text-white/80 leading-relaxed border-t md:border-t-0 md:border-l border-white/20 pt-4 md:pt-0 md:pl-6">
            &ldquo;Your Arden Dining Table top has been precision routed and the mortise-and-tenon joints have been dry fitted. Hand-assembly and clamping are currently underway.&rdquo;
          </div>
        </div>
      </div>
    </div>
  );
}
