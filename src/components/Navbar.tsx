"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
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
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Determine navbar background & text color
  const isTransparent = isHome && !isScrolled;

  const links = [
    { href: "/story", label: "Our Story" },
    { href: "/craftsmanship", label: "Craftsmanship" },
    { href: "/workshop", label: "Workshop" },
    { href: "/shop-furniture", label: "Shop Furniture" },
    { href: "/materials", label: "Materials" },
  ];

  const mobileLinks = [
    { href: "/", label: "Home" },
    ...links,
    { href: "/cart", label: "Shopping Cart" },
    { href: "/wishlist", label: "Wishlist" },
    { href: "/dashboard", label: "My Account" },
    { href: "/admin", label: "Admin Portal" },
  ];

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

      {/* Main Navbar */}
      <nav className={`fixed inset-x-0 top-0 sm:top-8 z-40 transition-all duration-500 bg-black/20 backdrop-blur-lg border-b border-gold/20 py-3.5 shadow-md text-white`}>
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
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all ${pathname === link.href ? "text-gold" : "text-white/90 hover:text-gold"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/shop" aria-label="Search" className="hidden sm:block p-2 text-white/90 hover:text-gold transition-colors">
              <Search className="w-5 h-5" />
            </Link>
            <Link href="/wishlist" aria-label="Wishlist" className="hidden sm:block p-2 text-white/90 hover:text-gold transition-colors">
              <Heart className="w-5 h-5" />
            </Link>
            <Link href="/dashboard" aria-label="Account" className="hidden sm:block p-2 text-white/90 hover:text-gold transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/cart" className="relative p-2 text-white/90 hover:text-gold transition-colors" aria-label="Cart">
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
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto animate-fade-in" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-[70] w-[300px] bg-[#1C1714]/95 backdrop-blur-lg border-r border-gold/20 text-white flex flex-col justify-between transition-transform duration-300 lg:hidden ${mobileMenuOpen ? "translate-x-0 animate-slide-right" : "-translate-x-full"}`}
      >
        <div>
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="font-[var(--font-heading)] text-xl font-semibold text-white tracking-wider">
                Arpita&Archita<span className="text-gold">.</span>
              </span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" className="text-white/70 hover:text-gold transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col p-6 gap-1">
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 text-xs font-medium uppercase tracking-[0.2em] border-b border-white/5 ${pathname === link.href ? "text-gold" : "text-white/80 hover:text-gold"} transition-all`}
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
