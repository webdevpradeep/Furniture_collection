"use client";
import Link from "next/link";
import { CheckCircle, ShieldCheck } from "lucide-react";

export default function ConfirmationPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cream">
      <div className="bg-white bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-xl p-8 max-w-lg w-full mx-auto text-center shadow-xl">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-emerald-600" />
        </div>
        <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
          Thank You For Your Order
        </p>
        <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-dark-brown mb-4">
          Order Confirmed
        </h1>
        <p className="text-medium-gray text-sm leading-relaxed mb-8">
          Your order has been placed successfully. We will process it shortly and send you a confirmation email.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/order-tracking"
            className="px-6 py-3 bg-gold text-white text-xs font-semibold uppercase tracking-wider hover:bg-gold/90 transition-colors"
          >
            Track Order
          </Link>
          <Link
            href="/shop"
            className="px-6 py-3 border border-dark-brown text-dark-brown text-xs font-semibold uppercase tracking-wider hover:bg-dark-brown hover:text-white transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2 text-[10px] text-medium-gray uppercase tracking-wider mt-6">
          <ShieldCheck className="w-4 h-4 text-gold" />
          <span>256‑Bit Encrypted Secure Checkout</span>
        </div>
      </div>
    </div>
  );
}
