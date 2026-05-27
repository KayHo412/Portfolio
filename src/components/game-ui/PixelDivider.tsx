import React from 'react';

interface PixelDividerProps {
  className?: string;
  type?: 'horizontal' | 'vertical';
  variant?: 'primary' | 'secondary' | 'accent' | 'default';
}

/* GAME UI DIVIDER - Low-poly SVG-inspired section break */
const PixelDivider: React.FC<PixelDividerProps> = ({
  className = '',
  type = 'horizontal',
  variant = 'primary',
}) => {
  const colorMap = {
    primary: '#00ff88',
    secondary: '#00ccff',
    accent: '#ff00ff',
    default: '#666666',
  };

  if (type === 'vertical') {
    return (
      <div
        className={`w-1 h-16 ${className}`}
        style={{ backgroundColor: colorMap[variant] }}
      />
    );
  }

  return (
    <div className={`w-full flex items-center gap-4 my-8 ${className}`}>
      <svg
        width="100%"
        height="40"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="text-primary"
      >
        <polyline
          points="0,20 150,10 300,25 450,15 600,20 750,25 900,10 1050,20 1200,15"
          fill="none"
          stroke={colorMap[variant]}
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default PixelDivider;
