import * as LucideIcons from 'lucide-react';

export type LucideIconName = keyof typeof LucideIcons;

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    icon: LucideIconName;
  };
  secondaryCTA: {
    text: string;
    icon: LucideIconName;
  };
}

export interface FeatureCard {
  id: string;
  icon: LucideIconName;
  title: string;
  description: string;
  color: string;
  link: string;
}

export interface Skill {
  name: string;
  icon: LucideIconName;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

export interface SocialLink {
  platform: string;
  icon: LucideIconName;
  url: string;
  color: string;
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}