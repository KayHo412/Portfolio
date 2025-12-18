export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  nationality: string;
  languages: Language[];
  bio: string;
  image: string;
  alt: string;
}

export interface Language {
  name: string;
  proficiency: string;
  level: number;
  flag: string;
  alt: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface Hobby {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
  skills: string[];
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  avatar: string;
  alt: string;
  rating: number;
}

export interface CulturalExperience {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  date: string;
  category: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username: string;
}