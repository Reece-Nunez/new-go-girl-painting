'use client'

import { motion } from 'framer-motion'
import ValueCards from '@/components/ValueCards'

export default function AboutPage() {

    return (
        <div className="bg-white text-gray-800">
            {/* Hero / Intro */}
            <section className="bg-pink-100 py-20 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold text-[#e28797] mb-4">Meet Go-Girl Painting</h1>
                    <p className="max-w-2xl mx-auto text-gray-700">
                        Founded by Missy, Go-Girl Painting is more than a business — it's a promise of quality, trust, and a personal touch.
                    </p>
                </motion.div>
            </section>

            {/* Story w/ Portrait */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src="/missy.jpg"
                            alt="Missy, founder of Go-Girl Painting"
                            className="rounded-full w-64 h-64 object-cover border-4 border-[#e28797] shadow-md"
                        />
                    </div>

                    {/* Text */}
                    <div>
                        <h2 className="text-2xl font-semibold text-pink-700 mb-4">Hi, I’m Missy 👋</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            I started Go-Girl Painting with a paintbrush in one hand and confidence in the other. After years of working in the
                            industry, I knew there was room for a company that delivered high-quality work, honest communication, and a
                            friendly face homeowners could trust.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Whether you're refreshing a single room or repainting your whole house, I bring the same attention to detail and
                            pride in every job. I treat your space like my own — clean, efficient, and full of heart.
                        </p>
                    </div>
                </motion.div>
            </section>
            {/* Values Section */}
            <ValueCards />
            {/* CTA */}
            <section className="text-center py-16 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Ready to bring your project to life?
                    </h2>
                    <a
                        href="/contact"
                        className="inline-block bg-[#e28797] text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
                    >
                        Contact Missy
                    </a>
                </motion.div>
            </section>
        </div>
    )
}
