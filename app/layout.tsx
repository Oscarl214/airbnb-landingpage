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
  title: "Dallas Airbnb Cleaning Checklist & Pricing Guide | Free Download",
  description:
    "Get a free room-by-room Airbnb cleaning checklist and instant pricing guide for Dallas properties. Know exactly what turnover cleaning should cost.",
  keywords: [
    "Airbnb cleaning Dallas",
    "Airbnb turnover checklist",
    "short-term rental cleaning",
    "Dallas Airbnb cleaning cost",
    "Airbnb cleaning pricing",
  ],
  openGraph: {
    title: "Free Dallas Airbnb Cleaning Checklist & Pricing Guide",
    description:
      "Step-by-step cleaning checklist + instant pricing for Dallas Airbnb properties.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
