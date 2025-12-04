"use client";

import { Phone, Send } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section className="relative h-[350px] overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/backgrounds/section7.jpg')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
          Bạn cần tư vấn tấm ốp lấy sáng Polycarbonate?
        </h2>
        <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl">
          Vui lòng liên hệ nhân viên chăm sóc khách hàng của chúng tôi
          <span className="hidden sm:inline">
            <br />
          </span>{" "}
          để được tư vấn giải đáp chi tiết nhất
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto px-4 sm:px-0">
          <a
            href="tel:0976110266"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Liên hệ ngay
          </a>
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#996515] to-[#D4AF37] text-white font-semibold rounded-full overflow-hidden btn-shine"
          >
            <Send className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Đăng ký đại lý</span>
          </a>
        </div>
      </div>
    </section>
  );
}
