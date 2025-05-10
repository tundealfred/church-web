//church-web/apps/web/next.config.js
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    externalDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@components": path.resolve(__dirname, "components"),
      "@components/cards": path.resolve(__dirname, "components/cards"),
      "@utils": path.resolve(__dirname, "../../packages/utils/src"),
      "@repo/ui": path.resolve(__dirname, "../../packages/ui"),
    };
    return config;
  },
};

export default nextConfig;
