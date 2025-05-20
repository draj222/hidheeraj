
import React from 'react';
import { FileSearch, FileText, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Career = () => {
  const careerActivities = [
    {
      title: "InspiritAI",
      description: "Participated in an intensive AI program focused on applying machine learning to real-world problems. Worked on projects involving predictive analytics and natural language processing, gaining hands-on experience with various AI frameworks and methodologies.",
      icon: <FileSearch className="h-5 w-5 text-terminal-highlight" />,
      skills: ["Machine Learning", "Python", "Data Analysis"],
      insights: "This program solidified my interest in AI and data science, particularly how these technologies can be applied to solve complex real-world problems. The collaborative environment helped me develop both technical and communication skills essential for the field.",
    },
    {
      title: "Data C8 @ UC Berkeley",
      description: "Completed UC Berkeley's renowned data science foundation course focusing on computational and inferential thinking. Worked with real datasets to develop statistical models and data visualizations that provided actionable insights.",
      icon: <FileText className="h-5 w-5 text-terminal-highlight" />,
      skills: ["Statistical Analysis", "Data Visualization", "Python Programming"],
      insights: "This course exposed me to the rigorous methodologies used in academic data science research. I gained valuable experience in how to properly structure data analysis workflows and communicate findings to both technical and non-technical audiences.",
    },
    {
      title: "AI Developer at Local Tech Startup",
      description: "Worked as a part-time AI developer at a local technology startup, contributing to the development of machine learning models for customer behavior analysis and product recommendation systems.",
      icon: <Users className="h-5 w-5 text-terminal-highlight" />,
      skills: ["AI Model Development", "Algorithm Optimization", "Software Engineering"],
      insights: "This hands-on experience in a startup environment taught me the importance of balancing theoretical knowledge with practical implementation. I learned how to deploy AI solutions that not only perform well technically but also address real business needs effectively.",
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
            My exploration into data science and artificial intelligence has been driven by a passion for extracting meaningful insights 
            from data and developing intelligent systems. Below are some key experiences that have shaped my career interests:
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
              My career exploration has solidified my interest in pursuing data science and AI roles that combine 
              analytical techniques with innovative applications. I'm particularly interested in how AI and data science 
              can drive decision-making and create impactful solutions across various industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;

