"use client";
import Link from "next/link";
import { useCheckout } from "../CheckoutContext";

export default function CartPage() {
  const { items, setItems } = useCheckout();

  // Calculate subtotal
  const subtotal = items.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-dark-brown mb-8">
          Cart Review
        </h1>
        <div className="bg-white p-6 sm:p-8 border border-light-gray space-y-6">
          <h2 className="font-[var(--font-heading)] text-xl text-dark-brown mb-4">
            Items in Your Cart
          </h2>
          <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
            {items.length === 0 ? (
              <p className="text-medium-gray">Your cart is empty.</p>
            ) : (
              items.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center gap-4 border-b border-light-gray/30 pb-3">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-md bg-cream"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-dark-brown">{product.name}</p>
                    <p className="text-xs text-medium-gray">Qty: {quantity}</p>
                  </div>
                  <span className="font-medium text-dark-brown">
                    ₹{(product.price * quantity).toLocaleString("en-IN")}
                  </span>
                </div>
              ))
            )}
          </div>
          <div className="flex justify-between text-lg font-semibold text-dark-brown">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString("en-IN")}</span>
          </div>
          <Link
            href="/checkout/shipping"
            className="block w-full text-center py-3 bg-gold text-white text-xs font-semibold uppercase tracking-wider hover:bg-gold/90 transition-colors"
          >
            Continue to Shipping
          </Link>
        </div>
      </div>
    </div>
  );
}
