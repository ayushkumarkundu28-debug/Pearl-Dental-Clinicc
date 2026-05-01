import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onBookClick: (serviceTitle: string) => void;
}

export default function Services({ onBookClick }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-pearl-white">
      <div className="section-padding">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-soft-teal font-bold uppercase tracking-[0.2em] text-sm mb-2 block"
          >
            Clinical Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Specialized Dental Services
          </motion.h2>
          <p className="text-gray-500 font-sans max-w-2xl mx-auto">
            Comprehensive dental care using the latest technology and techniques to ensure your comfort and satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.Activity;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onBookClick(service.title)}
                className="group cursor-pointer"
              >
                <div className="glass-card p-8 h-full flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-white">
                  <div className="w-14 h-14 bg-soft-teal/10 rounded-2xl flex items-center justify-center text-soft-teal mb-6 group-hover:bg-soft-teal group-hover:text-white transition-all duration-500">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-soft-teal transition-colors">
                    {service.title}
                  </h3>
                  
                  <div className="text-xs font-bold text-soft-teal uppercase tracking-widest mb-4 font-sans bg-soft-teal/5 inline-block py-1 px-3 rounded-full self-start">
                    {service.benefit}
                  </div>
                  
                  <p className="text-gray-500 font-sans text-sm leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  <div id="pricing" className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Starting from</p>
                      <p className="text-lg font-black text-gray-900 font-sans">{service.price}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-soft-teal/20 flex items-center justify-center text-soft-teal group-hover:bg-soft-teal group-hover:text-white transition-all">
                      <Icons.ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400 italic font-sans">
            * Final cost depends on case complexity. All prices include initial consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
