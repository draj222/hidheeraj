
import React from 'react';
import { GraduationCap, School } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-heading">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="terminal-glass p-6">
            <div className="terminal-header mb-4">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="ml-2 text-xs font-mono text-terminal-text/60">education.json</span>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <School className="text-terminal-highlight h-5 w-5" />
                  <h3 className="text-lg font-mono text-terminal-highlight">Dublin High School</h3>
                </div>
                <div className="ml-8">
                  <p className="text-terminal-muted text-sm">Dublin, CA</p>
                  <div className="flex justify-between my-1">
                    <p className="text-terminal-text">Senior (12th grade)</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <School className="text-terminal-highlight h-5 w-5" />
                  <h3 className="text-lg font-mono text-terminal-highlight">Las Positas College</h3>
                </div>
                <div className="ml-8">
                  <p className="text-terminal-muted text-sm">Livermore, CA</p>
                  <div className="flex justify-between my-1">
                    <p className="text-terminal-text">1/70 students selected for TVROP middle college program</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-terminal-highlight h-5 w-5" />
                  <h3 className="text-lg font-mono text-terminal-highlight">University of California, Berkeley</h3>
                </div>
                <div className="ml-8">
                  <p className="text-terminal-muted text-sm">Berkeley, CA</p>
                  <div className="flex justify-between my-1">
                    <p className="text-terminal-text">Pre-College Summer Scholars</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="terminal-glass p-6">
            <div className="terminal-header mb-4">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="ml-2 text-xs font-mono text-terminal-text/60">coursework.sh</span>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-mono text-terminal-green mb-3">Relevant Coursework</h3>
                <div className="code-block">
                  <div className="text-terminal-text mb-2"><span className="text-terminal-green"># Advanced STEM and Computer Science Courses</span></div>
                  <div className="text-terminal-orange">$ ls -la ~/courses/</div>
                  <div className="text-terminal-text mt-2">
                    <div className="grid grid-cols-1 gap-1">
                      <div className="flex">
                        <span className="text-terminal-blue mr-2">drwxr-xr-x</span> 
                        <span className="text-terminal-green">Data_Science/</span>
                      </div>
                      <div className="flex">
                        <span className="text-terminal-blue mr-2">drwxr-xr-x</span> 
                        <span className="text-terminal-green">Computer_Science/</span>
                      </div>
                      <div className="flex">
                        <span className="text-terminal-blue mr-2">drwxr-xr-x</span> 
                        <span className="text-terminal-green">Calculus/</span>
                      </div>
                      <div className="flex">
                        <span className="text-terminal-blue mr-2">drwxr-xr-x</span> 
                        <span className="text-terminal-green">Advanced_STEM/</span>
                      </div>
                      <div className="flex">
                        <span className="text-terminal-blue mr-2">drwxr-xr-x</span> 
                        <span className="text-terminal-green">Machine_Learning/</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-mono text-terminal-green mb-3">Learning Path</h3>
                <div className="terminal-list-item">
                  Foundation in mathematics and statistics
                </div>
                <div className="terminal-list-item">
                  Advanced computer science principles
                </div>
                <div className="terminal-list-item">
                  Data analysis and visualization techniques
                </div>
                <div className="terminal-list-item">
                  Machine learning algorithms and applications
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
