import React from 'react';
import Icon from '../AppIcon';
import RewardButton from './RewardButton';

interface QuestCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  isInProgress?: boolean;
  icon?: string;
  experienceId?: string;
}

/* GAME UI QUEST CARD - Mission log entry with achievements */
const QuestCard: React.FC<QuestCardProps> = ({
  title,
  company,
  period,
  description,
  achievements,
  isInProgress = false,
  icon,
  experienceId = '',
}) => {
  return (
    <div className="game-box-primary pixel-border-3 p-4 md:p-6 space-y-3 hover:flicker-hover transition-all">
      {/* Header with badge */}
      <div className="flex justify-between items-start gap-4">
        <div className="flex items-start gap-3 flex-1">
          {icon && (
            <div className="mt-1">
              <Icon name={icon} size={20} className="text-primary flex-shrink-0" />
            </div>
          )}
          <div className="flex-1">
            <h3 className="font-pixel text-xs md:text-sm text-primary neon-primary mb-1">
              {title}
            </h3>
            {company && (
              <p className="text-xs md:text-sm text-muted-foreground font-mono">
                [FACTION: {company.toUpperCase()}]
              </p>
            )}
          </div>
        </div>
        {isInProgress && (
          <div className="px-2 py-1 pixel-border-2 border-warning bg-card text-warning text-xs font-bold">
            IN PROGRESS
          </div>
        )}
      </div>

      {/* Period and description */}
      <div className="pixel-border-top-2 border-border pt-3">
        {period && (
          <p className="text-xs text-secondary font-mono mb-2">
            PERIOD: {period}
          </p>
        )}
        <p className="text-xs md:text-sm text-foreground leading-relaxed font-mono">
          {description}
        </p>
      </div>

      {/* Rewards (Achievements) */}
      {achievements.length > 0 && (
        <div className="space-y-2 pt-2">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="flex gap-2 items-center text-xs md:text-sm">
              <span className="text-primary font-bold flex-shrink-0">+</span>
              <span className="text-foreground font-mono flex-1">{achievement}</span>
              <RewardButton rewardText="CLAIM" rewardId={`${experienceId}-reward-${idx}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestCard;
