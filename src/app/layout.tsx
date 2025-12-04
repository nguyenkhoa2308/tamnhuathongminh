import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/ui/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Everest Light - Tấm Nhựa Lấy Sáng Polycarbonate Chuẩn Châu Âu",
  description:
    "Everest Light - Thương hiệu hàng đầu về tấm nhựa lấy sáng Polycarbonate cao cấp tại Việt Nam. Sản phẩm đạt chuẩn EU, chống tia UV, chịu va đập gấp 200 lần kính. Hotline: 0976 110 266",
  keywords:
    "everest light, tấm nhựa lấy sáng, tấm polycarbonate, polycarbonate đặc, polycarbonate rỗng, polycarbonate sóng, mái lấy sáng, tấm lợp lấy sáng, vật liệu xây dựng",
  authors: [{ name: "Everest Light" }],
  openGraph: {
    title: "Everest Light - Tấm Nhựa Lấy Sáng Polycarbonate Chuẩn Châu Âu",
    description:
      "Giải pháp lấy sáng thông minh, bền vững và thẩm mỹ cho mọi công trình. Sản phẩm đạt chuẩn EU, bảo hành rõ ràng, giao hàng toàn quốc. Hotline: 0976 110 266",
    type: "website",
    locale: "vi_VN",
    siteName: "Everest Light",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${oswald.variable} ${openSans.variable} antialiased font-opensans`}
      >
        <ScrollToTop />
        <Header />
        <main>{children}</main>

        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}
