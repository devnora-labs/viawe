import type { NextConfig } from "next";
import { sources } from "./content/media";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: Object.values(sources).map((search) => ({
      protocol: "https" as const,
      hostname: "images.unsplash.com",
      pathname: "/photo-**",
      search,
    })),
  },
};

export default nextConfig;
