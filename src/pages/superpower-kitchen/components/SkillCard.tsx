import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getProficiencyColor = (level: number) => {
    if (level >= 90) return 'from-primary to-accent';
    if (level >= 75) return 'from-secondary to-primary';
    if (level >= 60) return 'from-accent to-secondary';
    return 'from-muted to-accent';
  };

  const getMetaphorIcon = () => {
    return skill.metaphor.type === 'cooking' ? 'ChefHat' : 'Zap';
  };

  return (
    <div
      className="group perspective-1000"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className={`relative w-full h-80 transition-transform duration-700 transform-style-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full bg-card border-2 border-border rounded-xl p-6 hover:border-primary transition-all duration-300 neon-glow-primary">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-primary/10 rounded-lg neon-glow-primary">
                <Icon name={skill.icon} size={32} className="text-primary" />
              </div>
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Icon name={getMetaphorIcon()} size={20} className="text-secondary" />
              </div>
            </div>

            <h3 className="text-xl font-orbitron font-bold text-foreground mb-2">
              {skill.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {skill.description}
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-rajdhani font-semibold text-foreground">
                    Proficiency
                  </span>
                  <span className="text-sm font-fira-code text-primary">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${getProficiencyColor(
                      skill.proficiency
                    )} transition-all duration-1000 neon-glow-primary`}
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>

              <div className="bg-background/50 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-1">
                  <Icon name="Calendar" size={16} className="text-accent" />
                  <span className="text-xs text-muted-foreground">Experience</span>
                </div>
                <p className="text-lg font-orbitron font-bold text-foreground">
                  {skill.yearsOfExperience}y
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center">
              <span className="text-xs text-muted-foreground font-rajdhani">
                Click to flip
              </span>
              <Icon name="RotateCw" size={14} className="ml-2 text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary rounded-xl p-6 neon-glow-primary">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-orbitron font-bold text-foreground">
                {skill.metaphor.item}
              </h4>
              <Icon name={getMetaphorIcon()} size={24} className="text-primary" />
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Metaphor Type:</p>
                <p className="text-base font-rajdhani font-semibold text-foreground capitalize">
                  {skill.metaphor.type}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Description:</p>
                <p className="text-sm text-foreground leading-relaxed">
                  {skill.metaphor.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2">Category:</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-rajdhani font-semibold">
                  {skill.category}
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center">
              <span className="text-xs text-muted-foreground font-rajdhani">
                Click to flip back
              </span>
              <Icon name="RotateCcw" size={14} className="ml-2 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;