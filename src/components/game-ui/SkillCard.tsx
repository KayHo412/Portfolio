import { useState } from 'react';
import { Skill } from '../../pages/superpower-kitchen/types';
import BadgeLabel from './BadgeLabel';
import HealthBar from './HealthBar';
import { skillQuestions } from '../../data/skillQuestions';
import { useRewardSystem } from './RewardSystemContext';

interface SkillCardProps {
  skill: Skill;
  levelMap: (proficiency: number) => string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, levelMap }) => {
  const { claimReward, isClaimed } = useRewardSystem();
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showRewardEffect, setShowRewardEffect] = useState(false);
  const rewardId = `skill-quiz-${skill.id}`;
  const alreadyClaimed = isClaimed(rewardId);

  const questions = skillQuestions[skill.name] || [];
  const currentQuestion = questions[0]; // Show first question for simplicity

  const handleAnswerClick = (index: number) => {
    if (alreadyClaimed) return;

    setSelectedAnswer(index);
    const correct = index === currentQuestion.correct;
    setIsCorrect(correct);

    if (correct) {
      const cardEl = document.getElementById(`skill-card-${skill.id}`) as HTMLElement | null;
      claimReward(rewardId, cardEl, 8, 1);
      setShowRewardEffect(true);
      setTimeout(() => setShowRewardEffect(false), 700);
      return;
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      setIsCorrect(null);
    }, 650);
  };

  return (
    <div
      id={`skill-card-${skill.id}`}
      className="h-64 cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 transform"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full bg-card border-4 border-border p-4 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h3 className="font-pixel text-xs md:text-sm text-primary neon-primary leading-tight">
                  {skill.name.toUpperCase()}
                </h3>
                <p className="text-xs text-muted-foreground font-mono mt-1 line-clamp-2">
                  {skill.description}
                </p>
              </div>
              <BadgeLabel text={levelMap(skill.proficiency)} variant="accent" />
            </div>

            {/* Proficiency Bar */}
            <div className="py-2">
              <HealthBar
                label="PROF"
                current={skill.proficiency}
                max={100}
                barColor="primary"
                showPercentage={true}
              />
            </div>
          </div>

          {/* Stats - Bottom */}
          <div className="space-y-2 text-xs font-mono border-t-2 border-border pt-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">EXP:</span>
              <span className="text-secondary font-bold">{skill.yearsOfExperience} yr</span>
            </div>
            <div className="text-center text-muted-foreground text-xs">
              [CLICK TO QUIZ]
            </div>
          </div>
        </div>

        {/* Back of card - Quiz */}
        <div
          className="absolute w-full h-full bg-card border-4 border-accent p-3 flex flex-col overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {currentQuestion ? (
            <div className="flex flex-col h-full justify-between text-xs">
              {/* Question */}
              <div className="space-y-2 flex-1">
                <p className="font-pixel text-accent text-xs leading-tight">
                  Q: {currentQuestion.question}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-1">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAnswerClick(idx);
                    }}
                    disabled={alreadyClaimed}
                    className={`w-full text-left px-2 py-1 border-2 font-mono text-xs transition-all ${
                      alreadyClaimed
                        ? idx === currentQuestion.correct
                          ? 'border-primary text-primary opacity-100'
                          : 'opacity-35 border-muted-foreground text-muted-foreground'
                        : selectedAnswer === null
                        ? 'border-secondary text-secondary hover:border-primary hover:text-primary'
                        : selectedAnswer === idx
                          ? idx === currentQuestion.correct
                            ? 'border-primary text-primary bg-card opacity-100'
                            : 'border-error text-error opacity-60'
                          : idx === currentQuestion.correct
                            ? 'border-primary text-primary opacity-75'
                            : 'opacity-40 border-muted-foreground text-muted-foreground'
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}) {option}
                  </button>
                ))}
              </div>

              {/* Feedback */}
              {isCorrect !== null && (
                <div className="pt-2 text-center text-xs font-mono">
                  {isCorrect ? (
                    <p className="text-primary neon-primary">✓ CORRECT!</p>
                  ) : (
                    <p className="text-error">✗ TRY AGAIN</p>
                  )}
                </div>
              )}

              {alreadyClaimed && (
                <div className="pt-2 text-center text-xs font-mono text-primary neon-primary">
                  [REWARD CLAIMED]
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-xs text-muted-foreground font-mono">
              No questions available
            </div>
          )}

          {/* Local flash feedback (global orb flight is handled by RewardSystemContext) */}
          {showRewardEffect && (
            <>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  animation: 'glow-flash 0.6s ease-out',
                  boxShadow: '0 0 20px rgba(0, 255, 136, 0.8)',
                }}
              />

              <div
                className="absolute pointer-events-none font-pixel text-xs text-primary"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: 'float-up 1s ease-out forwards',
                  textShadow: '0 0 8px rgba(0, 255, 136, 0.8)',
                }}
              >
                +ORB
              </div>
            </>
          )}
        </div>
      </div>

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
            transform: translate(-50%, -50%) translateY(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) translateY(-40px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SkillCard;
