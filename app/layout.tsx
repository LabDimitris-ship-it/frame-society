import type { Metadata } from "next";
import "./globals.css";
import MobileNav from "@/components/mobile/MobileNav";
export const metadata: Metadata = {
  metadataBase: new URL("https://frame-society.vercel.app"),

  title: {
    default: "Frame Society",
    template: "%s | Frame Society",
  },

  applicationName: "Frame Society",

  description:
    "Discover premium coffee shops, restaurants, beach bars, beauty salons and unique experiences across Greece.",

  keywords: [
    "Frame Society",
    "Loutraki",
    "Xylokastro",
    "Corinth",
    "Coffee",
    "Restaurants",
    "Beach Bars",
    "Beauty",
    "Hair Salon",
    "Nightlife",
    "Events",
    "Travel Guide",
    "City Guide",
    "Greece",
  ],

  authors: [
    {
      name: "Frame Society",
    },
  ],

  creator: "Frame Society",
  publisher: "Frame Society",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://frame-society.vercel.app",
  },

  openGraph: {
    title: "Frame Society",
    description:
      "Discover premium places, restaurants, cafés, beauty salons and unforgettable experiences.",

    url: "https://frame-society.vercel.app",
    siteName: "Frame Society",

    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Frame Society",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Frame Society",
    description:
      "Discover premium places around Greece.",
    images: ["/images/hero.png"],
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  category: "travel",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <MobileNav />
      </body>
    </html>
  );
}
