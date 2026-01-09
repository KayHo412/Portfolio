import React from 'react';
import Header from './ui/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 relative z-10">{children}</main>
      <footer className="relative z-10 bg-card border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground font-fira-code text-sm">
            © {new Date().getFullYear()} Khoa's Digital Playground. Crafted with{' '}
            <span className="text-primary">♥</span> and{' '}
            <span className="text-secondary">code</span>
          </p>
          <p className="text-muted-foreground font-fira-code text-xs mt-2">
            Smashing bugs and serving solutions, one commit at a time
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
