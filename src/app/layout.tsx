import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { defaultSeo } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nebraska Professional Painting Services | Go-Girl Painting",
  description: "Professional painting services in Nebraska",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  openGraph: {
    title: "Nebraska Professional Painting Services | Go-Girl Painting",
    description: "Professional painting services in Nebraska",
    url: "https://www.gogirlpainting.com",
    images: [
      {
        url: "https://www.gogirlpainting.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Go-Girl Painting - Professional Painting Services",
      },
    ],
  },
};

export const seo = {
  ...defaultSeo,
  title: "Nebraska Professional Painting Services | Go-Girl Painting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <link rel="icon" href="/favicon.ico" />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          {children}
        </body>
        <Footer />
    </html>
  );
}
