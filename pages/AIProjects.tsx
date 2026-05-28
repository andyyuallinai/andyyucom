import React from 'react';
import { AIProject } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import { ExternalLink } from 'lucide-react';

const projects: AIProject[] = [
  {
    id: '1',
    name: 'AdmitOS',
    url: 'https://www.admitos.ai',
    displayUrl: 'www.admitos.ai',
    role: 'Founder / CEO',
    description: `AdmitOS is the operating system for university applications & preparations.

The platform **transforms** the traditional admissions consulting process into an AI-powered execution platform, combining AI agents, structured workflows, and expert human guidance.

**Our mission** is to make the university application and preparation process transparent, structured, and accessible to every student worldwide. **AdmitOS aims** to become the global infrastructure layer for education admissions.

By combining AI agents, data systems, and human expertise, the platform will power the entire lifecycle of academic applications:
* **university admissions**
* **postgraduate applications**
* **international education pathways**

**AdmitOS — The Operating System for University Applications and preparations.**
*AI guidance when you need it.*
*Human expertise when it matters.*`
  },
  {
    id: '2',
    name: 'A Drop Edu',
    url: 'https://www.adropedu.com',
    displayUrl: 'www.adropedu.com',
    role: 'Founder / CEO',
    description: `META SOLUTION TECHNOLOGIES LTD operates under the trading name A Drop Edu, an education service platform based in London providing a range of education-related services including K-12 coding curriculum, academic development programmes, private school counselling, and international education projects. 

The organisation works with schools, education providers and programme partners to deliver innovative education programmes such as coding courses, academic tutoring, and international summer camps designed to equip students with future-ready skills in areas such as algorithms, artificial intelligence, robotics, and digital technologies.`
  },
  {
    id: '3',
    name: 'A Drop Foundation',
    url: 'https://www.adropfoundation.com',
    displayUrl: 'www.adropfoundation.com',
    role: 'Founder / Chairman',
    description: `A Drop Foundation is a UK-based educational charity dedicated to inspiring young people to learn, grow, and contribute positively to society. The foundation focuses on nurturing curiosity, independent thinking, and personal development in the next generation through educational programs, mentorship, and community initiatives.

**Mission**
The foundation’s mission is to empower young people to discover their passions, develop confidence, and pursue meaningful life goals. It aims to encourage students to cultivate an independent mindset, build ai-first mindset, embrace challenges, and build resilience in a rapidly changing global environment. believe in education should be for free.

**Vision**
A Drop Foundation envisions a world where young people are inspired to learn, flourish, and serve their communities, unlocking their potential to make lasting positive contributions to society.

**Key Activities**
The foundation promotes educational and personal development through several initiatives, including:
* Educational programs and mentoring to support student growth and leadership.
* Interview series and thought-leadership content featuring pioneers across disciplines to inspire young people and families.
* Learning initiatives and camps, such as nature-based and experiential education programs.
* Technology and creative learning opportunities, including coding and digital skills training, ai-first.

These activities aim to help students explore their interests, develop critical thinking, and prepare for future academic and professional paths.

**Governance and Structure**
A Drop Foundation operates in the United Kingdom and is registered as a private company limited by guarantee without share capital, a structure commonly used for non-profit organisations.

**Impact Approach**
The foundation focuses on long-term impact by:
* encouraging lifelong learning and intellectual curiosity, ai first mindset
* supporting personal purpose and well-being
* promoting community engagement and social responsibility
* helping young people become confident global citizens`
  },
  {
    id: '4',
    name: 'CreatiCode',
    url: 'https://www.creaticode.com',
    displayUrl: 'www.creaticode.com',
    role: 'Cofounder',
    description: `CreatiCode is an online coding education platform designed to teach programming, artificial intelligence, and game development through an interactive block-based environment. The platform builds on the open-source Scratch programming model but extends it with advanced capabilities such as 3D programming, AI tools, multiplayer features, and database integrations, enabling learners to create more complex projects than traditional beginner coding tools.

**Mission**
CreatiCode aims to make coding and AI education accessible, engaging, and creative for students by combining visual programming with powerful technologies such as 3D engines and AI assistance. The platform encourages students to learn by building interactive projects like games, simulations, and applications.

**Product & Technology**
The platform provides a browser-based coding environment that uses block-based programming, allowing students to construct programs visually instead of typing code. CreatiCode expands on the traditional Scratch model by offering features such as:
* 2D and 3D coding tools for building games and virtual worlds
* AI-assisted coding guidance
* multiplayer programming features
* data storage and integrations
* a project-sharing community where users can create, share, and remix projects

The 3D programming capabilities are built on technologies such as the Babylon.js 3D engine, enabling learners to explore advanced programming concepts in a simplified environment. CreatiCode is an interactive coding education platform that extends block-based programming with AI, 3D development, and collaborative learning tools, helping students move from beginner coding concepts to more advanced software and game development skills.`
  }
];

const AIProjects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto pt-24 pb-16 px-6 lg:px-12 fade-in">
      <header className="mb-20 text-center">
         <h1 className="text-5xl font-display uppercase tracking-widest mt-4">{t.aiProjects.header}</h1>
      </header>

      <div className="space-y-24">
        {projects.map((project) => (
          <div key={project.id} className="border-t border-gray-100 pt-12">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 gap-4">
              <div>
                <h2 className="text-3xl font-display uppercase tracking-widest text-ink-black mb-2">{project.name}</h2>
                <p className="text-sm font-sans tracking-[0.2em] text-gray-500 uppercase">{project.role}</p>
              </div>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-sans tracking-wider text-ink-black hover:text-gray-500 transition-colors border-b border-ink-black hover:border-gray-500 pb-1"
              >
                {project.displayUrl} <ExternalLink size={14} className="ml-2" />
              </a>
            </div>
            
            <div className="prose prose-neutral prose-lg font-serif text-gray-700 leading-relaxed max-w-none
              prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-normal prose-headings:text-ink-black 
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:mb-6 prose-p:font-light
              prose-strong:font-bold prose-strong:text-gray-900
              prose-ul:list-disc prose-ul:pl-5 prose-ul:space-y-2 prose-ul:my-6
              prose-li:text-gray-700 prose-li:pl-2">
              <ReactMarkdown>{project.description}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIProjects;
