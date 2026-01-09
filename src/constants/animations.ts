// Animation configuration constants
export const ANIMATION_DELAYS = {
  xs: '0.05s',
  sm: '0.1s',
  md: '0.2s',
  lg: '0.4s',
  xl: '0.6s',
};

export const PARTICLE_CONFIG = {
  count: 50,
  connectionDistance: 150,
  minSize: 1,
  maxSize: 4,
  speedRange: 0.5,
  colors: ['#FF1493', '#00BFFF', '#FFD700'],
} as const;

export const ANIMATION_DELAY_MULTIPLIER = 0.1; // 100ms per stagger index

/**
 * Calculate staggered animation delay
 * @param index - Item index in array
 * @returns Delay string (e.g., "0.1s", "0.2s")
 */
export const getStaggerDelay = (index: number): string => {
  return `${index * ANIMATION_DELAY_MULTIPLIER}s`;
};
