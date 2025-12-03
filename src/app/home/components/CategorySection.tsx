"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Tấm nhựa lấy sáng Polycarbonate dạng Đặc",
    description:
      "Tấm nhựa Polycarbonate dạng đặc (Solid) của <strong>Everest Light</strong> có độ trong suốt gần như kính, chịu lực gấp <strong>200 lần</strong>, nhưng <strong>nhẹ hơn 50%</strong>, an toàn và sang trọng. Phù hợp cho các công trình <strong>mái giếng trời, nhà kính, sảnh, nhà ga, trung tâm thương mại</strong> và các khu vực yêu cầu độ trong suốt cao, bền với thời gian.",
    image: "/images/products/tam-polycarbonate-dac-ruot.jpg",
    href: "/products/polycarbonate-dac",
  },
  {
    id: 2,
    name: "Tấm nhựa lấy sáng Polycarbonate dạng Rỗng",
    description:
      "Tấm Polycarbonate dạng rỗng (Twinwall) được thiết kế theo <strong>cấu trúc hộp rỗng đặc biệt</strong>, giúp <strong>cách nhiệt – cách âm tốt</strong>, đồng thời vẫn đảm bảo khả năng truyền sáng tự nhiên. Là lựa chọn tối ưu cho <strong>nhà xưởng, mái che sân phơi, nhà xe, nhà kho, nhà lưới nông nghiệp</strong>, giúp không gian luôn mát mẻ, tiết kiệm điện năng.",
    image: "/images/products/tam-polycarbonate-rong-ruot.jpg",
    href: "/products/polycarbonate-rong",
  },
  {
    id: 3,
    name: "Tấm nhựa lấy sáng Polycarbonate dạng Sóng",
    description:
      "Tấm Polycarbonate dạng sóng của <strong>Everest Light</strong> được ép định hình theo dạng <strong>sóng tròn hoặc sóng vuông</strong>, dễ dàng lắp đặt và kết hợp cùng mái tôn truyền thống. Chống tia UV, không ố vàng, chịu mưa nắng khắc nghiệt, đây là lựa chọn hoàn hảo cho <strong>mái hiên, nhà xe, hành lang, mái lấy sáng nhà máy</strong> hay công trình dân dụng.",
    image: "/images/products/tam-polycarbonate-song.jpg",
    href: "/products/polycarbonate-song",
  },
  {
    id: 4,
    name: "Phụ kiện",
    description:
      "Gồm đầy đủ nẹp nhôm, nẹp nhựa, ke túi, gioăng cao su, vít inox, keo chống dột và các chi tiết lắp đặt chuyên dụng. Giúp liên kết tấm nhựa chắc chắn, chống thấm nước, đảm bảo độ kín khít và tăng tuổi thọ công trình. Tất cả phụ kiện đều đạt tiêu chuẩn Everest Light, đồng bộ hoàn hảo với các dòng tấm Polycarbonate cao cấp.",
    image: "/images/products/phu-kien.jpg",
    href: "/products/phu-kien",
  },
];

export default function CategorySection() {
  return (
    <section className="py-16 bg-cover bg-center bg-[url('/images/backgrounds/section2-g.jpg')]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 text-white">
          <h2 className="text-3xl font-bold uppercase leading-[42px] bg-gradient-to-r from-[#D4AF37] to-[#FFD966] bg-clip-text text-transparent">
            Danh mục <br />
            Sản phẩm chính
          </h2>
          <p className="mt-4 max-w-5xl mx-auto">
            <strong>Everest Light</strong> – thương hiệu tiên phong trong lĩnh
            vực <strong>tấm nhựa lấy sáng Polycarbonate cao cấp</strong>, mang
            đến giải pháp chiếu sáng tự nhiên, bền bỉ và thẩm mỹ cho mọi công
            trình. Tất cả sản phẩm đều được sản xuất theo{" "}
            <strong>tiêu chuẩn Châu Âu</strong>, có khả năng
            <strong>chống tia UV, chịu lực cao và bền bỉ với thời gian.</strong>
          </p>
        </div>

        {/* Carousel */}
        <div className="relative group/carousel">
          <button className="custom-prev absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-md flex items-center justify-center transition-all cursor-pointer">
            {""}
            <ChevronLeft size={25} />
          </button>

          <button className="custom-next absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-md flex items-center justify-center transition-all cursor-pointer">
            {""}
            <ChevronRight size={25} />
          </button>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            loop={true}
            slidesPerView={1}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id} className="!h-auto">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group/card h-full flex flex-col cursor-grab">
                  <div className="relative h-48 flex-shrink-0">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover/card:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-bold text-lg mb-2 group-hover/card:text-primary transition-colors duration-300">
                      {cat.name}
                    </h3>
                    <p
                      className="text-sm text-gray-700 flex-grow"
                      dangerouslySetInnerHTML={{ __html: cat.description }}
                    />
                    <Link
                      href={cat.href}
                      className="inline-flex items-center justify-center px-8 py-2 mt-4 bg-[#f0f0f0] text-primary group-hover/card:bg-gradient-to-r group-hover/card:from-[#D4AF37] group-hover/card:to-[#FFD966] font-bold rounded-lg group overflow-hidden relative transition-all duration-300"
                    >
                      <span className="transition-transform duration-300 group-hover:-translate-x-3">
                        Xem thêm
                      </span>
                      <ChevronRight className="w-4 h-4 absolute right-6 top-1/2 -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
