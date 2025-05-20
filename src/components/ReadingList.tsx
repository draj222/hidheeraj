
import React from 'react';
import { BookOpen } from 'lucide-react';

const ReadingList = () => {
  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      description: "A practical guide to building good habits and breaking bad ones. I want to read this to develop better productivity systems and learn actionable techniques for continuous self-improvement."
    },
    {
      title: "The Museum of Failures",
      author: "Samuel West",
      description: "A collection of innovation failures and what we can learn from them. I'm interested in this book to understand how failure contributes to eventual success and to embrace setbacks as learning opportunities."
    },
    {
      title: "In Our Defense",
      author: "Ellen Alderman & Caroline Kennedy",
      description: "An exploration of the Bill of Rights. I want to read this to deepen my understanding of constitutional rights and how they apply to contemporary legal challenges and civic responsibilities."
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      description: "An analysis of the two different systems that drive the way we think. I'm eager to explore how cognitive biases affect decision-making and apply these insights to both my personal life and research work."
    },
    {
      title: "The Code Breaker",
      author: "Walter Isaacson",
      description: "The story of Jennifer Doudna and CRISPR gene editing. As someone interested in biotechnology, I want to understand the ethical implications and revolutionary potential of this technology for medicine and society."
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      description: "A journey through human history. I'm fascinated by how our species evolved from hunter-gatherers to creators of complex societies, and want to gain perspective on our collective future challenges."
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
                  <BookOpen className="h-5 w-5 mt-1 text-terminal-highlight flex-shrink-0" />
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
