"use client";
import Image from "next/image";

export default function MaterialsPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl text-dark-brown mb-8 text-center">
          Materials
        </h1>
        <p className="text-medium-gray text-lg leading-relaxed mb-6 text-center">
          We source only the finest natural materials, ensuring sustainability, durability, and timeless beauty.
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="font-[var(--font-heading)] text-2xl text-dark-brown">Premium Wood</h2>
            <p className="text-medium-gray text-lg leading-relaxed">
              Solid hardwoods such as teak, oak, and walnut are selected for their grain, strength, and age‑defying character. Each board is hand‑sorted to highlight natural patterns.
            </p>
            <h2 className="font-[var(--font-heading)] text-2xl text-dark-brown">Eco‑Friendly Finishes</h2>
            <p className="text-medium-gray text-lg leading-relaxed">
              Our finishes are low‑VOC, water‑based oils and waxes that protect the wood while enhancing its natural warmth.
            </p>
            <h2 className="font-[var(--font-heading)] text-2xl text-dark-brown">Reclaimed Materials</h2>
            <p className="text-medium-gray text-lg leading-relaxed">
              Wherever possible, we incorporate reclaimed timber, giving new life to aged wood and reducing waste.
            </p>
          </div>
          <div className="relative h-64 md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1771888703722-ee7ad9143a67?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Premium wood materials"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* Additional Materials Details */}
        <div className="mt-12">
          <h2 className="font-[var(--font-heading)] text-2xl text-dark-brown mb-4">Sustainable Certifications</h2>
          <p className="text-medium-gray text-lg leading-relaxed mb-4">
            All our wood is FSC‑certified, and we adhere to ISO 14001 environmental standards, ensuring every piece respects the planet.
          </p>
          <h2 className="font-[var(--font-heading)] text-2xl text-dark-brown mb-4">Metal Accents &amp; Hardware</h2>
          <p className="text-medium-gray text-lg leading-relaxed mb-4">
            Brass, blackened steel, and hand‑forged iron are sourced from reclaimed workshops, adding timeless character while reducing new metal extraction.
          </p>
        </div>
        </div>
      </div>

  );
}
