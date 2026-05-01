import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, Mail, ChevronDown, Map } from 'lucide-react';
import { FAQS, CLINIC_INFO } from '../constants';

export default function ContactAndFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="contact" className="py-24 bg-pearl-white">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FAQ Section */}
          <div>
            <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between group transition-colors hover:bg-gray-50"
                  >
                    <span className="font-bold text-gray-800 font-sans">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-soft-teal transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-500 font-sans leading-relaxed text-sm">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col h-full">
            <h2 className="text-4xl font-bold mb-8">Visit Us</h2>
            <div className="glass-card p-8 flex-grow flex flex-col">
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-soft-teal/10 rounded-xl flex items-center justify-center text-soft-teal shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Location</h4>
                    <p className="text-gray-500 font-sans text-sm">{CLINIC_INFO.address}</p>
                    <a 
                      href={CLINIC_INFO.googleMapsLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-soft-teal text-sm font-bold mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      <Map className="w-4 h-4" />
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-soft-teal/10 rounded-xl flex items-center justify-center text-soft-teal shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Working Hours</h4>
                    <p className="text-gray-500 font-sans text-sm">{CLINIC_INFO.hours}</p>
                    <p className="text-xs text-red-500 font-bold mt-1 font-sans italic">Closed on Sundays</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-soft-teal/10 rounded-xl flex items-center justify-center text-soft-teal shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Contact Details</h4>
                    <p className="text-gray-500 font-sans text-sm">Phone: {CLINIC_INFO.phone}</p>
                    <p className="text-gray-500 font-sans text-sm">WhatsApp: {CLINIC_INFO.phone}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder/Embed */}
              <div className="mt-auto relative rounded-2xl overflow-hidden h-48 bg-gray-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800&h=400" 
                  alt="Map Placeholder" 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a 
                    href={CLINIC_INFO.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Open Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
