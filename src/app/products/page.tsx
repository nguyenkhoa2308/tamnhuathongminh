"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft, Grid3X3, List } from "lucide-react";
import { categories, getAllProducts } from "@/lib/product";
import CustomSelect from "@/components/ui/CustomSelect";
import PriceRangeFilter from "@/components/ui/PriceRangeFilter";
import ProductCard from "@/components/ui/ProductCard";

const PRODUCTS_PER_PAGE = 9;

const sortOptions = [
  { value: "default", label: "Mặc định" },
  { value: "price-asc", label: "Giá thấp đến cao" },
  { value: "price-desc", label: "Giá cao đến thấp" },
];

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });

  const allProducts = getAllProducts();

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
    setCurrentPage(1);
  };

  // Filter by price range
  const filteredProducts = allProducts.filter((product) => {
    if (priceRange.min === 0 && priceRange.max === 0) return true;
    const price = product.price;
    if (priceRange.max === 0) return price >= priceRange.min;
    return price >= priceRange.min && price <= priceRange.max;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") {
      return a.price - b.price;
    }
    if (sortBy === "price-desc") {
      return b.price - a.price;
    }
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-[#f5f5f5] min-h-screen">
      {/* Page Header with Breadcrumb */}
      <section className="relative h-[160px] bg-cover bg-center bg-[url('/images/backgrounds/section2-g.jpg')]">
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Sản phẩm
          </h1>
          <nav className="flex items-center gap-2 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Trang chủ
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Sản phẩm</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <aside className="lg:w-72 flex-shrink-0 sticky top-25 self-start">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-sm mb-4">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                  <div className="w-1 h-5 bg-primary rounded-full"></div>
                  <h3 className="font-bold text-gray-800">Danh mục sản phẩm</h3>
                </div>
                <div className="py-2">
                  <Link
                    href="/products"
                    className="block px-4 py-2.5 text-primary font-semibold bg-primary/5 transition-colors"
                  >
                    Tất cả sản phẩm
                  </Link>
                  {categories.map((category) => (
                    <div key={category.id}>
                      <div className="flex items-center">
                        <Link
                          href={`/products/${category.urlSlug}`}
                          className="flex-1 py-2.5 px-4 text-gray-700 hover:text-primary transition-colors"
                        >
                          {category.name}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="bg-white rounded-lg shadow-sm mb-4">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                  <div className="w-1 h-5 bg-primary rounded-full"></div>
                  <h3 className="font-bold text-gray-800">Khoảng giá</h3>
                </div>
                <div className="p-4">
                  <PriceRangeFilter
                    minPrice={priceRange.min}
                    maxPrice={priceRange.max}
                    onPriceChange={handlePriceChange}
                  />
                </div>
              </div>

              {/* Hot Products Filter */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                  <div className="w-1 h-5 bg-primary rounded-full"></div>
                  <h3 className="font-bold text-gray-800">Bộ lọc</h3>
                </div>
                <div className="p-4 space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="custom-checkbox flex-shrink-0"
                    />
                    <span className="text-gray-600 group-hover:text-primary transition-colors">
                      Sản phẩm hot
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="custom-checkbox flex-shrink-0"
                    />
                    <span className="text-gray-600 group-hover:text-primary transition-colors">
                      Đang giảm giá
                    </span>
                  </label>
                </div>
              </div>
            </aside>

            {/* Products */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-gray-600">
                    Hiển thị{" "}
                    <span className="font-semibold text-gray-800">
                      {sortedProducts.length}
                    </span>{" "}
                    sản phẩm
                  </p>
                  <div className="flex items-center gap-4">
                    {/* Sort */}
                    <CustomSelect
                      options={sortOptions}
                      value={sortBy}
                      onChange={setSortBy}
                    />
                    {/* View Mode */}
                    <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setViewMode("grid")}
                        className={`p-2 ${
                          viewMode === "grid"
                            ? "bg-primary text-white"
                            : "bg-white text-gray-600 hover:bg-gray-50"
                        }`}
                        aria-label="Xem dạng lưới"
                      >
                        <Grid3X3 className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewMode("list")}
                        className={`p-2 ${
                          viewMode === "list"
                            ? "bg-primary text-white"
                            : "bg-white text-gray-600 hover:bg-gray-50"
                        }`}
                        aria-label="Xem dạng danh sách"
                      >
                        <List className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div
                className={
                  viewMode === "grid"
                    ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    : "space-y-4"
                }
              >
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8">
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Trang trước"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        type="button"
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                          currentPage === page
                            ? "bg-primary text-white"
                            : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}

                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Trang sau"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
