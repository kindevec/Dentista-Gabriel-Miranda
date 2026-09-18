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
      {/* Miranda Dental Studio Official 3D Gold Wire Emblem (Pure Gold Threads, Transparent) */}
      <div
        className={`relative flex items-center justify-center transition-all duration-300 group-hover:scale-105 shrink-0 ${iconSizes[size]}`}
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
