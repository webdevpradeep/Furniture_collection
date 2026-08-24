"use client";
import Image from "next/image";

export default function StoryPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl text-dark-brown mb-8 text-center">
          Our Story
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-medium-gray text-lg leading-relaxed mb-4">
              Founded by two passionate artisans, our brand blends traditional craftsmanship with modern design. Every piece is born from a love of wood, a respect for heritage, and a commitment to sustainability.
            </p>
            <p className="text-medium-gray text-lg leading-relaxed mb-4">
              Our founders, Arpita and Archita, grew up surrounded by the scent of fresh timber and the rhythm of saws. Their vision was to create a space where heritage meets contemporary living, offering pieces that tell a story of craftsmanship and love for nature.
            </p>
            <p className="text-medium-gray text-lg leading-relaxed">
              From sketch to final polish, we hand‑select premium materials, shape each component in our workshop, and finish it with meticulous attention to detail. Our story is rooted in the belief that furniture should be timeless, functional, and beautiful.
            </p>
          </div>
          <div className="relative h-64 md:h-96">
            <Image
              src="https://plus.unsplash.com/premium_photo-1664300402327-1277aded5b2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXJ0aXNhbiUyMHdvcmtpbmclMjBpbiUyMHdvcmtzaG9wfGVufDB8fDB8fHww"
              alt="Artisan working in workshop"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
