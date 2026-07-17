/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },

  // Exclude arcjet WASM packages from bundling — Turbopack can't resolve
  // the virtual WASM module paths used by @arcjet/analyze-wasm.
  // These packages run fine as native Node.js externals on the server.
  serverExternalPackages: [
    "@arcjet/next",
    "arcjet",
    "@arcjet/analyze",
    "@arcjet/analyze-wasm",
  ],

  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

export default nextConfig;
