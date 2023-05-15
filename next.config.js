/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",

  images: {
    domains: ["localhost"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
