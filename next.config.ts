import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*', // Match any route under /api/auth/
        destination: 'https://test-2.hypernix.dev/auth/:path*', // Forward to Express.js server
      },
    ];
  },
};

export default nextConfig;
