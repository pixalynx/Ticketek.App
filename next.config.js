/** @type {import('next').NextConfig} */
const env = process.env.NODE_ENV;
const nextConfig = {};

module.exports = {
  ...(env === "development" && {
    async rewrites() {
      return [
        {
          source: "/api/event/:path*",
          destination: "http://localhost:5258/api/event/:path*",
        },
      ];
    },
  }),
  ...nextConfig,
};
