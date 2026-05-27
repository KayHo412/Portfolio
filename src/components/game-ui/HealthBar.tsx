import React from 'react';

interface HealthBarProps {
  label: string;
  current: number;
  max: number;
  showPercentage?: boolean;
  barColor?: 'primary' | 'secondary' | 'accent' | 'warning' | 'error';
  variant?: 'xp' | 'health' | 'mana';
}

/* GAME UI HEALTH/XP BAR - Flat pixel design with hard borders */
const HealthBar: React.FC<HealthBarProps> = ({
  label,
  current,
  max,
  showPercentage = true,
  barColor = 'primary',
}) => {
  const percentage = Math.round((current / max) * 100);

  const colorMap = {
    primary: 'health-bar-fill bg-primary',
    secondary: 'health-bar-fill bg-secondary',
    accent: 'health-bar-fill bg-accent',
    warning: 'health-bar-fill bg-warning',
    error: 'health-bar-fill bg-error',
  };

  const borderColor = {
    primary: 'pixel-border-2 border-primary',
    secondary: 'pixel-border-2 border-secondary',
    accent: 'pixel-border-2 border-accent',
    warning: 'pixel-border-2 border-warning',
    error: 'pixel-border-2 border-error',
  };

  return (
    <div className="space-y-1 font-mono">
      <div className="flex justify-between items-center text-xs md:text-sm">
        <span className="uppercase tracking-widest font-bold text-foreground">
          {label}
        </span>
        {showPercentage && (
          <span className="text-muted-foreground">
            {current}/{max} [{percentage}%]
          </span>
        )}
      </div>
      <div className={`health-bar-bg ${borderColor[barColor]}`}>
        <div
          className={colorMap[barColor]}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default HealthBar;
