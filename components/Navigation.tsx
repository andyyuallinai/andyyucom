
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WeChatLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.6 15.8c-4.5 0-8.1-3-8.1-6.7 0-3.7 3.6-6.7 8.1-6.7 4.5 0 8.1 3 8.1 6.7 0 1.8-.8 3.5-2.3 4.8l.9 2.8-3.2-1.7c1.2.3 2.5.5 3.8.5z" fill="#07C160"/>
    <path d="M17.1 21.6c-3.4 0-6.2-2.3-6.2-5.2 0-2.9 2.8-5.2 6.2-5.2 3.4 0 6.2 2.3 6.2 5.2 0 1.4-.7 2.7-1.8 3.7l.7 2.2-2.5-1.3c.9.2 1.9.4 2.9.4z" fill="#07C160"/>
    <circle cx="6" cy="7.5" r="1" fill="#fff"/>
    <circle cx="11" cy="7.5" r="1" fill="#fff"/>
    <circle cx="14.5" cy="14" r=".8" fill="#fff"/>
    <circle cx="19.5" cy="14" r=".8" fill="#fff"/>
  </svg>
);

const WordPressLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1000 1000" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="500" cy="500" r="500" fill="#ffffff"/>
    <path d="M500,10C229.4,10,10,229.4,10,500s219.4,490,490,490s490-219.4,490-490S770.6,10,500,10z M500,953.5c-112.5,0-215.5-41-295.1-108.6l200.7-581.4h-1.4l154.5,447.8l50.3-159.2H766L535.4,948C523.8,951.6,512,953.5,500,953.5z M896.7,358.8c16.2,43.2,25.2,90.6,25.2,141.2c0,113.8-48.4,216.3-125.6,288.5L664.1,358.8H896.7z M144.3,500c0-101.4,42.5-192.9,110.6-257.7l172.9,500.8C265.4,680.7,144.3,603.6,144.3,500z M500,46.5c115.5,0,221,43.2,301.1,114.5l-149.3,432.5L500,154.6L348.2,593.5L198.9,161C279,89.7,384.5,46.5,500,46.5z" fill="#21759b"/>
  </svg>
);

const LinkedInLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWeChat, setShowWeChat] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { path: '/', label: t.nav.biography },
    { path: '/articles', label: t.nav.articles },
    { path: '/ai-projects', label: t.nav.aiProjects },
    { path: '/collections', label: t.nav.collections },
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-paper-white/90 backdrop-blur-sm z-50 px-6 py-4 flex justify-between items-center border-b border-gray-100">
        <Link to="/" className="font-display text-xl tracking-widest font-semibold uppercase">Andy Yu.</Link>
        <button onClick={toggleMenu} className="text-ink-black focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-paper-white z-40 transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden flex flex-col justify-center items-center`}>
        <nav className="flex flex-col space-y-8 text-center">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-3xl font-serif italic transition-colors duration-300 ${isActive ? 'text-ink-black font-medium' : 'text-gray-400 hover:text-ink-black'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-8 border-t border-gray-100 w-24 mx-auto mt-4">
             <div className="flex justify-center space-x-8 mb-6 items-center">
                <button onClick={() => setShowWeChat(!showWeChat)} className="hover:opacity-80 transition-opacity flex items-center" title="WeChat Official Account">
                   <WeChatLogo className="w-6 h-6" />
                </button>
                <a href="https://wordpress.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                   <WordPressLogo className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/andyyuhbsboston" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                   <LinkedInLogo className="w-6 h-6" />
                </a>
                <a href="mailto:andyyulondon@gmail.com" className="text-gray-600 hover:text-ink-black transition-colors">
                   <Mail size={24} strokeWidth={1.5} />
                </a>
             </div>
             {showWeChat && (
                <div className="mb-6 bg-white p-2 shadow-sm border border-gray-100 inline-block fade-in">
                  <a href="https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN&token=2030830129" target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fmp.weixin.qq.com%2Fcgi-bin%2Fhome%3Ft%3Dhome%2Findex%26lang%3Dzh_CN%26token%3D2030830129" alt="WeChat QR Barcode" className="w-32 h-32" />
                  </a>
                  <p className="text-[10px] uppercase tracking-widest text-center mt-2 text-gray-400">Scan Barcode</p>
                </div>
             )}
             <div className="flex flex-col space-y-2 text-xs font-sans tracking-widest text-gray-400 uppercase">
               <NavLink to="/privacy" onClick={() => setIsOpen(false)} className="hover:text-ink-black">{t.nav.privacy}</NavLink>
               <NavLink to="/terms" onClick={() => setIsOpen(false)} className="hover:text-ink-black">{t.nav.terms}</NavLink>
             </div>
          </div>
        </nav>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-80 flex-col justify-between px-12 py-16 border-r border-gray-100 bg-paper-white z-20">
        <div>
          <Link to="/" className="block font-display text-3xl tracking-[0.2em] font-bold uppercase mb-4">Andy Yu.</Link>
          <div className="text-gray-600 text-xl font-serif font-light italic leading-8 mb-16 tracking-wide">
            {t.nav.roleLine1} <br />
            {t.nav.roleLine2}
          </div>
          
          <nav className="flex flex-col space-y-5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg tracking-wide transition-all duration-300 group flex items-center ${isActive ? 'text-ink-black font-medium translate-x-2' : 'text-gray-500 hover:text-ink-black hover:translate-x-1'}`
                }
              >
                <span className="h-[1px] w-0 bg-ink-black mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-3"></span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="flex space-x-6 items-center relative">
            <button 
               className="hover:opacity-80 transition-opacity focus:outline-none relative group flex items-center"
               onClick={() => setShowWeChat(!showWeChat)}
               aria-label="WeChat Official Account"
               title="WeChat Official Account"
            >
              <WeChatLogo className="w-5 h-5" />
              {/* Desktop Tooltip/Popup for QR */}
              {showWeChat && (
                <div className="absolute bottom-full left-0 mb-4 bg-white p-3 shadow-lg border border-gray-100 fade-in w-32">
                   <a href="https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN&token=2030830129" target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">
                     <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fmp.weixin.qq.com%2Fcgi-bin%2Fhome%3Ft%3Dhome%2Findex%26lang%3Dzh_CN%26token%3D2030830129" alt="WeChat QR Barcode" className="w-full h-auto" />
                   </a>
                   <p className="text-[9px] uppercase tracking-widest text-center mt-2 text-gray-400">Scan Barcode</p>
                </div>
              )}
            </button>
            <a href="https://wordpress.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="WordPress">
               <WordPressLogo className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/andyyuhbsboston" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
               <LinkedInLogo className="w-5 h-5" />
            </a>
            <a href="mailto:andyyulondon@gmail.com" className="text-gray-600 hover:text-ink-black transition-colors" aria-label="Email">
               <Mail size={20} strokeWidth={1.5} />
            </a>
          </div>
          
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-4 text-[10px] font-sans font-medium tracking-widest text-gray-400 uppercase">
              <Link to="/privacy" className="hover:text-ink-black transition-colors">{t.nav.privacy}</Link>
              <Link to="/terms" className="hover:text-ink-black transition-colors">{t.nav.terms}</Link>
            </div>
            <p className="text-[10px] text-gray-300 font-sans tracking-wider">© 2026 ANDY YU WORLD</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navigation;
