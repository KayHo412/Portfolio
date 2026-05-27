import React from 'react';
import Icon from '../AppIcon';

interface PixelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'accent' | 'secondary' | 'default';
  iconName?: string;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  className?: string;
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

/* GAME UI RETRO BUTTON - Pixel-perfect with hard borders and neon glow */
const PixelButton: React.FC<PixelButtonProps> = ({
  children,
  onClick,
  variant = 'default',
  iconName,
  iconPosition = 'left',
  disabled = false,
  className = '',
  asLink = false,
  href = '#',
  target,
  rel,
}) => {
  const baseStyles = 'pixel-btn font-mono text-sm md:text-base';

  const variantStyles = {
    primary: 'bg-primary text-primary-foreground border-primary hover:bg-background hover:text-primary',
    accent: 'bg-accent text-accent-foreground border-accent hover:bg-background hover:text-accent',
    secondary: 'bg-secondary text-secondary-foreground border-secondary hover:bg-background hover:text-secondary',
    default: 'bg-card text-foreground border-border hover:bg-primary hover:text-primary-foreground',
  };

  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`;

  const content = (
    <>
      {iconName && iconPosition === 'left' && (
        <Icon name={iconName} size={16} className="inline mr-2" />
      )}
      {children}
      {iconName && iconPosition === 'right' && (
        <Icon name={iconName} size={16} className="inline ml-2" />
      )}
    </>
  );

  if (asLink) {
    return (
      <a href={href} target={target} rel={rel} className={finalClassName}>
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={finalClassName}
    >
      {content}
    </button>
  );
};

export default PixelButton;
