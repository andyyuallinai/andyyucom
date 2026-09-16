import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  collectionIntro,
  galleryLabel,
  trunkItems,
  galleryImages,
} from '../data/collection';

const Collections: React.FC = () => {
  const { t, language } = useLanguage();
  const pick = (v: Partial<Record<string, string>> & { en: string }) =>
    v[language] ?? v.en;

  return (
    <div className="max-w-4xl mx-auto pt-24 pb-16 px-6 lg:px-0 fade-in">
      <header className="mb-20">
        <h1 className="text-4xl font-display uppercase tracking-widest mb-3">{t.collections.header}</h1>
        <p className="text-2xl font-serif text-ink-black mb-2">{pick(collectionIntro.title)}</p>
        <p className="font-serif text-gray-500 italic max-w-xl">{pick(collectionIntro.subtitle)}</p>
      </header>

      {/* Catalogued pieces — image + description, alternating sides */}
      <div className="space-y-20 md:space-y-28">
        {trunkItems.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
          >
            <div className="w-full md:w-3/5">
              <img
                src={item.image}
                alt={pick(item.title)}
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-full md:w-2/5 flex flex-col justify-center items-start">
              <span className="text-xs font-sans tracking-[0.25em] text-gray-400 mb-4">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h2 className="text-2xl font-serif text-ink-black mb-3 leading-snug">{pick(item.title)}</h2>
              <p className="text-sm font-sans tracking-wide text-gray-500 mb-4">{pick(item.spec)}</p>
              {item.note && (
                <p className="font-serif text-[15px] text-gray-600 leading-relaxed">{pick(item.note)}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Uncaptioned pieces — a plain image gallery */}
      <section className="mt-28 pt-12 border-t border-gray-200">
        <h2 className="text-sm font-sans font-bold tracking-[0.3em] text-gray-400 uppercase mb-10">
          {pick(galleryLabel)}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {galleryImages.map((g) => (
            <div key={g.id} className="overflow-hidden">
              <img
                src={g.image}
                alt=""
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collections;
