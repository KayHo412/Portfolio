import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';

type RewardSystemContextValue = {
  points: number;
  isClaimed: (id: string) => boolean;
  claimReward: (id: string, originEl: HTMLElement | null, orbCount?: number, pointsPerClaim?: number) => boolean;
  registerTarget: (el: HTMLElement | null) => void;
};

const RewardSystemContext = createContext<RewardSystemContextValue | null>(null);

const createOrb = (x: number, y: number) => {
  const orb = document.createElement('div');
  orb.style.position = 'fixed';
  orb.style.left = `${x}px`;
  orb.style.top = `${y}px`;
  orb.style.width = '10px';
  orb.style.height = '10px';
  orb.style.borderRadius = '9999px';
  orb.style.background = '#00ff88';
  orb.style.boxShadow = '0 0 10px rgba(0,255,136,0.9)';
  orb.style.pointerEvents = 'none';
  orb.style.zIndex = '9999';
  orb.style.transform = 'translate(-50%, -50%)';
  document.body.appendChild(orb);
  return orb;
};

export const RewardSystemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [points, setPoints] = useState(0);
  const [claimedIds, setClaimedIds] = useState<Set<string>>(new Set());
  const targetRef = useRef<HTMLElement | null>(null);

  const registerTarget = useCallback((el: HTMLElement | null) => {
    targetRef.current = el;
  }, []);

  const isClaimed = useCallback((id: string) => claimedIds.has(id), [claimedIds]);

  const claimReward = useCallback(
    (id: string, originEl: HTMLElement | null, orbCount = 8, pointsPerClaim = 1) => {
      if (claimedIds.has(id)) return false;

      setClaimedIds((prev) => new Set(prev).add(id));
      setPoints((prev) => prev + pointsPerClaim);

      if (typeof window === 'undefined') return true;
      if (!originEl || !targetRef.current) return true;

      const originRect = originEl.getBoundingClientRect();
      const targetRect = targetRef.current.getBoundingClientRect();

      const startX = originRect.left + originRect.width / 2;
      const startY = originRect.top + originRect.height / 2;
      const endX = targetRect.left + targetRect.width / 2;
      const endY = targetRect.top + targetRect.height / 2;

      Array.from({ length: orbCount }).forEach((_, i) => {
        const orb = createOrb(startX, startY);
        const spreadX = (Math.random() - 0.5) * 40;
        const spreadY = (Math.random() - 0.5) * 30;
        const midX = (startX + endX) / 2 + spreadX;
        const midY = (startY + endY) / 2 + spreadY;

        const animation = orb.animate(
          [
            {
              transform: 'translate(-50%, -50%) scale(1)',
              left: `${startX}px`,
              top: `${startY}px`,
              opacity: 1,
            },
            {
              transform: 'translate(-50%, -50%) scale(1.1)',
              left: `${midX}px`,
              top: `${midY}px`,
              opacity: 1,
              offset: 0.55,
            },
            {
              transform: 'translate(-50%, -50%) scale(0.25)',
              left: `${endX}px`,
              top: `${endY}px`,
              opacity: 0.1,
            },
          ],
          {
            duration: 900 + i * 40,
            easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
            fill: 'forwards',
          },
        );

        animation.onfinish = () => {
          orb.remove();
        };
      });

      return true;
    },
    [claimedIds],
  );

  const value = useMemo(
    () => ({ points, isClaimed, claimReward, registerTarget }),
    [points, isClaimed, claimReward, registerTarget],
  );

  return <RewardSystemContext.Provider value={value}>{children}</RewardSystemContext.Provider>;
};

export const useRewardSystem = () => {
  const context = useContext(RewardSystemContext);
  if (!context) {
    throw new Error('useRewardSystem must be used within RewardSystemProvider');
  }
  return context;
};
