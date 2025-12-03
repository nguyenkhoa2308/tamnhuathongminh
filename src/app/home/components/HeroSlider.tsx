"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/banners/banner-1.jpg",
    title: "Tấm nhựa lấy sáng polycarbonate Everest Light",
  },
  {
    id: 2,
    image: "/images/banners/banner-2.jpg",
    title: "Tấm nhựa lấy sáng polycarbonate Everest Light",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative w-full aspect-[1696/624] overflow-hidden bg-gray-900 group">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet !w-3 !h-3 !bg-white/50 !opacity-100",
          bulletActiveClass: "!bg-orange-500",
        }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button
        className="hero-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/70 hover:bg-white rounded-full flex items-center text-black justify-center transition-all duration-300 cursor-pointer opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7" strokeWidth={2} />
      </button>

      <button
        className="hero-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/70 hover:bg-white rounded-full flex items-center text-black justify-center transition-all duration-300 cursor-pointer opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7" strokeWidth={2} />
      </button>
    </section>
  );
}
