import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { DOCTORS } from '../constants';

export default function Doctors() {
  return (
    <section id="experts" className="bg-white py-24">
      <div className="section-padding">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Meet Our Experts
          </motion.h2>
          <div className="w-20 h-1 bg-soft-teal mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
          {DOCTORS.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative z-10 glass-card p-6 md:p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div className="relative mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-soft-teal/10 shadow-lg group-hover:border-soft-teal/30 transition-colors">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                    />
                  </div>
                  <div className="absolute -bottom-2 right-4 bg-soft-teal text-white p-2 rounded-full shadow-lg">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-1">{doctor.name}</h3>
                <p className="text-soft-teal font-bold text-sm uppercase tracking-widest mb-3 font-sans">
                  {doctor.qualification} • {doctor.specialty}
                </p>
                <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-1.5 rounded-full mb-6 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-soft-teal" />
                  <span className="text-sm font-medium text-gray-600">{doctor.experience} Experience</span>
                </div>
                
                <p className="text-gray-500 font-sans leading-relaxed">
                  {doctor.bio}
                </p>

                <div className="mt-8 flex items-center gap-2 text-soft-teal font-bold text-sm group-hover:gap-4 transition-all">
                  Book Consultation <ChevronRight className="w-4 h-4" />
                </div>
              </div>
              
              {/* Background accent */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-soft-teal/5 -z-10 rounded-full blur-2xl group-hover:bg-soft-teal/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
