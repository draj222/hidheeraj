
import React from 'react';
import { Code, LineChart, Users, Cpu, Globe, Terminal, FileText } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="h-5 w-5" />,
      skills: ['Python', 'Java', 'JavaScript', 'HTML/CSS', 'C++', 'C', 'TypeScript', 'C#', 'Swift']
    },
    {
      title: 'Web Development',
      icon: <Globe className="h-5 w-5" />,
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Design']
    },
    {
      title: 'Machine Learning',
      icon: <Cpu className="h-5 w-5" />,
      skills: ['Neural Networks', 'Computer Vision', 'NLP', 'TensorFlow', 'PyTorch', 'Data Analysis', 'Model Training', 'Data Preprocessing']
    },
    {
      title: 'Development Tools',
      icon: <Terminal className="h-5 w-5" />,
      skills: ['Git', 'Visual Studio Code', 'IntelliJ', 'CLion', 'PyCharm', 'Unity', 'MATLAB']
    },
    {
      title: 'Other Skills',
      icon: <FileText className="h-5 w-5" />,
      skills: ['Research Methodology', 'Technical Writing', 'Public Speaking', 'Leadership', 'Project Management', 'Statistical Analysis', 'Curriculum Development']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-terminal-darker/30">
      <div className="container mx-auto">
        <h2 className="section-heading">Skills</h2>
        
        <div className="terminal-window w-full mb-8">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="ml-2 text-xs font-mono text-terminal-text/60">skills.py</span>
          </div>
          
          <div className="terminal-content">
            <div className="code-block">
              <div className="text-terminal-green mb-2"># Skills Overview</div>
              <div className="text-terminal-blue">class</div> <span className="text-terminal-orange">Skills</span>:
              <div className="ml-4">
                <div className="text-terminal-blue">def</div> <span className="text-terminal-green">__init__</span>(self):
                <div className="ml-4">
                  self.programming_languages = ["Python", "Java", "JavaScript", "HTML/CSS", "C++", "C", "TypeScript", "C#", "Swift"]<br />
                  self.web_development = ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Responsive Design"]<br />
                  self.machine_learning = ["Neural Networks", "Computer Vision", "NLP", "TensorFlow", "PyTorch", "Data Analysis"]<br />
                  self.dev_tools = ["Git", "Visual Studio Code", "IntelliJ", "CLion", "PyCharm", "Unity", "MATLAB"]<br />
                  self.other_skills = ["Research Methodology", "Technical Writing", "Public Speaking", "Leadership", "Project Management"]
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="terminal-glass p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-terminal-highlight/10 flex items-center justify-center text-terminal-highlight">
                  {category.icon}
                </div>
                <h3 className="text-terminal-highlight font-mono">{category.title}</h3>
              </div>
              
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="terminal-list-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
