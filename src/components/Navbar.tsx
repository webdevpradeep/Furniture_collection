"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Heart, Menu, X, Search, User, Hammer } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Determine navbar background & text color state
  // On homepage before scroll: transparent with white text over hero
  // Scrolled OR on any inner page: solid luxury dark charcoal (#1C1714) with gold accents
  const isTransparent = isHome && !isScrolled;

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#14100E] text-gold/90 text-[11px] font-medium tracking-widest uppercase py-2 px-4 text-center border-b border-gold/10 hidden sm:block fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <span className="flex items-center gap-1.5 mx-auto">
            <Hammer className="w-3.5 h-3.5 text-gold" />
            Handcrafted In Our Workshop · White-Glove Delivery On Orders Over ₹75,000
          </span>
        </div>
      </div>

      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${isTransparent
          ? "top-0 sm:top-8 bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
          : "top-0 sm:top-8 bg-[#1C1714]/95 backdrop-blur-md border-b border-gold/20 py-3.5 shadow-xl"
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 -ml-2 text-white hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className="font-[var(--font-heading)] text-2xl sm:text-3xl font-semibold tracking-wider text-white group-hover:text-gold transition-colors">
              Arpita&Archita
            </span>
            <span className="text-gold text-3xl leading-none">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { href: "/#story", label: "Our Story" },
              { href: "/#craft", label: "Craftsmanship" },
              { href: "/#workshop", label: "Workshop" },
              { href: "/shop", label: "Shop Furniture" },
              { href: "/#materials", label: "Materials" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-white/90 hover:text-gold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/shop"
              aria-label="Search"
              className="hidden sm:block p-2 text-white/90 hover:text-gold transition-colors"
            >
              <Search className="w-5 h-5" />
            </Link>
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="hidden sm:block p-2 text-white/90 hover:text-gold transition-colors"
            >
              <Heart className="w-5 h-5" />
            </Link>
            <Link
              href="/dashboard"
              aria-label="Account"
              className="hidden sm:block p-2 text-white/90 hover:text-gold transition-colors"
            >
              <User className="w-5 h-5" />
            </Link>
            <Link
              href="/cart"
              className="relative p-2 text-white/90 hover:text-gold transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-[70] w-[300px] bg-[#1C1714] text-white shadow-2xl transform transition-transform duration-300 lg:hidden border-r border-gold/20 flex flex-col justify-between ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div>
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="font-[var(--font-heading)] text-xl font-semibold text-white tracking-wider">
              FurniNest<span className="text-gold">.</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="text-white/70 hover:text-gold transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col p-6 gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/#story", label: "Our Story" },
              { href: "/#craft", label: "Craftsmanship" },
              { href: "/#workshop", label: "Workshop" },
              { href: "/shop", label: "Shop Furniture" },
              { href: "/#materials", label: "Materials" },
              { href: "/cart", label: "Shopping Cart" },
              { href: "/wishlist", label: "Wishlist" },
              { href: "/dashboard", label: "My Account" },
              { href: "/admin", label: "Admin Portal" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-xs text-white/80 font-medium uppercase tracking-[0.2em] border-b border-white/5 hover:text-gold hover:pl-2 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="p-6 border-t border-white/10 text-center">
          <p className="text-[10px] text-gold uppercase tracking-widest">Premium Furniture Manufacturer</p>
        </div>
      </div>
    </>
  );
}
