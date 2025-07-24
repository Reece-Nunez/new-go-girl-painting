'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <div className="text-center mb-12">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-[#e28797]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to Go-Girl Painting!
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
        {/* Commercial Painting */}
        <motion.div
          className="relative rounded-xl overflow-hidden group shadow-lg"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/commercial.jpg"
            alt="Commercial Painting"
            width={800}
            height={600}
            className="w-full h-[300px] sm:h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 backdrop-blur-md bg-white/30 text-black px-6 py-2 rounded-md shadow">
              Commercial Painting Services
            </h2>
            <Link
              href="/contact"
              className="mt-2 inline-block bg-[#e28797] text-white hover:bg-[#ffb6c1] hover:scale-105 transition-all duration-300 px-6 py-2 rounded-full font-bold shadow-xl focus:ring-4 focus:ring-pink-300 cursor-pointer"
            >
              Get A Quote
            </Link>

          </div>
        </motion.div>

        {/* Residential Painting */}
        <motion.div
          className="relative rounded-xl overflow-hidden group shadow-lg"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src="/residential.jpg"
            alt="Residential Painting"
            width={800}
            height={600}
            className="w-full h-[300px] sm:h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 backdrop-blur-md bg-white/30 text-black px-6 py-2 rounded-md shadow">
              Residential Painting Services
            </h2>
            <Link
              href="/contact"
              className="mt-2 inline-block bg-[#e28797] text-white hover:bg-[#ffb6c1] hover:scale-105 transition-all duration-300 px-6 py-2 rounded-full font-bold shadow-xl focus:ring-4 focus:ring-pink-300 cursor-pointer"
            >
              Get A Quote
            </Link>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
