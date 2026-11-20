import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];
  const routes = [
    "", "/about", "/services", "/services/web-development",
    "/services/custom-software-development", "/services/seo",
    "/services/technology-consulting", "/services/software-partnerships",
    "/projects", "/case-studies", "/case-studies/roiv-freight-coordination",
    "/case-studies/hostel-hub", "/case-studies/studypal",
    "/blog", "/blog/what-to-consider-before-building-a-business-website",
    "/blog/custom-software-or-off-the-shelf",
    "/blog/seo-foundations-for-growing-businesses",
    "/locations", "/contact",
  ];
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/services") ? 0.8 : 0.6,
  }));
}
