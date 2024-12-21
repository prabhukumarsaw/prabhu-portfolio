'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

export default function AboutMe() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (bannerRef.current) {
        const rect = bannerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }
    const banner = bannerRef.current
    if (banner) {
      banner.addEventListener('mousemove', updateMousePosition)
      return () => banner.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div 
        ref={bannerRef}
        className="relative h-screen overflow-hidden"
      >

        <main className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-8">
              <motion.h1
                className="text-5xl md:text-7xl font-bold"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                John Doe
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Software Virtuoso
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Crafting bespoke digital experiences with unparalleled expertise and innovation
              </motion.p>
              <motion.div
                className="flex space-x-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.a
                  href="#portfolio"
                  className="px-8 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Portfolio
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-8 py-4 border border-yellow-500 text-yellow-500 font-semibold rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Consultation
                </motion.a>
              </motion.div>
            </div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="relative w-full aspect-[3/4] max-w-lg mx-auto">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="John Doe"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-700/20 rounded-2xl" />
                <motion.div
                  className="absolute inset-0 border-2 border-yellow-500 rounded-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}

