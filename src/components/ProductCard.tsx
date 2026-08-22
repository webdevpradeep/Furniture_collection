"use client";

import Link from "next/link";
import { Heart, ShoppingBag, Star, Eye } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <ScrollReveal animation="fade-up"><div className="group relative glass-card gold-gradient hover:scale-105 hover:shadow-xl transition-all duration-500 flex flex-col justify-between animate-fade-in-up" role="article" aria-labelledby={`product-title-${product.slug}`}>
      {/* Badges */}
      <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5 pointer-events-none">
        {product.isNew && (
          <span className="bg-charcoal/90 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 border border-white/10">
            New Arrival
          </span>
        )}
        {product.isBestSeller && (
          <span className="gold-gradient text-white text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 shadow-sm">
            Best Seller
          </span>
        )}
        {product.originalPrice && (
          <span className="bg-dark-brown/90 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1">
            Sale
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        className="absolute top-3 right-3 z-20 w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-charcoal opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-white shadow-md transform group-hover:scale-100 scale-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
        aria-label="Add to wishlist"
      >
        <Heart className="w-4 h-4" />
      </button>

      {/* Image Container with Zoom */}
      <div className="relative aspect-[4/5] bg-cream overflow-visible">
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-108 transition-transform duration-700 ease-out"
          />
        </Link>

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 p-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-end gap-2">

          <Link
            href={`/product/${product.slug}`}
            className="p-2.5 bg-white/90 hover:bg-white text-charcoal text-[11px] font-bold flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            aria-label="View product details"
          >
            <Eye className="w-3.5 h-3.5" />
          </Link>
          <a
            href={`https://wa.me/1234567890?text=I%20am%20interested%20in%20${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-green-500 hover:bg-green-600 text-white text-[11px] font-bold flex items-center justify-center ml-auto transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current"><path fill="#25D366" d="M16 .667C7.636 .667 .667 7.636 .667 16c0 2.816 .736 5.46 2.023 7.727L.667 31.333l7.61-2.007A15.317 15.317 0 0016 31.333c8.364 0 15.333-6.969 15.333-15.333S24.364 .667 16 .667zm5.8 22.2c-.16.45-.9 2.19-2.04 2.5-.51.13-.98.2-1.41.2-2.34 0-4.24-1.5-5.6-3-2.7-3.43-4.25-6.1-5.03-9.5-.08-.4-.01-.7.13-.96.13-.25.42-.6.86-.97.44-.38.88-.51 1.2-.51.33 0 .66.04 1 .08.32.04.74-.09.96-.24.46-.33.99-.71 1.48-1.04.5-.33.96-.61 1.32-.79.36-.18.68-.14.97.04.8.53 2.14 1.77 2.53 2.43.38.65.78 1.49.41 2.35-.32.78-.9 1.44-2.02 2.33-.16.12-.33.25-.5.38-.13.1-.25.2-.37.3-.4.35-.6.58-.3.82.3.23 1.04.62 1.68.93.64.3 1.33.6 1.72.62.33.02.84-.2 1.22-.6.38-.4.78-1.03.88-1.69.12-.66-.08-1.45-.49-2.3-.4-.85-2.28-2.48-2.9-2.78-.38-.18-.75-.34-1.01-.45-.26-.11-.5-.14-.71-.06-.21.08-.44.2-.69.34-.25.14-.52.28-.81.42-.29.15-.53.2-.71.13l-.33-.15c-.06-.02-.16-.04-.31-.15-.09-.07-.2-.23-.31-.44-.27-.53-.57-1.3-.31-1.86.26-.56.5-1.02.81-1.29.31-.26.61-.46.95-.51.34-.04.6.02.88.08.24.05.46.13.68.21l.44.07c.04.02.14.04.22-.08.41-.6 1.01-2.13 1.01-2.13l-.03-.17c-.12-.61-.31-1.13-.48-1.46-.16-.33-.35-.51-.58-.51-.23 0-.42.01-.63.01z" /></svg>
          </a>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white">
        <div>
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.15em] text-medium-gray mb-1">
            <span>{product.category}</span>
            <span className="text-gold font-semibold">{product.material}</span>
          </div>

          <Link href={`/product/${product.slug}`}>
            <h3 className="font-[var(--font-heading)] text-base sm:text-lg text-dark-brown group-hover:text-gold transition-colors font-medium line-clamp-1">
              {product.name}
            </h3>
          </Link>
          {/* Brand Logo */}
          <img src="/images/brand-logo.png" alt="Brand logo" className="mt-2 w-12 h-12 object-contain" />

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1.5">
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < Math.floor(product.rating)
                    ? "fill-gold text-gold"
                    : "text-light-gray"
                    }`}
                />
              ))}
            </div>
            <span className="text-[10px] text-medium-gray font-medium ml-1">
              ({product.reviewCount})
            </span>
          </div>
        </div>

        {/* Price Tag */}
        <div className="mt-4 pt-3 border-t border-light-gray/60 flex items-baseline gap-2">
          <span className="text-lg font-bold text-dark-brown">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-medium-gray line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>
      </div>
    </div>
    </ScrollReveal>
  );
}
