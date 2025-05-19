
import React from 'react';
import { FileSearch, FileText, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Career = () => {
  const careerActivities = [
    {
      title: "Data Science Research Workshop",
      description: "Participated in a 2-week intensive workshop at Stanford University focusing on machine learning algorithms and their applications in predictive analytics. Worked with real-world datasets to develop models for consumer behavior prediction.",
      icon: <FileSearch className="h-5 w-5 text-terminal-highlight" />,
      skills: ["Python for Data Analysis", "Machine Learning Fundamentals", "Statistical Modeling"],
      insights: "This workshop confirmed my interest in pursuing data science as a career path. I was particularly drawn to how data scientists combine technical skills with domain knowledge to extract meaningful insights.",
    },
    {
      title: "Analytics Intern at Local Tech Startup",
      description: "Volunteered as a data analytics intern at a local startup, helping to organize and analyze customer feedback data. Created visualization dashboards that helped the team identify key areas for product improvement.",
      icon: <Users className="h-5 w-5 text-terminal-highlight" />,
      skills: ["Data Visualization", "SQL Querying", "Business Intelligence"],
      insights: "Working in a fast-paced startup environment showed me how data-driven decision making can directly impact a company's growth. This experience strengthened my resolve to develop expertise in both technical and communication skills.",
    },
    {
      title: "Data Science Career Panel Coordinator",
      description: "Organized and moderated a career panel at Las Positas College featuring professionals from various data science roles. Connected with industry experts from companies like Google, Netflix, and local data consultancies.",
      icon: <FileText className="h-5 w-5 text-terminal-highlight" />,
      skills: ["Event Planning", "Professional Networking", "Public Speaking"],
      insights: "Coordinating this event allowed me to gain deeper insights into the diverse career paths within data science. I learned about the importance of continuous learning and specialization in this rapidly evolving field.",
    },
  ];

  return (
    <section id="career" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-heading">Career Exploration</h2>
        
        <div className="terminal-glass p-6">
          <div className="terminal-header mb-4">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="ml-2 text-xs font-mono text-terminal-text/60">career-exploration.md</span>
          </div>
          
          <p className="text-terminal-text mb-8">
            My exploration into data science and analytics has been driven by a passion for uncovering insights from complex datasets 
            and using those findings to solve real-world problems. Below are some key experiences that have shaped my career interests:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {careerActivities.map((activity, index) => (
              <Card key={index} className="bg-terminal-black/30 border-terminal-highlight/10">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {activity.icon}
                    <CardTitle className="text-terminal-highlight text-lg">{activity.title}</CardTitle>
                  </div>
                  <CardDescription className="text-terminal-text/80 line-clamp-2">
                    {activity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-terminal-green mb-2">Skills Gained:</h4>
                    <div className="flex flex-wrap gap-2">
                      {activity.skills.map((skill, i) => (
                        <span key={i} className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-terminal-highlight/10 text-terminal-highlight">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-terminal-green mb-2">Key Insights:</h4>
                    <p className="text-sm text-terminal-text/80">{activity.insights}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-terminal-darker/50 rounded-md border border-terminal-highlight/10">
            <h3 className="text-terminal-highlight font-mono text-sm mb-2">Career Objectives</h3>
            <p className="text-sm text-terminal-text/90">
              My career exploration has solidified my interest in pursuing data science roles that combine 
              analytical techniques with domain expertise. I'm particularly interested in how data can be leveraged 
              to improve decision-making processes and create more efficient, user-centered products and services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
