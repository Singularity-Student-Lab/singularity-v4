// Content-hash versioning for images in public/images, so replacing a file changes its URL
// and no browser or image-optimiser cache keeps serving the old picture.
// Server-only: uses the filesystem. Shared by next.config.ts (to allow the URLs) and the pages.
import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const PUBLIC_DIR = path.join(process.cwd(), "public");

export function imageHash(src: string): string {
  const file = path.join(PUBLIC_DIR, src);
  return createHash("sha256").update(readFileSync(file)).digest("hex").slice(0, 12);
}

/** "/images/home/hero.jpg" -> "/images/home/hero.jpg?v=3f2a9c1b7e0d" */
export function versioned(src: string): string {
  return `${src}?v=${imageHash(src)}`;
}

/** Every image under public/images as a site path, e.g. "/images/labs/agastya.jpg". */
export function allImages(dir = "images"): string[] {
  return readdirSync(path.join(PUBLIC_DIR, dir), { withFileTypes: true }).flatMap((entry) => {
    const rel = `${dir}/${entry.name}`;
    if (entry.isDirectory()) return allImages(rel);
    return /\.(jpe?g|png|webp|avif)$/i.test(entry.name) ? [`/${rel}`] : [];
  });
}
