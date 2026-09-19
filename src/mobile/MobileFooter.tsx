import React from 'react';
import { Logo } from '../components/Logo';
import { DOCTOR_NAME, DOCTOR_SENESCYT } from '../data/clinicData';

export const MobileFooter: React.FC = () => {
  const handleScroll = (id: string) => {
    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -55;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0D0D0D] text-white pt-10 pb-[calc(6.5rem+env(safe-area-inset-bottom,0px))] px-4 border-t border-[#D4AF37]/25 text-center">
      <div className="max-w-sm mx-auto flex flex-col items-center">
        {/* Brand Emblem */}
        <Logo variant="dark" size="sm" showText={true} />

        <p className="text-xs text-stone-400 mt-3 max-w-xs leading-relaxed">
          Odontología especializada de alta estética y rehabilitación oral con el {DOCTOR_NAME}.
        </p>

        <div className="w-16 h-px bg-[#D4AF37]/30 my-4" />

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-stone-300">
          <button
            type="button"
            onClick={() => handleScroll('inicio')}
            className="hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Inicio
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => handleScroll('servicios')}
            className="hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Servicios
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => handleScroll('especialidades')}
            className="hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Especialidades
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => handleScroll('nosotros')}
            className="hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Dr. Miranda
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => handleScroll('contacto')}
            className="hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Contacto
          </button>
        </div>

        <div className="w-16 h-px bg-[#D4AF37]/30 my-4" />

        {/* Professional Registry & Legal */}
        <div className="space-y-1.5 text-[11px] text-stone-500">
          <p>Registro Profesional SENESCYT: {DOCTOR_SENESCYT}</p>
          <p>© {new Date().getFullYear()} Miranda Dental Studio. Todos los derechos reservados.</p>
          <p className="text-xs text-stone-400 pt-1">
            Desarrollado por <strong className="text-[#D4AF37] font-semibold">Kindev SAS</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};
