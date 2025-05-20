
import React from 'react';

const Inspiration = () => {
  const quotes = [
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3"
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3"
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3"
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
                className="overflow-hidden rounded-lg border border-terminal-highlight/10 bg-terminal-black/20"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <img 
                    src={quote.image} 
                    alt={`Image representing quote by ${quote.author}`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-terminal-black/80 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-lg font-medium text-terminal-text italic mb-2 text-shadow-sm">
                        "{quote.text}"
                      </p>
                      <p className="text-right text-terminal-highlight text-shadow-sm">
                        — {quote.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
