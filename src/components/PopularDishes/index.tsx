'use client'
import { motion } from 'framer-motion'
import { dishes } from '@/data/dishes'


const PopularDishes = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10">Popular Dishes</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {dishes.map((dish, i) => (
          <motion.img
            key={i}
            src={dish.img}
            alt={dish.title || `Dish ${i + 1}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 object-cover h-80 w-full"
          />
        ))}
      </div>
    </section>
  )
}

export default PopularDishes
