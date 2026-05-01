import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function Navbar({ onBookClick }: { onBookClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#experts' },
    { name: 'Testimonials', href: '#reviews' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Location', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-soft-teal rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-black text-gray-900 tracking-tight block">PEARL DENTAL</span>
            <span className="text-[10px] text-soft-teal font-bold uppercase tracking-[0.2em] -mt-1 block">Ranchi • Hinoo</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-sans">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-soft-teal transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button onClick={onBookClick} className="btn-primary py-2 px-6 text-sm">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-900 px-4 py-2 hover:bg-soft-teal/5 rounded-xl"
                >
                  {link.name}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-4 pt-4 px-4">
                <button
                  onClick={() => { onBookClick(); setIsMobileMenuOpen(false); }}
                  className="btn-primary w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </button>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="btn-secondary w-full"
                >
                  <Phone className="w-5 h-5" />
                  Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
