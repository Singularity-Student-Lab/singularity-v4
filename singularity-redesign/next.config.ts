import type { NextConfig } from "next";
import { allImages, imageHash } from "./src/lib/image-version";

const dev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  // This app lives inside the old site's repo; keep Turbopack from using the parent as root.
  turbopack: { root: __dirname },
  images: {
    remotePatterns: [new URL("https://res.cloudinary.com/**")],
    // Allow each local image only with its current content hash (see src/lib/image-version.ts).
    // In dev the hash changes as files are swapped, so any version is accepted there.
    localPatterns: dev
      ? [{ pathname: "/images/**" }]
      : allImages().map((src) => ({ pathname: src, search: `?v=${imageHash(src)}` })),
  },
};

export default nextConfig;
