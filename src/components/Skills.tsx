
import React from 'react';
import { Code, LineChart, Users, Cpu, Globe, Terminal, FileText } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: 'Python', prefix: '→' },
        { name: 'Java', prefix: '→' },
        { name: 'JavaScript', prefix: '→' },
        { name: 'HTML/CSS', prefix: '→' },
        { name: 'C++', prefix: '→' },
        { name: 'C', prefix: '→' },
        { name: 'TypeScript', prefix: '→' },
        { name: 'C#', prefix: '→' },
        { name: 'Swift', prefix: '→' }
      ]
    },
    {
      title: 'Web Development',
      icon: <Globe className="h-5 w-5" />,
      skills: [
        { name: 'React.js', prefix: '→' },
        { name: 'Next.js', prefix: '→' },
        { name: 'Tailwind CSS', prefix: '→' },
        { name: 'Bootstrap', prefix: '→' },
        { name: 'Responsive Design', prefix: '→' }
      ]
    },
    {
      title: 'Machine Learning',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        { name: 'Neural Networks', prefix: '→' },
        { name: 'Computer Vision', prefix: '→' },
        { name: 'NLP', prefix: '→' },
        { name: 'TensorFlow', prefix: '→' },
        { name: 'PyTorch', prefix: '→' },
        { name: 'Data Analysis', prefix: '→' },
        { name: 'Model Training', prefix: '→' },
        { name: 'Data Preprocessing', prefix: '→' }
      ]
    },
    {
      title: 'Development Tools',
      icon: <Terminal className="h-5 w-5" />,
      skills: [
        { name: 'Git', prefix: '→' },
        { name: 'Visual Studio Code', prefix: '→' },
        { name: 'IntelliJ', prefix: '→' },
        { name: 'CLion', prefix: '→' },
        { name: 'PyCharm', prefix: '→' },
        { name: 'Unity', prefix: '→' },
        { name: 'MATLAB', prefix: '→' }
      ]
    },
    {
      title: 'Other Skills',
      icon: <FileText className="h-5 w-5" />,
      skills: [
        { name: 'Research Methodology', prefix: '→' },
        { name: 'Technical Writing', prefix: '→' },
        { name: 'Public Speaking', prefix: '→' },
        { name: 'Leadership', prefix: '→' },
        { name: 'Project Management', prefix: '→' },
        { name: 'Statistical Analysis', prefix: '→' },
        { name: 'Curriculum Development', prefix: '→' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-20 px-4 bg-terminal-darker/30">
      <div className="container mx-auto">
        <h2 className="section-heading">Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="terminal-glass p-4 md:p-5 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-md bg-terminal-highlight/10 flex items-center justify-center text-terminal-highlight">
                  {category.icon}
                </div>
                <h3 className="text-terminal-highlight font-mono text-base">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center">
                    <span className="text-terminal-highlight/80 font-mono text-sm mr-2">{skill.prefix}</span>
                    <span className="text-terminal-text text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
