'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface GoldSparkleProps {
  count: number
  mousePosition: { x: number; y: number }
}

export function GoldSparkle({ count, mousePosition }: GoldSparkleProps) {
  const [sparkles, setSparkles] = useState<Array<{ x: number; y: number; size: number }>>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    const newSparkles = Array.from({ length: count }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 4 + 1,
    }))
    setSparkles(newSparkles)
  }, [count, dimensions])

  return (
    <>
      {sparkles.map((sparkle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-yellow-400"
          style={{
            width: sparkle.size,
            height: sparkle.size,
            left: sparkle.x,
            top: sparkle.y,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.div
        className="absolute w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(250,204,21,0.2) 0%, rgba(250,204,21,0) 70%)",
          left: mousePosition.x - 32,
          top: mousePosition.y - 32,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  )
}

