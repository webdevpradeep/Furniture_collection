"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Filter, SlidersHorizontal, Search, X, Star, Check } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories, materials } from "@/data/products";
import { Product } from "@/types";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedMaterial, setSelectedMaterial] = useState("all");
  const [maxPrice, setMaxPrice] = useState(250000);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesSearch =
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCat =
          selectedCategory === "all" ||
          p.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory.toLowerCase() ||
          p.category.toLowerCase() === selectedCategory.toLowerCase();

        const matchesMat =
          selectedMaterial === "all" ||
          p.material.toLowerCase().includes(selectedMaterial.toLowerCase());

        const matchesPrice = p.price <= maxPrice;
        const matchesRating = p.rating >= minRating;

        return matchesSearch && matchesCat && matchesMat && matchesPrice && matchesRating;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0; // featured default
      });
  }, [searchQuery, selectedCategory, selectedMaterial, maxPrice, minRating, sortBy]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedMaterial("all");
    setMaxPrice(250000);
    setMinRating(0);
    setSortBy("featured");
  };

  const activeFilterCount =
    (selectedCategory !== "all" ? 1 : 0) +
    (selectedMaterial !== "all" ? 1 : 0) +
    (maxPrice < 250000 ? 1 : 0) +
    (minRating > 0 ? 1 : 0) +
    (searchQuery !== "" ? 1 : 0);

  return (
    <div className="pt-24 sm:pt-32 pb-20 bg-cream min-h-screen">
      {/* Header Banner */}
      <div className="bg-charcoal text-white py-12 sm:py-16 mb-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <p className="text-gold text-xs uppercase tracking-[0.3em] mb-2">Handcrafted Collection</p>
          <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl mb-4">
            Shop Furniture
          </h1>
          <p className="text-white/60 text-sm max-w-xl mx-auto">
            Explore pieces designed in-house and handcrafted in our workshop using sustainable materials.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Top Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-white p-4 border border-light-gray">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-medium-gray" />
            <input
              type="text"
              placeholder="Search by name, material, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-medium-gray hover:text-charcoal"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between md:justify-end gap-4">
            {/* Mobile Filter Toggle Button */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-charcoal text-white text-xs font-semibold uppercase tracking-wider"
            >
              <Filter className="w-4 h-4" />
              Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
            </button>

            {/* Sort dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-medium-gray uppercase tracking-wider hidden sm:inline">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort products"
                className="px-3 py-2 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold text-dark-brown font-medium"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-light-gray">
              <h3 className="font-[var(--font-heading)] text-lg text-dark-brown font-semibold flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-gold" /> Filters
              </h3>
              {activeFilterCount > 0 && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-gold underline hover:text-dark-brown transition-colors"
                >
                  Reset All
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-dark-brown mb-3">Categories</h4>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`block w-full text-left text-sm py-1 transition-colors ${
                    selectedCategory === "all" ? "text-gold font-semibold" : "text-medium-gray hover:text-dark-brown"
                  }`}
                >
                  All Categories
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`block w-full text-left text-sm py-1 transition-colors ${
                      selectedCategory === cat.slug ? "text-gold font-semibold" : "text-medium-gray hover:text-dark-brown"
                    }`}
                  >
                    {cat.name} ({cat.productCount})
                  </button>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-dark-brown mb-3">Material</h4>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedMaterial("all")}
                  className={`block w-full text-left text-sm py-1 transition-colors ${
                    selectedMaterial === "all" ? "text-gold font-semibold" : "text-medium-gray hover:text-dark-brown"
                  }`}
                >
                  All Materials
                </button>
                {["Oak", "Walnut", "Ash", "Beech", "Leather", "Teak", "Steel"].map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`block w-full text-left text-sm py-1 transition-colors ${
                      selectedMaterial === mat ? "text-gold font-semibold" : "text-medium-gray hover:text-dark-brown"
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-dark-brown">Max Price</h4>
                <span className="text-sm font-semibold text-gold">₹{maxPrice.toLocaleString("en-IN")}</span>
              </div>
              <input
                type="range"
                min="20000"
                max="250000"
                step="5000"
                aria-label="Maximum price filter"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-gold"
              />
            </div>

            {/* Rating Filter */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-dark-brown mb-3">Min Rating</h4>
              <div className="space-y-1.5">
                {[4.5, 4.0, 3.5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setMinRating(minRating === rating ? 0 : rating)}
                    className={`flex items-center gap-2 w-full text-sm py-1 ${
                      minRating === rating ? "text-gold font-semibold" : "text-medium-gray hover:text-dark-brown"
                    }`}
                  >
                    <div className="flex text-gold">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(rating) ? "fill-gold text-gold" : "text-light-gray"
                          }`}
                        />
                      ))}
                    </div>
                    <span>{rating}+ Stars</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs text-medium-gray uppercase tracking-wider">
                Showing {filteredProducts.length} results
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white p-12 text-center border border-light-gray my-8">
                <h3 className="font-[var(--font-heading)] text-2xl text-dark-brown mb-2">
                  No furniture found
                </h3>
                <p className="text-medium-gray text-sm mb-6">
                  Try adjusting your filters or search terms.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-3 bg-gold text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden ${
          mobileFilterOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileFilterOpen(false)}
      />
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl max-h-[85vh] overflow-y-auto p-6 transition-transform duration-300 lg:hidden ${
          mobileFilterOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between pb-4 border-b border-light-gray mb-6">
          <h3 className="font-[var(--font-heading)] text-xl text-dark-brown">Filters</h3>
          <button onClick={() => setMobileFilterOpen(false)} aria-label="Close filters">
            <X className="w-6 h-6 text-charcoal" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Category */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-dark-brown mb-3">Categories</h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1.5 text-xs rounded-full border ${
                  selectedCategory === "all" ? "bg-gold text-white border-gold" : "bg-cream border-light-gray"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3 py-1.5 text-xs rounded-full border ${
                    selectedCategory === cat.slug ? "bg-gold text-white border-gold" : "bg-cream border-light-gray"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Material */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-dark-brown mb-3">Material</h4>
            <div className="flex flex-wrap gap-2">
              {["all", "Oak", "Walnut", "Ash", "Beech", "Leather", "Teak"].map((mat) => (
                <button
                  key={mat}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`px-3 py-1.5 text-xs rounded-full border ${
                    selectedMaterial === mat ? "bg-gold text-white border-gold" : "bg-cream border-light-gray"
                  }`}
                >
                  {mat === "all" ? "All Materials" : mat}
                </button>
              ))}
            </div>
          </div>

          {/* Max Price */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-dark-brown">Max Price</h4>
              <span className="text-sm font-semibold text-gold">₹{maxPrice.toLocaleString("en-IN")}</span>
            </div>
            <input
              type="range"
              min="20000"
              max="250000"
              step="5000"
              aria-label="Maximum price filter"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-gold"
            />
          </div>

          <div className="pt-4 flex gap-4">
            <button
              onClick={resetFilters}
              className="flex-1 py-3 border border-charcoal text-charcoal text-xs font-semibold uppercase tracking-wider"
            >
              Reset
            </button>
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="flex-1 py-3 bg-gold text-white text-xs font-semibold uppercase tracking-wider"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center">Loading shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}
