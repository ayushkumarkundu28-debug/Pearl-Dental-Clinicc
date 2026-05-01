import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, Star, Users, Award } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background blobs for premium feel */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-soft-teal/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-soft-teal/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soft-teal/10 text-soft-teal text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-soft-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-soft-teal"></span>
              </span>
              Best Dental Clinic in Ranchi
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Advanced Care for a <br />
              <span className="text-soft-teal italic font-light serif">Perfect Smile</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-lg font-sans leading-relaxed">
              Expert dental solutions in Ranchi with a focus on pain-free procedures and long-lasting dental health.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-2">
              <button onClick={onBookClick} className="btn-primary text-lg px-10">
                <MessageCircle className="w-6 h-6" />
                Book via WhatsApp
              </button>
              <a href={`tel:${CLINIC_INFO.phone}`} className="btn-secondary text-lg px-10">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-soft-teal mb-1">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-xl font-bold font-sans">{CLINIC_INFO.rating}</span>
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">User Rating</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-soft-teal mb-1">
                  <Award className="w-5 h-5" />
                  <span className="text-xl font-bold font-sans">{CLINIC_INFO.experience}</span>
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Years Exp.</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-soft-teal mb-1">
                  <Users className="w-5 h-5" />
                  <span className="text-xl font-bold font-sans">{CLINIC_INFO.reviewCount}</span>
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Happy Patients</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000&h=1200"
                alt="Patient smiling at Pearl Dental Clinic"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Glass decoration cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 z-20 glass-card p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-green-600 fill-current" />
              </div>
              <div>
                <p className="text-sm font-bold">5-Star Care</p>
                <p className="text-xs text-gray-500">Google Verified</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
