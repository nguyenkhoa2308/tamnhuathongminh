"use client";

import Image from "next/image";

const customers = [
  { id: 1, name: "FLC Group", logo: "/images/partners/flc-group.jpg" },
  { id: 2, name: "EVN", logo: "/images/partners/evn.jpg" },
  { id: 3, name: "Nhất Nhất", logo: "/images/partners/nhatnhat.jpg" },
  { id: 4, name: "FPT Infomation System", logo: "/images/partners/fpt.jpg" },
  { id: 5, name: "Dong Hung Group", logo: "/images/partners/donghunggroup.jpg" },
  { id: 6, name: "Nhat Nhat", logo: "/images/partners/nhatnhat.jpg" },
  { id: 7, name: "Licogi 13", logo: "/images/partners/licogi13.jpg" },
  { id: 8, name: "Hanvico", logo: "/images/partners/hanvico.jpg" },
  { id: 9, name: "Vin Commerce", logo: "/images/partners/vincommerce.jpg" },
  { id: 10, name: "Amecc", logo: "/images/partners/amecc.jpg" },
  { id: 11, name: "Yody", logo: "/images/partners/yody.jpg" },
  {
    id: 12,
    name: "Thang Long Logistics",
    logo: "/images/partners/thanglonglogitics.jpg",
  },
  { id: 13, name: "Vin Commerce", logo: "/images/partners/vincommerce.jpg" },
  { id: 14, name: "Opodis Pharma", logo: "/images/partners/opodispharma.jpg" },
  { id: 15, name: "Tapack", logo: "/images/partners/tapack.jpg" },
  {
    id: 16,
    name: "Thang Long Logistics",
    logo: "/images/partners/thanglonglogitics.jpg",
  },
  { id: 17, name: "Vifa Sport", logo: "/images/partners/vifa.jpg" },
  { id: 18, name: "Opodis Pharma", logo: "/images/partners/opodispharma.jpg" },
];

export default function CustomerLogos() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#996515] to-[#D4AF37] bg-clip-text text-transparent uppercase">
            Khách Hàng Tiêu Biểu
          </h2>
        </div>

        {/* Logo Grid - 6 logos per row on desktop, responsive on smaller screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {customers.map((customer) => (
            <div key={customer.id} className="h-20 md:h-30 group">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={customer.logo}
                  alt={customer.name}
                  fill
                  className="object-contain p-2 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = document.createElement("span");
                      fallback.className =
                        "text-gray-400 font-semibold text-sm text-center";
                      fallback.textContent = customer.name;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
