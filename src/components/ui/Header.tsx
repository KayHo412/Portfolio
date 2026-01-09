import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import { NAVIGATION_ITEMS } from '../../constants/navigation';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isActivePath = useCallback((path: string) => location.pathname === path, [location.pathname]);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const handleNavClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-card/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        } ${className}`}
      >
        <div className="w-full">
          <div className="flex items-center justify-between h-16 px-4 lg:px-8">
            <Link
              to="/"
              className="flex items-center space-x-3 group"
              onClick={handleNavClick}
            >
              <div className="hidden sm:block">
                <h1 className="text-xl font-orbitron font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Khoa's Digital Playground
                </h1>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-md font-rajdhani font-semibold text-sm transition-all duration-300 group ${
                    isActivePath(item.path)
                      ? 'text-primary' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <Icon name={item.icon} size={18} />
                    <span>{item.label}</span>
                  </span>
                  {isActivePath(item.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary neon-glow-primary" />
                  )}
                  <span className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300" />
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                iconName="Download"
                iconPosition="left"
                className="border-accent text-accent hover:bg-accent/10"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Portfolio/KhoaHo_CV.docx';
                  link.download = 'KhoaHo_CV.docx';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download CV
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="Github"
                iconPosition="left"
                className="border-secondary text-secondary hover:bg-secondary/10"
              >
                GitHub
              </Button>
              <Button
                size="sm"
                iconName="Mail"
                iconPosition="left"
                className="bg-cta hover:bg-cta/90 text-cta-foreground neon-glow-cta"
              >
                Let's Connect
              </Button>
            </div>

            <button
              onClick={handleMobileMenuToggle}
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-md"
            onClick={handleMobileMenuToggle}
          />
          <nav className="relative h-full flex flex-col pt-20 px-6 overflow-y-auto animate-slide-in-right">
            <div className="flex flex-col space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-rajdhani font-semibold text-lg transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'bg-primary/20 text-primary neon-glow-primary' :'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <Icon name={item.icon} size={24} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border space-y-3">
              <Button
                variant="outline"
                fullWidth
                iconName="Download"
                iconPosition="left"
                className="border-accent text-accent hover:bg-accent/10"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Portfolio/KhoaHo_CV.docx';
                  link.download = 'KhoaHo_CV.docx';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download CV
              </Button>
              <Button
                variant="outline"
                fullWidth
                iconName="Github"
                iconPosition="left"
                className="border-secondary text-secondary hover:bg-secondary/10"
              >
                GitHub Profile
              </Button>
              <Button
                fullWidth
                iconName="Mail"
                iconPosition="left"
                className="bg-cta hover:bg-cta/90 text-cta-foreground neon-glow-cta"
              >
                Let's Connect
              </Button>
            </div>

            <div className="mt-auto pt-8 pb-6">
              <div className="flex items-center justify-center space-x-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Icon name="Github" size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-secondary transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Icon name="Linkedin" size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Icon name="Twitter" size={24} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;