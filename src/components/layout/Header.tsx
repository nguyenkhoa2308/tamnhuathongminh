"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, MapPin, PhoneIcon, Search } from "lucide-react";

const productSubItems = [
  { name: "Tấm Polycarbonate Đặc", href: "/products/polycarbonate-dac" },
  { name: "Tấm Polycarbonate Rỗng", href: "/products/polycarbonate-rong" },
  { name: "Tấm Polycarbonate Sóng", href: "/products/polycarbonate-song" },
  { name: "Phụ Kiện Lắp Đặt", href: "/products/phu-kien" },
];

const navItems = [
  { name: "TRANG CHỦ", href: "/" },
  { name: "GIỚI THIỆU", href: "/about" },
  { name: "SẢN PHẨM", href: "/products", hasDropdown: true },
  // { name: "DỰ ÁN", href: "/projects" },
  { name: "LIÊN HỆ", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const pathname = usePathname();

  // Sticky header logic
  useEffect(() => {
    let lastY = 0;
    let ticking = false;

    const updateSticky = () => {
      const currentY = window.scrollY;

      if (currentY < 50) {
        setShowSticky(false);
      } else if (currentY > 200 && currentY > lastY) {
        setShowSticky(true);
      }

      lastY = currentY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateSticky);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if nav item is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      {/* Original Header */}
      <header className="bg-white shadow-md">
        {/* Top bar */}
        <div className="bg-primary text-white py-2">
          <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <Link
                href="https://www.google.com/maps/place/17+%C4%90.+Trung+V%C4%83n,+Trung+V%C4%83n,+Nam+T%E1%BB%AB+Li%C3%AAm,+H%C3%A0+N%E1%BB%99i"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                <MapPin className="w-7 h-7" />
                <div className="flex flex-col font-semibold gap-1">
                  <span>Địa chỉ</span>Số 7 Ngọc Trục, Đại Mỗ, Nam Từ Liêm, Hà
                  Nội
                </div>
              </Link>
              <Link
                href="mailto:+84356786868"
                className="hidden md:flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                <Mail className="w-7 h-7" />
                <div className="flex flex-col font-semibold gap-1">
                  <span>Mail</span>tongkhotamlopvn@gmail.com
                </div>
              </Link>
              <Link
                href="tel:+84936211116"
                className="hidden md:flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                <PhoneIcon className="w-7 h-7" />
                <div className="flex flex-col font-semibold gap-1">
                  <span>CSKH</span> 0976.110.266
                </div>
              </Link>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm"
                className="w-64 md:w-80 bg-white px-4 py-2 rounded-md text-gray-700 placeholder-gray-400 outline-none border border-white focus:border-red-600 transition-all duration-300"
              />

              {/* Icon kính lúp */}
              <Search
                className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-primary cursor-pointer"
                strokeWidth={3}
              />
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/logo-everest-light.png"
                alt="Logo"
                width={298}
                height={167}
                className="max-h-[90px] max-w-full w-auto h-full"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="px-4 py-2 font-bold flex items-center gap-1 relative"
                  >
                    {/* Normal text */}
                    <span
                      className={`transition-opacity duration-300 ${
                        isActive(item.href)
                          ? "opacity-0"
                          : "text-gray-700 group-hover:opacity-0"
                      }`}
                    >
                      {item.name}
                    </span>
                    {/* Gradient text (overlay) */}
                    <span
                      className={`absolute left-4 bg-gradient-to-r from-[#996515] to-[#D4AF37] bg-clip-text text-transparent transition-opacity duration-300 ${
                        isActive(item.href)
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {item.name}
                    </span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-all duration-300 group-hover:rotate-180 ${
                          isActive(item.href)
                            ? "text-[#996515]"
                            : "text-gray-700 group-hover:text-[#996515]"
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white rounded-lg [box-shadow:0_4px_20px_rgba(0,0,0,0.25)] min-w-[280px] py-2 overflow-hidden">
                        {productSubItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-gray-700 hover:translate-x-2 hover:text-[#996515] transition-all duration-300 text-md"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden text-gray-600 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden bg-white border-t">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 font-semibold transition-colors border-b ${
                    isActive(item.href)
                      ? "text-primary bg-red-50"
                      : "text-gray-700 hover:bg-orange-50 hover:text-primary"
                  }`}
                  onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="bg-gray-50">
                    {productSubItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-8 py-2 text-gray-600 hover:text-orange-500 transition-colors border-b text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </header>

      {/* Sticky Header */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-lg ${
          showSticky
            ? "translate-y-0 transition-transform duration-500 ease-out"
            : "-translate-y-full pointer-events-none overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/logo-everest-light.png"
                alt="Logo"
                width={298}
                height={167}
                className="max-h-[70px] max-w-full w-auto h-full"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="px-3 py-2 font-bold text-md flex items-center gap-1 relative"
                  >
                    {/* Normal text */}
                    <span
                      className={`transition-opacity duration-300 ${
                        isActive(item.href)
                          ? "opacity-0"
                          : "text-gray-700 group-hover:opacity-0"
                      }`}
                    >
                      {item.name}
                    </span>
                    {/* Gradient text (overlay) */}
                    <span
                      className={`absolute left-3 bg-gradient-to-r from-[#996515] to-[#D4AF37] bg-clip-text text-transparent transition-opacity duration-300 ${
                        isActive(item.href)
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {item.name}
                    </span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-all duration-300 group-hover:rotate-180 ${
                          isActive(item.href)
                            ? "text-[#996515]"
                            : "text-gray-700 group-hover:text-[#996515]"
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white rounded-lg [box-shadow:0_4px_20px_rgba(0,0,0,0.25)] min-w-[280px] py-2 overflow-hidden">
                        {productSubItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-gray-700 hover:translate-x-2 hover:text-[#996515] transition-all duration-300 text-md"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden text-gray-600 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation for Sticky Header */}
        {isMenuOpen && (
          <nav className="lg:hidden bg-white border-t">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 font-semibold transition-colors border-b ${
                    isActive(item.href)
                      ? "text-primary bg-red-50"
                      : "text-gray-700 hover:bg-orange-50 hover:text-primary"
                  }`}
                  onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="bg-gray-50">
                    {productSubItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-8 py-2 text-gray-600 hover:text-orange-500 transition-colors border-b text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}
