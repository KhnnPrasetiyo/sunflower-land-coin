import type { NextConfig } from "next";
const buildId = new Date().getTime().toString();
const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_BUILD_ID: buildId,
  },
};

export default nextConfig;
