'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Can my home be painted while I’m living in it?',
    answer:
      'Absolutely. We work around your schedule and ensure proper ventilation and cleanliness throughout the project.',
  },
  {
    question: 'Are your painters licensed and insured?',
    answer:
      'Yes — every painter on our team is fully licensed, insured, and trained to deliver top-quality results safely.',
  },
  {
    question: 'Do you help with color selection?',
    answer:
      'Definitely. We offer complimentary color consultations and can match existing tones or help you find the perfect new palette.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto text-gray-800">
      <h4 className="text-xl font-semibold mb-6 text-center">
        Frequently Asked Questions
      </h4>
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <li key={index} className="border border-gray-200 rounded-md">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-4 py-3 cursor-pointer font-medium text-[var(--pink-brand)] hover:bg-pink-50 transition"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-700">
                {faq.answer}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
