import { Metadata } from 'next';
import { businessInfo } from "@/lib/seo";
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Go-Girl Painting | Free Estimates Omaha NE | (402) 303-2541',
  description: 'Get your free painting estimate today! Contact Go-Girl Painting for professional residential & commercial painting in Omaha, Bellevue, Papillion. Call (402) 303-2541.',
  keywords: 'contact painter Omaha, free painting estimate, painting quote Nebraska, go girl painting contact, professional painter Omaha phone',
  openGraph: {
    title: 'Contact Go-Girl Painting | Free Estimates Omaha NE | (402) 303-2541',
    description: 'Get your free painting estimate today! Contact Go-Girl Painting for professional residential & commercial painting in Omaha, Bellevue, Papillion.',
    url: `${businessInfo.website}/contact`,
    images: [{
      url: `${businessInfo.website}/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: 'Contact Go-Girl Painting - Free Estimates in Omaha'
    }]
  }
};

export default function ContactPage() {
  return <ContactForm />;
}