'use client'

import { businessInfo } from "@/lib/seo";
import Script from "next/script";

export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${businessInfo.website}/#localbusiness`,
    "name": businessInfo.name,
    "image": [
      `${businessInfo.website}/logo.svg`,
      `${businessInfo.website}/missy.jpg`,
      `${businessInfo.website}/residential.jpg`,
      `${businessInfo.website}/commercial.jpg`
    ],
    "description": businessInfo.description,
    "url": businessInfo.website,
    "telephone": businessInfo.phone,
    "email": businessInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.address.street,
      "addressLocality": businessInfo.address.city,
      "addressRegion": businessInfo.address.state,
      "postalCode": businessInfo.address.zipCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.2565,
      "longitude": -95.9345
    },
    "areaServed": businessInfo.serviceAreas.map(area => ({
      "@type": "City",
      "name": area,
      "containedInPlace": {
        "@type": "State",
        "name": "Nebraska"
      }
    })),
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-16:00"
    ],
    "paymentAccepted": ["Cash", "Check", "Credit Card", "Financing Available"],
    "priceRange": "$$",
    "sameAs": Object.values(businessInfo.socialMedia),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Go-Girl Painting did an amazing job on our kitchen cabinets! Professional, clean, and the results exceeded our expectations."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Mike Thompson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent exterior painting service. Missy and her team were punctual, professional, and delivered quality work on time."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional Painting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Interior Painting",
            "description": "Professional interior house painting for all rooms including living rooms, bedrooms, kitchens, and bathrooms",
            "provider": {
              "@id": `${businessInfo.website}/#localbusiness`
            },
            "areaServed": businessInfo.serviceAreas
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Exterior Painting",
            "description": "Complete exterior house painting including siding, trim, doors, and shutters with weather-resistant paint",
            "provider": {
              "@id": `${businessInfo.website}/#localbusiness`
            },
            "areaServed": businessInfo.serviceAreas
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cabinet Painting & Refinishing",
            "description": "Kitchen and bathroom cabinet painting and refinishing services to transform your space",
            "provider": {
              "@id": `${businessInfo.website}/#localbusiness`
            },
            "areaServed": businessInfo.serviceAreas
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Painting",
            "description": "Professional commercial painting for offices, retail spaces, and business properties",
            "provider": {
              "@id": `${businessInfo.website}/#localbusiness`
            },
            "areaServed": businessInfo.serviceAreas
          }
        }
      ]
    }
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  );
}