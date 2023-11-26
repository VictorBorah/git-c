/** @type {import('next').NextConfig} */
const nextConfig = {
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
