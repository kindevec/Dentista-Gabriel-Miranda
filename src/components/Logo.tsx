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
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-10 h-10 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
  };

  const titleSizes = {
    sm: 'text-sm sm:text-base tracking-[0.18em]',
    md: 'text-base sm:text-lg lg:text-xl tracking-[0.2em]',
    lg: 'text-xl sm:text-2xl lg:text-3xl tracking-[0.22em]',
  };

  const subtitleSizes = {
    sm: 'text-[8px] sm:text-[9px] tracking-[0.15em]',
    md: 'text-[9px] sm:text-[10px] tracking-[0.18em]',
    lg: 'text-[11px] sm:text-xs tracking-[0.2em]',
  };

  const specialtySizes = {
    sm: 'text-[7.5px] tracking-[0.05em]',
    md: 'text-[8.5px] sm:text-[9.5px] tracking-[0.08em]',
    lg: 'text-[10px] sm:text-[11px] tracking-[0.1em]',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 select-none group cursor-pointer ${className}`}>
      {/* Miranda Dental Studio Official Luxury Gold Monogram */}
      <div
        className={`relative flex items-center justify-center rounded-full bg-gradient-to-br from-[#1A1A1A] via-[#0D0D0D] to-[#000000] p-1.5 shadow-md shadow-amber-950/20 border border-[#D4AF37]/50 transition-all duration-300 group-hover:scale-105 group-hover:border-[#F3E5AB] ${iconSizes[size]}`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F3E5AB" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#AA7C11" />
              <stop offset="100%" stopColor="#E5C378" />
            </linearGradient>
            <linearGradient id="goldRing" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#997328" />
              <stop offset="50%" stopColor="#F3E5AB" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>

          {/* Outer Fine Gold Circle */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="url(#goldRing)"
            strokeWidth="3.2"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#goldMetallic)"
            strokeWidth="1"
            strokeOpacity="0.6"
          />

          {/* Stylized Intertwined 'M' Monogram (Miranda Dental Studio) */}
          <path
            d="M 28 68 L 28 32 L 50 56 L 72 32 L 72 68"
            stroke="url(#goldMetallic)"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner Interlaced Harmonic Arch */}
          <path
            d="M 36 68 C 36 46 64 46 64 68"
            stroke="url(#goldRing)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Sparkle Diamond Accent at Center Crest */}
          <circle
            cx="50"
            cy="24"
            r="2.5"
            fill="url(#goldMetallic)"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          {/* MIRANDA */}
          <span
            className={`font-black uppercase font-serif ${titleSizes[size]} ${
              variant === 'dark' ? 'text-[#F3E5AB]' : 'text-[#0D0D0D]'
            } flex items-center gap-1 group-hover:text-[#D4AF37] transition-colors`}
          >
            MIRANDA
          </span>

          {/* DENTAL STUDIO */}
          <span
            className={`font-extrabold uppercase font-sans ${subtitleSizes[size]} text-[#D4AF37]`}
          >
            DENTAL STUDIO
          </span>

          {/* Rehabilitación Oral y Estética */}
          <span
            className={`font-medium italic ${specialtySizes[size]} ${
              variant === 'dark' ? 'text-amber-100/70' : 'text-stone-500'
            }`}
          >
            Rehabilitación Oral y Estética
          </span>
        </div>
      )}
    </div>
  );
};
