import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [75, 85, 90, 95], // Khai báo các mức chất lượng được phép sử dụng ở đây
  },
};

export default nextConfig;
