import React from 'react';
import { CollectionItem } from '../types';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const collections: CollectionItem[] = [
  { id: '1', title: 'Monochrome Studies', count: 12, coverImage: 'https://picsum.photos/800/600?grayscale&random=20' },
  { id: '2', title: 'Organic Matter', count: 8, coverImage: 'https://picsum.photos/800/600?grayscale&random=21' },
  { id: '3', title: 'Tokyo Nights', count: 24, coverImage: 'https://picsum.photos/800/600?grayscale&random=22' },
];

const Collections: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto pt-24 pb-16 px-6 lg:px-0 fade-in">
      <header className="mb-16">
         <h1 className="text-4xl font-display uppercase tracking-widest mb-2">{t.collections.header}</h1>
         <p className="font-serif text-gray-500 italic">{t.collections.sub}</p>
      </header>

      <div className="space-y-24">
        {collections.map((collection, index) => (
          <div key={collection.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 group cursor-pointer items-center`}>
             <div className="w-full md:w-3/5 overflow-hidden">
                <img 
                  src={collection.coverImage} 
                  alt={collection.title} 
                  className="w-full h-auto aspect-[4/3] object-cover filter grayscale brightness-95 transition-transform duration-1000 group-hover:scale-105"
                />
             </div>
             <div className="w-full md:w-2/5 flex flex-col justify-center items-start">
                <span className="text-xs font-sans tracking-[0.2em] text-gray-400 mb-4">{t.collections.series} 0{index + 1}</span>
                <h2 className="text-3xl font-serif text-ink-black mb-4">{collection.title}</h2>
                <p className="text-sm font-sans text-gray-500 mb-8">{collection.count} {t.collections.works}</p>
                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-ink-black border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                  {t.collections.view} <ArrowRight size={14} className="ml-2" />
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
