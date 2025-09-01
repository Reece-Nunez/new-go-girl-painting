'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/F16C2009-DF6D-42AC-9E93-88EEFF681D47.JPG')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Centered Content */}
      <motion.header
        className="relative z-10 text-center px-6 max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-[var(--pink-brand)] drop-shadow-lg mb-4">
          Welcome To Go-Girl Painting
        </h1>
        <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight text-white drop-shadow-md mb-4">
          Professional Commercial and Residential Painting Services in the Greater Omaha Area
        </h2>
        <p className="text-md sm:text-lg mt-4 text-white drop-shadow-sm mb-6">
          Specializing in <strong>cabinet</strong>, <strong>interior</strong>, and <strong>exterior painting</strong> for homes and businesses across <em>Omaha</em>, <em>Bellevue</em>, <em>Papillion</em>, and <em>La Vista</em>.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-[var(--pink-brand)] hover:bg-pink-600 mt-6 text-white font-bold px-6 py-3 rounded-md text-sm shadow-lg transition"
          aria-label="Get a free painting estimate from Go-Girl Painting"
        >
          Get a Free Quote
        </Link>
      </motion.header>
    </section>
  )
}
