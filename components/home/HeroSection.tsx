'use client';

import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import FadeIn from '../animations/FadeIn';
import GlowEffect from '../animations/GlowEffect';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);
  const textY = useTransform(scrollY, [0, 300], [0, 50]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    mouseX.set(mousePosition.x);
    mouseY.set(mousePosition.y);
  }, [mousePosition, mouseX, mouseY]);

  const spotlightSize = 200;
  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      ${spotlightSize}px circle at ${mouseX}px ${mouseY}px,
      rgba(255, 255, 255, 0.1),
      transparent 80%
    )
  `;

  return (
    <section
      ref={containerRef}
      className="relative h-[100vh] overflow-hidden bg-black"
    >
      {/* Hero Content */}
      <motion.div 
        className="absolute z-20 bottom-12 left-12 max-w-2xl"
        style={{ y: textY }}
      >
        <motion.div
          className="absolute inset-0 z-10"
          style={{ background: spotlightBackground }}
        />
        <FadeIn delay={0.2}>
          <GlowEffect>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white"
              whileHover={{ scale: 1.02 }}
            >
              Freelance Professional
              <br />
              & Software Developer
            </motion.h1>
          </GlowEffect>
        </FadeIn>
      </motion.div>

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          style={{ opacity }}
        />
        <motion.video
          style={{ y }}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[200vh] object-cover"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </motion.video>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              x: [0, Math.random() * 400 - 200],
              y: [0, Math.random() * 400 - 200],
              scale: [1, Math.random() + 0.5, 1],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div
            className="w-1.5 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [1, 0.5, 1], y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

