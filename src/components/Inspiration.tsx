
import React from 'react';

const Inspiration = () => {
  const quotes = [
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    }
  ];

  return (
    <section id="inspiration" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-heading">Inspiration</h2>
        
        <div className="terminal-glass p-6">
          <div className="terminal-header mb-4">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="ml-2 text-xs font-mono text-terminal-text/60">quotes.json</span>
          </div>
          
          <div className="grid gap-8">
            {quotes.map((quote, index) => (
              <div 
                key={index} 
                className="p-6 border border-terminal-highlight/10 rounded-lg bg-terminal-black/20"
              >
                <p className="text-lg font-medium text-terminal-text mb-4 italic">"{quote.text}"</p>
                <p className="text-right text-terminal-highlight">— {quote.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
