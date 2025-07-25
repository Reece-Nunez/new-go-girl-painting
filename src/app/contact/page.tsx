'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-pink-100 py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-[#e28797] mb-4">Let’s Talk Paint</h1>
          <p className="max-w-xl mx-auto text-gray-700">
            Got a project in mind? Reach out using the form below. We’ll get back to you quickly!
          </p>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto py-16 px-4">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
          onSubmit={async (e) => {
            e.preventDefault()
            const form = e.currentTarget
            const data = {
              name: (form.elements.namedItem('name') as HTMLInputElement)?.value || '',
              email: (form.elements.namedItem('email') as HTMLInputElement)?.value || '',
              message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '',
            }

            const res = await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
            })

            if (res.ok) {
              alert('Thanks! Your message was sent ✨')
              form.reset()
            } else {
              alert('Something went wrong. Please try again later.')
            }
          }}

        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full border border-pink-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e28797]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full border border-pink-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e28797]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="w-full border border-pink-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e28797]"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="bg-[#e28797] text-white px-6 py-3 rounded-full shadow hover:bg-pink-600 transition cursor-pointer"
          >
            Send Message
          </motion.button>
        </motion.form>
      </section>

      {/* Optional Contact Info */}
      <section className="text-center text-sm text-gray-600 pb-20 px-4">
        <p className="mb-1">📧 missy@gogirlpainting.com</p>
        <p className="mb-1">📞 (555) 123-4567</p>
        <p>🕒 Mon–Sat: 8am – 6pm</p>
      </section>
    </div>
  )
}
