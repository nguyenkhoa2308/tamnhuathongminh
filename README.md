# Everest Light - Website Tấm Nhựa Polycarbonate

Website giới thiệu và bán hàng cho thương hiệu **Everest Light** - chuyên cung cấp tấm nhựa lấy sáng Polycarbonate cao cấp.

## Tổng quan

Website được xây dựng với Next.js 16, React 19 và Tailwind CSS 4, cung cấp trải nghiệm người dùng mượt mà với:

- Trang chủ với slider, giới thiệu danh mục sản phẩm
- Trang danh sách sản phẩm theo từng danh mục
- Trang chi tiết sản phẩm với gallery ảnh, bảng giá, thông số kỹ thuật
- Trang giới thiệu và liên hệ
- Responsive design cho mọi thiết bị

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Carousel:** Swiper
- **Language:** TypeScript

## Cấu trúc thư mục

```
src/
├── app/
│   ├── home/
│   │   └── components/     # Components trang chủ (HeroSlider, CategorySection, ...)
│   ├── products/
│   │   ├── [category]/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx    # Trang chi tiết sản phẩm
│   │   │   └── page.tsx        # Trang danh mục sản phẩm
│   │   └── _component/         # Components dùng chung cho products
│   ├── about/                  # Trang giới thiệu
│   ├── contact/                # Trang liên hệ
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Header với sticky navigation
│   │   └── Footer.tsx
│   └── ui/
│       ├── ProductCard.tsx     # Card hiển thị sản phẩm
│       ├── ImageGallery.tsx    # Gallery ảnh với zoom
│       ├── CustomSelect.tsx    # Custom dropdown
│       └── ...
├── data/
│   └── polycarbonate_products.json   # Dữ liệu sản phẩm
├── lib/
│   └── product.ts              # Helper functions cho products
├── types/
│   └── product.ts              # TypeScript types
└── ...
```

## Danh mục sản phẩm

1. **Polycarbonate Đặc** (`/products/polycarbonate-dac`)

   - Trong suốt như kính, chịu lực gấp 200 lần

2. **Polycarbonate Rỗng** (`/products/polycarbonate-rong`)

   - Cấu trúc hộp rỗng, cách nhiệt - cách âm tốt

3. **Polycarbonate Sóng** (`/products/polycarbonate-song`)

   - Dạng sóng tròn/vuông, dễ lắp đặt với mái tôn

4. **Phụ kiện lắp đặt** (`/products/phu-kien`)
   - Nẹp nhôm, gioăng cao su, vít inox, keo chống dột

## Bắt đầu

### Yêu cầu

- Node.js 18+
- npm hoặc yarn

### Cài đặt

```bash
# Clone repository
git clone <repo-url>
cd tamnhuathongminh

# Cài đặt dependencies
npm install
```

### Chạy Development Server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem website.

### Build Production

```bash
npm run build
npm start
```

## Scripts

| Script          | Mô tả                   |
| --------------- | ----------------------- |
| `npm run dev`   | Chạy development server |
| `npm run build` | Build production        |
| `npm start`     | Chạy production server  |
| `npm run lint`  | Kiểm tra linting        |

## Tính năng chính

- **Sticky Header**: Header cố định khi scroll xuống
- **Product Gallery**: Zoom ảnh khi hover, lightbox khi click
- **Price Table**: Bảng giá với tìm kiếm, sắp xếp, phân trang
- **Responsive**: Tối ưu cho mobile, tablet, desktop
- **SEO Ready**: Cấu trúc semantic HTML

## Thông tin liên hệ

- **Hotline:** 0976.110.266
- **Email:** nhualaysangeverestlight@gmail.com
- **Địa chỉ:** Ngọc Trục, Đại Mỗ, Nam Từ Liêm, Hà Nội

---

© 2024 Everest Light. All rights reserved.
