import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // header no longer shows typing animation — hero handles the big-name animation

  return (
    <div className="relative min-h-screen bg-base text-ink flex flex-col">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)',
          zIndex: 100,
        }}
      />

      <header className="relative z-10 border-b border-border bg-base">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="font-mono text-[13px] tracking-[0.08em] text-amber">KH.DEV</span>
            <span className="font-mono text-[13px] tracking-[0.08em] text-amber">// v2026</span>
          </Link>

          <nav className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-dim">
            <Link to="/superpower-kitchen" className="transition-colors hover:text-amber">
              Work
            </Link>
            <Link to="/about" className="transition-colors hover:text-amber">
              About
            </Link>
            <Link to="/contact" className="transition-colors hover:text-amber">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10 flex-1">{children}</main>

      <footer className="relative z-10 border-t border-border bg-base">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="font-mono text-[10px] text-ink-dim">
            © 2025 Khoa Ho — TAMK
          </p>
          <div className="flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-dim">
            <a className="transition-colors hover:text-amber" href="https://github.com/KayHo412" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="transition-colors hover:text-amber" href="https://www.linkedin.com/in/khoa-phan-ho-75771b2a9/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <button
              className="transition-colors hover:text-amber font-mono"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText('khoaphan412@gmail.com');
                  // quick visual feedback via alert to avoid adding state here
                  // user can paste into Outlook
                  // eslint-disable-next-line no-alert
                  alert('Email address copied to clipboard: khoaphan412@gmail.com');
                } catch {
                  // eslint-disable-next-line no-alert
                  alert('Copy failed — please copy: khoaphan412@gmail.com');
                }
              }}
            >
              Email
            </button>
            <a className="transition-colors hover:text-amber" href="https://kaho412.itch.io/" target="_blank" rel="noopener noreferrer">
              itch.io
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
