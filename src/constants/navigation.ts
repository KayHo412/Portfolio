import type { IconName } from '../components/AppIcon';

export interface NavigationItem {
  path: string;
  label: string;
  icon: IconName;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { path: '/', label: 'Home', icon: 'Home' },
  { path: '/superpower-kitchen', label: 'Superpower Kitchen', icon: 'ChefHat' },
  { path: '/culture-blend', label: 'Culture Blend', icon: 'Globe' },
  { path: '/about', label: 'About', icon: 'User' },
];

export const SOCIAL_LINKS = {
  github: {
    platform: 'GitHub',
    icon: 'Github' as IconName,
    url: 'https://github.com/KayHo412',
    username: '@KayHo412',
  },
  linkedin: {
    platform: 'LinkedIn',
    icon: 'Linkedin' as IconName,
    url: 'https://www.linkedin.com/in/khoa-phan-ho-75771b2a9/',
    username: 'Khoa Phan Ho',
  },
  email: {
    platform: 'Email',
    icon: 'Mail' as IconName,
    url: 'mailto:khoaphan412@gmail.com',
    username: 'khoaphan412@gmail.com',
  },
  twitter: {
    platform: 'Twitter',
    icon: 'Twitter' as IconName,
    url: 'https://twitter.com',
  },
  instagram: {
    platform: 'Instagram',
    icon: 'Instagram' as IconName,
    url: 'https://www.instagram.com/kp_phan/',
    username: '@kp_phan',
  },
};
