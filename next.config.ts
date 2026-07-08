import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
        
      },
      {
        protocol: "https",
        hostname: "cdn2.thedogapi.com",

      },
      {
        protocol: "https",
        hostname: "cdn4.thedogapi.com",
      }
    ]
  }
};

export default nextConfig;
