import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import type { Skill } from '../types';

interface SkillsShowcaseProps {
  skills: Skill[];
}

const SkillsShowcase = ({ skills }: SkillsShowcaseProps) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'tools'>(
    'all'
  );

  const categories = [
    { id: 'all', label: 'All Skills', icon: 'Layers' },
    { id: 'frontend', label: 'Frontend', icon: 'Palette' },
    { id: 'backend', label: 'Backend', icon: 'Server' },
    { id: 'tools', label: 'Tools', icon: 'Wrench' },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Superpower Arsenal
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A blend of technical precision and creative flair
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as typeof activeCategory)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-rajdhani font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground neon-glow-primary'
                  : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <Icon name={category.icon} size={20} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-card rounded-xl p-6 border-2 border-border hover:border-secondary transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={skill.icon} size={32} className="text-secondary" />
                </div>

                <h3 className="text-lg font-rajdhani font-bold text-foreground mb-3">
                  {skill.name}
                </h3>

                <div className="w-full bg-muted rounded-full h-2 mb-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-secondary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <span className="text-sm font-fira-code text-muted-foreground">
                  {skill.level}% Mastery
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;