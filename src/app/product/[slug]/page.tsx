"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
export const dynamic = 'force-dynamic';
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  ShoppingBag,
  Heart,
  Truck,
  Shield,
  RotateCcw,
  CheckCircle,
  Hammer,
  TreePine,
  Ruler,
  Award,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

const finishColors: Record<string, string> = {
  "Natural Matte": "#D8C3A5",
  "Warm Walnut": "#4A3525",
  "Dark Espresso": "#241812",
  "Honey Oak": "#C5A059",
  "Rich Walnut": "#3E2B1E",
  "Light Ash": "#E6DCCA",
  "Charcoal": "#262422",
  "Cognac Brown": "#8C4A26",
  "Black Noir": "#1A1A1A",
  "Tan Saddle": "#B87333",
  "Natural Ash": "#E0D7C6",
  "White Wash": "#FAF6F0",
  "Graphite": "#383838",
  "Warm Cherry": "#6E2D1B",
  "Classic Mahogany": "#42160E",
  "Natural Teak": "#A8763E",
  "Golden Teak": "#B58448",
  "Weathered Grey": "#807D78",
  "Natural Beech": "#D6C4AD",
  "Black": "#181818",
  "Dark Walnut": "#362419",
  "Natural Edge": "#8A5A36",
};

export default function ProductDetailPage() {
  const { slug } = useParams() as { slug: string };
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const { addItem } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState(
    product.finishOptions?.[0] || product.finish
  );
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-cream">
      {/* Toast Notification */}
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1C1714] text-white px-6 py-4 rounded-sm shadow-2xl flex items-center gap-3 border border-gold/40 animate-fade-in-up">
          <CheckCircle className="w-5 h-5 text-gold" />
          <div>
            <p className="text-sm font-semibold">{product.name}</p>
            <p className="text-xs text-white/70">Added to your shopping cart!</p>
          </div>
        </div>
      )}

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-medium-gray mb-8 uppercase tracking-widest font-medium">
          <Link href="/" className="hover:text-dark-brown">Home</Link>
          <ChevronRight className="w-3 h-3 text-gold" />
          <Link href="/shop" className="hover:text-dark-brown">Shop</Link>
          <ChevronRight className="w-3 h-3 text-gold" />
          <Link href={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-dark-brown">
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3 text-gold" />
          <span className="text-dark-brown font-semibold truncate">{product.name}</span>
        </div>

        {/* Top Product Section: Gallery + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20">
          {/* Gallery - 7 cols on desktop */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto shrink-0">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 aspect-square overflow-hidden border-2 transition-all ${
                    selectedImageIndex === idx
                      ? "border-gold shadow-md scale-105"
                      : "border-light-gray opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`${product.name} detail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Display Image */}
            <div className="flex-1 aspect-[4/5] bg-white overflow-hidden border border-light-gray/80 shadow-md relative group">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 bg-charcoal/90 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 border border-white/10">
                {product.production}
              </span>
            </div>
          </div>

          {/* Product Info - 5 cols on desktop */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.25em] mb-2 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {product.category} · {product.material}
              </p>
              <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-dark-brown mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-light-gray"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-medium-gray font-medium">
                  {product.rating} ({product.reviewCount} customer reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-light-gray">
                <span className="text-3xl font-bold text-dark-brown">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-medium-gray line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
                <span className="text-xs text-emerald-800 bg-emerald-100 px-3 py-1 font-semibold ml-auto border border-emerald-200">
                  In Stock & Ready to Ship
                </span>
              </div>

              <p className="text-medium-gray text-sm leading-relaxed mb-6 font-light">
                {product.longDescription}
              </p>

              {/* Workshop Craftsmanship Badge */}
              <div className="bg-white p-4 border border-light-gray mb-6 space-y-1.5 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-dark-brown uppercase tracking-wider">
                  <Hammer className="w-4 h-4 text-gold" />
                  Made In Our Workshop
                </div>
                <p className="text-xs text-medium-gray">
                  Constructed using <span className="font-semibold text-dark-brown">{product.construction}</span> and finished with <span className="font-semibold text-dark-brown">{product.craft}</span>.
                </p>
              </div>

              {/* Finish Options Swatches */}
              {product.finishOptions && (
                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark-brown mb-2.5">
                    Finish Swatch: <span className="text-gold font-semibold">{selectedFinish}</span>
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {product.finishOptions.map((opt) => {
                      const colorHex = finishColors[opt] || "#C5A059";
                      const isSelected = selectedFinish === opt;
                      return (
                        <button
                          key={opt}
                          onClick={() => setSelectedFinish(opt)}
                          className={`flex items-center gap-2 px-3.5 py-2 text-xs border uppercase tracking-wider transition-all ${
                            isSelected
                              ? "border-gold bg-dark-brown text-white font-bold shadow-md"
                              : "border-light-gray bg-white text-dark-brown hover:border-gold"
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-black/20 shrink-0"
                            style={{ backgroundColor: colorHex }}
                          />
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center border border-light-gray bg-white shadow-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3.5 py-2.5 text-dark-brown hover:text-gold text-sm font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 py-2.5 text-sm font-bold text-dark-brown min-w-[2.5rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3.5 py-2.5 text-dark-brown hover:text-gold text-sm font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 gold-gradient text-white text-xs font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 hover:shadow-gold/30 transition-all shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add To Cart
                </button>

                <button
                  aria-label="Add to wishlist"
                  className="p-4 border border-light-gray bg-white text-dark-brown hover:text-gold hover:border-gold transition-colors shadow-sm"
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Assurance Items */}
              <div className="grid grid-cols-3 gap-2 pt-6 border-t border-light-gray text-center">
                <div className="p-2">
                  <Truck className="w-5 h-5 mx-auto text-gold mb-1" />
                  <p className="text-[10px] text-medium-gray font-semibold uppercase tracking-wider">White Glove Delivery</p>
                </div>
                <div className="p-2">
                  <Shield className="w-5 h-5 mx-auto text-gold mb-1" />
                  <p className="text-[10px] text-medium-gray font-semibold uppercase tracking-wider">10-Year Warranty</p>
                </div>
                <div className="p-2">
                  <RotateCcw className="w-5 h-5 mx-auto text-gold mb-1" />
                  <p className="text-[10px] text-medium-gray font-semibold uppercase tracking-wider">30-Day Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════ MANUFACTURING & CRAFTSMANSHIP SECTIONS ════════════ */}
        <div className="space-y-12 mb-20">
          {/* Section 1: How This Piece Is Made */}
          <div className="bg-white p-8 sm:p-12 border border-light-gray/80 shadow-sm">
            <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl text-dark-brown mb-8 flex items-center gap-3">
              <Hammer className="w-6 h-6 text-gold" /> How This Piece Is Made
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2 p-5 bg-cream/50 border border-light-gray/60">
                <div className="text-gold font-[var(--font-heading)] text-3xl font-bold">01</div>
                <h3 className="font-[var(--font-heading)] text-lg text-dark-brown font-semibold">Material Selection</h3>
                <p className="text-xs text-medium-gray leading-relaxed font-light">
                  Hand-selected {product.material}, strictly inspected for timber grain density and natural stability.
                </p>
              </div>
              <div className="space-y-2 p-5 bg-cream/50 border border-light-gray/60">
                <div className="text-gold font-[var(--font-heading)] text-3xl font-bold">02</div>
                <h3 className="font-[var(--font-heading)] text-lg text-dark-brown font-semibold">Precision Construction</h3>
                <p className="text-xs text-medium-gray leading-relaxed font-light">
                  Assembled with {product.construction} for immense structural rigidity and lifetime durability.
                </p>
              </div>
              <div className="space-y-2 p-5 bg-cream/50 border border-light-gray/60">
                <div className="text-gold font-[var(--font-heading)] text-3xl font-bold">03</div>
                <h3 className="font-[var(--font-heading)] text-lg text-dark-brown font-semibold">Artisan Finish</h3>
                <p className="text-xs text-medium-gray leading-relaxed font-light">
                  Finished with {product.finish} applied across multiple coats with hand-sanding between each coat.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Craftsmanship Details & Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Craftsmanship Details */}
            <div className="bg-white p-8 sm:p-10 border border-light-gray/80 shadow-sm">
              <h3 className="font-[var(--font-heading)] text-xl text-dark-brown mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-gold" /> Craftsmanship Highlights
              </h3>
              <ul className="space-y-4">
                {product.craftsmanshipDetails?.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-medium-gray">
                    <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dimensions & Specifications */}
            <div className="bg-white p-8 sm:p-10 border border-light-gray/80 shadow-sm">
              <h3 className="font-[var(--font-heading)] text-xl text-dark-brown mb-6 flex items-center gap-2">
                <Ruler className="w-5 h-5 text-gold" /> Dimensions & Specifications
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2.5 border-b border-light-gray">
                  <span className="text-medium-gray uppercase tracking-wider">Dimensions</span>
                  <span className="font-bold text-dark-brown">{product.dimensions}</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-light-gray">
                  <span className="text-medium-gray uppercase tracking-wider">Weight</span>
                  <span className="font-bold text-dark-brown">{product.weight}</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-light-gray">
                  <span className="text-medium-gray uppercase tracking-wider">Primary Material</span>
                  <span className="font-bold text-dark-brown">{product.material}</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-light-gray">
                  <span className="text-medium-gray uppercase tracking-wider">Joinery Technique</span>
                  <span className="font-bold text-dark-brown">{product.construction}</span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span className="text-medium-gray uppercase tracking-wider">Finish Type</span>
                  <span className="font-bold text-dark-brown">{product.finish}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="text-center mb-10">
              <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2 font-semibold">Complete Your Space</p>
              <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl text-dark-brown">
                Related Furniture
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
