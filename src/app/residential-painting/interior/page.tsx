'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function InteriorPaintingPage() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative w-full h-[50vh] flex items-center justify-center bg-cover bg-center text-white px-4 text-center" style={{ backgroundImage: 'url(https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential21.jpg)' }}>
                <div className="bg-black/50 absolute inset-0 z-0" />
                <div className="z-10 max-w-3xl space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-bold">
                        Interior Painting Done Right
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

            {/* Intro Text */}
            <section className="px-6 py-12 text-center text-gray-700 max-w-4xl mx-auto">
                <p className="text-md sm:text-lg mb-6">
                    Whether you're refreshing a bedroom, reimagining your living room, or prepping your home to sell, Go-Girl Painting provides professional interior painting with heart. Our detail-driven approach, color consultation, and smooth finishes ensure your vision comes to life — and lasts.
                </p>
                <p className="text-md sm:text-lg">
                    With years of experience painting homes in Omaha and the surrounding areas, we’re known for our clean edges, minimal disruption, and results that make you love your space again.
                </p>
            </section>

            {/* Services List */}
            <section className="bg-gray-50 border-t border-dashed border-gray-200 py-16 px-6">
                <h2 className="text-2xl font-semibold text-[var(--pink-brand)] text-center mb-4">Interior Painting Services</h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
                    We handle every part of the interior painting process — from prep to cleanup — with care. Here’s what we offer:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-sm text-gray-800">
                    <div>
                        <span className="font-medium text-[var(--pink-brand)]">Kitchen Painting</span>
                        <p>Refresh walls and ceilings or coordinate with cabinet painting for a full makeover.</p>
                    </div>
                    <div>
                        <span className="font-medium text-[var(--pink-brand)]">Bathroom Painting</span>
                        <p>We use moisture-resistant paints to ensure long-lasting beauty in humid areas.</p>
                    </div>
                    <div>
                        <span className="font-medium text-[var(--pink-brand)]">Cabinet Painting</span>
                        <p>Transform your cabinets with a durable finish and premium feel without replacing them.</p>
                    </div>
                    <div>
                        <span className="font-medium text-[var(--pink-brand)]">Accent Walls</span>
                        <p>Make a bold statement or bring subtle contrast with professionally done feature walls.</p>
                    </div>
                    <div>
                        <span className="font-medium text-[var(--pink-brand)]">Ceiling Painting</span>
                        <p>Brighten rooms and smooth imperfections for a clean, open feel.</p>
                    </div>
                    <div>
                        <span className="font-medium text-[var(--pink-brand)]">Trim & Baseboard Painting</span>
                        <p>Crisp, clean trim work that enhances any wall color or room style.</p>
                    </div>
                    <div>
                        <span className="font-medium text-[var(--pink-brand)]">Wall Repair & Painting</span>
                        <p>We patch, sand, and prep so the final result is smooth and seamless.</p>
                    </div>
                    <div>
                        <span className="font-medium text-[var(--pink-brand)]">Wallpaper Removal</span>
                        <p>We handle the tedious work of removing old wallpaper and prepping for paint.</p>
                    </div>
                    <div>
                        <span className="font-medium text-[var(--pink-brand)]">Color Consultations</span>
                        <p>Need help choosing the perfect shade? We help you decide with confidence.</p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Button asChild className="bg-[var(--pink-brand)] hover:bg-pink-600 text-white px-6 py-3 font-bold text-sm rounded-md">
                        <Link href="/gallery/residential">See Our Work</Link>
                    </Button>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-pink-100 py-12 text-center">
                <h5 className="text-2xl font-bold mb-4">Let’s Bring Your Vision to Life</h5>
                <Button
                    className="bg-[var(--pink-brand)] hover:bg-pink-600 text-white font-bold px-6 py-3 rounded-md text-sm"
                    onClick={() => window.location.href = '/contact'}

                >
                    Schedule Your Free Quote
                </Button>
            </section>
        </main>
    )
}
