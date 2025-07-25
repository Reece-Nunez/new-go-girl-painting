'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function CabinetPaintingPage() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section
                className="relative w-full h-[50vh] flex items-center justify-center bg-cover bg-center text-white px-4 text-center"
                style={{
                    backgroundImage:
                        'url(https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/cabinet5.jpg)', // make sure this image exists
                }}
            >
                <div className="bg-black/50 absolute inset-0 z-0" />
                <div className="z-10 max-w-3xl space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-bold">Cabinet Painting with a Custom Look</h1>
                    <p className="text-md sm:text-lg">
                        Give your kitchen, bathroom, or built-ins a high-end finish — without the cost of replacement.
                    </p>
                    <Button 
                    className="bg-[var(--pink-brand)] hover:bg-pink-600 text-white font-bold px-6 py-3 mt-2 text-sm rounded-md cursor-pointer"
                    onClick={() => window.location.href = '/contact'}
                    >
                        Book a Free Consultation
                    </Button>
                </div>
            </section>

            {/* Intro Text */}
            <section className="px-6 py-12 text-center text-gray-700 max-w-4xl mx-auto">
                <p className="text-md sm:text-lg mb-6">
                    Cabinet painting is one of the most cost-effective ways to upgrade your kitchen or bath.
                    At Go-Girl Painting, we prep, prime, and refinish your cabinets with care — using professional tools and commercial-grade coatings for a long-lasting, smooth finish.
                </p>
                <p className="text-md sm:text-lg">
                    Whether you’re going for modern whites, bold navy, or a classic wood-tone feel, we help you bring your style to life with color and craftsmanship that lasts.
                </p>
            </section>

            {/* Services List */}
            <section className="bg-gray-50 border-t border-dashed border-gray-200 py-16 px-6">
                <h2 className="text-2xl font-semibold text-[var(--pink-brand)] text-center mb-4">
                    Our Cabinet Painting Services
                </h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
                    We handle every step of the cabinet painting process with precision:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-sm text-gray-800">
                    <div>
                        <span className="font-medium text-[var(--pink-brand)]">Kitchen Cabinet Painting</span>
                        <p>Complete color transformations or refinishing for worn cabinets in any kitchen size.</p>
                    </div>
                    <div>
                        <span className="font-medium text-[var(--pink-brand)]">Bathroom Vanity Painting</span>
                        <p>Moisture-resistant finishes that hold up in humid spaces.</p>
                    </div>
                    <div>
                        <span className="font-medium text-[var(--pink-brand)]">Built-in Shelving</span>
                        <p>Make your built-ins pop or blend with wall colors for a cohesive look.</p>
                    </div>
                    <div>
                        <span className="font-medium text-[var(--pink-brand)]">Color Matching</span>
                        <p>We match existing cabinetry or help you choose new modern shades.</p>
                    </div>
                    <div>
                        <span className="font-medium text-[var(--pink-brand)]">Hardware Installation</span>
                        <p>We can remove, replace, or reinstall your hardware after painting.</p>
                    </div>
                    <div>
                        <span className="font-medium text-[var(--pink-brand)]">Protective Clear Coats</span>
                        <p>Add shine and durability with a final clear coat for long-lasting results.</p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Button asChild className="bg-[var(--pink-brand)] hover:bg-pink-600 text-white px-6 py-3 font-bold text-sm rounded-md">
                        <Link href="/gallery/residential">View Our Cabinet Projects</Link>
                    </Button>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-pink-100 py-12 text-center">
                <h5 className="text-2xl font-bold mb-4">Let’s Make Your Cabinets Look Brand New</h5>
                <Button
                    className="bg-[var(--pink-brand)] hover:bg-pink-600 text-white font-bold px-6 py-3 rounded-md text-sm cursor-pointer"
                    onClick={() => window.location.href = '/contact'}
                >
                    Schedule Your Free Quote
                </Button>
            </section>
        </main>
    )
}
