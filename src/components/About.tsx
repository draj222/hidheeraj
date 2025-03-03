
import React from 'react';
import { User, Mail, MapPin, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="terminal-glass p-6">
              <div className="terminal-header mb-4">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-2 text-xs font-mono text-terminal-text/60">about.md</span>
              </div>
              
              <div className="space-y-4 text-sm">
                <p>
                  Hi! I'm <span className="text-terminal-highlight">Dheeraj</span>, a senior at Dublin High School passionate about Data Science and Machine Learning.
                </p>
                
                <p>
                  Fueled by curiosity and a desire to make an impact, I'm focused on creating data-driven solutions that push boundaries and address real-world challenges. 
                  I've explored machine learning through various research opportunities in areas like web/app development and predictive modeling.
                </p>

                <p>
                  Outside of tech, I'm drawn to literature, sociology, and sports.
                </p>

                <p>
                  I'd be happy to connect—feel free to reach out!
                </p>
                
                <p>
                  <a href="mailto:tsaidheeraj@gmail.com" className="text-terminal-highlight hover:underline transition-colors">
                    tsaidheeraj@gmail.com
                  </a>
                </p>

                <div className="code-block mt-6">
                  <div className="text-terminal-green mb-2">// My mission</div>
                  <div className="text-terminal-text">
                    <span className="text-terminal-blue">const</span> <span className="text-terminal-orange">mission</span> = <span className="text-terminal-green">"To leverage data science and machine learning for creating sustainable, scalable solutions to global challenges."</span>;
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="terminal-glass p-6 h-full">
              <div className="terminal-header mb-4">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-2 text-xs font-mono text-terminal-text/60">contact.json</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 mt-0.5 text-terminal-highlight" />
                  <div>
                    <div className="text-xs text-terminal-muted">Name</div>
                    <div className="font-medium">Dheeraj Tallapragada</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-0.5 text-terminal-highlight" />
                  <div>
                    <div className="text-xs text-terminal-muted">Email</div>
                    <a href="mailto:tsaidheeraj@gmail.com" className="font-medium hover:text-terminal-highlight transition-colors">
                      tsaidheeraj@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-terminal-highlight" />
                  <div>
                    <div className="text-xs text-terminal-muted">Location</div>
                    <div className="font-medium">Dublin, CA, 94568</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-0.5 text-terminal-highlight" />
                  <div>
                    <div className="text-xs text-terminal-muted">Phone</div>
                    <a href="tel:+19254049856" className="font-medium hover:text-terminal-highlight transition-colors">
                      +1 (925) 404-9856
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
