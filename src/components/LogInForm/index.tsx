'use client'
import { useState } from 'react'
import { UserArray } from '@/data/users'
import { useUserContext } from '@/utils/contexts'
import { UserContextType } from '@/utils/types'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Testimonial from '../Testnomial'
import JoinCommunity from '../JoinCommunity'
import Facilities from '../Facilities'
import ChefsSection from '../Chefs' 
import PopularDishes from '../PopularDishes'

const LoginForm = () => {
  const [userInput, setUserInput] = useState<string>('')
  const [userNotFound, setUserNotFound] = useState<boolean>(true)
  const { setUser } = useUserContext() as UserContextType

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault()
    const loggedInUser = UserArray.find(user => user.name === userInput)

    if (!loggedInUser) setUserNotFound(false)
    else {
      setUserNotFound(true)
      setUser(loggedInUser)
    }
  }

  return (
    <div className="relative">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
   
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/50 to-blue-700/40"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              Welcome to <span className="text-yellow-300">FeastHub</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg text-blue-100">
              Log in and start exploring world-class recipes from passionate chefs.
            </p>
          </motion.div>

         
          <motion.form
            onSubmit={handleClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto w-full"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Log In</h2>
            <div className="mb-5">
              <label htmlFor="username" className="block text-blue-900 font-medium mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-xl transition-colors duration-300"
            >
              Log In
            </button>
            {!userNotFound && (
              <p className="mt-4 text-red-600 text-center font-medium">User not found</p>
            )}
          </motion.form>
        </div>
      </section>
     
      <PopularDishes />
      <Facilities />
      <ChefsSection />
      <Testimonial />
      <JoinCommunity />
    </div>
  )
}

export default LoginForm
