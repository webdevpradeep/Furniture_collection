"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ShieldCheck, CreditCard, Truck, Lock } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [orderComplete, setOrderComplete] = useState(false);

  const shipping = totalPrice > 75000 ? 0 : 4999;
  const tax = Math.round(totalPrice * 0.18);
  const grandTotal = totalPrice + shipping + tax;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    clearCart();
  };

  if (orderComplete) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-cream">
        <div className="bg-white bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-xl p-8 max-w-lg w-full mx-auto text-center shadow-xl">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>
          <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
            Thank You For Your Order
          </p>
          <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-dark-brown mb-4">
            Order #FN-84920 Confirmed
          </h1>
          <p className="text-medium-gray text-sm leading-relaxed mb-8">
            Our craftsmen have received your order details and will begin selecting materials for your piece. We have sent a confirmation email with tracking instructions.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/order-tracking"
              className="px-6 py-3 bg-gold text-white text-xs font-semibold uppercase tracking-wider hover:bg-gold/90 transition-colors"
            >
              Track Order
            </Link>
            <Link
              href="/shop"
              className="px-6 py-3 border border-dark-brown text-dark-brown text-xs font-semibold uppercase tracking-wider hover:bg-dark-brown hover:text-white transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-dark-brown mb-8">
          Checkout
        </h1>

        <form onSubmit={handleSubmitOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Shipping & Payment Info - 7 cols */}
            <div className="lg:col-span-7 space-y-8">
              {/* Shipping Address */}
              <div className="bg-white p-6 sm:p-8 border border-light-gray">
                <h2 className="font-[var(--font-heading)] text-xl text-dark-brown mb-6 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-gold" /> Delivery Address
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-dark-brown mb-1">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-3 py-2.5 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-dark-brown mb-1">
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-3 py-2.5 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-dark-brown mb-1">
                      Street Address
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-3 py-2.5 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-dark-brown mb-1">
                      City
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-3 py-2.5 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-dark-brown mb-1">
                      Postal / ZIP Code
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-3 py-2.5 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-white p-6 sm:p-8 border border-light-gray">
                <h2 className="font-[var(--font-heading)] text-xl text-dark-brown mb-6 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-gold" /> Payment Method
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-dark-brown mb-1">
                        Card Number
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="4532 •••• •••• 8892"
                        className="w-full px-3 py-2.5 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-dark-brown mb-1">
                        Expiry Date
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-3 py-2.5 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-dark-brown mb-1">
                        CVV / CVC
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="123"
                        className="w-full px-3 py-2.5 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Review - 5 cols */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 border border-light-gray sticky top-28 space-y-6">
                <h2 className="font-[var(--font-heading)] text-xl text-dark-brown border-b border-light-gray pb-4">
                  Order Summary
                </h2>

                <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                  {items.map(({ product, quantity }) => (
                    <div key={product.id} className="flex flex-col items-center gap-3 py-2 border-b border-light-gray/50">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-24 h-24 object-cover bg-cream rounded-md mb-2 border"
                      />
                      <div className="text-center">
                        <p className="text-sm font-semibold text-dark-brown truncate">{product.name}</p>
                        <p className="text-xs text-medium-gray">Qty: {quantity}</p>
                      </div>
                      <span className="text-sm font-bold text-dark-brown mt-1">
                        ₹{(product.price * quantity).toLocaleString("en-IN")}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 text-sm pt-2">
                  <div className="flex justify-between text-medium-gray">
                    <span>Subtotal</span>
                    <span className="font-semibold text-dark-brown">₹{totalPrice.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-medium-gray">
                    <span>White Glove Shipping</span>
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

                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-gold/90 transition-colors shadow-md"
                >
                  <Lock className="w-4 h-4" /> Place Order (₹{grandTotal.toLocaleString("en-IN")})
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-medium-gray uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span>256-Bit Encrypted Secure Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
