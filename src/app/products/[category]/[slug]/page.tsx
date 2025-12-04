"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronRight, ChevronLeft, Phone } from "lucide-react";
import ImageGallery from "@/components/ui/ImageGallery";
import ProductCard from "@/components/ui/ProductCard";
import CustomSelect from "@/components/ui/CustomSelect";
import ContentSectionRenderer from "@/app/products/_component/ContentSection";
// import ReviewSection from "@/app/products/_component/ReviewSection";
import { getProductBySlug, getProductsByCategory } from "@/lib/product";

const categoryNames: Record<string, string> = {
  polycarbonate_dac: "Tấm lợp lấy sáng Polycarbonate đặc",
  polycarbonate_rong: "Tấm lợp lấy sáng Polycarbonate rỗng",
  polycarbonate_song: "Tấm lợp lấy sáng Polycarbonate dạng sóng",
};

// Helper to generate section ID from title
function generateSectionId(title: string, index: number): string {
  return `section-${index}-${title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
}

export default function ProductDetailPage() {
  const params = useParams();
  const categorySlug = params.category as string;
  const productSlug = params.slug as string;

  const product = getProductBySlug(productSlug);
  const [activeTab, setActiveTab] = useState<"detail" | "additional">("detail");
  const [contactForm, setContactForm] = useState({ name: "", phone: "" });
  const [selectedColor, setSelectedColor] = useState("");

  // Refs for animated tab underline
  const tabsRef = useRef<HTMLDivElement>(null);
  const detailTabRef = useRef<HTMLButtonElement>(null);
  const additionalTabRef = useRef<HTMLButtonElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  // Update underline position when active tab changes
  useEffect(() => {
    const activeTabRef =
      activeTab === "detail" ? detailTabRef : additionalTabRef;
    if (activeTabRef.current && tabsRef.current) {
      const tabRect = activeTabRef.current.getBoundingClientRect();
      const containerRect = tabsRef.current.getBoundingClientRect();
      setUnderlineStyle({
        left: tabRect.left - containerRect.left,
        width: tabRect.width,
      });
    }
  }, [activeTab]);

  if (!product) {
    notFound();
  }

  // Get related products from same category
  const relatedProducts = getProductsByCategory(product.category_slug)
    .filter((p) => p.id !== product.id)
    .slice(0, 8);

  // Extract image URLs for ImageGallery
  const imageUrls = product.images.map((img) => img.url);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Cảm ơn ${contactForm.name}! Chúng tôi sẽ liên hệ lại số ${contactForm.phone} trong ít phút.`
    );
    setContactForm({ name: "", phone: "" });
  };

  return (
    <main className="bg-[#f5f5f5]">
      {/* Product Detail Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="/products"
              className="hover:text-primary transition-colors"
            >
              Sản phẩm
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href={`/products/${categorySlug}`}
              className="hover:text-primary transition-colors"
            >
              {categoryNames[product.category_slug] || product.category}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-800">{product.name}</span>
          </nav>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 p-4 sm:p-6">
              {/* Product Images */}
              <div className="relative w-full min-w-0">
                <ImageGallery images={imageUrls} productName={product.name} />
              </div>

              {/* Product Info */}
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl lg:text-3xl font-bold text-red-500">
                    {product.price_formatted}
                  </span>
                </div>

                {/* Short Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.short_description || product.content.intro}
                </p>

                {/* Specifications */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-800 mb-3">
                    Quy cách sản phẩm:
                  </h3>
                  <ul className="space-y-2">
                    {product.specs.widths?.length > 0 && (
                      <li className="flex items-start gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        Khổ rộng: {product.specs.widths.join("; ")}
                      </li>
                    )}
                    {product.specs.length && (
                      <li className="flex items-start gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        Khổ dài: {product.specs.length}
                      </li>
                    )}
                    {product.specs.thickness && (
                      <li className="flex items-start gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        Độ dày: {product.specs.thickness}
                      </li>
                    )}
                  </ul>
                </div>

                {/* Unit Price Info */}
                <div className="mb-6">
                  <span className="font-semibold text-gray-800">
                    Đơn vị tính giá:
                  </span>{" "}
                  <span className="text-gray-600">{product.unit}</span>
                </div>

                {/* Contact Form */}
                <div className="bg-gradient-to-r from-primary/5 to-[#D4AF37]/5 border border-primary/20 rounded-lg p-4 mb-6">
                  <p className="text-gray-700 font-medium mb-3 text-sm md:text-base">
                    Để lại thông tin, nhân viên tư vấn sẽ liên hệ ngay:
                  </p>
                  <form
                    onSubmit={handleContactSubmit}
                    className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3"
                  >
                    <input
                      type="text"
                      placeholder="Họ và tên"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      className="flex-1 min-w-0 sm:min-w-[140px] px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(153,101,21,0.15)] transition-all text-base"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Số điện thoại"
                      value={contactForm.phone}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          phone: e.target.value,
                        })
                      }
                      className="flex-1 min-w-0 sm:min-w-[140px] px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(153,101,21,0.15)] transition-all text-base"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#996515] to-[#D4AF37] text-white font-semibold rounded-lg hover:shadow-lg transition-all btn-shine whitespace-nowrap"
                    >
                      Gửi
                    </button>
                  </form>
                </div>

                {/* Color Selector */}
                {product.specs.colors.length > 0 && (
                  <div className="mb-6">
                    <span className="font-semibold text-gray-800 block mb-3">
                      Màu Sắc
                    </span>
                    <CustomSelect
                      options={product.specs.colors.map((color) => ({
                        value: color.name,
                        label: color.name,
                      }))}
                      value={selectedColor}
                      onChange={setSelectedColor}
                      placeholder="Chọn màu sắc"
                      minWidth="250px"
                    />
                  </div>
                )}

                {/* CTA Button */}
                <div className="mb-6">
                  <a
                    href={`tel:${product.contact?.phone || "0976110266"}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#996515] to-[#D4AF37] text-white font-bold rounded-lg hover:shadow-lg transition-all btn-shine"
                  >
                    <Phone className="w-5 h-5" />
                    Gọi ngay: {product.contact?.phone || "0976 110 266"}
                  </a>
                </div>

                {/* Product Meta */}
                <div className="space-y-2 text-sm border-t border-gray-200 pt-4">
                  <p>
                    <span className="font-semibold text-gray-800">Mã:</span>{" "}
                    <span className="text-gray-600">{product.id}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">
                      Danh mục:
                    </span>{" "}
                    <Link
                      href={`/products/${categorySlug}`}
                      className="text-primary hover:underline"
                    >
                      {categoryNames[product.category_slug] || product.category}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Tab Headers */}
            <div
              ref={tabsRef}
              className="flex justify-center border-b border-gray-200 relative"
            >
              <button
                ref={detailTabRef}
                type="button"
                onClick={() => setActiveTab("detail")}
                className={`px-4 md:px-8 py-3 md:py-4 font-bold text-sm md:text-lg uppercase tracking-wide transition-colors ${
                  activeTab === "detail"
                    ? "text-primary"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Thông tin chi tiết
              </button>
              <button
                ref={additionalTabRef}
                type="button"
                onClick={() => setActiveTab("additional")}
                className={`px-4 md:px-8 py-3 md:py-4 font-bold text-sm md:text-lg uppercase tracking-wide transition-colors ${
                  activeTab === "additional"
                    ? "text-primary"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Thông tin bổ sung
              </button>
              {/* Animated underline */}
              <span
                className="absolute bottom-0 h-0.5 bg-primary transition-all duration-300 ease-in-out"
                style={{
                  left: underlineStyle.left,
                  width: underlineStyle.width,
                }}
              />
            </div>

            {/* Tab Content */}
            <div className="p-4 sm:p-6 lg:p-8">
              {activeTab === "detail" ? (
                <div className="prose max-w-none">
                  {/* Intro */}
                  {product.content.intro && (
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.content.intro}
                    </p>
                  )}

                  {/* Table of Contents */}
                  {product.content.sections.filter((s) => s.title).length >
                    0 && (
                    <nav className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        Mục lục
                      </h3>
                      <ul className="space-y-2">
                        {product.content.sections
                          .map((section, index) => ({ section, index }))
                          .filter(
                            (
                              item
                            ): item is {
                              section: typeof item.section & { title: string };
                              index: number;
                            } => Boolean(item.section.title)
                          )
                          .map(({ section, index }, tocIndex) => (
                            <li key={index}>
                              <a
                                href={`#${generateSectionId(
                                  section.title,
                                  index
                                )}`}
                                className="text-primary hover:text-primary/80 hover:underline transition-colors"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const element = document.getElementById(
                                    generateSectionId(section.title, index)
                                  );
                                  element?.scrollIntoView({
                                    behavior: "smooth",
                                  });
                                }}
                              >
                                {tocIndex + 1}. {section.title}
                              </a>
                            </li>
                          ))}
                      </ul>
                    </nav>
                  )}

                  {/* Content Sections from JSON */}
                  {product.content.sections.map((section, index) => (
                    <ContentSectionRenderer
                      key={index}
                      section={section}
                      id={
                        section.title
                          ? generateSectionId(section.title, index)
                          : undefined
                      }
                    />
                  ))}
                </div>
              ) : (
                <div>
                  {/* Additional Info Table - Mobile Responsive */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
                    <div className="hidden sm:block">
                      <table className="w-full">
                        <tbody>
                          {product.specs.colors.length > 0 && (
                            <tr className="border-b border-gray-200">
                              <td className="px-4 py-3 bg-gray-50 font-semibold text-gray-800 w-1/4">
                                MÀU SẮC
                              </td>
                              <td className="px-4 py-3 text-gray-600">
                                {product.specs.colors
                                  .map((c) => c.name)
                                  .join(", ")}
                              </td>
                            </tr>
                          )}
                          <tr className="border-b border-gray-200">
                            <td className="px-4 py-3 bg-gray-50 font-semibold text-gray-800 w-1/4">
                              ĐỘ DÀY
                            </td>
                            <td className="px-4 py-3 text-gray-600">
                              {product.specs.thickness}
                            </td>
                          </tr>
                          {product.specs.widths?.length > 0 && (
                            <tr className="border-b border-gray-200">
                              <td className="px-4 py-3 bg-gray-50 font-semibold text-gray-800 w-1/4">
                                KHỔ RỘNG
                              </td>
                              <td className="px-4 py-3 text-gray-600">
                                {product.specs.widths.join(", ")}
                              </td>
                            </tr>
                          )}
                          <tr>
                            <td className="px-4 py-3 bg-gray-50 font-semibold text-gray-800 w-1/4">
                              KHỔ DÀI
                            </td>
                            <td className="px-4 py-3 text-gray-600">
                              {product.specs.length}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Mobile stacked layout */}
                    <div className="sm:hidden divide-y divide-gray-200">
                      {product.specs.colors.length > 0 && (
                        <div className="p-4">
                          <div className="text-xs font-semibold text-gray-500 uppercase mb-1">
                            Màu sắc
                          </div>
                          <div className="text-gray-800">
                            {product.specs.colors.map((c) => c.name).join(", ")}
                          </div>
                        </div>
                      )}
                      <div className="p-4">
                        <div className="text-xs font-semibold text-gray-500 uppercase mb-1">
                          Độ dày
                        </div>
                        <div className="text-gray-800">
                          {product.specs.thickness}
                        </div>
                      </div>
                      {product.specs.widths?.length > 0 && (
                        <div className="p-4">
                          <div className="text-xs font-semibold text-gray-500 uppercase mb-1">
                            Khổ rộng
                          </div>
                          <div className="text-gray-800">
                            {product.specs.widths.join(", ")}
                          </div>
                        </div>
                      )}
                      <div className="p-4">
                        <div className="text-xs font-semibold text-gray-500 uppercase mb-1">
                          Khổ dài
                        </div>
                        <div className="text-gray-800">
                          {product.specs.length}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      {/* <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 lg:p-8">
            <ReviewSection productName={product.name} />
          </div>
        </div>
      </section> */}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-amber-50 via-white to-yellow-50 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-48 md:w-72 h-48 md:h-72 bg-gradient-to-br from-[#996515]/5 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-tl from-[#D4AF37]/5 to-transparent rounded-full translate-x-1/3 translate-y-1/3" />

          <div className="container mx-auto px-4 relative z-10">
            {/* Title with decorative lines */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-10">
              <div className="h-[2px] w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-transparent to-[#996515]" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase bg-gradient-to-r from-[#996515] to-[#D4AF37] bg-clip-text text-transparent whitespace-nowrap">
                Sản phẩm tương tự
              </h2>
              <div className="h-[2px] w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>

            <div className="relative group/carousel">
              {/* Navigation Buttons */}
              <button
                type="button"
                aria-label="Sản phẩm trước"
                className="related-prev absolute -left-1 sm:-left-2 lg:-left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-r from-[#996515] to-[#D4AF37] hover:from-[#7a5011] hover:to-[#b8982f] text-white rounded-full shadow-lg flex items-center justify-center transition-all cursor-pointer opacity-100 sm:opacity-0 sm:group-hover/carousel:opacity-100 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                type="button"
                aria-label="Sản phẩm tiếp theo"
                className="related-next absolute -right-1 sm:-right-2 lg:-right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-r from-[#996515] to-[#D4AF37] hover:from-[#7a5011] hover:to-[#b8982f] text-white rounded-full shadow-lg flex items-center justify-center transition-all cursor-pointer opacity-100 sm:opacity-0 sm:group-hover/carousel:opacity-100 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <Swiper
                modules={[Navigation]}
                spaceBetween={12}
                slidesPerView={1}
                navigation={{
                  prevEl: ".related-prev",
                  nextEl: ".related-next",
                }}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 16 },
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 4, spaceBetween: 20 },
                }}
              >
                {relatedProducts.map((relatedProduct) => (
                  <SwiperSlide key={relatedProduct.id}>
                    <ProductCard product={relatedProduct} viewMode="grid" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
