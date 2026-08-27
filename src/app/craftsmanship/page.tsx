"use client";
import Image from "next/image";
import { Hammer, Sparkles, CheckCircle, Eye, Ruler, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const techniques = [
  {
    title: "Traditional Mortise & Tenon",
    description: "The strongest joint in woodworking. We cut precise mortises and tenons that lock together without nails, creating bonds that last generations.",
    image: "https://media.istockphoto.com/id/1413273234/photo/indian-carpenter-making-a-wooden-chair.jpg?s=170667a&w=0&k=20&c=DAHj7YhK6WiDswgJ5LIwGWQfX0ARxiKe2-3y1ND3VR4=",
  },
  {
    title: "Hand-Cut Dovetails",
    description: "Each dovetail joint is hand-cut by our master craftsmen, ensuring a perfect interlocking fit that showcases both strength and artistry.",
    image: "https://plus.unsplash.com/premium_photo-1664300494539-313eac2a6095?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JhZnRzbWFuc2hpcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Steam Bending",
    description: "Using centuries-old steam bending techniques, we shape solid wood into graceful curves without compromising the grain's natural strength.",
    image: "https://images.livemint.com/img/2021/07/27/1600x900/primerchart_1627404351161_1627404356996.jpg",
  },
];

const qualityChecks = [
  "Timber moisture content verified at 8-12% for indoor stability",
  "Every joint tested under 200kg load stress before assembly",
  "Surface sanded through 5 progressive grits (80 to 400)",
  "Multi-coat finish applied with 24-hour drying between coats",
  "Final 12-point inspection by senior master craftsman",
  "White-glove packaging with corner guards and humidity wrap",
];

const processSteps = [
  { num: "01", title: "Design & Sketching", description: "Every piece begins as a hand-drawn sketch, refined through multiple iterations until proportions and aesthetics are perfect." },
  { num: "02", title: "Timber Selection", description: "Our wood buyer personally inspects each board, checking grain direction, moisture content, and natural character markings." },
  { num: "03", title: "Precision Cutting", description: "CNC machines cut the major dimensions, while hand tools refine curves, chamfers, and the subtle details that machines can't replicate." },
  { num: "04", title: "Hand Joinery", description: "Master artisans cut and fit joints by hand — mortise & tenon, dovetails, finger joints — without screws or nails wherever possible." },
  { num: "05", title: "Assembly & Fitting", description: "Components are dry-fitted, adjusted, then glued and clamped with precise pressure for 24 hours to ensure perfect alignment." },
  { num: "06", title: "Finishing & Polish", description: "Multiple coats of hand-rubbed oil or lacquer are applied, with fine hand-sanding between each coat for a silky, luminous surface." },
];

export default function CraftsmanshipPage() {
  return (
    <div className="bg-cream">
      {/* ═══════════ HERO BANNER ═══════════ */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://plus.unsplash.com/premium_photo-1677702162641-03197c4167f3?w=500&auto=format&fit=crop&q=60"
            alt="Artisan carving wood"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold/30 text-gold text-xs uppercase tracking-[0.25em] mb-6">
              <Hammer className="w-3.5 h-3.5" />
              <span>The Art of Making</span>
            </div>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Craftsmanship Is Not<br />
              <span className="gold-gradient-text">a Step. It&apos;s Every Step.</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              From the first saw cut to the final polish, every moment is guided by centuries of woodworking wisdom and an obsession with perfection.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ OUR PROCESS ═══════════ */}
      <section className="py-24 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-20">
              <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                From Sketch to Showroom
              </p>
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-dark-brown">
                The 6-Stage Process
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.num} animation="fade-up" delay={i * 75}>
                <div className="group p-8 bg-cream/50 border border-light-gray hover:border-gold/60 hover:shadow-xl transition-all duration-500 h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 font-[var(--font-heading)] text-6xl font-bold text-gold/10 group-hover:text-gold/20 transition-colors">
                    {step.num}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gold/10 group-hover:bg-gold text-gold group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300 font-[var(--font-heading)] text-lg font-bold">
                      {step.num}
                    </div>
                    <h3 className="font-[var(--font-heading)] text-xl text-dark-brown mb-3 font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-sm text-medium-gray leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TECHNIQUES SHOWCASE ═══════════ */}
      <section className="py-24 sm:py-32 bg-charcoal text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-20">
              <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                Heritage Techniques
              </p>
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl">
                Joinery That Defines Us
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <div className="space-y-20">
            {techniques.map((technique, index) => (
              <div
                key={technique.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <ScrollReveal animation={index % 2 === 1 ? "slide-left" : "slide-right"}>
                    <div className="relative aspect-[16/10] overflow-hidden border border-gold/30 shadow-2xl group">
                      <Image
                        src={technique.image}
                        alt={technique.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  </ScrollReveal>
                </div>
                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <ScrollReveal animation="fade-up" delay={200}>
                    <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl text-white mb-4">
                      {technique.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm sm:text-base font-light">
                      {technique.description}
                    </p>
                  </ScrollReveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ QUALITY ASSURANCE ═══════════ */}
      <section className="py-24 sm:py-32 bg-cream overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6">
              <ScrollReveal animation="slide-left">
                <div className="relative aspect-[4/5] overflow-hidden border border-light-gray shadow-2xl group">
                  <Image
                    src="https://images.livemint.com/img/2021/07/27/1600x900/primerchart_1627404351161_1627404356996.jpg"
                    alt="Quality inspection"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass-card-dark p-4 rounded-sm border border-gold/20">
                      <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest">
                        <Shield className="w-4 h-4" />
                        10-Year Warranty on Every Piece
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal animation="slide-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 text-gold text-xs uppercase tracking-widest font-semibold">
                  <Eye className="w-3.5 h-3.5" /> Quality Assurance
                </div>
                <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-dark-brown leading-tight mt-4 mb-8">
                  12-Point Inspection.<br />
                  <span className="gold-gradient-text">Zero Compromises.</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <div className="space-y-4">
                  {qualityChecks.map((check, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-white border border-light-gray hover:border-gold/40 transition-colors">
                      <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-sm text-medium-gray leading-relaxed font-medium">{check}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://www.e-a-a.com/wp-content/uploads/2025/02/best-wood-dining-tables.jpg"
            alt="Furniture showroom"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3 block">
              Experience The Difference
            </span>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-5xl text-white mb-6">
              See Craftsmanship in Action
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Visit our workshop to witness the precision, patience, and passion that goes into every piece we create.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/shop"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 gold-gradient text-white text-xs font-bold uppercase tracking-[0.2em] shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
              >
                Explore Collection <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/workshop"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-charcoal transition-all duration-300"
              >
                Tour Our Workshop
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
