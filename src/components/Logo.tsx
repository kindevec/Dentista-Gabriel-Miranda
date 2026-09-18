import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  neumorphic?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
  variant = 'light',
  neumorphic: _neumorphic = false,
}) => {
  const iconSizes = {
    sm: 'w-11 h-11 sm:w-12 sm:h-12',
    md: 'w-14 h-14 sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px]',
    lg: 'w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28',
  };

  const titleSizes = {
    sm: 'text-base sm:text-lg tracking-[0.18em]',
    md: 'text-lg sm:text-xl lg:text-[1.35rem] tracking-[0.2em]',
    lg: 'text-2xl sm:text-3xl lg:text-4xl tracking-[0.22em]',
  };

  const subtitleSizes = {
    sm: 'text-[9px] sm:text-[10px] tracking-[0.18em]',
    md: 'text-[10.5px] sm:text-[11.5px] lg:text-xs tracking-[0.2em]',
    lg: 'text-xs sm:text-sm tracking-[0.22em]',
  };

  const specialtySizes = {
    sm: 'text-[8.5px] sm:text-[9px] tracking-[0.06em]',
    md: 'text-[9.5px] sm:text-[10.5px] lg:text-[11px] tracking-[0.08em]',
    lg: 'text-[11px] sm:text-xs tracking-[0.1em]',
  };

  return (
    <div className={`inline-flex items-center gap-3 sm:gap-4 select-none group cursor-pointer ${className}`}>
      {/* Miranda Dental Studio Official Circular Emblem (Sin marcos ni aros adicionales) */}
      <div
        className={`relative flex items-center justify-center transition-all duration-300 group-hover:scale-105 shrink-0 rounded-full aspect-square ${iconSizes[size]}`}
      >
        <img
          src="/logo-miranda.webp"
          alt="Miranda Dental Studio Emblem"
          className="w-full h-full object-contain rounded-full select-none pointer-events-none drop-shadow-[0_3px_8px_rgba(212,175,55,0.28)]"
          loading="eager"
          decoding="async"
        />
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
