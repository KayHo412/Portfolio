import { useState } from 'react';
import { CulturalExperience } from '../types';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

interface CulturalGalleryProps {
  experiences: CulturalExperience[];
}

const CulturalGallery = ({ experiences }: CulturalGalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(experiences.map((exp) => exp.category)))];

  const filteredExperiences =
    selectedCategory === 'all'
      ? experiences
      : experiences.filter((exp) => exp.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 neon-glow-accent mb-4">
            <Icon name="Camera" size={20} className="text-accent" />
            <span className="text-sm font-rajdhani font-semibold text-accent">Cultural Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold text-foreground mb-4">
            My <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Adventures</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments that shaped my multicultural perspective
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-rajdhani font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-accent text-accent-foreground neon-glow-accent'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 right-4 px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-rajdhani font-semibold text-accent-foreground">
                    {exp.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
                  <Icon name="Calendar" size={14} />
                  <span>{exp.date}</span>
                </div>

                <h3 className="text-lg font-orbitron font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {exp.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulturalGallery;