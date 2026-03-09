import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output standalone for PM2 deployment
  output: "standalone",

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },

  // React strict mode
  reactStrictMode: false,

  // Experimental features
  experimental: {
    // Enable server actions (if needed)
    // serverActions: true,
  },

  // Environment variables exposed to the browser
  // Only add variables that should be accessible client-side
  // Server-side variables are automatically available
  env: {
    // App configuration (client-accessible)
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'Astha Gurukul',
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://asthagurukul.com',
  },

  // Image optimization configuration
  images: {
    // Remote image domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Disable image optimization in development for faster builds
    unoptimized: process.env.NODE_ENV === 'development',
  },

  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        // Cache static assets for 1 year
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects (if needed)
  async redirects() {
    return [
      // Example: Redirect www to non-www
      // {
      //   source: '/:path*',
      //   has: [{ type: 'host', value: 'www.asthagurukul.com' }],
      //   destination: 'https://asthagurukul.com/:path*',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
