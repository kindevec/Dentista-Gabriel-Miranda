import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
  variant = 'light',
}) => {
  const iconSizes = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px] sm:text-[11px]',
    lg: 'text-xs sm:text-sm',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Luxury Dental Crest / Monogram Icon */}
      <div
        className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#005A9C] via-[#0A2540] to-[#0084DE] p-2 shadow-md shadow-[#005A9C]/20 border border-cyan-400/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-cyan-400/30 ${iconSizes[size]}`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="crestTooth" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E0F2FE" />
            </linearGradient>
            <linearGradient id="crestCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00BFFF" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>

          {/* Tooth Shape Silhouette */}
          <path
            d="M 30 25 C 30 15 42 12 50 12 C 58 12 70 15 70 25 C 74 34 72 48 68 56 C 64 64 60 84 55 84 C 52 84 51 72 49 72 C 47 72 46 84 43 84 C 38 84 34 64 30 56 C 26 48 26 34 30 25 Z"
            fill="url(#crestTooth)"
            stroke="#00BFFF"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Dynamic Smile Arc Contour */}
          <path
            d="M 33 46 Q 50 62 67 46"
            stroke="url(#crestCyan)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Sparkle High Aesthetic Star */}
          <path
            d="M 68 18 L 70 12 L 72 18 L 78 20 L 72 22 L 70 28 L 68 22 L 62 20 Z"
            fill="#00BFFF"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={`font-black tracking-tight ${titleSizes[size]} ${
              variant === 'dark' ? 'text-white' : 'text-[#005A9C]'
            } flex items-center gap-1.5`}
          >
            Dr. Gabriel <span className="text-[#00BFFF]">Miranda</span>
          </span>
          <span
            className={`font-bold tracking-wider uppercase ${subtitleSizes[size]} ${
              variant === 'dark' ? 'text-cyan-200' : 'text-slate-500'
            }`}
          >
            Odontología Especializada
          </span>
        </div>
      )}
    </div>
  );
};
