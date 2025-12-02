import React from 'react';
import { Build, Rarity } from '../types';
import { ORE_DATABASE } from '../constants';
import { X, Check, Square, Package, Hammer } from 'lucide-react';

interface BuildDetailModalProps {
  build: Build | null;
  ownedOres: Record<string, boolean>;
  onToggleOre: (oreName: string) => void;
  onClose: () => void;
}

const RarityTags: Record<Rarity, string> = {
  Exotic: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  Mythic: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
  Legendary: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
  Epic: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  Rare: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
  Uncommon: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  Common: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
};

const BuildDetailModal: React.FC<BuildDetailModalProps> = ({ build, ownedOres, onToggleOre, onClose }) => {
  if (!build) return null;

  const totalRequired = build.museumOres.length;
  const totalOwned = build.museumOres.filter(oreName => ownedOres[oreName]).length;
  const progressPercent = Math.round((totalOwned / totalRequired) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
      <div 
        className="absolute inset-0" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden animate-slideUp">
        
        {/* Header */}
        <div className="relative bg-xmas-red text-white p-6 md:p-8 flex justify-between items-start shrink-0">
          <div>
             <h2 className="font-holiday text-3xl md:text-5xl font-bold mb-1">
                 {build.name}
            </h2>
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
                {build.category}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto p-6 md:p-8 bg-slate-50 dark:bg-slate-950">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Equipment & Stats */}
            <div className="lg:col-span-4 space-y-6">
               {/* Equipment Card */}
               <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <Hammer className="text-xmas-red" size={20} />
                    <h3 className="font-holiday text-2xl font-bold text-slate-900 dark:text-white">Equipment</h3>
                  </div>

                  <div className="space-y-5">
                    {build.equipment.map((slot, idx) => (
                      <div key={idx}>
                        <div className="text-xs uppercase font-bold text-slate-400 mb-1 tracking-wider">
                            {slot.slot}
                        </div>
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 p-2 rounded border border-slate-100 dark:border-slate-700">
                            {slot.items.join(' / ')}
                        </div>
                      </div>
                    ))}
                  </div>
               </div>

               {/* Notes Card */}
               <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-6 border border-amber-100 dark:border-amber-900/30">
                  <div className="text-xs font-bold uppercase text-amber-800 dark:text-amber-500 mb-2">Modifier</div>
                  <div className="font-bold text-lg text-amber-900 dark:text-amber-200 mb-4">{build.museumModifier}</div>
                  
                  {build.notes && (
                      <p className="text-sm text-amber-700 dark:text-amber-400 italic">
                        "{build.notes}"
                      </p>
                  )}
               </div>
            </div>

            {/* Right: Ore Requirements */}
            <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                 <div className="flex items-center gap-3">
                    <Package className="text-xmas-green" size={20} />
                    <h3 className="font-holiday text-2xl font-bold text-slate-900 dark:text-white">Required Ores</h3>
                 </div>
                 <div className="text-right">
                    <span className="text-2xl font-bold text-xmas-green">{progressPercent}%</span>
                    <span className="block text-xs text-slate-400 uppercase tracking-wide">Collected</span>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {build.museumOres.map((oreName, idx) => {
                  const data = ORE_DATABASE[oreName] || { 
                    name: oreName, 
                    rarity: 'Common' as Rarity, 
                    minKg: 0,
                    buffType: ''
                  };
                  const isOwned = !!ownedOres[oreName];
                  
                  return (
                    <div 
                      key={idx} 
                      onClick={() => onToggleOre(oreName)}
                      className={`
                        cursor-pointer flex items-center justify-between p-3 rounded-lg border transition-all duration-200 group
                        ${isOwned 
                            ? 'bg-green-50 border-green-200 dark:bg-green-900/10 dark:border-green-800' 
                            : 'bg-slate-50 border-slate-100 dark:bg-slate-800 dark:border-slate-700 hover:border-xmas-red/50'
                        }
                      `}
                    >
                       <div className="flex items-center gap-3">
                          <div className={isOwned ? 'text-xmas-green' : 'text-slate-300 dark:text-slate-600 group-hover:text-slate-400'}>
                              {isOwned ? <Check size={20} /> : <Square size={20} />}
                          </div>
                          <div>
                              <div className={`font-semibold text-sm ${isOwned ? 'text-slate-500 line-through' : 'text-slate-900 dark:text-slate-200'}`}>
                                  {data.name}
                              </div>
                              <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-full ${RarityTags[data.rarity]}`}>
                                {data.rarity}
                              </span>
                          </div>
                       </div>
                       
                       {data.minKg > 0 && (
                          <div className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                              {data.minKg}kg
                          </div>
                       )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BuildDetailModal;