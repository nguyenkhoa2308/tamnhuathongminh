"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Award,
  Package,
  Headphones,
  Shield,
  BadgeDollarSign,
} from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Chuẩn Châu Âu",
    description:
      "Sản phẩm đạt chuẩn EU - chống tia UV, chịu lực và bền màu vượt trội.",
  },
  {
    icon: Package,
    title: "Đa dạng sản phẩm",
    description:
      "Đa dạng mẫu mã, độ dày, kích thước, đáp ứng mọi loại công trình.",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ tư vấn & kỹ thuật viên tận tâm, hỗ trợ mọi lúc.",
  },
  {
    icon: Shield,
    title: "Bảo hành rõ ràng",
    description: "Chính sách bảo hành minh bạch, giao hàng nhanh toàn quốc.",
  },
  {
    icon: BadgeDollarSign,
    title: "Giá cạnh tranh",
    description: "Giá thành hợp lý, dịch vụ hậu mãi chu đáo.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Page Header with Breadcrumb */}
      <section
        className="relative h-[200px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/backgrounds/section2-g.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Về chúng tôi
          </h1>
          <nav className="flex items-center gap-2 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Trang chủ
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Giới thiệu</span>
          </nav>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#996515] to-[#D4AF37] bg-clip-text text-transparent text-center mb-8">
            Giới thiệu về Everest Light
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
            <p>
              <strong>Everest Light</strong> – thương hiệu hàng đầu trong lĩnh
              vực tấm nhựa lấy sáng Polycarbonate cao cấp tại Việt Nam, chuyên
              cung cấp giải pháp chiếu sáng tự nhiên cho mọi loại công trình: từ
              dân dụng đến công nghiệp.
            </p>
            <p>
              Chúng tôi cung ứng đa dạng sản phẩm gồm tấm Polycarbonate dạng
              đặc, dạng rỗng và dạng sóng, cùng hệ phụ kiện lắp đặt đồng bộ,
              giúp khách hàng dễ dàng thi công và tối ưu độ bền cho công trình.
            </p>
            <p>
              Tất cả sản phẩm Everest Light đều được sản xuất trên dây chuyền
              công nghệ ép đùn tiên tiến, tuân thủ tiêu chuẩn Châu Âu (EU), đảm
              bảo chất lượng vượt trội: chống tia UV, chịu va đập gấp 200 lần
              kính, truyền sáng tự nhiên và bền bỉ với thời gian.
            </p>
            <p>
              Nhờ quy trình kiểm định nghiêm ngặt, sản phẩm của chúng tôi không
              chỉ đẹp về hình thức mà còn tối ưu hiệu suất sử dụng và độ an toàn
              cho người dùng.
            </p>
            <p>
              Sau nhiều năm hoạt động và phát triển, Everest Light đã trở thành
              đối tác tin cậy của hàng trăm đại lý, nhà thầu và khách hàng cá
              nhân trên toàn quốc.
            </p>
            <p>
              Với triết lý{" "}
              <strong className="text-primary">
                &quot;Bền vững cùng ánh sáng tự nhiên&quot;
              </strong>
              , chúng tôi luôn đặt uy tín và chất lượng lên hàng đầu, mang đến
              những sản phẩm thực sự khác biệt và lâu dài cho công trình Việt.
            </p>
          </div>

          {/* Company Image */}
          <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/about/about-img.jpg"
              alt="Everest Light Factory"
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#996515] to-[#D4AF37] bg-clip-text text-transparent text-center mb-8">
            Tầm nhìn của Everest Light
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
            <p>
              <strong>Everest Light</strong> hướng tới trở thành thương hiệu
              tiên phong về giải pháp lấy sáng tự nhiên và vật liệu nhựa kỹ
              thuật cao cấp tại Việt Nam.
            </p>
            <p>
              Chúng tôi không chỉ cung cấp vật liệu, mà còn mang đến giải pháp
              toàn diện – từ lựa chọn sản phẩm, thiết kế đến lắp đặt, giúp khách
              hàng tối ưu công năng, tiết kiệm chi phí và nâng tầm thẩm mỹ cho
              công trình.
            </p>
            <p>
              Tầm nhìn của chúng tôi là đưa tấm nhựa Polycarbonate Việt Nam đạt
              chuẩn quốc tế, thay thế các vật liệu truyền thống, góp phần tạo
              dựng những không gian xanh, bền vững và hiện đại hơn mỗi ngày.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#996515] to-[#D4AF37] bg-clip-text text-transparent text-center mb-8">
            Tại sao khách hàng lựa chọn Everest Light?
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed text-justify mb-12">
            <p>
              <strong>Everest Light</strong> luôn đặt khách hàng làm trung tâm
              trong mọi hoạt động. Mỗi sản phẩm trước khi xuất xưởng đều được
              kiểm định kỹ lưỡng, đảm bảo chất lượng cao và tuổi thọ dài hạn.
            </p>
            <p>
              Chúng tôi không chỉ bán vật liệu, mà đồng hành cùng khách hàng từ
              khâu tư vấn đến thi công, mang lại trải nghiệm chuyên nghiệp và
              đáng tin cậy nhất.
            </p>
          </div>

          <h3 className="text-xl font-bold bg-gradient-to-r from-[#996515] to-[#D4AF37] bg-clip-text text-transparent text-center mb-8">
            Điểm khác biệt của Everest Light
          </h3>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 bg-gradient-to-r from-[#996515] to-[#D4AF37] rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
