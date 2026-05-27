import { useState } from 'react';
import { Gift } from 'lucide-react';
import { useRewardSystem } from './RewardSystemContext';

interface RewardButtonProps {
  rewardText: string;
  rewardId: string;
}

const RewardButton: React.FC<RewardButtonProps> = ({ rewardText, rewardId }) => {
  const { claimReward, isClaimed } = useRewardSystem();
  const claimed = isClaimed(rewardId);
  const [showEffect, setShowEffect] = useState(false);

  const handleClaim = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (claimed) return;

    const buttonEl = e.currentTarget as HTMLElement;
    claimReward(rewardId, buttonEl, 8, 1);
    setShowEffect(true);
    setTimeout(() => setShowEffect(false), 700);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClaim}
        disabled={claimed}
        className={`relative px-3 py-2 border-2 font-mono text-xs uppercase transition-all duration-200 ${
          claimed
            ? 'border-muted-foreground text-muted-foreground bg-card cursor-default opacity-60'
            : 'border-accent text-accent bg-card hover:border-primary hover:text-primary hover:shadow-lg hover:flicker-hover'
        }`}
      >
        <span className="flex items-center gap-2">
          <Gift size={14} />
          {claimed ? 'CLAIMED' : rewardText}
        </span>
      </button>

      {/* Local flash feedback (global orb flight is handled by RewardSystemContext) */}
      {showEffect && (
        <>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: '2px',
              animation: 'glow-flash 0.6s ease-out',
              boxShadow: '0 0 20px rgba(0, 255, 136, 0.8)',
            }}
          />

          {/* Floating text */}
          <div
            className="absolute pointer-events-none font-pixel text-xs text-primary"
            style={{
              left: '50%',
              top: '0',
              transform: 'translateX(-50%)',
              animation: 'float-up 1s ease-out forwards',
              textShadow: '0 0 8px rgba(0, 255, 136, 0.8)',
            }}
          >
            +REWARD
          </div>
        </>
      )}

      <style>{`
        @keyframes glow-flash {
          0% {
            box-shadow: 0 0 30px rgba(0, 255, 136, 1), inset 0 0 20px rgba(0, 255, 136, 0.5);
            opacity: 1;
          }
          100% {
            box-shadow: 0 0 0px rgba(0, 255, 136, 0);
            opacity: 0;
          }
        }

        @keyframes float-up {
          0% {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-50%) translateY(-40px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default RewardButton;
