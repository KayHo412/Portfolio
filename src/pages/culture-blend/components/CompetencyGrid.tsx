import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { CulturalCompetency } from '../types';

interface CompetencyGridProps {
  competencies: CulturalCompetency[];
}

const CompetencyGrid = ({ competencies }: CompetencyGridProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {competencies.map((competency) => (
        <div
          key={competency.id}
          className={`bg-card rounded-xl border-2 transition-all duration-300 cursor-pointer ${
            expandedId === competency.id
              ? 'border-primary neon-glow-primary' :'border-border hover:border-secondary'
          }`}
          onClick={() => setExpandedId(expandedId === competency.id ? null : competency.id)}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Icon name={competency.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-orbitron font-bold text-foreground">
                  {competency.category}
                </h3>
              </div>
              <Icon
                name={expandedId === competency.id ? 'ChevronUp' : 'ChevronDown'}
                size={20}
                className="text-accent"
              />
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-rajdhani font-semibold text-secondary mb-2">
                  Core Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {competency.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-fira-code rounded-full border border-secondary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {expandedId === competency.id && (
                <div className="mt-4 pt-4 border-t border-border animate-fade-in-up">
                  <h4 className="text-sm font-rajdhani font-semibold text-accent mb-2 flex items-center">
                    <Icon name="Lightbulb" size={16} className="mr-2" />
                    Real-World Examples
                  </h4>
                  <ul className="space-y-2">
                    {competency.examples.map((example, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-start">
                        <Icon name="ArrowRight" size={14} className="mr-2 mt-0.5 text-primary flex-shrink-0" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompetencyGrid;