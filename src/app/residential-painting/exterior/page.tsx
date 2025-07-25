'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Paintbrush, Home, DoorOpen, Building2, Fence, RollerCoaster } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function ExteriorPaintingPage() {
    return (
        <div className="text-gray-800">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
                <Image
                    src="https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/F16C2009-DF6D-42AC-9E93-88EEFF681D47.JPG"
                    alt="Exterior painting hero"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center flex-col space-y-4 text-white text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-6">
                        Exterior Painting Done Right
                    </h1>
                    <p className="text-md sm:text-lg">
                        From modern updates to timeless finishes, we help transform your indoor spaces with care and precision.
                    </p>
                    <Button 
                    className="bg-[var(--pink-brand)] hover:bg-pink-600 text-white font-bold px-6 py-3 mt-2 text-sm rounded-md cursor-pointer"
                    onClick={() => window.location.href = '/contact'}
                    >
                        Book a Free Consultation
                    </Button>
                </div>
            </section>

            {/* Description Section */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center text-[var(--pink-brand)] mb-6">
                    Make Your Home Stand Out
                </h2>
                <p className="text-lg text-center mb-4">
                    A great exterior paint job does more than improve curb appeal — it protects your home from
                    Nebraska's weather and adds serious value. From single-family homes to fences and garages,
                    we make exteriors shine.
                </p>
                <p className="text-lg text-center">
                    Our team uses high-performance paints, weather-resistant coatings, and expert prep work to
                    make your exterior look amazing — and stay that way.
                </p>
            </section>

            {/* Services Section */}
            <section className="bg-white/5 backdrop-blur-lg border border-[var(--pink-brand)]/30 rounded-2xl p-8 shadow-xl max-w-5xl mx-auto mb-12">
                <h3 className="text-2xl font-semibold text-center mb-6 text-gray-900">
                    Exterior Painting Services We Offer
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
                    <Service icon={<Home className="text-[var(--pink-brand)] w-6 h-6" />} title="Full House Painting" />
                    <Service icon={<DoorOpen className="text-[var(--pink-brand)] w-6 h-6" />} title="Front Doors & Trim" />
                    <Service icon={<Building2 className="text-[var(--pink-brand)] w-6 h-6" />} title="Garage Painting" />
                    <Service icon={<Fence className="text-[var(--pink-brand)] w-6 h-6" />} title="Fences & Decks" />
                    <Service icon={<Paintbrush className="text-[var(--pink-brand)] w-6 h-6" />} title="Touch-ups & Repairs" />
                    <Service icon={<RollerCoaster className="text-[var(--pink-brand)] w-6 h-6" />} title="Siding & Fascia Boards" />
                </div>
            </section>

            {/* CTA */}
            <div className="text-center mb-24">
                <Link
                    href="/gallery/residential"
                    className="inline-block bg-[var(--pink-brand)] text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-600 transition"
                >
                    View Our Residential Gallery
                </Link>
            </div>
        </div>
    )
}

function Service({ icon, title }: { icon: React.ReactNode; title: string }) {
    return (
        <div className="flex items-center space-x-3">
            <div>{icon}</div>
            <span className="text-base">{title}</span>
        </div>
    )
}
