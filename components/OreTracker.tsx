import React, { useMemo } from 'react';
import { ORE_DATABASE } from '../constants';
import { Rarity } from '../types';
import { Check } from 'lucide-react';

interface OreTrackerProps {
  ownedOres: Record<string, boolean>;
  onToggle: (oreName: string) => void;
}

const RARITY_ORDER: Rarity[] = ['Exotic', 'Mythic', 'Legendary', 'Epic', 'Rare', 'Uncommon', 'Common'];

const RarityColors: Record<Rarity, string> = {
  Exotic: 'border-red-500 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20',
  Mythic: 'border-pink-500 text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/20',
  Legendary: 'border-yellow-500 text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20',
  Epic: 'border-purple-500 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20',
  Rare: 'border-cyan-500 text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20',
  Uncommon: 'border-green-500 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20',
  Common: 'border-slate-400 text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800',
};

const OreTracker: React.FC<OreTrackerProps> = ({ ownedOres, onToggle }) => {
  
  const groupedOres = useMemo(() => {
    const groups: Partial<Record<Rarity, typeof ORE_DATABASE[string][]>> = {};
    Object.values(ORE_DATABASE).forEach(ore => {
      if (!groups[ore.rarity]) groups[ore.rarity] = [];
      groups[ore.rarity]!.push(ore);
    });
    return groups;
  }, []);

  const totalOres = Object.keys(ORE_DATABASE).length;
  const collectedCount = Object.keys(ownedOres).filter(k => ownedOres[k]).length;
  const progress = Math.round((collectedCount / totalOres) * 100);

  return (
    <div className="space-y-12 animate-fadeIn pb-20">
      
      {/* Progress Header */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center gap-8">
         <div className="flex-1 text-center md:text-left">
            <h2 className="font-holiday text-3xl font-bold text-slate-900 dark:text-white mb-2">Collection Vault</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Track your progress across all rarities.</p>
         </div>
         
         <div className="flex-1 w-full flex items-center gap-4">
             <div className="flex-grow h-6 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner border border-slate-200 dark:border-slate-600">
                <div 
                  className="h-full rounded-full animate-candy-stripe transition-all duration-700 ease-out shadow-sm"
                  style={{ width: `${progress}%` }}
                />
             </div>
             <div className="font-holiday text-2xl font-bold text-xmas-red dark:text-red-400 w-16 text-right">
               {progress}%
             </div>
         </div>
      </div>

      <div className="space-y-12">
        {RARITY_ORDER.map((rarity) => {
          const ores = groupedOres[rarity];
          if (!ores) return null;

          return (
            <div key={rarity}>
              <h3 className="font-holiday text-2xl text-slate-900 dark:text-white mb-6 pl-2 border-l-4 border-xmas-red">
                {rarity}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {ores.map((ore) => {
                  const isOwned = !!ownedOres[ore.name];
                  
                  return (
                    <div 
                      key={ore.name}
                      onClick={() => onToggle(ore.name)}
                      className={`
                        group relative cursor-pointer p-4 rounded-xl border transition-all duration-200
                        flex flex-col items-center justify-center text-center h-32
                        ${isOwned 
                          ? 'bg-white dark:bg-slate-800 border-xmas-green shadow-md scale-105 z-10' 
                          : 'bg-slate-50 dark:bg-slate-800/50 border-transparent hover:border-slate-300 dark:hover:border-slate-600 opacity-80 hover:opacity-100'
                        }
                      `}
                    >
                      <div className={`mb-2 font-bold text-sm ${isOwned ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                        {ore.name}
                      </div>

                      {ore.minKg > 0 && (
                        <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                          {ore.minKg}kg
                        </span>
                      )}

                      {isOwned && (
                         <div className="absolute top-2 right-2 text-xmas-green">
                           <Check size={16} strokeWidth={3} />
                         </div>
                      )}
                      
                      {/* Bottom Rarity Stripe */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-xl ${RarityColors[rarity].split(' ')[0].replace('text', 'bg').replace('dark:text', 'dark:bg')}`}></div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OreTracker;