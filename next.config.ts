import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nhuaminhquang.vn",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.ladipage.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
