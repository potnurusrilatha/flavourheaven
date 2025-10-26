'use client'
import { motion } from 'framer-motion'
import { joinCommunity } from '@/data/joincommunity'

const JoinCommunity = () => {
  return (
    <section className="py-20 bg-blue-900 text-white text-center" id="join-community">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-4"
      >
        {joinCommunity.heading}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-blue-200 mb-8 max-w-2xl mx-auto"
      >
        {joinCommunity.description}
      </motion.p>
      <motion.a
        href={joinCommunity.buttonLink}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="inline-block px-10 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-full hover:bg-yellow-300 transition"
      >
        {joinCommunity.buttonText}
      </motion.a>
    </section>
  )
}

export default JoinCommunity
