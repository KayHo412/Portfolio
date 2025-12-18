import { useState } from 'react';
import { Testimonial } from '../types';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 neon-glow-secondary mb-4">
            <Icon name="MessageSquare" size={20} className="text-secondary" />
            <span className="text-sm font-rajdhani font-semibold text-secondary">What Others Say</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from colleagues, mentors, and collaborators
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card p-8 sm:p-12 rounded-2xl border border-border shadow-xl animate-fade-in-up">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-secondary to-accent rounded-full blur-lg opacity-50" />
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-secondary/20 neon-glow-secondary">
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Icon
                    key={idx}
                    name="Star"
                    size={20}
                    className={idx < currentTestimonial.rating ? 'text-accent fill-accent' : 'text-muted'}
                  />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed mb-6 italic">
                "{currentTestimonial.content}"
              </blockquote>

              <div className="space-y-1">
                <h4 className="text-xl font-orbitron font-bold text-foreground">{currentTestimonial.name}</h4>
                <p className="text-secondary font-rajdhani font-semibold">{currentTestimonial.role}</p>
                <p className="text-sm text-muted-foreground">{currentTestimonial.organization}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full border-secondary text-secondary hover:bg-secondary/10"
            >
              <Icon name="ChevronLeft" size={24} />
            </Button>

            <div className="flex items-center space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-secondary neon-glow-secondary' :'bg-muted hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="w-12 h-12 rounded-full border-secondary text-secondary hover:bg-secondary/10"
            >
              <Icon name="ChevronRight" size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;