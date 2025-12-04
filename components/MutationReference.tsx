
import React, { useState } from 'react';
import { MUTATION_RECIPES, MUTATION_STATS } from '../constants';
import { Rarity } from '../types';
import { Calculator, Beaker } from 'lucide-react';

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

const MutationReference: React.FC = () => {
  const [oreAmount, setOreAmount] = useState<string>('');

  const calculateTotalChance = (targetType: string) => {
    if (!oreAmount) return '-';
    const amount = parseFloat(oreAmount);
    if (isNaN(amount) || amount <= 0) return '-';

    // Hierarchy of rarities (Highest to Lowest priority)
    const hierarchy = ['Prismatic', 'Diamond', 'Gold', 'Silver'];
    
    // Parse base probabilities from constants
    const baseProbs = MUTATION_STATS.map(s => ({
       type: s.type,
       val: parseFloat(s.chance.replace('%', '')) / 100
    }));

    const currentIndex = hierarchy.indexOf(targetType);

    // Handle 'None' case (Probability of failing all checks)
    if (targetType === 'None') {
        const silverIndex = hierarchy.indexOf('Silver');
        let cumulativeAll = 0;
        for(let i=0; i<=silverIndex; i++) {
             const stat = baseProbs.find(b => b.type === hierarchy[i]);
             if(stat) cumulativeAll += stat.val;
        }
        // Chance of NOT getting any of the valid tiers in one roll
        const pFailOne = 1 - cumulativeAll;
        // Chance of failing ALL rolls
        const pFailAll = Math.pow(pFailOne, amount);
        
        return (pFailAll * 100).toLocaleString(undefined, { maximumFractionDigits: 2 }) + '%';
    }

    if (currentIndex === -1) return '-';

    // Calculate Cumulative Probability for THIS tier and BETTER tiers
    let cumulativeThisAndBetter = 0;
    for (let i = 0; i <= currentIndex; i++) {
        const stat = baseProbs.find(b => b.type === hierarchy[i]);
        if (stat) cumulativeThisAndBetter += stat.val;
    }

    // Calculate Cumulative Probability for ONLY BETTER tiers
    let cumulativeBetter = 0;
    for (let i = 0; i < currentIndex; i++) {
        const stat = baseProbs.find(b => b.type === hierarchy[i]);
        if (stat) cumulativeBetter += stat.val;
    }

    // Probability of getting "At least one item of [This Tier or Better]"
    const pAtLeastThis = 1 - Math.pow(1 - cumulativeThisAndBetter, amount);

    // Probability of getting "At least one item of [Better Tier]"
    const pAtLeastBetter = 1 - Math.pow(1 - cumulativeBetter, amount);

    // The chance that the BEST item you get is exactly THIS tier
    // = P(At least one This+) - P(At least one Better+)
    const specificProb = pAtLeastThis - pAtLeastBetter;

    return (specificProb * 100).toLocaleString(undefined, { maximumFractionDigits: 4 }) + '%';
  };

  return (
    <div className="animate-fadeIn pb-20 max-w-6xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="font-holiday text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Mutation Forge
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
           Visit Frozen Peak &bull; Hold equipment to mutate
        </p>
      </div>

      {/* Stats & Calculator Card */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
         <div className="bg-slate-50 dark:bg-slate-800/50 p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
               <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
                 <Calculator size={24} />
               </div>
               <div>
                 <h3 className="font-holiday text-2xl font-bold text-slate-800 dark:text-white">
                   Probability Calculator
                 </h3>
                 <p className="text-sm text-slate-500 dark:text-slate-400">Enter ore quantity to see chance of best outcome</p>
               </div>
            </div>
            
            {/* Calculator Input */}
            <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
               <label className="text-sm font-bold text-slate-500 dark:text-slate-400 pl-2">Ore Amount:</label>
               <input 
                  type="number" 
                  value={oreAmount}
                  onChange={(e) => setOreAmount(e.target.value)}
                  placeholder="e.g. 50"
                  className="bg-transparent border-none outline-none text-slate-900 dark:text-white font-mono font-bold w-32 placeholder:font-normal"
               />
            </div>
         </div>
         
         <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
               <thead className="text-xs text-slate-500 uppercase bg-slate-50/50 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-700">
                  <tr>
                     <th className="px-6 py-4">Mutation Type</th>
                     <th className="px-6 py-4">Base Chance (1 Ore)</th>
                     <th className="px-6 py-4">Multiplier</th>
                     <th className="px-6 py-4 text-right text-cyan-600 dark:text-cyan-400">Total Chance</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                  {MUTATION_STATS.map((stat, idx) => (
                     <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-700/20 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-800 dark:text-slate-200">{stat.type}</td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{stat.chance}</td>
                        <td className="px-6 py-4 font-mono text-orange-600 dark:text-orange-400 font-bold">{stat.multiplier}</td>
                        <td className="px-6 py-4 text-right font-mono font-bold text-slate-900 dark:text-white text-lg">
                           {calculateTotalChance(stat.type)}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      {/* Recipes Container */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100 dark:border-slate-700">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                <Beaker size={24} />
            </div>
            <h3 className="font-holiday text-2xl font-bold text-slate-800 dark:text-white">
                Equipment Recipes
            </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RARITY_ORDER.map((rarity) => {
                const recipes = MUTATION_RECIPES[rarity];
                if (!recipes || recipes.length === 0) return null;

                return (
                <div key={rarity} className="bg-slate-50 dark:bg-slate-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                    <div className={`px-4 py-3 font-bold uppercase tracking-wider text-xs border-b ${RarityStyles[rarity]}`}>
                        {rarity}
                    </div>
                    <div className="divide-y divide-slate-200/50 dark:divide-slate-700/50">
                        {recipes.map((recipe, idx) => (
                            <div key={idx} className="flex justify-between items-center px-4 py-3 text-sm hover:bg-white dark:hover:bg-slate-800 transition-colors">
                                <span className="font-semibold text-slate-800 dark:text-slate-200">{recipe.item}</span>
                                <span className="text-slate-500 dark:text-slate-400 text-xs ml-2 text-right bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded">
                                    {recipe.mineral}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                )
            })}
        </div>
      </div>

    </div>
  );
};

export default MutationReference;
