import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageCircle, Phone, Instagram, Facebook, Twitter, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function Footer({ onBookClick }: { onBookClick: () => void }) {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="section-padding py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-soft-teal rounded-xl flex items-center justify-center text-white shadow-lg">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xl font-black text-gray-900 tracking-tight">PEARL DENTAL</span>
            </a>
            <p className="text-gray-500 font-sans text-sm leading-relaxed mb-8">
              Transforming smiles in Ranchi with premium dental care, advanced technology, and a patient-first approach.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-soft-teal hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-soft-teal hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-soft-teal hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-soft-teal">Quick Links</h4>
            <ul className="space-y-4 font-sans text-sm">
              <li><a href="#services" className="text-gray-500 hover:text-soft-teal">Dental Services</a></li>
              <li><a href="#experts" className="text-gray-500 hover:text-soft-teal">Meet Doctors</a></li>
              <li><a href="#reviews" className="text-gray-500 hover:text-soft-teal">Patient Reviews</a></li>
              <li><a href="#pricing" className="text-gray-500 hover:text-soft-teal">Pricing Preview</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-soft-teal">Book Consultation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-soft-teal">Our Services</h4>
            <ul className="space-y-4 font-sans text-sm">
              <li><a href="#services" className="text-gray-500 hover:text-soft-teal">Braces & Aligners</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-soft-teal">Root Canal Therapy</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-soft-teal">Dental Implants</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-soft-teal">Teeth Whitening</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-soft-teal">Pediatric Dentistry</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-soft-teal">Reach Us</h4>
            <div className="space-y-4 font-sans text-sm italic">
              <div className="flex gap-3 text-gray-500">
                <MapPin className="w-5 h-5 shrink-0 text-soft-teal" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex gap-3 text-gray-500 font-normal">
                <Phone className="w-5 h-5 shrink-0 text-soft-teal" />
                <span>{CLINIC_INFO.phone}</span>
              </div>
              <div className="flex gap-3 text-gray-500 font-normal">
                <MessageCircle className="w-5 h-5 shrink-0 text-soft-teal" />
                <span>WhatsApp: {CLINIC_INFO.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-soft-teal rounded-[2rem] p-12 text-center text-white mb-24 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Ready for Your Perfect Smile?</h2>
          <p className="text-white/80 font-sans mb-10 max-w-xl mx-auto relative z-10">
            Book your appointment today and experience the best dental care in Ranchi. Your transformation starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button onClick={onBookClick} className="bg-white text-soft-teal font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Book via WhatsApp
            </button>
            <a href={`tel:${CLINIC_INFO.phone}`} className="bg-soft-teal-dark font-bold py-4 px-10 rounded-full hover:bg-soft-teal-dark/80 transition-all flex items-center justify-center gap-2 border border-white/20">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-100 pt-12 text-xs text-gray-400 font-sans tracking-wide uppercase font-bold">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.name}. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-soft-teal">Privacy Policy</a>
            <a href="#" className="hover:text-soft-teal">Terms of Service</a>
          </div>
          <p>Designed with ❤️ for Pearl Ranchi</p>
        </div>
      </div>
    </footer>
  );
}
