export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  material: string;
  color: string;
  dimensions: string;
  weight: string;
  finish: string;
  construction: string;
  craft: string;
  production: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  finishOptions?: string[];
  materialsUsed?: string[];
  craftsmanshipDetails?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  productCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  product: string;
}

export interface FilterState {
  category: string;
  priceRange: [number, number];
  material: string;
  color: string;
  rating: number;
  sortBy: string;
}
