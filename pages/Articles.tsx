import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Articles: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto pt-24 pb-16 px-6 lg:px-0 fade-in">
      <header className="mb-20">
         <h1 className="text-4xl font-display uppercase tracking-widest mb-2">{t.articles.header}</h1>
         <p className="font-serif text-gray-500 italic">{t.articles.sub}</p>
      </header>

      <div className="space-y-16">
        {t.articles.items.map((article) => (
          <article key={article.id} className="group cursor-pointer">
            <Link to={`/articles/${article.id}`} className="block">
              <div className="flex items-baseline space-x-3 mb-2">
                <time className="text-xs font-sans tracking-widest text-gray-400 uppercase">{article.date}</time>
                <span className="text-xs font-sans text-gray-300">/</span>
                <span className="text-xs font-sans tracking-widest text-gray-400 uppercase">{article.tags[0]}</span>
              </div>
              <h2 className="text-3xl font-serif font-medium text-ink-black mb-3 group-hover:text-gray-600 transition-colors">
                {article.title}
              </h2>
              <p className="font-serif text-gray-600 leading-relaxed max-w-xl">
                {article.excerpt}
              </p>
              <div className="mt-4 flex items-center text-xs font-sans font-medium uppercase tracking-widest text-ink-black opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                {t.articles.readMore} <span className="ml-2 text-lg">→</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Articles;
