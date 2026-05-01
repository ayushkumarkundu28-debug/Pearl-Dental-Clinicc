export interface Doctor {
  name: string;
  qualification: string;
  experience: string;
  specialty: string;
  image: string;
  bio: string;
}

export interface Service {
  id: string;
  title: string;
  benefit: string;
  description: string;
  icon: string;
  price?: string;
}

export interface Review {
  name: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}
