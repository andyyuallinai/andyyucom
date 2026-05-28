
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Privacy: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto pt-24 pb-16 px-6 lg:px-0 fade-in">
      <header className="mb-16">
        <h1 className="text-4xl lg:text-5xl font-display text-ink-black tracking-widest uppercase mb-8">
          {language === 'en' ? 'Privacy Policy' : '隐私政策'}
        </h1>
        <div className="h-px w-12 bg-gray-200"></div>
      </header>

      <div className="prose prose-lg prose-neutral font-serif text-gray-700 leading-relaxed text-base">
        <p className="text-gray-500 italic mb-8 text-sm">Last updated: April 14, 2024</p>

        <h3 className="text-ink-black font-sans text-sm uppercase tracking-widest mt-8 mb-4">1. Introduction</h3>
        <p>
          This Privacy Policy explains how we collect, use, and protect your personal information when you visit andy-yu.com (the "Site"). We are committed to protecting your privacy in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>

        <h3 className="text-ink-black font-sans text-sm uppercase tracking-widest mt-8 mb-4">2. Information We Collect</h3>
        <p>
          We may collect and process the following data about you:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Information you give us:</strong> This generally includes your name and email address when you contact us via email or our contact form.</li>
          <li><strong>Technical information:</strong> We may automatically collect information about your visit, including your IP address, browser type, and operating system, for analytics purposes to improve our site's performance.</li>
        </ul>

        <h3 className="text-ink-black font-sans text-sm uppercase tracking-widest mt-8 mb-4">3. How We Use Your Information</h3>
        <p>We use your information solely for the following purposes:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>To communicate with you regarding your inquiries.</li>
          <li>To improve our website and ensure content is presented effectively.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h3 className="text-ink-black font-sans text-sm uppercase tracking-widest mt-8 mb-4">4. Cookies</h3>
        <p>
          Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and allows us to improve our site. You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies.
        </p>

        <h3 className="text-ink-black font-sans text-sm uppercase tracking-widest mt-8 mb-4">5. Contact</h3>
        <p>
          Questions, comments, and requests regarding this privacy policy are welcomed and should be addressed to <a href="mailto:andyyulondon@gmail.com" className="text-ink-black underline underline-offset-4 decoration-1">andyyulondon@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
