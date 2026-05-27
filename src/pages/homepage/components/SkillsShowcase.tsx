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
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text-secondary">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong skills across frontend, backend, and modern development tools
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as typeof activeCategory)}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium text-sm transition-smooth ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/40'
                  : 'glass-card text-muted-foreground hover:text-foreground hover:glass-dark'
              }`}
            >
              <Icon name={category.icon} size={18} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group glass-card rounded-2xl p-6 hover:shadow-lg hover:shadow-secondary/30 transition-smooth animate-fade-in-up border-0"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col items-center text-center h-full">
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-smooth">
                  <Icon name={skill.icon} size={28} className="text-secondary" />
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-semibold text-foreground mb-4 leading-tight">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="w-full space-y-2">
                  <div className="w-full bg-muted/30 rounded-full h-1.5 overflow-hidden backdrop-blur-sm">
                    <div
                      className="h-full bg-gradient-to-r from-secondary to-cyan-400 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-secondary/40"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {skill.level}% Proficient
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;