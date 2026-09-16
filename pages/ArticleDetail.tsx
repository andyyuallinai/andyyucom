import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useLanguage } from '../contexts/LanguageContext';
import { articleContentZh, articleContentEn } from '../data/articleContent';
import { articleList } from '../data/articles';
import { getArticleStrings } from '../data/articlesI18n';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();

  const key = id || '1';
  const zhBody = articleContentZh[key] || articleContentZh['1'];
  const enBody = articleContentEn[key] || articleContentEn['1'];

  // Bodies are served statically: Chinese for zh, English for every other
  // language (English is the international default). Full per-language body
  // translation can be layered on later without touching this component.
  const content = language === 'zh' ? zhBody : enBody;

  const currentIndex = articleList.findIndex((a) => a.id === (id || '1'));
  const nextArticle = currentIndex >= 0 ? articleList[(currentIndex + 1) % articleList.length] : undefined;

  return (
    <div className="max-w-2xl mx-auto pt-24 pb-16 px-6 lg:px-0 fade-in">
      <div className="mb-12">
        <Link to="/articles" className="inline-flex items-center text-xs font-sans tracking-widest text-gray-400 hover:text-ink-black transition-colors mb-8 uppercase">
          <ArrowLeft size={12} className="mr-2" /> {t.articles.back}
        </Link>
        
        <article className="prose prose-neutral prose-lg font-serif text-gray-800 leading-[2] max-w-none
            prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-normal prose-headings:text-ink-black 
            prose-h1:text-4xl prose-h1:leading-tight prose-h1:mb-8
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-4
            prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:font-sans prose-h3:font-bold prose-h3:text-gray-900
            prose-p:mb-6 prose-p:text-lg prose-p:font-light
            prose-a:text-blue-700 prose-a:underline prose-a:decoration-1 prose-a:underline-offset-4 prose-a:transition-colors hover:prose-a:text-blue-900
            prose-blockquote:border-l-4 prose-blockquote:border-blue-800 prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-10 prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:leading-relaxed prose-blockquote:text-gray-700 prose-blockquote:font-serif prose-blockquote:bg-gray-50 prose-blockquote:pr-4
            prose-strong:font-bold prose-strong:text-gray-900
            prose-ul:list-disc prose-ul:pl-5 prose-ul:space-y-2 prose-ul:my-6
            prose-li:text-gray-700 prose-li:pl-2
            prose-img:rounded-sm prose-img:shadow-sm prose-img:my-12
            selection:bg-blue-100 selection:text-blue-900">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
      </div>

      {nextArticle && (
        <div className="mt-20 pt-10 border-t border-gray-100 flex justify-between items-center">
          <div>
              <span className="block text-xs font-sans text-gray-400 uppercase tracking-widest mb-1">{t.articles.next}</span>
              <Link to={`/articles/${nextArticle.id}`} className="font-serif text-lg text-ink-black hover:underline decoration-1 underline-offset-4">
                {getArticleStrings(language, nextArticle.id).title}
              </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;
