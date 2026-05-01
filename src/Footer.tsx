import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';
import { SERVICES, CLINIC_INFO } from '../constants';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export default function AppointmentModal({ isOpen, onClose, selectedService }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    age: '',
    problem: '',
    service: selectedService || '',
    timeSlot: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, number, age, problem, service, timeSlot } = formData;
    
    const message = `Hi ${CLINIC_INFO.name}, I am ${name}.
Age: ${age}
Mobile: ${number}
Service: ${service || 'General Consultation'}
Problem: ${problem}
Preferred Time: ${timeSlot}

I want to book an appointment.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodedMessage}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full relative z-10 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            <h2 className="text-2xl font-bold mb-2">Book Appointment</h2>
            <p className="text-gray-500 mb-6 font-sans">Fill in your details and we'll connect via WhatsApp.</p>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-teal focus:ring-2 focus:ring-soft-teal/20 outline-none transition-all"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="Ph number"
                    value={formData.number}
                    onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-teal focus:ring-2 focus:ring-soft-teal/20 outline-none transition-all"
                  />
                </div>
                <div className="w-24">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                  <input
                    required
                    type="number"
                    placeholder="Age"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-teal focus:ring-2 focus:ring-soft-teal/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-teal focus:ring-2 focus:ring-soft-teal/20 outline-none transition-all appearance-none bg-white"
                >
                  <option value="">Select Service</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Describe Problem</label>
                <textarea
                  rows={2}
                  placeholder="Tell us about the issue..."
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-teal focus:ring-2 focus:ring-soft-teal/20 outline-none transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time Slot</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. 10 AM, Monday"
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-teal focus:ring-2 focus:ring-soft-teal/20 outline-none transition-all"
                />
              </div>

              <button type="submit" className="btn-primary w-full py-4 mt-2">
                <Send className="w-5 h-5" />
                Book via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
