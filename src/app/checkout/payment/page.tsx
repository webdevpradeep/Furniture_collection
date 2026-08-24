"use client";
import Link from "next/link";
import { CreditCard, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCheckout } from "../CheckoutContext";
import { useCart } from "@/context/CartContext";

export default function PaymentPage() {
  const router = useRouter();
  const { items } = useCart();
  const { paymentInfo, setPaymentInfo } = useCheckout();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the order to the backend.
    // For this demo we just navigate to the confirmation page.
    router.push("/checkout/confirmation");
  };

  // Re‑calculate totals (mirroring original logic)
  const totalPrice = items.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);
  const shipping = totalPrice > 75000 ? 0 : 4999;
  const tax = Math.round(totalPrice * 0.18);
  const grandTotal = totalPrice + shipping + tax;

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-dark-brown mb-8">
          Payment Details
        </h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 border border-light-gray space-y-6 max-w-lg mx-auto">
          <h2 className="font-[var(--font-heading)] text-xl text-dark-brown flex items-center gap-2 mb-4">
            <CreditCard className="w-5 h-5 text-gold" /> Payment Method
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-dark-brown mb-1">
                Card Number
              </label>
              <input
                required
                name="cardNumber"
                type="text"
                placeholder="4532 •••• •••• 8892"
                value={paymentInfo.cardNumber}
                onChange={handleChange}
                className="w-full px-3 py-2.5 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-dark-brown mb-1">
                Expiry Date
              </label>
              <input
                required
                name="expiry"
                type="text"
                placeholder="MM/YY"
                value={paymentInfo.expiry}
                onChange={handleChange}
                className="w-full px-3 py-2.5 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-dark-brown mb-1">
                CVV / CVC
              </label>
              <input
                required
                name="cvv"
                type="text"
                placeholder="123"
                value={paymentInfo.cvv}
                onChange={handleChange}
                className="w-full px-3 py-2.5 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold"
              />
            </div>
          </div>
          {/* Order Summary */}
          <div className="bg-white p-4 border border-light-gray rounded">
            <h3 className="font-[var(--font-heading)] text-lg text-dark-brown mb-2">Order Summary</h3>
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
            <div className="pt-2 border-t border-light-gray flex justify-between items-baseline">
              <span className="font-[var(--font-heading)] text-lg text-dark-brown font-semibold">Total</span>
              <span className="text-2xl font-bold text-dark-brown">₹{grandTotal.toLocaleString("en-IN")}</span>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <Link
              href="/checkout/shipping"
              className="px-6 py-2 bg-gray-200 text-dark-brown text-xs font-semibold uppercase tracking-wider hover:bg-gray-300 transition-colors"
            >
              Back
            </Link>
            <button
              type="submit"
              className="px-6 py-2 bg-gold text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-gold/90 transition-colors"
            >
              <Lock className="w-4 h-4" /> Place Order (₹{grandTotal.toLocaleString("en-IN")})
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
