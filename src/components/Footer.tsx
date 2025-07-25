'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhone,
    faEnvelope,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebookF,
    faInstagram,
    faPinterestP,
} from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-[#fdf2f4] text-gray-800 border-t border-pink-200 pt-12 pb-6 px-6">
            <motion.div
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Brand */}
                <div>
                    <a
                        href="/"
                    >
                        <img src="/logo.svg" alt="Go-Girl Painting Logo" className="h-24 mx-auto mb-2" />
                    </a>
                    <p className="text-sm text-center text-gray-600">
                        Woman-owned, quality-focused, and proudly painting Nebraska one wall at a time.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-pink-700 font-semibold mb-2">Explore</h4>
                    <ul className="space-y-1 text-sm">
                        <li><Link href="/" className="hover:text-[#e28797]">Home</Link></li>
                        <li><Link href="/services" className="hover:text-[#e28797]">Services</Link></li>
                        <li><Link href="/about" className="hover:text-[#e28797]">About</Link></li>
                        <li><Link href="/contact" className="hover:text-[#e28797]">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-pink-700 font-semibold mb-2">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faPhone} className="text-[#e28797]" />
                            <a href="tel:+14023032541" className="hover:text-[#e28797]">(402) 303-2541</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faEnvelope} className="text-[#e28797]" />
                            <a href="mailto:go-girlpainting@outlook.com" className="hover:text-[#e28797]">go-girlpainting@outlook.com</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faLocationDot} className="text-[#e28797]" />
                            <span>Lincoln, NE</span>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 className="text-pink-700 font-semibold mb-2">Follow Us</h4>
                    <div className="flex gap-4 text-[#e28797] text-xl">
                        <a href="https://www.facebook.com/profile.php?id=100083751551269" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} className="hover:text-pink-600 transition" />
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Bottom Bar */}
            <motion.div
                className="mt-10 text-center text-sm text-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                &copy; {new Date().getFullYear()} Go-Girl Painting. All rights reserved.
            </motion.div>
        </footer>
    )
}
