import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true,
  },
  images: {
    domains: ["localhost"], // Allow images from http://localhost:1337
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
