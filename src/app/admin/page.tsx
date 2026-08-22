"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  TrendingUp,
  DollarSign,
  Plus,
  Search,
  Menu,
  X,
  Eye,
  Edit,
  Trash2,
  ChevronDown,
  Hammer,
} from "lucide-react";
import { products } from "@/data/products";

export default function AdminDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="pt-24 sm:pt-32 min-h-screen bg-cream flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Admin Sidebar */}
      <aside
        className={`fixed lg:static top-24 sm:top-32 bottom-0 left-0 z-30 w-64 bg-[#1C1714] text-white flex flex-col transition-transform duration-300 border-r border-gold/20 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <p className="font-[var(--font-heading)] text-lg font-semibold">
              FurniNest<span className="text-gold">.</span>
            </p>
            <p className="text-[10px] text-gold uppercase tracking-wider font-semibold">
              Workshop Admin Portal
            </p>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="w-5 h-5 text-white/70" />
          </button>
        </div>

        <nav className="p-4 space-y-1 flex-1">
          {[
            { id: "overview", label: "Overview", icon: LayoutDashboard },
            { id: "orders", label: "Workshop Orders", icon: ShoppingBag },
            { id: "products", label: "Furniture Catalog", icon: Package },
            { id: "customers", label: "Clients", icon: Users },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-wider font-medium text-left transition-colors ${
                  activeTab === item.id
                    ? "bg-gold text-white font-semibold"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link
            href="/"
            className="block text-center py-2.5 bg-white/10 text-white text-xs uppercase tracking-wider font-semibold hover:bg-gold transition-colors"
          >
            Exit To Storefront
          </Link>
        </div>
      </aside>

      {/* Main Content Body */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-10">
        {/* Top Mobile Bar */}
        <div className="lg:hidden flex items-center justify-between bg-white p-4 border border-light-gray mb-6">
          <button onClick={() => setSidebarOpen(true)} className="flex items-center gap-2 text-xs font-semibold uppercase">
            <Menu className="w-5 h-5 text-charcoal" />
          </button>
          <span className="font-semibold text-xs text-gold uppercase tracking-wider">Admin Portal</span>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div>
              <h1 className="font-[var(--font-heading)] text-2xl sm:text-3xl text-dark-brown">
                Workshop Performance Overview
              </h1>
              <p className="text-xs text-medium-gray mt-1">Real-time metrics on sales, crafting progress, and queue.</p>
            </div>

            {/* Stats Cards Grid - Stacked on Mobile, 4 columns on Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-6 border border-light-gray shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-medium-gray uppercase font-semibold">Total Revenue</span>
                  <DollarSign className="w-5 h-5 text-gold" />
                </div>
                <p className="font-[var(--font-heading)] text-2xl sm:text-3xl text-dark-brown font-bold">₹84,50,000</p>
                <span className="text-[10px] text-emerald-600 font-semibold mt-1 inline-block">↑ +18.4% this month</span>
              </div>

              <div className="bg-white p-6 border border-light-gray shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-medium-gray uppercase font-semibold">Active Orders</span>
                  <ShoppingBag className="w-5 h-5 text-gold" />
                </div>
                <p className="font-[var(--font-heading)] text-2xl sm:text-3xl text-dark-brown font-bold">42</p>
                <span className="text-[10px] text-amber-600 font-semibold mt-1 inline-block">14 in Joinery / Assembly</span>
              </div>

              <div className="bg-white p-6 border border-light-gray shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-medium-gray uppercase font-semibold">Catalog Items</span>
                  <Package className="w-5 h-5 text-gold" />
                </div>
                <p className="font-[var(--font-heading)] text-2xl sm:text-3xl text-dark-brown font-bold">{products.length}</p>
                <span className="text-[10px] text-medium-gray font-semibold mt-1 inline-block">Across 6 categories</span>
              </div>

              <div className="bg-white p-6 border border-light-gray shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-medium-gray uppercase font-semibold">Active Clients</span>
                  <Users className="w-5 h-5 text-gold" />
                </div>
                <p className="font-[var(--font-heading)] text-2xl sm:text-3xl text-dark-brown font-bold">384</p>
                <span className="text-[10px] text-emerald-600 font-semibold mt-1 inline-block">↑ +12 new this week</span>
              </div>
            </div>

            {/* Orders Table - Converted to Scroll / Cards on Mobile */}
            <div className="bg-white p-6 border border-light-gray">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-[var(--font-heading)] text-xl text-dark-brown">Recent Workshop Orders</h2>
                <button
                  onClick={() => setActiveTab("orders")}
                  className="text-xs font-semibold uppercase tracking-wider text-gold hover:underline"
                >
                  View All
                </button>
              </div>

              {/* Table view for medium+ screens */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-light-gray text-medium-gray uppercase tracking-wider">
                      <th className="pb-3 font-semibold">Order ID</th>
                      <th className="pb-3 font-semibold">Client</th>
                      <th className="pb-3 font-semibold">Product</th>
                      <th className="pb-3 font-semibold">Stage</th>
                      <th className="pb-3 font-semibold">Total</th>
                      <th className="pb-3 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-light-gray/50">
                    {[
                      { id: "#FN-84920", client: "Aarav Sharma", product: "Arden Dining Table", stage: "Hand Joinery", price: "₹98,900" },
                      { id: "#FN-84919", client: "Rohan Kapoor", product: "Haven Leather Sofa", stage: "Leather Upholstery", price: "₹1,89,900" },
                      { id: "#FN-84918", client: "Priya Patel", product: "Craftsman Desk", stage: "Finishing & Oil", price: "₹1,44,900" },
                    ].map((order) => (
                      <tr key={order.id} className="hover:bg-cream/50">
                        <td className="py-4 font-semibold text-dark-brown">{order.id}</td>
                        <td className="py-4 text-medium-gray">{order.client}</td>
                        <td className="py-4 text-dark-brown">{order.product}</td>
                        <td className="py-4">
                          <span className="px-2.5 py-1 bg-amber-50 text-amber-700 font-semibold rounded-full text-[10px]">
                            {order.stage}
                          </span>
                        </td>
                        <td className="py-4 font-semibold text-dark-brown">{order.price}</td>
                        <td className="py-4 text-right">
                          <Link href="/order-tracking" className="p-1 text-gold hover:text-dark-brown">
                            <Eye className="w-4 h-4 inline" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card view for small screens */}
              <div className="sm:hidden space-y-4">
                {[
                  { id: "#FN-84920", client: "Aarav Sharma", product: "Arden Dining Table", stage: "Hand Joinery", price: "₹98,900" },
                  { id: "#FN-84919", client: "Rohan Kapoor", product: "Haven Leather Sofa", stage: "Leather Upholstery", price: "₹1,89,900" },
                ].map((order) => (
                  <div key={order.id} className="border p-4 bg-cream/30 space-y-2 text-xs">
                    <div className="flex justify-between font-semibold">
                      <span className="text-dark-brown">{order.id}</span>
                      <span className="text-gold">{order.price}</span>
                    </div>
                    <p className="text-dark-brown font-medium">{order.product}</p>
                    <p className="text-medium-gray">Client: {order.client}</p>
                    <div className="pt-2 flex justify-between items-center">
                      <span className="px-2 py-0.5 bg-amber-50 text-amber-700 font-semibold text-[10px] rounded">
                        {order.stage}
                      </span>
                      <Link href="/order-tracking" className="text-gold underline font-semibold">
                        Track
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Products Catalog Tab */}
        {activeTab === "products" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="font-[var(--font-heading)] text-2xl text-dark-brown">
                  Furniture Catalog Management
                </h1>
                <p className="text-xs text-medium-gray">Add, edit, or update workshop furniture items.</p>
              </div>
              <button className="px-4 py-2 bg-gold text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                <Plus className="w-4 h-4" /> Add Product
              </button>
            </div>

            <div className="bg-white p-6 border border-light-gray">
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-light-gray text-medium-gray uppercase tracking-wider">
                      <th className="pb-3 font-semibold">Product</th>
                      <th className="pb-3 font-semibold">Category</th>
                      <th className="pb-3 font-semibold">Material</th>
                      <th className="pb-3 font-semibold">Price</th>
                      <th className="pb-3 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-light-gray/50">
                    {products.map((p) => (
                      <tr key={p.id} className="hover:bg-cream/50">
                        <td className="py-3 font-semibold text-dark-brown flex items-center gap-3">
                          <img src={p.images[0]} alt={p.name} className="w-10 h-10 object-cover bg-cream border" />
                          {p.name}
                        </td>
                        <td className="py-3 text-medium-gray">{p.category}</td>
                        <td className="py-3 text-medium-gray">{p.material}</td>
                        <td className="py-3 font-semibold text-dark-brown">${p.price}</td>
                        <td className="py-3 text-right space-x-2">
                          <button className="p-1 text-medium-gray hover:text-dark-brown" aria-label="Edit product">
                            <Edit className="w-4 h-4 inline" />
                          </button>
                          <button className="p-1 text-medium-gray hover:text-red-600" aria-label="Delete product">
                            <Trash2 className="w-4 h-4 inline" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="bg-white p-6 border border-light-gray">
            <h1 className="font-[var(--font-heading)] text-2xl text-dark-brown mb-4">
              All Workshop Orders
            </h1>
            <p className="text-xs text-medium-gray mb-6">Manage craftsmanship queues and white-glove dispatches.</p>
            <div className="space-y-4">
              {products.slice(0, 5).map((p, idx) => (
                <div key={idx} className="border p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-xs text-gold font-bold uppercase">Order #FN-849{20 - idx}</span>
                    <h3 className="font-semibold text-sm text-dark-brown">{p.name}</h3>
                    <p className="text-xs text-medium-gray">Crafting status: {p.construction}</p>
                  </div>
                  <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-semibold uppercase">
                    Stage {idx + 1} / 6
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Clients Tab */}
        {activeTab === "customers" && (
          <div className="bg-white p-6 border border-light-gray">
            <h1 className="font-[var(--font-heading)] text-2xl text-dark-brown mb-4">
              Client Registry
            </h1>
            <div className="space-y-3">
              {[
                { name: "Aarav Sharma", email: "aarav.sharma@example.com", orders: 2, spent: "₹2,88,800" },
                { name: "Rohan Kapoor", email: "rohan.kapoor@example.com", orders: 1, spent: "₹1,44,900" },
                { name: "Priya Patel", email: "priya.patel@example.com", orders: 3, spent: "₹4,57,700" },
              ].map((c, i) => (
                <div key={i} className="border p-4 flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-sm text-dark-brown">{c.name}</p>
                    <p className="text-xs text-medium-gray">{c.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-dark-brown">{c.spent}</p>
                    <p className="text-[10px] text-medium-gray">{c.orders} Orders</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
