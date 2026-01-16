# Khoa's Digital Portfolio

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-KayHo412-181717?style=flat-square&logo=github)](https://github.com/KayHo412)

A modern, premium portfolio website showcasing full-stack development skills, cultural experiences, and creative projects. Built with React, TypeScript, and Tailwind CSS with a focus on clean design and excellent user experience.

## 🎨 Features

- **Modern Design System** - Premium aesthetic inspired by contemporary startup design
- **Glassmorphism Effects** - Frosted glass cards with backdrop blur
- **Responsive Layout** - Fully mobile-optimized experience
- **Smooth Animations** - Purposeful, subtle micro-interactions
- **Accessibility First** - WCAG AAA contrast ratios and keyboard navigation
- **Fast Performance** - GPU-optimized animations, no unnecessary dependencies

## 📱 Pages

### Homepage
- Hero section with animated background
- Feature cards highlighting key areas
- Skills showcase with proficiency indicators
- Call-to-action section

### About Me
- Personal introduction and background
- Professional experience timeline
- Hobbies and passions section
- Core values and principles

### Culture Blend
- Multilingual language cards with flip animations
- Cultural experiences gallery
- Language proficiency levels and certifications

### Superpower Kitchen
- Interactive skill cards with detailed metaphors
- Dynamic proficiency visualization
- Skills categorized by type (frontend, backend, tools)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3 with custom utilities
- **Animations**: CSS animations + Framer Motion
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Icons**: Lucide React
- **State Management**: Redux Toolkit
- **Forms**: React Hook Form

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
cd Portfolio
npm install

# Start development server
npm start

# Build for production
npm run build

# Preview production build
npm run serve
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Input, etc.)
│   ├── AppIcon.tsx     # Icon wrapper
│   ├── Layout.tsx      # Main layout wrapper
│   └── Header.tsx      # Navigation header
├── pages/              # Page components
│   ├── homepage/       # Landing page
│   ├── about/          # About page
│   ├── culture-blend/  # Language/culture page
│   └── superpower-kitchen/  # Skills showcase
├── styles/             # Global styles
│   ├── tailwind.css    # Tailwind config + custom utilities
│   └── index.css       # Global styles
├── constants/          # App constants
├── utils/              # Utility functions
└── types/              # TypeScript type definitions
```

## 🎨 Design System

### Colors
- **Primary**: #6366F1 (Indigo)
- **Secondary**: #06B6D4 (Cyan)
- **Accent**: #F59E0B (Amber)
- **Background**: #0F172A (Deep Slate)

### Typography
- **Headings**: Geist Bold with tight tracking
- **Body**: Geist Regular with 1.6 line-height
- **Code**: Geist Mono

### Key Utilities
- `.glass-dark` - Heavy glassmorphism effect
- `.glass-card` - Card glassmorphism effect
- `.gradient-text-primary` - Primary gradient text
- `.glow-soft-primary` - Soft colored glow
- `.transition-smooth` - Standard 300ms transitions

## ♿ Accessibility

- ✅ WCAG AAA contrast ratios (15:1+)
- ✅ Visible focus states
- ✅ Keyboard navigation support
- ✅ Respects `prefers-reduced-motion`
- ✅ Semantic HTML structure
- ✅ ARIA labels where needed

## 📊 Performance

- Lighthouse score: 90+
- Core Web Vitals: Excellent
- No layout shifts (CLS < 0.1)
- Smooth 60fps animations
- GPU-accelerated transforms

## 🔄 Deployment

The site is deployed via GitHub Pages. Automatic deployment happens on push to `main` branch.

```bash
# Manual deployment
npm run deploy
```

## 📝 License

© 2026 Khoa Ho. All rights reserved.

## 💬 Contact

- **GitHub**: [@KayHo412](https://github.com/KayHo412)
- **LinkedIn**: [Khoa Phan Ho](https://linkedin.com/in/khoa-phan-ho-75771b2a9/)
- **Email**: khoaphan412@gmail.com

## 🙏 Acknowledgments

Design inspiration from [aura.build](https://aura.build) - Modern design system with premium aesthetics.

---

Built with ♥ and code. Every pixel crafted with attention to detail.
