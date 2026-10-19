import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-abhi-dun.vercel.app"),
  title: "Abhinav Kumar — Product Manager, FinTech & AI",
  description:
    "Associate PM at BUSY InfoTech. 0→1 product on a 4.6 lakh+ user platform, 40% fewer drop-offs, AI features across FinTech and HealthTech.",
  keywords: [
    "Product Manager",
    "Associate Product Manager",
    "Abhinav Kumar",
    "FinTech",
    "HealthTech",
    "AI Product",
  ],
  authors: [{ name: "Abhinav Kumar" }],
  openGraph: {
    title: "Abhinav Kumar — Product Manager, FinTech & AI",
    description:
      "Associate PM building AI-powered FinTech at BUSY InfoTech. Find the friction, ship the fix.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
