/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "images.unsplash.com",
      "cdn-images.zety.com",
    ],
  },
};

module.exports = nextConfig;
