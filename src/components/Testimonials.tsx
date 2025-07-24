'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Tiffany-Joel Tilton',
    text: 'Just hired Missy at Go-Girl Paintings LLC for my home (interior paint). She did a fantastic job!! Seriously can’t say enough good about it. She was priced right, fast, and the work was perfection!! My home looks amazing!!  Thank you Missy!! 😍',
    rating: 5,
  },
  {
    name: 'Kay Sommerfeld',
    text: 'Missy is an experienced Professional painter.  She dedicates herself to the job at hand. My kitchen was built in 1935 and I have a NEW kitchen.  I highly recommend Missy!',
    rating: 5,
  },
  {
    name: 'Devin Marks',
    text: 'We were introduced to Missy through mutual friends for a large job that we needed to complete. Missy came and gave a fair assessment and bid. Missy not only completed the entire project on time she shared her design eye with us to make sure that we used the correct color combinations. The job had some very difficult aspects to it but she delivered on all her promises, and it was a pleasure to work with her. I would recommend Missy to anyone that needs a painting project completed.',
    rating: 5,
  },
  {
    name: 'Kasey Ann',
    text: 'I’d highly recommend Go-Girl Painting, Missy was very nice to work with when it came time to paint our homes exterior. She provided excellent communication from the very start, and worked to fit us in at the last minute on Father’s Day! She was so kind to my curious 7 year old who wanted to watch her work and even got to do some painting. Very reasonable and upfront pricing and quality work. We love the way our home looks!',
    rating: 5,
  },
  {
    name: 'Diana Greenblatt-Seay',
    text: 'We hired Go-Girl Paintings to paint our whole basement, including a bathroom, laundry room, bedroom, family room and stairway, including ceilings. The work was exceptional, quick and very reasonably priced. Communication and coordination was also a great experience. We highly recommend using Go-Girl Paintings!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-pink-50 py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#e28797] mb-4">What Our Clients Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Real reviews from real people. We’re proud of the reputation we’ve built.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white border border-pink-200 rounded-xl p-6 shadow-md text-left flex flex-col justify-between h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
              <div>
                <p className="text-sm text-gray-800 mb-4 leading-relaxed">“{review.text}”</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-[#e28797]">{review.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
