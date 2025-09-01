export const businessInfo = {
  name: 'Go-Girl Painting LLC',
  description: 'Professional commercial and residential painting services in Omaha, Nebraska. Expert interior, exterior, and cabinet painting with 100% satisfaction guarantee.',
  phone: '(402) 555-0199',
  email: 'info@gogirlpainting.com',
  address: {
    street: '123 Main Street',
    city: 'Omaha',
    state: 'Nebraska',
    zipCode: '68102',
    full: '123 Main Street, Omaha, NE 68102'
  },
  serviceAreas: ['Omaha', 'Bellevue', 'Papillion', 'La Vista', 'Gretna', 'Elkhorn', 'Millard'],
  website: 'https://www.gogirlpainting.com',
  socialMedia: {
    facebook: 'https://facebook.com/gogirlpainting',
    instagram: 'https://instagram.com/gogirlpainting',
    linkedin: 'https://linkedin.com/company/go-girl-painting'
  }
};

export const seoKeywords = {
  primary: [
    'painting contractor Omaha',
    'residential painting Nebraska',
    'commercial painting Omaha',
    'interior painting services',
    'exterior painting Bellevue',
    'cabinet painting Papillion'
  ],
  secondary: [
    'house painters near me',
    'professional painting services',
    'painting company Omaha NE',
    'home improvement painting',
    'business painting contractor',
    'quality painting services'
  ],
  local: [
    'painters Omaha Nebraska',
    'painting services La Vista',
    'Bellevue painting contractor',
    'Papillion house painters',
    'Gretna painting company',
    'Elkhorn residential painters'
  ]
};

export const defaultSeo = {
  title: 'Professional Painting Services in Omaha, NE | Go-Girl Painting',
  description: 'Expert residential & commercial painting in Omaha, Bellevue, Papillion & La Vista. Interior, exterior & cabinet painting with 100% satisfaction guarantee. Free estimates!',
  keywords: [...seoKeywords.primary, ...seoKeywords.secondary, ...seoKeywords.local].join(', '),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: businessInfo.website,
    site_name: businessInfo.name,
    title: 'Professional Painting Services in Omaha, NE | Go-Girl Painting',
    description: 'Expert residential & commercial painting in Omaha, Bellevue, Papillion & La Vista. Interior, exterior & cabinet painting with 100% satisfaction guarantee.',
    images: [
      {
        url: `${businessInfo.website}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Go-Girl Painting - Professional Painting Services in Omaha, Nebraska',
        type: 'image/jpeg'
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Painting Services in Omaha, NE | Go-Girl Painting',
    description: 'Expert residential & commercial painting in Omaha, Bellevue, Papillion & La Vista. Interior, exterior & cabinet painting with 100% satisfaction guarantee.',
    images: [`${businessInfo.website}/og-image.jpg`]
  },
  canonical: businessInfo.website,
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
};
