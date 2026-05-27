import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GameBackground from './GameBackground';
import { RewardSystemProvider, useRewardSystem } from './game-ui/RewardSystemContext';

interface LayoutProps {
  children: React.ReactNode;
}

/* GAME UI HUD LAYOUT - Sticky navigation bar with pixel aesthetic */
const LayoutContent: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { points, registerTarget } = useRewardSystem();

  const logoOpacity = points > 0 ? Math.min(0.25 + points * 0.12, 1) : 0;
  const logoGlow = points > 0 ? Math.min(4 + points * 2, 18) : 0;

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'SKILLS', href: '/superpower-kitchen' },
    { label: 'ABOUT', href: '/about' },
    { label: 'CULTURE', href: '/culture-blend' },
  ];

  return (
    <div className="relative isolate min-h-screen bg-background text-foreground flex flex-col">
      <GameBackground />
      {/* === HUD NAVBAR === */}
      <header className="sticky top-0 z-40 pixel-border-2 border-b-4 border-primary bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
          {/* Left: Logo/Handle */}
          <Link
            to="/"
            ref={(el) => registerTarget(el)}
            className="font-pixel text-xs md:text-sm hover:text-primary transition-all"
            style={{
              opacity: logoOpacity,
              textShadow: `0 0 ${logoGlow}px rgba(0,255,136,0.85)`,
            }}
          >
            &lt; KHOA.SYS &gt;
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="font-mono text-xs uppercase tracking-widest text-foreground hover:text-primary hover:neon-primary transition-all duration-100 group"
              >
                <span className="group-hover:text-primary">▶</span> {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden font-pixel text-xs text-primary hover:text-secondary transition-colors"
          >
            {menuOpen ? '✕ CLOSE' : '☰ MENU'}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden border-t-2 border-primary bg-card px-4 py-4 space-y-3 animate-slide-up">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block font-mono text-xs uppercase tracking-widest text-foreground hover:text-primary transition-all"
                onClick={() => setMenuOpen(false)}
              >
                ▶ {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10">{children}</main>

      {/* === GAME UI FOOTER === */}
      <footer className="pixel-border-3 border-t-4 border-primary bg-card text-foreground py-6 md:py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-2">
            <p className="font-mono text-xs md:text-sm text-foreground uppercase tracking-wider">
              &gt; SYSTEM SIGNATURE
            </p>
            <p className="text-muted-foreground text-xs md:text-sm font-mono">
              © {new Date().getFullYear()} KHOA.SYS // CRAFTED WITH{' '}
              <span className="text-primary neon-primary">♥</span> // BUILT FOR FUTURE
            </p>
            <div className="flex justify-center gap-4 pt-3">
              <a
                href="https://github.com/KayHo412"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-foreground hover:text-primary transition-colors"
              >
                [GITHUB]
              </a>
              <a
                href="https://www.linkedin.com/in/khoa-phan-ho-75771b2a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-foreground hover:text-primary transition-colors"
              >
                [LINKEDIN]
              </a>
              <a
                href="mailto:khoaphan412@gmail.com"
                className="text-xs font-mono text-foreground hover:text-primary transition-colors"
              >
                [EMAIL]
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <RewardSystemProvider>
      <LayoutContent>{children}</LayoutContent>
    </RewardSystemProvider>
  );
};

export default Layout;
