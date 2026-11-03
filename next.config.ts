import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages only serves files, so Next must generate a fully static site.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
