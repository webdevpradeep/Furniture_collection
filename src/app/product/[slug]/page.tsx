import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductDetailsClient from "@/components/ProductDetailsClient";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <ProductDetailsClient product={product} relatedProducts={relatedProducts} />
  );
}
