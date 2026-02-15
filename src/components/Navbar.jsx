import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#equipment', label: 'Equipment' },
  { href: '#services', label: 'Services' },
  { href: '#sales', label: 'Sales & Supplies' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <nav className="container-narrow section-padding py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-lg font-bold text-primary tracking-tight">
            CTS
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-secondary hover:text-primary font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-accent text-white font-bold rounded-lg hover:bg-red-600 transition-all hover:scale-105 shadow-md"
              >
                Get a Free Quote
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden flex flex-col gap-4 pt-4 pb-2"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-secondary hover:text-primary font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="inline-block px-5 py-2.5 bg-accent text-white font-bold rounded-lg shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Free Quote
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
