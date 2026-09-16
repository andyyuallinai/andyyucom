import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  collectionIntro,
  galleryLabel,
  trunkItems,
  galleryImages,
} from '../data/collection';

const CHARCOAL = '#262626';

const Collections: React.FC = () => {
  const { t, language } = useLanguage();
  const pick = (v: Partial<Record<string, string>> & { en: string }) =>
    v[language] ?? v.en;

  return (
    <div className="max-w-6xl mx-auto pt-24 pb-16 px-6 lg:px-12 fade-in">
      <header className="mb-24">
        <h1 className="text-4xl font-display uppercase tracking-widest mb-3">{t.collections.header}</h1>
        <p className="text-2xl font-serif text-ink-black mb-2">{pick(collectionIntro.title)}</p>
        <p className="font-serif text-gray-500 italic max-w-xl">{pick(collectionIntro.subtitle)}</p>
      </header>

      {/* Catalogued pieces — large alternating showcase with hover motion */}
      <div className="space-y-24 md:space-y-32">
        {trunkItems.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 lg:gap-16 group items-center`}
          >
            <div className="w-full md:w-3/5 overflow-hidden" style={{ backgroundColor: CHARCOAL }}>
              <img
                src={item.image}
                alt={pick(item.title)}
                loading="lazy"
                className="w-full h-auto aspect-[4/3] object-contain filter grayscale brightness-95 transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="w-full md:w-2/5 flex flex-col justify-center items-start">
              <span className="text-xs font-sans tracking-[0.3em] text-gray-400 mb-4 uppercase">
                {`N° ${String(index + 1).padStart(2, '0')}`}
              </span>
              <h2 className="text-3xl font-serif text-ink-black mb-4 leading-snug">{pick(item.title)}</h2>
              <p className="text-sm font-sans tracking-wide text-gray-500 mb-5">{pick(item.spec)}</p>
              {item.note && (
                <p className="font-serif text-[15px] text-gray-600 leading-relaxed">{pick(item.note)}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Uncaptioned pieces — a gallery in the same monochrome register */}
      <section className="mt-32 pt-14 border-t border-gray-200">
        <h2 className="text-sm font-sans font-bold tracking-[0.3em] text-gray-400 uppercase mb-12">
          {pick(galleryLabel)}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {galleryImages.map((g) => (
            <div key={g.id} className="overflow-hidden group" style={{ backgroundColor: CHARCOAL }}>
              <img
                src={g.image}
                alt=""
                loading="lazy"
                className="w-full h-auto aspect-[4/3] object-cover filter grayscale brightness-95 transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collections;
