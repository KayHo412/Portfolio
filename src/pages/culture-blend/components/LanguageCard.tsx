import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { Language } from '../types';

interface LanguageCardProps {
  language: Language;
}

const LanguageCard = ({ language }: LanguageCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-80 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-card rounded-xl border-2 border-primary/30 p-6 flex flex-col items-center justify-center neon-glow-primary">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-primary/50">
            <Image
              src={language.flag}
              alt={`${language.name} flag representing language proficiency`}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-orbitron font-bold text-primary mb-2">
            {language.name}
          </h3>
          <p className="text-lg text-secondary font-rajdhani font-semibold mb-4">
            {language.level}
          </p>
          <div className="w-full bg-muted rounded-full h-3 mb-2">
            <div
              className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-1000 neon-glow-primary"
              style={{ width: `${language.proficiency}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground">{language.proficiency}% Proficiency</p>
          <div className="mt-4 flex items-center text-accent">
            <Icon name="RotateCw" size={16} className="mr-2" />
            <span className="text-xs font-fira-code">Click to flip</span>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-card rounded-xl border-2 border-secondary/30 p-6 overflow-y-auto neon-glow-secondary">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-orbitron font-bold text-secondary">Details</h4>
            <Icon name="RotateCcw" size={20} className="text-accent" />
          </div>
          <p className="text-sm text-foreground mb-4 leading-relaxed">
            {language.description}
          </p>
          {language.certifications && language.certifications.length > 0 && (
            <div className="mt-4">
              <h5 className="text-sm font-rajdhani font-semibold text-primary mb-2 flex items-center">
                <Icon name="Award" size={16} className="mr-2" />
                Certifications
              </h5>
              <ul className="space-y-2">
                {language.certifications.map((cert, index) => (
                  <li key={index} className="text-xs text-muted-foreground flex items-start">
                    <Icon name="CheckCircle2" size={14} className="mr-2 mt-0.5 text-success flex-shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageCard;