"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  categories,
  getProductsByCategory,
  getCategoryById,
} from "@/lib/product";
import ProductCard from "@/components/ui/ProductCard";

const tabs = categories.map((cat) => ({
  id: cat.id,
  name: cat.name,
  urlSlug: cat.urlSlug,
}));

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "dac");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const activeButton = tabsRef.current[activeIndex];
    if (activeButton) {
      setIndicatorStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    }
  }, [activeTab]);

  const activeCategory = getCategoryById(activeTab);
  const categoryUrlSlug = activeCategory?.urlSlug || "";
  const currentProducts = getProductsByCategory(categoryUrlSlug);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold uppercase bg-gradient-to-r from-[#996515] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-sm">
            Sản phẩm nổi bật
          </h2>
          <p className="mt-3 text-gray-600 max-w-5xl mx-auto">
            Hãy để bộ sưu tập tấm lợp lấy sáng truyền cảm hứng cho bạn; hình ảnh
            của các giải pháp hiện đại, thiết kế hoặc cổ điển. Chọn hiệu ứng
            hoặc màu sắc hấp dẫn bạn nhất.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-8 border-b border-gray-200 relative">
          {tabs.map((tab, index) => (
            <button
              type="button"
              key={tab.id}
              ref={(el) => {
                tabsRef.current[index] = el;
              }}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-2 text-xl font-bold transition-colors duration-300 ${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.name}
            </button>
          ))}
          {/* Animated indicator */}
          <span
            className="absolute bottom-0 h-0.5 bg-primary transition-all duration-300 ease-in-out"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
            }}
          />
        </div>

        {/* Products Carousel */}
        <div className="relative group/carousel">
          <button
            type="button"
            aria-label="Sản phẩm trước"
            className="featured-prev absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-md flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            aria-label="Sản phẩm tiếp theo"
            className="featured-next absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-md flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={currentProducts.length > 4}
            navigation={{
              prevEl: ".featured-prev",
              nextEl: ".featured-next",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {currentProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} viewMode="grid" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <Link
            href={`/products/${categoryUrlSlug}`}
            className="inline-flex items-center justify-center px-8 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD966] text-primary font-bold rounded-lg group overflow-hidden relative"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-3">
              Xem thêm
            </span>
            <ChevronRight className="w-4 h-4 absolute right-6 top-1/2 -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
