/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = nextConfig;
