"use client";
import Link from "next/link";
import { Truck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCheckout } from "../CheckoutContext";

export default function ShippingPage() {
  const router = useRouter();
  const { shippingInfo, setShippingInfo } = useCheckout();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation could be added here
    router.push("/checkout/payment");
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-dark-brown mb-8">
          Shipping Address
        </h1>
        <form onSubmit={handleNext} className="bg-white p-6 sm:p-8 border border-light-gray space-y-6 max-w-lg mx-auto">
          <h2 className="font-[var(--font-heading)] text-xl text-dark-brown flex items-center gap-2 mb-4">
            <Truck className="w-5 h-5 text-gold" /> Delivery Address
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-dark-brown mb-1">
                First Name
              </label>
              <input
                required
                name="firstName"
                type="text"
                value={shippingInfo.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2.5 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-dark-brown mb-1">
                Last Name
              </label>
              <input
                required
                name="lastName"
                type="text"
                value={shippingInfo.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2.5 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-dark-brown mb-1">
                Street Address
              </label>
              <input
                required
                name="street"
                type="text"
                value={shippingInfo.street}
                onChange={handleChange}
                className="w-full px-3 py-2.5 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-dark-brown mb-1">
                City
              </label>
              <input
                required
                name="city"
                type="text"
                value={shippingInfo.city}
                onChange={handleChange}
                className="w-full px-3 py-2.5 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-dark-brown mb-1">
                Postal / ZIP Code
              </label>
              <input
                required
                name="zip"
                type="text"
                value={shippingInfo.zip}
                onChange={handleChange}
                className="w-full px-3 py-2.5 text-sm bg-cream border border-light-gray focus:outline-none focus:border-gold"
              />
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <Link
              href="/checkout/cart"
              className="px-6 py-2 bg-gray-200 text-dark-brown text-xs font-semibold uppercase tracking-wider hover:bg-gray-300 transition-colors"
            >
              Back
            </Link>
            <button
              type="submit"
              className="px-6 py-2 bg-gold text-white text-xs font-semibold uppercase tracking-wider hover:bg-gold/90 transition-colors"
            >
              Continue to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
