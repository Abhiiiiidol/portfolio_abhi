import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhinav Kumar — Product Manager",
  description:
    "Product Manager with 5+ years shipping across FinTech, Healthcare, E-Commerce, and Logistics. I pair deep user empathy with sharp product strategy to turn ambiguity into roadmaps that ship.",
  keywords: [
    "Product Manager",
    "Abhinav Kumar",
    "FinTech",
    "Healthcare",
    "E-Commerce",
    "AI Product",
  ],
  authors: [{ name: "Abhinav Kumar" }],
  openGraph: {
    title: "Abhinav Kumar — Product Manager",
    description:
      "Product Manager with 5+ years shipping across FinTech, Healthcare, E-Commerce, and Logistics.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
