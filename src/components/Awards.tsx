
import React from 'react';
import { Award, Medal, Trophy, Beaker } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: 'USACO Gold Division',
      subtitle: 'Top 7% of competitive programmers nationwide',
      icon: <Trophy className="h-5 w-5 text-terminal-highlight" />,
      description: [
        'Achieved elite Gold Division status in the USA Computing Olympiad, a prestigious algorithmic programming competition.',
        'Only 7% of participants advance beyond Silver Division nationwide.',
        'Requires mastery of advanced data structures, dynamic programming, and graph algorithms.'
      ]
    },
    {
      title: 'American Invitational Mathematics Examination (AIME 1)',
      subtitle: 'Scored 10/15',
      icon: <Medal className="h-5 w-5 text-terminal-highlight" />,
    },
    {
      title: 'President\'s Volunteer Service Award',
      subtitle: 'Gold Level',
      icon: <Award className="h-5 w-5 text-terminal-highlight" />,
      description: [
        'Received the highest distinction (Gold) awarded by the President of the United States for exceptional community service.',
        'Required 250+ hours of dedicated volunteer work within a 12-month period.',
        'Recognized for significant impact and sustained commitment to community development.'
      ]
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
                    <p className="text-sm text-terminal-muted mb-2">{award.subtitle}</p>
                  )}
                  {Array.isArray(award.description) ? (
                    <ul className="text-xs text-terminal-text/80 list-disc pl-4 space-y-1">
                      {award.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : award.description ? (
                    <p className="text-xs text-terminal-text/80">{award.description}</p>
                  ) : null}
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
