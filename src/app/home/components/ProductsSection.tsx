"use client";

import { useState } from "react";
import Image from "next/image";

const productCategories = [
  {
    id: "polycarbonate",
    name: "Tấm Polycarbonate",
    products: [
      {
        id: 1,
        name: "Tấm Polycarbonate Đặc Ruột Trong Suốt",
        price: "Liên hệ",
        image: "https://nhuaminhquang.vn/wp-content/uploads/2024/01/pc-dac-ruot-trong.jpg",
        specs: ["Độ dày: 2-15mm", "Kích thước: 1220x2440mm", "Bảo hành: 10 năm"],
      },
      {
        id: 2,
        name: "Tấm Polycarbonate Rỗng Ruột 2 Lớp",
        price: "Liên hệ",
        image: "https://nhuaminhquang.vn/wp-content/uploads/2024/01/pc-rong-2-lop.jpg",
        specs: ["Độ dày: 4-10mm", "Chiều rộng: 2100mm", "Bảo hành: 10 năm"],
      },
      {
        id: 3,
        name: "Tấm Polycarbonate Sóng Lấy Sáng",
        price: "Liên hệ",
        image: "https://nhuaminhquang.vn/wp-content/uploads/2024/01/pc-song.jpg",
        specs: ["Độ dày: 0.8-2mm", "Chiều rộng: 1050mm", "Bảo hành: 5 năm"],
      },
      {
        id: 4,
        name: "Tấm Polycarbonate Rỗng Ruột 3 Lớp",
        price: "Liên hệ",
        image: "https://nhuaminhquang.vn/wp-content/uploads/2024/01/pc-rong-3-lop.jpg",
        specs: ["Độ dày: 16-25mm", "Chiều rộng: 2100mm", "Bảo hành: 10 năm"],
      },
    ],
  },
  {
    id: "coppha",
    name: "Cốp Pha Nhựa PP",
    products: [
      {
        id: 5,
        name: "Cốp Pha Nhựa PP 15mm",
        price: "Liên hệ",
        image: "https://nhuaminhquang.vn/wp-content/uploads/2024/01/cop-pha-15mm.jpg",
        specs: ["Độ dày: 15mm", "Kích thước: 1220x2440mm", "Tái sử dụng: 50+ lần"],
      },
      {
        id: 6,
        name: "Cốp Pha Nhựa PP 18mm",
        price: "Liên hệ",
        image: "https://nhuaminhquang.vn/wp-content/uploads/2024/01/cop-pha-18mm.jpg",
        specs: ["Độ dày: 18mm", "Kích thước: 1220x2440mm", "Tái sử dụng: 60+ lần"],
      },
      {
        id: 7,
        name: "Cốp Pha Nhựa PP 20mm",
        price: "Liên hệ",
        image: "https://nhuaminhquang.vn/wp-content/uploads/2024/01/cop-pha-20mm.jpg",
        specs: ["Độ dày: 20mm", "Kích thước: 1220x2440mm", "Tái sử dụng: 80+ lần"],
      },
    ],
  },
  {
    id: "tonpvc",
    name: "Tôn Nhựa PVC",
    products: [
      {
        id: 8,
        name: "Tôn Nhựa PVC 5 Sóng",
        price: "Liên hệ",
        image: "https://nhuaminhquang.vn/wp-content/uploads/2024/01/ton-pvc-5-song.jpg",
        specs: ["Độ dày: 2mm", "Chiều rộng: 1070mm", "Bảo hành: 15 năm"],
      },
      {
        id: 9,
        name: "Tôn Nhựa PVC Giả Ngói",
        price: "Liên hệ",
        image: "https://nhuaminhquang.vn/wp-content/uploads/2024/01/ton-pvc-gia-ngoi.jpg",
        specs: ["Độ dày: 2.5mm", "Chiều rộng: 1050mm", "Bảo hành: 15 năm"],
      },
      {
        id: 10,
        name: "Tôn Nhựa PVC Sóng Vuông",
        price: "Liên hệ",
        image: "https://nhuaminhquang.vn/wp-content/uploads/2024/01/ton-pvc-song-vuong.jpg",
        specs: ["Độ dày: 2mm", "Chiều rộng: 1130mm", "Bảo hành: 15 năm"],
      },
    ],
  },
  {
    id: "ngoipvc",
    name: "Ngói Nhựa PVC",
    products: [
      {
        id: 11,
        name: "Ngói Nhựa PVC Đỏ",
        price: "Liên hệ",
        image: "https://nhuaminhquang.vn/wp-content/uploads/2024/01/ngoi-pvc-do.jpg",
        specs: ["Độ dày: 2.5mm", "Kích thước: 720x420mm", "Bảo hành: 20 năm"],
      },
      {
        id: 12,
        name: "Ngói Nhựa PVC Xám",
        price: "Liên hệ",
        image: "https://nhuaminhquang.vn/wp-content/uploads/2024/01/ngoi-pvc-xam.jpg",
        specs: ["Độ dày: 2.5mm", "Kích thước: 720x420mm", "Bảo hành: 20 năm"],
      },
      {
        id: 13,
        name: "Ngói Nhựa PVC Xanh",
        price: "Liên hệ",
        image: "https://nhuaminhquang.vn/wp-content/uploads/2024/01/ngoi-pvc-xanh.jpg",
        specs: ["Độ dày: 2.5mm", "Kích thước: 720x420mm", "Bảo hành: 20 năm"],
      },
    ],
  },
];

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState("polycarbonate");

  const activeCategory = productCategories.find((cat) => cat.id === activeTab);

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-900 font-semibold rounded-full text-sm mb-4">
            SẢN PHẨM NỔI BẬT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Sản Phẩm <span className="text-orange-500">Chất Lượng Cao</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {productCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === category.id
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-orange-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeCategory?.products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                  HOT
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 min-h-[48px]">
                  {product.name}
                </h3>

                {/* Specs */}
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>

                {/* Price & Button */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-500">{product.price}</span>
                  <a
                    href="tel:0909123456"
                    className="px-4 py-2 bg-blue-900 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Liên hệ
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-block px-8 py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all"
          >
            XEM TẤT CẢ SẢN PHẨM
          </a>
        </div>
      </div>
    </section>
  );
}
