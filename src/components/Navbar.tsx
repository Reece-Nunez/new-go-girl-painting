'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60 && !scrolled) {
        setScrolled(true)
      } else if (window.scrollY <= 40 && scrolled) {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <motion.header
      className={`sticky top-0 z-50 bg-pink-100 border-b shadow-md backdrop-blur-xs transition-all duration-300 ${
        scrolled ? 'py-0 bg-white/30' : 'py-4'
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className={`flex flex-col items-center justify-center transition-all duration-300 ${
          scrolled ? 'gap-0' : 'gap-3'
        }`}
      >
        {/* Logo */}
        <div
          className={`transition-transform duration-300 ease-in-out ${
            scrolled ? 'scale-75' : 'scale-100'
          }`}
        >
          <Link href="/" className="hover:opacity-90 transition">
            <Image
              src="/logo.svg"
              alt="Go-Girl Painting Logo"
              width={150}
              height={150}
              priority
              className="rounded-full object-contain"
            />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="transition-all duration-300">
          <ul
            className={`flex flex-wrap justify-center gap-6 font-medium transition-all duration-300 ${
              scrolled ? 'text-base' : 'text-lg'
            } text-[var(--color-brand)]`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-pink-900 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}
