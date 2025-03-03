
import React from 'react';
import { Award, Medal, Trophy, Beaker } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: 'USACO Gold Division',
      icon: <Trophy className="h-5 w-5 text-terminal-highlight" />,
    },
    {
      title: 'American Invitational Mathematics Examination (AIME) Qualifier',
      subtitle: 'Scored 105/150',
      icon: <Medal className="h-5 w-5 text-terminal-highlight" />,
    },
    {
      title: 'President\'s Volunteer Service Award',
      subtitle: 'Gold',
      icon: <Award className="h-5 w-5 text-terminal-highlight" />,
    },
    {
      title: '$3K Research Grant',
      subtitle: 'Issued by Czech Technical University in Prague',
      icon: <Beaker className="h-5 w-5 text-terminal-highlight" />,
    },
    {
      title: 'Google-Sponsored Hackathon (Stellar Hacks)',
      subtitle: '1st Place ($2,000)',
      icon: <Trophy className="h-5 w-5 text-terminal-highlight" />,
    },
  ];

  return (
    <section id="awards" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-heading">Awards & Certifications</h2>
        
        <div className="terminal-glass p-6">
          <div className="terminal-header mb-4">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="ml-2 text-xs font-mono text-terminal-text/60">awards.json</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div 
                key={index} 
                className="p-4 border border-terminal-highlight/10 rounded-lg bg-terminal-black/20 flex items-start gap-4"
              >
                <div className="mt-1">
                  {award.icon}
                </div>
                <div>
                  <h3 className="text-terminal-highlight font-medium mb-1">{award.title}</h3>
                  {award.subtitle && (
                    <p className="text-sm text-terminal-muted">{award.subtitle}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
