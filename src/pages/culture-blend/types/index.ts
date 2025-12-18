export interface Language {
  id: string;
  name: string;
  flag: string;
  proficiency: number;
  level: string;
  description: string;
  certifications?: string[];
}

export interface CulturalExperience {
  id: string;
  title: string;
  location: string;
  period: string;
  description: string;
  image: string;
  alt: string;
  highlights: string[];
  skills: string[];
}

export interface CrossCulturalProject {
  id: string;
  name: string;
  description: string;
  teamSize: number;
  countries: string[];
  duration: string;
  technologies: string[];
  outcomes: string[];
  image: string;
  alt: string;
}

export interface CulturalCompetency {
  id: string;
  category: string;
  icon: string;
  skills: string[];
  examples: string[];
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  location: string;
  description: string;
  type: 'education' | 'work' | 'cultural' | 'achievement';
  icon: string;
  image?: string;
  alt?: string;
}