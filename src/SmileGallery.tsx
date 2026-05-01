import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function FloatingActions({ onBookClick }: { onBookClick: () => void }) {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={onBookClick}
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-40 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-xl border border-gray-100 shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block font-sans">
          Chat with us!
        </span>
      </motion.button>

      {/* Sticky Mobile Call Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 p-4 flex gap-4">
        <button 
          onClick={onBookClick}
          className="flex-1 btn-primary py-4"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </button>
        <a 
          href={`tel:${CLINIC_INFO.phone}`}
          className="flex-1 btn-secondary py-4"
        >
          <Phone className="w-5 h-5" />
          Call Clinic
        </a>
      </div>
    </>
  );
}
