'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '../animations/ParallaxSection';

export default function BlogHeader() {
  return (
    <ParallaxSection className="relative h-[40vh] overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-black/50 to-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-gradient">
            Blog & Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Exploring software engineering, technology trends, and development insights
          </p>
        </motion.div>
      </div>
    </ParallaxSection>
  );
}