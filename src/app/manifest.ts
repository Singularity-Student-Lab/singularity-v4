import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Singularity — Student Research & Innovation Lab",
    short_name: "Singularity",
    description: "Premier student research, engineering, and deep technology lab at SRM University-AP across 7 research disciplines.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      {
        src: "/images/singularity_logo.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/images/singularity_logo.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}
