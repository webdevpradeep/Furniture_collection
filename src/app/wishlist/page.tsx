"use client";

import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function WishlistPage() {
  // Wishlist items demonstration
  const wishlistProducts = products.slice(0, 4);

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-1">
              Curated Collection
            </p>
            <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-dark-brown">
              Your Saved Pieces
            </h1>
          </div>
          <Link
            href="/shop"
            className="text-xs uppercase tracking-wider text-dark-brown hover:text-gold font-semibold flex items-center gap-1"
          >
            Explore More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {wishlistProducts.length === 0 ? (
          <div className="bg-white p-12 text-center border border-light-gray max-w-md mx-auto">
            <Heart className="w-12 h-12 text-medium-gray mx-auto mb-4" />
            <h2 className="font-[var(--font-heading)] text-xl text-dark-brown mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-medium-gray text-xs mb-6">
              Save furniture pieces while browsing to keep track of your favorite designs.
            </p>
            <Link
              href="/shop"
              className="px-6 py-3 bg-gold text-white text-xs font-semibold uppercase tracking-wider inline-block"
            >
              Browse Furniture
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {wishlistProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
