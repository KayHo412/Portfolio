import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import type { HeroSection as HeroSectionType } from '../types';

interface HeroSectionProps {
  data: HeroSectionType;
}

const HeroSection = ({ data }: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 20, 147, 0.3), transparent 50%)`,
        }}
      />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div
          className="inline-block mb-6 animate-bounce-playful"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 ${
                isHovering ? 'scale-110 rotate-12' : ''
              }`}
            >
              <circle
                cx="60"
                cy="60"
                r="55"
                stroke="url(#hero-gradient)"
                strokeWidth="4"
                className="neon-glow-primary"
              />
              <path
                d="M60 20L70 45L95 50L77.5 67.5L82 92L60 80L38 92L42.5 67.5L25 50L50 45L60 20Z"
                fill="url(#hero-gradient)"
                className="neon-glow-primary"
              />
              <defs>
                <linearGradient
                  id="hero-gradient"
                  x1="0"
                  y1="0"
                  x2="120"
                  y2="120"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF1493" />
                  <stop offset="0.5" stopColor="#FFD700" />
                  <stop offset="1" stopColor="#00BFFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-orbitron font-black mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent text-shadow-glow">
            {data.title}
          </span>
        </h1>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-rajdhani font-bold text-foreground mb-8 animate-fade-in-up delay-100">
          {data.subtitle}
        </h2>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
          {data.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <Link to="/the-lab">
            <Button
              size="lg"
              iconName={data.primaryCTA.icon}
              iconPosition="right"
              className="bg-cta hover:bg-cta/90 text-cta-foreground neon-glow-cta text-lg px-8 py-6"
            >
              {data.primaryCTA.text}
            </Button>
          </Link>

          <Button
            size="lg"
            variant="outline"
            iconName={data.secondaryCTA.icon}
            iconPosition="left"
            className="border-secondary text-secondary hover:bg-secondary/10 text-lg px-8 py-6"
            onClick={() => {
            const link = document.createElement('a');
            link.href = '/public/first_resume.pdf';
            link.download = 'first_resume.pdf';
            link.click();
  }}
          >
            {data.secondaryCTA.text}
          </Button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 animate-fade-in-up delay-400">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="Code2" size={20} className="text-primary" />
            <span className="text-sm font-fira-code">Full-Stack Developer</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="Trophy" size={20} className="text-accent" />
            <span className="text-sm font-fira-code">Scholarship Winner</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="Globe" size={20} className="text-secondary" />
            <span className="text-sm font-fira-code">Multicultural</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-primary neon-glow-primary" />
      </div>
    </section>
  );
};

export default HeroSection;