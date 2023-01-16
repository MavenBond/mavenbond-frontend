/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "pathwayactivities.co.uk", "trainghiemso.vn"],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
