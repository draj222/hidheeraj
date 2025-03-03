
import React, { useState, useEffect } from 'react';
import { ArrowDown, Terminal as TerminalIcon, Mail, Linkedin, Github } from 'lucide-react';

const Terminal = () => {
  const [displayText, setDisplayText] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);
  const [showArrow, setShowArrow] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  
  const fullText = "Dheeraj Tallapragada\nData Science & ML Enthusiast\nFounder, Researcher, Leader";

  useEffect(() => {
    if (cursorPosition < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, cursorPosition + 1));
        setCursorPosition(cursorPosition + 1);
      }, cursorPosition === 0 ? 1000 : Math.random() * 50 + 30);
      
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setShowLinks(true);
        setShowArrow(true);
      }, 500);
      
      return () => clearTimeout(timeout);
    }
  }, [cursorPosition]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-16 pb-8 px-4">
      <div className="terminal-window w-full max-w-3xl mx-auto mb-8">
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
          <span className="ml-2 text-xs font-mono text-terminal-text/60">dheeraj@portfolio:~</span>
        </div>
        <div className="terminal-content min-h-[320px] flex flex-col">
          <div className="flex-grow flex flex-col justify-center">
            <div className="mb-2 text-terminal-green">
              <span>dheeraj@portfolio:~$ </span>
              <span className="text-terminal-text">whoami</span>
            </div>
            
            <div className="text-4xl md:text-5xl font-semibold text-terminal-text space-y-4 my-6">
              {displayText.split('\n').map((line, index) => (
                <div 
                  key={index} 
                  className={`
                    opacity-0 
                    ${index === 0 ? 'text-terminal-highlight' : index === 1 ? 'text-terminal-text' : 'text-terminal-green'} 
                    ${index === 0 && cursorPosition > 0 ? 'animate-fade-in' : ''}
                    ${index === 1 && cursorPosition > displayText.indexOf('\n') + 1 ? 'animate-fade-in' : ''}
                    ${index === 2 && cursorPosition > displayText.lastIndexOf('\n') + 1 ? 'animate-fade-in' : ''}
                  `}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {line}
                  {index === displayText.split('\n').length - 1 && 
                   cursorPosition === fullText.length && 
                   <span className="animate-cursor-blink">_</span>}
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className={`flex flex-wrap justify-center gap-4 mt-6 transition-opacity duration-500 ${showLinks ? 'opacity-100' : 'opacity-0'}`}>
              <a 
                href="mailto:tsaidheeraj@gmail.com" 
                className="social-button bg-blue-500 hover:bg-blue-600 transition-colors text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium"
                aria-label="Contact Me"
              >
                <Mail className="h-5 w-5" />
                <span>Contact Me</span>
              </a>
              
              <a 
                href="http://bit.ly/DheerajLinkedIn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button bg-gray-100 hover:bg-gray-200 transition-colors text-gray-800 px-6 py-3 rounded-lg flex items-center gap-2 font-medium"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/draj222" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button bg-gray-100 hover:bg-gray-200 transition-colors text-gray-800 px-6 py-3 rounded-lg flex items-center gap-2 font-medium"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </div>
            
            <div className="mt-6 text-terminal-muted opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
              <span>dheeraj@portfolio:~$ </span>
              <span className="typing-container">
                cat portfolio.txt | more
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`flex justify-center transition-opacity duration-1000 ${showArrow ? 'opacity-100' : 'opacity-0'}`}>
        <a 
          href="#about" 
          className="animate-bounce flex flex-col items-center text-terminal-text/60 hover:text-terminal-highlight transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm font-mono mb-2">scroll down</span>
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default Terminal;
