'use client'

import { Button } from '@/components/ui/Button'

export default function CommercialPaintingPage() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center text-white px-4 text-center" style={{ backgroundImage: 'url(https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial19.jpg)' }}>
                <div className="bg-black/50 absolute inset-0 z-0" />
                <div className="z-10 max-w-4xl space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-bold">
                        Commercial Painting Contractor In Omaha Nebraska
                    </h1>
                    <p className="text-md sm:text-lg">
                        Don’t settle for “Okay” when it comes to your commercial painting project. Call us today to get your FREE quote on top-quality painting.
                    </p>
                    <Button className="bg-[var(--pink-brand)] hover:bg-pink-600 text-white font-bold px-6 py-3 mt-2 text-sm rounded-md cursor-pointer">
                        Schedule an Estimate
                    </Button>
                </div>
            </section>

            {/* Description Section */}
            <section className="px-6 py-12 text-center text-gray-700 max-w-4xl mx-auto">
                <p className="text-md sm:text-lg">
                    A commercial property must always portray its best qualities. If the walls are dingy or the paint is flaking off in several places, it’s not exactly going to create a great first impression. Office managers, commercial landlords, and property owners are all aware that maintaining the entire building can be a challenge, but the right help can make a huge difference.
                </p>
            </section>

            {/* Mid-CTA Section */}
            <section className="bg-gray-100 border-y border-dashed border-gray-300 px-6 py-16 text-center">
                <h2 className="text-2xl text-gray-600 font-semibold mb-4">
                    Professional Commercial Painting Contractor
                </h2>
                <p className="max-w-3xl mx-auto text-gray-700 mb-6">
                    Our experienced commercial painting team provides fast, affordable, and detail-oriented service for businesses in Omaha and the surrounding area. Whether it’s a full interior repaint or just an exterior refresh, we help your space make the right impression.
                </p>
                <Button 
                className="bg-[var(--pink-brand)] hover:bg-pink-600 text-white px-6 py-3 font-bold text-sm rounded-md cursor-pointer"
                onClick={() => window.location.href = '/contact'}
                >
                    Consult With Us Today
                </Button>
            </section>

            {/* Services Icons Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 justify-center gap-10 px-6 py-16 max-w-5xl mx-auto">
                <ul className="space-y-4 text-gray-800">
                    <li>✅ Custom Color Matching</li>
                    <li>✅ Cabinetry and Woodwork</li>
                    <li>✅ Exterior Painting</li>
                    <li>✅ Power Washing</li>
                </ul>
                <ul className="space-y-4 text-gray-800">
                    <li>✅ High-Durability Coatings</li>
                    <li>✅ Interior Painting</li>
                    <li>✅ Commercial Equipment Protection</li>
                    <li>✅ Minimal Downtime Planning</li>
                </ul>
            </section>

            {/* Service Area CTA */}
            <section className="bg-[var(--pink-brand)] text-white text-center py-16 px-6">
                <h3 className="text-2xl font-semibold mb-2">Commercial Painting Service Areas</h3>
                <p className="max-w-3xl mx-auto mb-6">
                    We proudly serve businesses across Omaha and surrounding areas, including Bellevue, Papillion, La Vista, Ralston, and Council Bluffs
                </p>
                <Button
                    className="bg-pink-400 hover:bg-pink-700 px-6 py-3 font-bold text-sm rounded-md cursor-pointer"
                    onClick={() => window.location.href = '/contact'}
                >
                    Get Started
                </Button>
            </section>

            {/* Final CTA */}
            <section className="bg-pink-100 py-12 text-center">
                <h5 className="text-2xl font-bold mb-4">Schedule a Free Estimate</h5>
                <Button
                    className="bg-[var(--pink-brand)] hover:bg-pink-600 text-white font-bold px-6 py-3 rounded-md text-sm"
                    onClick={() => window.location.href = '/contact'}
                >
                    Contact Us
                </Button>
            </section>
        </main>
    )
}