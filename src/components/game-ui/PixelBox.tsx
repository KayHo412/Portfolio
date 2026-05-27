import React from 'react';

interface PixelBoxProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'default';
  borderWidth?: 2 | 3 | 4;
  className?: string;
  title?: string;
}

/* GAME UI BOX - Container with hard pixel borders and optional title */
const PixelBox: React.FC<PixelBoxProps> = ({
  children,
  variant = 'default',
  borderWidth = 2,
  className = '',
  title,
}) => {
  const variantStyles = {
    primary: 'game-box-primary',
    secondary: 'game-box pixel-border-secondary',
    accent: 'game-box-accent',
    default: 'game-box',
  };

  const borderClass = borderWidth === 3 ? 'pixel-border-3' : borderWidth === 4 ? 'pixel-border-4' : 'pixel-border-2';

  return (
    <div className={`${variantStyles[variant]} ${borderClass} p-4 md:p-6 space-y-4 ${className}`}>
      {title && (
        <h3 className="font-pixel text-xs md:text-sm text-primary neon-primary uppercase tracking-widest">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default PixelBox;
