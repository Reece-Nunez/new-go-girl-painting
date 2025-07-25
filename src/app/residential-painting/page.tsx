
'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function ResidentialPaintingPage() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center text-white px-4 text-center" style={{ backgroundImage: 'url(https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential19.jpg)' }}>
                <div className="bg-black/50 absolute inset-0 z-0" />
                <div className="z-10 max-w-4xl space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-bold">
                        Residential Painting Services
                    </h1>
                    <p className="text-md sm:text-lg">
                        Your home deserves more than just a coat of paint — it deserves expert attention to detail.
                    </p>
                    <Button 
                    className="bg-[var(--pink-brand)] cursor-pointer hover:bg-pink-600 text-white font-bold px-6 py-3 mt-2 text-sm rounded-md"
                    onClick={() => window.location.href = '/contact'}
                    >
                        Get a Free Estimate
                    </Button>
                </div>
            </section>

            {/* Intro Section */}
            <section className="px-6 py-12 text-center text-gray-700 max-w-4xl mx-auto">
                <p className="text-md sm:text-lg mb-6">
                    At Go-Girl Painting, we bring life and personality into every room we touch. Whether it's updating your kitchen cabinets, refreshing your living room, or giving your exterior a bold new look — we deliver quality work with a woman’s touch and a perfectionist’s eye.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Proudly Serving the Omaha Metro Area</h2>
                <p className="text-sm sm:text-base">
                    Based in Omaha, we provide residential painting services throughout Papillion, La Vista, Bellevue, Council Bluffs, and nearby cities. If it's your home — it's our priority.
                </p>
            </section>

            {/* Service Cards Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-16 max-w-6xl mx-auto">
                {[
                    {
                        title: 'Interior Painting',
                        description:
                            'Transform your living spaces with clean lines, vibrant colors, and professional finishes.',
                        href: '/residential-painting/interior',
                        image: 'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/9F27DBF8-491E-41E5-9DE6-0DFDDE6F8194.JPG',
                    },
                    {
                        title: 'Exterior Painting',
                        description:
                            'Protect and beautify your home exterior with high-quality weather-resistant paint.',
                        href: '/residential-painting/exterior',
                        image: 'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential19.jpg',
                    },
                    {
                        title: 'Cabinet Painting',
                        description:
                            'Give your kitchen or bathroom cabinets a new life without the cost of a full remodel.',
                        href: '/residential-painting/cabinets',
                        image: 'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/cabinet5.jpg',
                    },
                ].map((card) => (
                    <div key={card.title} className="bg-white border rounded-lg shadow-md text-center overflow-hidden flex flex-col">
                        <div className="aspect-[4/3] w-full overflow-hidden">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6 flex flex-col justify-between flex-grow">
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-gray-600">{card.description}</p>
                            </div>
                            <div className='flex justify-center'>
                                <Button
                                    asChild
                                    className="bg-[var(--pink-brand)] hover:bg-pink-600 flex text-white font-semibold text-sm px-4 py-2 rounded-md w-fit"
                                >
                                    <Link href={card.href}>{card.title}</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Final CTA */}
            <section className="bg-pink-100 py-12 text-center">
                <h5 className="text-2xl font-bold mb-4">Ready to Revitalize Your Home?</h5>
                <Button 
                className="bg-[var(--pink-brand)] cursor-pointer hover:bg-pink-600 text-white font-bold px-6 py-3 rounded-md text-sm"
                onClick={() => window.location.href = '/contact'}
                >
                    Contact Us Today
                </Button>
            </section>
        </main>
    )
}
