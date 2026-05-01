import { Doctor, Service, Review, FAQItem } from './types';

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Navneet Kashyap",
    qualification: "BDS",
    experience: "18+ Years",
    specialty: "General Dentistry",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500",
    bio: "Expert in general dentistry and patient care with nearly two decades of clinical excellence."
  },
  {
    name: "Dr. Achala Raman",
    qualification: "Orthodontist",
    experience: "19+ Years",
    specialty: "Braces & Smile Correction",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=500",
    bio: "Specialist in braces and smile correction, transforming thousands of smiles with precision."
  }
];

export const SERVICES: Service[] = [
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    benefit: "Pain-free tooth saving",
    description: "Save your natural tooth with our advanced, virtually painless root canal procedures.",
    icon: "Stethoscope",
    price: "₹2,500 onwards"
  },
  {
    id: "braces",
    title: "Braces & Aligners",
    benefit: "Straight confident smile",
    description: "Achieve the perfect alignment with traditional braces or modern clear aligners.",
    icon: "Smile",
    price: "₹25,000 onwards"
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    benefit: "Instantly brighter smile",
    description: "Remove stains and brighten your teeth by several shades in just one visit.",
    icon: "Sparkles",
    price: "₹3,000 onwards"
  },
  {
    id: "implants",
    title: "Dental Implants",
    benefit: "Permanent tooth replacement",
    description: "The most natural-looking and durable solution for missing teeth.",
    icon: "Target",
    price: "On consultation"
  },
  {
    id: "extraction",
    title: "Tooth Extraction",
    benefit: "Safe and quick removal",
    description: "Painless and hygienic removal of wisdom or damaged teeth.",
    icon: "ShieldAlert",
    price: "₹500 onwards"
  },
  {
    id: "kids",
    title: "Kids Dentistry",
    benefit: "Gentle care for children",
    description: "Making dental visits fun and fear-free for the little ones.",
    icon: "Baby",
    price: "On consultation"
  }
];

export const REVIEWS: Review[] = [
  {
    name: "Qazam",
    text: "They offer the best budget-friendly treatments and truly listen to patients. Highly recommended for any dental issues.",
    rating: 5
  },
  {
    name: "Shubham Kumar",
    text: "I had crooked teeth since childhood. I look much better now after treatment. The staff is very professional.",
    rating: 5
  },
  {
    name: "Shambhavi Sharan",
    text: "They helped me gain a confident smile. Very friendly doctors and staff. The hygiene standards are top-notch.",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Is root canal painful?",
    answer: "With modern anesthesia and advanced equipment, Root Canal Treatment at Pearl Dental is virtually painless. Most patients report it feels no different than getting a filling."
  },
  {
    question: "How long do braces take?",
    answer: "The duration varies depending on the complexity of the case, typically ranging from 6 to 24 months. Our orthodontists will give you a specific timeline after your initial consultation."
  },
  {
    question: "Do you accept walk-ins?",
    answer: "While we prioritize appointments to ensure minimal waiting time, we do accept walk-ins for emergency cases. For routine check-ups, we recommend booking in advance."
  },
  {
    question: "What are your charges?",
    answer: "We offer premium care at affordable prices. Basic consultations start at ₹300, and treatment costs depend on the complexity. See our pricing preview section for starting rates."
  }
];

export const CLINIC_INFO = {
  name: "Pearl Dental Clinic",
  address: "1st Floor, Anand Plaza, Hinoo, Ranchi, Jharkhand 834002",
  phone: "+91 62040 00000", // Placeholder if real not provided, but request says WhatsApp integration
  whatsapp: "916204000000", // Placeholder phone for WA
  email: "pearl-dental@example.com",
  hours: "Mon–Sat: 9:00 AM – 8:00 PM",
  rating: "4.8",
  reviewCount: "5000+",
  experience: "18+",
  googleMapsLink: "https://maps.app.goo.gl/YourClinicLink",
  googleReviewsLink: "https://www.google.com/search?q=Pearl+Dental+Clinic+Ranchi+Reviews"
};
