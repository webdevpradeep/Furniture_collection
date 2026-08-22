"use client";

import Link from "next/link";
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice, totalItems, clearCart } = useCart();

  const shipping = totalPrice > 75000 ? 0 : 4999;
  const tax = Math.round(totalPrice * 0.18);
  const grandTotal = totalPrice + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-light-gray">
            <ShoppingBag className="w-8 h-8 text-gold" />
          </div>
          <h1 className="font-[var(--font-heading)] text-3xl text-dark-brown mb-3">
            Your Cart is Empty
          </h1>
          <p className="text-medium-gray text-sm mb-8">
            Explore our collection of handcrafted furniture and bring timeless design into your space.
          </p>
          <Link
            href="/shop"
            className="inline-block px-8 py-4 bg-gold text-white text-xs font-semibold uppercase tracking-wider hover:bg-gold/90 transition-colors shadow-md"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-dark-brown mb-2">
          Your Shopping Cart
        </h1>
        <p className="text-medium-gray text-sm mb-10">
          {totalItems} {totalItems === 1 ? "piece" : "pieces"} selected for your home
        </p>

        {/* 2-column layout desktop / 1-column mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Cart Items List - 8 cols */}
          <div className="lg:col-span-8 space-y-4">
            <div className="hidden sm:grid grid-cols-12 text-xs font-semibold uppercase tracking-wider text-medium-gray pb-3 border-b border-light-gray px-4">
              <span className="col-span-6">Furniture Piece</span>
              <span className="col-span-3 text-center">Quantity</span>
              <span className="col-span-3 text-right">Total</span>
            </div>

            {items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="bg-white p-4 sm:p-6 border border-light-gray flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center"
              >
                {/* Image & Title - col-span-6 */}
                <div className="sm:col-span-6 flex items-center gap-4 w-full">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-cream overflow-hidden shrink-0 border border-light-gray">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                      {product.category}
                    </p>
                    <Link
                      href={`/product/${product.slug}`}
                      className="font-[var(--font-heading)] text-base sm:text-lg text-dark-brown hover:text-gold transition-colors font-semibold truncate block"
                    >
                      {product.name}
                    </Link>
                    <p className="text-xs text-medium-gray mt-1">
                      Material: {product.material}
                    </p>
                    <p className="text-sm font-semibold text-dark-brown mt-1 sm:hidden">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls - col-span-3 */}
                <div className="sm:col-span-3 flex items-center justify-between sm:justify-center w-full">
                  <div className="flex items-center border border-light-gray bg-cream">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="px-3 py-1 text-dark-brown hover:text-gold text-xs font-bold"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-xs font-semibold text-dark-brown min-w-[2rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="px-3 py-1 text-dark-brown hover:text-gold text-xs font-bold"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="sm:hidden text-medium-gray hover:text-red-600 transition-colors p-1"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Total & Remove Desktop - col-span-3 */}
                <div className="sm:col-span-3 hidden sm:flex items-center justify-end gap-4 w-full">
                  <span className="text-base font-semibold text-dark-brown">
                    ₹{(product.price * quantity).toLocaleString("en-IN")}
                  </span>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="text-medium-gray hover:text-red-600 transition-colors p-1"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center pt-4">
              <button
                onClick={clearCart}
                className="text-xs uppercase tracking-wider text-medium-gray hover:text-red-600 transition-colors"
              >
                Clear Cart
              </button>
              <Link
                href="/shop"
                className="text-xs uppercase tracking-wider text-dark-brown hover:text-gold transition-colors font-semibold"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary Sidebar - 4 cols */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 sm:p-8 border border-light-gray sticky top-28 space-y-6">
              <h2 className="font-[var(--font-heading)] text-xl text-dark-brown border-b border-light-gray pb-4">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-medium-gray">
                  <span>Subtotal</span>
                  <span className="font-semibold text-dark-brown">₹{totalPrice.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-medium-gray">
                  <span>White Glove Delivery</span>
                  <span className="font-semibold text-dark-brown">
                    {shipping === 0 ? "FREE" : `₹${shipping.toLocaleString("en-IN")}`}
                  </span>
                </div>
                <div className="flex justify-between text-medium-gray">
                  <span>GST (18%)</span>
                  <span className="font-semibold text-dark-brown">₹{tax.toLocaleString("en-IN")}</span>
                </div>
                <div className="pt-4 border-t border-light-gray flex justify-between items-baseline">
                  <span className="font-[var(--font-heading)] text-lg text-dark-brown font-semibold">Total</span>
                  <span className="text-2xl font-bold text-dark-brown">₹{grandTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 px-3 py-2 text-xs bg-cream border border-light-gray focus:outline-none focus:border-gold"
                  />
                  <button className="px-4 py-2 bg-charcoal text-white text-xs font-semibold uppercase tracking-wider hover:bg-gold transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                href="/checkout"
                className="w-full py-4 bg-gold text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-gold/90 transition-colors shadow-md block text-center"
              >
                Proceed To Checkout <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Guarantees */}
              <div className="space-y-2 pt-4 border-t border-light-gray">
                <div className="flex items-center gap-2 text-xs text-medium-gray">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                  <span>10-Year Craftsmanship Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-medium-gray">
                  <Truck className="w-4 h-4 text-gold shrink-0" />
                  <span>In-home placement & packaging removal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
