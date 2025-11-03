import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85], // 👈 ajoute cette ligne
  },
};

export default nextConfig;
