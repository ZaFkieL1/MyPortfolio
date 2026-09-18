import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 75 is the default; 90 keeps text in product screenshots sharp.
    qualities: [75, 90],
    // Optimized images are cached for 31 days. Statically imported images are also
    // content-hashed and served with an immutable Cache-Control header.
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
