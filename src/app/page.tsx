"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  TreePine,
  Layers,
  Leaf,
  Scissors,
  Wrench,
  Cloud,
  Recycle,
  Star,
  Shield,
  Truck,
  Award,
  CheckCircle,
  ChevronDown,
  Hammer,
  Sparkles,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ProductSlider from "@/components/ProductSlider";
import ScrollReveal from "@/components/ScrollReveal";
import { products, categories, testimonials, craftSteps, materials, qualitySteps } from "@/data/products";

const iconMap: Record<string, React.ReactNode> = {
  TreePine: <TreePine className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Leaf: <Leaf className="w-6 h-6" />,
  Scissors: <Scissors className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
  Recycle: <Recycle className="w-6 h-6" />,
};

const workshopGallery = [
  { title: "Timber Inspection", cat: "01 · Raw Material", img: "https://plus.unsplash.com/premium_photo-1664300402327-1277aded5b2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGltYmVyJTIwSW5zcGVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D" },
  { title: "Precision CNC Routing", cat: "02 · Cutting & Shaping", img: "/images/cnc_routing.jpg" },
  { title: "Artisan Hand Planing", cat: "03 · Hand Crafting", img: "/images/hand_planing.jpg" },
  { title: "Mortise Joinery Assembly", cat: "04 · Joinery & Fitting", img: "/images/mortise_joinery.jpg" },
  { title: "Multi-Coat Oil Finishing", cat: "05 · Sanding & Polish", img: "/images/oil_finishing.jpg" },
  { title: "Final Quality Stamp", cat: "06 · Inspection", img: "/images/quality_stamp.jpg" },
];

