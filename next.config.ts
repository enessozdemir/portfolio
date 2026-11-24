import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/portfolio" : undefined,
  trailingSlash: true,
  images: {
    unoptimized: isGithubPages,
  },
};

export default nextConfig;
