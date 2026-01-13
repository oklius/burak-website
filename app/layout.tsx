import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://burakozturk.me"),
  title: "Burak Öztürk — Performance marketing & product growth",
  description:
    "Performance marketing & product growth specialist in Istanbul. Focused on Meta Ads, Google Ads, measurement, lifecycle, and creative testing.",
  openGraph: {
    title: "Burak Öztürk — Performance marketing & product growth",
    description:
      "Performance marketing & product growth specialist in Istanbul. Focused on Meta Ads, Google Ads, measurement, lifecycle, and creative testing.",
    url: "https://burakozturk.me",
    siteName: "Burak Öztürk",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Burak Öztürk — Performance marketing & product growth",
    description:
      "Performance marketing & product growth specialist in Istanbul. Focused on Meta Ads, Google Ads, measurement, lifecycle, and creative testing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${fraunces.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
