import { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import type { HeroSection as HeroSectionType } from '../types';

interface HeroSectionProps {
  data: HeroSectionType;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const frameIdRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle updates using requestAnimationFrame to avoid excessive re-renders
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }

      frameIdRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80" />

      {/* Subtle animated blobs - aura.build inspired */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse opacity-20 delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse opacity-20 delay-500" />
      </div>

      {/* Interactive mouse-following glow */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Animated badge */}
        <div
          className="inline-block mb-8 animate-fade-in-up"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="glass-card px-4 py-2 rounded-full inline-flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full bg-primary transition-smooth ${
              isHovering ? 'shadow-lg shadow-primary/60' : ''
            }`} />
            <span className="text-sm font-medium text-foreground">Welcome to my portfolio</span>
          </div>
        </div>

        {/* Main Heading - Premium Typography */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up leading-tight">
          <span className="gradient-text-primary">
            {data.title}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {data.subtitle}
        </p>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {data.description}
        </p>

        {/* Feature badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="glass-card px-4 py-2 rounded-lg inline-flex items-center gap-2 hover:glass-dark transition-smooth">
            <Icon name="Code2" size={18} className="text-primary" />
            <span className="text-sm font-medium">Full-Stack Developer</span>
          </div>
          <div className="glass-card px-4 py-2 rounded-lg inline-flex items-center gap-2 hover:glass-dark transition-smooth">
            <Icon name="Trophy" size={18} className="text-amber-400" />
            <span className="text-sm font-medium">Scholarship Winner</span>
          </div>
          <div className="glass-card px-4 py-2 rounded-lg inline-flex items-center gap-2 hover:glass-dark transition-smooth">
            <Icon name="Globe" size={18} className="text-secondary" />
            <span className="text-sm font-medium">Multicultural</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator - subtle animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float-subtle">
        <Icon name="ChevronDown" size={28} className="text-primary/60 hover:text-primary transition-smooth" />
      </div>
    </section>
  );
};

export default HeroSection;