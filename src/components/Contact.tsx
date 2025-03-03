
import React from 'react';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-terminal-darker/30">
      <div className="container mx-auto">
        <h2 className="section-heading">Contact</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="terminal-glass p-6">
            <div className="terminal-header mb-4">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="ml-2 text-xs font-mono text-terminal-text/60">contact.sh</span>
            </div>
            
            <div className="code-block mb-6">
              <div className="text-terminal-green mb-2"># Get in touch</div>
              <div className="text-terminal-orange">$ cat contact_info.md</div>
              <div className="mt-2">
                <p className="text-terminal-text">Feel free to reach out if you'd like to discuss potential research collaborations, projects, or just want to connect!</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <a 
                href="mailto:tsaidheeraj@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-terminal-black/20 border border-terminal-highlight/10 hover:border-terminal-highlight/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-terminal-highlight/10 flex items-center justify-center text-terminal-highlight">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-terminal-highlight font-medium mb-1">Email</h3>
                  <p className="text-sm text-terminal-text">tsaidheeraj@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="http://bit.ly/DheerajLinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-terminal-black/20 border border-terminal-highlight/10 hover:border-terminal-highlight/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-terminal-highlight/10 flex items-center justify-center text-terminal-highlight">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-terminal-highlight font-medium mb-1">LinkedIn</h3>
                  <p className="text-sm text-terminal-text">Connect with me</p>
                </div>
              </a>
              
              <a 
                href="tel:+19254049856"
                className="flex items-center gap-4 p-4 rounded-lg bg-terminal-black/20 border border-terminal-highlight/10 hover:border-terminal-highlight/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-terminal-highlight/10 flex items-center justify-center text-terminal-highlight">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-terminal-highlight font-medium mb-1">Phone</h3>
                  <p className="text-sm text-terminal-text">+1 (925) 404-9856</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-terminal-black/20 border border-terminal-highlight/10">
                <div className="w-12 h-12 rounded-full bg-terminal-highlight/10 flex items-center justify-center text-terminal-highlight">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-terminal-highlight font-medium mb-1">Location</h3>
                  <p className="text-sm text-terminal-text">Dublin, CA, 94568</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
