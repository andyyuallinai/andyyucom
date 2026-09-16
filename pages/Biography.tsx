import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Biography: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto pt-24 pb-16 px-6 lg:px-0 fade-in">
      <header className="mb-16">
        <span className="block text-xs font-sans tracking-[0.2em] text-gray-400 uppercase mb-4">{t.bio.label}</span>
        <h1 className="text-5xl lg:text-7xl font-display text-ink-black tracking-tight leading-none mb-8">
          {t.bio.titleLine1} <br /> <span className="italic font-serif font-light text-gray-600">{t.bio.titleLine2}</span>
        </h1>
        <div className="h-px w-24 bg-ink-black mt-8"></div>
      </header>

      <div className="prose prose-lg prose-neutral font-serif text-gray-700 leading-relaxed">
        <p className="text-xl leading-9 mb-8 text-black font-light antialiased">
          {t.bio.p1}
        </p>
        
        <p className="mb-6">
          {t.bio.p2}
        </p>

        <div className="my-12">
           <img 
             src="https://raw.githubusercontent.com/andyyuallinai/andyyucom/main/662108aa855efc523e6b1ff94d4d7a30.jpg" 
             alt="Mr. Yu Portrait" 
             className="w-full h-auto object-cover filter grayscale transition-all duration-700 ease-in-out hover:grayscale-0"
           />
        </div>

        <p className="mb-6">
          {t.bio.p3}
        </p>

        <p className="mb-6">
          {t.bio.p4}
        </p>

        <p className="mb-6">
          {t.bio.p5}
        </p>

        <div className="mt-12 p-8 bg-gray-50 border-l-2 border-ink-black">
          <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">{t.bio.mottoTitle}</h3>
          <p className="text-xl font-serif italic text-ink-black">
            {t.bio.mottoText}
          </p>
        </div>
      </div>
      
      <div className="mt-24 pt-8 border-t border-gray-100 flex justify-between items-end">
        <img src="https://picsum.photos/100/50?grayscale&blur=2" alt="Signature" className="h-12 opacity-50" />
      </div>
    </div>
  );
};

export default Biography;
