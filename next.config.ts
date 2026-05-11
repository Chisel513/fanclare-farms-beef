import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // When real product or farm photos are served from an external CDN,
      // add the hostname here. Example:
      // { protocol: "https", hostname: "images.example.com" },
    ],
  },
};

export default nextConfig;
