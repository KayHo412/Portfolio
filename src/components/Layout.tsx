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
      <footer className="relative z-10 glass-dark border-t border-primary/10 py-12 px-4 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-muted-foreground text-sm leading-relaxed">
              © {new Date().getFullYear()} Khoa Ho. Crafted with{' '}
              <span className="text-primary font-semibold">♥</span> using modern web technologies
            </p>
            <p className="text-muted-foreground/70 text-xs mt-3 font-medium">
              Building elegant solutions, one pixel at a time
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
