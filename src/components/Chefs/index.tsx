'use client'
import { motion } from 'framer-motion'
import { chefs } from '@/data/chefs'
import { ChefType } from '@/utils/types'

const Chefs = () => {
  return (
    <section className="py-20 bg-blue-50 text-center" id="chefs">
      <h2 className="text-4xl font-bold mb-12">Meet Our Chefs</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {chefs.map((chef: ChefType, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition"
          >
            <img
              src={chef.img}
              alt={chef.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{chef.name}</h3>
              <p className="text-blue-700">{chef.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Chefs
