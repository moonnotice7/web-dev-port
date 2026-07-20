import type { MetadataRoute } from "next";
import { personal } from "@/data/personal";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: personal.portfolioUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
