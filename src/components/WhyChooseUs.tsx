'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Paintbrush2, Sparkles, Smile } from 'lucide-react'

const items = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#e28797]" />,
    title: 'Licensed & Insured',
    description: 'We’re fully licensed, insured, and committed to safety on every job site.',
  },
  {
    icon: <Paintbrush2 className="w-8 h-8 text-[#e28797]" />,
    title: 'Flawless Finish',
    description: 'Crisp lines. Even coats. No mess. Every time.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#e28797]" />,
    title: 'Premium Materials',
    description: 'We only use trusted paints and products for lasting beauty.',
  },
  {
    icon: <Smile className="w-8 h-8 text-[#e28797]" />,
    title: '100% Satisfaction',
    description: 'If you’re not happy, we’re not done. Guaranteed.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-white">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#e28797] mb-4">Why Choose Go-Girl?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          You deserve more than just a coat of paint. You deserve craftsmanship, care, and a team that truly gets it.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-pink-50 border border-pink-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
              whileHover={{ scale: 1.03 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-pink-700 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
