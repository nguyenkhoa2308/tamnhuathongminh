"use client";

import Link from "next/link";
import { ChevronRight, Phone, Mail, Globe, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert("Cảm ơn bạn đã gửi thông tin. Chúng tôi sẽ liên hệ lại sớm nhất!");
  };

  return (
    <main className="min-h-[calc(100vh-166px)]">
      {/* Page Header with Breadcrumb - taller to accommodate overlap */}
      <section className="relative h-[280px] bg-cover bg-center bg-[url('/images/backgrounds/section2-g.jpg')] flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Liên hệ
          </h1>
          <nav className="flex items-center gap-2 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Trang chủ
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Liên hệ</span>
          </nav>
        </div>
      </section>

      {/* Contact Info Bar - Overlapping */}
      <section className="relative z-20 -mt-16 px-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Brand Name */}
              <div className="text-center lg:text-left">
                <p className="text-gray-600">Liên hệ với chúng tôi,</p>
                <p className="text-xl font-bold bg-gradient-to-r from-[#996515] to-[#D4AF37] bg-clip-text text-transparent">
                  Everest Light - Tấm Nhựa Lấy Sáng
                </p>
              </div>

              {/* Contact Items */}
              <div className="flex flex-wrap justify-center lg:justify-end gap-6 lg:gap-8">
                {/* Hotline */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Hotline</p>
                    <p className="font-bold text-gray-800">0976.110.266</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-bold text-gray-800">
                      nhualaysangeverestlight@gmail.com
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Website</p>
                    <p className="font-bold text-gray-800">
                      nhualaysangeverestlight.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Thông tin liên hệ
              </h2>
              <p className="text-gray-600 mb-8">
                Mọi thông tin đặt hàng, tư vấn báo giá hoặc hợp tác kinh doanh,
                vui lòng liên hệ với chúng tôi qua:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 bg-gradient-to-r from-[#996515] to-[#D4AF37] bg-clip-text text-transparent">
                    Everest Light - Giải Pháp Lấy Sáng Tự Nhiên
                  </h3>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-700">
                      Địa chỉ:
                    </span>{" "}
                    <span className="text-gray-600">Hà Nội, Việt Nam</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-700">
                      Hotline:
                    </span>{" "}
                    <a
                      href="tel:0976110266"
                      className="text-primary hover:underline font-semibold"
                    >
                      0976 110 266
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-700">Email:</span>{" "}
                    <Link
                      href="mailto:nhualaysangeverestlight@gmail.com"
                      className="text-primary hover:underline"
                    >
                      nhualaysangeverestlight@gmail.com
                    </Link>
                  </div>
                </div>

                {/* Additional info */}
                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-gray-600 text-sm">
                    <strong className="text-gray-800">Giờ làm việc:</strong> Thứ
                    2 - Thứ 7: 8:00 - 17:30
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    <strong className="text-gray-800">Hỗ trợ:</strong> Tư vấn
                    miễn phí 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Gửi yêu cầu tư vấn
              </h2>
              <p className="text-gray-600 mb-8">
                Để lại thông tin, chúng tôi sẽ liên hệ tư vấn và báo giá trong
                thời gian sớm nhất.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Số điện thoại"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Địa chỉ email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Mục đích liên hệ"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <textarea
                  placeholder="Nội dung yêu cầu (loại sản phẩm, số lượng, địa chỉ giao hàng...)"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD966] text-primary font-bold rounded-lg group overflow-hidden relative"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-3">
                    Gửi yêu cầu
                  </span>
                  <Send className="w-4 h-4 absolute right-6 top-1/2 -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
