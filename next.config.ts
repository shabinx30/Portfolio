import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  images: {
    unoptimized: true,
    domains: ["instagram.fcok10-4.fna.fbcdn.net"],
  },
};

export default nextConfig;