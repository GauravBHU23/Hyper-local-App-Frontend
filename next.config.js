/** @type {import('next').NextConfig} */
const DEPLOY_BACKEND_URL = "https://wrapped-licensed-political-river.trycloudflare.com";

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    const backendBase =
      process.env.NEXT_PUBLIC_BACKEND_URL ||
      process.env.NEXT_PUBLIC_BACKEND_PUBLIC_URL ||
      DEPLOY_BACKEND_URL;

    return [
      {
        source: "/backend/:path*",
        destination: `${backendBase}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
