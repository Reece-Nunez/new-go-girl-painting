import { Metadata } from 'next';
import { businessInfo, seoKeywords } from "@/lib/seo";
import ServicesGrid from '@/components/ServicesGrid';

export const metadata: Metadata = {
  title: 'Professional Painting Services in Omaha & Bellevue | Go-Girl Painting',
  description: 'Complete painting services including residential, commercial, interior, exterior, cabinet painting & wood staining in Omaha, Bellevue, Papillion. Free estimates!',
  keywords: [
    ...seoKeywords.primary,
    'wood staining Omaha',
    'deck painting Nebraska', 
    'fence painting services',
    'complete painting services'
  ].join(', '),
  openGraph: {
    title: 'Professional Painting Services in Omaha & Bellevue | Go-Girl Painting',
    description: 'Complete painting services including residential, commercial, interior, exterior, cabinet painting & wood staining in Omaha, Bellevue, Papillion. Free estimates!',
    url: `${businessInfo.website}/services`,
    images: [{
      url: `${businessInfo.website}/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: 'Go-Girl Painting Services - Professional Painting in Omaha'
    }]
  }
};

export default function ServicesPage() {
  return <ServicesGrid />;
}