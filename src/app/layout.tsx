import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { defaultSeo, businessInfo } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import Analytics from "@/components/Analytics";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.website),
  title: {
    default: defaultSeo.title,
    template: '%s | Go-Girl Painting'
  },
  description: defaultSeo.description,
  keywords: defaultSeo.keywords,
  authors: [{ name: businessInfo.name }],
  creator: businessInfo.name,
  publisher: businessInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: businessInfo.website,
    siteName: businessInfo.name,
    title: defaultSeo.openGraph.title,
    description: defaultSeo.openGraph.description,
    images: defaultSeo.openGraph.images,
  },
  twitter: defaultSeo.twitter,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-site-verification-code',
  },
  alternates: {
    canonical: businessInfo.website,
  },
};

export const seo = {
  ...defaultSeo,
  title: "Nebraska Professional Painting Services | Go-Girl Painting",
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${businessInfo.website}/#business`,
      name: businessInfo.name,
      description: businessInfo.description,
      url: businessInfo.website,
      telephone: businessInfo.phone,
      email: businessInfo.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: businessInfo.address.street,
        addressLocality: businessInfo.address.city,
        addressRegion: businessInfo.address.state,
        postalCode: businessInfo.address.zipCode,
        addressCountry: 'US'
      },
      areaServed: businessInfo.serviceAreas.map(area => ({
        '@type': 'City',
        name: `${area}, Nebraska`
      })),
      openingHours: [
        'Mo-Fr 08:00-18:00',
        'Sa 09:00-16:00'
      ],
      paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Financing Available'],
      priceRange: '$$',
      sameAs: Object.values(businessInfo.socialMedia),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Painting Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Residential Interior Painting',
              description: 'Professional interior painting services for homes'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Residential Exterior Painting',
              description: 'Expert exterior painting and home protection'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cabinet Painting & Refinishing',
              description: 'Kitchen and bathroom cabinet painting and refinishing'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Commercial Painting',
              description: 'Professional commercial and office painting services'
            }
          }
        ]
      }
    },
    {
      '@type': 'WebSite',
      '@id': `${businessInfo.website}/#website`,
      url: businessInfo.website,
      name: businessInfo.name,
      description: businessInfo.description,
      publisher: {
        '@id': `${businessInfo.website}/#business`
      },
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${businessInfo.website}/search?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={businessInfo.website} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="msapplication-TileColor" content="#ec4899" />
        <meta name="robots" content={defaultSeo.robots} />
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <LocalBusinessSchema />
        <Navbar />
        {children}
        <FaqSection />
        <Footer />
      </body>
    </html>
  );
}
