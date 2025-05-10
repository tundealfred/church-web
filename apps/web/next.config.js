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
    // Enable if using ISR
    // isrMemoryCacheSize: 50,
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
      // Add your production domain here
      {
        protocol: "https",
        hostname: "your-production-api.com",
      },
    ],
    minimumCacheTTL: 60,
  },
  // Enable if using shared packages
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
  // Add if you need to ignore TypeScript/ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
