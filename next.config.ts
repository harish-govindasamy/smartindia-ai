import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  distDir: process.env.NODE_ENV === "production" ? "dist" : ".next",
};

export default nextConfig;
