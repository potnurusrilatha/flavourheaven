'use client'
import { motion } from 'framer-motion'
import { testimonials } from '@/data/testnomial'
import { TestimonialType } from '@/utils/types'

const Testimonial = () => {
  return (
    <section className="py-20 bg-white text-center" id="testimonials">
      <h2 className="text-4xl font-bold mb-10">What Our Users Say</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {testimonials.map((t: TestimonialType, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
            />
            <p className="text-blue-800 italic mb-4">“{t.quote}”</p>
            <p className="font-semibold text-blue-900">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial
