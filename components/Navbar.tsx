'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#achievements', label: 'Achievements' },
  { href: '/blog', label: 'Blog' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 py-[1rem] right-0 z-50 bg-white">
      <div className="fixed bg-white mx-auto px-4 py-4 flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/">
          <img 
            src="/logo.png" 
            alt="EmpowerU Logo" 
            className="h-14 md:h-14 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-primary transition-colors text-[18px]">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <Button variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className="hover:text-primary transition-colors"
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

