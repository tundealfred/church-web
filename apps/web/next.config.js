//church-web/apps/web/next.config.js
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Remove basePath and assetPrefix - they were causing issues
  experimental: {
    externalDir: true,
    // Add this to handle 404 page specifically
    isrMemoryCacheSize: 50,
    largePageDataBytes: 128 * 1000,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  transpilePackages: ["@repo/ui", "@utils"],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@components": path.resolve(__dirname, "components"),
      "@components/cards": path.resolve(__dirname, "components/cards"),
      "@utils": path.resolve(__dirname, "../../packages/utils/src"),
      "@repo/ui": path.resolve(__dirname, "../../packages/ui"),
    };
    config.resolve.symlinks = false;
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add this to skip problematic pages during build
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
};

export default nextConfig;
