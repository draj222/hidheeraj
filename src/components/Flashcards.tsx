
import React, { useState, useEffect } from 'react';
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
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const handleNext = () => {
    if (transitioning || activeCategory === categories.length - 1) return;
    
    setDirection('next');
    setTransitioning(true);
    setTimeout(() => {
      setActiveCategory(activeCategory + 1);
      setTransitioning(false);
    }, 500);
  };

  const handlePrev = () => {
    if (transitioning || activeCategory === 0) return;
    
    setDirection('prev');
    setTransitioning(true);
    setTimeout(() => {
      setActiveCategory(activeCategory - 1);
      setTransitioning(false);
    }, 500);
  };

  const handleCategoryChange = (index: number) => {
    if (transitioning || index === activeCategory) return;
    
    // Set direction based on which category we're moving to
    setDirection(index > activeCategory ? 'next' : 'prev');
    setTransitioning(true);
    setTimeout(() => {
      setActiveCategory(index);
      setTransitioning(false);
    }, 500);
  };

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
        
        <div className="card-container relative min-h-[400px] mb-8 overflow-hidden">
          {/* Render the currently active category */}
          <div className={`flashcard-wrapper absolute inset-0 z-10 ${transitioning ? (direction === 'next' ? 'slide-out-left' : 'slide-out-right') : ''}`}>
            {categories[activeCategory].experiences.length > 0 && (
              <div className="h-full border border-terminal-highlight/10 rounded-md bg-terminal-dark/90 p-6 shadow-lg">
                <h3 className="font-mono text-lg text-terminal-highlight mb-1">
                  {categories[activeCategory].experiences[0].title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <p className="text-terminal-green font-medium">
                    {categories[activeCategory].experiences[0].company}
                  </p>
                  <p className="text-terminal-muted text-sm">
                    {categories[activeCategory].experiences[0].period}
                  </p>
                </div>
                
                <ul className="space-y-3 text-sm">
                  {categories[activeCategory].experiences[0].description.map((item, i) => (
                    <li key={i} className="terminal-list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm font-mono text-terminal-muted">
            {/* Show category position out of total categories */}
            {`${activeCategory + 1}/${categories.length}`}
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={activeCategory === 0 || transitioning}
              className="p-2 rounded-md bg-terminal-darker text-terminal-text/80 hover:text-terminal-highlight disabled:opacity-50 disabled:pointer-events-none transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button
              onClick={handleNext}
              disabled={activeCategory === categories.length - 1 || transitioning}
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
