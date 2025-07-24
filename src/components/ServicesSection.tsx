'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faHome,
  faPaintRoller,
  faCouch,
  faSquare,
  faTree,
  faBrush,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    name: 'Commercial',
    icon: faBuilding,
    description:
      'Professional painting services tailored for offices, retail spaces, and commercial properties.',
  },
  {
    name: 'Residential',
    icon: faHome,
    description:
      'Transform your home with expert interior and exterior painting services.',
  },
  {
    name: 'Exterior',
    icon: faPaintRoller,
    description:
      'High-quality exterior painting to enhance the beauty and durability of your property.',
  },
  {
    name: 'Interior',
    icon: faCouch,
    description:
      'High-quality interior painting tailored to your preferences.',
  },
  {
    name: 'Cabinets',
    icon: faSquare,
    description: 'Cabinet refinishing and painting for a modern touch.',
  },
  {
    name: 'Wood Staining',
    icon: faTree,
    description:
      'Premium wood staining to protect and enhance your wood surfaces.',
  },
  {
    name: 'Decks',
    icon: faBrush,
    description: 'We paint and stain decks for your outdoor space.',
  },
  {
    name: 'Fences',
    icon: faBars,
    description:
      'Professional painting and staining for all types of fences.',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-pink-50">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-[#e28797] mb-4 tracking-tight">
          Services We Offer
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-base sm:text-lg">
          From interiors to exteriors and everything in between — Go-Girl Painting has you covered.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/60 backdrop-blur-md border border-pink-200 rounded-xl p-6 shadow-lg hover:shadow-pink-200 transition-all duration-300 group"
              whileHover={{ scale: 1.04 }}
            >
              <div className="flex flex-col items-start justify-between h-full">
                <motion.div
                  className="bg-[#e28797]/10 p-4 rounded-full mb-4 border border-[#e28797]/20"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <FontAwesomeIcon icon={service.icon} className="text-[#e28797] w-6 h-6" />
                </motion.div>

                <h3 className="text-lg font-semibold text-pink-700 mb-2">
                  {service.name}
                </h3>

                <p className="text-sm text-gray-700 mb-6">{service.description}</p>

                <Link
                  href={`/services#${service.name.toLowerCase()}`}
                  className="mt-auto inline-block bg-[#e28797] text-white text-sm font-medium px-4 py-2 rounded-full transition duration-300 hover:bg-pink-600 shadow-md"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
