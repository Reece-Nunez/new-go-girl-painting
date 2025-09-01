import { Metadata } from 'next';
import { businessInfo } from "@/lib/seo";
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Missy & Go-Girl Painting | Professional Painters Omaha NE',
  description: 'Meet Missy, founder of Go-Girl Painting. Professional, reliable painting services in Omaha with a personal touch. Learn about our values and commitment to quality.',
  keywords: 'painting contractor Omaha, about go girl painting, Missy painter Omaha, professional painting company, trusted painter Nebraska',
  openGraph: {
    title: 'About Missy & Go-Girl Painting | Professional Painters Omaha NE',
    description: 'Meet Missy, founder of Go-Girl Painting. Professional, reliable painting services in Omaha with a personal touch. Learn about our values and commitment to quality.',
    url: `${businessInfo.website}/about`,
    images: [{
      url: `${businessInfo.website}/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: 'About Go-Girl Painting - Meet Missy, Professional Painter in Omaha'
    }]
  }
};

export default function AboutPage() {
  return <AboutPageClient />;
}