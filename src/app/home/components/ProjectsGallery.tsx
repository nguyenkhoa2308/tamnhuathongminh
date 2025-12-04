"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "KCN Samsung",
    image: "/images/projects/samsung.jpg",
    size: "tall", // tall box
  },
  {
    id: 2,
    name: "Biệt thự nhà dân",
    image: "/images/projects/biethu.jpg",
    size: "small",
  },
  {
    id: 3,
    name: "Đại học Thương Mại",
    image: "/images/projects/thuongmai.jpg",
    size: "small",
  },
  {
    id: 4,
    name: "Royal Tuyên Quang",
    image: "/images/projects/royal.jpg",
    size: "tall",
  },
  {
    id: 5,
    name: "THCS Quế Võ Bắc Ninh",
    image: "/images/projects/quevo.jpg",
    size: "medium",
  },
  {
    id: 6,
    name: "Khách sạn Nha Trang",
    image: "/images/projects/nhatrang.jpg",
    size: "large",
  },
  {
    id: 7,
    name: "Nhà vườn",
    image: "/images/projects/nhavuon.jpg",
    size: "medium",
  },
];

export default function ProjectsGallery() {
  return (
    <section className="py-10 md:py-16 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
          <div className="hidden md:block flex-1 h-[2px] bg-black"></div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#996515] to-[#D4AF37] bg-clip-text text-transparent uppercase text-center">
            Công Trình Tiêu Biểu
          </h2>
          <div className="hidden md:block flex-1 h-[2px] bg-black"></div>
        </div>

        {/* Projects Grid - Desktop */}
        <div className="hidden lg:block space-y-4">
          {/* Row 1: Samsung (tall) | Biệt thự + Thương Mại (stacked) | Royal (tall) */}
          <div className="grid grid-cols-4 gap-4 h-[500px]">
            {/* Samsung - tall */}
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/images/projects/samsung.jpg"
                alt="KCN Samsung"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold uppercase">
                  KCN Samsung
                </span>
              </div>
            </div>

            {/* Biệt thự + Thương Mại stacked */}
            <div className="flex flex-col gap-4">
              <div className="relative flex-1 group overflow-hidden rounded-lg">
                <Image
                  src="/images/projects/biethu.jpg"
                  alt="Biệt thự nhà dân"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold uppercase">
                    Biệt thự nhà dân
                  </span>
                </div>
              </div>
              <div className="relative flex-1 group overflow-hidden rounded-lg">
                <Image
                  src="/images/projects/thuongmai.jpg"
                  alt="Đại học Thương Mại"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold uppercase">
                    Đại học Thương Mại
                  </span>
                </div>
              </div>
            </div>

            {/* Royal - tall spanning 2 cols */}
            <div className="col-span-2 relative group overflow-hidden rounded-lg">
              <Image
                src="/images/projects/royal.jpg"
                alt="Royal Tuyên Quang"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold uppercase">
                  Royal Tuyên Quang
                </span>
              </div>
            </div>
          </div>

          {/* Row 2: Quế Võ + Nhà Vườn (stacked ~40%) | Nha Trang (tall ~60%) */}
          <div className="grid grid-cols-5 gap-4 h-[500px]">
            {/* Quế Võ + Nhà Vườn stacked - 2 cols = 40% */}
            <div className="col-span-2 flex flex-col gap-4">
              <div className="relative flex-1 group overflow-hidden rounded-lg">
                <Image
                  src="/images/projects/quevo.jpg"
                  alt="THCS Quế Võ Bắc Ninh"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold uppercase">
                    THCS Quế Võ Bắc Ninh
                  </span>
                </div>
              </div>
              <div className="relative flex-1 group overflow-hidden rounded-lg">
                <Image
                  src="/images/projects/nhavuon.jpg"
                  alt="Nhà vườn"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold uppercase">
                    Nhà vườn
                  </span>
                </div>
              </div>
            </div>

            {/* Nha Trang - tall 3 cols = 60% */}
            <div className="col-span-3 relative group overflow-hidden rounded-lg">
              <Image
                src="/images/projects/nhatrang.jpg"
                alt="Khách sạn Nha Trang"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold uppercase">
                  Khách sạn Nha Trang
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid - Mobile/Tablet */}
        <div className="lg:hidden grid grid-cols-2 gap-2 sm:gap-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`relative group overflow-hidden rounded-lg ${
                index === 0 || index === 3
                  ? "aspect-[4/5]"
                  : "aspect-square"
              }`}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <span className="bg-primary/90 text-white px-2 py-1 rounded text-[10px] sm:text-xs font-semibold line-clamp-1">
                  {project.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
