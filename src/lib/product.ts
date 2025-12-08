// src/lib/products.ts
import productsData from "@/data/polycarbonate_products.json";
import type { Product, ProductsData } from "@/types/product";

const data = productsData as ProductsData;

// Categories from JSON metadata
export interface Category {
  id: string;
  slug: string;
  urlSlug: string;
  name: string;
}

export const categories: Category[] = [
  {
    id: "polycarbonate_dac",
    slug: "polycarbonate_dac",
    urlSlug: "polycarbonate-dac",
    name: "Tấm lấy sáng Polycarbonate đặc",
  },
  {
    id: "polycarbonate_rong",
    slug: "polycarbonate_rong",
    urlSlug: "polycarbonate-rong",
    name: "Tấm lấy sáng Polycarbonate rỗng",
  },
  {
    id: "polycarbonate_song",
    slug: "polycarbonate_song",
    urlSlug: "polycarbonate-song",
    name: "Tấm lấy sáng Polycarbonate sóng",
  },
  {
    id: "phu_kien",
    slug: "phu_kien",
    urlSlug: "phu-kien",
    name: "Phụ kiện",
  },
];

// URL slug mapping
const categoryUrlMap: Record<string, string> = {
  "polycarbonate-dac": "polycarbonate_dac",
  "polycarbonate-rong": "polycarbonate_rong",
  "polycarbonate-song": "polycarbonate_song",
  "phu-kien": "phu_kien",
};

// Sort products with bestsellers first
function sortBestsellersFirst(products: Product[]): Product[] {
  return [...products].sort((a, b) => {
    if (a.bestseller && !b.bestseller) return -1;
    if (!a.bestseller && b.bestseller) return 1;
    return 0;
  });
}

export function getAllProducts(): Product[] {
  return sortBestsellersFirst(data.products);
}

export function getProductBySlug(slug: string): Product | undefined {
  return data.products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  // Support both URL slug and data slug
  const dataSlug = categoryUrlMap[categorySlug] || categorySlug;
  const filtered = data.products.filter((p) => p.category_slug === dataSlug);
  return sortBestsellersFirst(filtered);
}

export function getAllSlugs(): string[] {
  return data.products.map((p) => p.slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  // Support both URL slug and data slug
  return categories.find((c) => c.slug === slug || c.urlSlug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id || c.slug === id);
}

export function getUrlSlugFromDataSlug(dataSlug: string): string {
  const category = categories.find((c) => c.slug === dataSlug);
  return category?.urlSlug || dataSlug;
}
