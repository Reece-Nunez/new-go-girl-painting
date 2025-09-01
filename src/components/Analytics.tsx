'use client'

import Script from 'next/script'

export default function Analytics() {
  const GA_TRACKING_ID = 'GA_TRACKING_ID' // Replace with actual Google Analytics ID

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
      
      {/* Google Business Profile Schema */}
      <Script
        id="google-business-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Go-Girl Painting LLC",
            "url": "https://www.gogirlpainting.com",
            "logo": "https://www.gogirlpainting.com/logo.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "(402) 303-2541",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": "en"
            }
          }
        `}
      </Script>
    </>
  )
}