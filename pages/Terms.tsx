
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Terms: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto pt-24 pb-16 px-6 lg:px-0 fade-in">
      <header className="mb-16">
        <h1 className="text-4xl lg:text-5xl font-display text-ink-black tracking-widest uppercase mb-8">
          {language === 'en' ? 'Terms of Use' : '使用条款'}
        </h1>
        <div className="h-px w-12 bg-gray-200"></div>
      </header>

      <div className="prose prose-lg prose-neutral font-serif text-gray-700 leading-relaxed text-base">
        <p className="text-gray-500 italic mb-8 text-sm">Last updated: April 14, 2024</p>

        <h3 className="text-ink-black font-sans text-sm uppercase tracking-widest mt-8 mb-4">1. Agreement to Terms</h3>
        <p>
          By accessing or using our website, you agree to be bound by these Terms of Use and our Privacy Policy. If you disagree with any part of the terms, you may not access the website.
        </p>

        <h3 className="text-ink-black font-sans text-sm uppercase tracking-widest mt-8 mb-4">2. Intellectual Property Rights</h3>
        <p>
          The content on this website, including but not limited to text, graphics, images, logos, and software, is the property of Andy Yu or its content suppliers and is protected by UK and international copyright laws. You may not reproduce, distribute, or create derivative works from this content without express written permission.
        </p>

        <h3 className="text-ink-black font-sans text-sm uppercase tracking-widest mt-8 mb-4">3. Use of Site</h3>
        <p>
          You agree to use the site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the site. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.
        </p>

        <h3 className="text-ink-black font-sans text-sm uppercase tracking-widest mt-8 mb-4">4. Disclaimer</h3>
        <p>
          The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h3 className="text-ink-black font-sans text-sm uppercase tracking-widest mt-8 mb-4">5. Governing Law</h3>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>

        <h3 className="text-ink-black font-sans text-sm uppercase tracking-widest mt-8 mb-4">6. Changes</h3>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
        </p>
      </div>
    </div>
  );
};

export default Terms;
