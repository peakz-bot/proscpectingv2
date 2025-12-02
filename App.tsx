
import React, { useState, useEffect } from 'react';
import Snowfall from './components/Snowfall';
import BuildCard from './components/BuildCard';
import BuildDetailModal from './components/BuildDetailModal';
import OreTracker from './components/OreTracker';
import BuffReference from './components/BuffReference';
import Logo from './components/Logo';
import { BUILDS } from './constants';
import { Build } from './types';
import { Sun, Moon } from 'lucide-react';

const App: React.FC = () => {
  const [selectedBuild, setSelectedBuild] = useState<Build | null>(null);
  const [currentView, setCurrentView] = useState<'builds' | 'tracker' | 'reference'>('builds');
  
  // Theme State
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('prospecting-theme-pref');
      return saved ? JSON.parse(saved) : true;
    } catch (e) {
      return true;
    }
  });

  // Owned Ores State
  const [ownedOres, setOwnedOres] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('prospecting-owned-ores-v1');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error("Failed to load saved data", e);
      return {};
    }
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('prospecting-theme-pref', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('prospecting-owned-ores-v1', JSON.stringify(ownedOres));
  }, [ownedOres]);

  const toggleOre = (oreName: string) => {
    setOwnedOres(prev => ({
      ...prev,
      [oreName]: !prev[oreName]
    }));
  };

  return (
    <div className="min-h-screen relative font-sans">
      <Snowfall />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
           <div className="flex items-center gap-4">
              <div className="w-16 h-16">
                 <Logo />
              </div>
              <div>
                 <h1 className="font-holiday text-4xl font-bold text-xmas-red dark:text-red-400">
                   Prospector
                 </h1>
                 <p className="text-sm font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                   Endgame Build Database
                 </p>
              </div>
           </div>

           <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
             
             {/* Navigation Pills */}
             <div className="flex bg-slate-100 dark:bg-slate-700 rounded-full p-1 overflow-x-auto">
               <button 
                 onClick={() => setCurrentView('builds')}
                 className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                   currentView === 'builds' 
                   ? 'bg-white dark:bg-slate-600 text-xmas-green shadow-sm' 
                   : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                 }`}
               >
                 Builds
               </button>
               <button 
                 onClick={() => setCurrentView('tracker')}
                 className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                   currentView === 'tracker' 
                   ? 'bg-white dark:bg-slate-600 text-xmas-green shadow-sm' 
                   : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                 }`}
               >
                 Collection
               </button>
               <button 
                 onClick={() => setCurrentView('reference')}
                 className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                   currentView === 'reference' 
                   ? 'bg-white dark:bg-slate-600 text-xmas-green shadow-sm' 
                   : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                 }`}
               >
                 Reference
               </button>
             </div>

             {/* Theme Toggle */}
             <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2.5 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shrink-0"
             >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
             </button>
           </div>
        </header>

        {/* Content */}
        <main>
          {currentView === 'builds' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
              {BUILDS.map((build) => (
                <BuildCard 
                  key={build.id} 
                  build={build} 
                  onClick={setSelectedBuild} 
                />
              ))}
            </div>
          )}
          
          {currentView === 'tracker' && (
            <OreTracker ownedOres={ownedOres} onToggle={toggleOre} />
          )}

          {currentView === 'reference' && (
            <BuffReference />
          )}
        </main>

        <footer className="mt-20 text-center text-sm text-slate-400 font-holiday">
           Happy Prospecting & Merry Christmas!
        </footer>
      </div>

      <BuildDetailModal 
        build={selectedBuild} 
        ownedOres={ownedOres}
        onToggleOre={toggleOre}
        onClose={() => setSelectedBuild(null)} 
      />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
