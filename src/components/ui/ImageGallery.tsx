"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [lightboxThumbsSwiper, setLightboxThumbsSwiper] = useState<SwiperType | null>(null);

  // Zoom lens state
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const LENS_SIZE = 150; // Size of zoom lens
  const ZOOM_LEVEL = 2.5; // Zoom magnification

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;

    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate lens position (centered on cursor, clamped to container bounds)
    const lensX = Math.max(0, Math.min(x - LENS_SIZE / 2, rect.width - LENS_SIZE));
    const lensY = Math.max(0, Math.min(y - LENS_SIZE / 2, rect.height - LENS_SIZE));

    setLensPosition({ x: lensX, y: lensY });
    setZoomPosition({ x, y }); // Store raw pixel coordinates
    setContainerSize({ width: rect.width, height: rect.height });
  }, []);

  const handleMouseEnter = () => setShowZoom(true);
  const handleMouseLeave = () => setShowZoom(false);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isLightboxOpen) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    if (e.key === "ArrowRight") setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [isLightboxOpen, images.length]);

  // Add keyboard listener
  useState(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  });

  return (
    <>
      {/* Main Gallery */}
      <div>
        {/* Main Image with Zoom */}
        <div
          ref={imageContainerRef}
          className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4 cursor-zoom-in"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => openLightbox(selectedImage)}
        >
          <Image
            src={images[selectedImage]}
            alt={productName}
            fill
            className="object-cover"
            priority
          />

          {/* Zoom Lens with magnified image inside */}
          {showZoom && containerSize.width > 0 && (() => {
            // Calculate scaled dimensions
            const scaledWidth = containerSize.width * ZOOM_LEVEL;
            const scaledHeight = containerSize.height * ZOOM_LEVEL;

            // Calculate raw position (center cursor point in lens)
            const rawLeft = LENS_SIZE / 2 - zoomPosition.x * ZOOM_LEVEL;
            const rawTop = LENS_SIZE / 2 - zoomPosition.y * ZOOM_LEVEL;

            // Clamp position so scaled image always covers the lens
            const clampedLeft = Math.max(LENS_SIZE - scaledWidth, Math.min(0, rawLeft));
            const clampedTop = Math.max(LENS_SIZE - scaledHeight, Math.min(0, rawTop));

            return (
              <div
                className="absolute border-2 border-white shadow-xl pointer-events-none z-10 overflow-hidden rounded-lg"
                style={{
                  width: LENS_SIZE,
                  height: LENS_SIZE,
                  left: lensPosition.x,
                  top: lensPosition.y,
                }}
              >
                {/* Inner container replicates the main image with object-cover, then scaled */}
                <div
                  style={{
                    position: "absolute",
                    width: containerSize.width,
                    height: containerSize.height,
                    left: clampedLeft,
                    top: clampedTop,
                    transform: `scale(${ZOOM_LEVEL})`,
                    transformOrigin: "0 0",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={images[selectedImage]}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            );
          })()}

          {/* Zoom hint */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 text-white text-sm px-3 py-1.5 rounded-full pointer-events-none">
            <ZoomIn className="w-4 h-4" />
            Di chuột để zoom, click để xem lớn
          </div>
        </div>


        {/* Thumbnail Swiper */}
        <div className="relative group/thumbs">
          {images.length > 4 && (
            <>
              <button
                type="button"
                aria-label="Ảnh trước"
                className="thumb-prev absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-md flex items-center justify-center transition-all opacity-0 group-hover/thumbs:opacity-100"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Ảnh tiếp"
                className="thumb-next absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-md flex items-center justify-center transition-all opacity-0 group-hover/thumbs:opacity-100"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}

          <Swiper
            modules={[Navigation, Thumbs]}
            spaceBetween={8}
            slidesPerView={4}
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            navigation={{
              prevEl: ".thumb-prev",
              nextEl: ".thumb-next",
            }}
            breakpoints={{
              640: { slidesPerView: 5 },
              768: { slidesPerView: 6 },
            }}
            className="!pb-0"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <button
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  aria-label={`Xem ảnh ${index + 1}`}
                  className={`relative w-full aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${productName} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Đóng"
          >
            <X size={28} />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 z-50 text-white/80 text-sm">
            {selectedImage + 1} / {images.length}
          </div>

          {/* Main Swiper */}
          <div className="flex-1 flex items-center justify-center px-4 py-16" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full max-w-5xl">
              {/* Navigation Buttons */}
              <button
                type="button"
                aria-label="Ảnh trước"
                className="lightbox-prev absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                type="button"
                aria-label="Ảnh tiếp"
                className="lightbox-next absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all"
              >
                <ChevronRight size={28} />
              </button>

              <Swiper
                modules={[Navigation, Thumbs]}
                spaceBetween={20}
                slidesPerView={1}
                initialSlide={selectedImage}
                onSlideChange={(swiper) => setSelectedImage(swiper.activeIndex)}
                navigation={{
                  prevEl: ".lightbox-prev",
                  nextEl: ".lightbox-next",
                }}
                thumbs={{ swiper: lightboxThumbsSwiper && !lightboxThumbsSwiper.destroyed ? lightboxThumbsSwiper : null }}
                className="w-full"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative aspect-square md:aspect-video max-h-[70vh] mx-auto">
                      <Image
                        src={img}
                        alt={`${productName} ${index + 1}`}
                        fill
                        className="object-contain"
                        priority={index === selectedImage}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="px-4 pb-4" onClick={(e) => e.stopPropagation()}>
            <div className="max-w-3xl mx-auto">
              <Swiper
                modules={[Navigation, Thumbs]}
                spaceBetween={8}
                slidesPerView={6}
                watchSlidesProgress
                onSwiper={setLightboxThumbsSwiper}
                centeredSlides
                slideToClickedSlide
                breakpoints={{
                  640: { slidesPerView: 8 },
                  768: { slidesPerView: 10 },
                }}
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <button
                      type="button"
                      onClick={() => setSelectedImage(index)}
                      aria-label={`Xem ảnh ${index + 1}`}
                      className={`relative w-full aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-white ring-2 ring-white/50"
                          : "border-white/20 hover:border-white/50 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${productName} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
