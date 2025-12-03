"use client";

import {
  Lightbulb,
  Award,
  Handshake,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    id: 1,
    icon: <Lightbulb className="w-12 h-12" />,
    title: "Không ngừng cải tiến",
    description:
      "Từ nhiều năm nay, chúng tôi vẫn tiếp tục nghiên cứu, phát triển và ứng dụng những cải tiến mới để mang đến những sản phẩm tốt nhất",
  },
  {
    id: 2,
    icon: <Award className="w-12 h-12" />,
    title: "Chất lượng hàng đầu",
    description:
      "Toàn bộ các sản phẩm của chúng tôi được sản xuất theo công nghệ đùn hiện đại với 100% nguyên vật liệu nhựa cao cấp",
  },
  {
    id: 3,
    icon: <Handshake className="w-12 h-12" />,
    title: "Hỗ trợ nhà phân phối",
    description:
      "Với các chính sách hỗ trợ nhà phân phối, Everest Light luôn phấn đấu để cùng các nhà phân phối tạo nên mạng lưới bán hàng rộng khắp",
  },
  {
    id: 4,
    icon: <ShieldCheck className="w-12 h-12" />,
    title: "Bảo hành tới 5 năm",
    description:
      "Toàn bộ các sản phẩm của chúng tôi bảo hành chất lượng lên tới 5 năm, quý khách không phải lo lắng về chất lượng của sản phẩm",
  },
  {
    id: 5,
    icon: <Headphones className="w-12 h-12" />,
    title: "Hỗ trợ khách hàng",
    description:
      "Everest Light luôn chú trọng lắng nghe các nhu cầu và trải nghiệm của khách hàng trước, trong và sau khi sử dụng các sản phẩm của chúng tôi",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-primary/20 text-primary font-bold rounded-full text-sm mb-4">
            TẠI SAO CHỌN CHÚNG TÔI
          </div>
          <h2 className="text-3xl font-bold uppercase bg-gradient-to-r from-[#996515] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-sm">
            Cam Kết Chất Lượng
          </h2>
          <p className="mt-3 text-gray-600 max-w-5xl mx-auto">
            Với công nghệ hiện đại luôn luôn cập nhật, chúng tôi tự tin đem đến
            cho khách hàng những sản phẩm chất lượng nhất, đó chính là lợi thế
            cạnh tranh của chúng tôi trên thị trường
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="text-center group bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col items-center md:last:col-span-2 lg:last:col-span-1"
            >
              {/* Icon */}
              <div className="w-22 h-22 mx-auto mb-4 rounded-full flex items-center justify-center text-primary bg-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                {reason.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-md leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
