import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports
reactStrictMode: true,
basePath: "/ellabektas-website", // <=== set the base path to your repository name
};

export default nextConfig;
