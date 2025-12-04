"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  PhoneIcon,
  Search,
  X,
} from "lucide-react";

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
  { name: "LIÊN HỆ", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

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
        {/* Top bar - Hidden on mobile */}
        <div className="bg-primary text-white py-2 hidden md:block">
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
                  <span>Địa chỉ</span>Ngọc Trục, Đại Mỗ, Nam Từ Liêm, Hà Nội
                </div>
              </Link>
              <Link
                href="mailto:+84356786868"
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                <Mail className="w-7 h-7" />
                <div className="flex flex-col font-semibold gap-1">
                  <span>Mail</span>nhualaysangeverestlight@gmail.com
                </div>
              </Link>
              <Link
                href="tel:+84936211116"
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
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
              className="lg:hidden text-gray-600 hover:text-primary transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[100] lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white z-[101] lg:hidden transform transition-transform duration-300 ease-out shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#996515] to-[#D4AF37]">
          <span className="text-white font-bold text-lg">Menu</span>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
            aria-label="Đóng menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="py-2 overflow-y-auto max-h-[calc(100vh-180px)]">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.hasDropdown ? (
                <>
                  <button
                    type="button"
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className={`w-full flex items-center justify-between px-5 py-4 font-semibold transition-colors ${
                      isActive(item.href)
                        ? "text-primary bg-primary/5"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        mobileProductsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileProductsOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="bg-gray-50 py-2">
                      <Link
                        href="/products"
                        className="flex items-center gap-2 px-6 py-3 text-primary font-semibold hover:bg-gray-100 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <ChevronRight className="w-4 h-4" />
                        <span>Tất cả sản phẩm</span>
                      </Link>
                      {productSubItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <ChevronRight className="w-4 h-4 text-primary" />
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`block px-5 py-4 font-semibold transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-primary/5"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Contact Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t">
          <a
            href="tel:0976110266"
            className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#996515] to-[#D4AF37] text-white rounded-lg mb-3"
          >
            <PhoneIcon className="w-5 h-5" />
            <span className="font-semibold">0976.110.266</span>
          </a>
          <a
            href="mailto:nhualaysangeverestlight@gmail.com"
            className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg text-gray-700 text-sm"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span className="truncate">nhualaysangeverestlight@gmail.com</span>
          </a>
        </div>
      </div>

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
              className="lg:hidden text-gray-600 hover:text-primary transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
