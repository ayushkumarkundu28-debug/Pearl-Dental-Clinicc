import React from 'react';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600&h=600', title: 'Modern Equipment' },
  { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600&h=600', title: 'Hygienic Environment' },
  { url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=600&h=600', title: 'Smile Transformation' },
  { url: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=600&h=600', title: 'Expert Care' },
  { url: 'https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=600&h=600', title: 'Comfortable Waiting' },
  { url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600&h=600', title: 'Digital X-Rays' }
];

export default function SmileGallery() {
  return (
    <section className="py-24 bg-pearl-white">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Smile Gallery</h2>
            <p className="text-gray-500 font-sans max-w-xl">Take a look inside our modern facility at Ranchi and some of our patient transformations.</p>
          </div>
          <a href="#" className="flex items-center gap-3 text-soft-teal font-bold hover:gap-5 transition-all">
            <Instagram className="w-6 h-6" />
            Follow us @PearlDentalRanchi
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl md:rounded-3xl shadow-md"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-soft-teal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4">
                <span className="text-white font-bold text-center pointer-events-none translate-y-4 group-hover:translate-y-0 transition-transform">
                  {img.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
