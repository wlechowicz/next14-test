/** @type {import('next').NextConfig} */
const nextConfig = {
  // uncomment this to see that the index.html is indeed statically generated in the "out" dir
  // or just `npm run build` with this commented out and check .next/server/app/index.html
  // output: "export",
  experimental: {
    ppr: true,
  },
};

module.exports = nextConfig;
