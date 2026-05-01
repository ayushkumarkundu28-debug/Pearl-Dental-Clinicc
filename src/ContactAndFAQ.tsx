import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, HeartPulse, Clock, Wallet, Phone, MessageCircle, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function WhyChooseUs({ onBookClick }: { onBookClick: () => void }) {
  const benefits = [
    { icon: ShieldCheck, title: "18+ Years Experience", desc: "Decades of clinical expertise you can trust." },
    { icon: Zap, title: "Advanced Equipment", desc: "Modern technology for precise diagnostics." },
    { icon: HeartPulse, title: "Pain-Free Procedures", desc: "Focused on your comfort with gentle methods." },
    { icon: Clock, title: "Zero Wait Time", desc: "Respecting your time with punctual schedules." },
    { icon: AlertCircle, title: "Fully Sterilized", desc: "International hygiene and safety standards." },
    { icon: Wallet, title: "Affordable Treatment", desc: "Premium care that fits your budget." }
  ];

  return (
    <>
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
            <div className="w-20 h-1 bg-soft-teal mx-auto rounded-full mb-6" />
            <p className="text-gray-500 font-sans max-w-2xl mx-auto">
              We combine years of experience with advanced technology to provide the best dental care in Ranchi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl hover:bg-soft-teal/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-soft-teal/10 flex items-center justify-center text-soft-teal group-hover:bg-soft-teal group-hover:text-white transition-all duration-300 shrink-0">
                  <b.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{b.title}</h3>
                  <p className="text-gray-500 text-sm font-sans leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-12 bg-white px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-red-50 border border-red-100 rounded-[2.5rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-6 text-center lg:text-left flex-col lg:flex-row">
              <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-xl animate-pulse shrink-0">
                <AlertCircle className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-2">Dental Emergency?</h2>
                <p className="text-red-700/80 font-sans max-w-md font-medium">
                  We're here to help! Immediate care for acute pain, swelling, or sudden dental injury.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <a href={`tel:${CLINIC_INFO.phone}`} className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-red-200 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <button onClick={onBookClick} className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-50 font-bold py-4 px-10 rounded-full transition-all flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
