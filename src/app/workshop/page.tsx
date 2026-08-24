"use client";
import Image from "next/image";

export default function WorkshopPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl text-dark-brown mb-8 text-center">
          Our Workshop
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-medium-gray text-lg leading-relaxed mb-4">
              Step inside our workshop where the magic happens. Each piece begins as raw timber, carefully selected for its grain, strength, and beauty.
            </p>
            <p className="text-medium-gray text-lg leading-relaxed">
              Our team combines traditional hand tools with modern machinery to shape, assemble, and finish every item. Sustainability is at the heart of our process – we waste minimal material and source responsibly.
            </p>
          </div>
          <div className="relative h-64 md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1547609434-b732edfee020?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnVybml0dXJlJTIwd29ya3Nob3AlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Furniture workshop interior"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
