'use client'

import { Metadata } from 'next';
import { businessInfo, seoKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: 'Professional Painting Services in Omaha & Bellevue | Go-Girl Painting',
  description: 'Complete painting services including residential, commercial, interior, exterior, cabinet painting & wood staining in Omaha, Bellevue, Papillion. Free estimates!',
  keywords: [
    ...seoKeywords.primary,
    'wood staining Omaha',
    'deck painting Nebraska', 
    'fence painting services',
    'complete painting services'
  ].join(', '),
  openGraph: {
    title: 'Professional Painting Services in Omaha & Bellevue | Go-Girl Painting',
    description: 'Complete painting services including residential, commercial, interior, exterior, cabinet painting & wood staining in Omaha, Bellevue, Papillion. Free estimates!',
    url: `${businessInfo.website}/services`,
    images: [{
      url: `${businessInfo.website}/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: 'Go-Girl Painting Services - Professional Painting in Omaha'
    }]
  }
};

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
import { useEffect } from 'react'

const services = [
  {
    name: 'Commercial',
    icon: faBuilding,
    description:
      'Professional painting for offices, retail spaces, and commercial properties with minimal disruption.',
  },
  {
    name: 'Residential',
    icon: faHome,
    description:
      'Transform your home inside and out with expert residential painting services.',
  },
  {
    name: 'Exterior',
    icon: faPaintRoller,
    description:
      'Durable and beautiful exterior painting with weatherproof finishes.',
  },
  {
    name: 'Interior',
    icon: faCouch,
    description:
      'Clean, precise interior painting tailored to your style and space.',
  },
  {
    name: 'Cabinets',
    icon: faSquare,
    description:
      'Cabinet painting and refinishing to modernize your kitchen or bath.',
  },
  {
    name: 'Wood Staining',
    icon: faTree,
    description:
      'Premium wood staining for doors, trim, stairs, and other wood accents.',
  },
  {
    name: 'Decks',
    icon: faBrush,
    description:
      'Deck staining and painting to refresh your outdoor living area.',
  },
  {
    name: 'Fences',
    icon: faBars,
    description:
      'Fence painting and staining for added curb appeal and protection.',
  },
]

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-pink-100 py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-extrabold text-[#e28797] mb-4">What We Do</h1>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg">
            High-quality painting and refinishing services that elevate your space inside and out.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center bg-pink-50 border border-pink-200 p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <motion.div
                whileHover={{ rotate: [0, 3, -3, 3, -2, 0], transition: { duration: 0.6 } }}
                className="mb-4 w-20 h-20 rounded-full bg-[#e28797]/10 border border-[#e28797]/20 flex items-center justify-center shadow-inner"
              >
                <FontAwesomeIcon icon={service.icon} className="text-[#e28797]" style={{ width: '2rem', height: '2rem' }}/>
              </motion.div>
              <h2 className="text-2xl font-bold text-pink-700 mb-2">{service.name}</h2>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
