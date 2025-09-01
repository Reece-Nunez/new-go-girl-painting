import { Metadata } from 'next';
import { businessInfo, seoKeywords } from "@/lib/seo";

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

'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const categories = [
  {
    name: 'Residential',
    image: 'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/80072154-0FDC-4FA2-B081-1BA1F0714A2D.JPG',
    link: '/gallery/residential',
    alt: 'Professional residential painting work in Omaha - interior and exterior home painting examples'
  },
  {
    name: 'Commercial',
    image: 'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/A3F54CE0-F0BB-4678-9781-CF2EFAAF757B.JPG',
    link: '/gallery/commercial',
    alt: 'Commercial painting projects in Nebraska - office and business painting by Go-Girl Painting'
  },
  {
    name: 'Cabinetry',
    image: 'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/cabinet5.jpg',
    link: '/gallery/cabinets',
    alt: 'Kitchen cabinet painting and refinishing before and after photos - cabinet transformation Omaha'
  },
];

export default function GalleryCategories() {
  const router = useRouter();

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-brand)]">Explore Our Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
          >
            <div className="w-full h-64 relative text-[var(--color-brand)]">
              <Image
                src={cat.image}
                alt={cat.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-[var(--color-brand)]">{cat.name}</h3>
              <button
                onClick={() => router.push(cat.link)}
                className="bg-[var(--pink-brand)] hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded transition cursor-pointer"
              >
                VIEW GALLERY
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
