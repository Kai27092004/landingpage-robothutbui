export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Hotspot {
  id: string;
  x: number;
  y: number;
  label: string;
  description: string;
}

export interface Review {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  verified: boolean;
  comment: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NewsletterFormData {
  name: string;
  email: string;
  phone?: string;
}

export interface ComparisonItem {
  label: string;
  positive: boolean;
}

export interface Specification {
  value: string;
  label: string;
}
