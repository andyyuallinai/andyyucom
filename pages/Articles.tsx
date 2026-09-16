import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  articleList,
  tagLabels,
  moreReadingLabel,
  moreReadingSub,
  BLOG_URL,
} from '../data/articles';
import { getArticleStrings } from '../data/articlesI18n';
import { formatDate } from '../utils/i18n/format';

const Articles: React.FC = () => {
  const { t, language } = useLanguage();
  const pick = (v: Partial<Record<string, string>> & { en: string }) =>
    v[language] ?? v.en;

  return (
    <div className="max-w-3xl mx-auto pt-24 pb-16 px-6 lg:px-0 fade-in">
      <header className="mb-20">
         <h1 className="text-4xl font-display uppercase tracking-widest mb-2">{t.articles.header}</h1>
         <p className="font-serif text-gray-500 italic">{t.articles.sub}</p>
      </header>

      <div className="space-y-16">
        {articleList.map((article) => {
          const s = getArticleStrings(language, article.id);
          return (
            <article key={article.id} className="group cursor-pointer">
              <Link to={`/articles/${article.id}`} className="block">
                <div className="flex items-baseline space-x-3 mb-2">
                  <time className="text-xs font-sans tracking-widest text-gray-400 uppercase">{formatDate(article.iso, language)}</time>
                  <span className="text-xs font-sans text-gray-300">/</span>
                  <span className="text-xs font-sans tracking-widest text-gray-400 uppercase">{pick(tagLabels[article.tag])}</span>
                </div>
                <h2 className="text-3xl font-serif font-medium text-ink-black mb-3 group-hover:text-gray-600 transition-colors">
                  {s.title}
                </h2>
                <p className="font-serif text-gray-600 leading-relaxed max-w-xl">
                  {s.excerpt}
                </p>
                <div className="mt-4 flex items-center text-xs font-sans font-medium uppercase tracking-widest text-ink-black opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  {t.articles.readMore} <span className="ml-2 text-lg">→</span>
                </div>
              </Link>
            </article>
          );
        })}
      </div>

      {/* Extended reading — the original blog lives at andyyu.org */}
      <a
        href={BLOG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-24 block border-t border-gray-200 pt-10 group"
      >
        <div className="flex items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center text-lg font-serif font-medium text-ink-black group-hover:text-gray-600 transition-colors">
              {pick(moreReadingLabel)}
              <ArrowUpRight size={18} className="ml-2 text-gray-400 group-hover:text-ink-black transition-colors" />
            </div>
            <p className="mt-2 font-serif text-sm text-gray-500 leading-relaxed max-w-xl">
              {pick(moreReadingSub)}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Articles;
