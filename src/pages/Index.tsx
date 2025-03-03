
import React from 'react';
import Layout from '../components/Layout';
import Terminal from '../components/Terminal';
import About from '../components/About';
import Flashcards from '../components/Flashcards';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Awards from '../components/Awards';
import Contact from '../components/Contact';
import { Briefcase, Award, Beaker, Users } from 'lucide-react';

const Index = () => {
  // Define experience data for flashcards
  const experienceCategories = [
    {
      title: 'Research',
      icon: <Beaker className="h-4 w-4" />,
      experiences: [
        {
          title: 'Air Quality Prediction Research',
          company: 'Collaboration with Stanford Postdoc Marek Miltner',
          period: 'January 2023 - Present',
          description: [
            'Developed deep learning models (LSTM & CNN) for real-time air quality prediction with 99.87-100% accuracy.',
            'Created a framework to detect abnormal air quality patterns for PM2.5 and ozone pollutants.',
            'Received $3K research grant from Czech Technical University in Prague, awaiting publication in Wiley.'
          ]
        }
      ]
    },
    {
      title: 'Leadership',
      icon: <Users className="h-4 w-4" />,
      experiences: [
        {
          title: 'Founder & CEO',
          company: 'Phase 1 Research',
          period: 'February 2024 - Present',
          description: [
            'Established partnerships with T20 alumni and Fortune 500 professionals, mentoring 10,000+ students globally.',
            'Partnered with governments in Mali and India, positively impacting 300,000+ students.',
            'Secured $30K+ in funds to support underprivileged areas, donating resources like computers and books.'
          ]
        }
      ]
    },
    {
      title: 'Projects',
      icon: <Award className="h-4 w-4" />,
      experiences: [
        {
          title: 'AI Healthcare Solution',
          company: 'Independent Project',
          period: '2023',
          description: [
            'Developed a machine learning model to predict macular degeneration with high accuracy.',
            'Published a paper on the application of AI in healthcare diagnostics.',
            'Project received a $3K research grant from Czech Technical University.'
          ]
        }
      ]
    }
  ];

  return (
    <Layout>
      <Terminal />
      <About />
      <Flashcards categories={experienceCategories} />
      <Education />
      <Skills />
      <Awards />
      <Contact />
    </Layout>
  );
};

export default Index;
