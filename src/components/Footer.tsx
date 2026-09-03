"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl text-white mb-2">
              Stay Inspired
            </h3>
            <p className="text-white/60 text-sm max-w-md">
              Get early access to new collections, workshop stories, and exclusive offers.
            </p>
          </div>
          <form className="flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-gold transition-colors"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold text-white text-sm font-medium uppercase tracking-wider hover:bg-gold/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h4 className="font-[var(--font-heading)] text-2xl text-white mb-4">
              Arpita&Archita<span className="text-gold">.</span>
            </h4>
            <p className="text-sm leading-relaxed text-white/50 mb-6">
              Premium furniture designed, manufactured, and handcrafted in our workshop.
              Every piece is built to last.
            </p>
            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
              {/* Pinterest */}
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
              {/* Whatsaap */}

              <a href="https://wa.me/1234567890" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-green-500">
                  <path d="M20.52 3.48c-5.94-5.94-15.6-5.94-21.54 0-5.94 5.94-5.94 15.6 0 21.54 2.96 2.96 6.84 4.58 11.09 4.58 1.53 0 2.99-.21 4.38-.61l5.34 1.77-1.75-5.42c.44-1.44.68-2.97.68-4.58 0-4.25-1.62-8.13-4.58-11.09zM12 20c-1.71 0-3.35-.45-4.78-1.23l-.34-.2-3.76 1 .99-3.86-.2-.36C5.54 12.71 5 10.94 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7zm3.56-9.54c-.14-.07-.82-.41-1.09-.45-.27-.04-.48-.07-.68.23-.2.3-.77 1.09-1.05 1.31-.27.22-.55.26-.69.26-.14 0-.36-.04-.55-.13-.2-.09-.76-.32-1.45-.99-.53-.47-.88-1.05-1-1.44-.12-.38-.13-.73-.02-.93.1-.2.4-.23.71-.33.31-.09.66-.23.95-.34.29-.12.42-.19.61-.44.19-.26.09-.39.03-.53-.05-.14-.25-.38-.38-.54-.13-.16-.27-.2-.42-.27-.15-.07-.45-.25-.67-.39-.23-.15-.38-.14-.55-.08-.17.06-.72.29-1.09.97-.37.68-1.4 1.38-1.57 1.66-.17.28-.35.12-.63-.09-.28-.2-1.11-.86-1.18-.93-.07-.07-.28-.2-.28-.48 0-.29.14-.54.21-.66.07-.12.18-.28.27-.44.09-.16.15-.36.21-.58.06-.22.08-.38.04-.55-.04-.16-.19-.67-.6-1.26-.58-.79-1.34-1.37-2.27-1.49-.31-.04-.63-.06-.92.02-.3.07-.62.31-.71.79-.11.54-.02 1.23.12 1.75.14.52 1.29 1.8 1.42 2.25.13.45.07.66-.05.81-.12.15-.88.88-1.22.93-.34.07-.95.02-1.53-.05-.44-.05-.81.48-.33.68z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">Quick Links</h5>
            <ul className="space-y-3">
              {[
                { href: "/shop", label: "Shop Furniture" },
                { href: "/#craft", label: "Craftsmanship" },
                { href: "/#story", label: "Our Story" },
                { href: "/#workshop", label: "Workshop" },
                { href: "/#materials", label: "Materials" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h5 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">Customer Service</h5>
            <ul className="space-y-3">
              {["FAQ", "Shipping & Returns", "Care Instructions", "Warranty", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/50 hover:text-gold transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">Visit Our Showroom</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <span className="text-sm text-white/50">
                  42 Artisan Lane, Craft District<br />New York, NY 10012
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span className="text-sm text-white/50">+1 (555) 234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span className="text-sm text-white/50">hello@arpita&archita.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026  Arpita&Archita. All rights reserved. Handcrafted with pride.
          </p>
          <p className="text-xs text-white/40">
            Premium Furniture Manufacturer
          </p>
        </div>
      </div>
    </footer>
  );
}
