import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Check } from 'lucide-react';
import { LANGS } from '../utils/i18n/types';

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const current = LANGS.find((l) => l.code === language);

  return (
    <div ref={ref} className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200 px-3 py-2 rounded-full shadow-sm transition-all duration-300 group"
        aria-label="Select Language"
        aria-expanded={open}
      >
        <Globe size={16} className="text-gray-400 group-hover:text-ink-black transition-colors" />
        <span className="text-xs font-sans font-medium tracking-wider text-ink-black text-center whitespace-nowrap">
          {current?.native ?? 'English'}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 max-h-[70vh] overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-lg py-2">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLanguage(l.code); setOpen(false); }}
              className={`w-full flex items-center justify-between px-4 py-2 text-left text-sm font-sans transition-colors hover:bg-gray-50 ${
                l.code === language ? 'text-ink-black font-medium' : 'text-gray-600'
              }`}
            >
              <span>{l.native}</span>
              {l.code === language && <Check size={14} className="text-ink-black" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;