export default function HomePage() {
  const [activeWorkshopIdx, setActiveWorkshopIdx] = useState(0);

  const featured = products.filter((p) => p.isFeatured);
  const bestSellers = products.filter((p) => p.isBestSeller);

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <header className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1745198321334-4a43eb239441?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fEZ1cm5pdHVyZSUyMHdvcmtzaG9wfGVufDB8fDB8fHww"
            alt="Furniture workshop"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold/30 text-gold text-xs uppercase tracking-[0.25em] mb-6 animate-fade-in-up">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Furniture Manufacturer</span>
          </div>

          <h1 className="font-[var(--font-heading)] text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 animate-fade-in-up delay-200">
            Crafted With Precision.<br />
            <span className="gold-gradient-text">Built To Last.</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up delay-300">
            From carefully selected raw materials to the final handcrafted finish,
            every piece is made in our workshop with unwavering attention to detail.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
            <Link
              href="/shop"
              className="w-full sm:w-auto px-9 py-4 gold-gradient text-white text-xs font-bold uppercase tracking-[0.2em] shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Our Furniture <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#craft"
              className="w-full sm:w-auto px-9 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-charcoal transition-all duration-300 text-center"
            >
              See How We Make It
            </Link>
          </div>
        </div>

        {/* Hero Floating Feature Bar */}
        <div className="absolute bottom-6 left-4 right-4 z-10 max-w-4xl mx-auto hidden md:block">
          <div className="glass-card-dark p-4 rounded-sm flex justify-around items-center text-xs text-white/90 uppercase tracking-widest border border-gold/20">
            <span className="flex items-center gap-2">
              <span className="text-gold font-bold">✦</span> Solid Hardwoods
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gold font-bold">✦</span> Precision Joinery
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gold font-bold">✦</span> 10-Year Warranty
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gold font-bold">✦</span> 100% Handcrafted
            </span>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce md:hidden">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div>
      </header>

      {/* ═══════════════════ FEATURED FURNITURE SLIDER ═══════════════════ */}
      <section className="py-24 sm:py-32 bg-cream overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-14">
              <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                Handcrafted Excellence
              </p>
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-dark-brown">
                Featured Furniture Collection
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scale-in" delay={150}>
            <ProductSlider products={featured} />
          </ScrollReveal>

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold transition-colors duration-300 shadow-md"
            >
              View Complete Catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ OUR STORY ═══════════════════ */}
      <section id="story" className="py-24 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal animation="slide-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 text-gold text-xs uppercase tracking-widest font-semibold">
                  <Hammer className="w-3.5 h-3.5" /> Our Story & Heritage
                </div>
                <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-dark-brown leading-tight mt-4">
                  Designed by us.<br />
                  Crafted by us.<br />
                  <span className="gold-gradient-text">Built for your space.</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-medium-gray text-base leading-relaxed font-light">
                  We don&apos;t just sell furniture — we design, manufacture, and carefully
                  craft every single piece under one roof. Our approach combines traditional
                  woodworking skills passed down through generations with state-of-the-art
                  precision machinery.
                </p>
                <p className="text-medium-gray text-base leading-relaxed font-light mt-4">
                  Every joint, every oil finish, and every hand-selected board of oak or walnut
                  reflects our commitment to creating heirloom furniture that gets richer with time.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-light-gray">
                  {[
                    { num: "25+", label: "Years of Craft" },
                    { num: "10K+", label: "Pieces Crafted" },
                    { num: "50+", label: "Master Artisans" },
                    { num: "100%", label: "In-House Made" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-[var(--font-heading)] text-3xl font-bold text-gold">{stat.num}</p>
                      <p className="text-[10px] uppercase tracking-widest text-medium-gray mt-1 font-semibold">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <ScrollReveal animation="slide-right" delay={150}>
                <div className="space-y-4">
                  <div className="aspect-[3/4] overflow-hidden border border-light-gray shadow-md group">
                    <img
                      src="https://media.istockphoto.com/id/1317746806/photo/young-caucasian-carpenter-man-is-fixking-the-sawing-machine-in-his-own-garage-style-workshop.jpg?s=170667a&w=0&k=20&c=fTi7oCsMXKpaDasvev1SoIxQHEy2jHtma4aaHNv0b1w="
                      alt="Craftsman working"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden border border-light-gray shadow-md group">
                    <img
                      src="https://thumbs.dreamstime.com/b/indian-worker-making-furniture-workshop-iron-blade-equipment-aviable-wood-chopping-factory-india-january-168881856.jpg"
                      alt="Joinery detail"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-right" delay={300}>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square overflow-hidden border border-light-gray shadow-md group">
                    <img
                      src="https://images.livemint.com/img/2021/07/27/1600x900/primerchart_1627404351161_1627404356996.jpg"
                      alt="Woodworking"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                  </div>
                  <div className="aspect-[3/4] overflow-hidden border border-light-gray shadow-md group">
                    <img
                      src="https://cdn.tuko.co.ke/images/1120/ce3d1b879c8b48a5.jpeg?v=1"
                      alt="Finishing process"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ HOW WE MAKE IT (TIMELINE) ═══════════════════ */}
      <section id="craft" className="py-24 sm:py-32 bg-charcoal text-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-20">
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3 block">
                Step-By-Step Journey
              </span>
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl">
                How We Make It
              </h2>
              <p className="text-white/60 mt-4 max-w-lg mx-auto text-sm">
                From raw timber logs to a finished masterpiece for your home.
              </p>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <div className="space-y-20 sm:space-y-28">
            {craftSteps.map((step, index) => (
              <div
                key={step.num}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <ScrollReveal animation={index % 2 === 1 ? "slide-left" : "slide-right"}>
                    <div className="relative aspect-[16/10] overflow-hidden border border-gold/30 shadow-2xl group">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-widest text-gold bg-black/70 px-3.5 py-1.5 backdrop-blur-md border border-gold/30">
                        Stage {step.num}
                      </span>
                    </div>
                  </ScrollReveal>
                </div>

                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <ScrollReveal animation="fade-up" delay={200}>
                    <div className="w-14 h-14 rounded-full border border-gold/40 bg-gold/10 text-gold flex items-center justify-center font-[var(--font-heading)] text-2xl font-bold mb-4">
                      {step.num}
                    </div>
                    <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm sm:text-base font-light">
                      {step.description}
                    </p>
                  </ScrollReveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ INSIDE OUR WORKSHOP (INTERACTIVE SLIDER / GALLERY) ═══════════════════ */}
      <section id="workshop" className="py-24 sm:py-32 bg-cream overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                Editorial Workshop Tour
              </p>
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-dark-brown">
                Inside Our Workshop
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </ScrollReveal>

          {/* Interactive Workshop Tabs */}
          <ScrollReveal animation="fade-up" delay={150}>
            <div className="flex justify-center flex-wrap gap-2 mb-10">
              {workshopGallery.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveWorkshopIdx(idx)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all ${activeWorkshopIdx === idx
                    ? "bg-gold text-white shadow-md border-gold"
                    : "bg-white border border-light-gray text-dark-brown hover:border-gold"
                    }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Featured Active Workshop View */}
          <ScrollReveal animation="scale-in" delay={250}>
            <div className="relative aspect-[16/9] max-w-5xl mx-auto overflow-hidden border border-light-gray/80 shadow-2xl group">
              <img
                src={workshopGallery[activeWorkshopIdx].img}
                alt={workshopGallery[activeWorkshopIdx].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 sm:p-10 flex flex-col justify-end">
                <span className="text-gold text-xs font-bold uppercase tracking-widest mb-1">
                  {workshopGallery[activeWorkshopIdx].cat}
                </span>
                <h3 className="font-[var(--font-heading)] text-2xl sm:text-4xl text-white font-semibold">
                  {workshopGallery[activeWorkshopIdx].title}
                </h3>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ MATERIALS WE TRUST ═══════════════════ */}
      <section id="materials" className="py-24 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                Responsibly Sourced
              </p>
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-dark-brown">
                Materials We Trust
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {materials.map((mat, i) => (
              <ScrollReveal key={mat.name} animation="fade-up" delay={i * 75}>
                <div className="group p-7 border border-light-gray hover:border-gold/60 bg-cream/50 hover:bg-white hover:shadow-xl transition-all duration-500 relative overflow-hidden h-full">
                  <div className="w-12 h-12 rounded-full bg-gold/10 group-hover:bg-gold text-gold group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300">
                    {iconMap[mat.icon]}
                  </div>
                  <h3 className="font-[var(--font-heading)] text-xl text-dark-brown mb-2 font-semibold">
                    {mat.name}
                  </h3>
                  <p className="text-xs text-medium-gray leading-relaxed font-light">
                    {mat.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ BEST SELLERS SLIDER ═══════════════════ */}
      <section className="py-24 sm:py-32 bg-cream overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                Most Loved Pieces
              </p>
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-dark-brown">
                Best Selling Furniture
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scale-in" delay={150}>
            <ProductSlider products={bestSellers} />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ SHOWROOM CTA ═══════════════════ */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://www.e-a-a.com/wp-content/uploads/2025/02/best-wood-dining-tables.jpg"
            alt="Showroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3 block">
              Visit Us In Person
            </span>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-5xl text-white mb-6">
              Experience Our Showroom
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Touch the natural wood grain, experience the joinery precision, and consult directly
              with our master craftsmen for custom orders.
            </p>
            <a
              href="#"
              className="inline-block px-9 py-4 gold-gradient text-white text-xs font-bold uppercase tracking-[0.2em] shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
            >
              Schedule Private Appointment
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
