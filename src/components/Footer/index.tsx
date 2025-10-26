'use client'

import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-blue-900 border-t border-blue-700 shadow-inner mt-10 relative text-white">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <h2 className="text-xl font-bold">🍴 FeastHub</h2>

        <section className="text-center md:text-left space-y-2">
          <h3 className="text-xl font-medium">Get in Touch</h3>
          <address className="not-italic space-y-1 text-sm">
            📍 123 Food Street, Flavor Town <br />
            📞{' '}
            <a
              href="tel:+46736543210"
              className="hover:text-yellow-400 transition font-medium"
            >
              +46 73 654 3210
            </a>{' '}
            <br />
            ✉️{' '}
            <a
              href="mailto:contact@feasthub.com"
              className="hover:text-yellow-400 transition font-medium"
            >
              contact@feasthub.com
            </a>
          </address>
        </section>

        <nav aria-label="Footer Navigation" className="flex gap-6 text-sm">
          <Link
            href="/"
            className="hover:text-yellow-400 transition font-medium"
          >
            Home
          </Link>
          <Link
            href="/profile"
            className="hover:text-yellow-400 transition font-medium"
          >
            Profile
          </Link>
          <Link
            href="/categories"
            className="hover:text-yellow-400 transition font-medium"
          >
            Category
          </Link>
        </nav>

        <p className="text-sm mt-4 md:mt-0 font-medium">
          © {new Date().getFullYear()} FeastHub. All rights reserved.
        </p>
      </div>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-yellow-400 text-blue-900 shadow-lg hover:bg-yellow-300 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  )
}

export default Footer
