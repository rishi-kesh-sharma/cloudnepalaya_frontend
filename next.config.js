/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",

  env: {
    SERVER_BASE_URL: "https://api.cloudnepalaya.com/api",
    SERVER_STATIC_URL: "https://api.cloudnepalaya.com",
    DASHBOARD_URL: "http://admin.cloudnepalaya.com/login",
  },
  images: {
    domains: ["http://api.cloudnepalaya.com", "https://api.cloudnepalaya.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
