import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  ppr: "incremental",
  eslint: {
    // disable during development and build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
