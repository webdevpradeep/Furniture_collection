"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Package, Heart, MapPin, Settings, LogOut, ChevronRight, Truck } from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Mobile Header / Profile Summary */}
        <div className="bg-white p-6 border border-light-gray mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gold text-white font-[var(--font-heading)] text-2xl rounded-full flex items-center justify-center font-bold">
              EV
            </div>
            <div>
              <h1 className="font-[var(--font-heading)] text-xl text-dark-brown font-semibold">
                Eleanor Vance
              </h1>
              <p className="text-xs text-medium-gray">eleanor.vance@example.com · Client since 2024</p>
            </div>
          </div>
          <Link
            href="/admin"
            className="hidden sm:inline-block px-4 py-2 bg-charcoal text-white text-xs uppercase tracking-wider font-semibold hover:bg-gold transition-colors"
          >
            Admin View
          </Link>
        </div>

        {/* Layout: Sidebar + Main Content on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Navigation Sidebar / Mobile Tabs */}
          <div className="lg:col-span-3">
            {/* Desktop Navigation */}
            <div className="bg-white border border-light-gray p-2 space-y-1 hidden lg:block">
              {[
                { id: "orders", label: "My Orders", icon: Package },
                { id: "wishlist", label: "Wishlist (2)", icon: Heart },
                { id: "addresses", label: "Saved Addresses", icon: MapPin },
                { id: "settings", label: "Account Settings", icon: Settings },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-wider font-medium text-left transition-colors ${
                      activeTab === tab.id
                        ? "bg-gold text-white font-semibold"
                        : "text-dark-brown hover:bg-cream"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
              <Link
                href="/login"
                className="w-full flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-wider font-medium text-left text-red-600 hover:bg-red-50 transition-colors pt-4 border-t border-light-gray mt-2"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </Link>
            </div>

            {/* Mobile Horizontal Tabs */}
            <div className="flex overflow-x-auto gap-2 lg:hidden pb-2">
              {[
                { id: "orders", label: "Orders" },
                { id: "wishlist", label: "Wishlist" },
                { id: "addresses", label: "Addresses" },
                { id: "settings", label: "Settings" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold whitespace-nowrap border ${
                    activeTab === tab.id
                      ? "bg-gold text-white border-gold"
                      : "bg-white text-dark-brown border-light-gray"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9">
            {activeTab === "orders" && (
              <div className="space-y-6">
                <div className="bg-white p-6 border border-light-gray">
                  <h2 className="font-[var(--font-heading)] text-xl text-dark-brown mb-4">
                    Recent Orders
                  </h2>

                  {/* Order Card 1 */}
                  <div className="border border-light-gray p-4 sm:p-6 mb-4 space-y-4">
                    <div className="flex flex-wrap justify-between items-center gap-2 pb-4 border-b border-light-gray text-xs">
                      <div>
                        <span className="text-medium-gray uppercase tracking-wider">Order ID: </span>
                        <span className="font-semibold text-dark-brown">#FN-84920</span>
                      </div>
                      <div>
                        <span className="text-medium-gray uppercase tracking-wider">Placed: </span>
                        <span className="font-semibold text-dark-brown">August 18, 2026</span>
                      </div>
                      <div>
                        <span className="px-2.5 py-1 bg-amber-50 text-amber-700 font-semibold rounded-full">
                          In Crafting Stage
                        </span>
                      </div>
                      <Link
                        href="/order-tracking"
                        className="text-gold font-semibold hover:underline flex items-center gap-1"
                      >
                        Track Order <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="flex items-center gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1932&auto=format&fit=crop"
                        alt="Arden Dining Table"
                        className="w-16 h-16 object-cover bg-cream border"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-dark-brown text-sm">Arden Solid Wood Dining Table</p>
                        <p className="text-xs text-medium-gray">Natural Oak · 180cm x 90cm</p>
                      </div>
                      <span className="text-sm font-semibold text-dark-brown">₹98,900</span>
                    </div>
                  </div>

                  {/* Order Card 2 */}
                  <div className="border border-light-gray p-4 sm:p-6 space-y-4">
                    <div className="flex flex-wrap justify-between items-center gap-2 pb-4 border-b border-light-gray text-xs">
                      <div>
                        <span className="text-medium-gray uppercase tracking-wider">Order ID: </span>
                        <span className="font-semibold text-dark-brown">#FN-73019</span>
                      </div>
                      <div>
                        <span className="text-medium-gray uppercase tracking-wider">Placed: </span>
                        <span className="font-semibold text-dark-brown">May 12, 2026</span>
                      </div>
                      <div>
                        <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 font-semibold rounded-full">
                          Delivered
                        </span>
                      </div>
                      <Link
                        href="/order-tracking"
                        className="text-gold font-semibold hover:underline flex items-center gap-1"
                      >
                        Details <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="flex items-center gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=2039&auto=format&fit=crop"
                        alt="Oslo Bookshelf"
                        className="w-16 h-16 object-cover bg-cream border"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-dark-brown text-sm">Oslo Walnut Bookshelf</p>
                        <p className="text-xs text-medium-gray">Rich Walnut · 100cm x 35cm</p>
                      </div>
                      <span className="text-sm font-semibold text-dark-brown">₹68,900</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "wishlist" && (
              <div className="bg-white p-6 border border-light-gray">
                <h2 className="font-[var(--font-heading)] text-xl text-dark-brown mb-6">
                  Saved Pieces
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border p-4 flex gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
                      alt="Haven Sofa"
                      className="w-20 h-20 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm text-dark-brown">Haven Leather Sofa</p>
                      <p className="text-xs text-gold font-semibold mt-1">₹1,89,900</p>
                      <Link href="/product/haven-leather-sofa" className="text-xs text-dark-brown underline mt-2 block">
                        View Product
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "addresses" && (
              <div className="bg-white p-6 border border-light-gray">
                <h2 className="font-[var(--font-heading)] text-xl text-dark-brown mb-6">
                  Saved Delivery Addresses
                </h2>
                <div className="border border-gold p-4 bg-gold/5 max-w-md">
                  <span className="text-[10px] uppercase font-bold text-gold tracking-wider">Default</span>
                  <p className="font-semibold text-sm text-dark-brown mt-1">Eleanor Vance</p>
                  <p className="text-xs text-medium-gray mt-1">742 Evergreen Terrace</p>
                  <p className="text-xs text-medium-gray">Springfield, OR 97477</p>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white p-6 border border-light-gray space-y-4 max-w-lg">
                <h2 className="font-[var(--font-heading)] text-xl text-dark-brown mb-6">
                  Account Settings
                </h2>
                <div>
                  <label className="block text-xs font-semibold text-dark-brown uppercase tracking-wider mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Eleanor Vance"
                    className="w-full px-3 py-2 text-sm bg-cream border focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-dark-brown uppercase tracking-wider mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="eleanor.vance@example.com"
                    className="w-full px-3 py-2 text-sm bg-cream border focus:outline-none focus:border-gold"
                  />
                </div>
                <button className="px-6 py-2.5 bg-gold text-white text-xs font-semibold uppercase tracking-wider">
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
