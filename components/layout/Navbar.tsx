'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/about', label: 'About Me', icon: 'user' },
  { href: '/projects', label: 'Projects', icon: 'briefcase' },
  { href: '/blog', label: 'Blog', icon: 'pen-tool' },
  { href: '/contact', label: 'Contact', icon: 'mail' },
]

export default function AdvancedNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300 bg-transparent'
      )}
    >
      <div className="max-w-full  px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Quick Links */}
            <div className="items-center gap-8 hidden md:block">
            <div className="grid grid-cols-1 justify-items-start text-center">
              <span className="text-gray-400 text-xs">Quick links</span>
              <div className="flex items-start gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-200 text-xs font-semibold hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            </div>
          </div>

            {/* Centered Name */}
            {/* <div className="flex items-center">
              <motion.div
                className="grid grid-cols-1 justify-items-center text-center rounded-full border border-white px-8 py-2 text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-gray-400 dark:text-gray-500 text-xs">Hello, My name is</span>
                <span className="text-gray-200 dark:text-gray-300 text-sm font-semibold">Prabhu Kumar Saw</span>
              </motion.div>
            </div> */}

            {/* Contact Info */}
            <div className="flex flex-col items-end">
              <span className="text-gray-400 dark:text-gray-500 text-xs font-semibold">Available for new projects</span>
              <span className="text-gray-200 dark:text-gray-300 text-sm">Prabhu Kumar Saw</span>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between w-full">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
            <span className="text-gray-200 dark:text-gray-300 text-sm font-semibold">Prabhu Kumar Saw</span>
            <motion.button
              onClick={toggleDarkMode}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-700 hover:text-white'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
