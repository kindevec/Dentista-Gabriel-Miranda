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
  neumorphic = false,
}) => {
  const iconSizes = {
    sm: 'w-10 h-10 sm:w-11 sm:h-11',
    md: 'w-13 h-13 sm:w-15 sm:h-15 lg:w-16 lg:h-16',
    lg: 'w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22',
  };

  const titleSizes = {
    sm: 'text-base sm:text-lg tracking-[0.18em]',
    md: 'text-lg sm:text-xl lg:text-[1.4rem] tracking-[0.2em]',
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
      {/* Miranda Dental Studio Official 3D Gold Wire Emblem (Pure Gold Threads, Transparent) */}
      <div
        className={`relative flex items-center justify-center transition-all duration-300 group-hover:scale-105 shrink-0 ${iconSizes[size]} ${
          neumorphic
            ? 'p-2 sm:p-2.5 rounded-2xl bg-gradient-to-br from-[#FFFFFF] via-[#FAF9F5] to-[#F3EDE1] shadow-[-3px_-3px_9px_rgba(255,255,255,0.95),4px_4px_12px_rgba(180,140,50,0.18)] border border-[#D4AF37]/40 ring-1 ring-white/80'
            : ''
        }`}
      >
        <img
          src="/logo-miranda.png"
          alt="Miranda Dental Studio Emblem"
          className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_2px_5px_rgba(212,175,55,0.25)]"
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
