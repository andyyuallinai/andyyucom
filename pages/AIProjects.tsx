import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import { ExternalLink } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import { descriptionsByLang } from '../data/descriptions';
import { pickLoc } from '../types';

const AIProjects: React.FC = () => {
  const { t, language } = useLanguage();
  const descriptions = descriptionsByLang[language] ?? descriptionsByLang.en;

  return (
    <div className="max-w-4xl mx-auto pt-24 pb-16 px-6 lg:px-12 fade-in">
      <header className="mb-20 text-center">
         <h1 className="text-5xl font-display uppercase tracking-widest mt-4">{t.aiProjects.header}</h1>
      </header>

      <div className="space-y-24">
        {projectCategories.map((category) => {
          const items = projects.filter((p) => p.category === category.id);
          if (items.length === 0) return null;
          return (
            <section key={category.id}>
              <h2 className="text-sm font-sans font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">
                {pickLoc(category.label, language)}
              </h2>
              <div className="space-y-20">
                {items.map((project) => (
                  <div key={project.id} className="border-t border-gray-100 pt-12">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 gap-4">
                      <div>
                        <div className="flex items-center flex-wrap gap-3 mb-2">
                          <h3 className="text-3xl font-display uppercase tracking-widest text-ink-black">{project.name}</h3>
                          <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase border border-ink-black text-ink-black px-2 py-0.5">
                            LIVE
                          </span>
                          {project.badges?.map((badge, i) => (
                            <span key={i} className="text-[10px] font-sans tracking-[0.2em] uppercase border border-gray-300 text-gray-500 px-2 py-0.5">
                              {pickLoc(badge, language)}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm font-sans tracking-[0.2em] text-gray-500 uppercase">{project.role}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2">
                        {project.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-sans tracking-wider text-ink-black hover:text-gray-500 transition-colors border-b border-ink-black hover:border-gray-500 pb-1"
                          >
                            {link.displayUrl} <ExternalLink size={14} className="ml-2" />
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="prose prose-neutral prose-lg font-serif text-gray-700 leading-relaxed max-w-none
                      prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-normal prose-headings:text-ink-black
                      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                      prose-p:mb-6 prose-p:font-light
                      prose-strong:font-bold prose-strong:text-gray-900
                      prose-ul:list-disc prose-ul:pl-5 prose-ul:space-y-2 prose-ul:my-6
                      prose-li:text-gray-700 prose-li:pl-2">
                      <ReactMarkdown>{descriptions[project.id] ?? descriptionsByLang.en[project.id]}</ReactMarkdown>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default AIProjects;
