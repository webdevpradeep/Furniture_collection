import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  // Silence Turbopack warning by providing an empty config
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

// PWA plugin configuration (no extra Turbopack property here)
const pwaConfig = {
  dest: "public",
  register: true,
  skipWaiting: true,
  // Disable PWA generation in development to avoid multiple GenerateSW calls
  disable: process.env.NODE_ENV === "development",
};

// Export the combined configuration with PWA support
export default withPWA(pwaConfig)(nextConfig);
