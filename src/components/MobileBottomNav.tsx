import React from 'react';
import { Home, Sparkles, Star, MessageSquare, PhoneCall } from 'lucide-react';
import { createWhatsAppLink, EMERGENCY_WA_MESSAGE } from '../data/clinicData';

interface MobileBottomNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenEmergency: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  setActiveSection,
  onOpenEmergency,
}) => {
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-2xl border-t border-cyan-200/80 shadow-[0_-4px_25px_rgba(0,90,156,0.14)] px-2 sm:px-6 pt-1.5 pb-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] transition-all duration-300">
      <div className="w-full max-w-2xl mx-auto grid grid-cols-5 items-center justify-items-center relative">
        
        {/* 1. Inicio */}
        <button
          onClick={() => handleNavClick('inicio')}
          className={`w-full flex flex-col items-center justify-center min-h-[46px] py-1 px-1 rounded-2xl transition-all duration-200 relative cursor-pointer ${
            activeSection === 'inicio'
              ? 'text-[#005A9C] font-bold bg-cyan-50/90 shadow-2xs'
              : 'text-slate-500 hover:text-[#005A9C]'
          }`}
        >
          {activeSection === 'inicio' && (
            <span className="absolute -top-1.5 w-6 h-1 rounded-full bg-gradient-to-r from-[#005A9C] to-[#00BFFF]" />
          )}
          <Home className={`w-5 h-5 transition-transform duration-200 ${activeSection === 'inicio' ? 'scale-110 text-[#00BFFF]' : ''}`} />
          <span className="text-[10px] leading-tight mt-0.5 truncate max-w-full">
            Inicio
          </span>
        </button>

        {/* 2. Especialidades */}
        <button
          onClick={() => handleNavClick('especialidades')}
          className={`w-full flex flex-col items-center justify-center min-h-[46px] py-1 px-1 rounded-2xl transition-all duration-200 relative cursor-pointer ${
            activeSection === 'especialidades'
              ? 'text-[#005A9C] font-bold bg-cyan-50/90 shadow-2xs'
              : 'text-slate-500 hover:text-[#005A9C]'
          }`}
        >
          {activeSection === 'especialidades' && (
            <span className="absolute -top-1.5 w-6 h-1 rounded-full bg-gradient-to-r from-[#005A9C] to-[#00BFFF]" />
          )}
          <Sparkles className={`w-5 h-5 transition-transform duration-200 ${activeSection === 'especialidades' ? 'scale-110 text-[#00BFFF]' : ''}`} />
          <span className="text-[10px] leading-tight mt-0.5 truncate max-w-full">
            Servicios
          </span>
        </button>

        {/* 3. URGENCIAS DENTALES (Boton central elevado con halo) */}
        <div className="w-full flex flex-col items-center justify-center -translate-y-3">
          <a
            href={createWhatsAppLink(EMERGENCY_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onOpenEmergency}
            className="group flex flex-col items-center justify-center cursor-pointer"
            title="Atención Dental de Urgencia 24/7"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-red-600 via-rose-500 to-red-600 border-2 border-white shadow-lg shadow-red-500/40 flex items-center justify-center text-white active:scale-95 group-hover:scale-105 transition-all duration-200 relative animate-halo-emergency">
              <PhoneCall className="w-5 h-5 text-white" />
              <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-white rounded-full animate-pulse" />
            </div>
            <span className="text-[9px] font-black tracking-wider text-red-600 uppercase mt-0.5">
              Urgencias
            </span>
          </a>
        </div>

        {/* 4. Casos Reales */}
        <button
          onClick={() => handleNavClick('casos-reales')}
          className={`w-full flex flex-col items-center justify-center min-h-[46px] py-1 px-1 rounded-2xl transition-all duration-200 relative cursor-pointer ${
            activeSection === 'casos-reales'
              ? 'text-[#005A9C] font-bold bg-cyan-50/90 shadow-2xs'
              : 'text-slate-500 hover:text-[#005A9C]'
          }`}
        >
          {activeSection === 'casos-reales' && (
            <span className="absolute -top-1.5 w-6 h-1 rounded-full bg-gradient-to-r from-[#005A9C] to-[#00BFFF]" />
          )}
          <Star className={`w-5 h-5 transition-transform duration-200 ${activeSection === 'casos-reales' ? 'scale-110 text-[#00BFFF]' : ''}`} />
          <span className="text-[10px] leading-tight mt-0.5 truncate max-w-full">
            Casos
          </span>
        </button>

        {/* 5. Contacto & Agendamiento */}
        <button
          onClick={() => handleNavClick('contacto')}
          className={`w-full flex flex-col items-center justify-center min-h-[46px] py-1 px-1 rounded-2xl transition-all duration-200 relative cursor-pointer ${
            activeSection === 'contacto'
              ? 'text-[#005A9C] font-bold bg-cyan-50/90 shadow-2xs'
              : 'text-slate-500 hover:text-[#005A9C]'
          }`}
        >
          {activeSection === 'contacto' && (
            <span className="absolute -top-1.5 w-6 h-1 rounded-full bg-gradient-to-r from-[#005A9C] to-[#00BFFF]" />
          )}
          <MessageSquare className={`w-5 h-5 transition-transform duration-200 ${activeSection === 'contacto' ? 'scale-110 text-[#00BFFF]' : ''}`} />
          <span className="text-[10px] leading-tight mt-0.5 truncate max-w-full">
            Contacto
          </span>
        </button>

      </div>
    </nav>
  );
};
