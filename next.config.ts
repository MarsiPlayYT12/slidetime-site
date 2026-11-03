import type { NextConfig } from "next";

// GitHub project Pages is served at /slidetime-site, while the custom domain
// serves the same build from /. The workflow supplies this value at build time.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // GitHub Pages only serves files, so Next must generate a fully static site.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
