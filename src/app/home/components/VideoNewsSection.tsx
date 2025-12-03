"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Tấm Polycarbonate rỗng cao cấp Minh Quang",
    excerpt:
      "Tấm lợp lấy sáng Polycarbonate rỗng cao cấp Minh Quang đem đến giải pháp hỗ trợ nguồn ánh sáng tự nhiên cho mọi công trình. Độ thẩm...",
    image: "/images/news/news-1.jpg",
  },
  {
    id: 2,
    title: "Bảng giá tôn nhựa lấy sáng 2024",
    excerpt:
      "Tôn nhựa lấy sáng (hay tole) là vật liệu có độ bền cao trong xây dựng nhằm thay thế các loại mái che bằng kính với giá...",
    image: "/images/news/news-2.jpg",
  },
  {
    id: 3,
    title: "Tấm lợp lấy sáng Polycarbonate dạng sóng phổ thông Minh Quang",
    excerpt:
      "Tấm lợp polycarbonate dạng sóng phổ thông Minh Quang là sản phẩm kết hợp độ bền vượt trội với khả năng truyền ánh sáng tuyệt...",
    image: "/images/news/news-3.jpg",
  },
];

export default function VideoNewsSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section id="news" className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Video Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#996515] to-[#D4AF37] bg-clip-text text-transparent uppercase">
                Video Nổi Bật
              </h2>

              {/* Single Video */}
              <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setIsVideoOpen(true)}
              >
                <Image
                  src="/images/news/video.jpg"
                  alt="Video giới thiệu"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <button
                    type="button"
                    title="Phát video"
                    aria-label="Phát video"
                    className="w-16 h-16 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Video Description */}
              <p className="text-gray-700 mt-4 leading-relaxed">
                Tấm lợp Polycarbonate, giải pháp mới thay thế mái tôn truyền thống
                có thể bạn nên biết.
              </p>
            </div>

            {/* News Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#996515] to-[#D4AF37] bg-clip-text text-transparent uppercase">
                Tin Tức - Bài Viết
              </h2>

              {/* News List */}
              <div className="space-y-4">
                {newsItems.map((news) => (
                  <a key={news.id} href="#" className="flex gap-4 group">
                    {/* Image */}
                    <div className="relative w-[140px] h-[100px] flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {news.excerpt}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Popup Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Video Container */}
          <div
            className="relative z-10 w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Đóng video"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video iframe - Replace with your actual video URL */}
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
              title="Video giới thiệu"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
