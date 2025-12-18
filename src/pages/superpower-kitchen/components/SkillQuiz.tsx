import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { QuizQuestion } from '../types';

interface SkillQuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

const SkillQuiz = ({ questions, onComplete }: SkillQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
      onComplete(Math.round((score / questions.length) * 100));
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="bg-card border-2 border-border rounded-xl p-8 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full neon-glow-primary mb-4">
            <Icon name="Trophy" size={48} className="text-white" />
          </div>
          <h3 className="text-2xl font-orbitron font-bold text-foreground mb-2">
            Quiz Complete!
          </h3>
          <p className="text-muted-foreground">
            You scored {score} out of {questions.length}
          </p>
        </div>

        <div className="mb-6">
          <div className="text-5xl font-orbitron font-bold text-primary mb-2">
            {percentage}%
          </div>
          <p className="text-sm text-muted-foreground">
            {percentage >= 80
              ? 'Excellent! You really know your stuff!'
              : percentage >= 60
              ? 'Good job! Keep learning!' :'Keep practicing to improve your skills!'}
          </p>
        </div>

        <Button
          onClick={handleRestartQuiz}
          iconName="RotateCw"
          iconPosition="left"
          className="bg-gradient-to-r from-primary to-secondary text-white neon-glow-primary"
        >
          Try Again
        </Button>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="bg-card border-2 border-border rounded-xl p-8">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-rajdhani font-semibold text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-fira-code text-primary">
            Score: {score}/{questions.length}
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 neon-glow-primary"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <Icon name="HelpCircle" size={24} className="text-accent" />
          <span className="text-xs text-muted-foreground font-rajdhani uppercase">
            {question.skillCategory}
          </span>
        </div>
        <h3 className="text-xl font-orbitron font-bold text-foreground mb-6">
          {question.question}
        </h3>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correctAnswer;
            const showCorrect = showExplanation && isCorrect;
            const showIncorrect = showExplanation && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                  showCorrect
                    ? 'border-success bg-success/10 text-success'
                    : showIncorrect
                    ? 'border-error bg-error/10 text-error'
                    : isSelected
                    ? 'border-primary bg-primary/10 text-primary' :'border-border bg-background hover:border-primary hover:bg-primary/5 text-foreground'
                } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-rajdhani font-semibold">{option}</span>
                  {showCorrect && <Icon name="CheckCircle2" size={20} />}
                  {showIncorrect && <Icon name="XCircle" size={20} />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {showExplanation && (
        <div className="mb-6 p-4 bg-accent/10 border-2 border-accent rounded-lg animate-fade-in-up">
          <div className="flex items-start space-x-3">
            <Icon name="Lightbulb" size={20} className="text-accent flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-rajdhani font-semibold text-accent mb-2">
                Explanation
              </h4>
              <p className="text-sm text-foreground">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        {!showExplanation ? (
          <Button
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
            iconName="Check"
            iconPosition="right"
            className="bg-gradient-to-r from-primary to-secondary text-white neon-glow-primary"
          >
            Submit Answer
          </Button>
        ) : (
          <Button
            onClick={handleNextQuestion}
            iconName="ArrowRight"
            iconPosition="right"
            className="bg-gradient-to-r from-primary to-secondary text-white neon-glow-primary"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default SkillQuiz;