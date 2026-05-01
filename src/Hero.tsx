import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { REVIEWS, CLINIC_INFO } from '../constants';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="ml-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-bold font-sans">
                {CLINIC_INFO.rating} / 5
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">What Our Patients Say</h2>
            <p className="text-gray-500 mt-2 font-sans">Based on {CLINIC_INFO.reviewCount} Google Reviews</p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-soft-teal hover:text-white hover:border-soft-teal transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-soft-teal hover:text-white hover:border-soft-teal transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative h-[400px] md:h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <div className="glass-card p-10 md:p-16 h-full flex flex-col justify-center relative">
                <Quote className="absolute top-8 left-8 w-16 h-16 text-soft-teal/5 -z-10" />
                
                <p className="text-xl md:text-3xl font-serif italic text-gray-700 leading-relaxed mb-8">
                  "{REVIEWS[currentIndex].text}"
                </p>
                
                <div className="flex items-center gap-4 border-t border-gray-100 pt-8">
                  <div className="w-12 h-12 bg-soft-teal rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {REVIEWS[currentIndex].name[0]}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{REVIEWS[currentIndex].name}</h4>
                    <p className="text-sm text-gray-500 font-sans">Verified Patient</p>
                  </div>
                  
                  <div className="ml-auto hidden sm:flex items-center gap-1 text-yellow-500">
                    {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <a 
            href={CLINIC_INFO.googleReviewsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Star className="w-5 h-5 fill-current" />
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
