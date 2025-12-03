"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <Image
                src="/images/about/about-img.jpg"
                alt="Công ty Everest Light"
                width={658}
                height={541}
                className="object-cover w-full h-auto max-w-full"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
              VỀ CHÚNG TÔI
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#996515] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-sm mb-6">
              Everest Light – Tiên phong sản xuất & thi công <br />
              Tấm nhựa lấy sáng polycarbonate tiêu chuẩn Đức
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Công ty Cổ phần Everest Light tự hào là đơn vị hàng đầu tại Việt
              Nam chuyên Sản Xuất - Phân Phối - Thi Công tấm nhựa lấy sáng thông
              minh. Khác biệt hoàn toàn với thị trường, Everest Light cam kết sử
              dụng 100% nguyên liệu hạt nhựa nhập khẩu từ Đức (Bayer/Sabic),
              tuyệt đối nói KHÔNG với tạp chất và nhựa tái chế, mang lại độ bền
              cam kết trên 30 năm.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Sở hữu dây chuyền sản xuất công nghệ cao, chúng tôi đáp ứng mọi
              yêu cầu khắt khe nhất về kích thước, màu sắc và độ dày của tấm
              lợp. Với mô hình cung ứng trực tiếp &quot;Từ nhà máy đến công
              trình&quot;, Everest Light giúp khách hàng sở hữu sản phẩm chất
              lượng Châu Âu với mức giá cạnh tranh nhất, loại bỏ hoàn toàn chi
              phí trung gian.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Lấy &quot;Chất Lượng Vàng&quot; làm kim chỉ nam, đội ngũ kỹ thuật
              viên của Everest Light không chỉ bán vật liệu mà còn cung cấp giải
              pháp thi công trọn gói chuyên nghiệp, đảm bảo tính thẩm mỹ và an
              toàn tuyệt đối trước mưa bão.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD966] text-primary font-bold rounded-lg group overflow-hidden relative"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-3">
                Xem thêm
              </span>
              <ChevronRight className="w-4 h-4 absolute right-6 top-1/2 -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
