'use client'

import { motion } from 'framer-motion'
import { Variants } from 'framer-motion'

const values = [
    {
        title: 'Quality Over Quantity',
        description: 'Every brushstroke matters. I never rush, and I never cut corners.',
    },
    {
        title: 'Integrity First',
        description: 'I show up when I say I will, do what I say I’ll do, and communicate every step of the way.',
    },
    {
        title: 'Support Local',
        description: 'As a woman-owned business based in Nebraska, I believe in lifting up other local families and businesses too.',
    },
]


const variants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number): any => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], // 👈 Fix here
        },
    }),
}

export default function ValuesSection() {
    return (
        <section className="bg-pink-50 py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-[#e28797] mb-12">Our Values</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, i) => (
                        <motion.div
                            key={value.title}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            variants={variants}
                            className="bg-white border border-pink-200 rounded-xl shadow-md p-6 text-left hover:shadow-lg transition"
                        >
                            <h3 className="text-pink-700 font-bold text-lg mb-2">{value.title}</h3>
                            <p className="text-gray-700 leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
