/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
