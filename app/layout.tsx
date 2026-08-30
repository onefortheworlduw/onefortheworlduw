import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "sans-serif",
  ],
  adjustFontFallback: true,
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
  preload: true,
  fallback: ["Impact", "Arial Black", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://onefortheworlduw.github.io"),
  title: "One For The World UW-Madison",
  description:
    "Join One for the World at UW-Madison! We educate students on effective global aid and the 1% pledge while building a community of future leaders.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "One For The World UW-Madison",
    description:
      "Join One for the World at UW-Madison! We educate students on effective global aid and the 1% pledge while building a community of future leaders.",
    url: "https://onefortheworlduw.github.io/",
    siteName: "One For The World UW-Madison",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "One for the World UW-Madison",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "One For The World UW-Madison",
    description:
      "Join One for the World at UW-Madison! We educate students on effective global aid and the 1% pledge while building a community of future leaders.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-black antialiased selection:bg-[#E2FF3E] selection:text-black">
        {children}
      </body>
    </html>
  );
}
