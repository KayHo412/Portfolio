import React from 'react';

interface ScanlineOverlayProps {
  opacity?: number;
  className?: string;
}

/* GAME UI SCANLINE OVERLAY - CRT effect for authenticity */
const ScanlineOverlay: React.FC<ScanlineOverlayProps> = ({
  opacity = 0.15,
  className = '',
}) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full pointer-events-none z-50 ${className}`}
      style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          rgba(0, 0, 0, ${opacity}),
          rgba(0, 0, 0, ${opacity}) 1px,
          transparent 1px,
          transparent 2px
        )`,
      }}
    />
  );
};

export default ScanlineOverlay;
