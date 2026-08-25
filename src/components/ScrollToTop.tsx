"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show button when the top sentinel is NOT intersecting (i.e. user has scrolled down)
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "200px 0px 0px 0px", // Trigger when scrolled 200px down
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.unobserve(sentinel);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Sentinel element at the very top of the page */}
      <div ref={sentinelRef} className="absolute top-0 left-0 w-px h-px pointer-events-none" />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gold text-white shadow-lg border border-gold-light/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gold-dark hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold/50 ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-75 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 animate-pulse" />
      </button>
    </>
  );
}
