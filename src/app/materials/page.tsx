"use client";
import Image from "next/image";
import { TreePine, ShieldCheck, Sparkles, Feather, Layers, Compass, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const materialList = [
  {
    title: "A-Grade Indian Teakwood",
    type: "Solid Hardwood",
    description: "Sourced sustainably from state-managed forests in Central India. Teak is renowned for its high natural oil content, exceptional tensile strength, and tight grain, making it virtually impervious to rot, warping, and pests.",
    benefits: ["Naturally pest-resistant", "Exceptional life span (100+ years)", "Golden honey hue that deepens with age"],
    image: "https://images.unsplash.com/photo-1547609434-b732edfee020?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "American Black Walnut",
    type: "Solid Hardwood",
    description: "Prized for its rich, dark chocolate tones and exquisite grain patterns. Walnut offers exceptional dimensional stability and strength, perfect for heavy-use statement pieces like dining tables and sideboards.",
    benefits: ["Rich, natural dark color", "Highly shock-resistant", "Unique swirling grain patterns"],
    image: "https://images.unsplash.com/photo-1771888703722-ee7ad9143a67?q=80&w=726&auto=format&fit=crop",
  },
  {
    title: "White Oak",
    type: "Solid Hardwood",
    description: "A timeless, heavy-duty hardwood with a straight grain and a light, modern wheat tone. White Oak is highly water-resistant due to its cellular structure (tyloses), making it incredibly durable and stable.",
    benefits: ["Extremely wear-resistant", "Naturally moisture-resistant", "Modern, light aesthetic"],
    image: "https://media.istockphoto.com/id/1413273234/photo/indian-carpenter-making-a-wooden-chair.jpg?s=170667a&w=0&k=20&c=DAHj7YhK6WiDswgJ5LIwGWQfX0ARxiKe2-3y1ND3VR4=",
  },
];

const certifications = [
  { icon: <TreePine className="w-6 h-6" />, title: "FSC® Certified", description: "100% of our new wood is sourced from Forest Stewardship Council certified forests, ensuring responsible harvesting and biodiversity protection." },
  { icon: <Layers className="w-6 h-6" />, title: "Reclaimed Timber", description: "We actively salvage timber from historical buildings and structures, giving century-old wood a second life and reducing global deforestation." },
  { icon: <Feather className="w-6 h-6" />, title: "Low-VOC Finishes", description: "Our finishes are water-based oils and natural waxes that protect the timber while emitting zero harmful chemical vapours into your home." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "100% Toxic-Free", description: "Every adhesive, sealant, and oil used in our workshop is completely free of formaldehyde, lead, and heavy metals." },
];

export default function MaterialsPage() {
  return (
    <div className="bg-cream">
      {/* ═══════════ HERO BANNER ═══════════ */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1771888703722-ee7ad9143a67?q=80&w=726&auto=format&fit=crop"
            alt="Timber raw texture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold/30 text-gold text-xs uppercase tracking-[0.25em] mb-6">
              <TreePine className="w-3.5 h-3.5" />
              <span>Sourced With Integrity</span>
            </div>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Honouring The Earth.<br />
              <span className="gold-gradient-text">Celebrating The Grain.</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              We source only the finest natural timber, sustainable finishes, and reclaimed materials to ensure your furniture is as kind to the planet as it is beautiful.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ SUSTAINABILITY / VALUES ═══════════ */}
      <section className="py-24 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-20">
              <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                Eco-Conscious Standards
              </p>
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-dark-brown">
                Sustainable Sourcing
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.title} animation="fade-up" delay={i * 100}>
                <div className="group p-8 bg-cream/40 border border-light-gray hover:border-gold/60 hover:shadow-xl transition-all duration-500 h-full text-center">
                  <div className="w-14 h-14 rounded-full bg-gold/10 group-hover:bg-gold text-gold group-hover:text-white flex items-center justify-center mx-auto mb-5 transition-all duration-300">
                    {cert.icon}
                  </div>
                  <h3 className="font-[var(--font-heading)] text-xl text-dark-brown mb-3 font-semibold">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-medium-gray leading-relaxed font-light">
                    {cert.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ MATERIALS SHOWCASE ═══════════ */}
      <section className="py-24 sm:py-32 bg-cream overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-20">
              <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                Our Primary Woods
              </p>
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-dark-brown">
                The Timbers We Shape
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <div className="space-y-20">
            {materialList.map((material, index) => (
              <div
                key={material.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <ScrollReveal animation={index % 2 === 1 ? "slide-left" : "slide-right"}>
                    <div className="relative aspect-[16/10] overflow-hidden border border-light-gray/80 shadow-2xl group">
                      <Image
                        src={material.image}
                        alt={material.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                  </ScrollReveal>
                </div>
                <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <ScrollReveal animation="fade-up" delay={200}>
                    <span className="text-gold text-xs font-bold uppercase tracking-widest bg-gold/10 px-3 py-1 mb-4 inline-block">
                      {material.type}
                    </span>
                    <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl text-dark-brown mb-4">
                      {material.title}
                    </h3>
                    <p className="text-medium-gray leading-relaxed text-sm sm:text-base font-light mb-6">
                      {material.description}
                    </p>
                    <ul className="space-y-2.5">
                      {material.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-dark-brown font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </ScrollReveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FINISHES & HARDWARE ═══════════ */}
      <section className="py-24 sm:py-32 bg-charcoal text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal animation="slide-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 text-gold text-xs uppercase tracking-widest font-semibold">
                  <Sparkles className="w-3.5 h-3.5" /> Hand-Finished
                </div>
                <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-white leading-tight mt-4">
                  Eco-Friendly Oils &<br />
                  <span className="gold-gradient-text">Genuine Brass Hardware</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <h3 className="font-[var(--font-heading)] text-xl text-white mb-2">Natural Hardwax Oils</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light mb-6">
                  Instead of sealing wood under a plastic layer of polyurethane, we finish our furniture with natural plant oils and waxes. This allows the wood to breathe, highlight its natural texture, and age gracefully over time.
                </p>

                <h3 className="font-[var(--font-heading)] text-xl text-white mb-2">Solid Brass Hardware</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  All drawer pulls, hinges, and structural brackets are crafted from solid brass. We hand-turn and finish every metallic component in-house, creating accents that naturally patina over time.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal animation="slide-right">
                <div className="relative aspect-[4/5] overflow-hidden border border-gold/30 shadow-2xl group">
                  <Image
                    src="https://images.unsplash.com/photo-1631396326646-c06a935ff3a6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Polishing wood"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
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
            src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1932&auto=format&fit=crop"
            alt="Stunning showroom"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3 block">
              Experience The Timber
            </span>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-5xl text-white mb-6">
              Quality You Can Feel
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Explore our full collection of solid wood dining tables, luxury sideboards, handcrafted beds, and seating.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-9 py-4 gold-gradient text-white text-xs font-bold uppercase tracking-[0.2em] shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
            >
              Shop The Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
