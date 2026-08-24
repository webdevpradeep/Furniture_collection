"use client";
import { useState } from "react";
import Image from "next/image";
import { Hammer, Sparkles, Wrench, Camera, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const workshopZones = [
  {
    title: "Timber Storage & Selection",
    description: "Our climate-controlled timber room houses over 50 species of hardwood, each air-dried for 6–12 months before use. Every board is hand-inspected for grain quality, moisture content, and natural beauty.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2066&auto=format&fit=crop",
    stats: "50+ Wood Species · 6-12 Months Air Dried",
  },
  {
    title: "CNC & Machine Room",
    description: "State-of-the-art CNC routers and planers handle the heavy cutting, ensuring sub-millimetre precision on every component. But this is just the starting point — true craftsmanship happens by hand.",
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=2070&auto=format&fit=crop",
    stats: "0.1mm Precision · 3-Axis CNC",
  },
  {
    title: "Hand Crafting Benches",
    description: "This is where the magic happens. Our master artisans spend hours at these benches, hand-cutting dovetails, shaping curves, and fitting joints that no machine can replicate.",
    image: "https://images.unsplash.com/photo-622396349377-ce65c697843b?q=80&w=1974&auto=format&fit=crop",
    stats: "50+ Artisans · 20+ Years Average Experience",
  },
  {
    title: "Assembly & Fitting Area",
    description: "Components come together in our assembly zone, where each piece is dry-fitted, adjusted, glued, and clamped with measured pressure for 24 hours to guarantee structural perfection.",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1976&auto=format&fit=crop",
    stats: "24hr Clamping · Zero-Gap Tolerance",
  },
  {
    title: "Finishing & Polish Studio",
    description: "Multi-coat finishes are applied by hand — oil, lacquer, or wax — with fine sanding between each coat. The result is a surface that glows with depth and feels impossibly smooth.",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop",
    stats: "5-7 Finish Coats · Hand-Sanded Between Layers",
  },
  {
    title: "Quality Inspection & Packaging",
    description: "Every finished piece undergoes our 12-point quality inspection before being wrapped in premium packaging with corner guards, humidity wrap, and our signature dust bag.",
    image: "https://plus.unsplash.com/premium_photo-1664300402327-1277aded5b2a?w=500&auto=format&fit=crop&q=60",
    stats: "12-Point Check · White-Glove Ready",
  },
];

const workshopFacts = [
  { num: "10,000", unit: "sq ft", label: "Workshop Space" },
  { num: "50+", unit: "", label: "Master Artisans" },
  { num: "1,000+", unit: "", label: "Pieces Per Year" },
  { num: "6", unit: "", label: "Production Zones" },
];

export default function WorkshopPage() {
  const [activeZone, setActiveZone] = useState(0);

  return (
    <div className="bg-cream">
      {/* ═══════════ HERO BANNER ═══════════ */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1547609434-b732edfee020?w=500&auto=format&fit=crop&q=60"
            alt="Furniture workshop interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold/30 text-gold text-xs uppercase tracking-[0.25em] mb-6">
              <Wrench className="w-3.5 h-3.5" />
              <span>Where Furniture Is Born</span>
            </div>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Inside Our<br />
              <span className="gold-gradient-text">10,000 sq ft Workshop</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Step inside the space where raw timber becomes heirloom furniture. Every zone, every tool, every artisan is dedicated to one mission: perfection.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ WORKSHOP STATS BAR ═══════════ */}
      <section className="bg-charcoal py-10 border-b border-gold/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {workshopFacts.map((fact) => (
              <ScrollReveal key={fact.label} animation="fade-up">
                <div>
                  <p className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-gold">
                    {fact.num}<span className="text-lg text-gold/70">{fact.unit}</span>
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-white/50 mt-1 font-semibold">
                    {fact.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ INTERACTIVE WORKSHOP TOUR ═══════════ */}
      <section className="py-24 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                Virtual Tour
              </p>
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-dark-brown">
                Explore Every Zone
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </ScrollReveal>

          {/* Zone Tabs */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="flex justify-center flex-wrap gap-2 mb-10">
              {workshopZones.map((zone, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveZone(idx)}
                  className={`px-4 py-2.5 text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                    activeZone === idx
                      ? "bg-gold text-white shadow-md"
                      : "bg-cream border border-light-gray text-dark-brown hover:border-gold"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}. {zone.title.split(" ").slice(0, 2).join(" ")}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Active Zone Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden border border-light-gray/80 shadow-2xl group">
                <Image
                  src={workshopZones[activeZone].image}
                  alt={workshopZones[activeZone].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-gold text-xs font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md px-3.5 py-1.5 border border-gold/30 inline-block">
                    Zone {String(activeZone + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() => setActiveZone((prev) => (prev === 0 ? workshopZones.length - 1 : prev - 1))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveZone((prev) => (prev === workshopZones.length - 1 ? 0 : prev + 1))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 text-gold text-xs uppercase tracking-widest font-semibold mb-4">
                <Camera className="w-3.5 h-3.5" /> Zone {String(activeZone + 1).padStart(2, "0")}
              </div>
              <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl text-dark-brown mb-4">
                {workshopZones[activeZone].title}
              </h3>
              <p className="text-medium-gray text-sm sm:text-base leading-relaxed font-light mb-6">
                {workshopZones[activeZone].description}
              </p>
              <div className="p-4 bg-cream border border-light-gray">
                <p className="text-xs text-gold font-bold uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  {workshopZones[activeZone].stats}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ BEHIND THE SCENES GALLERY ═══════════ */}
      <section className="py-24 sm:py-32 bg-cream overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                Behind The Scenes
              </p>
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-dark-brown">
                A Day In The Workshop
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2066&auto=format&fit=crop", alt: "Precision cutting", span: "md:col-span-2 md:row-span-2" },
              { src: "https://images.unsplash.com/photo-1622396349377-ce65c697843b?q=80&w=1974&auto=format&fit=crop", alt: "Hand planing", span: "" },
              { src: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1976&auto=format&fit=crop", alt: "Joinery work", span: "" },
              { src: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop", alt: "Oil finishing", span: "" },
              { src: "https://plus.unsplash.com/premium_photo-1664300402327-1277aded5b2a?w=500&auto=format&fit=crop&q=60", alt: "Artisan at work", span: "md:col-span-2" },
            ].map((photo, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 75}>
                <div className={`${photo.span} overflow-hidden border border-light-gray shadow-md group aspect-square`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1932&auto=format&fit=crop"
            alt="Showroom"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3 block">
              Visit In Person
            </span>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-5xl text-white mb-6">
              Schedule a Workshop Tour
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 font-light">
              See our artisans at work, feel the wood, and watch your future furniture being crafted before your eyes.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-9 py-4 gold-gradient text-white text-xs font-bold uppercase tracking-[0.2em] shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
            >
              Explore Our Furniture <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
