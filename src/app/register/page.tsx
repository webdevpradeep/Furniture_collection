"use client";

import Link from "next/link";
import { ArrowRight, Lock, Mail, User } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-cream min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="bg-white p-8 sm:p-10 border border-light-gray shadow-sm">
          <div className="text-center mb-8">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
              Join FurniNest
            </p>
            <h1 className="font-[var(--font-heading)] text-3xl text-dark-brown">
              Create Account
            </h1>
            <p className="text-xs text-medium-gray mt-2">
              Enjoy custom quotes, direct access to our workshop team, and order tracking.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-dark-brown mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-medium-gray" />
                <input
                  type="text"
                  placeholder="Eleanor Vance"
                  className="w-full pl-10 pr-3 py-2.5 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-dark-brown mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-medium-gray" />
                <input
                  type="email"
                  placeholder="your.email@domain.com"
                  className="w-full pl-10 pr-3 py-2.5 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-dark-brown mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-medium-gray" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-3 py-2.5 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold"
                  required
                />
              </div>
            </div>

            <Link
              href="/dashboard"
              className="w-full py-3.5 bg-gold text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-gold/90 transition-colors shadow-md block text-center mt-6"
            >
              Create Account <ArrowRight className="w-4 h-4" />
            </Link>
          </form>

          <div className="mt-8 pt-6 border-t border-light-gray text-center">
            <p className="text-xs text-medium-gray">
              Already have an account?{" "}
              <Link href="/login" className="text-gold font-semibold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
