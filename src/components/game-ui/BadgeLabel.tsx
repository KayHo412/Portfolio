import React from 'react';

interface BadgeLabelProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'warning' | 'error';
  className?: string;
}

/* GAME UI BADGE - Small inline tag with hard borders */
const BadgeLabel: React.FC<BadgeLabelProps> = ({
  text,
  variant = 'primary',
  className = '',
}) => {
  const variantStyles = {
    primary: 'border-primary text-primary',
    secondary: 'border-secondary text-secondary',
    accent: 'border-accent text-accent',
    warning: 'border-warning text-warning',
    error: 'border-error text-error',
  };

  return (
    <span
      className={`pixel-border-2 px-2 py-1 text-xs font-mono font-bold uppercase tracking-wider ${variantStyles[variant]} inline-block ${className}`}
    >
      {text}
    </span>
  );
};

export default BadgeLabel;
