
import React from 'react';
import { Book } from 'lucide-react';

const ReadingList = () => {
  const books = [
    {
      title: "1984",
      author: "George Orwell",
      description: "A dystopian classic that explores themes of totalitarianism, mass surveillance, and repressive regimentation."
    },
    {
      title: "The Museum of Failures",
      author: "Samuel West",
      description: "A collection of innovation failures and what we can learn from them to create successful products."
    },
    {
      title: "In Our Defense",
      author: "Ellen Alderman & Caroline Kennedy",
      description: "An exploration of the Bill of Rights and the people whose cases helped define our fundamental rights."
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      description: "An analysis of the two different systems that drive the way we think and make decisions."
    },
    {
      title: "The Code Breaker",
      author: "Walter Isaacson",
      description: "The story of Jennifer Doudna, Nobel Prize winner for her work on CRISPR gene editing technology."
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      description: "A journey through the history of the human species, from ancient humans to the present day."
    }
  ];

  return (
    <section id="reading" className="py-20 px-4 bg-terminal-darker/30">
      <div className="container mx-auto">
        <h2 className="section-heading">Reading List</h2>
        
        <div className="terminal-glass p-6">
          <div className="terminal-header mb-4">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="ml-2 text-xs font-mono text-terminal-text/60">books.json</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div 
                key={index} 
                className="p-4 border border-terminal-highlight/10 rounded-lg bg-terminal-black/20 flex flex-col"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Book className="h-5 w-5 mt-1 text-terminal-highlight flex-shrink-0" />
                  <div>
                    <h3 className="text-terminal-highlight font-medium mb-1">{book.title}</h3>
                    <p className="text-sm text-terminal-muted mb-2">by {book.author}</p>
                  </div>
                </div>
                <p className="text-xs text-terminal-text/80 mt-auto">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadingList;
