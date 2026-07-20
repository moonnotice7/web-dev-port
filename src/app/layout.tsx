import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { personal, socialUrls } from "@/data/personal";
import { BackgroundLayers } from "@/components/layout/background";
import { Navigation } from "@/components/layout/navigation";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Footer } from "@/components/sections/contact";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(personal.portfolioUrl),
  title: {
    default: personal.pageTitle,
    template: `%s | ${personal.name}`,
  },
  description: personal.bio.meta,
  keywords: [...personal.keywords],
  authors: [{ name: personal.name, url: personal.portfolioUrl }],
  creator: personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: personal.portfolioUrl,
    title: personal.pageTitle,
    description: personal.bio.meta,
    siteName: personal.name,
    images: [
      {
        url: personal.ogImage,
        width: 1200,
        height: 630,
        alt: personal.pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: personal.pageTitle,
    description: personal.bio.meta,
    images: [personal.ogImage],
    creator: personal.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: personal.portfolioUrl,
  },
};

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    url: personal.portfolioUrl,
    email: personal.email,
    jobTitle: personal.title,
    description: personal.bio.meta,
    address: {
      "@type": "PostalAddress",
      addressLocality: personal.address.locality,
      addressRegion: personal.address.region,
      addressCountry: personal.address.country,
    },
    sameAs: socialUrls,
    knowsAbout: [...personal.knowsAbout],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
      </head>
      <body className="font-sans">
        <ThemeProvider>
          <BackgroundLayers />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
