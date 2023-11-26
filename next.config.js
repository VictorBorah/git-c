/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.victorborah.cloud",
      },
    ],
  },
};

module.exports = nextConfig;
