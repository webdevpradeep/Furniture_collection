"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

export default function ProductSlider({ products }: { products: Product[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <div className="relative group">
      {/* Scroll Navigation Buttons */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        aria-label="Scroll left"
        className={`absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-light-gray shadow-xl flex items-center justify-center text-dark-brown hover:bg-gold hover:text-white transition-all duration-300 ${canScrollLeft ? "opacity-100 cursor-pointer" : "opacity-0 cursor-not-allowed pointer-events-none"
          }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        aria-label="Scroll right"
        className={`absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-light-gray shadow-xl flex items-center justify-center text-dark-brown hover:bg-gold hover:text-white transition-all duration-300 ${canScrollRight ? "opacity-100 cursor-pointer" : "opacity-0 cursor-not-allowed pointer-events-none"
          }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <div key={product.id} className="w-[260px] sm:w-[300px] shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
