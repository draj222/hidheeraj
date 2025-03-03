
import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Briefcase, Award, Book, Trash2 } from 'lucide-react';

export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string[];
};

type FlashcardsProps = {
  categories: {
    title: string;
    icon: React.ReactNode;
    experiences: Experience[];
  }[];
};

const Flashcards: React.FC<FlashcardsProps> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (transitioning) return;
    
    const experiences = categories[activeCategory].experiences;
    if (activeIndex < experiences.length - 1) {
      setDirection('next');
      setTransitioning(true);
      setTimeout(() => {
        setActiveIndex(activeIndex + 1);
        setTransitioning(false);
      }, 500);
    }
  };

  const handlePrev = () => {
    if (transitioning) return;
    
    if (activeIndex > 0) {
      setDirection('prev');
      setTransitioning(true);
      setTimeout(() => {
        setActiveIndex(activeIndex - 1);
        setTransitioning(false);
      }, 500);
    }
  };

  const handleCategoryChange = (index: number) => {
    if (transitioning || index === activeCategory) return;
    
    setDirection('next');
    setTransitioning(true);
    setTimeout(() => {
      setActiveCategory(index);
      setActiveIndex(0);
      setTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    // Reset the container scroll when changing cards
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [activeIndex, activeCategory]);

  return (
    <section id="experience" className="py-20 px-4 bg-terminal-darker/30">
      <div className="container mx-auto">
        <h2 className="section-heading">Experience</h2>
        
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors font-mono text-sm ${
                activeCategory === index 
                  ? 'bg-terminal-highlight text-terminal-black' 
                  : 'bg-terminal-darker text-terminal-highlight border border-terminal-highlight/20 hover:bg-terminal-highlight/10'
              }`}
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </div>
        
        <div className="card-container relative min-h-[400px] mb-8">
          {categories[activeCategory].experiences.map((exp, index) => {
            let className = "flashcard-wrapper absolute inset-0 opacity-0 pointer-events-none";
            
            if (index === activeIndex) {
              className = "flashcard-wrapper absolute inset-0 z-10";
              if (transitioning) {
                className += " discarded";
              }
            } else if (direction === 'next' && index === activeIndex + 1) {
              className = "flashcard-wrapper absolute inset-0 z-0";
              if (transitioning) {
                className += " next";
              }
            } else if (direction === 'prev' && index === activeIndex - 1) {
              className = "flashcard-wrapper absolute inset-0 z-0";
              if (transitioning) {
                className += " next";
              }
            }
            
            return (
              <div key={`${activeCategory}-${index}`} className={className}>
                <div className="flashcard h-full">
                  <div className="terminal-header mb-4">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="ml-2 text-xs font-mono text-terminal-text/60">
                      {categories[activeCategory].title.toLowerCase()}/{index + 1}.md
                    </span>
                  </div>
                  
                  <div className="h-full overflow-y-auto pr-2" ref={containerRef}>
                    <h3 className="font-mono text-lg text-terminal-highlight mb-1">{exp.title}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-terminal-green font-medium">{exp.company}</p>
                      <p className="text-terminal-muted text-sm">{exp.period}</p>
                    </div>
                    
                    <ul className="space-y-3 text-sm">
                      {exp.description.map((item, i) => (
                        <li key={i} className="terminal-list-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm font-mono text-terminal-muted">
            {activeIndex + 1} / {categories[activeCategory].experiences.length}
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0 || transitioning}
              className="p-2 rounded-md bg-terminal-darker text-terminal-text/80 hover:text-terminal-highlight disabled:opacity-50 disabled:pointer-events-none transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button
              onClick={handleNext}
              disabled={activeIndex === categories[activeCategory].experiences.length - 1 || transitioning}
              className="p-2 rounded-md bg-terminal-darker text-terminal-text/80 hover:text-terminal-highlight disabled:opacity-50 disabled:pointer-events-none transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flashcards;
