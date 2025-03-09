import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: 'export', // Enables static exports
  images: {
    unoptimized: true, // Required when using 'export'
  },
};

export default nextConfig;