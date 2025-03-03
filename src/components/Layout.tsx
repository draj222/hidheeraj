
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-terminal-dark text-terminal-text">
      <Navbar />
      <main>{children}</main>
      
      <footer className="py-8 px-4 border-t border-terminal-highlight/10">
        <div className="container mx-auto text-center">
          <p className="text-sm text-terminal-muted">
            <span className="font-mono">© {new Date().getFullYear()} Dheeraj Tallapragada. All rights reserved.</span>
          </p>
          <p className="mt-2 text-xs font-mono text-terminal-muted/60">
            $ echo "Designed with ❤️ using React & Tailwind"
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
