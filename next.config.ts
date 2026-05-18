import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ellabektas-website', // must match your repo name
  images: { unoptimized: true },
  /* config options here */
};

export default nextConfig;
