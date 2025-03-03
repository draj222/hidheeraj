
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
        },
        {
          title: 'Macular Degeneration AI Detection',
          company: 'Collaboration with Georgia Tech PhD Student Aniket Venkatesh',
          period: 'August 2022 - December 2022',
          description: [
            'Implemented ML models for early macular degeneration detection, achieving 94.6% accuracy on validation data.',
            'Developed a diagnostic tool to help identify AMD patients from retinal images at early stages.',
            'Published first-author paper in IJARCCE demonstrating potential for AI-assisted AMD diagnosis.'
          ]
        },
        {
          title: 'Research Intern',
          company: 'UC Berkeley Artificial Intelligence Research (BAIR)',
          period: 'June 2024 - August 2024',
          description: [
            'Analyzed 5K+ poker pre-flop hands',
            'Revealed GPT-4\'s 75% accuracy, 15% over-raise rate, optimizing LLM\'s',
            'First high schooler in team'
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
        },
        {
          title: 'Head of Curriculum Development',
          company: 'Youth Coding Workshops',
          period: 'January 2023 - Present',
          description: [
            'Introduced intense 10-week Python curriculum; tutored 500+ middle schoolers in the Tri-Valley;',
            'Modified 25+ curriculums; developed first AI/ML course.',
          ]
        },
        {
          title: 'Co-President',
          company: 'AceCycle',
          period: 'May 2024 - Present',
          description: [
            'Spearheaded sustainability efforts by donating 450K+ tennis balls to pet stores and recycling facilities.',
            'Co-developed a carbon footprint tracking app with 500+ downloads.',
            'Founded and expanded 5+ chapters globally, raising environmental awareness.'
          ]
        },
        {
          title: 'Executive Director',
          company: 'Engen Learning',
          period: 'June 2023 - Present',
          description: [
            'Enhanced website design, increasing user signups by 30%.',
            'Led 10+ bootcamps and organized global hackathons with 200+ participants.',
            'Secured $10K in sponsorships from leading organizations to fund educational events.'
          ]
        },
        {
          title: 'Middle College Representative',
          company: 'Las Positas College',
          period: 'November 2023 - May 2024',
          description: [
            'Advocated for diversity and equity, organizing 25+ events and addressing food insecurity through 15+ food drives.',
            'Acted as a liaison between students and administration to foster community belonging.'
          ]
        },
        {
          title: 'Assistant Tennis Coach & Tournament Director',
          company: 'Arora Tennis & Fitness',
          period: 'September 2024 - Present',
          description: [
            'Coached 100+ students in weekly classes, improving technical tennis skills.',
            'Directed tournaments with 50+ participants, resolving conflicts and ensuring fair play.'
          ]
        }
      ]
    },
    {
      title: 'Projects',
      icon: <Award className="h-4 w-4" />,
      experiences: [
        {
          title: 'ResearchLink',
          company: 'Phase 1 Research',
          period: '2023',
          description: [
            'Developed a platform connecting students with university professors working on active research projects in their fields of interest.',
            'Implemented a matching algorithm to pair students with professors based on research interests and academic goals.',
            'Created a personalized email generation system allowing users to automatically draft and customize messages to professors.',
            'Designed intuitive interface for students to edit email tone and content before sending to potential research mentors.'
          ]
        },
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
          title: 'QR Code Scanner',
          company: 'Independent Project',
          period: '2023',
          description: [
            'Developed a cross-device QR scanner that allows users to scan codes with mobile devices and open them directly on their computer.',
            'Implemented screen-sharing functionality to automatically detect and process QR codes from camera input.',
            'Created seamless link-opening system to enhance user experience across devices, eliminating manual transfers.',
            'Utilized computer vision libraries for real-time QR code detection and processing.'
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
        },
        {
          title: 'AI Healthcare Solution',
          company: 'Independent Project',
          period: '2023',
          description: [
            'Developed a machine learning model to predict macular degeneration with high accuracy.',
            'Published a paper on the application of AI in healthcare diagnostics.',
            'Project received a $3K research grant from Czech Technical University.'
          ]
        },
        {
          title: 'Environmental Monitoring System',
          company: 'Research Initiative',
          period: '2022 - 2023',
          description: [
            'Created an ML-powered air quality prediction system.',
            'Published research on environmental monitoring techniques.',
            'Technology designed to support environmental sustainability efforts.'
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
