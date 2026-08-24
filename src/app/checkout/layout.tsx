// src/app/checkout/layout.tsx
"use client";
import React from "react";
import { CheckoutProvider } from "./CheckoutContext";

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <CheckoutProvider>
      <div className="min-h-screen bg-cream">
        {/* Header */}
        <header className="bg-white bg-opacity-30 backdrop-blur-lg border-b border-white/20 py-4 shadow-md">
          <h1 className="text-center font-[var(--font-heading)] text-2xl text-dark-brown">
            Checkout
          </h1>
        </header>
        <main className="px-4 sm:px-6 lg:px-10 py-8">{children}</main>
      </div>
    </CheckoutProvider>
  );
}
