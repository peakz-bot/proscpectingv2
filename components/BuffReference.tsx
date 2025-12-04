
import React, { useMemo, useState } from 'react';
import { ORE_DATABASE, MODIFIERS } from '../constants';
import { Rarity, OreData } from '../types';
import { Search } from 'lucide-react';

const RARITY_ORDER: Rarity[] = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic', 'Exotic'];

const RarityStyles: Record<Rarity, string> = {
  Common: 'bg-slate-200 text-slate-700 border-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600',
  Uncommon: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800',
  Rare: 'bg-cyan-100 text-cyan-800 border-cyan-200 dark:bg-cyan-900/40 dark:text-cyan-300 dark:border-cyan-800',
  Epic: 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/40 dark:text-purple-300 dark:border-purple-800',
  Legendary: 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/40 dark:text-yellow-300 dark:border-yellow-800',
  Mythic: 'bg-pink-100 text-pink-800 border-pink-200 dark:bg-pink-900/40 dark:text-pink-300 dark:border-pink-800',
  Exotic: 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/40 dark:text-red-300 dark:border-red-800',
};

// Interface for Ore that has been grouped with others of identical stats
interface GroupedOre extends OreData {
  names: string[];
}

const BuffReference: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const groupedOres = useMemo(() => {
    const groups: Partial<Record<Rarity, typeof ORE_DATABASE[string][]>> = {};
    const query = searchQuery.toLowerCase().trim();

    Object.values(ORE_DATABASE).forEach(ore => {
      // Skip "ANY" fillers for this specific chart
      if (ore.name.startsWith("ANY")) return; 
      
      // Filter Logic
      if (query) {
        const matchesName = ore.name.toLowerCase().includes(query);
        const matchesBuff = ore.buffType.toLowerCase().includes(query);
        if (!matchesName && !matchesBuff) return;
      }

      if (!groups[ore.rarity]) groups[ore.rarity] = [];
      groups[ore.rarity]!.push(ore);
    });
    return groups;
  }, [searchQuery]);

  const getGroupedOres = (ores: OreData[]): GroupedOre[] => {
    const groups: Record<string, GroupedOre> = {};
    
    ores.forEach(ore => {
      // Create a unique key based on the stats we want to match
      const key = `${ore.buffType.toLowerCase()}-${ore.minKg}-${ore.maxBuff}`;
      
      if (!groups[key]) {
        groups[key] = {
          ...ore,
          names: [ore.name]
        };
      } else {
        groups[key].names.push(ore.name);
      }
    });

    // Convert back to array and sort
    return Object.values(groups).sort((a, b) => {
      // Sort priority: Buff Type -> Min Kg
      const buffCompare = a.buffType.localeCompare(b.buffType);
      if (buffCompare !== 0) return buffCompare;
      return a.minKg - b.minKg;
    });
  };

  return (
    <div className="animate-fadeIn pb-20">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="font-holiday text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Museum Buff Reference
        </h2>
      </div>

      {/* Search Box */}
      <div className="max-w-md mx-auto mb-10 relative z-10">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
           <Search size={20} />
        </div>
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search ore name or buff type..."
          className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-soft focus:ring-2 focus:ring-xmas-red outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
        />
      </div>

      <div className="overflow-x-auto pb-4 -mx-4 px-4">
        <div className="inline-flex gap-4 min-w-full lg:min-w-0 lg:grid lg:grid-cols-4 xl:grid-cols-8">
          
          {/* Ores Columns */}
          {RARITY_ORDER.map((rarity) => {
            const oresInRarity = groupedOres[rarity] || [];
            if (searchQuery && oresInRarity.length === 0) return null; // Hide empty columns when searching

            const processedOres = getGroupedOres(oresInRarity);
            
            return (
              <div key={rarity} className="w-64 lg:w-auto flex-shrink-0 flex flex-col">
                {/* Column Header */}
                <div className={`p-3 text-center font-bold text-sm uppercase tracking-wider border-t-4 rounded-t-lg ${RarityStyles[rarity].replace('bg-', 'border-').split(' ')[2]} bg-white dark:bg-slate-800 shadow-sm mb-2`}>
                  {rarity}
                </div>

                {/* Ore List */}
                <div className="flex-1 space-y-2">
                  {processedOres.map((group) => (
                    <div key={group.names.join('')} className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 text-sm hover:shadow-md transition-shadow">
                      
                      {/* Names List - Stacked for clarity */}
                      <div className="flex flex-col gap-1.5 mb-2.5">
                        {group.names.map((name, idx) => (
                          <div 
                            key={idx} 
                            className={`
                              font-bold text-slate-800 dark:text-white leading-tight
                              ${group.names.length > 1 && idx !== group.names.length - 1 ? 'pb-1.5 border-b border-dashed border-slate-200 dark:border-slate-700' : ''}
                            `}
                          >
                            {name}
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-start text-xs gap-2">
                        <span className="text-slate-500 dark:text-slate-400 italic flex-1">{group.buffType}</span>
                      </div>

                      <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs font-mono">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-slate-400 uppercase">Min Kg</span>
                          <span className="font-semibold text-slate-600 dark:text-slate-300">{group.minKg}</span>
                        </div>
                        <div className="flex flex-col text-right">
                          <span className="text-[10px] text-slate-400 uppercase">Max Buff</span>
                          <span className="font-bold text-xmas-green dark:text-green-400">{group.maxBuff || "?"}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Modifiers Column - Only show if matches or no search */}
          {(!searchQuery || MODIFIERS.some(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()) || m.buffType.toLowerCase().includes(searchQuery.toLowerCase()))) && (
            <div className="w-64 lg:w-auto flex-shrink-0 flex flex-col">
                <div className="p-3 text-center font-bold text-sm uppercase tracking-wider border-t-4 rounded-t-lg border-emerald-500 bg-white dark:bg-slate-800 shadow-sm mb-2">
                  Modifiers
                </div>
                <div className="flex-1 space-y-2">
                  {MODIFIERS.filter(m => !searchQuery || m.name.toLowerCase().includes(searchQuery.toLowerCase()) || m.buffType.toLowerCase().includes(searchQuery.toLowerCase())).map((mod) => (
                    <div key={mod.name} className="bg-emerald-50 dark:bg-emerald-900/10 p-3 rounded-lg shadow-sm border border-emerald-100 dark:border-emerald-800 text-sm hover:shadow-md transition-shadow">
                      <div className="font-bold text-emerald-900 dark:text-emerald-300 mb-1">{mod.name}</div>
                      <div className="text-xs text-emerald-700 dark:text-emerald-400 mb-2">{mod.buffType}</div>
                      <div className="pt-2 border-t border-emerald-100 dark:border-emerald-800/30 flex justify-between items-center text-xs">
                          <span className="text-[10px] text-emerald-600/70 uppercase">Sell Value</span>
                          <span className="font-bold text-emerald-700 dark:text-emerald-300">{mod.sellValueMult}</span>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default BuffReference;
