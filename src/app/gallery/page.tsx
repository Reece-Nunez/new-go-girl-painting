'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const categories = [
  {
    name: 'Residential',
    image: 'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/80072154-0FDC-4FA2-B081-1BA1F0714A2D.JPG',
    link: '/gallery/residential',
  },
  {
    name: 'Commercial',
    image: 'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/A3F54CE0-F0BB-4678-9781-CF2EFAAF757B.JPG',
    link: '/gallery/commercial',
  },
  {
    name: 'Cabinetry',
    image: 'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/cabinet5.jpg',
    link: '/gallery/cabinets',
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
                alt={`${cat.name} Preview`}
                fill
                className="object-cover"
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
