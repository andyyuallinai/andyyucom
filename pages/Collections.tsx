import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { collectionIntro, trunkItems } from '../data/collection';

const Collections: React.FC = () => {
  const { t, language } = useLanguage();
  const pick = (v: Partial<Record<string, string>> & { en: string }) =>
    v[language] ?? v.en;

  const [index, setIndex] = useState(0);
  const count = trunkItems.length;
  const item = trunkItems[index];
  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  return (
    <div className="max-w-6xl mx-auto pt-24 pb-16 px-6 lg:px-12 fade-in">
      <header className="mb-10">
        <h1 className="text-4xl font-display uppercase tracking-widest mb-3">{t.collections.header}</h1>
        <p className="text-2xl font-serif text-ink-black mb-2">{pick(collectionIntro.title)}</p>
        <p className="font-serif text-gray-500 italic max-w-xl">{pick(collectionIntro.subtitle)}</p>
      </header>

      {/* Single floating piece, flipped with the arrows at each edge */}
      <div className="relative">
        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-300 hover:text-ink-black transition-colors"
        >
          <ChevronLeft size={44} strokeWidth={1} />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-300 hover:text-ink-black transition-colors"
        >
          <ChevronRight size={44} strokeWidth={1} />
        </button>

        <div key={item.id} className="fade-in flex flex-col items-center text-center px-10 sm:px-16">
          <div className="w-full max-w-3xl">
            <img
              src={item.image}
              alt={pick(item.title)}
              className="float-slow w-full h-auto object-contain"
            />
            <div
              className="mx-auto mt-1 h-4 w-1/2 rounded-[50%]"
              style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.10), transparent 72%)' }}
            />
          </div>

          <span className="text-xs font-sans tracking-[0.3em] text-gray-400 uppercase mt-10">
            {`N° ${String(index + 1).padStart(2, '0')} — ${String(count).padStart(2, '0')}`}
          </span>
          <h2 className="text-3xl font-serif text-ink-black mt-3 mb-3 leading-snug">{pick(item.title)}</h2>
          <p className="text-sm font-sans tracking-wide text-gray-500 mb-3">{pick(item.spec)}</p>
          {item.note && (
            <p className="font-serif text-[15px] text-gray-600 leading-relaxed max-w-xl">{pick(item.note)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collections;
