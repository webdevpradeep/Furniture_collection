"use client";
import Image from "next/image";

export default function CraftsmanshipPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl text-dark-brown mb-8 text-center">
          Craftsmanship
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-medium-gray text-lg leading-relaxed mb-4">
              Our artisans master centuries‑old techniques—hand‑carving, joinery, and wood‑turning—to create pieces that stand the test of time.
            </p>
            <p className="text-medium-gray text-lg leading-relaxed">
              Every joint is fitted without nails, every surface is sanded by hand, and every finish is applied with care, ensuring durability and a unique character.
            </p>
          </div>
            <p className="text-medium-gray text-lg leading-relaxed mb-4">
              We combine traditional hand‑crafting with sustainable sourcing, using reclaimed wood and eco‑friendly finishes to honour both heritage and the environment.
            </p>
          <div className="relative h-64 md:h-96">
            <Image
              src="https://plus.unsplash.com/premium_photo-1677702162641-03197c4167f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEFydGlzYW4lMjBjYXJ2aW5nJTIwd29vZHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Artisan carving wood"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
