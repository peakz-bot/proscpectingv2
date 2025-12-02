import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Simple Tree */}
        <path 
          d="M50 10 L75 50 H60 L85 90 H15 L40 50 H25 L50 10Z" 
          fill="#165b33" 
          stroke="#0f3d22"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Star */}
        <path 
            d="M50 5 L53 13 H62 L55 19 L58 27 L50 22 L42 27 L45 19 L38 13 H47 L50 5Z" 
            fill="#fbbf24" 
            stroke="#b45309"
            strokeWidth="1"
        />

        {/* Ornaments */}
        <circle cx="40" cy="40" r="3" fill="#d42426" />
        <circle cx="60" cy="65" r="3" fill="#d42426" />
        <circle cx="45" cy="80" r="3" fill="#d42426" />
        <circle cx="35" cy="60" r="3" fill="#fbbf24" />
        <circle cx="65" cy="40" r="3" fill="#fbbf24" />

      </svg>
    </div>
  );
};

export default Logo;