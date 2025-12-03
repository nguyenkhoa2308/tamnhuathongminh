"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const distributors = [
  {
    region: "Miền Bắc",
    cities: ["Hà Nội", "Hải Phòng", "Quảng Ninh", "Bắc Ninh", "Hưng Yên"],
  },
  {
    region: "Miền Trung",
    cities: ["Đà Nẵng", "Huế", "Nghệ An", "Thanh Hóa", "Quảng Nam"],
  },
  {
    region: "Miền Nam",
    cities: ["TP. Hồ Chí Minh", "Bình Dương", "Đồng Nai", "Long An", "Cần Thơ"],
  },
];

export default function DistributionSection() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold uppercase bg-gradient-to-r from-[#996515] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-sm">
            HỆ THỐNG PHÂN PHỐI
          </h2>
          <p className="text-gray-800 mt-4 max-w-2xl mx-auto text-justify">
            Công ty <strong>Everest Light</strong> chúng tôi đã và đang phát
            triển nhanh hệ thống phân phối bán lẻ trên cả nước. Những chi nhánh
            này là mắt xích quan trọng trong quy trình sản xuất, kinh doanh khép
            kín của chúng tôi, đóng vai trò đưa các sản phẩm của{" "}
            <strong>Everest Light</strong> đến tận tay người tiêu dùng.
          </p>
          <p className="text-gray-800 mt-4 max-w-2xl mx-auto text-justify">
            Việc sở hữu 100 chi nhánh phân phối – bán lẻ, trải rộng khắp các
            vùng miền trên cả nước là nền tảng quan trọng nhất để{" "}
            <strong>Everest Light</strong> thực thi chiến lược “mua tận gốc, bán
            tận ngọn”.
          </p>

          <div className="mt-6">
            <Link
              href="/about"
              className="inline-flex items-center justify-start px-8 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD966] text-primary font-bold rounded-lg group overflow-hidden relative"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-3">
                Đăng ký đại lý
              </span>
              <ShoppingCart
                className="w-4 h-4 absolute right-6 top-1/2 -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2"
                strokeWidth={3}
              />
            </Link>
          </div>
        </div>

        {/* Map Image */}
        <div className="relative h-full">
          <div className="relative h-full">
            <Image
              src="/images/backgrounds/distribution-map.png"
              alt="Bản đồ phân phối"
              fill
              className="object-contain h-full w-full"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>

        {/* Distribution Info */}
        <div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#996515] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-sm mb-3">
                Miền Bắc
              </h3>
              <p className="text-gray-800 text-justify mb-5">
                Chúng tôi đã có 3 nhà máy sản xuất sản phẩm Polycarbonate với 6
                dây chuyền sản xuất và 1 nhà máy tạo nguyên liệu hạt thô,{" "}
                <strong>Everest Light</strong> đã và đang phát triển nhanh hệ
                thống phân phối bán lẻ trên các tỉnh miền Bắc.
              </p>
              <p className="text-gray-800 text-justify mb-5">
                Phân bố các chính sách ưu đãi tận tay người tiêu dùng thực thi
                &quot;Tối ưu chi phí sản xuất, sản phẩm – Phục vụ tận tâm và
                chuyên nghiệp&quot;.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#996515] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-sm mb-3">
                Miền Trung, Miền Nam
              </h3>
              <p className="text-gray-800 text-justify mb-5">
                Chúng tôi đã và đang phát triển hệ thống phân phối bán lẻ các
                tỉnh Miền Trung và Miền Nam.
              </p>
              <p className="text-gray-800 text-justify mb-5">
                <strong>Everest Light</strong> chúng tôi luôn đổi mới sáng tạo
                và tự tin đưa các giải pháp tối ưu, toàn diện cho mọi công
                trình.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
