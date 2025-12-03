// src/types/product.ts

export interface ProductImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface ProductColor {
  name: string;
}

export interface PriceRow {
  thickness: string;
  price: number;
  price_formatted: string;
}

export interface ProductSpecs {
  thickness: string;
  product_line: string;
  sku: string;
  length: string;
  widths: string[];
  colors: ProductColor[];
}

export interface ProductContact {
  phone: string;
  email?: string;
  address?: string;
}

// Content Section Types
export interface BaseSection {
  type: string;
  title?: string;
}

export interface TextSection extends BaseSection {
  type: "text" | "composition";
  body: string;
}

export interface ImageSection extends BaseSection {
  type: "image";
  url: string;
  alt: string;
  caption?: string;
}

export interface ProsConsSection extends BaseSection {
  type: "pros_cons";
  intro?: string;
  pros: string[];
  cons: string[];
}

export interface PriceTableSection extends BaseSection {
  type: "price_table";
  data: PriceRow[];
}

export interface ApplicationsSection extends BaseSection {
  type: "applications";
  intro?: string;
  items: string[];
}

export type ContentSection =
  | TextSection
  | ImageSection
  | ProsConsSection
  | PriceTableSection
  | ApplicationsSection;

export interface ProductContent {
  intro: string;
  sections: ContentSection[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  category_slug: string;
  price: number;
  price_formatted: string;
  unit: string;
  url: string;
  short_description: string;
  thumbnail: string;
  images: ProductImage[];
  specs: ProductSpecs;
  content: ProductContent;
  contact?: ProductContact;
}

export interface ProductsData {
  metadata: {
    scraped_at: string;
    total_products: number;
    source: string;
  };
  products: Product[];
}
