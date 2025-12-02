import React from 'react';
import { Build } from '../types';
import { ArrowRight, Star } from 'lucide-react';

interface BuildCardProps {
  build: Build;
  onClick: (build: Build) => void;
}

const BuildCard: React.FC<BuildCardProps> = ({ build, onClick }) => {
  return (
    <div 
      onClick={() => onClick(build)}
      className="group relative h-full w-full cursor-pointer transition-all duration-300 hover:-translate-y-1"
    >
      {/* Card Container */}
      <div className="relative h-full flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-soft hover:shadow-xl border border-slate-100 dark:border-slate-700 transition-shadow">
        
        {/* Decorative Top Border */}
        <div className="h-2 w-full bg-gradient-to-r from-xmas-green via-xmas-red to-xmas-green"></div>

        <div className="p-6 flex flex-col h-full">
           
           {/* Header */}
           <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-xmas-green dark:text-green-400 bg-green-50 dark:bg-green-900/30 rounded-full">
                {build.category}
              </span>
              <div className="text-xmas-gold opacity-50 group-hover:opacity-100 transition-opacity">
                <Star size={20} fill="currentColor" />
              </div>
           </div>

           {/* Title */}
           <h3 className="font-holiday text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-xmas-red dark:group-hover:text-red-400 transition-colors">
             {build.name}
           </h3>

           {/* Description */}
           <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
             {build.description}
           </p>

           {/* Footer Info */}
           <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between mt-auto">
              <div className="flex flex-col">
                 <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Modifier</span>
                 <span className="text-xs font-semibold text-xmas-red dark:text-red-400">{build.museumModifier}</span>
              </div>
              
              <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-xmas-green group-hover:text-white transition-all">
                 <ArrowRight size={16} />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BuildCard;