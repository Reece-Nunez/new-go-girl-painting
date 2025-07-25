'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Residential Painting ▼',
    href: '/residential-painting',
    sublinks: [
      { name: 'Interior', href: '/residential-painting/interior' },
      { name: 'Exterior', href: '/residential-painting/exterior' },
      { name: 'Cabinets', href: '/residential-painting/cabinets' },
    ],
  },
  {
    name: 'Commercial Painting',
    href: '/commercial-painting',
  },

  {
    name: 'Galleries ▼',
    href: '/gallery',
    sublinks: [
      { name: 'Residential', href: '/gallery/residential' },
      { name: 'Commercial', href: '/gallery/commercial' },
      { name: 'Cabinets', href: '/gallery/cabinets' },
    ],
  },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`bg-white/90 border-b backdrop-blur-lg transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-4'
          }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Top Row */}
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={50} height={50} />
            <span className="text-xl font-bold text-[var(--pink-brand)]">
              Go-Girl Painting
            </span>
          </Link>

          <div className="hidden md:flex flex-col items-center">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Phone className="w-4 h-4 text-[var(--pink-brand)]" />
              (402) 303-2541
            </div>
            <span className="text-xs text-gray-500">Omaha, NE</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-block bg-[var(--pink-brand)] hover:bg-pink-600 text-white text-sm font-bold px-4 py-2 rounded-md shadow-md transition"
            >
              🧾 Request For Quote
            </Link>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>



        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white px-6 pb-4 pt-2 space-y-3 shadow-inner"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  {!link.sublinks ? (
                    <Link
                      href={link.href}
                      className="block w-full text-left font-medium text-gray-800 hover:text-pink-600"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="w-full text-left font-medium text-gray-800"
                        onClick={() =>
                          setHoveredDropdown((prev) =>
                            prev === link.name ? null : link.name
                          )
                        }
                      >
                        {link.name}
                      </button>
                      {hoveredDropdown === link.name && (
                        <ul className="ml-4 mt-1 space-y-1">
                          {link.sublinks.map((sublink) => (
                            <li key={sublink.name}>
                              <Link
                                href={sublink.href}
                                className="block text-sm text-gray-600 hover:text-pink-600"
                                onClick={() => {
                                  setMobileOpen(false)
                                  setHoveredDropdown(null)
                                }}
                              >
                                {sublink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              ))}

            </motion.ul>
          )}
        </AnimatePresence>
      </motion.header>
      {/* Desktop Nav */}
      <div className='sticky top-0 z-[999] bg-white/90 backdrop-blur border-t border-gray-200 py-4'>
        <nav className="hidden md:block border-gray-200 pt-2">
          <ul className="max-w-7xl mx-auto flex justify-center gap-6 px-4 sm:px-8 text-sm font-medium text-gray-700">
            {navLinks.map((link) => {
              const isOpen = hoveredDropdown === link.name
              const hasSublinks = !!link.sublinks?.length

              return (
                <li
                  key={link.name}
                  className="relative px-8"
                  onPointerEnter={() => hasSublinks && setHoveredDropdown(link.name)}
                  onPointerLeave={() => hasSublinks && setHoveredDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="hover:text-pink-600 transition whitespace-nowrap"
                  >
                    {link.name}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {hasSublinks && isOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 bg-white shadow-lg py-2 px-2 z-50 min-w-[180px] border border-gray-200"
                      >
                        {link.sublinks && link.sublinks.map((sublink) => (
                          <li key={sublink.name}>
                            <Link
                              href={sublink.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 transition"
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )
}
