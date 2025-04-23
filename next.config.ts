import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.chit.sh',
        pathname: '/**',
        search: '',
      },
    ]
  },
};
export default nextConfig;
