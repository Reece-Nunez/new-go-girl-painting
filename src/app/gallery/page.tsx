import { Metadata } from 'next';
import { businessInfo, seoKeywords } from "@/lib/seo";
import GalleryCategories from '@/components/GalleryCategories';

export const metadata: Metadata = {
  title: 'Painting Gallery | Before & After Photos Omaha NE | Go-Girl Painting',
  description: 'View our professional painting work! Browse residential, commercial & cabinet painting projects in Omaha, Bellevue & Papillion. See quality transformations.',
  keywords: [
    ...seoKeywords.primary,
    'painting gallery Omaha',
    'before after painting photos',
    'residential painting examples',
    'commercial painting portfolio'
  ].join(', '),
  openGraph: {
    title: 'Painting Gallery | Before & After Photos Omaha NE | Go-Girl Painting',
    description: 'View our professional painting work! Browse residential, commercial & cabinet painting projects in Omaha, Bellevue & Papillion. See quality transformations.',
    url: `${businessInfo.website}/gallery`,
    images: [{
      url: `${businessInfo.website}/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: 'Go-Girl Painting Gallery - Professional Painting Work in Omaha'
    }]
  }
};

export default function GalleryPage() {
  return <GalleryCategories />;
}