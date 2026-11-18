import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: {
    default: "AVENOR Digital | Technology That Moves Business Forward",
    template: "%s | AVENOR Digital",
  },
  description:
    "AVENOR Digital helps businesses move forward through website development, custom software, SEO and strategic technology solutions in Nigeria.",
  applicationName: "AVENOR Digital",
  keywords: [
    "AVENOR Digital",
    "website development Nigeria",
    "custom software development",
    "SEO services Nigeria",
    "technology consulting",
    "web design agency",
  ],
  openGraph: {
    type: "website",
    siteName: "AVENOR Digital",
    title: "AVENOR Digital | Technology That Moves Business Forward",
    description:
      "Digital solutions, custom software and strategic technology services for ambitious businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVENOR Digital",
    description:
      "Technology That Moves Business Forward. Websites, software, SEO and technology consulting.",
  },
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}