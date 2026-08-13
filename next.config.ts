import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  basePath: '/mechu',
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
