import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  collectionIntro,
  galleryLabel,
  trunkItems,
  galleryImages,
} from '../data/collection';

const PER_PAGE = 2;

const Collections: React.FC = () => {
  const { t, language } = useLanguage();
  const pick = (v: Partial<Record<string, string>> & { en: string }) =>
    v[language] ?? v.en;

  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(trunkItems.length / PER_PAGE);
  const start = page * PER_PAGE;
  const visible = trunkItems.slice(start, start + PER_PAGE);

  return (
    <div className="max-w-6xl mx-auto pt-24 pb-16 px-6 lg:px-12 fade-in">
      <header className="mb-16">
        <h1 className="text-4xl font-display uppercase tracking-widest mb-3">{t.collections.header}</h1>
        <p className="text-2xl font-serif text-ink-black mb-2">{pick(collectionIntro.title)}</p>
        <p className="font-serif text-gray-500 italic max-w-xl">{pick(collectionIntro.subtitle)}</p>
      </header>

      {/* Two pieces per page, navigated with arrows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start min-h-[60vh]">
        {visible.map((item, i) => (
          <div key={item.id} className="fade-in">
            <div className="w-full mb-6">
              <img
                src={item.image}
                alt={pick(item.title)}
                className="w-full h-auto object-contain rounded-sm shadow-sm"
              />
            </div>
            <span className="text-xs font-sans tracking-[0.3em] text-gray-400 uppercase">
              {`N° ${String(start + i + 1).padStart(2, '0')}`}
            </span>
            <h2 className="text-2xl font-serif text-ink-black mt-3 mb-3 leading-snug">{pick(item.title)}</h2>
            <p className="text-sm font-sans tracking-wide text-gray-500 mb-3">{pick(item.spec)}</p>
            {item.note && (
              <p className="font-serif text-[15px] text-gray-600 leading-relaxed">{pick(item.note)}</p>
            )}
          </div>
        ))}
      </div>

      {/* Pager */}
      <div className="flex items-center justify-center gap-8 mt-16">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          aria-label="Previous"
          className="p-2 text-ink-black disabled:text-gray-300 hover:opacity-60 transition-opacity"
        >
          <ChevronLeft size={28} strokeWidth={1.2} />
        </button>
        <span className="text-xs font-sans tracking-[0.3em] text-gray-500 tabular-nums">
          {String(page + 1).padStart(2, '0')} / {String(pageCount).padStart(2, '0')}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
          disabled={page === pageCount - 1}
          aria-label="Next"
          className="p-2 text-ink-black disabled:text-gray-300 hover:opacity-60 transition-opacity"
        >
          <ChevronRight size={28} strokeWidth={1.2} />
        </button>
      </div>

      {/* Uncaptioned pieces — a colour gallery of the collection in context */}
      <section className="mt-28 pt-14 border-t border-gray-200">
        <h2 className="text-sm font-sans font-bold tracking-[0.3em] text-gray-400 uppercase mb-12">
          {pick(galleryLabel)}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {galleryImages.map((g) => (
            <div key={g.id} className="overflow-hidden rounded-sm group">
              <img
                src={g.image}
                alt=""
                loading="lazy"
                className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collections;
