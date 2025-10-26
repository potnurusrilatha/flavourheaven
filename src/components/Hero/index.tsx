'use client'
import { motion } from 'framer-motion'
import LoginForm from '@/components/LogInForm'

const HeroSection = () => {
  return (
    <section 
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
 
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/50 to-blue-700/40"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 items-center">
       
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Welcome to <span className="text-yellow-300">FeastHub</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-lg">
            Discover, cook, and share world-class recipes crafted by passionate chefs.
          </p>
          <a
            href="#facilities"
            className="inline-block px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full hover:bg-yellow-300 transition"
          >
            Explore More
          </a>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto w-full"
        >
          <LoginForm />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
