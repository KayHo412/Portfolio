import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = (): void => {
    navigate('/');
  };

  const handleGoBack = (): void => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-base px-4 py-16 text-ink">
      <div className="mx-auto flex max-w-xl flex-col gap-8 border border-border bg-surface p-8 text-left">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-dim">404</p>
        <div className="space-y-3">
          <h1 className="text-[clamp(2.5rem,8vw,64px)] leading-[0.95] text-ink">Page Not Found</h1>
          <p className="max-w-lg text-[13px] leading-[1.75] text-ink-dim">
            Oopsie woopsie, I didn't make an endpoint for this yet, might did it in the future. Let's get you back!
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={handleGoBack}
            className="border border-border-strong px-4 py-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-surface-2"
          >
            Go Back
          </button>

          <button
            onClick={handleGoHome}
            className="border border-border-strong px-4 py-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-surface-2"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;