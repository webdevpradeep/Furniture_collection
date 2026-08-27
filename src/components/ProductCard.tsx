// src/components/ProductCard.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, Star, Eye } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isLiked = isInWishlist(product.id);

  const [isHover, setIsHover] = useState(false);

  return (
    <ScrollReveal animation="fade-up">
      <div
        className="group relative glass-card gold-gradient hover:scale-105 hover:shadow-xl transition-all duration-500 flex flex-col justify-between animate-fade-in-up w-full flex-shrink-0 overflow-visible"
        role="article"
        aria-labelledby={`product-title-${product.slug}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
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
          onClick={() => toggleWishlist(product)}
          className={`absolute top-3 right-3 z-20 w-9 h-9 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 shadow-md transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${isLiked
            ? "bg-gold text-white scale-100 opacity-100"
            : "bg-white/90 text-charcoal opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 hover:bg-gold hover:text-white"
          }`}
          aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${isLiked ? "fill-white" : ""}`} />
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
          <div className="absolute inset-0 p-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-end gap-2">
                <Link
                  href={`/product/${product.slug}`}
                  className="w-9 h-9 flex items-center justify-center bg-white/90 hover:bg-white text-charcoal rounded-md"
                  aria-label="View product details"
                >
                  <Eye className="w-5 h-5" />
                </Link>
                <a
                  href={`https://wa.me/1234567890?text=I am interested in ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-white/90 hover:bg-white rounded-md ml-auto"
                >
                  <img src="/images/whatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
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
            <div className="mt-2 flex items-center gap-1.5">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="6" fill="#2C1810"/>
                <path d="M10 28V12h4l6 10 6-10h4v16h-4V18l-6 10-6-10v10z" fill="#C9A96E"/>
              </svg>
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-dark-brown">Muebles</span>
            </div>

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
