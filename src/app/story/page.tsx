"use client";
import Image from "next/image";
import { Hammer, Heart, TreePine, Award, Users, Clock, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const milestones = [
  { year: "2005", title: "The Seed Was Planted", description: "Two sisters, Arpita and Archita, began experimenting with wood in their father's small workshop in Rajasthan, creating simple shelves and stools for neighbours." },
  { year: "2010", title: "First Workshop Opened", description: "With savings and a small loan, they rented a 500 sq ft space and hired two carpenters. Their hand-finished dining tables became an instant hit in the local market." },
  { year: "2015", title: "National Recognition", description: "Featured in India Design Fair, winning 'Best Emerging Furniture Brand'. The team grew to 20+ artisans, and orders started pouring in from across the country." },
  { year: "2020", title: "Digital Expansion", description: "Launched our online store, bringing handcrafted furniture to homes nationwide. Introduced the 10-Year Warranty and White-Glove Delivery service." },
  { year: "2025", title: "Global Vision", description: "Today, with 50+ master artisans and a 10,000 sq ft workshop, we craft over 1,000 pieces a year — each one a testament to heritage, quality, and love." },
];

const values = [
  { icon: <Heart className="w-6 h-6" />, title: "Passion First", description: "Every piece begins with love — for wood, for craft, for the spaces they'll live in." },
  { icon: <TreePine className="w-6 h-6" />, title: "Sustainability", description: "FSC-certified wood, reclaimed timber, and eco-friendly finishes protect the planet." },
  { icon: <Hammer className="w-6 h-6" />, title: "Heritage Craft", description: "Centuries-old joinery techniques meet modern precision for timeless durability." },
  { icon: <Award className="w-6 h-6" />, title: "Uncompromising Quality", description: "Every piece passes 12-point quality inspection before it leaves our workshop." },
];

export default function StoryPage() {
  return (
    <div className="bg-cream">
      {/* ═══════════ HERO BANNER ═══════════ */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1622396349377-ce65c697843b?q=80&w=1974&auto=format&fit=crop"
            alt="Artisan crafting furniture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold/30 text-gold text-xs uppercase tracking-[0.25em] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Est. 2005 · Rajasthan, India</span>
            </div>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Two Sisters.<br />
              <span className="gold-gradient-text">One Dream.</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              The story of Arpita&Archita is one of passion, heritage, and an unwavering belief that furniture should be crafted, not manufactured.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ FOUNDERS SECTION ═══════════ */}
      <section className="py-24 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6">
              <ScrollReveal animation="slide-left">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-[3/4] overflow-hidden border border-light-gray shadow-lg group">
                      <Image
                        src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2066&auto=format&fit=crop"
                        alt="Woodworking workshop"
                        width={400}
                        height={530}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="aspect-square overflow-hidden border border-light-gray shadow-lg group">
                      <Image
                        src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1976&auto=format&fit=crop"
                        alt="Joinery detail"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-10">
                    <div className="aspect-square overflow-hidden border border-light-gray shadow-lg group">
                      <Image
                        src="https://plus.unsplash.com/premium_photo-1664300402327-1277aded5b2a?w=500&auto=format&fit=crop&q=60"
                        alt="Artisan working"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="aspect-[3/4] overflow-hidden border border-light-gray shadow-lg group">
                      <Image
                        src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop"
                        alt="Finishing process"
                        width={400}
                        height={530}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal animation="slide-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 text-gold text-xs uppercase tracking-widest font-semibold">
                  <Users className="w-3.5 h-3.5" /> Meet The Founders
                </div>
                <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-dark-brown leading-tight mt-4">
                  Born From a Love of<br />
                  <span className="gold-gradient-text">Wood & Craft</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-medium-gray text-base leading-relaxed font-light">
                  Arpita and Archita grew up surrounded by the scent of fresh timber and the rhythm of hand saws in their father&apos;s modest carpentry shop. While other kids played outside, the sisters were learning to read wood grain, feel the weight of quality timber, and understand why a perfectly fitted mortise joint needs no nails.
                </p>
                <p className="text-medium-gray text-base leading-relaxed font-light mt-4">
                  Their vision was simple yet ambitious: create a furniture brand where every single piece — from sketch to final polish — would be designed, manufactured, and hand-finished under one roof. No outsourcing. No shortcuts. Just pure, honest craftsmanship.
                </p>
                <p className="text-medium-gray text-base leading-relaxed font-light mt-4">
                  Today, that vision has grown into a 10,000 sq ft workshop with 50+ master artisans, each trained in traditional joinery techniques passed down through generations. But the philosophy remains the same: <span className="font-semibold text-dark-brown">furniture should tell a story.</span>
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-light-gray">
                  {[
                    { num: "20+", label: "Years of Craft" },
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
          </div>
        </div>
      </section>

      {/* ═══════════ OUR VALUES ═══════════ */}
      <section className="py-24 sm:py-32 bg-cream overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                What Drives Us
              </p>
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-dark-brown">
                Our Core Values
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} animation="fade-up" delay={i * 100}>
                <div className="group p-8 bg-white border border-light-gray hover:border-gold/60 hover:shadow-xl transition-all duration-500 h-full text-center">
                  <div className="w-14 h-14 rounded-full bg-gold/10 group-hover:bg-gold text-gold group-hover:text-white flex items-center justify-center mx-auto mb-5 transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="font-[var(--font-heading)] text-xl text-dark-brown mb-3 font-semibold">
                    {value.title}
                  </h3>
                  <p className="text-sm text-medium-gray leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TIMELINE ═══════════ */}
      <section className="py-24 sm:py-32 bg-charcoal text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-20">
              <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                Our Journey
              </p>
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl">
                Milestones That Shaped Us
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gold/30 sm:-translate-x-px" />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={milestone.year} animation="fade-up" delay={index * 100}>
                  <div className={`relative flex flex-col sm:flex-row items-start ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                    {/* Content */}
                    <div className={`sm:w-1/2 pl-12 sm:pl-0 ${index % 2 === 0 ? "sm:pr-16 sm:text-right" : "sm:pl-16"}`}>
                      <span className="font-[var(--font-heading)] text-4xl font-bold text-gold">{milestone.year}</span>
                      <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl text-white mt-2 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed font-light">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-4 sm:left-1/2 top-2 sm:top-3 w-3 h-3 rounded-full bg-gold border-2 border-charcoal sm:-translate-x-1.5 -translate-x-1.5 z-10 shadow-[0_0_10px_rgba(197,160,89,0.5)]" />

                    {/* Spacer for opposite side */}
                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA SECTION ═══════════ */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1932&auto=format&fit=crop"
            alt="Beautiful furniture showroom"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3 block">
              Become Part of Our Story
            </span>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-5xl text-white mb-6">
              Explore Our Collections
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Every piece we create carries the spirit of our story. Discover furniture that&apos;s crafted with love, built with precision, and designed to become part of your family&apos;s story.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-9 py-4 gold-gradient text-white text-xs font-bold uppercase tracking-[0.2em] shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
            >
              Shop Now <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
