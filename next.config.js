/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: false,
  },
};

module.exports = nextConfig;

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
//   openAnalyzer: false,
// });

// module.exports = withBundleAnalyzer(nextConfig);
