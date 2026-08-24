"use client";
import Image from "next/image";

export default function ShopFurniturePage() {
  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl text-dark-brown mb-8 text-center">
          Shop Furniture
        </h1>
        <p className="text-medium-gray text-lg leading-relaxed mb-8 text-center">
          Explore our curated collection of handcrafted furniture, each piece made with premium materials and meticulous attention to detail.
        </p>
        {/* Example grid of furniture items */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Placeholder cards */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-4 border border-light-gray rounded-lg shadow-md">
              <div className="relative h-48 mb-4">
                <Image
                  src={`https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80`}
                  alt={`Furniture ${i}`}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <h3 className="font-[var(--font-heading)] text-xl text-dark-brown mb-2 text-center">
                Furniture {i}
              </h3>
              <p className="text-medium-gray text-sm text-center">Elegant, handcrafted, sustainable.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
