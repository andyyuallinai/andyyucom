import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto pt-24 pb-16 px-6 lg:px-0 fade-in h-full flex flex-col justify-center">
      <header className="mb-12">
        <h1 className="text-5xl font-display uppercase tracking-widest mb-6">{t.contact.title}</h1>
      </header>

      <div className="grid gap-12">
        <div>
          <h3 className="text-xs font-sans tracking-widest uppercase text-gray-400 mb-4">{t.contact.emailLabel}</h3>
          <a href="mailto:andyyulondon@gmail.com" className="text-2xl font-serif text-ink-black hover:text-gray-600 transition-colors border-b border-gray-200 hover:border-gray-600 pb-1">
            andyyulondon@gmail.com
          </a>
        </div>

        <div>
          <h3 className="text-xs font-sans tracking-widest uppercase text-gray-400 mb-4">{t.contact.studioLabel}</h3>
          <address className="not-italic font-serif text-lg text-gray-700 leading-relaxed">
            116 Pall Mall, St. James's<br />
            London, SW1Y 5ED
          </address>
        </div>

        <form className="mt-8 space-y-8" onSubmit={(e) => e.preventDefault()}>
           <div className="space-y-1">
             <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-500">{t.contact.form.name}</label>
             <input type="text" id="name" className="w-full bg-transparent border-b border-gray-300 py-2 text-ink-black font-serif focus:outline-none focus:border-ink-black transition-colors" placeholder={t.contact.form.placeholders.name} />
           </div>
           <div className="space-y-1">
             <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-500">{t.contact.form.email}</label>
             <input type="email" id="email" className="w-full bg-transparent border-b border-gray-300 py-2 text-ink-black font-serif focus:outline-none focus:border-ink-black transition-colors" placeholder={t.contact.form.placeholders.email} />
           </div>
           <div className="space-y-1">
             <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-500">{t.contact.form.message}</label>
             <textarea id="message" rows={4} className="w-full bg-transparent border-b border-gray-300 py-2 text-ink-black font-serif focus:outline-none focus:border-ink-black transition-colors resize-none" placeholder={t.contact.form.placeholders.message}></textarea>
           </div>
           
           <button type="submit" className="px-8 py-3 bg-ink-black text-white font-sans text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors">
             {t.contact.form.submit}
           </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
