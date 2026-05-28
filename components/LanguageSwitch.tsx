import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitch: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center space-x-2 bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200 px-3 py-2 rounded-full shadow-sm transition-all duration-300 group"
      aria-label="Toggle Language"
    >
      <Globe size={16} className="text-gray-400 group-hover:text-ink-black transition-colors" />
      <span className="text-xs font-sans font-medium tracking-wider text-ink-black w-5 text-center">
        {language === 'en' ? 'EN' : '中'}
      </span>
    </button>
  );
};

export default LanguageSwitch;
