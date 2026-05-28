
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Biography from './pages/Biography';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import AIProjects from './pages/AIProjects';
import Collections from './pages/Collections';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageSwitch from './components/LanguageSwitch';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <LanguageSwitch />
        <div className="min-h-screen bg-paper-white text-ink-black flex flex-col lg:flex-row font-serif">
          <Navigation />
          
          {/* Main Content Area */}
          <main className="flex-1 lg:ml-80 min-h-screen relative">
            <div className="w-full h-full px-4 lg:px-12 py-8">
              <Routes>
                <Route path="/" element={<Biography />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:id" element={<ArticleDetail />} />
                <Route path="/ai-projects" element={<AIProjects />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
