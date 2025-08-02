import React from 'react';
import Layout from '../components/Layout';
import Terminal from '../components/Terminal';
import About from '../components/About';
import Flashcards from '../components/Flashcards';
import Education from '../components/Education';
import Career from '../components/Career';
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
          title: 'Data Analytics Intern',
          company: 'Kaiser Permanente',
          period: 'June 2025 - August 2025',
          description: [
            '1/200 NCAL high school students to be selected for the KP LAUNCH internship program (~5% acceptance rate)'
          ]
        },
        {
          title: 'EMG-Based Gesture Recognition',
          company: 'Independent Research',
          period: '2023',
          description: [
            'Conducted independent research on multichannel EMG signals for accurate hand gesture recognition using advanced ML techniques.',
            'Developed a system achieving 97.8% accuracy using Random Forest models with wavelet transform features.',
            'Created a real-time gesture recognition framework capable of distinguishing between 6 distinct hand movements.',
            'Demonstrated potential applications in human-computer interfaces and prosthetic control systems.'
          ]
        }
      ]
    },
    {
      title: 'Leadership',
      icon: <Users className="h-4 w-4" />,
      experiences: [
        {
          title: 'CTO',
          company: 'Elderly Care Everywhere',
          period: 'TBD',
          description: [
            'TBD'
          ]
        }
      ]
    },
    {
      title: 'Projects',
      icon: <Award className="h-4 w-4" />,
      experiences: [
        {
          title: 'AceCycle App',
          company: 'AceCycle Initiative',
          period: '2024',
          description: [
            'Co-developed a machine learning powered app that tracks carbon footprint and suggests personalized sustainability actions for users.',
            'Implemented ML algorithms to analyze user behavior patterns and provide tailored eco-friendly recommendations.',
            'Created features to visualize environmental impact metrics and gamify sustainability goals for 500+ users.',
            'Website: acecycle.org'
          ]
        },
        {
          title: 'Space Safety Vision System',
          company: 'Stellar Hacks Hackathon',
          period: '2023',
          description: [
            'Engineered an advanced computer vision platform enhancing astronaut safety during extravehicular activities in space.',
            'Developed neural network architecture capable of real-time detection and highlighting of microscopic hazardous particles.',
            'Integrated image enhancement algorithms to improve visibility in extreme lighting conditions encountered in orbit.',
            'Designed early warning system reducing risk factors for spacewalking astronauts by identifying approaching debris.'
          ]
        },
        {
          title: 'Precision Cosine Algorithm',
          company: 'Collaboration with Professor Alain Olavarrieta, Las Positas College',
          period: '2024',
          description: [
            'Developed a Python algorithm calculating cosine values to 15 decimal places using Taylor/Maclaurin series foundations.',
            'Researched mathematical series applications and their real-world correlations to enhance algorithm efficiency.',
            'Implemented rigorous testing methodologies to validate computational accuracy within system limitations.',
            'Gained valuable experience in advanced mathematical concepts, research methods, and collaborative development.'
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
      <Career />
      <Skills />
      <Awards />
      <Contact />
    </Layout>
  );
};

export default Index;
