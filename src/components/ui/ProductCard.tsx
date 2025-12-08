"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Product } from "@/types/product";
import { getUrlSlugFromDataSlug } from "@/lib/product";

interface ProductCardProps {
  product: Product;
  viewMode?: "grid" | "list";
}

export default function ProductCard({
  product,
  viewMode = "grid",
}: ProductCardProps) {
  const categoryUrlSlug = getUrlSlugFromDataSlug(product.category_slug);
  const productUrl = `/products/${categoryUrlSlug}/${product.slug}`;

  if (viewMode === "list") {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all flex group">
        {/* Image */}
        <Link
          href={productUrl}
          className="relative w-48 h-48 flex-shrink-0 overflow-hidden"
        >
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.bestseller && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              Bán chạy
            </span>
          )}
        </Link>

        {/* Info */}
        <div className="flex-1 p-4 flex flex-col">
          <Link href={productUrl}>
            <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-2 line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <p className="text-gray-600 text-sm line-clamp-2 mb-2">
            {product.short_description}
          </p>

          {/* Specs Preview */}
          <ul className="text-sm text-gray-600 space-y-1 mb-3">
            {product.specs.thickness && (
              <li className="flex items-start gap-1">
                <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Độ dày: {product.specs.thickness}</span>
              </li>
            )}
            {product.specs.widths?.length > 0 && (
              <li className="flex items-start gap-1">
                <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Khổ rộng: {product.specs.widths.join(", ")}</span>
              </li>
            )}
          </ul>

          <div className="mt-auto flex items-center justify-between">
            <span className="text-red-500 font-bold text-lg">
              {product.price_formatted}
            </span>
            <Link
              href={productUrl}
              className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
            >
              Xem chi tiết
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Grid view
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all group">
      {/* Image */}
      <Link
        href={productUrl}
        className="block relative aspect-square overflow-hidden"
      >
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.bestseller && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Bán chạy
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="p-4">
        <Link href={productUrl}>
          <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-2 line-clamp-2 min-h-[48px]">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <p className="text-red-500 font-bold text-lg mb-2">
          {product.price_formatted}
        </p>

        {/* Short Description */}
        <p className="text-gray-600 text-sm line-clamp-2 mb-2">
          {product.short_description}
        </p>

        {/* Specs Preview */}
        <ul className="text-sm text-gray-600 space-y-1 mb-3">
          {product.specs.thickness && (
            <li className="flex items-start gap-1">
              <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span className="line-clamp-1">
                Độ dày: {product.specs.thickness}
              </span>
            </li>
          )}
          {product.specs.widths?.length > 0 && (
            <li className="flex items-start gap-1">
              <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span className="line-clamp-1">
                Khổ rộng: {product.specs.widths[0]}
              </span>
            </li>
          )}
        </ul>

        {/* Unit */}
        <p className="text-sm text-gray-600 mb-3">
          <span className="font-medium">Đơn vị tính giá:</span> {product.unit}
        </p>

        {/* Add to cart link */}
        <Link
          href={productUrl}
          className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
        >
          Xem chi tiết
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}
