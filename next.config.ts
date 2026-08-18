import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  basePath: '/mechu',
  poweredByHeader: false,
  reactStrictMode: true,

  outputFileTracingIncludes: {
    '/**/*': ['./node_modules/@swc/helpers/**/*'],
  },
};

export default nextConfig;
