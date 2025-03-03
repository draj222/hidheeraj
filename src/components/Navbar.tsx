
import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Download, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-terminal-darker/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-terminal-highlight" />
            <span className="font-mono font-semibold text-terminal-highlight">dheeraj@portfolio:~$</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="nav-link">about</a>
            <a href="#experience" className="nav-link">experience</a>
            <a href="#education" className="nav-link">education</a>
            <a href="#skills" className="nav-link">skills</a>
            <a href="#awards" className="nav-link">awards</a>
            <a href="#contact" className="nav-link">contact</a>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="http://bit.ly/DheerajLinkedIn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-terminal-text/80 hover:text-terminal-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:tsaidheeraj@gmail.com" 
              className="text-terminal-text/80 hover:text-terminal-highlight transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="terminal-button flex items-center gap-2"
              aria-label="Download Resume"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </div>
          
          <button 
            className="md:hidden text-terminal-text/80 hover:text-terminal-highlight"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-terminal-darker/95 backdrop-blur-md px-4 py-4 space-y-4 border-t border-terminal-highlight/10">
          <a href="#about" className="nav-link block py-2" onClick={closeMenu}>about</a>
          <a href="#experience" className="nav-link block py-2" onClick={closeMenu}>experience</a>
          <a href="#education" className="nav-link block py-2" onClick={closeMenu}>education</a>
          <a href="#skills" className="nav-link block py-2" onClick={closeMenu}>skills</a>
          <a href="#awards" className="nav-link block py-2" onClick={closeMenu}>awards</a>
          <a href="#contact" className="nav-link block py-2" onClick={closeMenu}>contact</a>
          
          <div className="flex items-center gap-4 pt-2">
            <a 
              href="http://bit.ly/DheerajLinkedIn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-terminal-text/80 hover:text-terminal-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:tsaidheeraj@gmail.com" 
              className="text-terminal-text/80 hover:text-terminal-highlight transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="terminal-button flex items-center gap-2"
              aria-label="Download Resume"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
